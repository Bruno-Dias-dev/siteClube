import { ArrowRight } from 'lucide-react';
import { BenefitsSection, StepsSection } from './components/BenefitsSections';
import { BusinessSection, PlansSection } from './components/PlansSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import './styles.css';

function App() {
  return <>
    <Header/>
    <main id="inicio">
      <Hero/>
      <IntroSection/>
      <StepsSection/>
      <BenefitsSection/>
      <PlansSection/>
      <BusinessSection/>
      <FAQSection/>
    </main>
    <Footer/>
    <a className="whatsapp" href="https://wa.me/5521992054128" aria-label="Fale pelo WhatsApp">◉</a>
    <div className="mobile-bottom"><a href="#planos">Conheça nossos planos <ArrowRight size={16}/></a></div>
  </>;
}

export default App;
