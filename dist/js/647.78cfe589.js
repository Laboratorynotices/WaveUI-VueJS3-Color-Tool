"use strict";(self["webpackChunkwave_ui_vue3_color_tool"]=self["webpackChunkwave_ui_vue3_color_tool"]||[]).push([[647],{7647:function(o,e,l){l.r(e),l.d(e,{default:function(){return k}});var t=l(3396),n=l(7139),u=l(4870),r={__name:"ButtonColRandomColor",props:{colorLocked:Boolean},setup(o){return(e,l)=>((0,t.wg)(),(0,t.iD)("button",{onClick:l[0]||(l[0]=o=>e.$emit("touchColorLocked"))},(0,n.zw)(o.colorLocked?"locked":"unlocked"),1))}};const c=r;var a=c,s={__name:"ColRandomColor",setup(o){const e=()=>{const o="0123456789ABCDEF";let e="#";for(let l=0;l<6;l++)e+=o[Math.floor(Math.random()*o.length)];return e},l=(0,u.iH)(e()),r=(0,u.iH)(!1),c=o=>{"space"!==o.code.toLowerCase()||r.value||(l.value=e())};(0,t.bv)((()=>{document.addEventListener("keydown",c)})),(0,t.Ah)((()=>{document.removeEventListener("keydown",c)}));const s=()=>{r.value=!r.value};return(o,e)=>{const u=(0,t.up)("w-flex");return(0,t.wg)(),(0,t.j4)(u,{column:"","align-center":"","justify-space-evenly":"",style:(0,n.j5)({"background-color":l.value})},{default:(0,t.w5)((()=>[(0,t._)("h1",null,(0,n.zw)(l.value),1),(0,t.Wm)(a,{colorLocked:r.value,onTouchColorLocked:s},null,8,["colorLocked"])])),_:1},8,["style"])}}};const d=s;var w=d,i={__name:"RandomColorView",setup(o){const e=5;return(o,l)=>{const u=(0,t.up)("w-flex");return(0,t.wg)(),(0,t.j4)(u,{class:"row fill-height fill-width"},{default:(0,t.w5)((()=>[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(e,(o=>(0,t.Wm)(w,{key:o},{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(o),1)])),_:2},1024))),64))])),_:1})}}};const v=i;var k=v}}]);
//# sourceMappingURL=647.78cfe589.js.map