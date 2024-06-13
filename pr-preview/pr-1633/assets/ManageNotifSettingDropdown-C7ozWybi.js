import{ad as u,b7 as T,aY as xe,ak as f,dc as fe,ao as n,aj as se,aZ as oe,b2 as re,aA as A,bo as be,b1 as ae,ai as ie,b3 as j,d3 as we,au as le,av as ce,bC as P,d5 as Se,bc as de,bd as O,bD as pe,cK as me,cT as ye,fN as je,__tla as ve}from"./index-DGS2C2HC.js";import{I as Ce,R as Me,__tla as Te}from"./RangeSlider-8DwRus_R.js";let k,ue,he,ge,$,De=Promise.all([(()=>{try{return ve}catch{}})(),(()=>{try{return Te}catch{}})()]).then(async()=>{let B,W,D,V,w,z,F,H,U,N,K,Y,J,X,Z,q,I,G,Q,ee,te,_,ne;k=({children:t,renderDropdownContainer:r,showDropdown:s,toggleDropdown:a,closeDropdown:o,containerPadding:h,centerOnMobile:i})=>{const d=f.useRef(null),p=f.useRef(null);return fe(d,p,o),n.jsxs(B,{ref:d,onClick:a,children:[t,s&&n.jsx(W,{containerPadding:h,centerOnMobile:i,children:n.jsx("div",{ref:p,onClick:e=>e.stopPropagation(),children:r})})]})},B=u.span`
  position: relative;
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
`,W=u(xe)`
  background: ${t=>t.theme.settingsModalBackground};
  border: 1px solid;
  border-color: ${t=>t.theme.settingsModalBorderColor};
  border-radius: 8px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
  align-items: flex-start;
  padding: ${t=>t.containerPadding?t.containerPadding:"7px 14px"};
  position: absolute;
  top: 0rem;
  z-index: 10;
  right: -0.5rem;

  @media (max-width: 768px) {
    ${t=>t.centerOnMobile&&T`
        left: 50%;
        transform: translateX(-50%);
      `}
    width: fit-content;
  }
`,D=t=>t.type===1,ge=({settings:t})=>{let r=[];return t&&t.forEach(s=>D(s)?r.push({enabled:s.default}):r.push({value:s.default,enabled:s.enabled})),r},V=({settings:t})=>{let r=[];return t&&t.forEach(s=>D(s)?r.push({enabled:s.user}):r.push({value:s.user,enabled:s.enabled})),r},$=({channelSetting:t})=>{let r=[];return t&&t.forEach(s=>D(s)?r.push({...s,user:s.default}):r.push({...s,user:s.default})),r},w="-",z="+",F=3,H=2,U=1,he=t=>{if(!t)return null;let r=0;const s=t.reduce((a,o,h)=>{var d,p;const i=o.enabled?1:0;return o.enabled&&r++,Object.keys(o).includes("value")?typeof o.value=="number"?a=a+H+w+i+w+o.value:a=a+F+w+i+w+((d=o.value)==null?void 0:d.lower)+w+((p=o.value)==null?void 0:p.upper):a=a+U+w+i,h!==t.length-1&&(a=a+z),a},"");return r+z+s},N=({settings:t,saveUserSettingHandler:r})=>{const[s,a]=f.useState([...t]),[o,h]=f.useState(!1),i=ie(),d=(e,l)=>{const c=[...s];c[e].user=l,a(c)},p=e=>{const l=[...s];if(l[e].type===1){const c=l[e];c.user=!c.user}else if(l[e].type===2){const c=l[e];c.enabled=!c.enabled}else{const c=l[e];c.enabled=!c.enabled}a(l)};return n.jsxs(Y,{children:[s.map((e,l)=>n.jsxs(J,{hasBottomBorder:l!==t.length-1,children:[n.jsxs(X,{children:[n.jsx(j,{color:i.settingsModalPrimaryTextColor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:e.description}),n.jsx(we,{onChange:()=>p(l),checked:e.type===1?e.user:e.enabled,checkedIcon:!1,uncheckedIcon:!1,onColor:"#D53A94",offColor:"#A0A3B1",height:16,width:32,handleDiameter:12})]}),e.type===2&&e.enabled===!0&&n.jsxs(I,{children:[n.jsx(j,{color:i.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:e.user||e.default}),n.jsx(Ce,{val:e.user,max:e.upperLimit,min:e.lowerLimit,step:e.ticker||1,defaultVal:e.default,onChange:({x:c})=>d(l,c)})]}),e.type===3&&e.enabled===!0&&n.jsxs(I,{children:[n.jsxs(j,{color:i.fontColor,fontSize:"18px",fontWeight:"600",alignSelf:"flex-start",children:[e.user.lower||e.default.lower," - ",e.user.upper||e.default.upper]}),n.jsx(Me,{startVal:e.user.lower||e.default.lower,endVal:e.user.upper||e.default.upper,max:e.upperLimit,min:e.lowerLimit,step:e.ticker||1,defaultStartVal:e.default.lower,defaultEndVal:e.default.upper,onChange:({startVal:c,endVal:v})=>d(l,{lower:c,upper:v})})]})]},l)),n.jsxs(Z,{children:[n.jsx(j,{color:i.textcolor,fontSize:"15px",fontWeight:"500",textAlign:"left",children:"You will receive all important updates from this channel."}),n.jsxs(q,{onClick:()=>r({userSettings:s,setLoading:h}),children:[o&&n.jsx(le,{type:ce.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!o&&n.jsx(G,{hideIt:o,children:"Save"})]})]})]})},K=({children:t,centerOnMobile:r,channelDetail:s,channelSetting:a,userSetting:o,onSuccessSave:h})=>{const[i,d]=f.useState(!1),{chainId:p}=se(),{userPushSDKInstance:e}=oe(S=>S.user),l=re(),c=p===A.coreContractChain,v=()=>{d(!i)},m=()=>{d(!1)},{handleConnectWallet:R}=f.useContext(be),x=ae(),L=async({userSettings:S,setLoading:E})=>{const g=E||(()=>{}),C=h||(()=>{});g(!0);let b=e;if(!b.signer&&(b=await R(),!b)){g(!1);return}try{let y=s.channel;c||(y=s.alias_address),x.showLoaderToast({loaderMessage:"Waiting for Confirmation..."}),await b.notification.subscribe(P(y,p),{settings:V({settings:S}),onSuccess:()=>{C(),m(),l(Se({channelAddress:y,settings:o})),x.showMessageToast({toastTitle:"Success",toastMessage:"Successfully saved the user settings!",toastType:"SUCCESS",getToastIcon:M=>n.jsx(de,{size:M,color:"green"})})},onError:()=>{console.error("opt in error"),x.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in saving the settings",toastType:"ERROR",getToastIcon:M=>n.jsx(O,{size:M,color:"red"})})}})}catch(y){x.showMessageToast({toastTitle:"Error",toastMessage:`There was an error in saving the settings ( ${y.message} )`,toastType:"ERROR",getToastIcon:M=>n.jsx(O,{size:M,color:"red"})}),console.error(y)}finally{g(!1)}};return n.jsx(k,{centerOnMobile:r,showDropdown:i,toggleDropdown:v,closeDropdown:m,renderDropdownContainer:n.jsx(N,{settings:o??$({channelSetting:a}),saveUserSettingHandler:L}),containerPadding:"0px 16px 16px 16px",children:t})},Y=u.div`
  min-width: 300px;
`,J=u.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;

  ${t=>t.hasBottomBorder&&T`
      border-bottom: 1px solid ${r=>r.theme.settingsModalBorderBottomColor};
    `}
`,X=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,Z=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`,q=u.button`
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  min-width: 90px;
  justify-content: center;
  margin: 0px 0px 0px 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  background: #e20880;
  border-radius: 8px;
  padding: 9px 20px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    pointer: hand;
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    pointer: hand;
  }
  ${t=>t.disabled&&T`
      &:hover {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
      &:active {
        opacity: 1;
        cursor: default;
        pointer: default;
      }
    `}
`,I=u.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: center;
  padding-bottom: 12px;
`,G=u.span`
  ${t=>t.hideIt&&T`
      visibility: hidden;
    `};
`,Q=({centerOnMobile:t,optOutHandler:r,channelSetting:s,channelDetail:a,userSetting:o,closeDropdown:h})=>{const[i,d]=f.useState(!1),p=ie();return n.jsxs(ee,{children:[s&&s.length!=0&&n.jsx(te,{children:n.jsx(K,{centerOnMobile:t,channelDetail:a,userSetting:o,channelSetting:s,onSuccessSave:h,children:n.jsxs(_,{flexDirection:"row",children:[n.jsx(pe,{width:"20px",height:"20px",src:"svg/manageSettings.svg",alt:"Settings Logo"}),n.jsx(j,{color:p.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:"Manage Settings"})]})})}),n.jsxs(_,{flexDirection:"row",onClick:()=>r({setLoading:d}),children:[n.jsx(pe,{width:"20px",height:"20px",src:"svg/optout.svg",alt:"Opt-out Logo"}),n.jsxs(j,{color:p.viewChannelPrimaryText,fontWeight:500,fontSize:"14px",children:[i&&n.jsx(le,{type:ce.SEAMLESS,spinnerSize:16,spinnerColor:"#FFF"}),!i&&n.jsx(ne,{hideIt:i,children:"Opt-out"})]})]})]})},ue=t=>{const{children:r,centerOnMobile:s,userSetting:a,channelDetail:o}=t,[h,i]=f.useState(!1),{chainId:d,provider:p,account:e}=se();oe(S=>S.user);const l=re(),c=f.useMemo(()=>o&&(o!=null&&o.channel_settings)?JSON.parse(o==null?void 0:o.channel_settings):null,[o]),v=()=>{i(!h)},m=()=>{i(!1)},R=d===A.coreContractChain,x=ae(),L=async({setLoading:S})=>{const E=S||(()=>{});E(!0);try{let g=o.channel;R||(g=o.alias_address),x.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const C=await p.getSigner(e);await me.channels.unsubscribe({signer:C,channelAddress:P(g,d),userAddress:P(e,d),onSuccess:()=>{l(ye({channelAddress:g,status:!1})),l(je(g)),x.showMessageToast({toastTitle:"Success",toastMessage:"Successfully opted out of channel !",toastType:"SUCCESS",getToastIcon:b=>n.jsx(de,{size:b,color:"green"})}),m()},onError:()=>{console.error("opt out error"),x.showMessageToast({toastTitle:"Error",toastMessage:"There was an error opting out of channel",toastType:"ERROR",getToastIcon:b=>n.jsx(O,{size:b,color:"red"})})},env:A.pushNodesEnv})}catch(g){x.showMessageToast({toastTitle:"Error",toastMessage:`There was an error opting into channel ( ${g.message} )`,toastType:"ERROR",getToastIcon:C=>n.jsx(O,{size:C,color:"red"})}),console.error(g)}finally{E(!1)}};return n.jsx(k,{showDropdown:h,toggleDropdown:v,closeDropdown:m,renderDropdownContainer:n.jsx(Q,{centerOnMobile:s,userSetting:a,channelSetting:c,channelDetail:o,optOutHandler:L,closeDropdown:m}),containerPadding:"12px 16px",centerOnMobile:s,children:r})},ee=u.div`
  min-width: max-content;
  gap: 16px;
  display: flex;
  flex-direction: column;
`,te=u.div`
  display: flex;
  flex-direction: column;
`,_=u.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  cursor: pointer;
  gap: 8px;
`,ne=u.span`
  ${t=>t.hideIt&&T`
      visibility: hidden;
    `};
`});export{k as D,ue as M,De as __tla,he as g,ge as n,$ as u};
