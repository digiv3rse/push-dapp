import{e5 as m,e6 as u,e7 as _,m as t,B as r,e8 as c,e9 as x,__tla as p}from"./index-D-D_A1lM.js";import{C as g,__tla as f}from"./ContentLayout-C1G5oqpT.js";import{u as y,D as j,__tla as w}from"./useDiscordSession-Ctr9Lfo8.js";let h,b=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return w}catch{}})()]).then(async()=>{let s,l,n,i;s=e=>e,l=e=>m({method:"GET",url:"https://discord.com/api/users/@me",headers:{Authorization:`Bearer ${e}`}}).then(a=>s(a.data)),n=e=>u({queryKey:[_,e],queryFn:()=>l(e),enabled:!!e}),i=()=>{const e=new URLSearchParams(location.hash.substring(1)).get("access_token");y();const a=localStorage.getItem("access_token"),{data:o}=n(a),d=()=>{o&&(localStorage.setItem("username",o.username),window.close())};return e||window.close(),t.jsx(r,{display:"flex",alignItems:"center",height:"calc(100vh - 140px)",children:t.jsxs(r,{display:"flex",padding:"s6",flexDirection:"column",alignItems:"center",width:"360px",gap:"s3",backgroundColor:"white",borderRadius:"r6",children:[t.jsx(j,{width:48,height:48}),t.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"center",children:[t.jsx(c,{variant:"h4-semibold",children:"Complete Verification"}),t.jsx(c,{variant:"bs-regular",color:"gray-500",children:"Continue to complete the verification process."})]}),t.jsx(x,{onClick:d,children:"Continue"})]})})},h=()=>t.jsx(g,{children:t.jsx(i,{})})});export{b as __tla,h as default};
