# Inventário inicial — adoção Stack-IA

- Projeto: Ecossistema-Chordata-v2
- Vault informado: <caminho-do-vault>
- Git baseline: 31e8f089e30468ffbbf9c77b200e518382726f17
- Plano: e784185f51033299dd46a377cb4559499cfcbd453783864d0dccc92568c015ee
- Indicadores tecnológicos: package.json, tsconfig.json
- Arquivos a revisar por já existirem: README.md

## Evidências verificadas em 2026-11-16

- Arquitetura: SPA React 18 + Vite 5 + Tailwind 3 + shadcn/ui; 10 seções ativas em `src/pages/Index.tsx`; 4 seções sem uso (`ProblemSection`, `BrandsSection`, `ImpactSection`, `ClientsSection`).
- Dados e integrações: nenhum banco; contato via WhatsApp (`WhatsAppButton.tsx`).
- Comandos: `npm run lint|test|build` conforme `PROJETO.md`.
- Documentos existentes: `README.md` (preservado), relatórios antigos (movidos para `docs/historico/`).
- Vault: projeto catalogado como `PRJ-CHORDATA-SITE-INSTITUCIONAL`; pasta do projeto a criar (plano, task 7).
- Pendências: gerenciador de pacotes oficial; ligação com a Vercel; repositório público antigo `Projeto-Chordata-2026`.
