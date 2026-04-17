import type { EmailTemplate } from './types';

export const EMAIL_TEMPLATES: EmailTemplate[] = [
  {
    id: 'cold-outreach-v1',
    type: 'cold-outreach',
    subject: 'Você está gerenciando sua clínica no escuro?',
    preheader: 'Um diagnóstico gratuito pode mudar isso em 45 minutos.',
    greeting: 'Olá, [NOME DO GESTOR],',
    body: `Sou [NOME DO CONSULTOR] da Chordata Consultoria — um ecossistema de soluções para o mercado veterinário.

Me deparei com [NOME DA CLÍNICA/HOSPITAL] e quero ser direto(a):

A maioria dos gestores de clínicas veterinárias com quem converso enfrenta os mesmos três problemas:

1. Não sabem exatamente quanto ganham por serviço (margem real, não receita bruta)
2. Têm dificuldade em reter e engajar a equipe
3. Tomam decisões importantes baseadas em intuição, não em dados

Se algum desses ressoa com a sua realidade, vale uma conversa.

A Chordata ajudou mais de 60 clínicas e hospitais veterinários em 8 estados a resolver esses desafios com o nosso Método RP3 — uma metodologia proprietária que atua em Processos, Pessoas e Planejamento ao mesmo tempo.

A primeira conversa é gratuita, dura 45 minutos e você sai com clareza sobre o que precisa mudar.

Posso reservar um horário para você essa semana?`,
    cta: 'Agendar Conversa Gratuita → contato@chordataconsultoria.com',
    signature: `[NOME DO CONSULTOR]
Chordata Consultoria e Assessoria Ltda
+55 51 99762-2707
chordataconsultoria.com
@chordataconsultoria`,
  },
  {
    id: 'follow-up-post-meeting',
    type: 'follow-up',
    subject: 'Resumo da nossa conversa — próximos passos',
    preheader: 'Confira o que alinhamos e a proposta em anexo.',
    greeting: 'Olá, [NOME],',
    body: `Foi um prazer conversar com você hoje.

Resumo do que alinhamos:

DIAGNÓSTICO IDENTIFICADO:
• [PONTO 1]
• [PONTO 2]
• [PONTO 3]

PROPOSTA SUGERIDA:
[MODALIDADE DE CONSULTORIA] — [DURAÇÃO ESTIMADA]
Início estimado: [DATA]

Confira a proposta completa em anexo.

A proposta tem validade de 30 dias. Qualquer dúvida, estou à disposição.

Para aprovar, é só responder este e-mail ou me chamar no WhatsApp.`,
    cta: 'Aprovar proposta → responder este e-mail ou WhatsApp +55 51 99762-2707',
    signature: `[NOME DO CONSULTOR]
Chordata Consultoria
+55 51 99762-2707`,
  },
  {
    id: 'proposal-follow-up',
    type: 'proposal-follow-up',
    subject: 'Alguma dúvida sobre a proposta, [NOME]?',
    preheader: 'Estou aqui para ajudar — 5 minutos de resposta podem resolver.',
    greeting: 'Oi, [NOME],',
    body: `Passaram alguns dias desde que enviei a proposta e quero garantir que você tem tudo que precisa para tomar a melhor decisão.

Se surgiu alguma dúvida sobre:
• O escopo do trabalho
• A metodologia RP3
• Os valores ou formas de pagamento
• As soluções do ecossistema envolvidas

...estou à disposição para uma conversa rápida — pode ser por aqui, por WhatsApp ou por videoconferência.

Não há pressão. O mais importante é que você tome a decisão certa para o seu negócio.`,
    cta: 'Responder dúvidas → contato@chordataconsultoria.com ou WhatsApp +55 51 99762-2707',
    signature: `[NOME DO CONSULTOR]
Chordata Consultoria`,
  },
  {
    id: 'newsletter-monthly',
    type: 'newsletter',
    subject: '[MÊS/ANO] · Novidades do Ecossistema Chordata',
    preheader: 'Uma dica de gestão + novidades do ecossistema.',
    greeting: 'Olá, [NOME],',
    body: `Bem-vindo(a) à newsletter mensal do Ecossistema Chordata.

📌 DICA DO MÊS
[TÍTULO DA DICA — ex. "Por que sua clínica precisa de um orçamento mensal?"]

[2–3 parágrafos com conteúdo de valor genuíno sobre gestão veterinária. Sem vender diretamente.]

💙 NOVIDADES DO ECOSSISTEMA
• [Novidade 1 — ex. Lançamento de nova funcionalidade no Analytics]
• [Novidade 2 — ex. Próximo evento VetConnection]
• [Novidade 3 — ex. Novo artigo no blog / case de sucesso]

📅 PRÓXIMOS EVENTOS
[EVENTO 1 — Data · Local · Link]
[EVENTO 2 — Data · Local · Link]

---

Quer aprofundar algum dos temas desta newsletter? É só responder este e-mail.`,
    cta: 'Agendar conversa gratuita → contato@chordataconsultoria.com',
    signature: `Chordata Consultoria
contato@chordataconsultoria.com
+55 51 99762-2707
Cancelar inscrição`,
  },
];
