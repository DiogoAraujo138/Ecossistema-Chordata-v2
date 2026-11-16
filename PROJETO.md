# Identidade e operação do projeto

- Projeto: Ecossistema-Chordata-v2 (site institucional do Ecossistema Chordata)
- ID no catálogo do Vault: `PRJ-CHORDATA-SITE-INSTITUCIONAL`
- Raiz do código: `C:\dev\Ecossistema-Chordata-v2`
- Repositório GitHub (observado): https://github.com/DiogoAraujo138/Ecossistema-Chordata-v2.git
- Vault de contexto: `<caminho-do-vault>`
- Stack-IA commit: `2f19d46915a7b60367c8f3ad163d850ec2c30774`
- Plano de adoção: `e784185f51033299dd46a377cb4559499cfcbd453783864d0dccc92568c015ee`
- Estado: em-convergencia

## Tecnologia (verificada em 2026-11-16)

- SPA React 18.3, Vite 5, TypeScript 5.8, Tailwind 3.4, shadcn/ui, React Router 6. Ícones: Lucide. Fontes: Montserrat e Inter.
- Sem backend, banco, migrações ou backup de dados.
- Plugin de desenvolvimento `lovable-tagger` presente em `vite.config.ts` (herança de ferramenta de geração anterior).

## Comandos (executados em 2026-11-16)

| Comando | Resultado |
|---|---|
| `npm install` | ok |
| `npm run dev` | servidor em `http://localhost:8080` (porta em `vite.config.ts`; não executado nesta verificação) |
| `npm run lint` | 3 erros e 8 avisos **preexistentes** (ver `docs/historico/baseline-lint-2026-11-16.txt`) |
| `npm run test` | 1 teste passando (baseline) |
| `npm run build` | conclui; saída em `dist/` |

## Publicação

- `vercel.json` presente (framework vite, saída `dist`, rewrite para `/index.html`, cabeçalhos de segurança básicos).
- **Hipótese não verificada:** a Vercel está ligada a este repositório e publica a partir do remoto. Confirmar com Diogo antes de qualquer push.
- Rollback: reverter o commit no remoto e republicar; não há dados a restaurar.

## Pontos a verificar

- Playwright está configurado (`playwright.config.ts`), mas não há testes E2E no repositório.
- O `RELATORIO_DEPLOY` histórico cita o repositório público `DiogoAraujo138/Projeto-Chordata-2026` (março de 2026). Verificar se ainda existe e se contém conteúdo da marca Analytics.
- `bun.lock`, `bun.lockb` e `package-lock.json` convivem; gerenciador oficial a decidir (hipótese: npm).
