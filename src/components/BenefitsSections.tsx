import { benefits, imageBase, steps } from '../data/siteContent';
import { Star } from 'lucide-react';

export function StepsSection() {
  return <section className="steps-section section"><h2>Entenda como funciona</h2><div className="steps">{steps.map((text, index) => <div className="step" key={text}><span className={`step-number color-${index}`}>{index + 1}</span><p>{text}</p></div>)}</div></section>;
}

export function BenefitsSection() {
  return <section className="benefits-section section" id="beneficios">
    <h2>Benefícios de ser Membro</h2>
    <div className="benefits-grid">
      <div className="benefit-art"><img src={`${imageBase}/51/phpHog1dp1734467086.jpg`} alt="Benefícios para você e sua família"/><div className="benefit-sticker"><Star fill="currentColor"/></div><div className="benefit-caption">Benefícios pensando<br/>para você e sua família!</div></div>
      <div className="benefit-list">{benefits.map(({ icon: Icon, title, detail }, index) => <article className="benefit-row" key={title}><span className="benefit-count">{index + 1}</span><Icon className="benefit-icon" size={26}/><div><h3>{title}</h3><p>{detail}</p></div></article>)}</div>
    </div>
  </section>;
}
