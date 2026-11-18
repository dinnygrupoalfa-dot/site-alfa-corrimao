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

test('orçamento e suporte técnico têm destinos distintos',()=>{
  assert.ok(page.includes("import {site,whatsapp,technicalWhatsapp}"));
  assert.ok(page.includes("data-wa={'55'+site.whatsappNumber}"));
  assert.ok(page.includes('technicalWhatsapp('));
  assert.ok(!page.includes(' campaignLanding>'));
});

test('condições aprovadas e dois produtos estão presentes',()=>{
  assert.ok(page.includes('Nenhum pagamento antes de a obra começar'));
  assert.ok(page.includes('Material recebido na obra'));
  assert.ok(page.includes('após a conclusão e a conferência da instalação'));
  assert.ok(page.includes('id="escadarias"'));
  assert.ok(page.includes('id="rampas"'));
  assert.ok(page.includes('O que a <em>NBR 9050</em> exige'));
});
