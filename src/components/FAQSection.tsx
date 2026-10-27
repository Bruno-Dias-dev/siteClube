import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/siteContent';

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return <section className="faq-section section" id="duvidas">
    <h2>Perguntas Frequentes</h2>
    <div className="faq-list">{faqs.map(({ q, a }, index) => <article className={`faq ${openFaq === index ? 'active' : ''}`} key={q}>
      <button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{q}</span><ChevronDown size={18}/></button>
      {openFaq === index && <div className="answer">{a}</div>}
    </article>)}</div>
    <a href="mailto:atendimento@clubesaudecuidado.com.br" className="button navy faq-cta">Possui mais dúvidas?</a>
  </section>;
}
