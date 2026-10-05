import { CONTACT_FORM_ENDPOINT } from "./contact";

export type ChatLead = { name: string; contact: string };

/**
 * Emails a chatbot lead to the OsvaraX inbox using the same delivery endpoint
 * as the contact form. Failures are swallowed on purpose: the chat flow always
 * offers WhatsApp as a fallback, so a delivery hiccup must never break the UI.
 */
export async function sendChatLead(lead: ChatLead): Promise<boolean> {
  try {
    const res = await fetch(CONTACT_FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: "New chatbot lead, OsvaraX website",
        Source: "Website chatbot",
        Name: lead.name,
        Contact: lead.contact,
      }),
    });
    return res.ok;
  } catch (error) {
    console.error("chat lead delivery failed", error);
    return false;
  }
}
