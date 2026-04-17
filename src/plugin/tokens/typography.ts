export interface TypographyScale {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'label';
  label: string;
  fontFamily: 'Montserrat' | 'Inter';
  weight: 400 | 500 | 600 | 700 | 800;
  tailwindClass: string;
  lineHeight: string;
  example: string;
}

export interface BrandTypography {
  families: { heading: string; body: string };
  letterSpacing: { headings: string; sectionLabel: string };
  scale: TypographyScale[];
}

export const BRAND_TYPOGRAPHY: BrandTypography = {
  families: {
    heading: '"Montserrat", sans-serif',
    body:    '"Inter", sans-serif',
  },
  letterSpacing: {
    headings:    '-0.02em',
    sectionLabel: '0.1em',
  },
  scale: [
    {
      tag: 'h1', label: 'Heading 1 — Hero',
      fontFamily: 'Montserrat', weight: 700,
      tailwindClass: 'font-heading text-5xl lg:text-6xl font-bold leading-tight',
      lineHeight: '1.1',
      example: 'O Ecossistema que Transforma Negócios Veterinários',
    },
    {
      tag: 'h2', label: 'Heading 2 — Section Title',
      fontFamily: 'Montserrat', weight: 700,
      tailwindClass: 'font-heading text-3xl md:text-4xl font-bold leading-tight',
      lineHeight: '1.2',
      example: 'Nossa Metodologia RP3',
    },
    {
      tag: 'h3', label: 'Heading 3 — Card Title',
      fontFamily: 'Montserrat', weight: 600,
      tailwindClass: 'font-heading text-xl md:text-2xl font-semibold leading-snug',
      lineHeight: '1.3',
      example: 'Consultoria Integrada Total',
    },
    {
      tag: 'h4', label: 'Heading 4 — Sub-section',
      fontFamily: 'Montserrat', weight: 600,
      tailwindClass: 'font-heading text-lg font-semibold',
      lineHeight: '1.4',
      example: 'Processos — Medir e Analisar',
    },
    {
      tag: 'label', label: 'Section Label',
      fontFamily: 'Inter', weight: 600,
      tailwindClass: 'section-label',
      lineHeight: '1.5',
      example: 'CONSULTORIA E ASSESSORIA',
    },
    {
      tag: 'p', label: 'Body — Regular',
      fontFamily: 'Inter', weight: 400,
      tailwindClass: 'text-base leading-relaxed',
      lineHeight: '1.75',
      example: 'Proporcionar ao mercado veterinário profissionalização, conhecimento de negócios e de gestão.',
    },
    {
      tag: 'small', label: 'Caption / Small',
      fontFamily: 'Inter', weight: 400,
      tailwindClass: 'text-sm text-slate-400',
      lineHeight: '1.5',
      example: 'Porto Alegre, RS · Desde 2022',
    },
  ],
};
