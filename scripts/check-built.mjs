import {readFile,readdir,stat} from 'node:fs/promises';
import {join,resolve,dirname} from 'node:path';
import assert from 'node:assert/strict';
const root=resolve('dist');
async function walk(dir){const files=[];for(const item of await readdir(dir,{withFileTypes:true})){const p=join(dir,item.name);if(item.isDirectory())files.push(...await walk(p));else files.push(p);}return files;}
const htmlFiles=(await walk(root)).filter(p=>p.endsWith('.html'));
assert.equal(htmlFiles.length,14,'As 14 páginas devem existir.');
let checked=0;
for(const file of htmlFiles){
 const html=await readFile(file,'utf8');
 assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,file+': H1 único');
 assert.match(html,/<html lang="pt-BR"/);
 assert.match(html,/<meta name="robots" content="noindex, nofollow"/);
 assert.doesNotMatch(html,/\[X\]|depoimento|Inox 304|20 anos|paga.*sinal|pagamento após/i);
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
const home=await readFile(join(root,'index.html'),'utf8');
assert.equal(new Set([...home.matchAll(/data-image-id="([^"]+)"/g)].map(m=>m[1])).size,8,'Oito fotos distintas na home');
for(const route of ['aluminio-escadarias','inox-rampas']){
 const html=await readFile(join(root,'corrimaos',route,'index.html'),'utf8');
 const complement=route==='aluminio-escadarias'?'inox-rampas':'aluminio-escadarias';
 assert.ok(html.includes('/corrimaos/'+complement+'/'),'Link complementar ausente');
}
console.log('OK: 14 páginas, '+checked+' links/arquivos locais, imagens, âncoras, H1, oito fotos na home e links entre produtos.');
