import{G as Ge,q as m,m as e,d0 as A,eQ as Je,dk as se,r as d,X as Fe,du as Ve,df as qe,eR as E,d1 as He,eS as Ke,eT as We,d3 as le,eu as de,dp as Ze,x as ce,es as pe,dZ as ue,dA as Xe,c_ as S,dB as Qe,eJ as xe,ev as q,z as he,dd as Y,dc as Ye,eh as et,dw as tt,da as rt,dx as it,eU as nt,c$ as O,d2 as at,R as me,n as ot,S as st,__tla as lt}from"./index-mlEuGbHv.js";import{__tla as dt}from"./Tag-DUeTRhx2.js";import{I as ct,__tla as pt}from"./index.esm-BPGxzlLx.js";import{M as ut,S as xt,F as ht,C as mt,a as gt,__tla as ft}from"./ChannelInfoList-BYF1MWvq.js";import{I as bt,__tla as St}from"./SendNotifications-DkG_AcuC.js";import{A as yt,__tla as wt}from"./EmptyNotificationSettings-DlK0ysdn.js";import{g as Nt,m as Tt,a as jt,__tla as Et}from"./UniswapWidget-lh0kHGJ7.js";import{__tla as Ct}from"./TransitionGroupContext-Cw4_aSLc.js";import{__tla as vt}from"./index-D_IPwkph.js";import{__tla as _t}from"./slicedToArray-B66lTA9Z.js";import{__tla as At}from"./index.esm-nxE-aNr6.js";import{__tla as Mt}from"./index.es-3VPqQJNg.js";import"./browser-CeceZ__e.js";let ge,Lt=Promise.all([(()=>{try{return lt}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return pt}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return St}catch{}})(),(()=>{try{return wt}catch{}})(),(()=>{try{return Et}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return vt}catch{}})(),(()=>{try{return _t}catch{}})(),(()=>{try{return At}catch{}})(),(()=>{try{return Mt}catch{}})()]).then(async()=>{function fe(t){return Ge({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"}}]})(t)}const v=t=>t.trim().length==0,be=({setErrorInfo:t,lowerLimit:g,upperLimit:f,type:y,settingName:i,defaultValue:p,sliderStep:w})=>{t(void 0);let c=!1;return v(i)&&(t(a=>({...a,settingName:"Setting Name is required"})),c=!0),(y===2||y===3)&&(v(g)&&(t(a=>({...a,lowerLimit:"Minimum range is required"})),c=!0),v(f)&&(t(a=>({...a,upperLimit:"Maximum range is required"})),c=!0),(typeof p=="string"?v(p):v(p.lower)||v(p.upper))&&(typeof p=="string"?t(a=>({...a,default:"Default value is required"})):(v(p.lower)&&t(a=>({...a,defaultStart:"Default start value is required"})),v(p.upper)&&t(a=>({...a,defaultEnd:"Default end value is required"}))),c=!0),v(w)&&(t(a=>({...a,sliderStep:"Slider step is required"})),c=!0),!v(g)&&!v(f)&&!v(w)&&(Number(g)<0&&(t(a=>({...a,lowerLimit:"Minimum range should be greater than 0"})),c=!0),Number(f)<0&&(t(a=>({...a,upperLimit:"Maximum range should be greater than 0"})),c=!0),Number(g)>Number(f)&&(t(a=>({...a,lowerLimit:"Minimum range should be less than maximum range"})),c=!0),typeof p=="string"?(Number(p)<Number(g)||Number(p)>Number(f))&&(t(a=>({...a,default:"Default value not in range"})),c=!0):((Number(p.lower)<Number(g)||Number(p.lower)>Number(f))&&(t(a=>({...a,defaultStart:"Default value not in range"})),c=!0),(Number(p.upper)<Number(g)||Number(p.upper)>Number(f)||Number(p.lower)>Number(p.upper))&&(t(a=>({...a,defaultEnd:"Default value not in range"})),c=!0)),Number(w)<=0&&(t(a=>({...a,sliderStep:"Slider step should be greater than 0"})),c=!0),Number(w)>Number(f)-Number(g)&&(t(a=>({...a,sliderStep:"Slider step should be less than range"})),c=!0))),!c},Se=({checked:t,onChange:g})=>e.jsx(ye,{id:"Checkbox-switch",type:"checkbox",checked:t,onChange:g}),ye=m.input`
  cursor: pointer;
  z-index: 1;
  border-radius: 15px;
  width: 16px;
  height: 20px;

  /* Change the color of the checkbox */
  &:checked {
    accent-color: #D53A94;
  }
`,ee=({checked:t,onChange:g,label:f,description:y})=>e.jsx(E,{margin:"12px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:e.jsxs(E,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsxs(E,{flex:"1",self:"stretch",justify:"space-between",align:"flex-start",children:[e.jsx(j,{children:f}),e.jsx(te,{children:y})]}),e.jsx(bt,{checked:t,onChange:g})]})}),we=({onConfirm:t,onClose:g,toastObject:f,InnerComponentProps:y})=>{const i=(y==null?void 0:y.settingToEdit)||void 0,[p,w]=d.useState(!1),[c,a]=d.useState(i?i.description:""),[M,N]=d.useState(i?i.type===1&&i.default||i.type===2&&i.enabled||i.type===3&&i.enabled:!0),[C,B]=d.useState(!!(i&&(i.type===2||i.type===3))),[u,k]=d.useState(i&&(i.type===2||i.type===3)?i.lowerLimit.toString():""),[x,L]=d.useState(i&&(i.type===2||i.type===3)?i.upperLimit.toString():""),[h,$]=d.useState(i&&(i.type===2||i.type===3)&&i.ticker?i.ticker.toString():"1"),[T,J]=d.useState(!!(i&&i.type===3)),[_,W]=d.useState(i&&i.type===2?i.default.toString():""),[P,U]=d.useState(i&&i.type===2?i.default:0),[I,F]=d.useState(i&&i.type===3?i.default.lower.toString():""),[D,Z]=d.useState(i&&i.type===3?i.default.upper.toString():""),[X,V]=d.useState(i&&i.type===3?i.default.lower:0),[Q,l]=d.useState(i&&i.type===3?i.default.upper:0),[n,r]=d.useState(),o=Fe(),ae=()=>!p&&g(),oe=d.useRef(null);Ve(oe,()=>ae());const Pe=s=>{if(s.preventDefault(),w(!0),be({setErrorInfo:r,defaultValue:T?{lower:I,upper:D}:_,settingName:c,lowerLimit:u,type:C?T?3:2:1,upperLimit:x,sliderStep:h})){const b=i?i.index:Math.floor(Math.random()*1e6),Oe=C?T?{type:3,default:{lower:Number(I),upper:Number(D)},enabled:M,description:c,index:b,lowerLimit:Number(u),upperLimit:Number(x),ticker:Number(h)}:{type:2,default:Number(_),enabled:M,description:c,index:b,lowerLimit:Number(u),upperLimit:Number(x),ticker:Number(h)}:{type:1,default:M,description:c,index:b};t(Oe),g()}w(!1)},z=s=>s!==""&&!/^[0-9]+(?:\.[0-9])?$/.test(s),ze=d.useMemo(()=>u!==""&&x!==""&&(T?I!==""&&D!=="":_!=="")&&h!==""&&Number(u)<=Number(x)&&Number(h)>0&&Number(h)<=Number(x)-Number(u)&&(T?Number(I)>=Number(u)&&Number(D)<=Number(x)&&Number(D)>Number(I):Number(_)>=Number(u)&&Number(_)<=Number(x)),[u,x,_,h,I,D,T]);return e.jsx(je,{ref:oe,children:e.jsxs(qe,{onSubmit:Pe,children:[e.jsx(Ne,{onClick:ae}),e.jsxs(Te,{children:[i?"Edit ":"Add a "," Setting"]}),e.jsxs(E,{margin:"32px 0px 12px 0px",flex:"1",self:"stretch",align:"stretch",children:[e.jsxs(E,{direction:"row",align:"center",flex:"1",self:"stretch",justify:"space-between",children:[e.jsx(j,{children:"Setting Name"}),e.jsx(He,{color:o.editChannelSecondaryText,size:"14px",margin:"0px 8px 0px 0px",weight:"500",children:50-c.length})]}),e.jsx(H,{maxlength:"50",padding:"13px 16px",weight:"400",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:c,onChange:s=>{a(s.target.value.slice(0,50)),r(b=>({...b,settingName:void 0}))},autocomplete:"off",hasError:!!(n!=null&&n.settingName)}),e.jsx(R,{children:n==null?void 0:n.settingName})]}),e.jsx(ee,{checked:M,onChange:()=>N(s=>!s),label:"Set as default",description:"Setting turned on for users by default"}),e.jsx(ee,{checked:C,onChange:()=>B(s=>!s),label:"Range",description:"Set a range for this setting e.g. 1-10"}),C&&e.jsxs(e.Fragment,{children:[e.jsxs(E,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Range Values"}),e.jsxs(E,{direction:"row",children:[e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 0",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:u,onChange:s=>{r(b=>({...b,lowerLimit:void 0})),!z(s.target.value)&&k(s.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.lowerLimit)}),e.jsx(j,{padding:"0px 16px",children:"to"}),e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 10",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:x,onChange:s=>{r(b=>({...b,upperLimit:void 0})),!z(s.target.value)&&L(s.target.value)},autocomplete:"off",hasError:!!(n!=null&&n.upperLimit)})]}),e.jsx(R,{children:n==null?void 0:n.lowerLimit}),e.jsx(R,{children:n==null?void 0:n.upperLimit})]}),e.jsxs(E,{direction:"row",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Se,{checked:T,onChange:()=>J(!T)}),e.jsxs(E,{align:"left",margin:"0px 0px 0px 4px",children:[e.jsx(j,{children:"Enable Multi Range Slider"}),e.jsx(te,{children:"User can select a range of values in the slider"})]})]}),!T&&e.jsxs(E,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Default Value"}),e.jsx(H,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:_,onChange:s=>{r(b=>({...b,default:void 0})),!z(s.target.value)&&(W(s.target.value),U(Number(s.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.default)}),e.jsx(R,{children:n==null?void 0:n.default})]}),T&&e.jsxs(E,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Default Values"}),e.jsxs(E,{direction:"row",children:[e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 5",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:I,onChange:s=>{r(b=>({...b,defaultStart:void 0})),!z(s.target.value)&&(F(s.target.value),V(Number(s.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultStart)}),e.jsx(j,{padding:"0px 16px",children:"to"}),e.jsx(G,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 8",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:D,onChange:s=>{r(b=>({...b,defaultEnd:void 0})),!z(s.target.value)&&(Z(s.target.value),l(Number(s.target.value)))},autocomplete:"off",hasError:!!(n!=null&&n.defaultEnd)})]}),e.jsx(R,{children:(n==null?void 0:n.defaultStart)||(n==null?void 0:n.defaultEnd)})]}),e.jsxs(E,{direction:"column",align:"stretch",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(j,{children:"Slider Step Value"}),e.jsx(H,{padding:"13px 16px",weight:"400",type:"number",placeholder:"e.g. 1",size:"15px",resize:"none",overflow:"hidden","line-height":"19.5px",margin:"8px 0px 0px 0px",border:o.textAreaBorderColor,focusBorder:o.textAreaFocusBorder,radius:"12px",bg:o.editChannelInputbg,color:o.editChannelPrimaryText,value:h,onChange:s=>{r(b=>({...b,sliderStep:void 0})),$(s.target.value),U(u===""?0:Number(u))},autocomplete:"off",hasError:!!(n!=null&&n.sliderStep)}),e.jsx(R,{children:n==null?void 0:n.sliderStep})]}),ze&&e.jsxs(E,{direction:"column",align:"flex-start",flex:"1",self:"stretch",margin:"12px 0px",children:[e.jsx(Ee,{children:"Preview"}),!T&&e.jsxs(re,{children:[e.jsx(j,{children:u}),e.jsx(Ke,{val:P,min:Number(u),max:Number(x),step:Number(h),defaultVal:Number(_),onChange:({x:s})=>U(s),preview:!0}),e.jsx(j,{children:x})]}),T&&e.jsxs(re,{children:[e.jsx(j,{children:u}),e.jsx(We,{startVal:X,endVal:Q,min:Number(u),max:Number(x),step:Number(h),defaultStartVal:Number(I),defaultEndVal:Number(D),onChange:({startVal:s,endVal:b})=>{V(s),l(b)},preview:!0}),e.jsx(j,{children:x})]})]})]}),e.jsx(ut,{text:"Save Setting",isLoading:p,topMargin:"20px",padding:"14.5px 26.5px"})]})})},Ne=m(Je)`
  align-self: flex-end;
  color: ${t=>t.theme.default.secondaryColor};
  font-size: 20px;
  cursor: pointer;
`,Te=m.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: normal;
  text-align: center;
  color: ${t=>t.theme.default.color};
`,je=m.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: 6% 1%;
  background: ${t=>t.theme.modalContentBackground};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media (${A.laptop}) {
    width: 50vw;
  }
  @media (${A.mobileL}) {
    width: 95vw;
  }
`,j=m.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: normal;
  color: ${t=>t.theme.default.color};
  padding: ${t=>t.padding||"0px"};
`,Ee=m(j)`
  color: ${t=>t.theme.default.secondaryColor};
`,te=m.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.default.secondaryColor};
`,G=m(se)`
  max-width: 108px;
  flex: 1;
  border: ${t=>t.hasError?`1px solid ${t.theme.nfsError}`:`1px solid ${t.theme.default.borderColor}`};
`,H=m(se)`
  flex: 1;
  border: ${t=>t.hasError?`1px solid ${t.theme.nfsError}`:`1px solid ${t.theme.default.borderColor}`};
`,R=m.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: normal;
  text-align: left;
  color: ${t=>t.theme.nfsError};
  margin-top: 4px;
`,re=m.div`
  display: flex;
  padding: 12px;
  gap: 16px;
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: ${t=>t.theme.nfsTickerPreviewBg};
`,Ce=({title:t,description:g,onCancel:f,disabled:y,onClick:i,feeRequired:p})=>{const{account:w,provider:c}=ce(),[a,M]=d.useState(0),[N,C]=d.useState(!1),[B,u]=d.useState(!1),k=pe();d.useEffect(()=>{!w||!c||async function(){const L=await Nt({address:w,provider:c,contractAddress:ue.epnscore});M(parseInt(L));const h=parseInt(L);h>=p&&h!=0?C(!0):C(!1)}()},[w,c]);const x=async()=>{if(u(!0),!c)return;const L=c.getSigner(w);k.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});try{const h=await jt({signer:L,contractAddress:ue.epnscore,amount:p-a});console.debug("response",h),h&&(u(!1),M(p),C(!0),k.showMessageToast({toastTitle:"Success",toastMessage:"Successfully approved Push!",toastType:"SUCCESS",getToastIcon:$=>e.jsx(xe,{size:$,color:"green"})}))}catch(h){console.error(h),h.code=="ACTION_REJECTED"?k.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:$=>e.jsx(q,{size:$,color:"red"})}):(k.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in approving PUSH Token",toastType:"ERROR",getToastIcon:$=>e.jsx(q,{size:$,color:"red"})}),console.error("Error --> %o",h),console.error({err:h}))}u(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(_e,{children:[e.jsxs("div",{children:[e.jsx(Ae,{children:t}),e.jsx(Me,{children:g})]}),e.jsxs(de,{flex:"0",children:[N?e.jsx(ve,{src:xt}):null,e.jsxs(Le,{children:[p," PUSH"]})]})]}),e.jsx(ht,{noOfPushTokensToCheck:p,containerProps:{width:"100%"},onMintPushToken:async L=>{await Tt({noOfTokens:L,provider:c,account:w})}}),B?e.jsx(e.Fragment,{children:e.jsxs(Ie,{children:[e.jsx(Xe,{size:42,color:S.COLORS.PRIMARY_PINK,type:Qe.PROCESSING}),e.jsx(De,{children:"Verifying Transaction"})]})}):e.jsx(e.Fragment,{children:e.jsxs($e,{children:[e.jsx(ke,{onClick:f,disabled:!1,children:"Cancel"}),a>=p?e.jsx(K,{disabled:y,onClick:i,children:"Save Changes"}):e.jsx(K,{disabled:y,onClick:x,children:"Approve PUSH"})]})})]})},ve=m.img``,_e=m(le)`
  background: ${t=>t.theme.editFooterBg};
  border-radius: 20px;
  padding: 23px 32px;
  display: grid;
  grid-auto-flow: column;
  align-content: space-between;
  justify-content: space-between;
  grid-gap: 40px;
  height: 100px;
  align-items: center;
  z-index: 1;

  @media ${A.tablet} {
    padding: 16px;
    flex: 0;
  }

  @media ${A.mobileL} {
    margin: 0px;
  }
`,Ae=m.p`
  margin: 0px;
  color: ${t=>t.theme.editChannelPrimaryText};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Me=m.p`
  font-size: 12px;
  margin: 0px;
  font-weight: 400;
  line-height: 130%;
  color: ${t=>t.theme.editChannelSecondaryText};
`,Le=m.p`
  margin: 0px 0px 0px 5px;
  color: ${t=>t.theme.viewChannelSecondaryText};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Ie=m(le)`
  flex-direction: row;
  margin-top: 33px;

  @media ${A.tablet} {
    flex: 0;
  }
`,De=m.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  color: ${t=>t.theme.editChannelPrimaryText};
`,$e=m(de)`
  justify-content: end;
  margin-top: 24px;
  @media ${A.mobileL} {
    flex-direction: column-reverse;
    flex: 0;
  }
`,K=m(Ze)`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  border-radius: 15px;
  align-items: center;
  text-align: center;
  background: ${t=>t.disabled?t.theme.nfsDisabled:t.theme.default.primaryPushThemeTextColor};
  color: ${t=>t.disabled?t.theme.nfsDisabledText:"white"};
  padding: 16px 27px;
  width: 12rem;

  @media ${A.tablet} {
    font-size: 15px;
    padding: 12px 12px;
    width: 8rem;
  }

  @media ${A.mobileL} {
    width: -webkit-fill-available;
  }
`,ke=m(K)`
  margin-right: 14px;
  background: ${t=>t.theme.default.bg};
  color: ${t=>t.theme.logoBtnColor};
  border: 1px solid
    ${t=>t.theme.scheme==="light"?t.theme.default.primaryPushThemeTextColor:t.theme.default.borderColor};

  @media ${A.mobileL} {
    margin-right: 0px;
    margin-top: 10px;
  }
`,Ue=he.coreContractChain;function Re(){const{account:t,chainId:g}=ce(),{coreChannelAdmin:f,delegatees:y}=Y(l=>l.admin),{channelSettings:i}=Y(l=>l.channels),p=Ye(),w=Ue===g,c=50,[a,M]=d.useState(""),[N,C]=d.useState([]),[B,u]=d.useState(),[k,x]=d.useState(!1),[L,h]=d.useState(!0),{handleConnectWallet:$}=d.useContext(et),{userPushSDKInstance:T}=Y(l=>l.user),{isModalOpen:J,showModal:_,ModalComponent:W}=tt(),P=()=>{const l=window.location.origin;window.location.replace(`${l}/channels`)};d.useEffect(()=>{(async()=>{if(x(!0),!!t){try{await T.channel.info(t)||P()}catch{P()}f&&f!==t&&P(),x(!1)}})()},[t,f]),d.useEffect(()=>{J===!1&&u(void 0)},[J]),d.useEffect(()=>{t&&(!y||!y.length?M(t):M(w?y[0].channel:y[0].alias_address))},[y,t]),d.useEffect(()=>{a&&i[a]&&(C(i[a]||[]),h(!1))},[a,i]);const U=pe(5e3),I=rt(),F=()=>{I("/dashboard",{replace:!0})},D=l=>{const n=N.findIndex(r=>r.index===l.index);if(n===-1)C([...N,l]);else{const r=[...N];r[n]=l,C(r)}},Z=l=>{u(l),_()},X=l=>{C(n=>n.filter(r=>r.index!==l.index))},V=async()=>{try{x(!0);let l=T;if(!l.signer&&(l=await $(),!l)){x(!1);return}U.showLoaderToast({loaderMessage:"Waiting for Confirmation..."});const n=N.map(r=>{if(r.type===1)return{type:r.type,description:r.description,default:r.default?1:0};if(r.type===2)return console.info({type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}),{type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}};if(r.type===3)return console.info({type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}),{type:r.type,description:r.description,default:r.default,data:{lower:r.lowerLimit,upper:r.upperLimit,ticker:r.ticker,enabled:r.enabled}}});console.info(n),await l.channel.setting(n),p(nt({channelAddress:a,settings:N})),x(!1),U.showMessageToast({toastTitle:"Success",toastMessage:"Channel Settings Updated Successfully",toastType:"SUCCESS",getToastIcon:r=>e.jsx(xe,{size:r,color:"green"})}),setTimeout(()=>F(),2e3)}catch(l){x(!1),l.code=="ACTION_REJECTED"?U.showMessageToast({toastTitle:"Error",toastMessage:"User denied message signature.",toastType:"ERROR",getToastIcon:n=>e.jsx(q,{size:n,color:"red"})}):(U.showMessageToast({toastTitle:"Error",toastMessage:"There was an error in updating channel settings",toastType:"ERROR",getToastIcon:n=>e.jsx(q,{size:n,color:"red"})}),console.error("Error --> %o",l))}},Q=d.useMemo(()=>{if(!N||!i[t])return!1;if(N.length!==i[t].length)return!0;let l=!0;for(let n=0;n<N.length;n++){const r=N[n],o=i[t][n];r.type===1?l=l&&r.type===o.type&&r.description===o.description&&r.default===o.default:r.type===2&&(l=l&&r.type===o.type&&r.description===o.description&&r.default===o.default&&r.enabled===o.enabled&&r.lowerLimit===o.lowerLimit&&r.upperLimit===o.upperLimit&&r.ticker===o.ticker)}return l===!1},[N,i[t]]);return e.jsxs(e.Fragment,{children:[e.jsx(mt,{style:{padding:0},title:"Notification Settings",description:"Add, Edit or Remove Notification Settings",Button:e.jsx(yt,{onClick:_})}),e.jsx(gt,{style:{width:"100%",marginTop:"24px",marginBottom:"8px"},account:t,isAddress:!1,isLoading:L,items:N,onClickEmptyListButton:_,emptyListButtonTitle:"Add Setting",settingsDropdownOptions:[{icon:e.jsx(fe,{}),onClick:Z,text:"Edit"},{icon:e.jsx(ct,{}),onClick:X,text:"Delete"}]}),e.jsx(Ce,{feeRequired:c,title:"Modify Settings fee",description:"Make sure all settings are ready before proceeding to the next step",onCancel:F,disabled:!Q||k,onClick:V}),e.jsx(W,{modalPosition:it.ON_PARENT,InnerComponent:we,onConfirm:D,InnerComponentProps:{settingToEdit:B}})]})}he.coreContractChain;function Be(){at.pageview("/channel/settings");const[t,g]=me.useState(null),f=()=>g(null);return me.useEffect(()=>{t&&f()},[t]),e.jsx(ie,{children:e.jsx(Re,{})})}let ie,ne;ie=m(ot)`
  align-items: center;
  align-self: center;
  background: ${t=>t.theme.default.bg};
  border-radius: ${S.ADJUSTMENTS.RADIUS.LARGE} ${S.ADJUSTMENTS.RADIUS.LARGE}
    ${S.ADJUSTMENTS.RADIUS.LARGE} ${S.ADJUSTMENTS.RADIUS.LARGE};
  box-shadow: ${S.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  flex-direction: column;
  flex: initial;
  justify-content: center;
  max-width: 1200px;
  width: calc(
    100% - ${O.MINI_MODULES.DESKTOP.RIGHT} - ${O.MINI_MODULES.DESKTOP.LEFT} -
      ${S.ADJUSTMENTS.PADDING.BIG} - ${S.ADJUSTMENTS.PADDING.BIG}
  );
  position: relative;
  margin: ${S.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  padding: ${S.ADJUSTMENTS.PADDING.BIG};

  @media ${A.laptop} {
    margin: ${S.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${S.ADJUSTMENTS.PADDING.DEFAULT};
    justify-content: flex-start;
  }

  @media ${A.mobileL} {
    margin: ${S.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    padding: ${S.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(
      100% - ${O.MINI_MODULES.MOBILE.RIGHT} - ${O.MINI_MODULES.MOBILE.LEFT} -
        ${S.ADJUSTMENTS.PADDING.DEFAULT} - ${S.ADJUSTMENTS.PADDING.DEFAULT}
    );
    min-height: calc(100vh - ${S.CONSTANTS.HEADER_HEIGHT}px - ${O.BIG_MODULES.MOBILE.TOP});
    overflow-y: scroll;
    border-radius: ${S.ADJUSTMENTS.RADIUS.LARGE} ${S.ADJUSTMENTS.RADIUS.LARGE} 0 0;
  }
`,ge=()=>e.jsx(ne,{children:e.jsx(Be,{})}),ne=m(st)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-start;
`});export{Lt as __tla,ge as default};
