(this.webpackJsonpto_do_list_project_in_react=this.webpackJsonpto_do_list_project_in_react||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(6),r=n.n(i),s=(n(12),n(7)),j=n(5),o=(n(13),n(0)),a=function(t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"todo_style",children:[Object(o.jsx)("i",{class:"fa fa-times","aria-hidden":"true",onClick:function(){t.onSelect(t.id)}}),Object(o.jsx)("li",{children:t.text})]})})},l=function(){var t=Object(c.useState)(""),e=Object(j.a)(t,2),n=e[0],i=e[1],r=Object(c.useState)([]),l=Object(j.a)(r,2),u=l[0],d=l[1],b=function(t){d((function(e){return e.filter((function(e,n){return n!==t}))}))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"main_div",children:Object(o.jsxs)("div",{className:"center_div",children:[Object(o.jsx)("br",{}),Object(o.jsx)("h1",{children:"To Do List"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",placeholder:"Add A Item",value:n,onChange:function(t){i(t.target.value)}}),Object(o.jsx)("button",{onClick:function(){d((function(t){return[].concat(Object(s.a)(t),[n])})),i("")},children:" + "}),Object(o.jsx)("ol",{children:u.map((function(t,e){return Object(o.jsx)(a,{id:e,text:t,onSelect:b},e)}))})]})})})};r.a.render(Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(l,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f7529c99.chunk.js.map