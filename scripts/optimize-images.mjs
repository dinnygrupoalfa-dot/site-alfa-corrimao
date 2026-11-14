import sharp from 'sharp';
import {fileURLToPath} from 'node:url';
import {readFile,writeFile} from 'node:fs/promises';
const path=new URL('../public/images/',import.meta.url);
const records=JSON.parse(await readFile(new URL('../src/data/images.json',import.meta.url),'utf8'));
for(const record of records){
 const original=new URL(record.id.toLowerCase()+'.jpg',path);
 const meta=await sharp(fileURLToPath(original)).metadata();
 record.width=meta.width;record.height=meta.height;
 for(const size of [640,1280])await sharp(fileURLToPath(original)).rotate().resize({width:size,withoutEnlargement:false}).webp({quality:82,effort:5}).toFile(fileURLToPath(new URL(record.id.toLowerCase()+'-'+size+'.webp',path)));
}
await writeFile(new URL('../src/data/images.json',import.meta.url),JSON.stringify(records,null,2)+'\n');
console.log(records.length+' fotografias otimizadas em dois tamanhos; identidade e aplicação preservadas.');
