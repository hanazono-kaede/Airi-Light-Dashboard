import{d as y,av as I,e,m as j,b,o as U,s as d,B as $,g as x,F as f,W as B,D as N,r as P,a2 as k,R as E,O as V,n as q,p as A,T as c,b2 as T,ac as G,aj as S,ak as M,al as H,aA as O,an as L}from"./index-DYGX83NG.js";const R="https://api.github.com/",W=(r,s)=>fetch(`${R}repos/${r}/${s}`).then(u=>u.json()),_=(r,s)=>fetch(`${R}repos/${r}/${s}/readme`).then(u=>u.json()).catch(u=>null).then(u=>{if(u){const m=(()=>{const t=u.download_url.split("/"),n=t.pop(),i=t.pop();return`https://fastly.jsdelivr.net/gh/${r}/${s}@${i}/${n}`})();return fetch(m).then(t=>t.text())}return null}),K=y({props:{onData:{type:Function,required:!0},defaultValue:{type:String}},setup(r){const s=I(),u=()=>{const m=s.create({title:"从 GitHub 解析",content:()=>e(y({setup(){const n=b(r.defaultValue??""),i=b(!1),h=async()=>{i.value=!0;const o=n.value.replace(/\.git$/,"").replace(/^https?:\/\/github.com\//,""),[p,v]=o.split("/"),[F,g]=await Promise.all([W(p,v),_(p,v)]);r.onData(F,g),i.value=!1,requestAnimationFrame(()=>{m.destroy()})},a=b();return U(()=>{setTimeout(()=>{a.value.focus()},10)}),()=>e(f,null,[e(d,{ref:a,onKeydown:l=>{l.code==="Enter"&&h()},class:"my-4",value:n.value,placeholder:"在此输入项目地址",onUpdateValue:l=>void(n.value=l)},null),e("div",{class:"flex justify-end space-x-4"},[e($,{type:"primary",round:!0,onClick:h,loading:i.value},{default:()=>[x("获取")]})])])}}),null,null)})};return()=>e(j,{className:"bg-[#25292E]",icon:e("i",{class:"icon-[mingcute--github-fill]"},null),name:"从 GitHub 获取",onClick:u},null)}}),J=y({setup(){const r=B(),s=N(),u=()=>({name:"",previewUrl:"",docUrl:"",projectUrl:"",images:[],description:"",avatar:"",text:"",id:void 0}),m=a=>S(t)(a),t=P(u()),n=k(()=>r.query.id);U(async()=>{const a=n.value;if(a&&typeof a=="string"){const o=(await E.api.projects(a).get({})).data;m(o)}});const i=async()=>{const a=()=>{try{if(!t.text||t.text.trim().length==0)throw"内容为空";return{...O(L(t),(l,o,p)=>(l[p]=typeof o>"u"?null:typeof o=="string"&&o.length==0?"":o,l)),text:t.text.trim()}}catch(l){throw message.error(l),l}};if(n.value){if(!M(n.value))return;const l=n.value;await E.api.projects(l).put({data:a()}),message.success("修改成功")}else await E.api.projects.post({data:a()}),message.success("发布成功");s.push({name:H.ListProject})},h=(a,l)=>{const{html_url:o,homepage:p,description:v}=a;Object.assign(t,{description:v,projectUrl:o,previewUrl:p,images:(g=>{const C=/(?<=!\[.*]\()(.+)(?=\))/g,w=[];for(const D of g.matchAll(C))w.push(D[0]);return w})(l||""),name:a.name,text:l||""})};return()=>e(f,null,[e(V,{className:"space-x-2"},{default:()=>[e(f,null,[e(K,{onData:h,defaultValue:t.projectUrl},null),e(j,{className:"bg-accent",onClick:i,icon:e("i",{class:"icon-[mingcute--send-plane-line]"},null)},null)])]}),e(q,{class:"mt-16 rounded-md"},{header(){return e(f,null,[e("div",{class:"flex flex-col mb-4 select-none"},[e("h1",{class:"flex items-center text-[1.73rem]"},[x("创建项目")]),e("h2",{class:"opacity-80 text-sm"},[x("项目 · 创建项目")])])])},default(){return e(f,null,[" ",e(A,{labelWidth:"7rem",labelPlacement:"left",labelAlign:"left"},{default:()=>[e(c,{label:"项目名称",required:!0},{default:()=>[e(d,{autofocus:!0,placeholder:"",value:t.name,onInput:a=>void(t.name=a)},null)]}),e(c,{label:"文档地址"},{default:()=>[e(d,{placeholder:"",value:t.docUrl,onInput:a=>void(t.docUrl=a)},null)]}),e(c,{label:"预览地址"},{default:()=>[e(d,{placeholder:"",value:t.previewUrl,onInput:a=>void(t.previewUrl=a)},null)]}),e(c,{label:"项目地址"},{default:()=>[e(d,{placeholder:"",value:t.projectUrl,onInput:a=>void(t.projectUrl=a)},null)]}),e(c,{label:"项目描述",required:!0},{default:()=>[e(d,{placeholder:"",value:t.description,onInput:a=>void(t.description=a)},null)]}),e(c,{label:"项目图标"},{default:()=>[e(d,{placeholder:"",value:t.avatar,onInput:a=>void(t.avatar=a)},null)]}),e(c,{label:"预览图片"},{default:()=>[e(T,{round:!0,value:t.images,onUpdateValue:a=>void(t.images=a)},null)]}),e(c,{label:"正文",required:!0},{default:()=>[e("div",{class:"flex grow flex-col overflow-auto h-60"},[e(G,{unSaveConfirm:!1,class:"h-[calc(100vh-40rem)] min-h-80 w-full",loading:!!(n.value&&!t.id),onChange:a=>{t.text=a},text:t.text},null)])]})]})])}})])}});export{J as default};
