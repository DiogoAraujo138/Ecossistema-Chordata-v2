import Logo from '@/components/Logo';
import { SOLUTIONS, ECOSYSTEM_LOGO, CHORDATA_WHITE_LOGO } from '../brand/solutions';

interface LogoShowcaseProps {
  showAllSizes?: boolean;
}

const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export default function LogoShowcase({ showAllSizes = true }: LogoShowcaseProps) {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Logo Principal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl bg-slate-900 p-8 flex items-center justify-center min-h-[120px]">
            <Logo variant="principal" size="lg" />
          </div>
          <div className="rounded-xl bg-white border border-slate-200 p-8 flex items-center justify-center min-h-[120px]">
            <img src={CHORDATA_WHITE_LOGO} alt="Chordata logo" className="h-16 object-contain" />
          </div>
        </div>
        <p className="text-xs text-slate-400 mt-2 text-center">Versão clara em fundo escuro · Versão principal em fundo claro</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Ecossistema</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl bg-slate-900 p-8 flex items-center justify-center min-h-[120px]">
            <img src={ECOSYSTEM_LOGO} alt="Chordata Ecossistema" className="h-16 object-contain" />
          </div>
          <div className="rounded-xl bg-white border border-slate-200 p-8 flex items-center justify-center min-h-[120px]">
            <Logo variant="simbolo" size="lg" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Logos das Soluções</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SOLUTIONS.map((solution) => (
            <div key={solution.id} className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-slate-900 p-6 flex items-center justify-center min-h-[100px]">
                <img
                  src={solution.logo}
                  alt={solution.name}
                  className="max-h-12 max-w-[160px] object-contain"
                />
              </div>
              <div className="bg-white p-4">
                <p className="text-sm font-semibold text-slate-700">{solution.name}</p>
                <p className="text-xs text-slate-400">{solution.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showAllSizes && (
        <div>
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Escalas de Tamanho</h3>
          <div className="rounded-xl bg-slate-900 p-8 space-y-6">
            {SIZES.map((size) => (
              <div key={size} className="flex items-center gap-6">
                <span className="text-xs font-mono text-slate-500 w-8">{size}</span>
                <Logo variant="principal" size={size} />
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-2">xs · sm · md · lg · xl — use o prop <code className="font-mono text-blue-500">size</code> no componente Logo</p>
        </div>
      )}
    </div>
  );
}
