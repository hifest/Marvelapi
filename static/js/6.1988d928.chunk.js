(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{21:function(e,t,c){"use strict";var n=c.p+"static/media/error.42292aa1.gif",r=c(0);t.a=function(){return Object(r.jsx)("img",{src:n,style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"}})}},22:function(e,t,c){"use strict";var n=c(23),r=c.n(n),a=c(24),i=c(4),s=c(1);t.a=function(){var e=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],o=Object(s.useState)(null),u=Object(i.a)(o,2),l=u[0],p=u[1],m=Object(s.useCallback)(function(){var e=Object(a.a)(r.a.mark((function e(t){var c,a,i,s,o,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,i=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},n(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:a,headers:i});case 7:return s=e.sent,e.next=10,s.json();case 10:return o=e.sent,n(!1),e.abrupt("return",o);case 15:throw e.prev=15,e.t0=e.catch(4),n(!1),p(e.t0.message),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:c,error:l,clearError:Object(s.useCallback)((function(){p(null)}),[]),request:m}}(),t=e.loading,c=e.error,n=e.clearError,o=e.request,u="https://gateway.marvel.com:443/v1/public/",l="apikey=0803ac54e9aa8cbbe036f1c7b3b3d1c0",p=210,m=function(){var e=Object(a.a)(r.a.mark((function e(){var t,c,n=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:p,e.next=3,o("".concat(u,"characters?limit=9&offset=").concat(t,"&").concat(l));case 3:return c=e.sent,e.abrupt("return",c.data.results.map(h));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("".concat(u,"characters/").concat(t,"?").concat(l));case 2:return c=e.sent,e.abrupt("return",h(c.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(r.a.mark((function e(){var t,c,n=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:p,e.next=3,o("".concat(u,"comics?limit=8&offset=").concat(t,"&").concat(l));case 3:return c=e.sent,e.abrupt("return",c.data.results.map(j));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o("".concat(u,"comics/").concat(t,"?").concat(l));case 2:return c=e.sent,e.abrupt("return",j(c.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){return{id:e.id,name:e.name,descr:e.description?e.description.slice(0,220)+"...":"description not found",homepage:e.urls[0].url,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,wiki:e.urls[1].url,comics:e.comics.items?e.comics.items.slice(0,9):"comics not found"}},j=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices[0].price?e.prices[0].price:"not pricing",url:e.urls[0].url}};return{loading:t,error:c,getAllCharactres:m,getCharacter:b,clearError:n,getAllComics:d,getComic:f}}},40:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(4),r=(c(40),c(2)),a=c(6),i=c(21),s=c(10),o=c(1),u=c(45),l=c(22),p=c(0),m=function(e){var t=e.comic,c=e.load,n=e.setLoad,r=t.title,i=t.description,s=t.pageCount,o=t.thumbnail,l=t.language,m=t.price;return Object(p.jsx)(u.a,{timeout:500,classNames:"my-comic",in:c,children:Object(p.jsxs)("div",{className:"single-comic",children:[Object(p.jsx)("img",{src:o,alt:"x-men",className:"single-comic__img"}),Object(p.jsxs)("div",{className:"single-comic__info",children:[Object(p.jsx)("h2",{className:"single-comic__name",children:r}),Object(p.jsx)("p",{className:"single-comic__descr",children:i}),Object(p.jsxs)("p",{className:"single-comic__descr",children:[s," pages"]}),Object(p.jsxs)("p",{className:"single-comic__descr",children:["Language: ",l]}),Object(p.jsxs)("div",{className:"single-comic__price",children:[m,"$"]})]}),Object(p.jsx)(a.b,{to:"/Marvelapi/comics",className:"single-comic__back",onClick:function(){return n(!1)},children:"Back to all!"})]})})};t.default=function(){var e=Object(r.g)().comicID,t=Object(o.useState)(null),c=Object(n.a)(t,2),a=c[0],u=c[1],b=Object(l.a)(),d=b.loading,f=b.error,h=b.getComic,j=b.clearError,g=Object(o.useState)(!1),v=Object(n.a)(g,2),O=v[0],x=v[1];Object(o.useEffect)((function(){w()}),[e]);var w=function(){j(),h(e).then(_)},_=function(e){u(e),x(!0)},k=f?Object(p.jsx)(i.a,{}):null,C=d?Object(p.jsx)(s.a,{}):null,y=d||f||!a?null:Object(p.jsx)(m,{comic:a,load:O,setLoad:x});return Object(p.jsxs)(p.Fragment,{children:[k,C,y]})}}}]);
//# sourceMappingURL=6.1988d928.chunk.js.map