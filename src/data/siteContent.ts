import { Cross, Heart, HeartPulse, ShieldCheck, Star, Stethoscope, Wallet } from 'lucide-react';

export const imageBase = 'https://assets.betalabs.net/production/hcclubedebeneficios/extra_fields';

export const benefits = [
  { icon: Stethoscope, title: 'Telemedicina Familiar', detail: 'Consultas médicas sem sair de casa.' },
  { icon: HeartPulse, title: 'Assistência Psicológica', detail: 'Apoio emocional sempre que necessário.' },
  { icon: Heart, title: 'Assistência Nutricional', detail: 'Orientação para uma vida mais saudável.' },
  { icon: Wallet, title: 'Descontos em Medicamentos', detail: 'Economia em farmácias parceiras.' },
  { icon: ShieldCheck, title: 'Seguro de Vida', detail: 'Cobertura para morte acidental, assegurando proteção financeira.' },
  { icon: Cross, title: 'Assistência Funeral Familiar', detail: 'Tranquilidade em momentos difíceis.' },
  { icon: Star, title: 'E muito mais!', detail: 'Explore todos os benefícios que o clube pode te oferecer!' },
];

export const plans = [
  { name: 'Pessoas', price: '29', cents: '99', items: ['Telemedicina Familiar', 'Assistência Psicológica', 'Assistência Nutricional', 'Desconto em Medicamentos', 'Seguro Acidentes Pessoais (R$ 10.000)', 'Assistência Funeral Familiar (R$ 5.000)'] },
  { name: 'Essencial', price: '49', cents: '99', featured: true, items: ['Telemedicina Familiar', 'Assistência Psicológica', 'Assistência Nutricional', 'Desconto em Medicamentos', 'Seguro Acidentes Pessoais (R$ 10.000)', 'Assistência Funeral Familiar (R$ 5.000)', 'Assistência Auto', 'Concierge Informativo', 'Desconto em Consultas e Exames (Tem Saúde)', 'Sorteio Mensal'] },
  { name: 'Premium', price: '64', cents: '99', items: ['Telemedicina Familiar', 'Assistência Psicológica', 'Assistência Nutricional', 'Desconto em Medicamentos', 'Seguro Acidentes Pessoais (R$ 10.000)', 'Assistência Funeral Familiar (R$ 5.000)', 'Assistência Informática - Helpdesk', 'Assistência Pet', 'Assistência Personal Fitness', 'Assistência Residencial', 'Assistência Auto', 'Concierge Informativo', 'Desconto em Consultas e Exames (Tem Saúde)', 'Sorteio Mensal'] },
];

export const faqs = [
  { q: 'O que é o Clube Saúde Cuidado?', a: 'O Saúde Cuidado é uma solução de saúde e bem-estar com proteção financeira. O plano proporciona Telemedicina familiar e acesso a uma série de benefícios, como assistência psicológica, nutricional e descontos em medicamentos, e muito mais! É uma alternativa acessível para quem busca cuidar da saúde e do bem-estar sem os custos e limitações de um plano de saúde convencional.' },
  { q: 'O Saúde Cuidado é um Plano de Saúde?', a: 'Não, o Saúde Cuidado não é um plano de saúde tradicional. Ele é um clube de benefícios que oferece acesso a serviços de saúde e bem-estar, além de proteção financeira, como seguro de vida por morte acidental.' },
  { q: 'Quando começam a valer os meus benefícios após a contratação?', a: 'A vigência do seu plano tem início no dia 05 do mês. Se você contratou no dia 15, seus benefícios começam no dia 05 do mês subsequente.' },
  { q: 'Quem pode assinar o Clube Saúde Cuidado?', a: 'Qualquer pessoa com idade entre 14 e 70 anos pode aderir aos planos.' },
  { q: 'Quais as formas de pagamento disponíveis?', a: 'Você pode pagar com cartão de crédito ou PIX.' },
  { q: 'Quais os pacotes disponíveis pelo Saúde Cuidado?', a: 'Temos três opções para pessoas: Pessoas, Essencial e Premium. Também oferecemos planos empresariais a partir de 5 vidas.' },
  { q: 'Como faço para utilizar os benefícios?', a: 'Acesse a Central de Uso no menu do nosso site ou diretamente pelo endereço centraldeuso.clubesaudecuidado.com.br.' },
];

export const steps = [
  'Selecione o plano que melhor se adapta às suas necessidades.',
  'Informe o e-mail para criar a sua conta.',
  'Forneça suas informações pessoais de forma segura e confidencial.',
  'Selecione o método de pagamento que melhor se adequa a você.',
  'Finalize sua adesão e aproveite todos os benefícios do plano!',
];
