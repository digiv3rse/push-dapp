import{dJ as f,dK as b,dL as m,dM as y,dN as w,dO as R,dP as T,dQ as v,dR as C,dS as g,dT as E,__tla as P}from"./index-DcZ2A60_.js";let h,k,p,O,_=Promise.all([(()=>{try{return P}catch{}})()]).then(async()=>{class L extends f{constructor({callbackSelector:e,cause:a,data:o,extraData:c,sender:l,urls:t}){var d;super(a.shortMessage||"An error occurred while fetching for an offchain result.",{cause:a,metaMessages:[...a.metaMessages||[],(d=a.metaMessages)!=null&&d.length?"":[],"Offchain Gateway Call:",t&&["  Gateway URL(s):",...t.map(u=>`    ${b(u)}`)],`  Sender: ${l}`,`  Data: ${o}`,`  Callback selector: ${e}`,`  Extra data: ${c}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class x extends f{constructor({result:e,url:a}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${b(a)}`,`Response: ${m(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class M extends f{constructor({sender:e,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}function S(n,e){if(!y(n))throw new w({address:n});if(!y(e))throw new w({address:e});return n.toLowerCase()===e.toLowerCase()}O="0x556f1830",p={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]},k=async function(n,{blockNumber:e,blockTag:a,data:o,to:c}){const{args:l}=R({data:o,abi:[p]}),[t,d,u,s,r]=l;try{if(!S(c,t))throw new M({sender:t,to:c});const i=await h({data:u,sender:t,urls:d}),{data:$}=await T(n,{blockNumber:e,blockTag:a,data:v([s,C([{type:"bytes"},{type:"bytes"}],[i,r])]),to:c});return $}catch(i){throw new L({callbackSelector:s,cause:i,data:o,extraData:r,sender:t,urls:d})}},h=async function({data:n,sender:e,urls:a}){var c;let o=new Error("An unknown error occurred.");for(let l=0;l<a.length;l++){const t=a[l],d=t.includes("{data}")?"GET":"POST",u=d==="POST"?{data:n,sender:e}:void 0;try{const s=await fetch(t.replace("{sender}",e).replace("{data}",n),{body:JSON.stringify(u),method:d});let r;if((c=s.headers.get("Content-Type"))!=null&&c.startsWith("application/json")?r=(await s.json()).data:r=await s.text(),!s.ok){o=new g({body:u,details:r!=null&&r.error?m(r.error):s.statusText,headers:s.headers,status:s.status,url:t});continue}if(!E(r)){o=new x({result:r,url:t});continue}return r}catch(s){o=new g({body:u,details:s.message,url:t})}}throw o}});export{_ as __tla,h as ccipFetch,k as offchainLookup,p as offchainLookupAbiItem,O as offchainLookupSignature};
