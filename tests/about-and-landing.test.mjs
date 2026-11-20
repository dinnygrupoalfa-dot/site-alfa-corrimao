import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const about=readFileSync('src/pages/quem-somos.astro','utf8');
const landing=readFileSync('src/pages/corrimaos-para-predios.astro','utf8');
const layout=readFileSync('src/layouts/Layout.astro','utf8');
const aboutStyles=readFileSync('src/styles/about.css','utf8');

test('Quem Somos conta a historia real, apresenta especializacao e oferece caminhos entre paginas',()=>{
 assert.match(about,/Ernani e Enéias/);
 assert.match(about,/Francisco Saldanha/);
 assert.match(about,/sede própria/);
 assert.match(about,/frota de veículos/);
 assert.match(about,/equipes especializadas em instalação/);
 assert.match(about,/galpões/);
 assert.match(about,/engenheiro/);
 for(const url of ['/obras-realizadas/','/corrimaos/','/corrimaos/aluminio-escadarias/','/corrimaos/inox-rampas/','/guarda-corpos/','/vidro-temperado/','/corrimaos-para-predios/','/construtoras-e-condominios/']){
  assert.ok(about.includes(url),'Falta navegação contextual: '+url);
 }
 assert.match(about,/<ClientMarquee compact\/>/);
 assert.match(about,/import '\.\.\/styles\/about\.css'/);
 assert.match(aboutStyles,/\.about-page \.about-hero/);
 assert.doesNotMatch(about,/Edna|quatro equipes|dois caminhões|centenas de obras|depoimento/i);
});

test('landing explica a Alfa e conserva o contato exclusivo do engenheiro',()=>{
 assert.match(landing,/href="\/quem-somos\/"/);
 assert.match(landing,/href="\/obras-realizadas\/"/);
 assert.match(landing,/href="#escadarias"/);
 assert.match(landing,/href="#rampas"/);
 assert.match(landing,/id="orcamento"/);
 assert.match(landing,/technicalWhatsapp\(/);
 assert.match(landing,/data-wa=\{'55'\+site\.phone\}/);
 assert.match(landing,/Sinal na entrega dos materiais, conforme contrato/);
 assert.doesNotMatch(landing,/Nenhum pagamento antes de a obra começar/);
 assert.doesNotMatch(landing,/>[^<]*\bPNE\b/);
});

test('link Contato da landing leva ao formulario de Ernani sem alterar contato institucional',()=>{
 assert.match(layout,/const pageNav = campaignLanding/);
 assert.match(layout,/href:'#orcamento'/);
 assert.match(layout,/campaignLanding\?'#orcamento':'\/contato\/'/);
 assert.match(layout,/campaignLanding \? technicalWhatsapp : whatsapp/);
});
