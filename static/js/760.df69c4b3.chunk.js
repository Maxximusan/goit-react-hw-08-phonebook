"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[760],{4760:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var a=n(2791),r=n(9434),o=n(9439),i=n(5984),s=function(e){return e.contacts.contacts},u=function(e){return e.filter},p=function(e){return e.contacts.isLoading},c=function(e){return e.contacts.error},l=n(8115),d=n(4942),m=n(3685),b=n(4294),x=(0,m.ZP)("form")((function(e){return{display:"flex",flexDirection:"column",alignItems:"center",padding:e.theme.spacing(2),border:"none"}})),k=(0,m.ZP)("label")((function(e){return{display:"flex",flexDirection:"column",marginBottom:e.theme.spacing(6)}})),h=(0,m.ZP)("input")((function(e){var t,n=e.theme;return t={minWidth:"150px",borderRadius:n.customBorderRadius.standart,borderColor:"rgb(0 0 0 / 0%)",outline:"none",backgroundColor:n.customColors.addContactsBackgroundAlt},(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.mobileAdaptive),{width:"180px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my1),{width:"220px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my2),{width:"250px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.tablet),{width:"280px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my3),{width:"320px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my4),{width:"370px"}),t})),f=(0,m.ZP)(b.Z)((function(e){var t=e.theme;return{color:t.customColors.test,backgroundColor:t.customColors.addBtnBackground,borderRadius:t.customBorderRadius.secondary,"&:hover":{backgroundColor:t.customColors.addBtnHover},"&:focus":{backgroundColor:t.customColors.addBtnHover}}})),v=n(184),g=function(){var e=(0,r.I0)(),t=(0,r.v9)(s),n=(0,a.useState)(""),u=(0,o.Z)(n,2),p=u[0],c=u[1],d=(0,a.useState)(""),m=(0,o.Z)(d,2),b=m[0],g=m[1],Z=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":g(a);break;default:return}},y=(0,i.x0)(),j=(0,i.x0)();return(0,v.jsxs)(x,{onSubmit:function(n){n.preventDefault(),function(n){var a=n.name,r=n.number,o={id:(0,i.x0)(),name:a,number:r};t.find((function(e){return e.name===o.name}))?alert("".concat(a," is already in the contacts")):e((0,l.uK)(o))}({name:p,number:b}),c(""),g("")},children:[(0,v.jsxs)(k,{htmlFor:y,children:["Name:",(0,v.jsx)(h,{id:y,value:p,onChange:Z,name:"name",type:"text",required:!0})]}),(0,v.jsxs)(k,{htmlFor:j,children:["Number:",(0,v.jsx)(h,{id:j,value:b,onChange:Z,name:"number",type:"tel",required:!0})]}),(0,v.jsx)(f,{type:"submit",children:"Add contact"})]})},Z=n(7247),y=n(697),j=n(3400),C=(0,m.ZP)("ol")((function(e){return{paddingLeft:e.theme.spacing(8)}})),w=(0,m.ZP)("li")((function(e){var t=e.theme;return(0,d.Z)({padding:t.spacing(1)},t.breakpoints.down(t.breakpoints.values.tablet),{fontSize:t.spacing(3)})})),P=(0,m.ZP)("span")((function(e){var t=e.theme;return{color:t.customColors.contactName,fontFamily:t.customFontFamily.contactName}})),W=(0,m.ZP)("span")((function(e){var t=e.theme;return{color:t.customColors.contactNumber,fontFamily:t.customFontFamily.contactNumber}})),A=(0,m.ZP)("div")((function(e){var t=e.theme;return(0,d.Z)({},t.breakpoints.down(t.breakpoints.values.tablet),{display:"none"})})),B=(0,m.ZP)("div")((function(e){var t=e.theme;return(0,d.Z)({},t.breakpoints.up(t.breakpoints.values.tablet),{display:"none"})})),F=function(){var e=(0,r.I0)(),t=(0,r.v9)(s),n=(0,r.v9)(u).toLowerCase(),a=t.filter((function(e){return e.name.toLowerCase().includes(n)}));return(0,v.jsx)(C,{children:a.map((function(t){var n=t.id,a=t.name,r=t.number;return(0,v.jsx)(w,{children:(0,v.jsxs)(y.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,v.jsxs)("p",{children:[(0,v.jsxs)(P,{children:[a,": "]}),(0,v.jsx)(W,{children:r})]}),(0,v.jsx)(A,{children:(0,v.jsx)(b.Z,{type:"submit",color:"error",variant:"outlined",size:"small",startIcon:(0,v.jsx)(Z.Z,{}),onClick:function(){return e((0,l.GK)(n))},children:"Delete"})}),(0,v.jsx)(B,{children:(0,v.jsx)(j.Z,{type:"submit","aria-label":"delete",color:"error",size:"small",onClick:function(){return e((0,l.GK)(n))},children:(0,v.jsx)(Z.Z,{fontSize:"small"})})})]})},n)}))})},I=n(3839),N=(0,m.ZP)("label")((function(e){return{display:"flex",flexDirection:"column",padding:e.theme.spacing(2)}})),R=(0,m.ZP)("input")((function(e){var t,n=e.theme;return t={minWidth:"150px",borderRadius:n.customBorderRadius.standart,borderColor:"rgb(0 0 0 / 0%)",outline:"none",backgroundColor:n.customColors.addContactsBackgroundAlt},(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.mobileAdaptive),{width:"180px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my1),{width:"220px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my2),{width:"250px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.tablet),{width:"280px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my3),{width:"320px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my4),{width:"370px"}),t})),S=function(){var e=(0,r.I0)(),t=(0,r.v9)(u);return(0,v.jsx)(y.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,v.jsxs)(N,{children:["Find contact by Name",(0,v.jsx)(R,{type:"text",value:t,onChange:function(t){return e((0,I.sP)(t.target.value))}})]})})},z=n(9822),D=function(){return(0,v.jsx)(z.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})},L=n(1662),G=(0,m.ZP)("div")((function(e){return{display:"flex",justifyContent:"center",backgroundColor:e.theme.customColors.backgroundAlt,backgroundImage:"url(".concat(L,")"),backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}})),_=(0,m.ZP)("section")((function(e){var t,n=e.theme;return t={padding:n.spacing(6)},(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.mobileAdaptive),{padding:n.spacing(6,3),maxWidth:"250px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my2),{maxWidth:"290px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.tablet),{maxWidth:"320px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my3),{maxWidth:"360px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my4),{maxWidth:"410px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.desktop),{maxWidth:"450px"}),t})),K=(0,m.ZP)("section")((function(e){var t,n=e.theme;return t={padding:n.spacing(6)},(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.mobileAdaptive),{padding:n.spacing(6,3),maxWidth:"220px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my1),{maxWidth:"260px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my2),{maxWidth:"290px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.tablet),{maxWidth:"320px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my3),{maxWidth:"360px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.my4),{maxWidth:"410px"}),(0,d.Z)(t,n.breakpoints.up(n.breakpoints.values.desktop),{maxWidth:"450px"}),t})),q=(0,m.ZP)("h2")((function(e){return{padding:e.theme.spacing(4),textAlign:"center"}}));function H(){var e=(0,r.I0)(),t=(0,r.v9)(p),n=(0,r.v9)(c);return(0,a.useEffect)((function(){e((0,l.yF)())}),[e]),(0,v.jsxs)(G,{children:[(0,v.jsxs)(_,{children:[(0,v.jsx)(q,{children:"Add Contact"}),(0,v.jsx)(g,{})]}),(0,v.jsxs)(K,{children:[(0,v.jsx)(q,{children:"Contacts"}),(0,v.jsx)(S,{}),t&&!n&&(0,v.jsx)(D,{}),(0,v.jsx)(F,{})]})]})}},1662:function(e,t,n){e.exports=n.p+"static/media/old-book.5a16ea53eee4581b7bdc.jpg"}}]);
//# sourceMappingURL=760.df69c4b3.chunk.js.map