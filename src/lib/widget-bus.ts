/**
 * The site mounts more than one floating widget bottom-right (the scripted
 * chat assistant and the live voice assistant), stacked on top of each
 * other. This tiny event bus lets one announce that it just opened so the
 * other can close itself, instead of both panels being visible at once.
 *
 * Deliberately not a React context: both widgets are mounted independently
 * in the root layout, and a plain DOM CustomEvent is the lowest-friction way
 * to coordinate two siblings that otherwise know nothing about each other.
 */

const WIDGET_OPEN_EVENT = "osvarax:widget-open";

export type WidgetId = "chat" | "voice";

export function announceWidgetOpen(id: WidgetId) {
  window.dispatchEvent(new CustomEvent<WidgetId>(WIDGET_OPEN_EVENT, { detail: id }));
}

/** Calls `onOtherOpen` whenever a *different* widget announces it opened. Returns an unsubscribe function. */
export function onOtherWidgetOpen(id: WidgetId, onOtherOpen: () => void) {
  function listener(event: Event) {
    const detail = (event as CustomEvent<WidgetId>).detail;
    if (detail !== id) onOtherOpen();
  }
  window.addEventListener(WIDGET_OPEN_EVENT, listener);
  return () => window.removeEventListener(WIDGET_OPEN_EVENT, listener);
}
