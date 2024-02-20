"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[760],{4760:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(2791),r=n(9434),i=n(9439),o=n(5984),s=function(e){return e.contacts.contacts},u=function(e){return e.filter},p=function(e){return e.contacts.isLoading},c=function(e){return e.contacts.error},l=n(8115),d=n(4942),b=n(3685),m=n(4294),k=(0,b.ZP)("form")((function(e){return{display:"flex",flexDirection:"column",alignItems:"center",padding:e.theme.spacing(2),border:"none"}})),x=(0,b.ZP)("label")((function(e){var t=e.theme;return(0,d.Z)({display:"flex",flexDirection:"column",marginBottom:t.spacing(2),fontSize:t.spacing(3)},t.breakpoints.up(t.breakpoints.values.mobileAdaptive),{marginBottom:t.spacing(6),fontSize:t.spacing(5)})})),v=(0,b.ZP)("input")((function(e){var t,n=e.theme;return t={minWidth:"150px",borderRadius:n.customBorderRadius.standart,borderColor:"rgb(0 0 0 / 0%)",outline:"none",backgroundColor:n.customColors.addContactsBackgroundAlt},(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.mobileAdaptive),{width:"180px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my1),{width:"220px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my2),{width:"250px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.tablet),{width:"280px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my3),{width:"320px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my4),{width:"370px"}),t})),f=(0,b.ZP)(m.Z)((function(e){var t=e.theme;return{color:t.customColors.test,backgroundColor:t.customColors.addBtnBackground,borderRadius:t.customBorderRadius.secondary,"&:hover":{backgroundColor:t.customColors.addBtnHover},"&:focus":{backgroundColor:t.customColors.addBtnHover}}})),h=n(184),g=function(){var e=(0,r.I0)(),t=(0,r.v9)(s),n=(0,a.useState)(""),u=(0,i.Z)(n,2),p=u[0],c=u[1],d=(0,a.useState)(""),b=(0,i.Z)(d,2),m=b[0],g=b[1],Z=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":g(a);break;default:return}},y=(0,o.x0)(),j=(0,o.x0)();return(0,h.jsxs)(k,{onSubmit:function(n){n.preventDefault(),function(n){var a=n.name,r=n.number,i={id:(0,o.x0)(),name:a,number:r};t.find((function(e){return e.name===i.name}))?alert("".concat(a," is already in the contacts")):e((0,l.uK)(i))}({name:p,number:m}),c(""),g("")},children:[(0,h.jsxs)(x,{htmlFor:y,children:["Name:",(0,h.jsx)(v,{id:y,value:p,onChange:Z,name:"name",type:"text",required:!0})]}),(0,h.jsxs)(x,{htmlFor:j,children:["Number:",(0,h.jsx)(v,{id:j,value:m,onChange:Z,name:"number",type:"tel",required:!0})]}),(0,h.jsx)(f,{type:"submit",children:"Add contact"})]})},Z=n(7247),y=n(697),j=n(3400),C=(0,b.ZP)("ol")((function(e){var t,n=e.theme;return t={paddingLeft:n.spacing(2)},(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.mobileAdaptive),{paddingLeft:n.spacing(4)}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my1),{paddingLeft:n.spacing(8)}),t})),w=(0,b.ZP)("li")((function(e){var t=e.theme;return(0,d.Z)({padding:t.spacing(1)},t.breakpoints.down(t.breakpoints.values.tablet),{fontSize:t.spacing(3)})})),P=(0,b.ZP)("span")((function(e){var t=e.theme;return{color:t.customColors.contactName,fontFamily:t.customFontFamily.contactName}})),A=(0,b.ZP)("span")((function(e){var t=e.theme;return{color:t.customColors.contactNumber,fontFamily:t.customFontFamily.contactNumber}})),W=(0,b.ZP)("div")((function(e){var t=e.theme;return(0,d.Z)({},t.breakpoints.down(t.breakpoints.values.tablet),{display:"none"})})),B=(0,b.ZP)("div")((function(e){var t=e.theme;return(0,d.Z)({},t.breakpoints.up(t.breakpoints.values.tablet),{display:"none"})})),S=function(){var e=(0,r.I0)(),t=(0,r.v9)(s),n=(0,r.v9)(u).toLowerCase(),a=t.filter((function(e){return e.name.toLowerCase().includes(n)}));return(0,h.jsx)(C,{children:a.map((function(t){var n=t.id,a=t.name,r=t.number;return(0,h.jsx)(w,{children:(0,h.jsxs)(y.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,h.jsxs)("p",{children:[(0,h.jsxs)(P,{children:[a,": "]}),(0,h.jsx)(A,{children:r})]}),(0,h.jsx)(W,{children:(0,h.jsx)(m.Z,{type:"submit",color:"error",variant:"outlined",size:"small",startIcon:(0,h.jsx)(Z.Z,{}),onClick:function(){return e((0,l.GK)(n))},children:"Delete"})}),(0,h.jsx)(B,{children:(0,h.jsx)(j.Z,{type:"submit","aria-label":"delete",color:"error",size:"small",onClick:function(){return e((0,l.GK)(n))},children:(0,h.jsx)(Z.Z,{fontSize:"small"})})})]})},n)}))})},F=n(3839),z=(0,b.ZP)("label")((function(e){var t=e.theme;return(0,d.Z)({display:"flex",flexDirection:"column",padding:t.spacing(2),fontSize:t.spacing(3),textAlign:"center"},t.breakpoints.up(t.breakpoints.values.mobileAdaptive),{fontSize:t.spacing(5)})})),I=(0,b.ZP)("input")((function(e){var t,n=e.theme;return t={minWidth:"150px",borderRadius:n.customBorderRadius.standart,borderColor:"rgb(0 0 0 / 0%)",outline:"none",backgroundColor:n.customColors.addContactsBackgroundAlt},(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.mobileAdaptive),{width:"180px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my1),{width:"220px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my2),{width:"250px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.tablet),{width:"280px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my3),{width:"320px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my4),{width:"370px"}),t})),L=function(){var e=(0,r.I0)(),t=(0,r.v9)(u);return(0,h.jsx)(y.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,h.jsxs)(z,{children:["Find contact by Name",(0,h.jsx)(I,{type:"text",value:t,onChange:function(t){return e((0,F.sP)(t.target.value))}})]})})},N=n(9822),R=function(){return(0,h.jsx)(N.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})},_=n(1662),D=n(5630),G=(0,b.ZP)("div")((function(e){var t=e.theme;return(0,d.Z)({backgroundColor:t.customColors.backgroundAlt,backgroundImage:"url(".concat(D,")"),backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"},t.breakpoints.up(t.breakpoints.values.mobileAdaptive),{display:"flex",justifyContent:"center",backgroundImage:"url(".concat(_,")")})})),K=(0,b.ZP)("section")((function(e){var t,n=e.theme;return t={padding:n.spacing(9,6,2,6)},(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.mobileAdaptive),{padding:n.spacing(6,3),maxWidth:"250px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my2),{maxWidth:"290px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.tablet),{maxWidth:"320px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my3),{maxWidth:"360px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my4),{maxWidth:"410px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.desktop),{maxWidth:"450px"}),t})),q=(0,b.ZP)("section")((function(e){var t,n=e.theme;return t={padding:n.spacing(2,6,10,6)},(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.mobileAdaptive),{padding:n.spacing(6,3),maxWidth:"220px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my1),{maxWidth:"260px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my2),{maxWidth:"290px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.tablet),{maxWidth:"320px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my3),{maxWidth:"360px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my4),{maxWidth:"410px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.desktop),{maxWidth:"450px"}),t})),H=(0,b.ZP)("h2")((function(e){var t=e.theme;return(0,d.Z)({padding:t.spacing(2),textAlign:"center"},t.breakpoints.up(t.breakpoints.values.mobileAdaptive),{padding:t.spacing(4)})}));function M(){var e=(0,r.I0)(),t=(0,r.v9)(p),n=(0,r.v9)(c);return(0,a.useEffect)((function(){e((0,l.yF)())}),[e]),(0,h.jsxs)(G,{children:[(0,h.jsxs)(K,{children:[(0,h.jsx)(H,{children:"Add Contact"}),(0,h.jsx)(g,{})]}),(0,h.jsxs)(q,{children:[(0,h.jsx)(H,{children:"Contacts"}),(0,h.jsx)(L,{}),t&&!n&&(0,h.jsx)(R,{}),(0,h.jsx)(S,{})]})]})}},1662:function(e,t,n){e.exports=n.p+"static/media/old-book.5a16ea53eee4581b7bdc.jpg"},5630:function(e,t,n){e.exports=n.p+"static/media/table_for_menu.1b51566e53f639e46f32.jpg"}}]);
//# sourceMappingURL=760.fad6264c.chunk.js.map