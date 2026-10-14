/** No-install GitHub Actions catalog integrity check. Runtime-browser E2E is separate. */
import fs from 'node:fs';
import vm from 'node:vm';
const dir=new URL('../',import.meta.url);
const read=file=>fs.readFileSync(new URL(file,dir),'utf8');
const components=JSON.parse(read('components.json'));
const html=read('index.html');
const errors=[];
const ids=new Set();
for(const c of components){
 if(ids.has(c.id))errors.push(`Duplicate ${c.id}`);
 ids.add(c.id);
 if(!/^[a-z0-9-]+$/.test(c.id))errors.push(`Unsafe id ${c.id}`);
 for(const key of ['html','css','category','name','description'])if(typeof c[key]!=='string'||!c[key].trim())errors.push(`Missing ${key} in ${c.id}`);
 if(typeof c.js!=='string')errors.push(`Missing JS string in ${c.id}`);
 try{new vm.Script(c.js,{filename:c.id+'.js'})}catch(e){errors.push(`${c.id}: ${e.message}`)}
 if(c.hasReact!==Boolean(c.react)||c.hasExpoCode!==Boolean(c.expoCode))errors.push(`Incorrect source flags: ${c.id}`);
}
const embedded=html.match(/<script id="catalog-data" type="application\/json">([\s\S]*?)<\/script>/);
if(!embedded)errors.push('Embedded catalog absent');
else{
 const inPage=JSON.parse(embedded[1]);
 if(inPage.length!==components.length)errors.push('Embedded catalog count differs');
 if(inPage.some((x,i)=>x.id!==components[i].id))errors.push('Embedded catalog diverged');
}
const scripts=[...html.matchAll(/<script(?![^>]*type=)[^>]*>([\s\S]*?)<\/script>/g)];
for(const [i,script] of scripts.entries())try{new vm.Script(script[1],{filename:`gallery-script-${i}.js`})}catch(e){errors.push('Gallery JS error: '+e.message)}
for(const token of ['function makeZip','function makeBundle','id="exportSelected"','id="downloadBundle"','sandbox="allow-scripts"'])if(!html.includes(token))errors.push('Missing '+token);
if(components.length!==105)errors.push('Expected 105 original demos, got '+components.length);
if(components.filter(x=>x.react).length!==32)errors.push('React port count mismatch');
if(components.filter(x=>x.expoCode).length!==32)errors.push('Expo port count mismatch');
console.log(`Gallery: ${components.length} demos; ${components.filter(x=>x.react).length} React TSX and ${components.filter(x=>x.expoCode).length} Expo TSX ports; ${errors.length} integrity errors.`);
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
