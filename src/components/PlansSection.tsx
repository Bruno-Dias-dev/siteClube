import { plans } from '../data/siteContent';

export function PlansSection() {
  return <section className="plans-section section" id="planos">
    <h2>Escolha seu plano</h2>
    <div className="plans">{plans.map(plan => <article className={`plan ${'featured' in plan && plan.featured ? 'featured' : ''}`} key={plan.name}>
      {'featured' in plan && plan.featured && <div className="best">Mais vendido</div>}
      <div className="plan-head"><span>{plan.name}</span><div className="price"><small>R$</small><b>{plan.price}</b><sup>{plan.cents}</sup></div></div>
      <div className="coverage"><h3>Cobertura</h3>{plan.items.map(item => <p key={item}>{item}</p>)}</div>
      <a href="https://www.clubesaudecuidado.com.br" className="button navy">Assinar</a>
    </article>)}</div>
  </section>;
}

export function BusinessSection() {
  return <section className="business"><div><span>PLANOS EMPRESARIAIS</span><p>Pequenas, Médias e Grandes empresas</p><a className="button blue" href="https://wa.me/5521992054128">Faça agora a sua cotação <span aria-hidden="true">→</span></a></div></section>;
}
