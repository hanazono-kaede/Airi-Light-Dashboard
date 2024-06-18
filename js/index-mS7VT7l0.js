import{d as i,e,g as a,B as o,R as s,dL as n,dM as u}from"./index-DrqTzKeg.js";const d=i({setup(){return()=>e("div",{class:"flex center md:flex-row place-content-stretch box-border w-full gap-6 h-[calc(100vh-240px)] flex-col"},[e("div",{class:"flex flex-col w-[384px] gap-6",style:{placeContent:"stretch flex-start"}},[e("div",{class:"relative flex h-[128px] w-[384px] flex-col rounded-md bg-white px-4 py-5 duration-200 card-shadow dark:bg-neutral-950 dark:hover:ring-1 dark:hover:ring-zinc-300"},[e("div",{class:"flex grow flex-col"},[e("div",{class:"line-clamp-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100"},[e("span",{class:"text-blue-400"},[a("[Debug]")])," ",a("通行密钥（Passkey） 注册")]),e("div",{class:"mt-2 h-0 grow overflow-hidden text-sm text-neutral-500 scrollbar-none dark:text-neutral-400 mask-b"},[a("调用通行密钥注册程序")]),e("div",{class:"mt-2 text-sm text-neutral-500 dark:text-neutral-400"},[e(o,{class:"w-full",onClick:async()=>{const l=await s.api.passkey.register.post();let r;try{r=await n(l)}catch(t){t.name==="InvalidStateError"?message.error("Error: Authenticator was probably already registered by user"):message.error(t.message)}try{Object.assign(r,{name:`test-1${Math.random()*100|0}`}),(await s.api.passkey.register.verify.post({data:r})).verified?message.success("Successfully registered authenticator"):message.error("Error: Could not verify authenticator")}catch{message.error("Error: Could not verify authenticator")}}},{default:()=>[a("Register")]})])])])]),e("div",{class:"flex flex-col w-[384px] gap-6",style:{placeContent:"stretch flex-start"}},[e("div",{class:"relative flex h-[128px] w-[384px] flex-col rounded-md bg-white px-4 py-5 duration-200 card-shadow dark:bg-neutral-950 dark:hover:ring-1 dark:hover:ring-zinc-300"},[e("div",{class:"flex grow flex-col"},[e("div",{class:"line-clamp-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100"},[e("span",{class:"text-blue-400"},[a("[Debug]")])," ",a("通行密钥（Passkey） 验证")]),e("div",{class:"mt-2 h-0 grow overflow-hidden text-sm text-neutral-500 scrollbar-none dark:text-neutral-400 mask-b"},[a("调用通行密钥验证程序")]),e("div",{class:"mt-2 text-sm text-neutral-500 dark:text-neutral-400"},[e(o,{class:"w-full",onClick:async()=>{const l=await s.api.passkey.authentication.post();let r;try{r=await u(l)}catch(t){message.error(t.message)}try{(await s.api.passkey.authentication.verify.post({data:r})).verified?message.success("Successfully registered authenticator"):message.error("Error: Could not verify authenticator")}catch(t){message.error(t.message)}}},{default:()=>[a("Authenticator")]})])])])])])}});export{d as default};
