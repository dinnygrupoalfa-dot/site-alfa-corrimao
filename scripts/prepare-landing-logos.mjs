// Prepara os logotipos aprovados para a landing sem dependencias externas.
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { inflateRawSync } from 'node:zlib';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const archive = readFileSync(join(root, 'assets', 'landing-logos-clientes.zip'));
const destination = join(root, 'public', 'images', 'clientes');
const expected = new Set([
  'arbore.webp', 'costa-hirota.webp', 'grupo-mendes.webp',
  'instituto-neymar-jr.webp', 'pgc-engenharia.webp', 'phoenix.webp',
  'quali-engenharia.webp', 'soccer-grass.webp', 'terracon.webp',
]);
const delivered = new Set();
let eocd = -1;
for (let i = archive.length - 22; i >= Math.max(0, archive.length - 65557); i--) {
  if (archive.readUInt32LE(i) === 0x06054b50) { eocd = i; break; }
}
if (eocd < 0) throw new Error('Pacote de logotipos invalido: EOCD ausente');
const count = archive.readUInt16LE(eocd + 10);
let cursor = archive.readUInt32LE(eocd + 16);
mkdirSync(destination, {recursive: true});
for (let n = 0; n < count; n++) {
  if (archive.readUInt32LE(cursor) !== 0x02014b50) throw new Error('Pacote de logotipos invalido: indice ZIP');
  const method = archive.readUInt16LE(cursor + 10);
  const compressed = archive.readUInt32LE(cursor + 20);
  const fileLength = archive.readUInt16LE(cursor + 28);
  const extraLength = archive.readUInt16LE(cursor + 30);
  const commentLength = archive.readUInt16LE(cursor + 32);
  const localOffset = archive.readUInt32LE(cursor + 42);
  const entry = archive.toString('utf8', cursor + 46, cursor + 46 + fileLength);
  cursor += 46 + fileLength + extraLength + commentLength;
  if (!entry.startsWith('logos/')) continue;
  const basename = entry.slice('logos/'.length);
  if (!expected.has(basename)) continue;
  if (archive.readUInt32LE(localOffset) !== 0x04034b50) throw new Error('Pacote de logotipos invalido: arquivo');
  const localNameLength = archive.readUInt16LE(localOffset + 26);
  const localExtraLength = archive.readUInt16LE(localOffset + 28);
  const start = localOffset + 30 + localNameLength + localExtraLength;
  const bytes = archive.subarray(start, start + compressed);
  const raw = method === 8 ? inflateRawSync(bytes) : method === 0 ? bytes : null;
  if (!raw) throw new Error('Metodo ZIP nao suportado para ' + basename);
  writeFileSync(join(destination, basename), raw);
  delivered.add(basename);
}
if (delivered.size !== expected.size) {
  throw new Error('Logotipos ausentes: ' + [...expected].filter(n => !delivered.has(n)).join(', '));
}
console.log('Logotipos preparados: ' + delivered.size);
