import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { imageBase } from '../data/siteContent';

const clubHighlights = [
  'De telemedicina a apoio psicológico e nutricional. Tudo pensado para cuidar não só do seu corpo, mas de sua mente também.',
  'Com planos que começam a partir de R$ 29,99, garantimos a segurança que você e sua família merecem.',
  'Aproveite descontos em medicamentos e uma rede de parceiros que valorizam cada centavo do seu investimento.',
];
const highlightTitles = ['Saúde e bem-estar', 'Proteção ao seu alcance', 'Mais economia'];

export function IntroSection() {
  const [openInfo, setOpenInfo] = useState<number | null>(0);

  return <section className="intro section" id="sobre">
    <h2>Conheça o Clube</h2>
    <div className="intro-grid">
      <div className="intro-art"><div className="aqua-blob"/><img src={`${imageBase}/35/phpJMCg9v1738757007.png`} alt="Conheça o Clube Saúde Cuidado"/></div>
      <div className="intro-copy"><h3>Venha fazer parte do Clube!</h3><p>O Clube de Benefícios é mais do que um serviço de saúde e proteção; é uma comunidade dedicada ao bem-estar de seus associados.</p><p>Com uma abordagem inovadora e centrada no cliente, oferecemos não apenas cuidados médicos, mas também uma rede de apoio e incentivo para você viver melhor.</p></div>
    </div>
    <div className="why-grid">
      <div><h3>Por que assinar?</h3><p>Assinar o Clube Saúde Cuidado é investir em um futuro mais seguro e saudável para você e sua família. Nossos planos oferecem uma combinação única de proteção financeira e acesso facilitado a serviços de saúde, garantindo tranquilidade em momentos importantes.</p></div>
      <div className="info-list">{highlightTitles.map((title, index) => <button key={title} className="info-item" onClick={() => setOpenInfo(openInfo === index ? null : index)}><span className="info-title">{title}<ChevronDown className={openInfo === index ? 'turn' : ''} size={17}/></span>{openInfo === index && <span className="info-detail">{clubHighlights[index]}</span>}</button>)}</div>
    </div>
  </section>;
}
