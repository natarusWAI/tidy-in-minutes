export const SITE_NAME = 'Tidy in Minutes';
export const TAGLINE = 'Home organization, cleaning hacks and small-space ideas you can finish in minutes.';
export const CONTACT_EMAIL = 'hello@example.com'; // TODO: reemplazar por un email real
// URL del formulario de tu proveedor de email (Buttondown, MailerLite, etc.)
export const SUBSCRIBE_URL = import.meta.env.PUBLIC_SUBSCRIBE_URL || '';
export const LAST_UPDATED = '2026-10-20';

// Productos de ejemplo: reemplazar `url` por los enlaces reales de la tienda.
export const PRODUCTS = [
  {
    name: '10-Minute Daily Reset Planner',
    description: 'A printable planner that breaks a tidy home into ten-minute daily routines.',
    price: '$9',
    url: 'https://example.com/store/daily-reset-planner',
    affiliate: false,
  },
  {
    name: 'Small-Space Declutter Checklist',
    description: 'Room-by-room checklist to declutter apartments, closets and tiny kitchens.',
    price: '$5',
    url: 'https://example.com/store/declutter-checklist',
    affiliate: false,
  },
  {
    name: 'Stackable Storage Bins (recommended)',
    description: 'Our pick for stackable bins that fit under beds and inside shelves.',
    price: 'See price',
    url: 'https://example.com/affiliate/storage-bins',
    affiliate: true,
  },
];
