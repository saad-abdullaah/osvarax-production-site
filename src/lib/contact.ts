export const CONTACT = {
  email: "info@osvarax.com",
  phone: "+92 322 7580962",
  phoneRaw: "+923227580962",
  whatsappNumber: "923227580962",
  whatsappUrl:
    "https://wa.me/923227580962?text=" +
    encodeURIComponent("Hi OsvaraX! I'd like to discuss a project."),
} as const;

/** Endpoint used by the contact form to deliver briefs to our inbox. */
export const CONTACT_FORM_ENDPOINT = "https://formsubmit.co/ajax/info@osvarax.com";
