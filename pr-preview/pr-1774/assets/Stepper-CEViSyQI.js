import{b2 as t,b3 as r,bq as s,__tla as o}from"./index-UYvjg97P.js";let i,p=Promise.all([(()=>{try{return o}catch{}})()]).then(async()=>{i=({steps:a,setActiveStepKey:n,completedSteps:l})=>{const c=e=>{l!=null&&l.includes(e)&&n(e)};return t.jsx(r,{display:"flex",gap:"spacing-lg",children:a.map((e,d)=>t.jsxs(r,{display:"flex",flexDirection:"column",gap:"spacing-xs",width:"180px",cursor:"pointer",onClick:()=>c(e.value),children:[t.jsx(s,{textAlign:"center",color:l.includes(e.value)?"text-brand-medium":"text-tertiary",variant:"h5-semibold",display:{ml:"none",dp:"block"},children:e.label}),t.jsx(s,{textAlign:"center",variant:"h6-semibold",display:{ml:"block",dp:"none"},children:e.label}),t.jsx(r,{height:"4px",borderRadius:"radius-xxs",backgroundColor:l.includes(e.value)?"surface-brand-medium":"surface-tertiary"})]},d))})}});export{i as S,p as __tla};
