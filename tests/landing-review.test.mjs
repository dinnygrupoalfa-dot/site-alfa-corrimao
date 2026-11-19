import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';

const page = readFileSync('src/pages/corrimaos-para-predios.astro','utf8');
const clients = readFileSync('src/components/ClientMarquee.astro','utf8');
const images = readdirSync('public/images/landing-20261118');

test('landing tem o lote fotográfico completo e organizado',()=>{
  assert.equal(images.length,30);
  assert.equal(images.filter(n=>n.startsWith('ESC-')).length,17);
  assert.equal(images.filter(n=>n.startsWith('RMP-')).length,13);
  for (const photo of images) assert.ok(page.includes(photo),'foto ausente: '+photo);
});

test('clientes reais sem depoimentos inventados',()=>{
  assert.ok(page.includes('<ClientMarquee />'));
  assert.equal((clients.match(/arquivo:'[^']+\.webp'/g)||[]).length,9);
  assert.ok(clients.includes('Instituto Neymar Júnior'));
  assert.ok(!page.includes('Quem já resolveu a escadaria'));
  assert.ok(!page.includes('[X]'));
});

test('todos os orçamentos desta landing vão exclusivamente para Ernani',()=>{
  assert.ok(page.includes("import {site,technicalWhatsapp}"));
  assert.ok(page.includes("data-wa={'55'+site.phone}"));
  assert.ok(page.includes('technicalWhatsapp('));
  assert.ok(page.includes(' campaignLanding>'));
  assert.ok(!page.includes('site.whatsappNumber'));
  assert.ok(!page.includes('site.whatsappLabel'));
  assert.ok(!page.includes('Atendimento comercial com Edna'));
});

test('condições aprovadas e dois produtos estão presentes',()=>{
  assert.ok(page.includes('Sinal na entrega dos materiais, conforme contrato'));
  assert.ok(!page.includes('Nenhum pagamento antes de a obra começar'));
  assert.ok(page.includes('Material recebido na obra'));
  assert.ok(page.includes('após a conclusão e a conferência da instalação'));
  assert.ok(page.includes('id="escadarias"'));
  assert.ok(page.includes('id="rampas"'));
  assert.ok(page.includes('O que a <em>NBR 9050</em> exige'));
});

test('faixa de clientes move automaticamente em mobile sem botão de pausa',()=>{
  const css=readFileSync('src/styles/landing.css','utf8');
  const global=readFileSync('src/styles/global.css','utf8');
  const photos=readFileSync('src/components/LandingCarousel.astro','utf8');
  const script=readFileSync('src/scripts/site.ts','utf8');
  assert.doesNotMatch(clients,/data-clients-toggle|Pausar movimento|lp-clients-paused/);
  assert.doesNotMatch(photos,/data-pause|>Pausar</);
  assert.match(css,/\.landing \.lp-clients-track\{display:flex;width:max-content;animation:alfa-clientes-passagem 39s linear infinite/);
  // Regressão: no Android, o global força animation-duration a 0,01ms!important.
  // A faixa tem exceção específica e explícita no próprio CSS.
  assert.match(global,/animation-duration:\.01ms!important/);
  assert.match(css,/\.landing \.lp-clients-track \{[\s\S]*?animation-duration: 54s !important;/);
  assert.match(css,/@media \(hover: hover\) and \(pointer: fine\)/);
  assert.match(script,/if\(pause\)/);
  assert.match(script,/if\(!isSalesLanding\)track\.addEventListener\('pointerdown'/);
});

test('credibilidade institucional: CNPJ, desde 2012 e cidade verificados',()=>{
  const layout=readFileSync('src/layouts/Layout.astro','utf8');
  const who=readFileSync('src/pages/quem-somos.astro','utf8');
  const site=readFileSync('src/data/site.ts','utf8');
  const css=readFileSync('src/styles/landing.css','utf8');
  assert.ok(site.includes("cnpj: '17.119.304/0001-75'"));
  assert.ok(site.includes("openedOn: '21/09/2012'"));
  assert.ok(site.includes("cityState: 'São Bernardo do Campo – SP'"));
  assert.ok(layout.includes('CNPJ: {site.cnpj}'));
  assert.ok(page.includes('Alfa Corrimão.<br/><em>Desde 2012.</em>'));
  assert.ok(page.includes('id="sobre-a-alfa"'));
  assert.ok(who.includes('Fundada em 2012'));
  assert.ok(who.includes('sede própria'));
  assert.ok(who.includes('Ernani e Enéias'));
  assert.match(css,/\.landing \.lp-client-logo\{[^}]*width:192px;height:102px/);
  assert.match(css,/@media\(max-width:650px\)[\s\S]*?\.landing \.lp-client-logo\{width:174px;height:98px\}/);
});

test('conteúdo comercial do Ernani e fotos completas no destaque',()=>{
  const layout=readFileSync('src/layouts/Layout.astro','utf8');
  const css=readFileSync('src/styles/landing.css','utf8');
  assert.ok(page.includes('const fotosDestaque = [escadarias[5],rampas[0],...escadarias.filter((_,i)=>i!==5),...rampas.filter((_,i)=>i!==0)]'));
  assert.ok(page.includes('slides={fotosDestaque}'));
  assert.match(page,/name="30 fotografias de corrimãos da Alfa em escadarias e rampas" intervalMs=\{3000\}/);
  assert.ok(page.includes('Em conformidade com a ABNT NBR 9050'));
  assert.ok(page.includes('vistoria do Corpo de Bombeiros'));
  assert.ok(page.includes('regularização do AVCB'));
  assert.ok(page.includes('2,40 m'));
  for(const word of ['Versátil','Agilidade na instalação','Estrutura leve','Fácil manutenção','rampas acessíveis']){
    assert.ok(page.includes(word),'Conteúdo faltante: '+word);
  }
  assert.ok(page.includes('name="etapa"'));
  assert.ok(page.includes('name="perfil"'));
  assert.ok(layout.includes("class={campaignLanding?'campaign-landing':undefined}"));
  assert.ok(css.includes('body.campaign-landing .landing .lp-top h1'));
});
