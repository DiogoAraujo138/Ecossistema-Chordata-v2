export interface ComponentClassDef {
  name: string;
  cssClass: string;
  description: string;
  tailwindExpansion: string;
  useCase: string;
  background: 'dark' | 'light' | 'both';
}

export interface BrandComponentClasses {
  buttons: ComponentClassDef[];
  cards: ComponentClassDef[];
  typography: ComponentClassDef[];
  scroll: ComponentClassDef[];
}

export const BRAND_COMPONENT_CLASSES: BrandComponentClasses = {
  buttons: [
    {
      name: 'Botão Primário',
      cssClass: 'btn-primary',
      description: 'Ação principal, CTAs de alta conversão',
      tailwindExpansion: 'bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 hover:shadow-md active:bg-blue-700 transition-all duration-200',
      useCase: '"Agendar Conversa", "Saiba Mais", "Ver Soluções"',
      background: 'both',
    },
    {
      name: 'Botão Outline',
      cssClass: 'btn-outline',
      description: 'Ação secundária em fundos claros',
      tailwindExpansion: 'border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-200',
      useCase: '"Conhecer Serviços", "Ver Mais"',
      background: 'light',
    },
    {
      name: 'Botão Outline Light',
      cssClass: 'btn-outline-light',
      description: 'Ação secundária em fundos escuros',
      tailwindExpansion: 'border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-200',
      useCase: '"Conheça o Ecossistema", "Ver Trajetória"',
      background: 'dark',
    },
  ],
  cards: [
    {
      name: 'Card Claro',
      cssClass: 'card-clean',
      description: 'Card em contexto de fundo claro',
      tailwindExpansion: 'bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200',
      useCase: 'Serviços, equipe, propósito — seções claras',
      background: 'light',
    },
    {
      name: 'Card Escuro',
      cssClass: 'card-dark',
      description: 'Card em contexto de fundo escuro (slate-800/900)',
      tailwindExpansion: 'bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-200',
      useCase: 'Timeline, depoimentos, ecossistema — seções escuras',
      background: 'dark',
    },
  ],
  typography: [
    {
      name: 'Label de Seção',
      cssClass: 'section-label',
      description: 'Etiqueta acima do título de cada seção',
      tailwindExpansion: 'text-blue-500 text-sm font-semibold tracking-widest uppercase',
      useCase: '"NOSSAS SOLUÇÕES", "METODOLOGIA RP3"',
      background: 'both',
    },
    {
      name: 'Título de Seção',
      cssClass: 'section-title',
      description: 'Heading principal de cada seção',
      tailwindExpansion: 'font-heading text-2xl md:text-4xl font-bold mb-4 leading-tight',
      useCase: 'Título H2 de cada bloco de conteúdo',
      background: 'both',
    },
    {
      name: 'Subtítulo de Seção',
      cssClass: 'section-subtitle',
      description: 'Parágrafo descritivo abaixo do título',
      tailwindExpansion: 'text-lg leading-relaxed',
      useCase: 'Descrição de 1-2 linhas após o section-title',
      background: 'both',
    },
  ],
  scroll: [
    {
      name: 'Fade Up (scroll)',
      cssClass: 'scroll-fade-up',
      description: 'Anima ao entrar na viewport — slide de baixo para cima',
      tailwindExpansion: 'opacity-0 translate-y-8 → opacity-100 translate-y-0 (via .visible)',
      useCase: 'Blocos de conteúdo, cards, headings',
      background: 'both',
    },
    {
      name: 'Fade Left (scroll)',
      cssClass: 'scroll-fade-left',
      description: 'Anima ao entrar na viewport — da esquerda',
      tailwindExpansion: 'opacity-0 -translate-x-8 → opacity-100 translate-x-0 (via .visible)',
      useCase: 'Elementos da coluna esquerda',
      background: 'both',
    },
    {
      name: 'Fade Right (scroll)',
      cssClass: 'scroll-fade-right',
      description: 'Anima ao entrar na viewport — da direita',
      tailwindExpansion: 'opacity-0 translate-x-8 → opacity-100 translate-x-0 (via .visible)',
      useCase: 'Elementos da coluna direita',
      background: 'both',
    },
    {
      name: 'Scale In (scroll)',
      cssClass: 'scroll-scale-in',
      description: 'Anima ao entrar na viewport — escala de 0.95 para 1',
      tailwindExpansion: 'opacity-0 scale-95 → opacity-100 scale-100 (via .visible)',
      useCase: 'Logos, imagens, cards de destaque',
      background: 'both',
    },
  ],
};
