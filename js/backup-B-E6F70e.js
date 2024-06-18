import{d as w,X as F,ax as D,e as a,O as B,F as u,m as f,dy as E,aw as T,n as C,g as n,aq as A,aZ as N,i as R,B as d,j as y,R as o,di as b}from"./index-DrqTzKeg.js";const I=w(()=>{const{checkedRowKeys:c,data:i,fetchDataFn:p,loading:g}=F(e=>async()=>{const s=(await o.api.backups.get()).data;s.sort((l,r)=>r.filename.localeCompare(l.filename)),e.value=s});D(()=>{p()});const x=async()=>{const e=message.info("备份中",{duration:1e9,closable:!0}),t=await o.api.backups.new.get({responseType:"blob",timeout:1e9});e.destroy(),message.success("备份完成"),b(t,"backup.zip")},k=async()=>{const e=document.createElement("input");e.type="file",e.style.cssText="position: absolute; opacity: 0; z-index: -9999;top: 0; left: 0",e.accept=".zip",document.body.append(e),e.click(),e.addEventListener("change",()=>{const t=e.files[0],s=new FormData;s.append("file",t),o.api.backups.rollback.post({data:s,timeout:1<<30}).then(()=>{message.success("恢复成功，页面将会重载"),setTimeout(()=>{location.reload()},1e3)})})},m=async e=>{let t="";if(Array.isArray(e)?t=e.join(","):t=e,await o.api.backups.delete({data:{files:t}}),message.success("删除成功"),Array.isArray(e))e.forEach(s=>{const l=i.value.findIndex(r=>r.filename===s);l!=-1&&i.value.splice(l,1)});else{const s=i.value.findIndex(l=>l.filename===e);s!=-1&&i.value.splice(s,1)}},h=async e=>{await o.api.backups.rollback(e).patch({}),message.info("回滚中",{closable:!0,duration:1e9})},v=async e=>{const t=message.info("下载中",{duration:1e9,closable:!0}),s=await o.api.backups(e).get({responseType:"blob",timeout:1e9});t.destroy(),message.success("下载完成"),b(s,`${e}.zip`)};return()=>a(u,null,[a(B,{className:"space-x-2"},{default:()=>[a(u,null,[a(f,{icon:a(E,null,null),className:"bg-accent",name:"立即备份",variant:"primary",onClick:x},null),a(f,{icon:a("i",{class:"icon-[mingcute--unarchive-line]"},null),className:"bg-[rgba(87,148,242)]",onClick:k,name:"上传恢复",variant:"info"},null),a(T,{checkedRowKeys:c.value,onDelete:async()=>{m(c.value)},customIcon:a("i",{class:"icon-[mingcute--wastebasket-line]"},null),customButtonTip:"批量删除"},null)])]}),a("div",{class:"relative -mt-12 flex w-full grow flex-col"},[a("div",{class:"mt-[5rem] p-12 pt-[6px]"},[a(C,{class:"rounded-md border border-solid border-border","content-style":"padding: 0;"},{header(){return a(u,null,[a("div",{class:"flex flex-col mb-4 select-none"},[a("h1",{class:"flex items-center text-[1.73rem]"},[n("备份")]),a("h2",{class:"opacity-80 text-sm inline-flex"},[n("维护 · 备份")])])])},default(){return a(u,null,[a(A,N({data:i,fetchDataFn:p},{checkedRowKey:"filename",loading:g.value,nTableProps:{maxHeight:"calc(100vh - 17rem)"},onUpdateCheckedRowKeys:e=>{c.value=e},maxWidth:500,columns:[{type:"selection",options:["none","all"]},{title:"日期",key:"filename",width:300},{title:"大小",key:"size",width:200},{title:"操作",fixed:"right",width:200,key:"filename",render(e){const t=e.filename;return a(R,{inline:!0},{default:()=>[a(d,{quaternary:!0,size:"tiny",type:"primary",onClick:()=>void v(t)},{default:()=>[n("下载")]}),a(y,{positiveText:"取消",negativeText:"回退",onNegativeClick:()=>{h(t)}},{trigger:()=>a(d,{quaternary:!0,size:"tiny",type:"warning"},{default:()=>[n("回退")]}),default:()=>a("span",{class:"max-w-48"},[n("确定要回退？")])}),a(y,{positiveText:"取消",negativeText:"删除",onNegativeClick:()=>{m(t)}},{trigger:()=>a(d,{quaternary:!0,size:"tiny",type:"error"},{default:()=>[n("移除")]}),default:()=>a("span",{class:"max-w-48"},[n("确定要删除？")])})]})}}],noPagination:!0}),null)])}})])])])});export{I as default};
