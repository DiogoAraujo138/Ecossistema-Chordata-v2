import { useState } from 'react';
import { BRAND_COMPONENT_CLASSES } from '../tokens/components';
import { Check, Copy } from 'lucide-react';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1 text-xs text-slate-400 hover:text-blue-500 transition-colors"
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? 'Copiado' : 'Copiar'}
    </button>
  );
}

function ClassRow({ name, cssClass, description, tailwindExpansion, useCase, background }: {
  name: string;
  cssClass: string;
  description: string;
  tailwindExpansion: string;
  useCase: string;
  background: 'dark' | 'light' | 'both';
}) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <div className={`p-6 flex items-center justify-center min-h-[80px] ${background === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <span className={cssClass + ' px-6 py-2.5'}>{name}</span>
      </div>
      <div className="bg-white p-4 space-y-2">
        <div className="flex items-center justify-between">
          <code className="text-sm font-mono text-blue-600">.{cssClass}</code>
          <CopyButton text={cssClass} />
        </div>
        <p className="text-xs text-slate-500">{description}</p>
        <p className="text-xs text-slate-400 italic">Uso: {useCase}</p>
        <details className="group">
          <summary className="text-xs text-slate-400 cursor-pointer hover:text-slate-600">Ver expansão Tailwind ›</summary>
          <code className="block mt-2 text-xs text-slate-600 bg-slate-50 rounded p-2 break-all">{tailwindExpansion}</code>
        </details>
      </div>
    </div>
  );
}

function TypographyRow({ name, cssClass, description, tailwindExpansion, useCase }: {
  name: string;
  cssClass: string;
  description: string;
  tailwindExpansion: string;
  useCase: string;
  background: string;
}) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <div className="p-6 bg-white border-b border-slate-100">
        <span className={cssClass}>{name}</span>
      </div>
      <div className="bg-white p-4 space-y-2">
        <div className="flex items-center justify-between">
          <code className="text-sm font-mono text-blue-600">.{cssClass}</code>
          <CopyButton text={cssClass} />
        </div>
        <p className="text-xs text-slate-500">{description}</p>
        <p className="text-xs text-slate-400 italic">Uso: {useCase}</p>
        <details className="group">
          <summary className="text-xs text-slate-400 cursor-pointer hover:text-slate-600">Ver expansão Tailwind ›</summary>
          <code className="block mt-2 text-xs text-slate-600 bg-slate-50 rounded p-2 break-all">{tailwindExpansion}</code>
        </details>
      </div>
    </div>
  );
}

export default function ComponentGallery() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Botões</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BRAND_COMPONENT_CLASSES.buttons.map(btn => (
            <ClassRow key={btn.cssClass} {...btn} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BRAND_COMPONENT_CLASSES.cards.map(card => (
            <div key={card.cssClass} className="border border-slate-200 rounded-xl overflow-hidden">
              <div className={`p-6 min-h-[120px] ${card.background === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}>
                <div className={card.cssClass + ' p-6'}>
                  <p className={card.background === 'dark' ? 'text-white font-semibold' : 'text-slate-800 font-semibold'}>
                    Título do card
                  </p>
                  <p className={card.background === 'dark' ? 'text-slate-400 text-sm mt-1' : 'text-slate-500 text-sm mt-1'}>
                    Conteúdo de exemplo para o card.
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <code className="text-sm font-mono text-blue-600">.{card.cssClass}</code>
                  <CopyButton text={card.cssClass} />
                </div>
                <p className="text-xs text-slate-500">{card.description}</p>
                <p className="text-xs text-slate-400 italic">Uso: {card.useCase}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Classes de Tipografia</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BRAND_COMPONENT_CLASSES.typography.map(t => (
            <TypographyRow key={t.cssClass} {...t} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Classes de Scroll Animation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BRAND_COMPONENT_CLASSES.scroll.map(s => (
            <div key={s.cssClass} className="border border-slate-200 rounded-xl bg-white p-4 space-y-2">
              <div className="flex items-center justify-between">
                <code className="text-sm font-mono text-blue-600">.{s.cssClass}</code>
                <CopyButton text={s.cssClass} />
              </div>
              <p className="text-xs text-slate-500">{s.description}</p>
              <p className="text-xs text-slate-400 italic">Uso: {s.useCase}</p>
              <code className="block text-xs text-slate-600 bg-slate-50 rounded p-2 break-all">{s.tailwindExpansion}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
