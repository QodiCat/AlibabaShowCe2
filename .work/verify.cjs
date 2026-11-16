const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const data=vm.runInNewContext(fs.readFileSync('web/dist/content.js','utf8')+';({pages,chapters})');
assert.equal(data.pages.length,28);
let images=0;
function translated(v){for(const lang of ['en','zh','ja'])assert.ok(v[lang]?.length,`Missing ${lang}`)}
function asset(name){assert.ok(fs.existsSync(`web/dist/assets/${name}.jpg`),`Missing image ${name}`);images++}
for(const p of data.pages){translated(p.title);for(const field of ['intro','note','caption'])if(p[field])translated(p[field]);if(p.image)asset(p.image);for(const [title,body] of p.sections||[]){translated(title);translated(body)}for(const [image,title,body] of p.materials||[]){asset(image);translated(title);translated(body)}for(const [image,title,target] of p.products||[]){asset(image);translated(title);if(target)assert.ok(target>=1&&target<=28)}}
for(const [target,title] of data.chapters){assert.ok(target>=1&&target<=28);translated(title)}
// Render every page and language through the actual page renderer.
const ids=new Map();
function element(id){if(!ids.has(id))ids.set(id,{innerHTML:'',style:{},classList:{toggle(){},add(){},remove(){}},addEventListener(){},close(){},showModal(){}});return ids.get(id)}
const document={documentElement:{},getElementById:element,addEventListener(){},activeElement:{tagName:'BODY'}};
const context=vm.createContext({document,location:{hash:'#1'},localStorage:{getItem(){return 'zh'}},history:{replaceState(){}},window:{addEventListener(){}},setTimeout});
vm.runInContext(fs.readFileSync('web/dist/content.js','utf8')+'\n'+fs.readFileSync('web/dist/app.js','utf8'),context);
for(const lang of ['zh','en','ja'])for(let n=1;n<=28;n++){vm.runInContext(`lang='${lang}';current=${n};render()`,context);assert.ok(element('page').innerHTML.includes('<h1>'));assert.ok(!element('page').innerHTML.includes('undefined'));assert.equal(element('count').textContent,`${String(n).padStart(2,'0')} / 28`);assert.equal(element('next').disabled,n===28);assert.equal(element('prev').disabled,n===1)}
console.log(`Passed: 84 page/language renders, ${images} image references, chapter and product links, first/last page navigation.`);
