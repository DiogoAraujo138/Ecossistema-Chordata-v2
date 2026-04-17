import { useState } from 'react';
import { BRAND_COLORS } from '../tokens/colors';

interface SwatchProps {
  color: string;
  label: string;
  sublabel?: string;
}

function Swatch({ color, label, sublabel }: SwatchProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(color).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const isLight = ['#F8FAFC', '#F1F5F9', '#E2E8F0', '#CBD5E1', '#FFFFFF', '#60A5FA'].includes(color);

  return (
    <button
      onClick={handleCopy}
      className="flex flex-col rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition-all duration-200 text-left w-full"
      title={`Copiar ${color}`}
    >
      <div
        className="h-16 w-full flex items-center justify-center text-xs font-mono font-medium"
        style={{ backgroundColor: color, color: isLight ? '#0F172A' : '#F1F5F9' }}
      >
        {copied ? '✓ Copiado!' : color}
      </div>
      <div className="bg-white px-3 py-2">
        <p className="text-xs font-semibold text-slate-700 truncate">{label}</p>
        {sublabel && <p className="text-xs text-slate-400 truncate">{sublabel}</p>}
      </div>
    </button>
  );
}

interface ColorPaletteProps {
  showCssVars?: boolean;
}

export default function ColorPalette({ showCssVars = false }: ColorPaletteProps) {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Paleta Principal — Azul</h3>
        <div className="grid grid-cols-3 gap-3">
          <Swatch color={BRAND_COLORS.blue[400]} label="blue-400" sublabel="Subtítulos, ícones secundários" />
          <Swatch color={BRAND_COLORS.blue[500]} label="blue-500 · Primary" sublabel="CTAs, links, destaques" />
          <Swatch color={BRAND_COLORS.blue[600]} label="blue-600" sublabel="Hover de botões primários" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Escala de Cinzas — Slate</h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-11 gap-2">
          {(Object.entries(BRAND_COLORS.slate) as [string, string][]).map(([key, hex]) => (
            <Swatch
              key={key}
              color={hex}
              label={`slate-${key}`}
              sublabel={
                key === '900' ? 'Hero / Serviços' :
                key === '800' ? 'Cards escuros' :
                key === '50'  ? 'Team section' : undefined
              }
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Cores de Destaque — Accent</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Swatch color={BRAND_COLORS.accent.emerald} label="Emerald" sublabel="Processos / Analytics" />
          <Swatch color={BRAND_COLORS.accent.amber}   label="Amber"   sublabel="Planejamento / JurídicoPet" />
          <Swatch color={BRAND_COLORS.accent.rose}    label="Rose"    sublabel="MentAll.Vet" />
          <Swatch color={BRAND_COLORS.accent.green}   label="Green"   sublabel="WhatsApp" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Cores Semânticas</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <Swatch color={BRAND_COLORS.semantic.primary}    label="Primary"    sublabel="CTA, links" />
          <Swatch color={BRAND_COLORS.semantic.background} label="Background" sublabel="Seções escuras" />
          <Swatch color={BRAND_COLORS.semantic.surface}    label="Surface"    sublabel="Cards escuros" />
          <Swatch color={BRAND_COLORS.semantic.textLight}  label="Text Light" sublabel="Texto em escuro" />
          <Swatch color={BRAND_COLORS.semantic.textMuted}  label="Text Muted" sublabel="Secundário" />
          <Swatch color={BRAND_COLORS.semantic.white}      label="White"      sublabel="Seções claras" />
        </div>
      </div>

      {showCssVars && (
        <div>
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Variáveis CSS (shadcn/ui)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {(Object.entries(BRAND_COLORS.css) as [string, string][]).map(([key, val]) => (
              <div key={key} className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg px-4 py-2">
                <code className="text-xs text-blue-600 font-mono">--{key}</code>
                <code className="text-xs text-slate-500 font-mono">{val}</code>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
