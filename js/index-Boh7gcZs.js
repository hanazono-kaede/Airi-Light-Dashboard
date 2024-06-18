import{d as h,b as u,w as b,o as N,R as i,e,g as c,ao as y,ap as d,aq as w,ar as F,n as v,as as k,L as z,j as E,B,v as T,at as U,U as C,au as A,a1 as O,O as S,m as I,F as M}from"./index-DYGX83NG.js";import{a as P,N as R}from"./Upload-B4DLtrIo.js";const L=h({setup(){const t=u("icon"),s=u([]);b(()=>t.value,()=>{f()}),N(()=>{f()});const n=u(!1),f=()=>{n.value=!0,i.api.files(t.value).get().then(({data:a})=>{s.value=a,n.value=!1})},r=u(!1),g=async a=>{if(t.value==="icon"||t.value==="avatar"||t.value==="photo"){if(a.file.file?.type.startsWith("image"))return!0;message.error("只能上传图片文件，请重新上传")}return!0},x=({file:a,event:l})=>{const o=l?.target,{url:m,name:p}=JSON.parse(o.responseText);return a.name=p,a.url=m,s.value.unshift({url:m,name:p}),a};return()=>e(M,null,[e("div",{class:"relative -mt-12 flex w-full grow flex-col"},[e("div",{dir:"ltr","data-orientation":"horizontal",class:"flex flex-row sticky top-16 z-[1] -ml-4 -mt-8 w-[calc(100%+2rem)] h-[42px] items-center bg-white/80 backdrop-blur dark:bg-zinc-900/80 border-b-[0.5px] border-zinc-200 dark:border-neutral-900"},[e("h1",{class:"w-[50px] center flex mr-4 ml-4 font-bold text-[16px]"},[c("文件")]),e(y,{size:"medium",animated:!0,class:"ml-4 files-tab","tab-class":"!text-sm",value:t.value,onUpdateValue:a=>{t.value=a}},{default:()=>[e(d,{tab:"图标",name:"icon",class:"!p-0"},null),e(d,{tab:"头像",name:"avatar",class:"!p-0"},null),e(d,{tab:"文件",name:"file",class:"!p-0"},null)]})]),e("div",{class:"flex mt-16"},[e(w,{loading:n.value,data:s,columns:[{key:"name",title:"文件名",width:300,ellipsis:{lineClamp:1,tooltip:!0}},{key:"url",title:"URL",render(a){return e(F,{placement:"bottom",class:"max-w-[400px]"},{trigger(){return e("a",{href:a.url,target:"_blank"},[a.url])},default(){return e(v,{bordered:!0},{default:()=>[e(k,{src:a.url},null)]})}})}},{key:"action",title:"操作",width:150,render(a){return e(z,null,{default:()=>[e(E,{onPositiveClick:()=>{i.api.files(t.value)(a.name).delete().then(()=>{message.success("删除成功"),s.value=s.value.filter(l=>l.name!==a.name)})}},{trigger(){return e(B,{quaternary:!0,type:"error",size:"tiny"},{default:()=>[c("删除")]})},default(){return`确定要删除 ${a.name} 吗？`}})]})}}]},null),e(T,{closable:!0,closeOnEsc:!0,onClose:()=>{r.value=!1},show:r.value,onUpdateShow:a=>{r.value=a}},{default:()=>[e(v,{title:"文件上传",class:"modal-card sm flex justify-center",closable:!0,onClose:()=>{r.value=!1}},{default:()=>[e(P,{class:"flex w-full flex-col items-center",headers:{authorization:U()||""},action:`${i.endpoint}/files/upload?type=${t.value}`,"directory-dnd":!0,multiple:!0,onBeforeUpload:g,onFinish:x,onError:a=>{const l=a.event?.target;if(a.file.status="error",!l)return message.warning("网络异常"),a.file;const{message:o}=JSON.parse(l.responseText);return message.warning(o),a.file}},{default:()=>[e(R,{class:"m-auto flex w-full flex-col items-center justify-center py-28"},{default:()=>[e(C,{size:"48",depth:"3"},{default:()=>[e(A,null,null)]}),e(O,{class:"mt-2"},{default:()=>[c("点击或者拖动文件到该区域来上传")]})]})]})]})]})])]),e(S,{className:"space-x-2"},{default:()=>[e(I,{name:"上传",className:"size-[28px] bg-[#f0a020]",icon:e("i",{class:"icon-[mingcute--upload-2-line] size-4"},null),onClick:()=>{r.value=!0}},null)]})])}});export{L as default};