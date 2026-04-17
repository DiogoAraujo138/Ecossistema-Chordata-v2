export interface ColorScale {
  50: string; 100: string; 200: string; 300: string; 400: string;
  500: string; 600: string; 700: string; 800: string; 900: string; 950: string;
}

export interface BrandColors {
  blue: { 400: string; 500: string; 600: string };
  slate: ColorScale;
  semantic: {
    primary: string;
    background: string;
    surface: string;
    textLight: string;
    textMuted: string;
    white: string;
  };
  accent: {
    emerald: string;
    amber: string;
    rose: string;
    green: string;
  };
  border: {
    dark: string;
    light: string;
  };
  css: {
    background: string;
    foreground: string;
    accent: string;
    border: string;
    ring: string;
  };
}

export const BRAND_COLORS: BrandColors = {
  blue: {
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
  },
  slate: {
    50:  '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617',
  },
  semantic: {
    primary:    '#3B82F6',
    background: '#0F172A',
    surface:    '#1E293B',
    textLight:  '#94A3B8',
    textMuted:  '#64748B',
    white:      '#FFFFFF',
  },
  accent: {
    emerald: '#10B981',
    amber:   '#F59E0B',
    rose:    '#F43F5E',
    green:   '#22C55E',
  },
  border: {
    dark:  'rgba(51, 65, 85, 0.5)',
    light: '#E2E8F0',
  },
  css: {
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    accent:     'hsl(var(--accent))',
    border:     'hsl(var(--border))',
    ring:       'hsl(var(--ring))',
  },
};
