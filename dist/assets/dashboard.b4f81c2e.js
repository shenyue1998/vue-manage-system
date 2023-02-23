import{d as f,r as F,E as x,a as _,b as y,o as w,c as I,e as u,w as t,f as s,u as o,g as S,t as h,h as l,p as R,i as N,_ as V}from"./index.14062165.js";import{E as k,a as G}from"./el-card.a84e875e.js";import{E as T}from"./el-col.2b23e86d.js";import{E as U}from"./el-progress.02b3f973.js";import{S as p}from"./vue-schart.f448be33.js";import"./_commonjsHelpers.712cc82f.js";const n=d=>(R("data-v-44b2c9a5"),d=d(),N(),d),z={class:"user-info"},P={class:"user-info-cont"},j={class:"user-info-name"},q=n(()=>s("div",{class:"user-info-list"},[l(" \u4E0A\u6B21\u767B\u5F55\u65F6\u95F4\uFF1A "),s("span",null,"2023-02-20")],-1)),H=n(()=>s("div",{class:"user-info-list"},[l(" \u4E0A\u6B21\u767B\u5F55\u5730\u70B9\uFF1A "),s("span",null,"\u676D\u5DDE\u5E02\u897F\u6E56\u533A")],-1)),J=n(()=>s("div",{class:"clearfix"},[s("span",null,"\u8FDB\u5EA6")],-1)),K=l(" \u751F\u4EA7\u7BA1\u7406 "),L=l(" \u8C03\u62E8\u7BA1\u7406 "),M=l(" \u8D22\u52A1\u7BA1\u7406 "),O=l(" \u62A5\u8868\u7BA1\u7406 "),Q={class:"grid-content grid-con-1"},W=n(()=>s("div",{class:"grid-cont-right"},[s("div",{class:"grid-num"},"1234"),s("div",null,"\u7528\u6237\u8BBF\u95EE\u91CF")],-1)),X={class:"grid-content grid-con-2"},Y=n(()=>s("div",{class:"grid-cont-right"},[s("div",{class:"grid-num"},"321"),s("div",null,"\u7CFB\u7EDF\u6D88\u606F")],-1)),Z={class:"grid-content grid-con-3"},$=n(()=>s("div",{class:"grid-cont-right"},[s("div",{class:"grid-num"},"5000"),s("div",null,"\u5546\u54C1\u6570\u91CF")],-1)),uu=f({name:"dashboard"}),tu=f({...uu,setup(d){const E=localStorage.getItem("ms_username"),g=E==="admin"?"\u8D85\u7EA7\u7BA1\u7406\u5458":"\u666E\u901A\u7528\u6237",v={type:"bar",title:{text:"\u6700\u8FD1\u4E00\u5468\u5404\u54C1\u7C7B\u9500\u552E\u56FE"},xRorate:25,labels:["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94"],datasets:[{label:"\u5BB6\u7535",data:[234,278,270,190,230]},{label:"\u767E\u8D27",data:[164,178,190,135,160]},{label:"\u98DF\u54C1",data:[144,198,150,235,120]}]},m={type:"line",title:{text:"\u6700\u8FD1\u51E0\u4E2A\u6708\u5404\u54C1\u7C7B\u9500\u552E\u8D8B\u52BF\u56FE"},labels:["6\u6708","7\u6708","8\u6708","9\u6708","10\u6708"],datasets:[{label:"\u5BB6\u7535",data:[234,278,270,190,230]},{label:"\u767E\u8D27",data:[164,178,150,135,160]},{label:"\u98DF\u54C1",data:[74,118,200,235,90]}]},b={type:"pie",title:{text:"\u670D\u88C5\u54C1\u7C7B\u9500\u552E\u997C\u72B6\u56FE"},legend:{position:"left"},bgColor:"#fbfbfb",labels:["T\u6064","\u725B\u4ED4\u88E4","\u8FDE\u8863\u88D9","\u6BDB\u8863","\u4E03\u5206\u88E4","\u77ED\u88D9","\u7FBD\u7ED2\u670D"],datasets:[{data:[334,278,190,235,260,200,141]}]};return F([{title:"\u4ECA\u5929\u8981\u4FEE\u590D100\u4E2Abug",status:!1},{title:"\u4ECA\u5929\u8981\u4FEE\u590D100\u4E2Abug",status:!1},{title:"\u4ECA\u5929\u8981\u5199100\u884C\u4EE3\u7801\u52A0\u51E0\u4E2Abug\u5427",status:!1},{title:"\u4ECA\u5929\u8981\u4FEE\u590D100\u4E2Abug",status:!1},{title:"\u4ECA\u5929\u8981\u4FEE\u590D100\u4E2Abug",status:!0},{title:"\u4ECA\u5929\u8981\u5199100\u884C\u4EE3\u7801\u52A0\u51E0\u4E2Abug\u5427",status:!0}]),(su,eu)=>{const D=x,e=k,c=U,a=T,A=_("User"),i=y,B=_("ChatDotRound"),C=_("Goods"),r=G;return w(),I("div",null,[u(r,{gutter:20},{default:t(()=>[u(a,{span:8},{default:t(()=>[u(e,{shadow:"hover",class:"mgb20",style:{height:"252px"}},{default:t(()=>[s("div",z,[u(D,{size:120,src:o(S)},null,8,["src"]),s("div",P,[s("div",j,h(o(E)),1),s("div",null,h(o(g)),1)])]),q,H]),_:1}),u(e,{shadow:"hover",style:{height:"252px"}},{header:t(()=>[J]),default:t(()=>[K,u(c,{percentage:79.4,color:"#42b983"},null,8,["percentage"]),L,u(c,{percentage:14,color:"#f1e05a"}),M,u(c,{percentage:5.6},null,8,["percentage"]),O,u(c,{percentage:1,color:"#f56c6c"})]),_:1})]),_:1}),u(a,{span:16},{default:t(()=>[u(r,{gutter:20,class:"mgb20"},{default:t(()=>[u(a,{span:8},{default:t(()=>[u(e,{shadow:"hover","body-style":{padding:"0px"}},{default:t(()=>[s("div",Q,[u(i,{class:"grid-con-icon"},{default:t(()=>[u(A)]),_:1}),W])]),_:1})]),_:1}),u(a,{span:8},{default:t(()=>[u(e,{shadow:"hover","body-style":{padding:"0px"}},{default:t(()=>[s("div",X,[u(i,{class:"grid-con-icon"},{default:t(()=>[u(B)]),_:1}),Y])]),_:1})]),_:1}),u(a,{span:8},{default:t(()=>[u(e,{shadow:"hover","body-style":{padding:"0px"}},{default:t(()=>[s("div",Z,[u(i,{class:"grid-con-icon"},{default:t(()=>[u(C)]),_:1}),$])]),_:1})]),_:1})]),_:1}),u(e,{shadow:"hover",style:{height:"403px"}},{default:t(()=>[u(o(p),{ref:"bar",class:"schart",canvasId:"bar",options:v},null,512)]),_:1})]),_:1})]),_:1}),u(r,{gutter:20},{default:t(()=>[u(a,{span:12},{default:t(()=>[u(e,{shadow:"hover"},{default:t(()=>[u(o(p),{ref:"pie",class:"schart",canvasId:"pie",options:b},null,512)]),_:1})]),_:1}),u(a,{span:12},{default:t(()=>[u(e,{shadow:"hover"},{default:t(()=>[u(o(p),{ref:"line",class:"schart",canvasId:"line",options:m},null,512)]),_:1})]),_:1})]),_:1})])}}});const iu=V(tu,[["__scopeId","data-v-44b2c9a5"]]);export{iu as default};