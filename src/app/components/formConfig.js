export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
export const FORM_ENDPOINT = 'https://getform.io/f/73ebbb0e-851d-4921-ae48-e8f5b4b64f56';
// Falls back to the same GetForm endpoint so ghosting responses land in the same inbox until a dedicated form is set up.
export const GHOSTING_FORM_ENDPOINT = process.env.NEXT_PUBLIC_GHOSTING_FORM_ENDPOINT || FORM_ENDPOINT;
