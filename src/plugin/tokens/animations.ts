export interface AnimationDef {
  name: string;
  tailwindClass: string;
  cssClass?: string;
  duration: string;
  easing: string;
  description: string;
}

export interface BrandAnimations {
  enter: AnimationDef[];
  scroll: AnimationDef[];
  stagger: { cssClass: string; childDelayMs: number; description: string };
  ambient: AnimationDef[];
}

export const BRAND_ANIMATIONS: BrandAnimations = {
  enter: [
    { name: 'Fade In',       tailwindClass: 'animate-fade-in',        duration: '0.5s', easing: 'ease-out', description: 'Aparece com leve slide para baixo' },
    { name: 'Fade In Up',    tailwindClass: 'animate-fade-in-up',     duration: '0.6s', easing: 'ease-out', description: 'Entra vindo de baixo para cima' },
    { name: 'Fade In Down',  tailwindClass: 'animate-fade-in-down',   duration: '0.6s', easing: 'ease-out', description: 'Entra vindo de cima para baixo' },
    { name: 'Fade In Left',  tailwindClass: 'animate-fade-in-left',   duration: '0.6s', easing: 'ease-out', description: 'Entra vindo da esquerda' },
    { name: 'Fade In Right', tailwindClass: 'animate-fade-in-right',  duration: '0.6s', easing: 'ease-out', description: 'Entra vindo da direita' },
    { name: 'Scale In',      tailwindClass: 'animate-scale-in',       duration: '0.4s', easing: 'ease-out', description: 'Aparece com leve efeito de escala' },
  ],
  scroll: [
    { name: 'Scroll Fade Up',    cssClass: 'scroll-fade-up',    tailwindClass: '', duration: '0.7s', easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', description: 'Ativa ao entrar na viewport — sobe' },
    { name: 'Scroll Fade Left',  cssClass: 'scroll-fade-left',  tailwindClass: '', duration: '0.7s', easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', description: 'Ativa ao entrar na viewport — da esquerda' },
    { name: 'Scroll Fade Right', cssClass: 'scroll-fade-right', tailwindClass: '', duration: '0.7s', easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', description: 'Ativa ao entrar na viewport — da direita' },
    { name: 'Scroll Scale In',   cssClass: 'scroll-scale-in',   tailwindClass: '', duration: '0.7s', easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', description: 'Ativa ao entrar na viewport — escala' },
  ],
  stagger: {
    cssClass: 'stagger-children',
    childDelayMs: 80,
    description: 'Filhos animam em sequência com 80ms de intervalo (até 10 filhos)',
  },
  ambient: [
    { name: 'Chevron Pulse', cssClass: 'chevron-pulse', tailwindClass: '', duration: '2s', easing: 'ease-in-out', description: 'Oscila opacidade — indicador de scroll' },
    { name: 'Spin',          tailwindClass: 'animate-spin',  duration: '1s',   easing: 'linear',    description: 'Rotação contínua (loaders)' },
    { name: 'Pulse',         tailwindClass: 'animate-pulse', duration: '2s',   easing: 'ease-in-out', description: 'Pulsa opacidade (skeleton / status)' },
  ],
};
