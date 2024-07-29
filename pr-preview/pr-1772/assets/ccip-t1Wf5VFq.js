import{cg as f,ch as b,ci as m,cj as y,ck as w,cl as v,cm as C,cn as E,co as R,cp as g,cq as T,__tla as _}from"./index-B2qLHJvX.js";let h,k,p,O,j=Promise.all([(()=>{try{return _}catch{}})()]).then(async()=>{class x extends f{constructor({callbackSelector:e,cause:a,data:o,extraData:c,sender:d,urls:t}){var l;super(a.shortMessage||"An error occurred while fetching for an offchain result.",{cause:a,metaMessages:[...a.metaMessages||[],(l=a.metaMessages)!=null&&l.length?"":[],"Offchain Gateway Call:",t&&["  Gateway URL(s):",...t.map(i=>`    ${b(i)}`)],`  Sender: ${d}`,`  Data: ${o}`,`  Callback selector: ${e}`,`  Extra data: ${c}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class L extends f{constructor({result:e,url:a}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${b(a)}`,`Response: ${m(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class $ extends f{constructor({sender:e,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}function M(n,e){if(!y(n))throw new w({address:n});if(!y(e))throw new w({address:e});return n.toLowerCase()===e.toLowerCase()}O="0x556f1830",p={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]},k=async function(n,{blockNumber:e,blockTag:a,data:o,to:c}){const{args:d}=v({data:o,abi:[p]}),[t,l,i,s,r]=d;try{if(!M(c,t))throw new $({sender:t,to:c});const u=await h({data:i,sender:t,urls:l}),{data:S}=await C(n,{blockNumber:e,blockTag:a,data:E([s,R([{type:"bytes"},{type:"bytes"}],[u,r])]),to:c});return S}catch(u){throw new x({callbackSelector:s,cause:u,data:o,extraData:r,sender:t,urls:l})}},h=async function({data:n,sender:e,urls:a}){var c;let o=new Error("An unknown error occurred.");for(let d=0;d<a.length;d++){const t=a[d],l=t.includes("{data}")?"GET":"POST",i=l==="POST"?{data:n,sender:e}:void 0;try{const s=await fetch(t.replace("{sender}",e).replace("{data}",n),{body:JSON.stringify(i),method:l});let r;if((c=s.headers.get("Content-Type"))!=null&&c.startsWith("application/json")?r=(await s.json()).data:r=await s.text(),!s.ok){o=new g({body:i,details:r!=null&&r.error?m(r.error):s.statusText,headers:s.headers,status:s.status,url:t});continue}if(!T(r)){o=new L({result:r,url:t});continue}return r}catch(s){o=new g({body:i,details:s.message,url:t})}}throw o}});export{j as __tla,h as ccipFetch,k as offchainLookup,p as offchainLookupAbiItem,O as offchainLookupSignature};
