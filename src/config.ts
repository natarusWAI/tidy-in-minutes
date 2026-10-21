export const SITE_NAME = 'Tidy in Minutes';
export const TAGLINE = 'Home organization, cleaning hacks and small-space ideas you can finish in minutes.';
export const CONTACT_EMAIL = 'hello@example.com'; // TODO: reemplazar por un email real
// URL del formulario de tu proveedor de email (Buttondown, MailerLite, etc.)
export const SUBSCRIBE_URL = import.meta.env.PUBLIC_SUBSCRIBE_URL || '';
export const LAST_UPDATED = '2026-10-20';

// TODO: reemplazar por el enlace real del producto en Payhip cuando esté creado.
export const PAYHIP_URL = 'https://payhip.com/b/PROVISORIO';
export const AMAZON_TAG = 'tidyinminutes-20';

export const PRODUCTS = [
  {
    name: 'Weekly Reset Cleaning Checklist (printable PDF)',
    description: 'Reset your whole home in about an hour a week with this simple, printable room-by-room cleaning checklist (US Letter and A4).',
    price: '$3.99',
    url: PAYHIP_URL,
    affiliate: false,
  },
];
