"use strict";(self.webpackChunkhotel_management_admin=self.webpackChunkhotel_management_admin||[]).push([[869],{1893:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(3430),l=t(2791);function a(e,n){var t=(0,l.useState)(null),a=(0,i.Z)(t,2),s=a[0],r=a[1],c=(0,l.useState)(!0),o=(0,i.Z)(c,2),d=o[0],h=o[1],u=(0,l.useState)(null),p=(0,i.Z)(u,2),m=p[0],x=p[1];return(0,l.useEffect)((function(){fetch(e).then((function(e){if(e.status>=400)throw new Error("Server responds with error!");return e.json()})).then((function(e){r(e),h(!1)}),(function(e){h(!1),x(e)}))}),[n]),{data:s,loading:d,error:m}}},7869:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var i=t(5801),l=t(6222),a=t(8489),s=t(3430),r=(t(7392),t(2791)),c=t(1893),o=t(7356),d=t(9126),h=t(184);function u(e){var n=(0,c.Z)("http://localhost:8000/room-types"),t=n.data,i=(n.loading,n.error,["Gi\u1edd","\u0110\xeam","Ng\xe0y"]),d=(0,r.useState)({type:"Nh\u1ecf",method:"Gi\u1edd",early:null,price:null,late:null}),u=(0,s.Z)(d,2),p=u[0],m=u[1];(0,r.useEffect)((function(){e.nameRef.current.focus()}),[]);var x=function(e){m((function(n){return(0,a.Z)((0,a.Z)({},n),{},(0,l.Z)({},e.target.name,e.target.value))}))};return(0,h.jsx)(o.Z,{title:"Th\xeam gi\xe1 ph\xf2ng",setOpen:e.setOpen,body:(0,h.jsxs)("div",{className:"form",children:[(0,h.jsxs)("label",{className:"input",children:["Lo\u1ea1i ph\xf2ng:",(0,h.jsx)("select",{ref:e.nameRef,name:"type",value:p.type,onChange:x,children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,h.jsx)("option",{value:e.name,children:e.name},n)}))})]}),(0,h.jsxs)("label",{className:"input",children:["C\xe1ch t\xednh:",(0,h.jsx)("select",{name:"method",value:p.method,onChange:x,children:null===i||void 0===i?void 0:i.map((function(e,n){return(0,h.jsx)("option",{value:e,children:e},n)}))})]}),"Ng\xe0y"===p.method?(0,h.jsxs)("label",{className:"input",children:["V\xe0o s\u1edbm:",(0,h.jsx)("input",{type:"text",name:"early",value:p.early,placeholder:"Gi\u1edd"===p.method?"1 gi\u1edd \u0111\u1ea7u":null,onChange:x})]}):null,(0,h.jsxs)("label",{className:"input",children:["Gi\xe1 ph\xf2ng:",(0,h.jsx)("input",{type:"text",name:"price",value:p.price,placeholder:"Gi\u1edd"===p.method?"1 gi\u1edd \u0111\u1ea7u":null,onChange:x})]}),(0,h.jsxs)("label",{className:"input",children:["Tr\u1ea3 tr\u1ec5:",(0,h.jsx)("input",{type:"text",name:"late",value:p.late,onChange:x})]})]}),footer:(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("button",{onClick:function(n){n.preventDefault(),fetch("http://localhost:8000/room-prices",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}),e.setOpen((function(e){return(0,a.Z)((0,a.Z)({},e),{},{add:!1})})),e.onLoad()},className:"btn btn-submit",children:"Th\u1ef1c hi\u1ec7n"})})})}function p(e){var n=(0,c.Z)("http://localhost:8000/room-types"),t=n.data,i=(n.loading,n.error,["Gi\u1edd","\u0110\xeam","Ng\xe0y"]),d=(0,r.useState)(e.price),u=(0,s.Z)(d,2),p=u[0],m=u[1];(0,r.useEffect)((function(){e.nameRef.current.focus()}),[]);var x=function(e){m((function(n){return(0,a.Z)((0,a.Z)({},n),{},(0,l.Z)({},e.target.name,e.target.value))}))};return(0,h.jsx)(o.Z,{title:"S\u1eeda gi\xe1 ph\xf2ng",setOpen:e.setOpen,body:(0,h.jsxs)("div",{className:"form",children:[(0,h.jsxs)("label",{className:"input",children:["M\xe3:",(0,h.jsx)("input",{type:"text",name:"id",value:p.id,readOnly:!0})]}),(0,h.jsxs)("label",{className:"input",children:["Lo\u1ea1i ph\xf2ng:",(0,h.jsx)("select",{ref:e.nameRef,name:"type",value:p.type,onChange:x,children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,h.jsx)("option",{value:e.name,children:e.name},n)}))})]}),(0,h.jsxs)("label",{className:"input",children:["C\xe1ch t\xednh:",(0,h.jsx)("select",{name:"method",value:p.method,onChange:x,children:null===i||void 0===i?void 0:i.map((function(e,n){return(0,h.jsx)("option",{value:e,children:e},n)}))})]}),"Ng\xe0y"===p.method?(0,h.jsxs)("label",{className:"input",children:["V\xe0o s\u1edbm:",(0,h.jsx)("input",{type:"text",name:"early",value:p.early,onChange:x})]}):null,(0,h.jsxs)("label",{className:"input",children:["Gi\xe1 ph\xf2ng:",(0,h.jsx)("input",{type:"text",name:"price",value:p.price,placeholder:"Gi\u1edd"===p.method?"1 gi\u1edd \u0111\u1ea7u":null,onChange:x})]}),(0,h.jsxs)("label",{className:"input",children:["Tr\u1ea3 tr\u1ec5:",(0,h.jsx)("input",{type:"text",name:"late",value:p.late,onChange:x})]})]}),footer:(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("button",{onClick:function(n){n.preventDefault(),fetch("http://localhost:8000/room-prices/".concat(p.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}),e.onLoad(),e.setOpen(!1)},className:"btn btn-submit",children:"Th\u1ef1c hi\u1ec7n"})})})}function m(){var e,n=(0,r.useState)(!1),t=(0,s.Z)(n,2),i=t[0],l=t[1],o=(0,c.Z)("http://localhost:8000/room-prices",i),m=o.data,x=o.loading,j=(o.error,(0,r.useState)({add:!1,edit:!1})),f=(0,s.Z)(j,2),g=f[0],v=f[1],y=(0,r.useState)(),b=(0,s.Z)(y,2),N=b[0],Z=b[1],C=(0,r.useRef)(),_=function(){l(!i)};return(0,h.jsxs)("div",{className:"list",children:[(0,h.jsxs)("div",{className:"list__header",children:[(0,h.jsx)("h3",{className:"title list__title",children:"Th\xf4ng tin gi\xe1 ph\xf2ng"}),(0,h.jsx)("button",{className:"btn btn-add",onClick:function(){return v((function(e){return(0,a.Z)((0,a.Z)({},e),{},{add:!0})}))},children:"Th\xeam gi\xe1 ph\xf2ng"}),g.add&&(0,h.jsx)(u,{setOpen:v,nameRef:C,onLoad:_}),g.edit&&(0,h.jsx)(p,{setOpen:v,nameRef:C,onLoad:_,price:N})]}),(0,h.jsxs)("table",{children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Id"}),(0,h.jsx)("th",{children:"Room Type"}),(0,h.jsx)("th",{children:"Method"}),(0,h.jsx)("th",{children:"Early"}),(0,h.jsx)("th",{children:"Price"}),(0,h.jsx)("th",{children:"Late"}),(0,h.jsx)("th",{children:"Edit"}),(0,h.jsx)("th",{children:"Delete"})]})}),(0,h.jsxs)("tbody",{children:[x&&(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:"Loading ... "}),(0,h.jsx)("td",{children:"Loading ... "}),(0,h.jsx)("td",{children:"Loading ... "}),(0,h.jsx)("td",{children:"Loading ... "}),(0,h.jsx)("td",{children:"Loading ... "}),(0,h.jsx)("td",{children:"Loading ... "}),(0,h.jsx)("td",{children:(0,h.jsx)(d.jox,{className:"icon icon__edit"})}),(0,h.jsx)("td",{children:(0,h.jsx)(d.yvY,{className:"icon icon__delete"})})]}),(e=m,null===e||void 0===e?void 0:e.map((function(e){return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e.id}),(0,h.jsx)("td",{children:e.type}),(0,h.jsx)("td",{children:e.method}),(0,h.jsx)("td",{children:e.early}),(0,h.jsx)("td",{children:e.price}),(0,h.jsx)("td",{children:e.late}),(0,h.jsx)("td",{children:(0,h.jsx)(d.jox,{className:"icon icon__edit",onClick:function(){return function(e){var n=null===m||void 0===m?void 0:m.find((function(n){return n.id===e?n:null}));Z(n),v((function(e){return(0,a.Z)((0,a.Z)({},e),{},{edit:!0})}))}(e.id)}})}),(0,h.jsx)("td",{children:(0,h.jsx)(d.yvY,{className:"icon icon__delete",onClick:function(){return n=e.id,fetch("http://localhost:8000/room-prices/".concat(n),{method:"delete"}),void _();var n}})})]},e.id)})))]})]})]})}function x(){return(0,h.jsx)("div",{className:"page",children:(0,h.jsx)(i.Z,{title:"Gi\xe1 ph\xf2ng",body:(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(m,{})})})})}},7392:function(){}}]);
//# sourceMappingURL=869.db350c38.chunk.js.map