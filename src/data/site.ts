export const site = {
 name: 'Alfa Corrimão',
 description: 'Corrimãos para escadarias e rampas, guarda-corpos e soluções em vidro para edifícios, construtoras e condomínios.',
 engineer: 'Ernani',
 phone: '11947704632',
 phoneLabel: '(11) 94770-4632',
 // Canal comercial de pedidos de orçamento: atendimento Edna.
 whatsappNumber: '11997531839',
 whatsappLabel: '(11) 99753-1839',
 landline: '(11) 4357-3447',
 landlineHref: '+551143573447',
 email: 'alfacorrimao@hotmail.com',
};
export const whatsapp = (message = 'Olá! Gostaria de solicitar um orçamento para minha obra.') =>
 'https://wa.me/55' + site.whatsappNumber + '?text=' + encodeURIComponent(message);
// Atendimento técnico separado do WhatsApp comercial.
export const technicalWhatsapp = (message = 'Olá! Gostaria de tirar uma dúvida técnica sobre corrimãos ou guarda-corpos para minha obra.') =>
 'https://wa.me/55' + site.phone + '?text=' + encodeURIComponent(message);
export const nav = [
 {label:'Início',href:'/'},
 {label:'Quem somos',href:'/quem-somos/'},
 {label:'Soluções',href:'/corrimaos/'},
 {label:'Para sua obra',href:'/construtoras-e-condominios/'},
 {label:'Obras',href:'/obras-realizadas/'},
 {label:'Contato',href:'/contato/'},
];
export const products = [
 {id:'aluminio',eyebrow:'01 / Escadarias',title:'Corrimão duplo de alumínio',short:'Escadarias de edifícios',text:'Corrimão duplo de parede para escadarias de prédios residenciais, comerciais e industriais, incluindo escadas de emergência.',href:'/corrimaos/aluminio-escadarias/',image:'ACF-001'},
 {id:'inox',eyebrow:'02 / Rampas',title:'Corrimão duplo de inox',short:'Rampas de acessibilidade',text:'Corrimão duplo em aço inox para rampas de acesso em edifícios, condomínios e empreendimentos.',href:'/corrimaos/inox-rampas/',image:'ACF-004'},
 {id:'guarda',eyebrow:'03 / Proteção',title:'Guarda-corpos',short:'Escadas, sacadas e áreas comuns',text:'Soluções de guarda-corpos para escadarias, sacadas e áreas comuns. Veja aplicações do acervo da Alfa.',href:'/guarda-corpos/',image:'ACF-005'},
 {id:'vidro',eyebrow:'04 / Arquitetura',title:'Soluções em vidro',short:'Fechamentos e portas',text:'Fechamentos de sacadas e portas de vidro. Conheça as aplicações e apresente o seu projeto.',href:'/vidro-temperado/',image:'ACF-028'},
];
