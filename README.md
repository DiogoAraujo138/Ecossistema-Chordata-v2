# Ecossistema Chordata - Site Institucional v2

Site institucional do Ecossistema Chordata — Gestão Integrada para o Mercado Veterinário.

## Stack Tecnológica

- **React 18** + **TypeScript**
- **Vite 5** (build tool)
- **Tailwind CSS 3** + **shadcn/ui**
- **React Router DOM 6**
- **Lucide React** (ícones)

## Ordem das Seções (v2)

| # | Seção | ID (âncora) |
|---|-------|-------------|
| 1 | Hero | — |
| 2 | Propósito | `#proposito` |
| 3 | Trajetória (Timeline) | `#trajetoria` |
| 4 | Ecossistema | `#ecossistema` |
| 5 | Nossos Serviços | `#servicos` |
| 6 | Nosso Método | `#metodo` |
| 7 | Onde Atuamos | `#atuacao` |
| 8 | Equipe (Time) | `#time` |
| 9 | Depoimentos | `#depoimentos` |
| 10 | Contato | `#contato` |

## Mudanças da v1 para v2

- **Reorganização completa** da ordem das seções
- **Remoção** das seções: Diferenciais e Marcas (arquivos apagados em 2026-11-16)
- **Atualização da navegação** (Header) para refletir nova ordem
- **Adição de IDs de âncora** nas seções Trajetória e Depoimentos

## Como Rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build
```

O servidor de desenvolvimento roda em `http://localhost:8080`.

## Estrutura Principal

```
src/
├── pages/
│   └── Index.tsx          # Página principal (orquestra seções)
├── components/
│   ├── Header.tsx         # Navegação responsiva
│   ├── Logo.tsx           # Componente de logo
│   └── sections/          # Seções do site
│       ├── HeroSection.tsx
│       ├── PurposeSection.tsx
│       ├── TimelineSection.tsx
│       ├── EcosystemSection.tsx
│       ├── ServicesSection.tsx
│       ├── MethodSection.tsx
│       ├── LocationSection.tsx
│       ├── TeamSection.tsx
│       ├── TestimonialsSection.tsx
│       └── ContactSection.tsx
└── assets/                # Imagens e logos
```

## Licença

Projeto privado — Chordata Consultoria Digital © 2026

## Marca e comunicação

- O ecossistema exibe 4 soluções: Chordata Consultoria, MentAll.Vet, JurídicoPet Digital e VetConnection.
- Inteligência de dados e BI são capacidade da Chordata Consultoria. A Chordata Analytics não é mais marca própria do site.
- Regras de copy (sem travessões nem emojis) são protegidas por `src/test/marca.test.ts`.

## Documentação

- Contratos de agentes: `AGENTS.md`, `CLAUDE.md`, `PROJETO.md`, `BASE-STACK.md`.
- Estado da adoção: `docs/SDLC/estado.md`. Spec e plano: `docs/superpowers/`. Relatórios antigos: `docs/historico/`.
