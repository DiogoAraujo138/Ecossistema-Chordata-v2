export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  purpose: string;
  founded: number;
  location: { address: string; city: string; state: string; country: string };
  contact: { email: string; phone: string; whatsapp: string };
  social: { linkedin: string; instagram: string };
  copyright: string;
  impactMetrics: { label: string; value: string }[];
}

export const COMPANY: CompanyInfo = {
  name: 'Chordata Consultoria',
  legalName: 'Chordata Consultoria e Assessoria Ltda',
  tagline: 'O Ecossistema que Transforma Negócios Veterinários',
  purpose: 'Proporcionar ao mercado veterinário profissionalização, conhecimento de negócios e de gestão, adaptação ao mercado digital e conexões entre pessoas e negócios.',
  founded: 2022,
  location: {
    address: 'Instituto Caldeira — Tv. São José, 455, Navegantes',
    city: 'Porto Alegre',
    state: 'RS',
    country: 'Brasil',
  },
  contact: {
    email: 'contato@chordataconsultoria.com',
    phone: '+55 51 99762-2707',
    whatsapp: '555197622707',
  },
  social: {
    linkedin: 'https://linkedin.com/company/chordata-consultoria',
    instagram: 'https://instagram.com/chordataconsultoria',
  },
  copyright: '© 2026 Chordata Consultoria · Todos os direitos reservados',
  impactMetrics: [
    { label: 'Pessoas impactadas',     value: '2.000+' },
    { label: 'Projetos de consultoria', value: '60+'   },
    { label: 'Profissionais treinados', value: '300+'  },
    { label: 'Estados atendidos',       value: '8'     },
  ],
};
