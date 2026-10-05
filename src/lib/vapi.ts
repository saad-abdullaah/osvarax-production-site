export type VapiConfig = {
  publicKey: string;
  assistantId: string;
};

/**
 * Reads the Vapi Web SDK credentials from environment variables.
 *
 * Mirrors the pattern used for Supabase in `src/integrations/supabase/client.ts`:
 * `VITE_`-prefixed vars are inlined into the client bundle by Vite at build time,
 * with a `process.env` fallback for contexts that only expose the unprefixed name.
 *
 * Returns `null` when either value is missing so callers can hide the widget
 * entirely instead of crashing the page over a missing/misconfigured env var.
 */
export function getVapiConfig(): VapiConfig | null {
  const publicKey = import.meta.env["VITE_VAPI_PUBLIC_KEY"] || process.env["VAPI_PUBLIC_KEY"];
  const assistantId = import.meta.env["VITE_VAPI_ASSISTANT_ID"] || process.env["VAPI_ASSISTANT_ID"];

  if (!publicKey || !assistantId) {
    if (import.meta.env.DEV) {
      console.warn(
        "[VoiceWidget] Missing VITE_VAPI_PUBLIC_KEY or VITE_VAPI_ASSISTANT_ID, the Talk to OsvaraX widget is hidden.",
      );
    }
    return null;
  }

  return { publicKey, assistantId };
}
