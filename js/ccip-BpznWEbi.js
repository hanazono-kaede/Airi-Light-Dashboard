import{B as l,g as m,s as y,d as w,i as k,c as O,a as E,e as L,H as h,b as x}from"./class-BqrVPh8M.js";import"./index-DrqTzKeg.js";import"./last-DXTTfs9a.js";import"./confetti-D3WRURFJ.js";class R extends l{constructor({callbackSelector:a,cause:e,data:o,extraData:n,sender:c,urls:r}){super(e.shortMessage||"An error occurred while fetching for an offchain result.",{cause:e,metaMessages:[...e.metaMessages||[],e.metaMessages?.length?"":[],"Offchain Gateway Call:",r&&["  Gateway URL(s):",...r.map(u=>`    ${m(u)}`)],`  Sender: ${c}`,`  Data: ${o}`,`  Callback selector: ${a}`,`  Extra data: ${n}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class M extends l{constructor({result:a,url:e}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${m(e)}`,`Response: ${y(a)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class $ extends l{constructor({sender:a,to:e}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${e}`,`OffchainLookup sender address: ${a}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}const D="0x556f1830",S={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function T(i,{blockNumber:a,blockTag:e,data:o,to:n}){const{args:c}=w({data:o,abi:[S]}),[r,u,t,s,p]=c,{ccipRead:d}=i,b=d&&typeof d?.request=="function"?d.request:q;try{if(!k(n,r))throw new $({sender:r,to:n});const f=await b({data:t,sender:r,urls:u}),{data:g}=await O(i,{blockNumber:a,blockTag:e,data:E([s,L([{type:"bytes"},{type:"bytes"}],[f,p])]),to:n});return g}catch(f){throw new R({callbackSelector:s,cause:f,data:o,extraData:p,sender:r,urls:u})}}async function q({data:i,sender:a,urls:e}){let o=new Error("An unknown error occurred.");for(let n=0;n<e.length;n++){const c=e[n],r=c.includes("{data}")?"GET":"POST",u=r==="POST"?{data:i,sender:a}:void 0;try{const t=await fetch(c.replace("{sender}",a).replace("{data}",i),{body:JSON.stringify(u),method:r});let s;if(t.headers.get("Content-Type")?.startsWith("application/json")?s=(await t.json()).data:s=await t.text(),!t.ok){o=new h({body:u,details:s?.error?y(s.error):t.statusText,headers:t.headers,status:t.status,url:c});continue}if(!x(s)){o=new M({result:s,url:c});continue}return s}catch(t){o=new h({body:u,details:t.message,url:c})}}throw o}export{q as ccipRequest,T as offchainLookup,S as offchainLookupAbiItem,D as offchainLookupSignature};
