(this["webpackJsonpmessage-board"]=this["webpackJsonpmessage-board"]||[]).push([[0],{16:function(e,a,t){e.exports=t(35)},21:function(e,a,t){},22:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(15),s=t.n(c),o=(t(21),t(22),t(11)),l=t(8),m=t(7),i=t(9),u=t.n(i);u.a.initializeApp({apiKey:"AIzaSyDvnNsNfAFLPvjEpWTHBkNwh3UkD2qeIP0",authDomain:"message-board01.firebaseapp.com",databaseURL:"https://message-board01.firebaseio.com",projectId:"message-board01",storageBucket:"message-board01.appspot.com",messagingSenderId:"557293432286",appId:"1:557293432286:web:3e1cd831602fd6c812414f"});u.a.auth;var d=u.a.firestore(),p=(u.a.storage().ref(),t(33),function(){var e=Object(n.useState)({username:"",title:"",data:""}),a=Object(m.a)(e,2),t=a[0],c=a[1],s=t.username,i=t.title,u=t.data,p=function(e){c(Object(l.a)(Object(l.a)({},t),{},Object(o.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{className:"message-form",onSubmit:function(e){e.preventDefault(),s.length&&i.length&&u.length&&d.collection("messages").add({title:i,username:s,time:Date.now(),data:u}),c({username:"",title:"",data:""})}},r.a.createElement("label",{htmlFor:"username"},"Nom d'utilisateur"),r.a.createElement("input",{type:"text",name:"username",placeholder:"\xc9crire ici",value:s,onChange:p}),r.a.createElement("label",{htmlFor:"title"},"Titre du message"),r.a.createElement("input",{type:"text",name:"title",placeholder:"\xc9crire ici",value:i,onChange:p}),r.a.createElement("label",{htmlFor:"data"},"Texte"),r.a.createElement("textarea",{type:"text",name:"data",placeholder:"\xc9crire ici",value:u,onChange:p}),r.a.createElement("button",{type:"submit"},"Envoyer"))}),g=(t(34),function(e){var a=e.username,t=e.title,c=e.data,s=e.id,o=e.time,l=Object(n.useState)({date:"",heure:""}),i=Object(m.a)(l,2),u=i[0],d=i[1],p=u.date,g=u.heure;return Object(n.useEffect)((function(){var e=new Date(o),a=e.getDate().format(),t=["Jan","Fev","Mar","Avr","Mai","Jui","Jul","Aou","Sep","Oct","Nov","Dec"][e.getMonth()],n=e.getFullYear(),r=e.getHours().format(),c=e.getMinutes().format();d({date:"".concat(a," ").concat(t," ").concat(n),heure:"".concat(r,":").concat(c)})}),[]),Number.prototype.format=function(){return("0"+this).slice(-2)},r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{key:s,className:"message"},r.a.createElement("span",{className:"message-bandeau"},r.a.createElement("p",null,"Titre : ",t),r.a.createElement("span",{className:"message-close"},"X")),r.a.createElement("p",{className:"message-meta"},"Post\xe9 le ",p," \xe0 ",g," par ",a),r.a.createElement("span",{className:"message-separator"}),r.a.createElement("p",{className:"message-text"},c)))}),f=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){d.collection("messages").onSnapshot((function(e){var a=[];e.forEach((function(e){var t=e.id;a.push(Object(l.a)(Object(l.a)({},e.data()),{},{id:t}))})),c(a)}))}),[]),r.a.createElement("section",{className:"messages-list"},r.a.createElement("ul",null,t.map((function(e){var a=e.username,t=e.title,n=e.data,c=e.id,s=e.time;return r.a.createElement(g,{username:a,title:t,data:n,id:c,time:s})}))))};var h=function(){return r.a.createElement("section",{className:"App"},r.a.createElement("h1",null,"Message Board"),r.a.createElement(p,null),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(h,null),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.e7b53544.chunk.js.map