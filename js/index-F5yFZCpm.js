import{d as i,dN as s,cl as m,b,w as x,de as g,e as a,p as w,T as d,Q as c,B as h,g as y,R as S}from"./index-DrqTzKeg.js";import{C as T}from"./index-BI8M-zx3.js";import{E as p}from"./types-w5g51IlY.js";const C=l=>{switch(l){case"objectId":return((t=Math,r=Date,o=16,n=u=>t.floor(u).toString(o))=>n(r.now()/1e3)+" ".repeat(o).replaceAll(/./g,()=>n(t.random()*o)))();case"now":return new Date().toISOString();case"randomtext":return btoa(Math.random().toString()).slice(5,10);case"randomnumber":return Math.floor(Math.random()*1e4);default:return`{{${l}}}`}},D=i({setup(){const l=s("debug-event-name",p.POST_CREATE),t=s("debug-event",{}),r=s("debug-event-type","web"),o=m({value:t.value[l.value]||"export default {}"}),n=b();x(()=>l.value,e=>{u.editor.setValue(t.value[e]||"")});const u=g(n,o,e=>{t.value={...t.value,[l.value]:e}},{language:"typescript",unSaveConfirm:!1}),v=async()=>{const e=t.value[l.value]?.replace(/({{(.*?)}})/g,(E,M,f)=>C(f))??"";S.api.debug.events.post({params:{type:r.value,event:l.value},data:new Function(`return ${e.replace(/^export default /,"")}`)()})};return()=>a(T,null,{default:()=>[a("div",{class:"flex flex-col"},[a("div",{class:"flex md:flex-row md:space-x-6 flex-col pb-4 md:pb-0"},[a(w,{class:"flex md:flex-row md:space-x-6"},{default:()=>[a(d,{label:"Type",class:"md:w-[200px] w-full"},{default:()=>[a(c,{tag:!0,filterable:!0,value:r.value,onUpdateValue:e=>void(r.value=e),options:["web","all","admin"].map(e=>({value:e,label:e}))},null)]}),a(d,{label:"Event",class:"md:w-[200px] w-full"},{default:()=>[a(c,{tag:!0,filterable:!0,value:l.value,onUpdateValue:e=>void(l.value=e),options:Object.keys(p).map(e=>({value:e,label:e}))},null)]})]}),a("div",{class:"flex center"},[a(h,{type:"primary",onClick:v,class:"md:w-[80px] w-full"},{default:()=>[y("测试")]})])]),a("div",null,[a("div",{class:"relative h-[calc(100vh-25rem)] grow overflow-auto rounded-xl border p-3 duration-200 border-zinc-200 bg-white placeholder:text-slate-500 focus-visible:border-accent dark:border-neutral-800 dark:bg-zinc-900"},[a("div",{ref:n,class:"h-full "},null)])])])]})}});export{D as default};