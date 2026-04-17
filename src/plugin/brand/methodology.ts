export interface RP3Item {
  bold: string;
  text: string;
}

export interface RP3PillarDef {
  step: '01' | '02' | '03';
  title: 'Processos' | 'Pessoas' | 'Planejamento';
  subtitle: string;
  accent: 'blue' | 'emerald' | 'amber';
  accentHex: string;
  description: string;
  items: RP3Item[];
}

export const RP3_PILLARS: RP3PillarDef[] = [
  {
    step: '01',
    title: 'Processos',
    subtitle: 'Medir e Analisar',
    accent: 'blue',
    accentHex: '#3B82F6',
    description: 'Estruturamos processos operacionais e financeiros com precisão diagnóstica, garantindo que cada decisão seja sustentada por dados reais.',
    items: [
      { bold: 'Precisão diagnóstica',    text: 'em sistemas financeiros e administrativos' },
      { bold: 'Análise estatística',     text: 'e controle sistêmico' },
      { bold: 'Integração comercial',    text: 'inteligente' },
    ],
  },
  {
    step: '02',
    title: 'Pessoas',
    subtitle: 'Desenvolver e Engajar',
    accent: 'emerald',
    accentHex: '#10B981',
    description: 'Desenvolvemos líderes e equipes com programas que constroem cultura organizacional sólida e alta performance.',
    items: [
      { bold: 'Capacitação de gestores', text: 'e liderança' },
      { bold: 'Engajamento de equipes', text: 'e solidificação cultural' },
      { bold: 'Estruturação de cargos', text: 'e recrutamento' },
    ],
  },
  {
    step: '03',
    title: 'Planejamento',
    subtitle: 'Controlar e Crescer',
    accent: 'amber',
    accentHex: '#F59E0B',
    description: 'Construímos planejamentos operacionais, financeiros e comerciais que traduzem visão estratégica em metas concretas e mensuráveis.',
    items: [
      { bold: 'Planejamento operacional', text: 'compras, estoque e logística' },
      { bold: 'Planejamento financeiro',  text: 'despesas, receitas e crescimento' },
      { bold: 'Planejamento comercial',   text: 'estratégias e campanhas' },
    ],
  },
];

export const METHODOLOGY_NAME    = 'Método Chordata · RP3';
export const METHODOLOGY_TAGLINE = 'Nossa metodologia proprietária atua nos três pilares fundamentais de qualquer negócio veterinário.';
