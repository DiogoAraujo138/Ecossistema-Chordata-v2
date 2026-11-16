# Adoção da stack-ia e Analytics dentro da Consultoria: plano de implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adotar a stack-ia no repositório do site, retirar a Chordata Analytics como marca (a analítica vira capacidade da Consultoria), alinhar números e copy, e registrar o site como referência do design system no vault.

**Architecture:** Mudanças no repositório do site em commits pequenos, guiadas por testes de proteção em Vitest que leem os arquivos-fonte (sem renderizar). Depois, documentação no vault (sem Git) com cópia de segurança antes de editar arquivo existente.

**Tech Stack:** React 18, Vite 5, TypeScript, Tailwind, Vitest (jsdom), ESLint; Python 3 para `C:/dev/stack-ia/scripts/adocao.py`.

**Spec:** `docs/superpowers/specs/2026-11-16-adocao-stack-ia-e-marca-design.md`

## Global Constraints

- Branch de trabalho: `chore/adocao-stack-ia-e-marca`. Sem push, PR ou deploy sem autorização explícita de Diogo.
- Idioma: português do Brasil. Fatos separados de hipóteses.
- Marca "Chordata Analytics": zero ocorrências, sem diferenciar maiúsculas, em `src/` e `index.html` ao fim da Task 3. Referências a "dados" e "Business Intelligence" permanecem.
- Número de soluções: **4** (Consultoria, MentAll.Vet, JurídicoPet Digital, VetConnection), em todo texto visível.
- Copy: sem travessões (`—`, `–`) no meio de frase e sem emojis em texto visível ao visitante. Substituir por dois-pontos, vírgula ou reescrita.
- Nenhum fato novo na Trajetória: só reaproveitar o que o site já publica.
- Nada é apagado fora do que a spec lista; relatórios antigos vão para `docs/historico/`.
- Vault sem Git: antes de editar arquivo existente, copiar o original para `gestao/backup-2026-11-16/` e registrar no `estado-agentes.md`.
- Não editar outros repositórios nem o site externo `chordataanalytics.com.br`.

## Review Focus

1. Lista mobile do Ecossistema (restante de `EcosystemSection.tsx` após a linha 120) pode ter contagem ou índice fixo para 5 itens: testar que nenhum índice ou literal depende de 5.
2. Chave `analytics` em `logoMap` pode ter outro consumidor (`<Logo variant="analytics">`): o `vite build` e `tsc` devem acusar; teste de busca confirma zero uso.
3. Texto do `index.html` (title, meta description, Open Graph) pode repetir "5 soluções" ou citar Analytics: teste varre o arquivo.
4. Travessões também aparecem em strings dentro de `index.html` e em rótulos como `— O Ecossistema —`: teste varre seções e `index.html`.
5. Windows converte LF em CRLF no stage; não alterar o fim de linha dos arquivos existentes ao mover os relatórios (usar `git mv`).

---

### Task 0: Preparar o ambiente de trabalho

**Files:**
- Modify: nenhum arquivo; configuração local do Git.

- [ ] **Step 1: Obter a identidade Git com Diogo**

Perguntar a Diogo o `user.name` e o `user.email` para este repositório. Não inventar, não usar `--global`.

- [ ] **Step 2: Configurar só neste repositório**

Run: `cd /c/dev/Ecossistema-Chordata-v2 && git config user.name "<nome>" && git config user.email "<email>"`
Expected: sem saída; `git config user.name` imprime o valor.

- [ ] **Step 3: Commitar spec e plano**

```bash
git add docs/superpowers/specs docs/superpowers/plans
git commit -m "docs: spec e plano da adocao da stack-ia e integracao da Analytics"
```
Expected: commit criado na branch `chore/adocao-stack-ia-e-marca`.

- [ ] **Step 4: Linha de base verde**

Run: `npm install && npm run lint && npm run test && npm run build`
Expected: lint sem erros, 1 teste passando, build conclui. Se `lint` já falhar antes de qualquer mudança, registrar a lista em `docs/historico/baseline-lint.txt` e seguir só com erros novos.

---

### Task 1: Adotar a stack-ia no repositório

**Files:**
- Create: `AGENTS.md`, `CLAUDE.md`, `BASE-STACK.md`, `docs/README.md`, `docs/decisoes.md`, `docs/estado.md` (mesclando o que `adocao.py aplicar` gerar)
- Create: `docs/historico/` com os `RELATORIO_*` e `ANALISE_PROJETO.*` movidos por `git mv`

**Interfaces:**
- Consumes: `python scripts/adocao.py {planejar,aplicar,validar}` em `C:/dev/stack-ia`; commit adotado do vault `8386acab9014a2081b3abad6d4233460e672d45f`.
- Produces: `BASE-STACK.md` com tag, commit, data e exclusões; `docs/estado.md` onde as próximas tasks registram o handoff.

- [ ] **Step 1: Gerar o plano de adoção (somente leitura)**

Run: `cd /c/dev/stack-ia && python scripts/adocao.py planejar --projeto C:/dev/Ecossistema-Chordata-v2 --vault "<caminho-do-vault>" --saida "$TEMP/plano-site.json"`
Expected: arquivo JSON criado; ler a lista de arquivos ausentes e o hash integral.

- [ ] **Step 2: Aplicar em prévia**

Run: `python scripts/adocao.py aplicar --plano "$TEMP/plano-site.json" --confirmar <HASH_INTEGRAL> --aprovacao-ref "Spec 2026-11-16 aprovada por Diogo"`
Expected: prévia lista só arquivos ausentes, nenhum existente alterado. Ler `docs/adocao-rapida.md` na stack-ia para saber se a execução cria branch própria.

- [ ] **Step 3: Executar e trazer para a branch de trabalho**

Repetir o comando do Step 2 com `--executar`. Se o fluxo criou uma branch própria, mesclar nela com `git merge --no-ff` para `chore/adocao-stack-ia-e-marca`; se escreveu na branch atual, seguir.
Expected: `git status` mostra apenas arquivos novos.

- [ ] **Step 4: Excluir o que não se aplica**

Remover do resultado qualquer scaffold de `backend/`, `compose.yaml` ou `infra/` (o site é estático). Registrar a exclusão em `BASE-STACK.md`.

- [ ] **Step 5: Escrever `AGENTS.md`, `CLAUDE.md` e `BASE-STACK.md` do site**

`CLAUDE.md`: mandar ler `AGENTS.md`, apontar para o vault e para `PRJ-CHORDATA-SITE-INSTITUCIONAL`, declarar a regra "sem push nem deploy sem autorização" e a proibição de gravar credenciais. `BASE-STACK.md`: versão `v0.6.0-piloto`, commit `8386acab9014a2081b3abad6d4233460e672d45f`, data 2026-11-16, adaptações (site estático, sem backend) e responsável Diogo.

- [ ] **Step 6: Mover o histórico sem apagar**

```bash
mkdir -p docs/historico
git mv RELATORIO_ASSETS.md RELATORIO_ASSETS.pdf RELATORIO_DEPLOY.md RELATORIO_DEPLOY.pdf RELATORIO_MELHORIAS.md RELATORIO_MELHORIAS.pdf RELATORIO_MELHORIAS_V3.md RELATORIO_MELHORIAS_V3.pdf ANALISE_PROJETO.md ANALISE_PROJETO.pdf docs/historico/
```
Expected: `git status` mostra `renamed`, nenhum `deleted`.

- [ ] **Step 7: Validar**

Run: `cd /c/dev/stack-ia && python scripts/adocao.py validar --projeto C:/dev/Ecossistema-Chordata-v2 --vault "<vault>"`
Expected: sem erros bloqueantes; colar o resultado em `docs/estado.md`.

- [ ] **Step 8: Commitar em três commits por assunto**

```bash
git add AGENTS.md CLAUDE.md docs/README.md docs/decisoes.md docs/estado.md && git commit -m "docs: contratos stack-ia (AGENTS e CLAUDE)"
git add docs/historico && git commit -m "docs: mover relatorios antigos para docs/historico"
git add BASE-STACK.md && git commit -m "docs: registrar base stack-ia adotada"
```

---

### Task 2: Testes de proteção (falhando primeiro)

**Files:**
- Create: `src/test/marca.test.ts`

**Interfaces:**
- Produces: três suítes lidas por todas as tasks seguintes como critério de pronto:
  `describe("marca Analytics")`, `describe("contagem de soluções")`, `describe("copy")`.

- [ ] **Step 1: Escrever o teste**

Em `src/test/marca.test.ts`, usando `node:fs` e `node:path` (o ambiente jsdom do Vitest ainda tem acesso ao `fs`). Helper `arquivos(dir, ext): string[]` que lista recursivamente, ignorando `src/components/ui/` e `node_modules`. Testes, com estes nomes e asserções:

- `it("nenhum arquivo ativo cita Analytics")`: para cada arquivo em `src/**/*.{ts,tsx}` e `index.html`, `expect(texto).not.toMatch(/analytics/i)`.
- `it("nenhum logo da Analytics em assets")`: `expect(readdirSync("src/assets/logos").filter(n => /analytics/i.test(n))).toEqual([])`.
- `it("seções sem uso foram removidas")`: `existsSync` falso para `ProblemSection.tsx`, `BrandsSection.tsx`, `ImpactSection.tsx`, `ClientsSection.tsx` em `src/components/sections/`.
- `it("Hero e Ecossistema falam em 4 soluções")`: `HeroSection.tsx` contém `"4 soluções"`; `EcosystemSection.tsx` contém `"4 soluções"`; nenhum arquivo ativo nem `index.html` contém `"5 soluções"` nem `"cinco soluções"` (sem diferenciar maiúsculas).
- `it("Ecossistema não depende de 5 itens")`: `EcosystemSection.tsx` contém `satellites.length` e não casa `/(\b5\s*(itens|satélites|marcas)|length\s*[=<>!]=*\s*5|\[4\])/`.
- `it("copy sem travessões")`: nenhum arquivo em `src/components/sections/*.tsx`, `src/components/Header.tsx`, `src/pages/*.tsx` e `index.html` contém `—` nem `–`.
- `it("copy sem emojis")`: os mesmos arquivos não casam `/\p{Extended_Pictographic}/u`.

- [ ] **Step 2: Rodar e ver falhar**

Run: `npx vitest run src/test/marca.test.ts`
Expected: FAIL nas 7 asserções acima (marca presente, logos presentes, seções existem, "5 soluções", travessões).

- [ ] **Step 3: Commitar o teste vermelho**

```bash
git add src/test/marca.test.ts && git commit -m "test: protecoes de marca, contagem e copy (falhando)"
```

---

### Task 3: Remover a marca Analytics e o código morto

**Files:**
- Modify: `src/components/sections/EcosystemSection.tsx`, `src/components/Logo.tsx`, `src/components/sections/TimelineSection.tsx`
- Delete: `src/components/sections/{ProblemSection,BrandsSection,ImpactSection,ClientsSection}.tsx`
- Delete: `src/assets/logos/chordata-analytics{,-new,-new2,-white}.{png,jpg}` (os cinco arquivos listados na spec)

**Interfaces:**
- Consumes: testes da Task 2.
- Produces: `satellites` com 4 itens, em ordem Consultoria, MentAll.Vet, JurídicoPet Digital, VetConnection; `LogoVariant` sem `'analytics'`.

- [ ] **Step 1: Ler o restante de `EcosystemSection.tsx`**

Ler da linha 120 ao fim (lista mobile e cartões). Anotar qualquer índice, `slice` ou literal que dependa do número de itens (Review Focus 1).

- [ ] **Step 2: Editar `EcosystemSection.tsx`**

Remover o import `logoAnalytics` e o item `Chordata Analytics` de `satellites`. Atualizar o item da Consultoria para `tagline: 'Estratégia, Gestão e Dados'` e `desc: 'Estratégia, gestão, desenvolvimento de negócios e inteligência de dados, com dashboards de gestão e soluções de BI, para clínicas, hospitais e empresas do mercado veterinário.'`. Corrigir qualquer dependência de contagem achada no Step 1.

- [ ] **Step 3: Editar `Logo.tsx`**

Remover o import `chordataAnalytics` e a chave `analytics` de `logoMap`.

- [ ] **Step 4: Editar `TimelineSection.tsx`**

- 2023 "Expansão e Estruturação do Ecossistema": `descricao` passa a `'A Chordata já se torna presente em 4 estados (RS, SC, PA, MA), desenvolvendo o MVP da MentAll.Vet com seu 1º Simpósio de Saúde Mental na Medicina Veterinária e Mercado de Trabalho (Caxias do Sul - RS).'`
- 2023 marco: `titulo: 'Inteligência de dados na Consultoria'`, `descricao: 'Lançamento da primeira solução de Business Intelligence em dashboards de gestão para o mercado veterinário, dentro da Chordata Consultoria.'`, ícone `BarChart3` mantido.

- [ ] **Step 5: Apagar seções mortas e logos**

```bash
git rm src/components/sections/ProblemSection.tsx src/components/sections/BrandsSection.tsx src/components/sections/ImpactSection.tsx src/components/sections/ClientsSection.tsx
git rm src/assets/logos/chordata-analytics.jpg src/assets/logos/chordata-analytics.png src/assets/logos/chordata-analytics-new.jpg src/assets/logos/chordata-analytics-new2.png src/assets/logos/chordata-analytics-white.png
```
Antes, `grep -rn "<nome>" src` para cada um confirmar zero import.

- [ ] **Step 6: Verificar**

Run: `npx vitest run src/test/marca.test.ts -t "Analytics"` e depois `npm run build && npm run lint`
Expected: as 3 primeiras asserções do teste passam; build e lint sem erros novos.

- [ ] **Step 7: Verificação visual**

Run: `npm run dev`; abrir `http://localhost:8080`. Conferir o diagrama orbital com 4 satélites (sem sobreposição nem espaço vazio), a lista mobile do Ecossistema em largura de celular e a Trajetória.
Expected: diagrama equilibrado; Trajetória sem menção a spin-off. Se o diagrama ficar torto, ajustar `radius` em `EcosystemSection.tsx` e registrar.

- [ ] **Step 8: Commit**

```bash
git add -A src && git commit -m "feat(site): Analytics passa a ser capacidade da Consultoria"
```

---

### Task 4: Alinhar números, Hero e Serviços

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`, `src/components/sections/EcosystemSection.tsx`, `src/components/sections/ServicesSection.tsx`, `index.html`, `README.md`

**Interfaces:**
- Consumes: teste `contagem de soluções` da Task 2.
- Produces: nenhum símbolo novo; item de serviço em `tabs[1].items`.

- [ ] **Step 1: Hero**

Selo: `4 soluções · 1 ecossistema · Transformação completa`. Parágrafo: `Consultoria com dados, saúde mental, conformidade jurídica e eventos, tudo integrado para levar sua clínica, hospital ou empresa veterinária ao próximo nível.`

- [ ] **Step 2: Ecossistema**

Subtítulo: `4 soluções integradas. Um único ecossistema. Transformação completa.`

- [ ] **Step 3: Serviços**

Em `tabs` (aba `Serviços Especializados`), acrescentar após "Valuation para Clínicas e Hospitais" o item `{ title: 'Dashboards de Gestão e BI', desc: 'Dashboards de gestão e soluções de BI para decidir com base em dados.', icon: BarChart3 }` e importar `BarChart3` de `lucide-react`.

- [ ] **Step 4: `index.html` e `README.md`**

Ler `<title>`, `meta description` e Open Graph de `index.html`; trocar qualquer "5 soluções" ou citação da Analytics por "4 soluções" e a formulação da Consultoria. No `README.md`, atualizar a lista de seções se algo mudou e remover emojis do título e dos cabeçalhos.

- [ ] **Step 5: Verificar**

Run: `npx vitest run src/test/marca.test.ts -t "soluções"` e `npm run build`
Expected: testes de contagem passam; build conclui.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "feat(site): 4 solucoes e servico de BI na Consultoria"
```

---

### Task 5: Revisão de copy com aceite

**Files:**
- Create: `docs/copy-diff.md`
- Modify: seções ativas em `src/components/sections/*.tsx`, `src/components/Header.tsx`, `index.html`

**Interfaces:**
- Consumes: teste `copy` da Task 2; regras da skill `chordata-design` (seção 8).
- Produces: `docs/copy-diff.md`, com colunas Arquivo, Antes, Depois e Motivo, uma linha por trecho alterado.

- [ ] **Step 1: Inventariar**

Run: `grep -rnE "—|–" src/components/sections src/components/Header.tsx src/pages index.html`
Expected: lista completa de trechos (inclui rótulos `— O Ecossistema —`).

- [ ] **Step 2: Propor correções em `docs/copy-diff.md`**

Para cada trecho, aplicar uma das três correções da skill (dois-pontos, vírgula, reescrita). Rótulos: `— O Ecossistema —` vira `O Ecossistema` (o estilo `section-label` já é caixa alta e espaçado). Termos genéricos da skill ("soluções inovadoras", "excelência", "alta performance") só são trocados se aparecerem. Não alterar fatos, números nem nomes.

- [ ] **Step 3: Aceite**

Mostrar `docs/copy-diff.md` a Diogo. Não aplicar nada antes do "sim" explícito. Se pedir ajustes, editar o arquivo e mostrar de novo.

- [ ] **Step 4: Aplicar**

Aplicar exatamente o que está aceito no diff, arquivo por arquivo.

- [ ] **Step 5: Verificar**

Run: `npx vitest run && npm run lint && npm run build`
Expected: todos os testes de `marca.test.ts` passam, incluindo `copy sem travessões` e `copy sem emojis`.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "feat(site): copy alinhada as regras de comunicacao Chordata"
```

---

### Task 6: Design system no vault (site como referência)

**Files:**
- Create: `conhecimento/design-system/Referencia-Site-Institucional.md` (no vault)
- Modify: `conhecimento/design-system/README.md` (no vault, com backup)

**Interfaces:**
- Consumes: `src/index.css`, `tailwind.config.ts`, `src/components/sections/*` do site no commit da Task 5; `conhecimento/design-system/tokens.css` e `tokens.json` do vault.
- Produces: documento com seções `Origem`, `Tokens extraídos`, `Padrões de seção`, `Divergências` e `Decisões em aberto`.

- [ ] **Step 1: Backup do README**

Copiar `conhecimento/design-system/README.md` para `gestao/backup-2026-11-16/README-design-system.md`.

- [ ] **Step 2: Extrair tokens**

De `src/index.css` e `tailwind.config.ts`: variáveis HSL de `:root`, `--radius`, fontes (Montserrat para títulos, Inter para texto), classes utilitárias (`section-label`, `section-title`, `section-subtitle`, `btn-primary`, `btn-outline-light`, `scroll-fade-up`, `animate-fade-in-*`) e as cores de fundo usadas por seção (slate-900, slate-800, branco). Registrar valores exatos, sem arredondar.

- [ ] **Step 3: Comparar com os tokens do vault**

Montar a tabela `Divergências` com colunas: item, valor no vault, valor no site, ação sugerida. Incluir as divergências conhecidas da skill: canvas fixo de 1920 px contra layout responsivo; Material Icons Round contra Lucide; Analytics ainda listada na skill.

- [ ] **Step 4: Escrever o documento**

Declarar o site como implementação de referência, com o commit de origem (`git rev-parse HEAD`) e a data. **Não alterar `tokens.css` nem `tokens.json`**: divergências vão para `Decisões em aberto` (Q4 e Q5 da spec, com o padrão proposto) até Diogo decidir.

- [ ] **Step 5: Linkar no README do design system**

Adicionar uma linha apontando para o novo documento.

- [ ] **Step 6: Verificar**

Conferir que os links do vault resolvem: `grep -o "\[\[[^]]*\]\]" conhecimento/design-system/Referencia-Site-Institucional.md` e abrir cada alvo.
Expected: nenhum link quebrado.

---

### Task 7: Pasta do projeto, catálogo e estado no vault

**Files:**
- Create: `projetos/PRJ-CHORDATA-SITE-INSTITUCIONAL/visao.md`, `projetos/PRJ-CHORDATA-SITE-INSTITUCIONAL/decisoes/Registro-de-Decisoes.md`
- Modify: `gestao/catalogo-projetos.md`, `gestao/estado-agentes.md`, `BASE-STACK.md` (só se a base mudou), todos com backup

**Interfaces:**
- Consumes: spec, `docs/copy-diff.md` e commits das Tasks 1 a 5.
- Produces: decisões `DEC-SITE-001` a `DEC-SITE-004`: D1, D2, D3 da spec e a decisão de excluir seções mortas (Q2).

- [ ] **Step 1: Backups**

Copiar os três arquivos existentes para `gestao/backup-2026-11-16/`.

- [ ] **Step 2: Criar `visao.md` e o registro de decisões**

`visao.md`: objetivo do site, público (gestores de clínicas e hospitais veterinários), estado, repositório, ligação com o design system. Registro: as quatro decisões, cada uma com data, origem e consequência.

- [ ] **Step 3: Atualizar o catálogo**

Na linha `PRJ-CHORDATA-SITE-INSTITUCIONAL`: status `ajuste-em-desenvolvimento` mantido; ambientes `local / Vercel (a confirmar)`; adicionar em Dependências "referência do design system do vault".

- [ ] **Step 4: Registrar o handoff em `estado-agentes.md`**

Nova primeira linha: data 2026-11-16, raiz `vault + C:/dev/Ecossistema-Chordata-v2`, agente Claude Code, estado, evidências (commits e arquivos), bloqueios (identidade Git se ainda aberta; Q3; decisão Q4 e Q5) e próximo passo ("Diogo revisa a branch e autoriza push/PR").

- [ ] **Step 5: Verificar**

Run: busca de links quebrados nos arquivos novos e conferir que o catálogo ainda lista os 4 projetos.
Expected: 4 linhas na tabela; nenhum link quebrado.

---

### Task 8: Verificação final

**Files:**
- Modify: nenhum.

- [ ] **Step 1: Rodar tudo no repositório**

Run: `npm run lint && npm run test && npm run build`
Expected: tudo verde.

- [ ] **Step 2: Buscas de aceite**

Run: `grep -rniE "analytics" src index.html` e `grep -rnE "—|–" src/components/sections src/pages index.html`
Expected: nenhuma saída em ambos.

- [ ] **Step 3: Revisão do diff**

Run: `git diff --stat main...HEAD`
Expected: alterações só nos arquivos listados neste plano. Nenhum arquivo apagado fora da lista.

- [ ] **Step 4: Entregar sem publicar**

Informar a Diogo: branch, lista de commits, resultado dos comandos, o que ficou pendente (Q3) e que push, PR e deploy aguardam autorização. Não rodar `git push`.
