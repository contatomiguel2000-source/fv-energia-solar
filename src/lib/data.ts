export const company = {
  name: "FV Energia Solar",
  tagline: "Liderança em Soluções Renováveis desde 2012",
  since: 2012,
  cnpj: "45.097.362/0001-80",
  phone: "(11) 9 3002-1690",
  whatsapp: "5511930021690",
  email: "comercial@fvenergiasolar.com.br",
  address: "R Maria Lucia Vita, 5, Guarulhos – SP, 07.090-120",
  instagram: "https://www.instagram.com/fv.energiasolar/",
  facebook: "https://www.facebook.com/FVEnergiaSolar.ParceriaSustentavel",
};

export function whatsappLink(message = "Olá! Gostaria de um orçamento de energia solar.") {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const heroSlides = [
  { image: "/img/hero-solar.jpg", title: "Energia solar que reduz até 95% da sua conta de luz" },
  { image: "/img/rede.jpg", title: "Liderança em soluções renováveis desde 2012" },
  { image: "/img/p-piscina-igarata.jpg", title: "Sua casa e sua empresa gerando a própria energia" },
];

export const aboutImages = [
  { src: "/img/p-fotovoltaico.jpg", alt: "Aquecimento solar em telhado" },
  { src: "/img/case-familia.jpg", alt: "Família com energia solar em casa" },
  { src: "/img/casa.jpg", alt: "Casa com painéis solares" },
  { src: "/img/p-piscina-igarata.jpg", alt: "Painéis fotovoltaicos instalados pela FV" },
  { src: "/img/equipe.jpg", alt: "Equipe técnica em instalação" },
];

export const innovation = [
  {
    title: "Soluções personalizadas",
    text: "Cada projeto é pensado sob medida para a realidade do cliente, sem pacotes genéricos, com foco em eficiência e economia.",
    icon: "panel",
  },
  {
    title: "Equipe de instalação própria",
    text: "Equipe técnica 100% própria e qualificada, com mais controle sobre qualidade, prazos e segurança em cada projeto.",
    icon: "team",
  },
] as const;

export const missionStats = [
  { value: "95%", label: "Economia na conta de luz" },
  { value: "92%", label: "Geração de energia" },
  { value: "25 anos", label: "Vida útil do sistema" },
];

export const services = [
  {
    title: "Energia solar residencial",
    text: "Projetos fotovoltaicos para sua casa, com instalação planejada para gerar até 95% de economia na conta de luz, com segurança e acompanhamento.",
    image: "/img/casa.jpg",
  },
  {
    title: "Energia solar para empresas",
    text: "Sistemas comerciais, industriais e rurais que reduzem custos fixos, aumentam a margem de lucro e valorizam sua marca com energia limpa.",
    image: "/img/p-piscina-igarata.jpg",
  },
  {
    title: "Aquecimento solar de piscina",
    text: "Aquecedores solares e trocadores de calor para piscinas, com conforto térmico o ano todo e baixo custo de operação.",
    image: "/img/p-fotovoltaico.jpg",
  },
];

export const steps = [
  {
    title: "Análise do consumo",
    text: "Coletamos sua média de consumo para entender o tamanho ideal do projeto.",
  },
  {
    title: "Estudo de viabilidade",
    text: "Verificamos a estrutura do imóvel e a área de cobertura para os painéis.",
  },
  {
    title: "Proposta personalizada",
    text: "Você recebe uma simulação com economia estimada, valores e condições.",
  },
  {
    title: "Contrato e ativação",
    text: "Instalação com equipe própria, homologação na distribuidora e ativação.",
  },
];

export const chooseUs = [
  { title: "Equipe de instalação própria", image: "/img/equipe.jpg" },
  { title: "Suporte ágil e humanizado", image: "/img/case-familia.jpg" },
  { title: "Experiência comprovada", image: "/img/p-aquecimento.jpg" },
  { title: "Soluções personalizadas", image: "/img/case-condominio.jpg" },
];

export const benefits = {
  economia: { title: "Economia na conta de luz", image: "/img/lampada.jpg" },
  valorizacao: { title: "Valorização do imóvel", image: "/img/case-familia.jpg" },
  sustentabilidade: { title: "Sustentabilidade", image: "/img/case-condominio.jpg" },
  independencia: { title: "Independência energética", image: "/img/rede.jpg" },
  manutencao: { title: "Baixa manutenção", image: "/img/p-aquecimento.jpg" },
};

export const testimonials = [
  {
    name: "Mau Gau",
    role: "Cliente residencial",
    image: "/img/t-maugau.png",
    text: "Uma grata surpresa na instalação do sistema fotovoltaico em minha residência. O que faz a diferença mesmo é o serviço prestado. Nota 1.000 para a FV Energia Solar!",
  },
  {
    name: "Amanda Faria",
    role: "Cliente residencial",
    image: "/img/t-amanda.png",
    text: "Preço ótimo, anteciparam a data de entrega do meu sistema e a geração de energia está cumprindo exatamente o projetado. Super recomendo!",
  },
  {
    name: "Fátima Ugatti",
    role: "Cliente residencial",
    image: "/img/t-fatima.png",
    text: "Desde o primeiro contato fui muito bem atendida. A empresa levou em conta minhas condições de pagamento e sempre prestou toda a assistência necessária.",
  },
  {
    name: "Carlos Sodré",
    role: "Nelfram Construções",
    image: "/img/t-carlos.png",
    text: "Excelente trabalho do início ao fim. Pontuais com os prazos, cumpriram todo o cronograma e tiveram toda a sensibilidade com nosso cliente do setor público.",
  },
  {
    name: "Suzana Carneiro Zucatto",
    role: "Cliente residencial",
    image: "/img/t-suzana.png",
    text: "Ótima. Pessoal eficiente e trabalho rápido. Recomendo!",
  },
  {
    name: "José Guilherme",
    role: "Cliente residencial",
    image: "/img/t-jose.png",
    text: "5 estrelas!",
  },
];

export const serviceLinks = [
  "Energia solar residencial",
  "Energia solar para empresas",
  "Condomínios",
  "Aquecimento de piscina",
  "Mini-hidrelétrica",
  "Manutenção preventiva",
];
