import type { ProposalTemplate } from './types';

export const PROPOSAL_TEMPLATE: ProposalTemplate = {
  id: 'proposal',
  title: 'Proposta Comercial',
  subtitle: 'Consultoria Integrada — Ecossistema Chordata',
  sections: {
    cover: {
      title: 'Capa',
      content: `PROPOSTA COMERCIAL

[TIPO DE CONSULTORIA: ex. Consultoria Integrada]

Preparada para:
[NOME DO CLIENTE / CLÍNICA]
[CARGO DO RESPONSÁVEL]

Data: [DD/MM/AAAA]

Preparada por:
[NOME DO CONSULTOR]
Chordata Consultoria e Assessoria Ltda
contato@chordataconsultoria.com · +55 51 99762-2707`,
      placeholder: '[NOME DO CLIENTE / CLÍNICA], [TIPO DE CONSULTORIA], [NOME DO CONSULTOR]',
    },
    context: {
      title: 'Sobre a Chordata Consultoria',
      content: `A Chordata Consultoria é um ecossistema integrado de soluções para o mercado veterinário, fundado em 2022 em Porto Alegre (RS). Nossa missão é proporcionar ao mercado veterinário profissionalização, conhecimento de negócios e de gestão, adaptação ao mercado digital e conexões entre pessoas e negócios.

Atuamos em 8 estados brasileiros (RS, SC, PR, SP, MG, PA, MA, AP), com mais de 60 projetos de consultoria entregues, 2.000 pessoas impactadas e 300 profissionais capacitados.

Nosso ecossistema é composto por 5 soluções integradas:
• Chordata Consultoria — Estratégia e Gestão
• MentAll.Vet — Saúde Mental Veterinária
• Chordata Analytics — Inteligência de Dados
• JurídicoPet Digital — Conformidade Jurídica
• VetConnection — Feiras e Eventos

Somos o que conecta conhecimento, estratégia e oportunidades no setor veterinário.`,
    },
    diagnosis: {
      title: 'Diagnóstico Identificado',
      content: `Com base na nossa conversa inicial e nas informações compartilhadas, identificamos os seguintes pontos de atenção no negócio:

[PONTO 1: ex. Processos financeiros sem controle sistemático, dificultando a previsibilidade de caixa]

[PONTO 2: ex. Equipe com baixo engajamento e alta rotatividade, impactando a qualidade do atendimento]

[PONTO 3: ex. Ausência de indicadores de desempenho (KPIs) para acompanhamento gerencial]

[PONTO 4 — opcional: ex. Estrutura de precificação desatualizada, gerando perda de margem]

Esses desafios são comuns em clínicas e hospitais veterinários em crescimento e têm solução clara com a abordagem certa.`,
      placeholder: '[PONTO 1], [PONTO 2], [PONTO 3] — descreva os problemas encontrados na conversa com o cliente',
    },
    proposal: {
      title: 'Nossa Proposta',
      content: `Propomos a [MODALIDADE DE CONSULTORIA] para [NOME DA CLÍNICA/EMPRESA], com o objetivo de [OBJETIVO PRINCIPAL — ex. estruturar processos operacionais e financeiros, desenvolver a equipe e criar um plano de crescimento sustentável].

MODALIDADE: [Consultoria Artesanal / Consultoria Integrada / Consultoria Integrada Total]

DURAÇÃO ESTIMADA: [ex. 6 meses / 12 meses / contínua]

FREQUÊNCIA DE ATENDIMENTO: [ex. Reuniões semanais de 1,5h + disponibilidade assíncrona]

ENTREGAS PREVISTAS:
• Diagnóstico organizacional completo
• Implantação de processos financeiros e operacionais
• Programa de capacitação de gestores ([X] encontros)
• Programa de capacitação de equipe ([X] encontros)
• Dashboards de acompanhamento (Chordata Analytics)
• [ENTREGA ADICIONAL conforme necessidade]

SOLUÇÕES DO ECOSSISTEMA ATIVADAS:
• [listar as soluções relevantes para este cliente]`,
      placeholder: '[MODALIDADE], [DURAÇÃO], [FREQUÊNCIA], [ENTREGAS]',
    },
    methodology: {
      title: 'Metodologia RP3',
      content: `Toda a nossa atuação é guiada pelo Método Chordata · RP3 — nossa metodologia proprietária que atua nos três pilares fundamentais de qualquer negócio veterinário:

01 · PROCESSOS — Medir e Analisar
Estruturamos processos operacionais e financeiros com precisão diagnóstica.
• Precisão diagnóstica em sistemas financeiros e administrativos
• Análise estatística e controle sistêmico
• Integração comercial inteligente

02 · PESSOAS — Desenvolver e Engajar
Desenvolvemos líderes e equipes com programas que constroem cultura organizacional sólida.
• Capacitação de gestores e liderança
• Engajamento de equipes e solidificação cultural
• Estruturação de cargos e recrutamento

03 · PLANEJAMENTO — Controlar e Crescer
Construímos planejamentos que traduzem visão estratégica em metas concretas e mensuráveis.
• Planejamento operacional: compras, estoque e logística
• Planejamento financeiro: despesas, receitas e crescimento
• Planejamento comercial: estratégias e campanhas

O RP3 é a base que sustenta todas as soluções do ecossistema Chordata.`,
    },
    solutions: {
      title: 'Soluções do Ecossistema Envolvidas',
      content: `Para este projeto, as seguintes soluções do ecossistema serão ativadas:

✓ CHORDATA CONSULTORIA
Acompanhamento estratégico, estruturação de processos e capacitação de equipes.

[✓ CHORDATA ANALYTICS — se aplicável]
Implantação de dashboards de gestão e indicadores de desempenho (KPIs) personalizados.

[✓ MENTALL.VET — se aplicável]
Programa de saúde mental e bem-estar corporativo para a equipe da clínica/hospital.

[✓ JURÍDICOPET DIGITAL — se aplicável]
Conformidade jurídica e assinatura eletrônica de contratos e documentos.

[Remova as soluções que não se aplicam a esta proposta]`,
      placeholder: 'Selecione apenas as soluções relevantes para este cliente',
    },
    investment: {
      title: 'Investimento',
      content: `MODALIDADE: [Consultoria Artesanal / Integrada / Integrada Total]

VALOR: R$ [VALOR],00/mês
ou R$ [VALOR SEMESTRAL] à vista (desconto de [X]%)
ou R$ [VALOR ANUAL] à vista (desconto de [X]%)

INCLUI:
• [Descreva o que está incluído no valor]
• [ex. X horas/mês de atendimento presencial ou remoto]
• [ex. Acesso à plataforma de gestão Chordata Analytics]
• [ex. X vagas no Programa de Capacitação de Gestores]

FORMA DE PAGAMENTO: [PIX / Boleto / Cartão de crédito]
INÍCIO: Após assinatura do contrato

VALIDADE DA PROPOSTA: 30 dias a partir da data de emissão`,
      placeholder: '[VALOR], [MODALIDADE], [INCLUÍDOS]',
    },
    nextSteps: {
      title: 'Próximos Passos',
      content: `Para darmos início à nossa parceria, seguimos este processo simples:

1. VALIDAÇÃO DA PROPOSTA
   Confirme sua aprovação via WhatsApp, e-mail ou nesta reunião.
   Tiraremos qualquer dúvida que ainda exista.

2. ASSINATURA DO CONTRATO
   Enviaremos o contrato via JurídicoPet Digital para assinatura eletrônica.
   Rápido, seguro e sem burocracia.

3. REUNIÃO DE KICK-OFF
   Realizamos a reunião de início do projeto para alinhar objetivos, cronograma e comunicação.
   A transformação começa aqui.

Qualquer dúvida, estou à disposição:
[NOME DO CONSULTOR]
[TELEFONE / WHATSAPP]
[E-MAIL]
contato@chordataconsultoria.com`,
    },
  },
};
