import{d as b,y as _,z as D,A as E,C as Q,R as h,b as g,D as M,e,B as v,I as C,g as w,v as I,n as T,E as q,G as P,H as K,J as X,K as Y,L as A,j as O,M as U,F as y,o as j,P as Z,Q as ee,x as z,S as te,r as ae,w as R,p as le,T as F,s as N,U as ue,V as ne,W as se,X as re,u as oe,Y as ie,f as ce,O as de,m as pe}from"./index-DYGX83NG.js";import{T as V}from"./Trash-BJj_4BXG.js";import{U as L}from"./index-C8k5wsXZ.js";import{N as $}from"./Thing-D81Yo8rz.js";import{N as fe}from"./Upload-B4DLtrIo.js";import{N as S}from"./Skeleton-8x3u8QFP.js";import{N as H,a as J}from"./ListItem-BSICn9GG.js";import"./use-houdini-C562Ac1T.js";const me={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ge=E("g",{fill:"none"},[E("path",{d:"M10 2.75a7.25 7.25 0 0 1 5.63 11.819l4.9 4.9a.75.75 0 0 1-.976 1.134l-.084-.073l-4.901-4.9A7.25 7.25 0 1 1 10 2.75zm0 1.5a5.75 5.75 0 1 0 0 11.5a5.75 5.75 0 0 0 0-11.5z",fill:"currentColor"})],-1),he=[ge],ve=b({name:"Search24Regular",render:function(t,l){return _(),D("svg",me,he)}}),xe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ye=E("path",{d:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4L.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3l262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3l-31.1-31.1L51.7 376H88v48z",fill:"currentColor"},null,-1),we=[ye],be=b({name:"PencilAlt",render:function(t,l){return _(),D("svg",xe,we)}}),W=a=>{if(!a)return"";const t=a.split(" ")[0];return t.length>4?a[0]:t},Fe=Q(a=>h.api.notes.get({params:{page:a,size:50,select:"nid title _id id"}}));function Ne(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!z(a)}const Ce=b({props:{id:{type:String,required:!0}},setup(a){const t=g(!1),l=g(null),o=g([]),d=g(),p=g(!0),f=async()=>{t.value=!0;const r=await h.api.topics(a.id).get();l.value=r,await u(r.id)},u=async(r,s=1,m=5)=>{p.value=!0;const{data:n,pagination:x}=await h.api.notes.topics(r).get({params:{page:s,size:m}});return p.value=!1,o.value=n,d.value=x,{data:n,pagination:x}},i=async r=>{await h.api.notes(r).patch({data:{topicId:null}}),message.success("已移除文章的专栏引用");const s=o.value.findIndex(m=>m.id===r);-~s&&o.value.splice(s,1)},c=M();return()=>{let r;return e(y,null,[e(v,{size:"small",secondary:!0,onClick:f},{default:()=>[e(C,{class:"mr-1"},{default:()=>[e(ve,null,null)]}),w("详情")]}),e(I,{show:t.value,closable:!0,onClose:()=>{t.value=!1},closeOnEsc:!0,onUpdateShow:s=>{t.value=s}},{default:()=>[l.value?e(T,{closable:!0,role:"dialog",class:"modal-card md",title:`专栏 - ${l.value.name}`,onClose:()=>{t.value=!1}},{default:()=>[e($,null,{avatar(){return e(L,{class:"p0",type:"icon",onFinish:s=>{const m=JSON.parse((s.event?.target).responseText);return s.file.url=m.url,l.value&&h.api.topics(l.value.id).patch({data:{icon:m.url}}).then(()=>{l.value&&(l.value.icon=m.url)}),s.file},onError:s=>{try{const m=JSON.parse((s.event?.target).responseText);message.warning(m.message)}catch{}return s.file}},{default:()=>[e(fe,null,{default:()=>[e(q,{size:60,class:"rounded-xl bg-transparent",src:l.value?.icon||void 0},{default:()=>[l.value?.icon?void 0:W(l.value?.name)]})]})]})},header(){return e("b",null,[l.value?.name])},"header-extra":function(){return e("span",{class:"opacity-80"},[l.value?.slug])},description(){return e("p",{class:"clamp-2 break-all opacity-90"},[l.value?.introduce])},default(){return e("p",null,[l.value?.description])}}),p.value&&o.value.length==0?e(S,{animated:!0,class:"mt-2 h-[350px]"},null):e("div",{class:"mt-4"},[e("p",{class:"flex items-center justify-between"},[e("strong",null,[w("包含的文章：")]),e(Se,{topicId:l.value.id,onSuccess:()=>{P(()=>f())}},null)]),o.value.length===0&&e("div",{class:"flex h-[300px] items-center justify-center"},[e(K,{description:"这里还没有任何内容"},null)]),e(H,{bordered:!0,class:"mt-2"},Ne(r=o.value.map(s=>e(J,{key:s.id},{default(){return e("p",{class:"flex items-center space-x-2"},[e("span",null,[s.title]),e(X,{path:Y(s.id)},null)])},suffix(){return e(A,null,{default:()=>[e(v,{circle:!0,tertiary:!0,type:"primary",onClick:()=>{c.push({path:"/notes/edit",query:{id:s.id}})}},{default:()=>[e(C,null,{default:()=>[e(be,null,null)]})]}),e(O,{onPositiveClick:()=>i(s.id)},{trigger(){return e(v,{circle:!0,tertiary:!0,type:"error"},{default:()=>[e(C,null,{default:()=>[e(V,null,null)]})]})},default(){return`是否移除此话题「${l.value?.name}」？`}})]})}})))?r:{default:()=>[r]}),e("div",{class:"flex justify-end"},[d.value&&e(U,{class:"mt-4",onUpdatePage:s=>{u(a.id,s)},page:d.value.currentPage,pageCount:d.value.totalPage},null)])])]}):e(T,{class:"modal-card md",role:"dialog",title:"专栏信息获取中"},{default:()=>[e("div",{class:"relative flex gap-2 "},[e(S,{animated:!0,circle:!0,width:60},null),e("div",{class:"flex-grow"},[e(S,{animated:!0,text:!0,repeat:3,class:"flex-grow"},null)])]),e(S,{animated:!0,repeat:2,class:"mt-2",text:!0},null)]})]})])}}}),Se=b({props:{topicId:{type:String,required:!0},onSuccess:{type:Function,required:!1}},setup(a){const t=g(!1),l=async()=>{const c=te(u);await Promise.all(c.map(r=>h.api.notes(r).patch({data:{topicId:a.topicId}}))),message.success("添加成功"),t.value=!1,a.onSuccess?.(c)},{refresh:o,fetchNext:d,datalist:p,loading:f}=Fe(),u=g([]),i=c=>{const r=c.currentTarget;r.scrollTop+r.offsetHeight+10>=r.scrollHeight&&d()};return j(()=>{p.value.length===0&&d()}),()=>e(y,null,[e(v,{secondary:!0,type:"primary",circle:!0,onClick:()=>{t.value=!0}},{default:()=>[e(C,null,{default:()=>[e(Z,null,null)]})]}),e(I,{closable:!0,closeOnEsc:!0,show:t.value,onUpdateShow:c=>{t.value=c}},{default:()=>[e(T,{title:"哪些文章需要添加到专栏？",class:"modal-card sm"},{footer(){return e("div",{class:"text-right"},[e(v,{round:!0,type:"primary",onClick:()=>l()},{default:()=>[w("添加！")]})])},default(){return e(ee,{maxTagCount:3,filterable:!0,clearable:!0,loading:f.value,multiple:!0,onClear:()=>{o()},value:u.value,onUpdateValue:c=>{u.value=c},resetMenuOnOptionsChange:!1,options:p.value.map(c=>({label:c.title,value:c.id,key:c.id})),onScroll:i},null)}})]})])}}),Te=b({props:{show:{type:Boolean,required:!0},onClose:{type:Function,required:!0},id:{type:String,required:!1},onSubmit:{type:Function,required:!1}},setup(a){const t=ae({}),l=g(!1),o=()=>{Object.keys(t).forEach(u=>{delete t[u]})};R(()=>a.id,u=>{u?(l.value=!0,h.api.topics(u).get().then(i=>{Object.assign(t,i),l.value=!1})):o()});const d=()=>{a.onClose()},p=()=>{f?.value?.validate(async i=>{i?.length||await u()});async function u(){let i;a.id?(i=await h.api.topics(a.id).put({data:t}),message.success("修改成功")):(i=await h.api.topics.post({data:t}),message.success("添加成功")),a.onSubmit?.(i),P(()=>{o()})}},f=g();return()=>e(y,null,[e(I,{show:a.show,onUpdateShow:d,closable:!0,onClose:d,transformOrigin:"center"},{default:()=>[e(T,{role:"dialog",title:a.id?"编辑话题":"新建话题",closable:!0,onClose:d,class:"modal-card sm"},{default:()=>[e(le,{labelPlacement:"top",ref:f,model:t,disabled:l.value},{default:()=>[e(F,{label:"名字",required:!0,rule:{max:50,required:!0,trigger:["blur","input"]},path:"name"},{default:()=>[e(N,{value:t.name,onUpdateValue:u=>{t.name=u}},null)]}),e(F,{label:"id",required:!0,rule:{required:!0,trigger:["blur","input"]},path:"slug"},{default:()=>[e(N,{value:t.slug,onUpdateValue:u=>{t.slug=u}},null)]}),e(F,{label:"简介",required:!0,rule:{max:100,required:!0,trigger:["blur","input"]},path:"introduce"},{default:()=>[e(N,{value:t.introduce,onUpdateValue:u=>{t.introduce=u}},null)]}),e(F,{label:"图标"},{default:()=>[e(N,{value:t.icon,onUpdateValue:u=>{t.icon=u}},{suffix(){return e(L,{class:"flex items-center",type:"icon",onFinish:u=>{const i=JSON.parse((u.event?.target).responseText);return u.file.url=i.url,t.icon=u.file.url,u.file}},{default:()=>[e(v,{quaternary:!0},{default:()=>[e(ue,null,{default:()=>[e(ne,null,null)]})]})]})}})]}),e(F,{label:"长描述",rule:{max:500,trigger:["blur","input"]},path:"description"},{default:()=>[e(N,{type:"textarea",autosize:{maxRows:5,minRows:2},value:t.description,onUpdateValue:u=>{t.description=u}},null)]}),e("div",{class:"flex justify-end gap-2"},[e(v,{round:!0,type:"primary",onClick:p},{default:()=>[w("提交")]})])]})]})]})])}});function Be(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!z(a)}const Ae=b({setup(){const a=M(),t=se();R(()=>t.query.page,n=>{l(n?+n:0)});const{fetchDataFn:l,data:o,pager:d}=re((n,x)=>async(B=Number.parseInt(t.query.page)||1,G=20)=>{const k=await h.api.topics.get({page:B,size:G});return x.value=k.pagination,n.value=k.data,k});j(()=>l());const p=g(""),f=g(!1),u=()=>{f.value=!0,p.value=""},i=()=>{f.value=!1,p.value=""},c=async n=>{await h.api.topics(n).delete(),l()},r=n=>{p.value=n,f.value=!0},m=oe(ie).viewport.value.mobile;return{pagination:d,topics:o,fetchTopic:l,handleAddTopic:u,editTopicId:p,showTopicModal:f,handleCloseModal:i,isMobile:m,handleSubmit(n){i();const x=o.value.findIndex(B=>B.id===n.id);-~x?o.value[x]=n:o.value.push(n)},handleDelete:c,handleEdit:r,route:t,router:a}},render(){let a;const{pagination:t,topics:l,router:o,route:d,editTopicId:p,showTopicModal:f,handleAddTopic:u,handleCloseModal:i,handleSubmit:c,handleEdit:r,handleDelete:s,isMobile:m}=this;return e(y,null,[e("div",{class:"relative"},[e("div",{class:ce("flex flex-wrap items-center justify-between pt-4 lg:mb-5")},[e("div",{class:"flex items-center justify-between"},[e("p",{class:"flex items-center text-lg font-medium"},[m?e("div",null,null):e("span",null,[w("手记 · 专栏")])])])]),e("div",{class:"pt-[6px]"},[e(H,{bordered:!0,class:"mb-4"},Be(a=l.map(n=>e(J,{key:n.id},{prefix(){return e(q,{"data-src":n.icon,class:`mt-2 ${n.icon&&"!bg-transparent"}`,circle:!0,size:50,src:n.icon||void 0},{default:()=>[n.icon?void 0:W(n.name)]})},suffix(){return e(A,null,{default:()=>[e(v,{round:!0,onClick:()=>r(n.id)},{default:()=>[w("编辑")]}),e(O,{onPositiveClick:()=>s(n.id)},{default(){return`确定删除「${n.name}」？`},trigger(){return e(v,{circle:!0,tertiary:!0,type:"error"},{default:()=>[e(C,null,{default:()=>[e(V,null,null)]})]})}})]})},default(){return e($,{description:n.introduce},{header(){return e(y,null,[e("div",{class:"inline-flex space-x-6 center"},[e("h1",null,[n.name]),e("span",{class:"text-zinc-800/70 dark:text-zinc-400/60 text-sm"},[`${n.slug}`])])])},default(){return n.description},footer(){return e(Ce,{id:n.id},null)}})}})))?a:{default:()=>[a]}),t&&e("div",{class:"flex justify-end"},[e(U,{page:t.currentPage,onUpdatePage:n=>{o.replace({query:{...d.query,page:n},params:{...d.params}})},pageCount:t.totalPage,pageSize:t.size,showQuickJumper:!0},null)]),e(Te,{onClose:i,show:!!(f||p),id:p,onSubmit:c},null)])]),e(de,{className:"space-x-2"},{default:()=>[e(y,null,[e(pe,{className:"bg-accent",name:"添加",onClick:u,icon:e("i",{class:"icon-[mingcute--add-line] text-white"},null)},null)])]})])}});export{Ae as default};
