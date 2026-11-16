# Origem da Stack-IA

- Repositório universal: https://github.com/DiogoAraujo138/stack-ia
- Commit pretendido (não declarar tag de release sem correspondência): 2f19d46915a7b60367c8f3ad163d850ec2c30774
- Referência: commit exato, sem tag de release comprovada
- Data da preparação: 2026-11-16
- Plano aprovado (hash): e784185f51033299dd46a377cb4559499cfcbd453783864d0dccc92568c015ee
- Referência da aprovação informada: Spec e plano 2026-11-16 aprovados por Diogo na conversa ('pode seguir')
- Estado: em-convergencia
- Exclusões, adaptações e equivalências: registrar após revisão.
- Testes reais e PR: pendentes de evidência.

A criação deste arquivo não prova adoção completa. Se já existia uma versão
adotada, a atualização exige revisão incremental e não sobrescrita.

## Adaptações e exclusões (2026-11-16)

- O Vault do cliente adotou a base no commit `8386acab9014a2081b3abad6d4233460e672d45f`; este repositório foi adotado no commit `2f19d46915a7b60367c8f3ad163d850ec2c30774`, mais recente. Diferença a revisar em atualização futura do Vault.
- Não adotados: `backend/`, `compose.yaml` e `infra/` do scaffold `codigo/`, porque o site é estático, sem backend nem banco.
- Equivalências: `README.md` preservado; relatórios antigos movidos para `docs/historico/`.
- Fluxo desta adoção: `docs/superpowers/specs/` e `docs/superpowers/plans/`.
