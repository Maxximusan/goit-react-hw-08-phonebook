"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[84],{8410:function(e,t,n){n.d(t,{G:function(){return l},n:function(){return s}});var r=n(6727),o=/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,a=/^[ A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\s*?$/i,i=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,l=r.Ry().shape({username:r.Z_().min(3).matches(o,"Name is not valid").required("Please Enter your name"),email:r.Z_().email().matches(a,"Email is not valid").required("Please Enter your email"),password:r.Z_().min(6).max(16).matches(i,"Must Contain 6 Characters, One Uppercase, One Lowercase, One Number").required("Please Enter your password")}),s=r.Ry().shape({email:r.Z_().email().matches(a,"Email is not valid").required("Please Enter your email"),password:r.Z_().min(6).max(16).required("Please Enter your password")})},8084:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var r=n(4165),o=n(5861),a=n(9439),i=n(2791),l=n(4942),s=n(3366),c=n(7462),d=n(3733),u=n(838),m=n(3616),p=n(3685),h=n(1046),v=n(4036),f=n(5527),g=n(9703),Z=n(4657);function x(e){return(0,Z.ZP)("MuiAlert",e)}var w=(0,g.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),j=n(3400),A=n(6189),C=n(184),y=(0,A.Z)((0,C.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),P=(0,A.Z)((0,C.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),S=(0,A.Z)((0,C.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),M=(0,A.Z)((0,C.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),b=(0,A.Z)((0,C.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),z=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],L=(0,p.ZP)(f.Z,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat((0,v.Z)(n.color||n.severity))]]}})((function(e){var t=e.theme,n=e.ownerState,r="light"===t.palette.mode?m._j:m.$n,o="light"===t.palette.mode?m.$n:m._j,a=n.color||n.severity;return(0,c.Z)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},a&&"standard"===n.variant&&(0,l.Z)({color:t.vars?t.vars.palette.Alert["".concat(a,"Color")]:r(t.palette[a].light,.6),backgroundColor:t.vars?t.vars.palette.Alert["".concat(a,"StandardBg")]:o(t.palette[a].light,.9)},"& .".concat(w.icon),t.vars?{color:t.vars.palette.Alert["".concat(a,"IconColor")]}:{color:t.palette[a].main}),a&&"outlined"===n.variant&&(0,l.Z)({color:t.vars?t.vars.palette.Alert["".concat(a,"Color")]:r(t.palette[a].light,.6),border:"1px solid ".concat((t.vars||t).palette[a].light)},"& .".concat(w.icon),t.vars?{color:t.vars.palette.Alert["".concat(a,"IconColor")]}:{color:t.palette[a].main}),a&&"filled"===n.variant&&(0,c.Z)({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert["".concat(a,"FilledColor")],backgroundColor:t.vars.palette.Alert["".concat(a,"FilledBg")]}:{backgroundColor:"dark"===t.palette.mode?t.palette[a].dark:t.palette[a].main,color:t.palette.getContrastText(t.palette[a].main)}))})),k=(0,p.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),B=(0,p.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0",minWidth:0,overflow:"auto"}),I=(0,p.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),E={success:(0,C.jsx)(y,{fontSize:"inherit"}),warning:(0,C.jsx)(P,{fontSize:"inherit"}),error:(0,C.jsx)(S,{fontSize:"inherit"}),info:(0,C.jsx)(M,{fontSize:"inherit"})},R=i.forwardRef((function(e,t){var n,r,o,a,i,l,m=(0,h.Z)({props:e,name:"MuiAlert"}),p=m.action,f=m.children,g=m.className,Z=m.closeText,w=void 0===Z?"Close":Z,A=m.color,y=m.components,P=void 0===y?{}:y,S=m.componentsProps,M=void 0===S?{}:S,R=m.icon,W=m.iconMapping,_=void 0===W?E:W,N=m.onClose,O=m.role,F=void 0===O?"alert":O,H=m.severity,T=void 0===H?"success":H,q=m.slotProps,V=void 0===q?{}:q,$=m.slots,D=void 0===$?{}:$,U=m.variant,G=void 0===U?"standard":U,K=(0,s.Z)(m,z),J=(0,c.Z)({},m,{color:A,severity:T,variant:G}),Q=function(e){var t=e.variant,n=e.color,r=e.severity,o=e.classes,a={root:["root","".concat(t).concat((0,v.Z)(n||r)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return(0,u.Z)(a,x,o)}(J),X=null!=(n=null!=(r=D.closeButton)?r:P.CloseButton)?n:j.Z,Y=null!=(o=null!=(a=D.closeIcon)?a:P.CloseIcon)?o:b,ee=null!=(i=V.closeButton)?i:M.closeButton,te=null!=(l=V.closeIcon)?l:M.closeIcon;return(0,C.jsxs)(L,(0,c.Z)({role:F,elevation:0,ownerState:J,className:(0,d.Z)(Q.root,g),ref:t},K,{children:[!1!==R?(0,C.jsx)(k,{ownerState:J,className:Q.icon,children:R||_[T]||E[T]}):null,(0,C.jsx)(B,{ownerState:J,className:Q.message,children:f}),null!=p?(0,C.jsx)(I,{ownerState:J,className:Q.action,children:p}):null,null==p&&N?(0,C.jsx)(I,{ownerState:J,className:Q.action,children:(0,C.jsx)(X,(0,c.Z)({size:"small","aria-label":w,title:w,color:"inherit",onClick:N},ee,{children:(0,C.jsx)(Y,(0,c.Z)({fontSize:"small"},te))}))}):null]}))})),W=n(4613),_=n(8029),N=n(6126),O=n(7071),F=n(9569),H=n(3710),T=n(4294),q=n(5705),V=n(9434),$=n(3660),D=n(8410),U=n(697),G=n(9874),K=n(8096),J=n(1087),Q=(0,p.ZP)(f.Z)((function(e){var t=e.theme;return{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"500px",margin:t.spacing(0,"auto"),padding:t.spacing(8,0)}})),X=(0,p.ZP)(U.Z)((function(e){return{textAlign:"center",marginBottom:e.theme.spacing(8)}})),Y=(0,p.ZP)("h2")((function(e){var t=e.theme;return{fontWeight:t.customFontWeight.extraLight,fontFamily:t.customFontFamily.authTittle}})),ee=(0,p.ZP)("form")((function(e){e.theme;return{maxWidth:"320px"}})),te=(0,p.ZP)(G.Z)((function(e){return{width:"100%",marginBottom:e.theme.spacing(7)}})),ne=(0,p.ZP)(K.Z)((function(e){return{width:"100%",marginBottom:e.theme.spacing(7)}})),re=(0,p.ZP)("p")((function(e){return{textAlign:"center",marginTop:e.theme.spacing(8)}})),oe=(0,p.ZP)(J.rU)((function(e){return{color:e.theme.customColors.authLink}})),ae=function(){var e=i.useState(!1),t=(0,a.Z)(e,2),n=t[0],l=t[1],s=i.useState(null),c=(0,a.Z)(s,2),d=c[0],u=c[1],m=(0,V.I0)(),p=(0,q.TA)({initialValues:{email:"",password:""},validationSchema:D.n,onSubmit:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m((0,$.Ib)({email:t.email,password:t.password}));case 2:"auth/login/fulfilled"===(n=e.sent).type?p.resetForm():"auth/login/rejected"===n.type&&u("We have not found user for this email/password");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});return(0,C.jsxs)(Q,{elevation:1,children:[(0,C.jsxs)(X,{children:[(0,C.jsx)(Y,{children:"Login to PHONEBOOK"}),d&&(0,C.jsx)(R,{variant:"outlined",severity:"error",children:d})]}),(0,C.jsxs)(ee,{autoComplete:"off",onSubmit:p.handleSubmit,children:[(0,C.jsx)(te,{type:"email",name:"email",id:"email",label:"email",value:p.values.email,onChange:p.handleChange,onBlur:p.handleBlur,error:p.touched.email&&Boolean(p.errors.email),helperText:p.touched.email&&p.errors.email}),(0,C.jsxs)(ne,{variant:"outlined",error:p.touched.password&&Boolean(p.errors.password),children:[(0,C.jsx)(W.Z,{htmlFor:"outlined-adornment-password",children:"Password"}),(0,C.jsx)(_.Z,{id:"outlined-adornment-password",type:n?"text":"password",name:"password",label:"Password",value:p.values.password,onChange:p.handleChange,onBlur:p.handleBlur,endAdornment:(0,C.jsx)(N.Z,{position:"end",children:(0,C.jsx)(j.Z,{"aria-label":"toggle password visibility",onClick:function(){return l((function(e){return!e}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:n?(0,C.jsx)(F.Z,{}):(0,C.jsx)(H.Z,{})})})}),(0,C.jsx)(O.Z,{id:"password",children:p.touched.password&&p.errors.password})]}),(0,C.jsx)(T.Z,{type:"submit",color:"primary",variant:"contained",fullWidth:!0,children:"Log In"})]}),(0,C.jsxs)(re,{children:["Haven't had an account yet?   ",(0,C.jsx)(oe,{to:"/register",children:"Register"})]})]})};function ie(){return(0,C.jsxs)("section",{children:[(0,C.jsx)("title",{children:"Login"}),(0,C.jsx)(ae,{})]})}}}]);
//# sourceMappingURL=84.f71d26fb.chunk.js.map