import{d,e as f,aZ as u,at as c,R as l}from"./index-DrqTzKeg.js";import{a as r}from"./Upload-BL3i3YtU.js";const m=d({props:{onFinish:{type:Function},onError:{type:Function},type:{type:String,required:!0}},setup(t,{slots:o}){return()=>{const{onFinish:n,onError:a,type:s,...p}=t;return f(r,u({headers:{authorization:c()||""},showFileList:!1,accept:"image/*",action:`${l.endpoint}/files/upload?type=${s}`,onError:a||(e=>(message.error("上传失败"),e.file)),onFinish:n},Object.fromEntries(Object.entries(p).filter(([e,i])=>typeof i<"u"))),{default:()=>[o.default?.()]})}}});m.props=[...Array.from(Object.keys(r.props)),"type"];export{m as U};