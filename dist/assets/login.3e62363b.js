import{d as w,dB as y,r as E,cg as h,$ as S,dC as V,o as C,c as I,f as n,e as s,w as a,u as c,dD as k,ar as x,dE as b,h as D,av as N,p as T,i as $,_ as q}from"./index.14062165.js";import{E as K,a as U}from"./el-form-item.0237b151.js";import{E as A}from"./el-input.73288c2b.js";import{E as f}from"./index.642d3621.js";import"./isEqual.aea389fc.js";import"./event.776e7e11.js";const g=r=>(T("data-v-2fe52239"),r=r(),$(),r),J={class:"login-wrap"},L={class:"ms-login"},M=g(()=>n("div",{class:"ms-title"},"\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",-1)),O={class:"login-btn"},P=D("\u767B\u5F55"),R=g(()=>n("p",{class:"login-tips"},"Tips : \u7528\u6237\u540D\u548C\u5BC6\u7801\u968F\u4FBF\u586B\u3002",-1)),j=w({__name:"login",setup(r){const F=y(),o=E({username:"admin",password:"123123"}),B={username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}]},i=h(),l=S(),p=d=>{!d||d.validate(e=>{if(e){f.success("\u767B\u5F55\u6210\u529F"),localStorage.setItem("ms_username",o.username);const t=i.defaultList[o.username=="admin"?"admin":"user"];i.handleSet(t),localStorage.setItem("ms_keys",JSON.stringify(t)),F.push("/")}else return f.error("\u767B\u5F55\u6210\u529F"),!1})};return V().clearTags(),(d,e)=>{const t=N,m=A,_=K,v=U;return C(),I("div",J,[n("div",L,[M,s(v,{model:o,rules:B,ref_key:"login",ref:l,"label-width":"0px",class:"ms-content"},{default:a(()=>[s(_,{prop:"username"},{default:a(()=>[s(m,{modelValue:o.username,"onUpdate:modelValue":e[0]||(e[0]=u=>o.username=u),placeholder:"username"},{prepend:a(()=>[s(t,{icon:c(k)},null,8,["icon"])]),_:1},8,["modelValue"])]),_:1}),s(_,{prop:"password"},{default:a(()=>[s(m,{type:"password",placeholder:"password",modelValue:o.password,"onUpdate:modelValue":e[1]||(e[1]=u=>o.password=u),onKeyup:e[2]||(e[2]=x(u=>p(l.value),["enter"]))},{prepend:a(()=>[s(t,{icon:c(b)},null,8,["icon"])]),_:1},8,["modelValue"])]),_:1}),n("div",O,[s(t,{type:"primary",onClick:e[3]||(e[3]=u=>p(l.value))},{default:a(()=>[P]),_:1})]),R]),_:1},8,["model"])])])}}});const Z=q(j,[["__scopeId","data-v-2fe52239"]]);export{Z as default};