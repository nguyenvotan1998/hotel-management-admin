"use strict";(self.webpackChunkhotel_management_admin=self.webpackChunkhotel_management_admin||[]).push([[572],{1893:function(e,n,t){t.d(n,{Z:function(){return i}});var s=t(3430),a=t(2791);function i(e,n){var t=(0,a.useState)(null),i=(0,s.Z)(t,2),r=i[0],l=i[1],d=(0,a.useState)(!0),c=(0,s.Z)(d,2),o=c[0],h=c[1],u=(0,a.useState)(null),x=(0,s.Z)(u,2),j=x[0],m=x[1];return(0,a.useEffect)((function(){fetch(e).then((function(e){if(e.status>=400)throw new Error("Server responds with error!");return e.json()})).then((function(e){l(e),h(!1)}),(function(e){h(!1),m(e)}))}),[n]),{data:r,loading:o,error:j}}},3572:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var s=t(5801),a=t(6222),i=t(8489),r=t(3430),l=t(1893),d=t(9126),c=(t(7392),t(2791)),o=t(7356),h=t(3216),u=t(356),x=t(184);function j(e){var n=(0,c.useState)({name:"",sex:"Male",card:"",phone:"",address:"",birthday:""}),t=(0,r.Z)(n,2),s=t[0],l=t[1];(0,c.useEffect)((function(){e.nameRef.current.focus()}),[]);var d=function(e){l((function(n){return(0,i.Z)((0,i.Z)({},n),{},(0,a.Z)({},e.target.name,e.target.value))}))};return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(o.Z,{title:"Th\xeam kh\xe1ch h\xe0ng",setOpen:e.setOpen,body:(0,x.jsxs)("form",{className:"form",children:[(0,x.jsxs)("label",{className:"input",children:["H\u1ecd v\xe0 t\xean:",(0,x.jsx)("input",{type:"text",ref:e.nameRef,name:"name",value:s.name,onChange:d})]}),(0,x.jsxs)("div",{className:"input radio",children:[(0,x.jsx)("p",{children:"Gi\u1edbi t\xednh"}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("label",{children:["Nam",(0,x.jsx)("input",{type:"radio",name:"sex",value:"Male",onChange:d,defaultChecked:!0})]}),(0,x.jsxs)("label",{children:["N\u1eef",(0,x.jsx)("input",{type:"radio",name:"sex",value:"Female",onChange:d})]})]})]}),(0,x.jsxs)("label",{className:"input",children:["CMND/CCCD:",(0,x.jsx)("input",{type:"text",name:"card",value:s.card,onChange:d})]}),(0,x.jsxs)("label",{className:"input",children:["S\u1ed1 \u0111i\u1ec7n tho\u1ea1i:",(0,x.jsx)("input",{type:"text",name:"phone",value:s.phone,onChange:d})]}),(0,x.jsxs)("label",{className:"input",children:["\u0110\u1ecba ch\u1ec9:",(0,x.jsx)("input",{type:"text",name:"address",value:s.address,onChange:d})]}),(0,x.jsxs)("label",{className:"input",children:["Ng\xe0y sinh:",(0,x.jsx)("input",{type:"text",name:"birthday",value:s.birthday,onChange:d})]})]}),footer:(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("button",{onClick:function(n){n.preventDefault(),fetch("http://localhost:8000/customers",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),e.setOpen((function(e){return(0,i.Z)((0,i.Z)({},e),{},{add:!1})})),e.onLoad()},className:"btn btn-submit",children:"Th\u1ef1c hi\u1ec7n"})})})})}function m(e){var n=(0,c.useState)(e.customer),t=(0,r.Z)(n,2),s=t[0],l=t[1];(0,c.useEffect)((function(){e.nameRef.current.focus()}),[]);var d=function(e){l((function(n){return(0,i.Z)((0,i.Z)({},n),{},(0,a.Z)({},e.target.name,e.target.value))}))};return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(o.Z,{title:"S\u1eeda kh\xe1ch h\xe0ng",setOpen:e.setOpen,body:(0,x.jsxs)("form",{className:"form",children:[(0,x.jsxs)("label",{className:"input",children:["M\xe3 kh\xe1ch h\xe0ng:",(0,x.jsx)("input",{type:"text",name:"id",value:s.id,readOnly:!0})]}),(0,x.jsxs)("label",{className:"input",children:["H\u1ecd v\xe0 t\xean:",(0,x.jsx)("input",{type:"text",ref:e.nameRef,name:"name",value:s.name,onChange:d})]}),(0,x.jsxs)("div",{className:"input radio",children:[(0,x.jsx)("p",{children:"Gi\u1edbi t\xednh"}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("label",{children:["Nam",(0,x.jsx)("input",{type:"radio",name:"sex",value:"Male",onChange:d})]}),(0,x.jsxs)("label",{children:["N\u1eef",(0,x.jsx)("input",{type:"radio",name:"sex",value:"Female",onChange:d})]})]})]}),(0,x.jsxs)("label",{className:"input",children:["CMND/CCCD:",(0,x.jsx)("input",{type:"text",name:"card",value:s.card,onChange:d})]}),(0,x.jsxs)("label",{className:"input",children:["S\u1ed1 \u0111i\u1ec7n tho\u1ea1i:",(0,x.jsx)("input",{type:"text",name:"phone",value:s.phone,onChange:d})]}),(0,x.jsxs)("label",{className:"input",children:["\u0110\u1ecba ch\u1ec9:",(0,x.jsx)("input",{type:"text",name:"address",value:s.address,onChange:d})]}),(0,x.jsxs)("label",{className:"input",children:["Ng\xe0y sinh:",(0,x.jsx)("input",{type:"text",name:"birthday",value:s.birthday,onChange:d})]})]}),footer:(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("button",{onClick:function(n){n.preventDefault(),fetch("http://localhost:8000/customers/".concat(s.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),e.setOpen((function(e){return(0,i.Z)((0,i.Z)({},e),{},{edit:!1})})),e.onLoad()},className:"btn btn-submit",children:"Th\u1ef1c hi\u1ec7n"})})})})}function p(){var e,n=(0,c.useState)(!1),t=(0,r.Z)(n,2),s=t[0],a=t[1],o=(0,l.Z)("http://localhost:8000/customers",s),p=o.data,f=o.loading,g=o.error,v=(0,c.useState)({add:!1,edit:!1,alert:!1}),b=(0,r.Z)(v,2),y=b[0],C=b[1],N=(0,c.useState)(!0),Z=(0,r.Z)(N,2),k=Z[0],S=Z[1],_=(0,c.useState)(),L=(0,r.Z)(_,2),O=L[0],D=L[1],F=(0,c.useRef)(),T=function(e){var n=null===p||void 0===p?void 0:p.find((function(n){return n.id===e?n:null}));D(n),C((function(e){return(0,i.Z)((0,i.Z)({},e),{},{edit:!0})}))},w=function(e){fetch("http://localhost:8000/customers/".concat(e),{method:"delete"}),R()},R=function(){a(!s)},M=function(){S(!1)};return g?(console.log(g),(0,x.jsx)(u.Z,{anchorOrigin:{vertical:"top",horizontal:"center"},open:!0,autoHideDuration:6e3,onClose:function(){},children:(0,x.jsx)(h.Z,{onClose:function(){},severity:"error",sx:{width:"100%"},children:"L\u1ed7i load d\u1eef li\u1ec7u Customer!!!"})})):(0,x.jsxs)("div",{className:"list",children:[(0,x.jsx)(u.Z,{open:k,autoHideDuration:6e3,onClose:M,children:(0,x.jsx)(h.Z,{onClose:M,severity:"error",sx:{width:"100%"},children:"L\u1ed7i load d\u1eef li\u1ec7u!!!"})}),(0,x.jsxs)("div",{className:"list__header",children:[(0,x.jsx)("h3",{className:"title list__title",children:"Th\xf4ng tin kh\xe1ch h\xe0ng"}),(0,x.jsx)("button",{className:"btn btn-add",onClick:function(){return C((function(e){return(0,i.Z)((0,i.Z)({},e),{},{add:!0})}))},children:"Th\xeam kh\xe1ch h\xe0ng"}),y.add&&(0,x.jsx)(j,{setOpen:C,nameRef:F,onLoad:R}),y.edit&&(0,x.jsx)(m,{setOpen:C,nameRef:F,onLoad:R,customer:O})]}),(0,x.jsxs)("table",{className:"customer-list",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"Id"}),(0,x.jsx)("th",{children:"Full Name"}),(0,x.jsx)("th",{children:"Sex"}),(0,x.jsx)("th",{children:"Id card"}),(0,x.jsx)("th",{children:"Phone number"}),(0,x.jsx)("th",{children:"Address"}),(0,x.jsx)("th",{children:"Birthday"}),(0,x.jsx)("th",{children:"Edit"}),(0,x.jsx)("th",{children:"Delete"})]})}),(0,x.jsxs)("tbody",{children:[f&&(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:"Loading ... "}),(0,x.jsx)("td",{children:"Loading ... "}),(0,x.jsx)("td",{children:"Loading ... "}),(0,x.jsx)("td",{children:"Loading ... "}),(0,x.jsx)("td",{children:"Loading ... "}),(0,x.jsx)("td",{children:"Loading ... "}),(0,x.jsx)("td",{children:"Loading ... "}),(0,x.jsx)("td",{children:(0,x.jsx)(d.jox,{className:"icon icon__edit"})}),(0,x.jsx)("td",{children:(0,x.jsx)(d.yvY,{className:"icon icon__delete"})})]}),(e=p,null===e||void 0===e?void 0:e.map((function(e){return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:e.id}),(0,x.jsx)("td",{children:e.name}),(0,x.jsx)("td",{children:e.sex}),(0,x.jsx)("td",{children:e.card}),(0,x.jsx)("td",{children:e.phone}),(0,x.jsx)("td",{children:e.address}),(0,x.jsx)("td",{children:e.birthday}),(0,x.jsx)("td",{children:(0,x.jsx)(d.jox,{className:"icon icon__edit",onClick:function(){return T(e.id)}})}),(0,x.jsx)("td",{children:(0,x.jsx)(d.yvY,{className:"icon icon__delete",onClick:function(){return w(e.id)}})})]},e.id)})))]})]})]})}function f(){return(0,x.jsx)("div",{className:"page",children:(0,x.jsx)(s.Z,{title:"Danh s\xe1ch kh\xe1ch h\xe0ng",body:(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(p,{})})})})}},7392:function(){}}]);
//# sourceMappingURL=572.305f00a6.chunk.js.map