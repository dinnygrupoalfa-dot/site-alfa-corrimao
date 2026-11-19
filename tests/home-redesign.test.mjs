import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const home=readFileSync('src/pages/index.astro','utf8');
const nav=readFileSync('src/data/site.ts','utf8');
const carousel=readFileSync('src/components/Carousel.astro','utf8');
const products=readFileSync('src/components/ProductCards.astro','utf8');
const gallery=readFileSync('src/components/HomeProductGallery.astro','utf8');
const photos=readFileSync('src/data/home-gallery.ts','utf8');
const clients=readFileSync('src/components/ClientMarquee.astro','utf8');
const css=readFileSync('src/styles/home.css','utf8');

test('home apresenta serviços e CTA comercial sem inventar resultados',()=>{
 assert.match(home,/Corrimãos e guarda-corpos <em>para a sua obra/);
 assert.ok(home.includes('ProductCards'));
 assert.ok(home.includes('soluções em vidro'));
 assert.ok(home.includes('whatsapp('));
 assert.ok(home.includes('Conhecer nossas obras'));
 assert.doesNotMatch(home,/depoimentos|garantia de 20 anos|centenas de obras|maior fabricante/i);
});

test('hero usa fotografias reais e carrossel sem botão de pausa',()=>{
 assert.equal((home.match(/ \{id:'ACF-\d+'/g)||[]).length,8);
 assert.match(home,/<Carousel slides=\{slides\}[^>]+noPause\/>/);
 assert.match(carousel,/noPause\?:boolean/);
 assert.match(carousel,/\{!noPause&&<button type="button" data-pause/);
 assert.ok(home.includes("id:'ACF-127'"));
 assert.ok(home.includes("id:'ACF-028'"));
 assert.ok(css.includes('.institutional-home .home-intro .hero-carousel .carousel-controls'));
});

test('experiência, identificação e clientes reais constam na home',()=>{
 assert.ok(home.includes('Desde 2012'));
 assert.doesNotMatch(home,/Razão social|Construtora Canaã|Registro empresarial|site\.cnpj|site\.cityState/);
 assert.ok(home.includes('Instituto Neymar Júnior'));
 assert.ok(home.includes('Construtora Sobloco'));
 assert.ok(home.includes('Prefeitura de Cubatão'));
 assert.ok(home.includes('Grupo Mendes Engenharia'));
 assert.ok(home.includes('<ClientMarquee compact/>'));
 assert.ok(clients.includes('compact?:boolean'));
 assert.ok(home.includes('Nossos principais clientes'));
});

test('menu renomeado sem modificar o destino das rotas',()=>{
 for(const x of ["{label:'Produtos',href:'/corrimaos/'}","{label:'Obras Realizadas',href:'/obras-realizadas/'}","{label:'Construtoras e Condomínios',href:'/construtoras-e-condominios/'}"]){
  assert.ok(nav.includes(x),'Menu ausente: '+x);
 }
 assert.ok(home.includes('/corrimaos-para-predios/'));
});


test('cada produto tem fotografias correspondentes e passagem automática',()=>{
 assert.match(home,/<ProductCards galleries\/>/);
 assert.ok(products.includes('HomeProductGallery'));
 for(const [id,total] of [['aluminio',17],['inox',13],['guarda',5],['vidro',5]]){
  const fragment=photos.match(new RegExp('"'+id+'": \\[([\\s\\S]*?)\\n  \\]'));
  assert.ok(fragment,'Categoria sem fotos: '+id);
  assert.equal((fragment[1].match(/"src":/g)||[]).length,total,'Total incorreto '+id);
 }
 assert.ok(gallery.includes('data-interval={intervalMs}'));
 assert.ok(gallery.includes('intervalMs=3000'));
 assert.doesNotMatch(gallery,/data-pause/);
 assert.ok(css.includes('.institutional-home .home-product-carousel'));
});

test('textos comerciais sem ambiguidade nem repetição cadastral',()=>{
 assert.ok(home.includes('Veja <em>nosso trabalho.'));
 assert.ok(home.includes('Converse <em>com a Alfa.'));
 assert.ok(home.includes('Chame a Alfa. Somos especialistas'));
 assert.ok(home.includes('pessoas com deficiência ou mobilidade reduzida'));
 assert.doesNotMatch(home,/Do projeto|ao orçamento|Conte sobre a obra|Compartilhe o que já tem|Empresa registrada e estabelecida|Razão social/);
 assert.ok(home.includes('home-work-highlight'));
 assert.ok(home.includes('id="ACF-005"'));
 assert.ok(!home.includes('Píer de Cubatão · Álbum com 46 fotografias'));
});
