# Adoção da stack-ia, integração da Analytics à Consultoria e alinhamento de comunicação

- Projeto: `PRJ-CHORDATA-SITE-INSTITUCIONAL` (site institucional do Ecossistema Chordata v2)
- Data: 2026-11-16
- Estado: **rascunho v0.1, aguardando revisão de Diogo**
- Responsável: Diogo
- Caminho local: `C:/dev/Ecossistema-Chordata-v2` (branch `chore/adocao-stack-ia-e-marca`)
- Vault: `<caminho-do-vault>`
- Modelo: `C:/dev/stack-ia` (base adotada pelo vault: `v0.6.0-piloto`, commit `8386aca`)

## 1. Objetivo

1. Adotar o modelo stack-ia neste repositório, que hoje não tem `AGENTS.md`, `CLAUDE.md`, `BASE-STACK.md` nem `docs/` de projeto.
2. Deixar de apresentar a **Chordata Analytics como marca própria**. A inteligência de dados e o BI passam a ser capacidade da **Chordata Consultoria**.
3. Alinhar a comunicação do site: números, nomes de marca e copy coerentes entre as seções e com as regras da skill `chordata-design`.
4. Usar o site, já limpo, como **implementação de referência do design system** guardado no vault.
5. Atualizar o vault com a pasta do projeto, o catálogo, o `BASE-STACK.md` e o `estado-agentes.md`.

**Sucesso significa:** o site compila e passa nos testes; nenhuma marca "Chordata Analytics" aparece na interface; todo número de soluções bate com o número de marcas exibidas; o repositório abre com `AGENTS.md` e `CLAUDE.md` válidos; o vault aponta para o projeto e para o design system extraído.

## 2. Decisões já tomadas (Diogo, 2026-11-16)

| # | Decisão | Origem |
|---|---|---|
| D1 | A Analytics sai como marca e a Trajetória mantém a história, tratando a analítica como capacidade interna da Consultoria, sem os termos "spin-off" e "lançamento da Chordata Analytics". | Resposta a pergunta direta |
| D2 | Escopo em quatro fases, nesta ordem: adoção, conteúdo e comunicação, design system, vault. | Aprovação do recorte |
| D3 | Tudo em branches. Sem push, PR ou deploy sem autorização explícita. | Padrão do vault e do `CLAUDE.md` |

## 3. Fatos verificados (estado atual)

- SPA React 18, Vite 5, TypeScript, Tailwind 3, shadcn/ui. Deploy previsto na Vercel (`vercel.json`). Remoto: `origin` em `github.com/DiogoAraujo138/Ecossistema-Chordata-v2`.
- Árvore limpa em `main` antes desta branch. Último commit: `0b9095c feat: reorganizar seções e criar v2`.
- Seções renderizadas em `src/pages/Index.tsx`: Hero, Propósito, Trajetória, Ecossistema, Serviços, Método, Onde Atuamos, Time, Depoimentos, Contato.
- **Código morto** (sem import em nenhum lugar): `ProblemSection`, `BrandsSection`, `ImpactSection`, `ClientsSection`.
- Ocorrências da marca Analytics em código ativo:
  - `EcosystemSection.tsx`: import do logo e item em `satellites` (o diagrama orbital usa `satellites.length`, então se ajusta sozinho).
  - `Logo.tsx`: import de `chordata-analytics-new2.png` e chave `analytics` em `logoMap`.
  - `TimelineSection.tsx`: texto de 2023 ("spin-off Chordata Analytics") e item "Lançamento da Chordata Analytics".
- Ocorrências em código morto: `BrandsSection.tsx` (com link para `chordataanalytics.com.br`) e `ProblemSection.tsx`.
- Contagem "5 soluções": `HeroSection.tsx` (selo), `EcosystemSection.tsx` (subtítulo), `ProblemSection.tsx` (morto).
- Referências à analítica que **permanecem corretas** e não devem ser removidas: `PurposeSection.tsx` ("ferramentas de inteligência de dados"), `TeamSection.tsx` (cargo "Analista de dados"), `MethodSection.tsx` ("Mergulhamos nos dados"), `ContactSection.tsx` ("decisões baseadas em dados").
- Arquivos de logo da Analytics: `chordata-analytics.jpg`, `chordata-analytics.png`, `chordata-analytics-new.jpg`, `chordata-analytics-new2.png`, `chordata-analytics-white.png`.
- Travessões (`—`) aparecem em 10 arquivos de seção ativos e em `index.html`, inclusive nos rótulos de seção (`— O Ecossistema —`).
- `.abacus.donotdelete` e `bun.lockb`/`bun.lock` convivem com `package-lock.json`: três indícios de ferramentas de geração anteriores.

**Hipóteses (a confirmar na fase 1):** que o `package-lock.json` é o gerenciador oficial; que a Vercel está de fato ligada a este repositório; que os `RELATORIO_*` têm valor histórico e não devem ser apagados.

## 4. Fora do escopo

- O site externo `chordataanalytics.com.br` e o destino de seu tráfego. Fica como pendência de Diogo (seção 9).
- Outros repositórios (plataforma, landing RP3, proposta-contrato).
- Deploy, domínio, DNS e variáveis da Vercel.
- Redesenho visual do site. A fase de design system **documenta** o que existe; não muda o visual.

## 5. Design

### Fase 1. Adoção da stack-ia (repositório do site)

1. Rodar `python scripts/adocao.py planejar --projeto C:/dev/Ecossistema-Chordata-v2 --vault "<vault>" --saida <plano.json>` a partir de `C:/dev/stack-ia`.
2. Revisar o plano e só então `aplicar` (cria apenas arquivos ausentes, em branch isolada) com o hash e a referência de aprovação que o fluxo exigir. A aprovação desta spec, após a sua revisão, é a referência.
3. Mesclar manualmente, sem sobrescrever: `AGENTS.md`, `CLAUDE.md`, `BASE-STACK.md` (registrando o commit adotado da stack-ia) e `docs/` mínimo (decisões, estado). Conteúdo do `CLAUDE.md` do repositório de código: apontar para o vault e para este projeto no catálogo.
4. Tratar os `RELATORIO_*` e `ANALISE_PROJETO.*`: mover para `docs/historico/` (preserva o histórico no Git) e apontar a partir de `docs/`. Nada é apagado.
5. Do scaffold `codigo/` da stack-ia, **não** importar `backend/`, `compose.yaml` nem `infra/`: o site é estático e não tem backend. Registrar essa exclusão em `BASE-STACK.md`.
6. Rodar `python scripts/adocao.py validar` e registrar o resultado.

**Entrega da fase:** um commit separado por assunto (contratos; histórico movido; BASE-STACK).

### Fase 2. Conteúdo e comunicação (repositório do site)

**2.1 Remoção da marca Analytics**
- `EcosystemSection.tsx`: remover o item e o import. O diagrama passa a ter 4 satélites (Consultoria, MentAll.Vet, JurídicoPet Digital, VetConnection). Ampliar a descrição da Consultoria para incluir dados e BI.
- `Logo.tsx`: remover import e a chave `analytics` de `logoMap`.
- Excluir os 5 arquivos de logo da Analytics.
- `TimelineSection.tsx`:
  - 2022: mantém o texto atual (já fala em "ferramenta de Business Intelligence", sem a marca).
  - 2023, "Expansão e Estruturação do Ecossistema": remover "instituindo a empresa spin-off Chordata Analytics".
  - 2023, "Lançamento da Chordata Analytics": renomear para "Inteligência de dados na Consultoria", mantendo o fato já publicado (primeira solução de BI em dashboards de gestão para o mercado veterinário) e o ícone. Nenhum fato novo é inventado.
- **Código morto**: excluir `ProblemSection`, `BrandsSection`, `ImpactSection` e `ClientsSection`. Eles carregam a marca removida e o número antigo; o Git preserva o histórico. (Ver pergunta Q2.)

**2.2 Consistência de números e nomes**
- Selo do Hero: de "5 soluções" para "4 soluções · 1 ecossistema".
- Subtítulo do Ecossistema: de "5 soluções integradas" para "4 soluções".
- Texto do Hero: "Consultoria, dados, saúde mental, conformidade jurídica e conexão" passa a refletir que dados é parte da consultoria (por exemplo: "Consultoria com dados, saúde mental, conformidade jurídica e eventos").
- Conferir `index.html` (title, meta description, Open Graph) e `README.md` para qualquer menção a cinco soluções.

**2.3 Serviços**
Acrescentar em "Serviços Especializados" um item de **Dashboards de gestão e BI**, para que a capacidade que saiu do Ecossistema continue visível como serviço da Consultoria. Redação curta, sem promessa nova além do que o site já afirma. (Ver Q1.)

**2.4 Revisão de copy pelas regras da skill `chordata-design`**
- Sem emojis (o `README.md` e algum comentário podem ter; o foco é texto visível ao visitante).
- Sem travessões no meio de frase: aplicar as três correções da skill (dois-pontos, vírgula ou reescrita). Os rótulos `— O Ecossistema —` viram rótulo sem travessões.
- Trocar os termos genéricos listados pela skill por formulações concretas **somente** onde aparecerem. Nenhuma reescrita de voz por gosto.
- **Processo de segurança:** antes de aplicar, gerar um arquivo `docs/copy-diff.md` com cada trecho antes e depois, por seção, para revisão de Diogo. A aplicação só ocorre depois do seu aceite.

**Verificação da fase:** `npm run lint`, `npm run test`, `npm run build`; busca por `analytics` (sem diferenciar maiúsculas) deve retornar zero ocorrências em `src/` e `index.html`; revisão visual do diagrama orbital com 4 satélites e da Trajetória em desktop e celular.

### Fase 3. Design system (vault, com o site como referência)

1. Extrair do site: tokens de `src/index.css` e `tailwind.config.ts` (cores HSL, raios, sombras, tipografia Montserrat/Inter, animações `scroll-fade-up`, `fade-in-*`), componentes de seção (`section-label`, `section-title`, `btn-primary`, `btn-outline-light`) e padrões de composição.
2. Comparar com `conhecimento/design-system/tokens.css` e `tokens.json` e produzir uma tabela de **divergências**: o que o vault tem e o site não, e o inverso.
3. Registrar em `conhecimento/design-system/` um documento que declara o site como implementação de referência, com data e commit de origem. Atualizar `tokens.*` apenas onde a divergência for aprovada; o restante vira decisão em aberto.
4. Divergências já conhecidas entre a skill `chordata-design` e o site, para decidir (Q4 e Q5):
   - A skill prescreve canvas fixo em 1920 px (`min-width: 1920px`); o site é responsivo.
   - A skill prescreve Material Icons Round; o site usa Lucide.
   - A skill ainda lista a Chordata Analytics como marca com cor própria (`#10B981`); isso fica desatualizado após esta mudança. A skill fica fora deste repositório: registrar a pendência e, se aprovado, atualizá-la à parte.

### Fase 4. Vault

1. Criar `projetos/PRJ-CHORDATA-SITE-INSTITUCIONAL/` com `visao.md` e `decisoes/` (D1 a D3 acima; decisões das fases 2 e 3).
2. Atualizar `gestao/catalogo-projetos.md` (status, ambientes, vínculo com o design system).
3. Atualizar `BASE-STACK.md` do vault se algum contrato mudar; caso contrário, apenas referenciar.
4. Registrar o handoff em `gestao/estado-agentes.md`, com próximo passo verificável.

## 6. Ordem, commits e entregáveis

| Fase | Onde | Entregável |
|---|---|---|
| 1 | repo do site | commits de contratos, histórico e BASE-STACK |
| 2 | repo do site | `docs/copy-diff.md` (revisado por Diogo) e commits de remoção e copy |
| 3 | vault | documento de referência e tabela de divergências |
| 4 | vault | pasta do projeto, catálogo e estado atualizados |

O vault não tem Git. Antes de editar arquivos existentes dele, copiar o original para `gestao/` ou conferir o histórico do OneDrive e registrar isso no estado.

## 7. Riscos e proteções

| Risco | Proteção |
|---|---|
| Quebrar o diagrama orbital ao tirar um satélite | Ele usa `satellites.length`. Conferir visualmente com 4 itens. |
| Remover logo ainda importado em outro arquivo | Fazer a busca por import antes de excluir; o build acusa o que faltar. |
| Apagar relatórios úteis | Mover para `docs/historico/`, nunca excluir. |
| Reescrita de copy mudar a voz da marca | Diff de copy revisado antes de aplicar. |
| Perder o link para `chordataanalytics.com.br` | Fica registrado como pendência; o link só existia em código morto. |
| Edição do vault sem Git | Cópia de segurança e registro no estado, conforme seção 6. |
| Deploy acidental | Sem push nem deploy. A Vercel pode publicar a partir do remoto, e isso só acontece depois de push autorizado. |

## 8. Teste e validação

- Automáticos: `npm run lint`, `npm run test` (Vitest), `npm run build`.
- Busca: zero ocorrências de "analytics" em `src/` e `index.html` ao fim da fase 2.
- Busca: zero ocorrências de `—` e de emojis em texto visível ao visitante ao fim da fase 2.
- Manual: diagrama orbital (4 satélites), Trajetória e Serviços em desktop e celular.
- Stack: `adocao.py validar` ao fim da fase 1; `python scripts/validar-stack.py` não se aplica a este repositório.

## 9. Perguntas em aberto (não bloqueiam a fase 1)

- **Q1.** O item de Serviços "Dashboards de gestão e BI" deve ser criado? (Padrão proposto: sim, em Serviços Especializados.)
- **Q2.** Excluir as quatro seções sem uso (`ProblemSection`, `BrandsSection`, `ImpactSection`, `ClientsSection`)? (Padrão proposto: sim; histórico preservado no Git.)
- **Q3.** O que fazer com `chordataanalytics.com.br`: redirecionar para a Consultoria, manter no ar ou desativar? Decisão fora deste repositório.
- **Q4.** O design system adota o site como referência **responsiva** e abandona o canvas fixo de 1920 px da skill?
- **Q5.** Adotar Lucide como biblioteca de ícones do site e atualizar a skill, ou migrar o site para Material Icons Round?

## 10. Próximo passo verificável

Após a sua aprovação desta spec: invocar `writing-plans` e produzir o plano de implementação em `docs/superpowers/plans/`, com tarefas por fase. O plano também passa pela sua revisão antes de qualquer alteração de código.
