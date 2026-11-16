# Contrato local de agentes — Ecossistema-Chordata-v2

Este é um repositório de produto independente. Consultar PROJETO.md, BASE-STACK.md,
docs/SDLC/estado.md e planos PDR/ADR aplicáveis antes de executar.
Contrato universal aprovado: Stack-IA commit 2f19d46915a7b60367c8f3ad163d850ec2c30774.
Consultar docs/contrato-vault-codigo.md, docs/operacao-multiagente.md e
docs/adocao-rapida.md na referência do repositório universal.

Preservar arquitetura existente e mudanças locais. Executar somente o plano
aprovado e784185f51033299dd46a377cb4559499cfcbd453783864d0dccc92568c015ee; alterações relevantes fora do escopo voltam para decisão.
Não fazer deploy, modificar dados, credenciais ou outros repositórios por
consequência desta adoção. Implementar, testar e entregar PR consolidado;
registrar evidências e handoff. Instruções locais existentes prevalecem em
detalhes legítimos, sem contrariar permissões ou segurança.

## Regras locais deste repositório

- Produto: site institucional estático do Ecossistema Chordata (React + Vite). Não há backend, banco nem migrações.
- Contexto e decisões no Vault, projeto `PRJ-CHORDATA-SITE-INSTITUCIONAL` (`gestao/catalogo-projetos.md`). O Vault não é acessado pelo workspace por padrão.
- Marca: a Chordata Analytics deixou de ser marca própria; a analítica e o BI são capacidade da Chordata Consultoria. Não reintroduzir a marca no site.
- Número de soluções exibidas: 4 (Consultoria, MentAll.Vet, JurídicoPet Digital, VetConnection).
- Copy visível ao visitante: português do Brasil, sem travessões no meio de frase e sem emojis. O teste `src/test/marca.test.ts` protege essas regras.
- Verificação antes de entregar: `npm run lint` (baseline com 3 erros preexistentes em `docs/historico/baseline-lint-2026-11-16.txt`), `npm run test` e `npm run build`.
- Sem `git push`, PR ou deploy sem autorização explícita de Diogo. A Vercel pode publicar a partir do remoto.
- Relatórios antigos ficam em `docs/historico/` e não são apagados.
