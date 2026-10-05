import { Link } from "@tanstack/react-router";
import { Loader2, MessageCircle, Mic, MicOff, PhoneOff, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type VapiClient from "@vapi-ai/web";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";
import { getVapiConfig, type VapiConfig } from "@/lib/vapi";
import { announceWidgetOpen, onOtherWidgetOpen } from "@/lib/widget-bus";
import { cn } from "@/lib/utils";

/** Server-side cap on session length (already enforced on the Vapi assistant); mirrored here for the UI. */
const MAX_CALL_SECONDS = 120;
/** How long we wait for `call-start` before giving up and showing the connection-failed screen. */
const CONNECT_TIMEOUT_MS = 20_000;

type Phase = "closed" | "intro" | "connecting" | "active" | "ended" | "mic-denied" | "call-failed";
type EndReason = "timeout" | "manual" | "dropped";

const ENDED_COPY: Record<EndReason, { heading: string; body: string }> = {
  timeout: {
    heading: "That's a wrap for this session ⏱️",
    body: "Want to keep talking? Book a free discovery call or message us on WhatsApp.",
  },
  manual: {
    heading: "Thanks for calling!",
    body: "Want to continue the conversation? Book a free discovery call or message us on WhatsApp.",
  },
  dropped: {
    heading: "Hmm, the call dropped.",
    body: "Want to keep talking? Book a free discovery call or message us on WhatsApp.",
  },
};

const voiceWa = waLink(
  "Hi OsvaraX, I was just talking to your AI voice assistant and wanted to continue the conversation here.",
);

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/** Turns whatever shape an SDK/browser error comes in as into a short, matchable string. */
function extractErrorText(err: unknown): string {
  if (!err) return "Unknown error";
  if (typeof err === "string") return err;
  if (err instanceof Error) return err.message;
  if (typeof err === "object") {
    const record = err as Record<string, unknown>;
    for (const value of [record["error"], record["message"], record["errorMsg"], record["name"]]) {
      if (typeof value === "string" && value) return value;
      if (value instanceof Error) return value.message;
    }
  }
  try {
    return JSON.stringify(err);
  } catch {
    return String(err);
  }
}

export function VoiceWidget() {
  const config = getVapiConfig();
  if (!config) return null;
  return <VoiceWidgetPanel config={config} />;
}

function VoiceWidgetPanel({ config }: { config: VapiConfig }) {
  const [phase, setPhase] = useState<Phase>("closed");
  const [endReason, setEndReason] = useState<EndReason>("manual");
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [assistantSpeaking, setAssistantSpeaking] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);

  const phaseRef = useRef<Phase>("closed");
  const vapiRef = useRef<VapiClient | null>(null);
  const callStartedAtRef = useRef<number | null>(null);
  const manualEndRef = useRef(false);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const connectTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  const stopTicking = useCallback(() => {
    if (tickRef.current) {
      clearInterval(tickRef.current);
      tickRef.current = null;
    }
  }, []);

  const startTicking = useCallback(() => {
    stopTicking();
    tickRef.current = setInterval(() => {
      if (!callStartedAtRef.current) return;
      const secs = Math.floor((Date.now() - callStartedAtRef.current) / 1000);
      setElapsedSeconds(secs);
      if (secs >= MAX_CALL_SECONDS) {
        stopTicking();
        vapiRef.current?.stop().catch(() => {});
      }
    }, 500);
  }, [stopTicking]);

  const clearConnectTimeout = useCallback(() => {
    if (connectTimeoutRef.current) {
      clearTimeout(connectTimeoutRef.current);
      connectTimeoutRef.current = null;
    }
  }, []);

  const handleStartFailure = useCallback(
    (err: unknown) => {
      clearConnectTimeout();
      console.error("[VoiceWidget] Call failed to start:", err);
      const text = extractErrorText(err).toLowerCase();
      const isPermissionIssue =
        text.includes("permission") || text.includes("denied") || text.includes("notallowederror");
      setPhase(isPermissionIssue ? "mic-denied" : "call-failed");
    },
    [clearConnectTimeout],
  );

  const attachListeners = useCallback(
    (vapi: VapiClient) => {
      vapi.on("call-start", () => {
        clearConnectTimeout();
        callStartedAtRef.current = Date.now();
        setElapsedSeconds(0);
        setPhase("active");
        startTicking();
      });

      vapi.on("call-end", () => {
        stopTicking();
        const startedAt = callStartedAtRef.current;
        const elapsed = startedAt ? Math.round((Date.now() - startedAt) / 1000) : 0;
        callStartedAtRef.current = null;

        const wasManual = manualEndRef.current;
        const wasActive = phaseRef.current === "active";
        manualEndRef.current = false;

        if (wasManual) {
          setEndReason("manual");
          setPhase("ended");
        } else if (wasActive) {
          setEndReason(elapsed >= MAX_CALL_SECONDS - 5 ? "timeout" : "dropped");
          setPhase("ended");
        }
        // Otherwise call-end fired without the call ever reaching "active" (e.g. torn
        // down mid-connect), the connecting-timeout / start-failure paths own that case.
      });

      vapi.on("speech-start", () => setAssistantSpeaking(true));
      vapi.on("speech-end", () => setAssistantSpeaking(false));
      vapi.on("volume-level", (level) => setVolumeLevel(level));

      vapi.on("call-start-failed", (event) => handleStartFailure(event.error));

      vapi.on("error", (err) => {
        // Ignore non-fatal mid-call errors (e.g. optional audio-processing hiccups);
        // only treat this as a hard failure while we're still trying to connect.
        if (phaseRef.current === "connecting") handleStartFailure(err);
        else console.error("[VoiceWidget] Vapi error", err);
      });
    },
    [clearConnectTimeout, handleStartFailure, startTicking, stopTicking],
  );

  const ensureVapi = useCallback(async (): Promise<VapiClient> => {
    if (vapiRef.current) return vapiRef.current;
    const { default: Vapi } = await import("@vapi-ai/web");
    const instance = new Vapi(config.publicKey);
    attachListeners(instance);
    vapiRef.current = instance;
    return instance;
  }, [attachListeners, config.publicKey]);

  useEffect(() => {
    return () => {
      stopTicking();
      clearConnectTimeout();
      vapiRef.current?.stop().catch(() => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- unmount cleanup only
  }, []);

  // Close this panel when the chat widget opens, but never mid-call.
  useEffect(
    () =>
      onOtherWidgetOpen("voice", () => {
        setPhase((current) =>
          current === "active" || current === "connecting" ? current : "closed",
        );
      }),
    [],
  );

  useEffect(() => {
    if (phase !== "closed") announceWidgetOpen("voice");
  }, [phase]);

  async function handleStartCall() {
    setPhase("connecting");
    manualEndRef.current = false;
    try {
      const vapi = await ensureVapi();
      connectTimeoutRef.current = setTimeout(() => {
        if (phaseRef.current === "connecting") {
          vapi.stop().catch(() => {});
          handleStartFailure("Connection timed out.");
        }
      }, CONNECT_TIMEOUT_MS);
      await vapi.start(config.assistantId);
    } catch (err) {
      handleStartFailure(err);
    }
  }

  async function handleEndCall() {
    manualEndRef.current = true;
    stopTicking();
    try {
      await vapiRef.current?.stop();
    } catch {
      // fall through to the fallback below regardless
    } finally {
      if (phaseRef.current !== "ended") {
        setEndReason("manual");
        setPhase("ended");
      }
      manualEndRef.current = false;
    }
  }

  function handleToggleMute() {
    const vapi = vapiRef.current;
    if (!vapi) return;
    const next = !vapi.isMuted();
    vapi.setMuted(next);
    setIsMuted(next);
  }

  function handleClosePanel() {
    setPhase("closed");
  }

  function handleRestart() {
    setPhase("intro");
  }

  const statusDotClass =
    phase === "active"
      ? "bg-emerald-500"
      : phase === "connecting"
        ? "bg-amber-500"
        : phase === "mic-denied" || phase === "call-failed"
          ? "bg-destructive"
          : "bg-muted-foreground/50";

  const headerSubtext =
    phase === "active"
      ? assistantSpeaking
        ? "Speaking…"
        : "Listening…"
      : phase === "connecting"
        ? "Connecting…"
        : phase === "ended"
          ? "Call ended"
          : phase === "mic-denied"
            ? "Microphone blocked"
            : phase === "call-failed"
              ? "Connection issue"
              : "Live AI voice assistant";

  const progressPct = Math.min(100, (elapsedSeconds / MAX_CALL_SECONDS) * 100);
  const endedCopy = ENDED_COPY[endReason];

  return (
    <>
      {phase === "closed" && (
        <button
          type="button"
          onClick={() => setPhase("intro")}
          aria-label="Talk to OsvaraX, chat with our live AI voice assistant"
          title="🎙 Talk to OsvaraX"
          className="glow-brand fixed right-6 bottom-[10.5rem] z-40 flex h-14 w-14 items-center justify-center gap-2 rounded-full border border-border bg-card text-sm font-semibold text-foreground transition-transform hover:scale-105 sm:w-auto sm:justify-start sm:px-5"
        >
          <span
            className="pulse-ring absolute inset-0 rounded-full bg-brand/25"
            aria-hidden="true"
          />
          <span aria-hidden="true" className="relative text-lg leading-none">
            🎙️
          </span>
          <span className="relative hidden sm:inline">Talk to OsvaraX</span>
        </button>
      )}

      <div
        className={cn(
          "fixed right-4 bottom-4 z-50 flex w-[min(22rem,calc(100vw-2rem))] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-300",
          phase !== "closed"
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0",
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.2,0.9,0.3,1.2)" }}
        role="dialog"
        aria-label="OsvaraX voice assistant"
      >
        <div className="flex items-center justify-between gap-2 border-b border-border bg-surface/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className={cn("relative flex size-2.5 shrink-0 rounded-full", statusDotClass)}>
              {phase === "active" && (
                <span
                  className={cn("absolute inset-0 animate-ping rounded-full", statusDotClass)}
                  aria-hidden="true"
                />
              )}
            </span>
            <div>
              <p className="text-sm font-semibold">OsvaraX Assistant</p>
              <p className="text-xs text-muted-foreground" aria-live="polite">
                {headerSubtext}
              </p>
            </div>
          </div>
          {phase !== "connecting" && phase !== "active" && (
            <Button variant="ghost" size="icon" onClick={handleClosePanel} aria-label="Close">
              <X className="size-4" />
            </Button>
          )}
        </div>

        <div className="flex flex-col gap-4 p-4">
          {phase === "intro" && (
            <>
              <p className="text-sm leading-relaxed text-muted-foreground">
                You&apos;ll be talking to OsvaraX&apos;s live AI assistant. It can answer questions
                about our services, pricing, and book you a free discovery call.
              </p>
              <Button onClick={handleStartCall} size="lg" className="w-full">
                <Mic className="size-4" />
                Start Call
              </Button>
            </>
          )}

          {phase === "connecting" && (
            <div className="flex flex-col items-center gap-3 py-4 text-center">
              <Loader2 className="size-6 animate-spin text-brand" aria-hidden="true" />
              <p className="text-sm text-muted-foreground">Connecting you to the assistant…</p>
            </div>
          )}

          {phase === "active" && (
            <>
              <div className="flex h-10 items-end justify-center gap-1.5" aria-hidden="true">
                {[0.55, 0.8, 1, 0.8, 0.55].map((weight, i) => {
                  const active = Math.min(1, 0.22 + volumeLevel * 1.6);
                  const scale = Math.max(0.16, active * weight);
                  return (
                    <span
                      key={i}
                      className="w-1.5 rounded-full bg-brand transition-transform duration-150 ease-out"
                      style={{
                        height: "100%",
                        transform: `scaleY(${scale})`,
                        transformOrigin: "bottom",
                      }}
                    />
                  );
                })}
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-mono text-sm font-semibold text-foreground">
                    {formatTime(elapsedSeconds)}
                  </span>
                  <span>2:00 max</span>
                </div>
                <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-brand transition-[width] duration-500"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleToggleMute}
                  aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
                  className="size-11 shrink-0 rounded-full"
                >
                  {isMuted ? <MicOff className="size-4" /> : <Mic className="size-4" />}
                </Button>
                <Button
                  variant="destructive"
                  onClick={handleEndCall}
                  className="flex-1 rounded-full"
                >
                  <PhoneOff className="size-4" />
                  End Call
                </Button>
              </div>
            </>
          )}

          {phase === "ended" && (
            <>
              <p className="text-sm font-semibold">{endedCopy.heading}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{endedCopy.body}</p>
              <div className="flex flex-col gap-2">
                <Button asChild size="lg">
                  <Link to="/contact" onClick={handleClosePanel}>
                    Book a Free Discovery Call
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={voiceWa} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" />
                    Continue on WhatsApp
                  </a>
                </Button>
              </div>
              <button
                type="button"
                onClick={handleRestart}
                className="text-center text-xs font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Talk again
              </button>
            </>
          )}

          {(phase === "mic-denied" || phase === "call-failed") && (
            <>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {phase === "mic-denied"
                  ? "We couldn't access your microphone. Please allow microphone access for this site in your browser settings, then try again."
                  : "We couldn't connect right now. Please check your connection and try again."}
              </p>
              <div className="flex flex-col gap-2">
                <Button onClick={handleRestart} className="w-full">
                  Try Again
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href={voiceWa} target="_blank" rel="noopener noreferrer">
                    Chat with us on WhatsApp instead
                  </a>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
