import{j as $,am as x,d as E,l as N,o as u,c as b,A as v,w as c,B as A,u as l,b as L,q as h,n as g,m as B,v as j,x as I,$ as D,av as P,f as C,e as s,h as F,_ as T}from"./index.3c46758d.js";import{E as V,a as q}from"./el-table-column.dad4c1a8.js";/* empty css                    */import"./el-tag.c97e7243.js";import{E as M}from"./el-upload.6edcccf7.js";import"./el-progress.5625e9a1.js";import{r as U,u as z}from"./xlsx.db07aefa.js";import"./event.776e7e11.js";const R=$({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:x,default:""}}),G={click:i=>i instanceof MouseEvent},H=["href"],J={name:"ElLink"},K=E({...J,props:R,emits:G,setup(i,{emit:r}){const y=i,a=N("link");function m(e){y.disabled||r("click",e)}return(e,k)=>(u(),b("a",{class:g([l(a).b(),l(a).m(e.type),l(a).is("disabled",e.disabled),l(a).is("underline",e.underline&&!e.disabled)]),href:e.disabled||!e.href?void 0:e.href,onClick:m},[e.icon?(u(),v(l(L),{key:0},{default:c(()=>[(u(),v(A(e.icon)))]),_:1})):h("v-if",!0),e.$slots.default?(u(),b("span",{key:1,class:g(l(a).e("inner"))},[B(e.$slots,"default")],2)):h("v-if",!0),e.$slots.icon?B(e.$slots,"icon",{key:2}):h("v-if",!0)],10,H))}});var O=j(K,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const Q=I(O);const W={class:"container"},X={class:"handle-box"},Y=F("\u6279\u91CF\u5BFC\u5165"),Z=F("\u4E0B\u8F7D\u6A21\u677F"),ee=E({name:"import"}),se=E({...ee,setup(i){const r=D([]);(()=>{r.value=[{id:1,name:"\u5C0F\u660E",sno:"S001",class:"\u4E00\u73ED",age:"10",sex:"\u7537"},{id:2,name:"\u5C0F\u7EA2",sno:"S002",class:"\u4E00\u73ED",age:"9",sex:"\u5973"}]})();const a=D([]),m=async o=>(a.value=await e(o),!0),e=o=>new Promise(function(t,d){const p=new FileReader;p.onload=function(f){const n=f.target.result;let _=U(n,{type:"binary"});const w=_.SheetNames[0],S=z.sheet_to_json(_.Sheets[w]);t(S)},p.readAsBinaryString(o)}),k=async()=>{const o=a.value.map((t,d)=>({id:d,name:t.\u59D3\u540D,sno:t.\u5B66\u53F7,class:t.\u73ED\u7EA7,age:t.\u5E74\u9F84,sex:t.\u6027\u522B}));r.value.push(...o)};return(o,t)=>{const d=P,p=M,f=Q,n=V,_=q;return u(),b("div",null,[C("div",W,[C("div",X,[s(p,{action:"#",limit:1,accept:".xlsx, .xls","show-file-list":!1,"before-upload":m,"http-request":k},{default:c(()=>[s(d,{class:"mr10",type:"success"},{default:c(()=>[Y]),_:1})]),_:1}),s(f,{href:"/template.xlsx",target:"_blank"},{default:c(()=>[Z]),_:1})]),s(_,{data:r.value,border:"",class:"table","header-cell-class-name":"table-header"},{default:c(()=>[s(n,{prop:"id",label:"ID",width:"55",align:"center"}),s(n,{prop:"name",label:"\u59D3\u540D"}),s(n,{prop:"sno",label:"\u5B66\u53F7"}),s(n,{prop:"class",label:"\u73ED\u7EA7"}),s(n,{prop:"age",label:"\u5E74\u9F84"}),s(n,{prop:"sex",label:"\u6027\u522B"})]),_:1},8,["data"])])])}}});const ie=T(se,[["__scopeId","data-v-41ecc686"]]);export{ie as default};
