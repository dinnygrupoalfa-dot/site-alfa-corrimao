export function validPhone(value) {
 const digits=String(value||'').replace(/\D/g,'');
 return /^(?:55)?[1-9][0-9]{9,10}$/.test(digits);
}
export function buildQuoteMessage(fields) {
 const clean=value=>String(value||'').trim().replace(/[\r\n]+/g,' ');
 const lines=['Olá! Gostaria de solicitar um orçamento.','',
  'Nome: '+clean(fields.nome),
  'Telefone: '+clean(fields.telefone),
  'Cidade/estado: '+clean(fields.cidade),
  'Serviço: '+clean(fields.servico)];
 if(clean(fields.empresa))lines.push('Empresa/condomínio: '+clean(fields.empresa));
 if(clean(fields.torres))lines.push('Torres/blocos: '+clean(fields.torres));
 if(clean(fields.pavimentos))lines.push('Pavimentos: '+clean(fields.pavimentos));
 if(clean(fields.etapa))lines.push('Etapa da obra: '+clean(fields.etapa));
 if(clean(fields.perfil))lines.push('Perfil do empreendimento: '+clean(fields.perfil));
 if(clean(fields.mensagem))lines.push('Sobre a obra: '+clean(fields.mensagem));
 return lines.join('\n');
}
