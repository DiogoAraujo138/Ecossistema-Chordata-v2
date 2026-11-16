# Diff de copy: remoção de travessões (aguardando aceite de Diogo)

- Data: 2026-11-16
- Regra aplicada: skill `chordata-design`, seção 8. Sem travessão (`—`, `–`) no meio de frase; corrigir com dois-pontos, vírgula ou reescrita.
- Escopo: texto visível ao visitante e `index.html`. Nenhum fato, número ou nome é alterado.
- Estado: **nada aplicado**. O teste `copy > sem travessões em texto visível` segue vermelho até o aceite.

## A. Rótulos de seção (9 trechos)

O estilo `section-label` já é caixa alta e espaçado, então os travessões decorativos saem e o rótulo fica limpo.

| Arquivo | Antes | Depois |
|---|---|---|
| `ContactSection.tsx:26` | `— Contato —` | `Contato` |
| `EcosystemSection.tsx:45` | `— O Ecossistema —` | `O Ecossistema` |
| `LocationSection.tsx:80` | `— Onde Atuamos —` | `Onde Atuamos` |
| `MethodSection.tsx:81` | `— Nosso Método —` | `Nosso Método` |
| `PurposeSection.tsx:33` | `— Nosso Propósito —` | `Nosso Propósito` |
| `ServicesSection.tsx:157` | `— Nossos Serviços —` | `Nossos Serviços` |
| `TeamSection.tsx:49` | `— Nosso Time —` | `Nosso Time` |
| `TestimonialsSection.tsx:47` | `— Depoimentos —` | `Depoimentos` |
| `TimelineSection.tsx:189` | `— Nossa Trajetória —` | `Nossa Trajetória` |

## B. Frases e cargos (12 trechos)

| Arquivo | Antes | Depois | Motivo |
|---|---|---|---|
| `ContactSection.tsx:120` | `Instituto Caldeira — Tv. São José, 455, ...` | `Instituto Caldeira, Tv. São José, 455, ...` | vírgula |
| `MethodSection.tsx:86` | `...de qualquer negócio veterinário — integrando processos, pessoas e planejamento...` | `...de qualquer negócio veterinário, integrando processos, pessoas e planejamento...` | vírgula |
| `TestimonialsSection.tsx:8` | `Diretora do CPEA — Centro Profissionalizante de Estética Animal` | `Diretora do CPEA, Centro Profissionalizante de Estética Animal` | vírgula |
| `TestimonialsSection.tsx:13` | `Representante Comercial — 24 anos de atuação no mercado` | `Representante Comercial com 24 anos de atuação no mercado` | reescrita |
| `TestimonialsSection.tsx:18` | `Diretor — BioSul Importadora e Distribuidora Agropecuária` | `Diretor, BioSul Importadora e Distribuidora Agropecuária` | vírgula |
| `TimelineSection.tsx:7` | `2020–2021` | `2020 a 2021` | o travessão curto também é proibido pela skill; escolha de estilo, pode manter o intervalo se preferir (ver pergunta 1) |
| `TimelineSection.tsx:42` | `...equipes veterinárias — porque equipes saudáveis constroem negócios sustentáveis.` | `...equipes veterinárias, porque equipes saudáveis constroem negócios sustentáveis.` | vírgula |
| `TimelineSection.tsx:48` | título `Parceiro PAVE — ABHV` | `Parceiro PAVE da ABHV` | reescrita (a skill também proíbe parênteses em títulos) |
| `TimelineSection.tsx:50` | `...parceira do PAVE — Programa de Apoio ao Veterinário Empreendedor da ABHV, buscando...` | `...parceira do PAVE, Programa de Apoio ao Veterinário Empreendedor da ABHV, buscando...` | vírgulas |
| `TimelineSection.tsx:66` | `...Vet Connection 2025 — projeto que promete ser a maior plataforma...` | `...Vet Connection 2025: projeto que promete ser a maior plataforma...` | dois-pontos |
| `TimelineSection.tsx:210` | `Um ecossistema em constante evolução — construído para transformar o mercado veterinário.` | `Um ecossistema em constante evolução, construído para transformar o mercado veterinário.` | vírgula |
| `EcosystemSection.tsx:57` e `:106` | comentários de código com `—` | mesmos comentários com `:` | não visíveis ao visitante; trocados só para o teste varrer o arquivo inteiro |

## C. Metadados de SEO e compartilhamento (`index.html`, 3 trechos)

Estes aparecem na aba do navegador, no Google e na prévia de links em WhatsApp e redes. Por isso ficam separados.

| Campo | Antes | Depois |
|---|---|---|
| `<title>` | `Chordata Consultoria — Gestão Integrada para Negócios Veterinários` | `Chordata Consultoria: Gestão Integrada para Negócios Veterinários` |
| `og:title` | igual ao título acima | igual ao novo título |
| `og:description` | `Do diagnóstico à transformação — somos o ecossistema completo para o setor pet/vet.` | `Do diagnóstico à transformação: somos o ecossistema completo para o setor pet/vet.` |

## D. Sugestões fora do escopo (não aplicar sem pedido)

A skill desaconselha frases genéricas. Encontrei estas; deixo como **sugestão** porque mexem em voz de marca, não em pontuação.

- `TimelineSection.tsx:50`: "oferecendo soluções de ponta e contribuições à sua atuação profissional". Genérica; alternativa: dizer o que o parceiro recebe.
- "Transformação completa" (selo do Hero e subtítulo do Ecossistema): próxima do tipo de frase que a skill cita como exemplo a evitar.

## Perguntas para o aceite

1. Intervalo de anos: aceita `2020 a 2021`, ou prefere manter `2020–2021` e eu ajusto o teste para permitir o travessão curto só entre números?
2. Posso aplicar as seções A, B e C como estão?
3. Quer que eu trate a seção D agora ou deixe para depois?
