import { BRAND_TYPOGRAPHY } from '../tokens/typography';

interface TypographyScaleProps {
  showClasses?: boolean;
}

export default function TypographyScale({ showClasses = true }: TypographyScaleProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {[
          { family: 'Montserrat', usage: 'Headings — H1 a H4', weights: ['500 Medium', '600 Semibold', '700 Bold'] },
          { family: 'Inter',      usage: 'Body, labels, captions', weights: ['400 Regular', '500 Medium', '600 Semibold'] },
        ].map(({ family, usage, weights }) => (
          <div key={family} className="card-clean p-6">
            <p className="text-xs section-label mb-2">{usage}</p>
            <p className="text-3xl font-bold mb-1" style={{ fontFamily: `"${family}", sans-serif` }}>{family}</p>
            <p className="text-sm text-slate-500 mb-3">Google Fonts — {family === 'Montserrat' ? 'letter-spacing: -0.02em' : 'padrão'}</p>
            <div className="flex flex-wrap gap-2">
              {weights.map(w => (
                <span key={w} className="text-xs bg-slate-100 text-slate-600 rounded px-2 py-1">{w}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-1">
        {BRAND_TYPOGRAPHY.scale.map((item) => (
          <div
            key={item.tag + item.label}
            className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 border-b border-slate-100 py-4 last:border-0"
          >
            <div className="md:w-48 shrink-0">
              <span className="text-xs font-mono text-slate-400">{item.label}</span>
              {showClasses && (
                <p className="text-xs font-mono text-blue-500 mt-0.5 break-all">{item.tailwindClass}</p>
              )}
              <p className="text-xs text-slate-400 mt-0.5">{item.fontFamily} · {item.weight}</p>
            </div>
            <div
              className={item.tailwindClass}
              style={{ fontFamily: `"${item.fontFamily}", sans-serif` }}
            >
              {item.example}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
