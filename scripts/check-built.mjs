import {readFile,readdir,stat} from 'node:fs/promises';
import {join,resolve,dirname} from 'node:path';
import assert from 'node:assert/strict';
const root=resolve('dist');
async function walk(dir){const files=[];for(const item of await readdir(dir,{withFileTypes:true})){const p=join(dir,item.name);if(item.isDirectory())files.push(...await walk(p));else files.push(p);}return files;}
const htmlFiles=(await walk(root)).filter(p=>p.endsWith('.html'));
assert.equal(htmlFiles.length,20,'As 20 páginas devem existir, incluindo landing de anúncios e galeria do Píer de Cubatão.');
let checked=0;
for(const file of htmlFiles){
 const html=await readFile(file,'utf8');
 assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,file+': H1 único');
 assert.match(html,/<html lang="pt-BR"/);
 assert.match(html,/<meta name="robots" content="index, follow"/);
 assert.doesNotMatch(html,/\[X\]|depoimento|Inox 304|20 anos|pagamento\s+(?:do\s+)?sinal\s+(?:na\s+assinatura|antecipado)|pagamento após/i);
 for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const raw=match[1];if(/^(?:https?:|mailto:|tel:|data:)/.test(raw))continue;
  const [url,hash]=raw.split('#');let target=url?url.startsWith('/')?join(root,decodeURIComponent(url)):resolve(dirname(file),decodeURIComponent(url)):file;
  if(url.endsWith('/'))target=join(target,'index.html');
  assert.ok(target.startsWith(root),'Caminho externo: '+raw);
  assert.ok((await stat(target)).isFile(),'Arquivo ausente: '+raw);
  if(hash&&target.endsWith('.html'))assert.ok((await readFile(target,'utf8')).includes('id="'+hash+'"'),'Âncora ausente: '+raw);
  checked++;
 }
 for(const match of html.matchAll(/<img\b[^>]*>/g))assert.match(match[0],/alt="[^"]+"/);
}
// A página de vendas é exclusiva de Ernani; demais páginas preservam o atendimento da Edna.
const commercialNumber='5511997531839';
const campaignNumber='5511947704632';
const contactHtml=await readFile(join(root,'contato','index.html'),'utf8');
const landingHtml=await readFile(join(root,'corrimaos-para-predios','index.html'),'utf8');
for (const file of htmlFiles) {
 const html=await readFile(file,'utf8');
 const isLanding = file===join(root,'corrimaos-para-predios','index.html');
 const isHome = file===join(root,'index.html');
 const expectedHeaderNumber = isLanding ? campaignNumber : commercialNumber;
 for (const match of html.matchAll(/href="https:\/\/wa\.me\/(\d+)/g)) {
  const allowed = isLanding ? match[1]===campaignNumber : (match[1]===commercialNumber || (isHome && match[1]===campaignNumber));
  assert.ok(allowed,file+': destinatário de WhatsApp incorreto ('+match[1]+')');
 }
 assert.ok(html.includes('class="button header-cta" href="https://wa.me/'+expectedHeaderNumber),'CTA do cabeçalho deve abrir WhatsApp correto');
}
assert.match(contactHtml,/data-wa="5511997531839"/,'Formulário institucional deve usar Edna');
assert.match(landingHtml,/data-wa="5511947704632"/,'Formulário da landing deve usar Ernani');
assert.match(contactHtml,/<details class="contact-form-details"/,'Formulário de contato deve ser opcional e secundário');
assert.match(contactHtml,/class="header-whatsapp" href="https:\/\/wa\.me\/5511997531839/,'WhatsApp institucional visível no cabeçalho');
assert.match(contactHtml,/class="floating-contact" href="https:\/\/wa\.me\/5511997531839/,'WhatsApp institucional flutuante');
assert.match(landingHtml,/class="header-whatsapp" href="https:\/\/wa\.me\/5511947704632/,'WhatsApp de Ernani no cabeçalho da landing');
assert.match(landingHtml,/class="floating-contact" href="https:\/\/wa\.me\/5511947704632/,'WhatsApp de Ernani flutuante na landing');
assert.match(landingHtml,/href="https:\/\/wa\.me\/5511947704632/,'Contato técnico com Ernani deve permanecer disponível');
assert.doesNotMatch(landingHtml,/https:\/\/wa\.me\/5511997531839/,'Nenhum CTA da página de vendas pode enviar para Edna');
assert.match(landingHtml,/30 fotografias de corrimãos da Alfa em escadarias e rampas/,'O carrossel de 30 fotos deve estar disponível');
const home=await readFile(join(root,'index.html'),'utf8');
const homePhotos=new Set([...home.matchAll(/data-image-id="([^"]+)"/g)].map(m=>m[1]));
assert.ok(homePhotos.size>=9,'Home deve ter ao menos 9 fotografias catalogadas distintas além dos carrosséis de produtos.');
const productGalleries=[...home.matchAll(/aria-label="Fotos de (Corrimão duplo de alumínio|Corrimão duplo de inox|Guarda-corpos|Soluções em vidro)"/g)];
assert.equal(productGalleries.length,4,'Home deve ter carrossel separado para cada um dos quatro produtos.');
assert.match(home,/Nossos principais clientes/);
assert.match(home,/Logotipos de alguns clientes da Alfa Corrimão/);
for(const route of ['aluminio-escadarias','inox-rampas']){
 const html=await readFile(join(root,'corrimaos',route,'index.html'),'utf8');
 const complement=route==='aluminio-escadarias'?'inox-rampas':'aluminio-escadarias';
 assert.ok(html.includes('/corrimaos/'+complement+'/'),'Link complementar ausente');
}
const pier=await readFile(join(root,'obras-realizadas','pier-de-cubatao','index.html'),'utf8');
const pierIds=new Set([...pier.matchAll(/data-image-id="(ACF-\d{3})"/g)].map(m=>m[1]).filter(id=>Number(id.slice(4))>=115&&Number(id.slice(4))<=164));
assert.equal(pierIds.size,46,'O álbum do Píer deve exibir todas as 46 fotos diferentes.');
for(const id of ['ACF-126','ACF-127','ACF-128','ACF-129']) assert.ok((await readFile(join(root,'obras-realizadas','index.html'),'utf8')).includes('data-image-id="'+id+'"') || (await readFile(join(root,'corrimaos','aluminio-escadarias','index.html'),'utf8')).includes('data-image-id="'+id+'"') || (await readFile(join(root,'guarda-corpos','index.html'),'utf8')).includes('data-image-id="'+id+'"'),id+' deve constar nas páginas correspondentes');
console.log('OK: 20 páginas, '+checked+' links/arquivos locais, imagens, âncoras, H1, fotografias na home e quatro carrosséis de produto, 46 do Píer e links entre produtos.');
