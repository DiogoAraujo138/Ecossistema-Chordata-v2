import photoThales  from '@/assets/team/thales-rodrigues.jpeg';
import photoDiogo   from '@/assets/team/diogo-araujo.jpg';
import photoEliz    from '@/assets/team/eliz-modena.jpg';
import photoMikael  from '@/assets/team/mikael-cattani.jpeg';
import photoEduardo from '@/assets/team/eduardo-monteiro.png';
import type { SolutionId } from './solutions';

export interface TeamMemberDef {
  initials: string;
  name: string;
  role: string;
  photo: string;
  solution?: SolutionId;
}

export const TEAM_MEMBERS: TeamMemberDef[] = [
  {
    initials: 'TA',
    name: 'Thales Altieri',
    role: 'Co-Fundador, Diretor e Consultor',
    photo: photoThales,
    solution: 'chordata-consultoria',
  },
  {
    initials: 'MC',
    name: 'Mikael Cattani',
    role: 'Co-Fundador, Diretor e Consultor',
    photo: photoMikael,
    solution: 'chordata-consultoria',
  },
  {
    initials: 'EM',
    name: 'Eduardo Monteiro',
    role: 'CEO MentAll.Vet',
    photo: photoEduardo,
    solution: 'mentallvet',
  },
  {
    initials: 'EM',
    name: 'Eliz Modena',
    role: 'Psicóloga e Consultora Associada',
    photo: photoEliz,
    solution: 'mentallvet',
  },
  {
    initials: 'DA',
    name: 'Diogo Araújo',
    role: 'Analista de Dados e Consultor Associado',
    photo: photoDiogo,
    solution: 'chordata-analytics',
  },
];
