"use strict";(self["webpackChunkwave_ui_vue3_color_tool"]=self["webpackChunkwave_ui_vue3_color_tool"]||[]).push([[647],{7647:function(o,e,t){t.r(e),t.d(e,{default:function(){return k}});var l=t(3396),n=t(7139),u=t(4870),r={__name:"ButtonColRandomColor",props:{colorLocked:Boolean},emits:["touchColorLocked"],setup(o,{emit:e}){const t=o=>{0===o.x?o.preventDefault():e("touchColorLocked")};return(e,u)=>{const r=(0,l.up)("w-button");return(0,l.wg)(),(0,l.j4)(r,{onClick:t},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(o.colorLocked?"locked":"unlocked"),1)])),_:1})}}};const c=r;var a=c,s={__name:"ColRandomColor",setup(o){const e=()=>{const o="0123456789ABCDEF";let e="#";for(let t=0;t<6;t++)e+=o[Math.floor(Math.random()*o.length)];return e},t=(0,u.iH)(e()),r=(0,u.iH)(!1),c=o=>{"space"!==o.code.toLowerCase()||r.value||(t.value=e())};(0,l.bv)((()=>{document.addEventListener("keydown",c)})),(0,l.Ah)((()=>{document.removeEventListener("keydown",c)}));const s=()=>{r.value=!r.value};return(o,e)=>{const u=(0,l.up)("w-flex");return(0,l.wg)(),(0,l.j4)(u,{column:"","align-center":"","justify-space-evenly":"",style:(0,n.j5)({"background-color":t.value})},{default:(0,l.w5)((()=>[(0,l._)("h1",null,(0,n.zw)(t.value),1),(0,l.Wm)(a,{colorLocked:r.value,onTouchColorLocked:s},null,8,["colorLocked"])])),_:1},8,["style"])}}};const d=s;var w=d,v={__name:"RandomColorView",setup(o){const e=5;return(o,t)=>{const u=(0,l.up)("w-flex");return(0,l.wg)(),(0,l.j4)(u,{class:"row fill-height fill-width"},{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(e,(o=>(0,l.Wm)(w,{key:o},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(o),1)])),_:2},1024))),64))])),_:1})}}};const i=v;var k=i}}]);
//# sourceMappingURL=647.7d6feb81.js.map