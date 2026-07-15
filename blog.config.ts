import { defineBlogConfig } from 'astro-blog-kit';

export default defineBlogConfig({
  wpUrl: import.meta.env.WP_API_URL || 'http://paneldetecho.local/',
  postsPerPage: 5,
  defaultLayout: 'magazine',
  locale: 'en',

  theme: {
    accent: '#0284c7',     // Azul celeste de marca (--color-brand-600)
    background: '#f8fafc', // Fondo slate muy claro (--color-slate-50)
    surface: '#ffffff',    // Blanco puro para las tarjetas y contenedores
    text: '#1e293b',       // Gris slate oscuro principal (--color-slate-800)
    muted: '#475569',      // Gris intermedio para extractos (--color-slate-600)
    mutedLight: '#64748b', // Gris claro para fechas y categorías (--color-slate-500)
    border: '#e2e8f0',     // Bordes finos de tarjetas (--color-slate-200)
    black: '#0f172a',      // Slate profundo para encabezados (--color-slate-900)
    white: '#ffffff',
    fontHeading: '"Inter", sans-serif', // Tipografía basada en --font-sans
    fontBody: '"Inter", sans-serif',
    fontMono: 'monospace',
    fontDisplay: '"Inter", sans-serif',
    containerMax: '1280px', // Equivalente a las 80rem de --max-width
  },

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    en: {
      tagline: 'Our Blog',
      titleLine1: 'Latest',
      titleLine2: 'Articles',
      description: 'Welcome to our blog.',
    },
    es: {
      tagline: 'Nuestro Blog',
      titleLine1: 'Últimos',
      titleLine2: 'Artículos',
      description: 'Bienvenido a nuestro blog.',
    },
  },

  // ── UI labels ────────────────────────────────────────────────
  ui: {
    en: {
      readMoreLabel: 'Read more →',
      btnPrev: 'Previous',
      btnNext: 'Next',
      commentButtonColor: 'var(--bk-accent)',
      commentButtonTextColor: 'var(--bk-white)',
      paginationStyle: 'minimal',
      // Estilo de paginación adaptado a tus variables corporativas
      paginationBtnBg: '#ffffff',          // Fondo blanco
      paginationBtnText: '#0284c7',        // Texto en azul de marca (--color-brand-600)
      paginationBtnHoverBg: '#0284c7',     // Hover sólido azul de marca
      paginationBtnHoverText: '#ffffff',   // Texto blanco en hover
      paginationActiveBg: '#f59e0b',       // Estado activo resalta con el ámbar (--color-amber-500)
      paginationActiveText: '#ffffff',     // Contraste blanco sobre el botón activo
    },
    es: {
      readMoreLabel: 'Leer más →',
      btnPrev: 'Anterior',
      btnNext: 'Siguiente',
    },
  },
});