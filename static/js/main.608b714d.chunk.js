(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{10:function(t,e,i){},11:function(t,e,i){},13:function(t,e,i){"use strict";i.r(e);var c=i(1),n=i.n(c),s=i(5),r=i.n(s),a=(i(10),i(11),i(2)),d=i(3),o=[{id:1,title:"Samsung f41",description:"Black in colour",price:"22000rs",img:"https://th.bing.com/th/id/OIP.2ymi9DpVWtbvdpr4FcTQ8AFNC7?w=182&h=102&c=7&r=0&o=5&dpr=1.25&pid=1.7",amount:1},{id:2,title:"Samsung PNG",description:"Blue in colour",price:"11000rs",img:"https://tse1.mm.bing.net/th?id=OIP.1RIqo97EXwhTSVuTmKgyiwHaFo&pid=Api&P=0&w=220&h=168",amount:2},{id:3,title:"Graphics",description:"Blue in colour",price:"13000rs",img:"https://tse4.mm.bing.net/th?id=OIP.D7Pih584vdDEUVLZ8-sgtgHaF7&pid=Api&P=0&w=205&h=165 width=30px ",amount:1},{id:4,title:"Transparent PNG",description:"Skyblue in colour",price:"20000rs",img:"https://tse2.mm.bing.net/th?id=OIP.Vfqw2o5Eot-aLfhz5AKzowHaGD&pid=Api&P=0&w=194&h=159",amount:1},{id:5,title:"Blackberry",description:"Black in colour",price:"22000rs",img:"https://tse3.mm.bing.net/th?id=OIP.s-409HxTSfj1J315z2c91AAAAA&pid=Api&P=0&w=300&h=300",amount:1},{id:6,title:"Jio",description:"Black in colour",price:"1000rs",img:"https://tse1.mm.bing.net/th?id=OIP.sFDPtu-6j1lLBJctmk3P9wHaF7&pid=Api&P=0&w=190&h=153",amount:1},{id:7,title:"Armour shield",description:"Black in colour",price:"12000rs",img:"https://th.bing.com/th/id/OIP.2ymi9DpVWtbvdpr4FcTQ8AFNC7?w=182&h=102&c=7&r=0&o=5&dpr=1.25&pid=1.7",amount:1}],j=function(t,e){return"REMOVE_ITEM"===e.type?Object(a.a)(Object(a.a)({},t),{},{item:t.item.filter((function(t){return t.id!==e.payload}))}):t},l=i(0),m=function(t){var e=t.id,i=t.description,n=t.price,s=t.img,r=(t.amount,t.title),a=Object(c.useContext)(p);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"firstdiv",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:s,alt:"Cellphone Img"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:r}),Object(l.jsx)("p",{children:i})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("i",{className:"fas fa-minus"}),Object(l.jsx)("input",{type:"number"}),Object(l.jsx)("i",{className:"fas fa-plus"})]}),Object(l.jsx)("div",{children:n}),Object(l.jsx)("div",{children:Object(l.jsx)("i",{className:"fas fa-trash-alt",onClick:function(){return a(e)}})})]}),Object(l.jsx)("hr",{})]})},h=function(){var t=Object(c.useState)(o),e=Object(d.a)(t,2),i=e[0];e[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"Header",children:[Object(l.jsx)("i",{className:"fas fa-arrow-left "}),Object(l.jsx)("h1",{children:"E-Commerce"})]}),",",Object(l.jsxs)("div",{className:"shopcartdiv",children:[Object(l.jsx)("h3",{children:"Shopping Cart"}),Object(l.jsxs)("p",{children:["You have ",Object(l.jsx)("spam",{children:"7"})," items in shopping cart"]})]}),Object(l.jsxs)("div",{className:"maincont",children:[i.map((function(t){return Object(l.jsx)(m,Object(a.a)({},t),t.id)})),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h4",{className:"total",children:["Cart Total: ",Object(l.jsx)("spam",{children:"2200000Rs"})]}),Object(l.jsx)("button",{children:"Checkout"})]})]})]})},p=Object(c.createContext)(),u={item:o,totalAmount:0,totalItem:0},b=function(){var t=Object(c.useReducer)(j,u),e=Object(d.a)(t,2),i=e[0],n=e[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(p.Provider,{vaule:Object(a.a)(Object(a.a)({},i),{},{removeItem:function(t){return n({type:"REMOVE_ITEM",payload:t})}}),children:Object(l.jsx)(h,{})})})};var O=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(b,{})})},x=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,14)).then((function(e){var i=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,r=e.getTTFB;i(t),c(t),n(t),s(t),r(t)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),x()}},[[13,1,2]]]);
//# sourceMappingURL=main.608b714d.chunk.js.map