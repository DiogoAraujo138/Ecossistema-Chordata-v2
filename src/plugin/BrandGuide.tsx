import { useState, useEffect } from 'react';
import { ArrowLeft, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

import ColorPalette from './components/ColorPalette';
import TypographyScale from './components/TypographyScale';
import ComponentGallery from './components/ComponentGallery';
import LogoShowcase from './components/LogoShowcase';

import { COMPANY } from './brand/company';
import { SOLUTIONS } from './brand/solutions';
import { RP3_PILLARS, METHODOLOGY_NAME, METHODOLOGY_TAGLINE } from './brand/methodology';
import { TEAM_MEMBERS } from './brand/team';

import { PROPOSAL_TEMPLATE } from './templates/proposal';
import { PRESENTATION_TEMPLATE } from './templates/presentation';
import { SOCIAL_TEMPLATES } from './templates/social';
import { EMAIL_TEMPLATES } from './templates/email';

const NAV_SECTIONS = [
  { id: 'bg-identity',    label: 'Identidade'  },
  { id: 'bg-logos',       label: 'Logos'       },
  { id: 'bg-colors',      label: 'Cores'       },
  { id: 'bg-typography',  label: 'Tipografia'  },
  { id: 'bg-components',  label: 'Componentes' },
  { id: 'bg-methodology', label: 'RP3'         },
  { id: 'bg-team',        label: 'Equipe'      },
  { id: 'bg-templates',   label: 'Templates'   },
];

function SectionHeading({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <p className="section-label mb-3">{label}</p>
      <h2 className="section-title text-slate-900">{title}</h2>
      {subtitle && <p className="section-subtitle text-slate-500 max-w-2xl">{subtitle}</p>}
    </div>
  );
}

function CopyBlock({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between bg-slate-50 border-b border-slate-200 px-4 py-2">
        <span className="text-xs font-semibold text-slate-600">{label}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-500 transition-colors"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copiado!' : 'Copiar texto'}
        </button>
      </div>
      <pre className="text-sm text-slate-700 bg-white p-5 whitespace-pre-wrap font-sans leading-relaxed overflow-x-auto max-h-80">
        {text}
      </pre>
    </div>
  );
}

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-slate-50 transition-colors text-left"
      >
        <span className="font-semibold text-slate-800">{title}</span>
        {open ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
      </button>
      {open && <div className="border-t border-slate-100 bg-white p-6 space-y-6">{children}</div>}
    </div>
  );
}

export default function BrandGuide() {
  const [activeSection, setActiveSection] = useState('bg-identity');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
        <div className="container mx-auto px-6 max-w-6xl h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
              <ArrowLeft size={16} />
              Voltar ao site
            </Link>
            <span className="text-slate-600">·</span>
            <span className="text-white font-semibold">Brand Guide</span>
            <span className="text-xs bg-blue-500/20 text-blue-400 rounded-full px-2 py-0.5 font-mono">v2</span>
          </div>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_SECTIONS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                  activeSection === id
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 max-w-6xl py-16 space-y-24">

        {/* ── 1. IDENTIDADE ── */}
        <section id="bg-identity">
          <SectionHeading
            label="Identidade da Marca"
            title={COMPANY.name}
            subtitle={COMPANY.tagline}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="card-clean p-6 md:col-span-2">
              <p className="text-xs section-label mb-3">Propósito</p>
              <p className="text-slate-700 leading-relaxed">{COMPANY.purpose}</p>
            </div>
            <div className="card-clean p-6 space-y-3">
              <p className="text-xs section-label mb-2">Informações</p>
              <div className="space-y-2 text-sm text-slate-600">
                <p><span className="font-medium text-slate-800">Fundação:</span> {COMPANY.founded}</p>
                <p><span className="font-medium text-slate-800">Sede:</span> {COMPANY.location.city}, {COMPANY.location.state}</p>
                <p><span className="font-medium text-slate-800">E-mail:</span> {COMPANY.contact.email}</p>
                <p><span className="font-medium text-slate-800">Tel:</span> {COMPANY.contact.phone}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {COMPANY.impactMetrics.map((m) => (
              <div key={m.label} className="card-clean p-5 text-center">
                <p className="text-3xl font-bold font-heading text-blue-500 mb-1">{m.value}</p>
                <p className="text-xs text-slate-500">{m.label}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">As 5 Soluções do Ecossistema</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SOLUTIONS.map((s) => (
                <div key={s.id} className="card-clean p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={s.logo} alt={s.name} className="h-8 object-contain" />
                  </div>
                  <p className="font-semibold text-slate-800 text-sm">{s.name}</p>
                  <p className="text-xs text-blue-500 font-medium mb-2">{s.tagline}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. LOGOS ── */}
        <section id="bg-logos">
          <SectionHeading
            label="Logos e Marcas"
            title="Identidade Visual"
            subtitle="Todas as variantes de logo do ecossistema — em fundos claros e escuros."
          />
          <LogoShowcase showAllSizes />
        </section>

        {/* ── 3. CORES ── */}
        <section id="bg-colors">
          <SectionHeading
            label="Paleta de Cores"
            title="Sistema de Cores"
            subtitle="Clique em qualquer cor para copiar o valor hex. Use as cores semânticas para manter consistência."
          />
          <ColorPalette showCssVars />
        </section>

        {/* ── 4. TIPOGRAFIA ── */}
        <section id="bg-typography">
          <SectionHeading
            label="Tipografia"
            title="Escala Tipográfica"
            subtitle="Montserrat para headings · Inter para corpo e labels. Ambas via Google Fonts."
          />
          <TypographyScale showClasses />
        </section>

        {/* ── 5. COMPONENTES ── */}
        <section id="bg-components">
          <SectionHeading
            label="Componentes"
            title="Classes de Componente"
            subtitle="Classes CSS customizadas definidas em src/index.css. Clique em 'Copiar' para usar no seu código."
          />
          <ComponentGallery />
        </section>

        {/* ── 6. METODOLOGIA RP3 ── */}
        <section id="bg-methodology">
          <SectionHeading
            label={METHODOLOGY_NAME}
            title="Metodologia RP3"
            subtitle={METHODOLOGY_TAGLINE}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RP3_PILLARS.map((pillar) => (
              <div key={pillar.step} className="card-clean p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-mono font-bold px-2 py-1 rounded"
                    style={{ backgroundColor: `${pillar.accentHex}20`, color: pillar.accentHex }}
                  >
                    {pillar.step}
                  </span>
                  <div>
                    <p className="font-bold text-slate-800 font-heading">{pillar.title}</p>
                    <p className="text-xs" style={{ color: pillar.accentHex }}>{pillar.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{pillar.description}</p>
                <ul className="space-y-1">
                  {pillar.items.map((item) => (
                    <li key={item.bold} className="text-xs text-slate-600 flex gap-2">
                      <span style={{ color: pillar.accentHex }}>·</span>
                      <span><strong>{item.bold}</strong> {item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. EQUIPE ── */}
        <section id="bg-team">
          <SectionHeading
            label="Equipe"
            title="Quem Está por Trás do Ecossistema"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="card-clean p-5 text-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 bg-slate-200">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add('flex', 'items-center', 'justify-center', 'bg-blue-500');
                        parent.innerHTML = `<span class="text-white font-bold text-sm">${member.initials}</span>`;
                      }
                    }}
                  />
                </div>
                <p className="text-sm font-semibold text-slate-800 leading-tight">{member.name}</p>
                <p className="text-xs text-slate-400 mt-1 leading-tight">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 8. TEMPLATES ── */}
        <section id="bg-templates">
          <SectionHeading
            label="Templates de Conteúdo"
            title="Materiais Prontos para Personalizar"
            subtitle="Copie o texto, substitua os campos em [COLCHETES] e use. Clique em cada seção para expandir."
          />

          <div className="space-y-6">
            {/* PROPOSTA COMERCIAL */}
            <Accordion title={`📄 ${PROPOSAL_TEMPLATE.title} — ${PROPOSAL_TEMPLATE.subtitle}`}>
              <p className="text-sm text-slate-500 mb-4">
                Template completo com 8 seções. Personalize os campos em [COLCHETES] antes de enviar ao cliente.
              </p>
              <div className="space-y-4">
                {(Object.entries(PROPOSAL_TEMPLATE.sections) as [string, { title: string; content: string; placeholder?: string }][]).map(([key, section]) => (
                  <CopyBlock key={key} label={section.title} text={section.content} />
                ))}
              </div>
            </Accordion>

            {/* APRESENTAÇÃO / PITCH */}
            <Accordion title={`🎯 ${PRESENTATION_TEMPLATE.title}`}>
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-500">
                <span>🎯 Público: {PRESENTATION_TEMPLATE.targetAudience}</span>
                <span>⏱ Duração: {PRESENTATION_TEMPLATE.estimatedDuration}</span>
                <span>📊 {PRESENTATION_TEMPLATE.slides.length} slides</span>
              </div>
              <div className="space-y-4">
                {PRESENTATION_TEMPLATE.slides.map((slide) => (
                  <div key={slide.id} className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-3">
                      <span className="text-xs font-mono bg-blue-500/10 text-blue-600 px-2 py-0.5 rounded">
                        Slide {slide.slideNumber}
                      </span>
                      <span className="text-sm font-semibold text-slate-700">{slide.slideTitle}</span>
                      <span className="text-xs text-slate-400 ml-auto capitalize">{slide.layout}</span>
                    </div>
                    <div className="p-5 space-y-3">
                      <div>
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">Headline</p>
                        <p className="font-semibold text-slate-800">{slide.headline}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">Conteúdo</p>
                        <pre className="text-sm text-slate-600 whitespace-pre-wrap font-sans leading-relaxed">{slide.body}</pre>
                      </div>
                      {slide.speakerNotes && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                          <p className="text-xs font-medium text-amber-700 mb-1">Notas do apresentador</p>
                          <p className="text-xs text-amber-800">{slide.speakerNotes}</p>
                        </div>
                      )}
                      {slide.visualGuide && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <p className="text-xs font-medium text-blue-700 mb-1">Guia visual</p>
                          <p className="text-xs text-blue-800">{slide.visualGuide}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Accordion>

            {/* REDES SOCIAIS */}
            <Accordion title="📱 Posts para Redes Sociais">
              <p className="text-sm text-slate-500 mb-4">
                Copie as legendas prontas, ajuste dados entre [COLCHETES] e publique.
              </p>
              <div className="space-y-4">
                {SOCIAL_TEMPLATES.map((post) => (
                  <div key={post.id} className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-3">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${post.platform === 'linkedin' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'}`}>
                        {post.platform === 'linkedin' ? 'LinkedIn' : 'Instagram'}
                      </span>
                      <span className="text-xs text-slate-500 capitalize">{post.type.replace(/-/g, ' ')}</span>
                      <span className="text-xs text-slate-400 ml-auto">{post.characterCount} chars · {post.bestPostTime}</span>
                    </div>
                    <div className="p-5 space-y-4">
                      <CopyBlock label="Legenda" text={post.caption} />
                      <div>
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">Hashtags</p>
                        <div className="flex flex-wrap gap-1.5">
                          {post.hashtags.map(tag => (
                            <span key={tag} className="text-xs bg-slate-100 text-blue-600 rounded px-2 py-0.5 font-mono">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-3">
                        <p className="text-xs font-medium text-slate-500 mb-1">Guia visual</p>
                        <p className="text-xs text-slate-600">{post.visualGuide}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Accordion>

            {/* E-MAIL */}
            <Accordion title="✉️ Templates de E-mail">
              <p className="text-sm text-slate-500 mb-4">
                E-mails prontos para prospecção, follow-up e newsletter. Personalize os [COLCHETES].
              </p>
              <div className="space-y-4">
                {EMAIL_TEMPLATES.map((email) => (
                  <div key={email.id} className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 border-b border-slate-200 px-4 py-3">
                      <p className="text-sm font-semibold text-slate-700">Assunto: {email.subject}</p>
                      <p className="text-xs text-slate-400 mt-0.5 capitalize">{email.type.replace(/-/g, ' ')}</p>
                    </div>
                    <div className="p-5 space-y-3">
                      <CopyBlock
                        label="E-mail completo"
                        text={`Assunto: ${email.subject}\n\n${email.greeting}\n\n${email.body}\n\n${email.cta}\n\n${email.signature}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Accordion>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-200 bg-white mt-16">
        <div className="container mx-auto px-6 max-w-6xl py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            Brand Guide interno — {COMPANY.name} · {COMPANY.copyright}
          </p>
          <Link to="/" className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 transition-colors">
            <ArrowLeft size={14} />
            Voltar ao site
          </Link>
        </div>
      </footer>
    </div>
  );
}
