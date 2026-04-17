export interface BrandSpacing {
  radius: { sm: string; md: string; lg: string; xl: string; '2xl': string };
  sectionPadding: { mobile: string; desktop: string };
  containerMaxWidth: { default: string; wide: string; narrow: string };
  cardPadding: { sm: string; md: string; lg: string };
}

export const BRAND_SPACING: BrandSpacing = {
  radius: {
    sm:   '0.375rem',
    md:   '0.625rem',
    lg:   '0.75rem',
    xl:   '1rem',
    '2xl': '1.5rem',
  },
  sectionPadding: {
    mobile:  'py-24 px-6',
    desktop: 'md:py-36',
  },
  containerMaxWidth: {
    narrow:  'max-w-4xl',
    default: 'max-w-5xl',
    wide:    'max-w-6xl',
  },
  cardPadding: {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  },
};
