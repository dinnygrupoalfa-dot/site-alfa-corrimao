import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const home=readFileSync('src/pages/index.astro','utf8');
const nav=readFileSync('src/data/site.ts','utf8');
const carousel=readFileSync('src/components/Carousel.astro','utf8');
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
 assert.ok(home.includes('site.cnpj'));
 assert.ok(home.includes('site.cityState'));
 assert.ok(home.includes('Instituto Neymar Júnior'));
 assert.ok(home.includes('Construtora Sobloco'));
 assert.ok(home.includes('Prefeitura de Cubatão'));
 assert.ok(home.includes('Grupo Mendes Engenharia'));
});

test('menu renomeado sem modificar o destino das rotas',()=>{
 for(const x of ["{label:'Produtos',href:'/corrimaos/'}","{label:'Obras Realizadas',href:'/obras-realizadas/'}","{label:'Construtoras e Condomínios',href:'/construtoras-e-condominios/'}"]){
  assert.ok(nav.includes(x),'Menu ausente: '+x);
 }
 assert.ok(home.includes('/corrimaos-para-predios/'));
});
