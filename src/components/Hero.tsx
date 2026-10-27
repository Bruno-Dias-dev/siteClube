import { ArrowRight, Star } from 'lucide-react';

export function Hero() {
  return <>
    <section className="hero">
      <div className="hero-copy"><span className="eyebrow">CUIDAR DE VOCÊ É O NOSSO PLANO</span><h1>Descubra o que há de melhor em bem-estar e proteção para você e sua família.</h1><p><Star size={16}/> Entre para o Clube e tenha benefícios exclusivos e acesso a serviços de saúde e bem-estar.</p><a className="button orange" href="#planos">Contrate agora <ArrowRight size={16}/></a></div>
      <div className="hero-photo"><img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=85" alt="Família sorrindo junta"/><div className="price-bubble">Planos a partir<br/><b>de R$ 29,99</b></div></div>
    </section>
    <div className="slider-dots" aria-hidden="true"><i/><i/><i/></div>
  </>;
}
