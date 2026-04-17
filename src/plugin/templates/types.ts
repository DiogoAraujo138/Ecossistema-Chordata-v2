export interface TemplateSection {
  title: string;
  content: string;
  placeholder?: string;
}

export interface ProposalTemplate {
  id: 'proposal';
  title: string;
  subtitle: string;
  sections: {
    cover: TemplateSection;
    context: TemplateSection;
    diagnosis: TemplateSection;
    proposal: TemplateSection;
    methodology: TemplateSection;
    solutions: TemplateSection;
    investment: TemplateSection;
    nextSteps: TemplateSection;
  };
}

export interface SlideTemplate {
  id: string;
  slideNumber: number;
  slideTitle: string;
  layout: 'cover' | 'section' | 'two-column' | 'fulltext' | 'visual' | 'closing';
  headline: string;
  body: string;
  speakerNotes?: string;
  visualGuide?: string;
}

export interface PresentationTemplate {
  id: 'ecosystem-pitch';
  title: string;
  subtitle: string;
  targetAudience: string;
  estimatedDuration: string;
  slides: SlideTemplate[];
}

export interface SocialPostTemplate {
  id: string;
  platform: 'linkedin' | 'instagram';
  type: 'ecosystem-intro' | 'service-highlight' | 'testimonial' | 'rp3-education' | 'solution-launch';
  caption: string;
  hashtags: string[];
  visualGuide: string;
  bestPostTime: string;
  characterCount: number;
}

export interface EmailTemplate {
  id: string;
  type: 'cold-outreach' | 'follow-up' | 'proposal-follow-up' | 'newsletter';
  subject: string;
  preheader: string;
  greeting: string;
  body: string;
  cta: string;
  signature: string;
}
