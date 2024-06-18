import{d as y,aF as C,aG as x,a2 as j,aN as E,aI as P,aV as R,aW as S,X as k,r as B,c as F,W as D,w as T,o as M,u as O,Y as U,e,F as h,f as V,g as f,aX as I,M as L,aY as _,B as m,aZ as q,i as z,a_ as $,a0 as A,L as G,a$ as H,al as K,b0 as W,R as g,U as X,b1 as Y,E as b,O as Z,aw as J,m as Q,x as ee}from"./index-DrqTzKeg.js";import{N as ae,a as te}from"./ListItem-B495cGJh.js";import{N as se}from"./Thing-BSiU63cz.js";const ne=Object.assign(Object.assign({},x.props),{tag:{type:String,default:"div"}}),le=y({name:"Element",alias:["El"],props:ne,setup(s){const{mergedClsPrefixRef:n,inlineThemeDisabled:c}=C(s),d=x("Element","-element",void 0,R,s,n),o=j(()=>{const{common:r}=d.value;return Object.keys(r).reduce((i,l)=>(i[`--${S(l)}`]=r[l],i),{})}),t=c?E("element",void 0,o,s):void 0;return{mergedClsPrefix:n,cssVars:c?void 0:o,themeClass:t?.themeClass,onRender:t?.onRender}},render(){var s;const{tag:n,mergedClsPrefix:c,cssVars:d,themeClass:o,onRender:t,$slots:r}=this;return t?.(),P(n,{role:"none",class:[`${c}-element`,o],style:d},(s=r.default)===null||s===void 0?void 0:s.call(r))}});function re(s){return typeof s=="function"||Object.prototype.toString.call(s)==="[object Object]"&&!ee(s)}const de=y({setup(){const{data:s,pager:n,sortProps:c,fetchDataFn:d,loading:o}=k((p,a)=>async(u=i.query.page||1,w=30)=>{const v=await g.api.projects.get({params:{page:u,size:w}});p.value=v.data,a.value=v.pagination}),t=B(new Set),r=F(),i=D(),l=d;T(()=>i.query.page,async p=>{await l(p)}),M(async()=>{await l()});const N=O(U);return()=>{const p=N.viewport.value.mobile;return e(h,null,[e("div",{class:"relative"},[e(h,null,[e("div",{class:V("flex flex-wrap items-center justify-between pt-4 lg:mb-5")},[e("div",{class:"flex items-center justify-between"},[e("p",{class:"flex items-center text-lg font-medium"},[p?e("div",null,null):e("span",null,[f("项目 · 项目列表")])])])]),e("div",{class:"p-16 pt-0"},[e(I,{show:o.value},{default:()=>[e(ae,{hoverable:!0,bordered:!1,class:"min-h-[300px] bg-transparent"},{footer(){return e("div",{class:"flex justify-end"},[e(L,{itemCount:n.value.total,pageCount:n.value.totalPage,page:n.value.currentPage,pageSize:n.value.size,onUpdatePage:a=>{l(a)}},null)])},default(){return s.value.map(a=>e(te,{key:a.id,class:"bg-base-100 rounded-md"},{prefix(){return e(_,{class:"mt-4",checked:t.has(a.id),onUpdateChecked:u=>{u?t.add(a.id):t.delete(a.id)}},null)},default(){return e(se,{description:a.description},{header(){return e("div",null,[e(m,q({ghost:!0,type:"primary",quaternary:!0,class:"!font-medium"},a.projectUrl?{tag:"a",href:a.projectUrl,target:"_blank"}:{}),{default:()=>[a.name]})])},footer(){return e(le,null,{default:()=>[e(z,{class:"pl-[3.6rem] text-sm text-[var(--clear-color-pressed)]"},{default:()=>[e("span",null,[f("创建于")," ",$(a.created)]),a.modified&&e("span",null,[f("更新于")," ",e(A,{time:a.modified},null)])]})]})},"header-extra":function(){return e(G,null,{default:()=>[e(m,{onClick:()=>{H.push({name:K.EditProject,query:{id:a.id}})}},{default:()=>[f("编辑")]}),e(W,{class:"!p-0",options:[{value:"del",label:"",render(){return e(m,{type:"error",bordered:!1,onClick:async()=>{await g.api.projects(a.id).delete(),r.success("删除成功"),await l(n.value.currentPage)}},{default:()=>[f("删除")]})}}]},{default:()=>[e(m,{class:"!px-2"},{default:()=>[e(X,null,{default:()=>[e(Y,null,null)]})]})]})]})},avatar(){let u;return a.avatar?e(b,{class:"align-center",circle:!0,src:a.avatar,size:"large"},null):e(b,{circle:!0,size:"large",class:"align-center"},re(u=a.name[0].toUpperCase())?u:{default:()=>[u]})}})}}))}})]})])])]),e(Z,{className:"space-x-2"},{default:()=>[e(J,{checkedRowKeys:t,onDelete:async()=>{await Promise.all(Array.from(t.values()).map(a=>g.api.projects(a).delete())),t.clear(),l()}},null),e(Q,{className:"bg-accent",name:"添加项目",to:"/projects/edit",icon:e("i",{class:"icon-[mingcute--add-line] text-white"},null)},null)]})])}}});export{de as default};
