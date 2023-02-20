import{aN as W,bq as de,j as q,k as m,C as I,aU as k,d as N,Y as ce,l as j,$ as se,o as y,A as S,w,c as L,ab as pe,n as v,u as t,ar as ae,m as R,q as g,f as B,e as P,ch as fe,b as T,t as X,a3 as _,s as me,I as ve,K as ye,L as ge,a8 as be,aL as he,a6 as ke,ci as Ee,v as A,ba as $e,D as Ce,a1 as V,cj as Re,ck as we,Q as G,at as Ue,b0 as Le,bm as Se,y as J,aB as Pe,z as Fe,br as Te,b2 as Q,aj as Y,x as _e}from"./index.3c46758d.js";import{E as Oe}from"./el-progress.5625e9a1.js";const ne=Symbol("uploadContextKey"),De="ElUpload";class Be extends Error{constructor(l,a,d,u){super(l),this.name="UploadAjaxError",this.status=a,this.method=d,this.url=u}}function Z(n,l,a){let d;return a.response?d=`${a.response.error||a.response}`:a.responseText?d=`${a.responseText}`:d=`fail to ${l.method} ${n} ${a.status}`,new Be(d,a.status,l.method,n)}function je(n){const l=n.responseText||n.response;if(!l)return l;try{return JSON.parse(l)}catch{return l}}const qe=n=>{typeof XMLHttpRequest>"u"&&W(De,"XMLHttpRequest is undefined");const l=new XMLHttpRequest,a=n.action;l.upload&&l.upload.addEventListener("progress",i=>{const f=i;f.percent=i.total>0?i.loaded/i.total*100:0,n.onProgress(f)});const d=new FormData;if(n.data)for(const[i,f]of Object.entries(n.data))Array.isArray(f)?d.append(i,...f):d.append(i,f);d.append(n.filename,n.file,n.file.name),l.addEventListener("error",()=>{n.onError(Z(a,n,l))}),l.addEventListener("load",()=>{if(l.status<200||l.status>=300)return n.onError(Z(a,n,l));n.onSuccess(je(l))}),l.open(n.method,a,!0),n.withCredentials&&"withCredentials"in l&&(l.withCredentials=!0);const u=n.headers||{};if(u instanceof Headers)u.forEach((i,f)=>l.setRequestHeader(f,i));else for(const[i,f]of Object.entries(u))de(f)||l.setRequestHeader(i,String(f));return l.send(d),l},oe=["text","picture","picture-card"];let Ne=1;const le=()=>Date.now()+Ne++,re=q({action:{type:String,default:"#"},headers:{type:m(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>I({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:m(Array),default:()=>I([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:oe,default:"text"},httpRequest:{type:m(Function),default:qe},disabled:Boolean,limit:Number}),Ae=q({...re,beforeUpload:{type:m(Function),default:k},beforeRemove:{type:m(Function)},onRemove:{type:m(Function),default:k},onChange:{type:m(Function),default:k},onPreview:{type:m(Function),default:k},onSuccess:{type:m(Function),default:k},onProgress:{type:m(Function),default:k},onError:{type:m(Function),default:k},onExceed:{type:m(Function),default:k}}),Ke=q({files:{type:m(Array),default:()=>I([])},disabled:{type:Boolean,default:!1},handlePreview:{type:m(Function),default:k},listType:{type:String,values:oe,default:"text"}}),Me={remove:n=>!!n},He=["onKeydown"],ze=["src"],Ie=["onClick"],Ve=["onClick"],We=["onClick"],Xe={name:"ElUploadList"},Ge=N({...Xe,props:Ke,emits:Me,setup(n,{emit:l}){const a=n,{t:d}=ce(),u=j("upload"),i=j("icon"),f=j("list"),C=se(!1),U=r=>{a.handlePreview(r)},E=r=>{l("remove",r)};return(r,h)=>(y(),S(Ee,{tag:"ul",class:v([t(u).b("list"),t(u).bm("list",r.listType),t(u).is("disabled",r.disabled)]),name:t(f).b()},{default:w(()=>[(y(!0),L(ke,null,pe(r.files,s=>(y(),L("li",{key:s.uid||s.name,class:v([t(u).be("list","item"),t(u).is(s.status),{focusing:C.value}]),tabindex:"0",onKeydown:ae(e=>!r.disabled&&E(s),["delete"]),onFocus:h[0]||(h[0]=e=>C.value=!0),onBlur:h[1]||(h[1]=e=>C.value=!1),onClick:h[2]||(h[2]=e=>C.value=!1)},[R(r.$slots,"default",{file:s},()=>[r.listType==="picture"||s.status!=="uploading"&&r.listType==="picture-card"?(y(),L("img",{key:0,class:v(t(u).be("list","item-thumbnail")),src:s.url,alt:""},null,10,ze)):g("v-if",!0),r.listType!=="picture"&&(s.status==="uploading"||r.listType!=="picture-card")?(y(),L("div",{key:1,class:v(t(u).be("list","item-info"))},[B("a",{class:v(t(u).be("list","item-name")),onClick:_(e=>U(s),["prevent"])},[P(t(T),{class:v(t(i).m("document"))},{default:w(()=>[P(t(fe))]),_:1},8,["class"]),B("span",{class:v(t(u).be("list","item-file-name"))},X(s.name),3)],10,Ie),s.status==="uploading"?(y(),S(t(Oe),{key:0,type:r.listType==="picture-card"?"circle":"line","stroke-width":r.listType==="picture-card"?6:2,percentage:Number(s.percentage),style:me(r.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):g("v-if",!0)],2)):g("v-if",!0),B("label",{class:v(t(u).be("list","item-status-label"))},[r.listType==="text"?(y(),S(t(T),{key:0,class:v([t(i).m("upload-success"),t(i).m("circle-check")])},{default:w(()=>[P(t(ve))]),_:1},8,["class"])):["picture-card","picture"].includes(r.listType)?(y(),S(t(T),{key:1,class:v([t(i).m("upload-success"),t(i).m("check")])},{default:w(()=>[P(t(ye))]),_:1},8,["class"])):g("v-if",!0)],2),r.disabled?g("v-if",!0):(y(),S(t(T),{key:2,class:v(t(i).m("close")),onClick:e=>E(s)},{default:w(()=>[P(t(ge))]),_:2},1032,["class","onClick"])),g(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),g(" This is a bug which needs to be fixed "),g(" TODO: Fix the incorrect navigation interaction "),r.disabled?g("v-if",!0):(y(),L("i",{key:3,class:v(t(i).m("close-tip"))},X(t(d)("el.upload.deleteTip")),3)),r.listType==="picture-card"?(y(),L("span",{key:4,class:v(t(u).be("list","item-actions"))},[B("span",{class:v(t(u).be("list","item-preview")),onClick:e=>r.handlePreview(s)},[P(t(T),{class:v(t(i).m("zoom-in"))},{default:w(()=>[P(t(be))]),_:1},8,["class"])],10,Ve),r.disabled?g("v-if",!0):(y(),L("span",{key:0,class:v(t(u).be("list","item-delete")),onClick:e=>E(s)},[P(t(T),{class:v(t(i).m("delete"))},{default:w(()=>[P(t(he))]),_:1},8,["class"])],10,We))],2)):g("v-if",!0)])],42,He))),128)),R(r.$slots,"append")]),_:3},8,["class","name"]))}});var x=A(Ge,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const Je=q({disabled:{type:Boolean,default:!1}}),Qe={file:n=>$e(n)},Ye=["onDrop","onDragover"],Ze={name:"ElUploadDrag"},xe=N({...Ze,props:Je,emits:Qe,setup(n,{emit:l}){const a=n,d="ElUploadDrag",u=Ce(ne);u||W(d,"usage: <el-upload><el-upload-dragger /></el-upload>");const i=j("upload"),f=se(!1),C=E=>{if(a.disabled)return;f.value=!1;const r=Array.from(E.dataTransfer.files),h=u.accept.value;if(!h){l("file",r);return}const s=r.filter(e=>{const{type:o,name:p}=e,b=p.includes(".")?`.${p.split(".").pop()}`:"",c=o.replace(/\/.*$/,"");return h.split(",").map($=>$.trim()).filter($=>$).some($=>$.startsWith(".")?b===$:/\/\*$/.test($)?c===$.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test($)?o===$:!1)});l("file",s)},U=()=>{a.disabled||(f.value=!0)};return(E,r)=>(y(),L("div",{class:v([t(i).b("dragger"),t(i).is("dragover",f.value)]),onDrop:_(C,["prevent"]),onDragover:_(U,["prevent"]),onDragleave:r[0]||(r[0]=_(h=>f.value=!1,["prevent"]))},[R(E.$slots,"default")],42,Ye))}});var et=A(xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const tt=q({...re,beforeUpload:{type:m(Function),default:k},onRemove:{type:m(Function),default:k},onStart:{type:m(Function),default:k},onSuccess:{type:m(Function),default:k},onProgress:{type:m(Function),default:k},onError:{type:m(Function),default:k},onExceed:{type:m(Function),default:k}}),st=["onKeydown"],at=["name","multiple","accept"],nt={name:"ElUploadContent",inheritAttrs:!1},ot=N({...nt,props:tt,setup(n,{expose:l}){const a=n,d=j("upload"),u=V({}),i=V(),f=e=>{if(e.length===0)return;const{autoUpload:o,limit:p,fileList:b,multiple:c,onStart:$,onExceed:F}=a;if(p&&b.length+e.length>p){F(e,b);return}c||(e=e.slice(0,1));for(const K of e){const O=K;O.uid=le(),$(O),o&&C(O)}},C=async e=>{if(i.value.value="",!a.beforeUpload)return U(e);let o;try{o=await a.beforeUpload(e)}catch{o=!1}if(o===!1){a.onRemove(e);return}let p=e;o instanceof Blob&&(o instanceof File?p=o:p=new File([o],e.name,{type:e.type})),U(Object.assign(p,{uid:e.uid}))},U=e=>{const{headers:o,data:p,method:b,withCredentials:c,name:$,action:F,onProgress:K,onSuccess:O,onError:ie,httpRequest:ue}=a,{uid:M}=e,H={headers:o||{},withCredentials:c,file:e,data:p,method:b,filename:$,action:F,onProgress:D=>{K(D,e)},onSuccess:D=>{O(D,e),delete u.value[M]},onError:D=>{ie(D,e),delete u.value[M]}},z=ue(H);u.value[M]=z,z instanceof Promise&&z.then(H.onSuccess,H.onError)},E=e=>{const o=e.target.files;!o||f(Array.from(o))},r=()=>{a.disabled||(i.value.value="",i.value.click())},h=()=>{r()};return l({abort:e=>{Re(u.value).filter(e?([p])=>String(e.uid)===p:()=>!0).forEach(([p,b])=>{b instanceof XMLHttpRequest&&b.abort(),delete u.value[p]})},upload:C}),(e,o)=>(y(),L("div",{class:v([t(d).b(),t(d).m(e.listType),t(d).is("drag",e.drag)]),tabindex:"0",onClick:r,onKeydown:ae(_(h,["self"]),["enter","space"])},[e.drag?(y(),S(et,{key:0,disabled:e.disabled,onFile:f},{default:w(()=>[R(e.$slots,"default")]),_:3},8,["disabled"])):R(e.$slots,"default",{key:1}),B("input",{ref_key:"inputRef",ref:i,class:v(t(d).e("input")),name:e.name,multiple:e.multiple,accept:e.accept,type:"file",onChange:E,onClick:o[0]||(o[0]=_(()=>{},["stop"]))},null,42,at)],42,st))}});var ee=A(ot,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const te="ElUpload",lt=n=>{var l;(l=n.url)!=null&&l.startsWith("blob:")&&URL.revokeObjectURL(n.url)},rt=(n,l)=>{const a=we(n,"fileList",void 0,{passive:!0}),d=s=>a.value.find(e=>e.uid===s.uid);function u(s){var e;(e=l.value)==null||e.abort(s)}function i(s=["ready","uploading","success","fail"]){a.value=a.value.filter(e=>!s.includes(e.status))}const f=(s,e)=>{const o=d(e);!o||(console.error(s),o.status="fail",a.value.splice(a.value.indexOf(o),1),n.onError(s,o,a.value),n.onChange(o,a.value))},C=(s,e)=>{const o=d(e);!o||(n.onProgress(s,o,a.value),o.status="uploading",o.percentage=Math.round(s.percent))},U=(s,e)=>{const o=d(e);!o||(o.status="success",o.response=s,n.onSuccess(s,o,a.value),n.onChange(o,a.value))},E=s=>{const e={name:s.name,percentage:0,status:"ready",size:s.size,raw:s,uid:s.uid};if(n.listType==="picture-card"||n.listType==="picture")try{e.url=URL.createObjectURL(s)}catch(o){Ue(te,o.message),n.onError(o,e,a.value)}a.value=[...a.value,e],n.onChange(e,a.value)},r=async s=>{const e=s instanceof File?d(s):s;e||W(te,"file to be removed not found");const o=p=>{u(p);const b=a.value;b.splice(b.indexOf(p),1),n.onRemove(p,b),lt(p)};n.beforeRemove?await n.beforeRemove(e,a.value)!==!1&&o(e):o(e)};function h(){a.value.filter(({status:s})=>s==="ready").forEach(({raw:s})=>{var e;return s&&((e=l.value)==null?void 0:e.upload(s))})}return G(()=>n.listType,s=>{s!=="picture-card"&&s!=="picture"||(a.value=a.value.map(e=>{const{raw:o,url:p}=e;if(!p&&o)try{e.url=URL.createObjectURL(o)}catch(b){n.onError(b,e,a.value)}return e}))}),G(a,s=>{for(const e of s)e.uid||(e.uid=le()),e.status||(e.status="success")},{immediate:!0,deep:!0}),{uploadFiles:a,abort:u,clearFiles:i,handleError:f,handleProgress:C,handleStart:E,handleSuccess:U,handleRemove:r,submit:h}},it={name:"ElUpload"},ut=N({...it,props:Ae,setup(n,{expose:l}){const a=n,d=Le(),u=Se(),i=V(),{abort:f,submit:C,clearFiles:U,uploadFiles:E,handleStart:r,handleError:h,handleRemove:s,handleSuccess:e,handleProgress:o}=rt(a,i),p=J(()=>a.listType==="picture-card"),b=J(()=>({...a,onStart:r,onProgress:o,onSuccess:e,onError:h,onRemove:s}));return Pe(()=>{E.value.forEach(({url:c})=>{c!=null&&c.startsWith("blob:")&&URL.revokeObjectURL(c)})}),Fe(ne,{accept:Te(a,"accept")}),l({abort:f,submit:C,clearFiles:U,handleStart:r,handleRemove:s}),(c,$)=>(y(),L("div",null,[t(p)&&c.showFileList?(y(),S(x,{key:0,disabled:t(u),"list-type":c.listType,files:t(E),"handle-preview":c.onPreview,onRemove:t(s)},Q({append:w(()=>[c.listType==="picture-card"?(y(),S(ee,Y({key:0,ref_key:"uploadRef",ref:i},t(b)),{default:w(()=>[t(d).trigger?R(c.$slots,"trigger",{key:0}):g("v-if",!0),!t(d).trigger&&t(d).default?R(c.$slots,"default",{key:1}):g("v-if",!0)]),_:3},16)):g("v-if",!0)]),_:2},[c.$slots.file?{name:"default",fn:w(({file:F})=>[R(c.$slots,"file",{file:F})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):g("v-if",!0),c.listType!=="picture-card"?(y(),S(ee,Y({key:1,ref_key:"uploadRef",ref:i},t(b)),{default:w(()=>[t(d).trigger?R(c.$slots,"trigger",{key:0}):g("v-if",!0),!t(d).trigger&&t(d).default?R(c.$slots,"default",{key:1}):g("v-if",!0)]),_:3},16)):g("v-if",!0),c.$slots.trigger?R(c.$slots,"default",{key:2}):g("v-if",!0),R(c.$slots,"tip"),!t(p)&&c.showFileList?(y(),S(x,{key:3,disabled:t(u),"list-type":c.listType,files:t(E),"handle-preview":c.onPreview,onRemove:t(s)},Q({_:2},[c.$slots.file?{name:"default",fn:w(({file:F})=>[R(c.$slots,"file",{file:F})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):g("v-if",!0)]))}});var dt=A(ut,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const ft=_e(dt);export{ft as E};
