import logoChordataConsultoria from '@/assets/logos/chordata-consultoria-new.png';
import logoMentall from '@/assets/logos/mentall-new.png';
import logoAnalytics from '@/assets/logos/chordata-analytics-new2.png';
import logoVetconnection from '@/assets/logos/vetconnection-new2.png';
import logoJuridicoPet from '@/assets/logos/juridico-pet-new.png';
import logoEcossistema from '@/assets/logos/chordata-ecossistema-branco.png';
import logoChordataWhite from '@/assets/logos/chordata-logo-white.png';

export type SolutionId = 'chordata-consultoria' | 'mentallvet' | 'chordata-analytics' | 'juridicopet' | 'vetconnection';
export type SolutionCategory = 'consulting' | 'data' | 'mental-health' | 'legal' | 'events';

export interface SolutionDef {
  id: SolutionId;
  name: string;
  tagline: string;
  logo: string;
  description: string;
  url: string;
  accentColor: string;
  accentHex: string;
  category: SolutionCategory;
}

export const ECOSYSTEM_LOGO  = logoEcossistema;
export const CHORDATA_WHITE_LOGO = logoChordataWhite;

export const SOLUTIONS: SolutionDef[] = [
  {
    id: 'chordata-consultoria',
    name: 'Chordata Consultoria',
    tagline: 'Estratégia e Gestão',
    logo: logoChordataConsultoria,
    description: 'Estratégia, gestão e desenvolvimento de negócios para clínicas, hospitais e empresas do mercado veterinário.',
    url: 'https://chordataconsultoria.com/',
    accentColor: 'blue',
    accentHex: '#3B82F6',
    category: 'consulting',
  },
  {
    id: 'mentallvet',
    name: 'MentAll.Vet',
    tagline: 'Saúde Mental Veterinária',
    logo: logoMentall,
    description: 'Soluções voltadas à saúde mental, bem-estar corporativo e desenvolvimento humano para profissionais e empresas do setor veterinário.',
    url: 'https://www.mentall.vet/',
    accentColor: 'rose',
    accentHex: '#F43F5E',
    category: 'mental-health',
  },
  {
    id: 'chordata-analytics',
    name: 'Chordata Analytics',
    tagline: 'Inteligência de Dados',
    logo: logoAnalytics,
    description: 'Inteligência de dados, dashboards de gestão e soluções de BI para tomada de decisão no mercado veterinário.',
    url: 'https://chordataanalytics.com.br/',
    accentColor: 'emerald',
    accentHex: '#10B981',
    category: 'data',
  },
  {
    id: 'juridicopet',
    name: 'JurídicoPet Digital',
    tagline: 'Conformidade Jurídica',
    logo: logoJuridicoPet,
    description: 'Assinatura eletrônica e conformidade jurídica digital para o setor pet & vet.',
    url: 'https://juridicopetdigital.com.br/',
    accentColor: 'amber',
    accentHex: '#F59E0B',
    category: 'legal',
  },
  {
    id: 'vetconnection',
    name: 'VetConnection',
    tagline: 'Feiras e Eventos',
    logo: logoVetconnection,
    description: 'Feiras, congressos e eventos veterinários — a maior plataforma de conexão e inovação do Sul do Brasil.',
    url: 'https://brasilfeiras.vet/',
    accentColor: 'violet',
    accentHex: '#8B5CF6',
    category: 'events',
  },
];
