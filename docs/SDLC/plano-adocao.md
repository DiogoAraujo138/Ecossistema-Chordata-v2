# Plano de convergência — adoção Stack-IA

- Hash do plano: e784185f51033299dd46a377cb4559499cfcbd453783864d0dccc92568c015ee
- Referência da aprovação informada: Spec e plano 2026-11-16 aprovados por Diogo na conversa ('pode seguir')
- Projeto: C:\dev\Ecossistema-Chordata-v2
- Vault: <caminho-do-vault>
- Versão da metodologia: 2f19d46915a7b60367c8f3ad163d850ec2c30774

## Ações automáticas incluídas neste pacote

- criar: AGENTS.md
- criar: CLAUDE.md
- preservar-e-revisar: README.md
- criar: PROJETO.md
- criar: BASE-STACK.md
- criar: docs/SDLC/estado.md
- criar: docs/SDLC/inventario-adocao.md
- criar: docs/SDLC/plano-adocao.md
- criar: docs/SDLC/relatorio-validacao-adocao.md

## A completar pelo agente

Mapa função → fonte atual → evidência → preservar/adaptar/consolidar/investigar,
incluindo PDR/ADR, testes de caracterização, riscos, exclusões, rollback,
impacto no Vault e critérios de aceite. Nenhum código ou arquivo existente foi
removido, substituído ou migrado automaticamente. Mudanças fora deste pacote
dependem de aprovação material própria.

## Convergência (preenchido em 2026-11-16)

| Função | Fonte atual | Evidência | Decisão |
|---|---|---|---|
| Orientação do projeto | `README.md` | existe desde a v1 | preservar |
| Contratos de agentes | ausentes | `adocao.py planejar` | criar (feito) |
| Relatórios de análise e deploy | `RELATORIO_*`, `ANALISE_PROJETO.*` | raiz do repositório | mover para `docs/historico/` |
| Backend e infra do scaffold | `codigo/backend`, `compose.yaml`, `infra/` | site estático | não adotar |
| Spec e plano do trabalho | `docs/superpowers/` | este fluxo | manter |

Critérios de aceite: `npm run lint` sem erros além do baseline, `npm run test` verde, `npm run build` verde, `adocao.py validar` sem pendência bloqueante.
Rollback: descartar a branch `chore/adocao-stack-ia-e-marca`; nada foi publicado.
