(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[7],{208:function(t,e,n){},213:function(t,e,n){"use strict";var r=n(41),c=n(5);var a=n(50),i=(n(42),n(1)),o=n.n(i),u=n(52);function s(t,e){var n=Object.create(null);return t&&i.Children.map(t,(function(t){return t})).forEach((function(t){n[t.key]=function(t){return e&&Object(i.isValidElement)(t)?e(t):t}(t)})),n}function l(t,e,n){return null!=n[e]?n[e]:t.props[e]}function p(t,e,n){var r=s(t.children),c=function(t,e){function n(n){return n in e?e[n]:t[n]}t=t||{},e=e||{};var r,c=Object.create(null),a=[];for(var i in t)i in e?a.length&&(c[i]=a,a=[]):a.push(i);var o={};for(var u in e){if(c[u])for(r=0;r<c[u].length;r++){var s=c[u][r];o[c[u][r]]=n(s)}o[u]=n(u)}for(r=0;r<a.length;r++)o[a[r]]=n(a[r]);return o}(e,r);return Object.keys(c).forEach((function(a){var o=c[a];if(Object(i.isValidElement)(o)){var u=a in e,s=a in r,p=e[a],d=Object(i.isValidElement)(p)&&!p.props.in;!s||u&&!d?s||!u||d?s&&u&&Object(i.isValidElement)(p)&&(c[a]=Object(i.cloneElement)(o,{onExited:n.bind(null,o),in:p.props.in,exit:l(o,"exit",t),enter:l(o,"enter",t)})):c[a]=Object(i.cloneElement)(o,{in:!1}):c[a]=Object(i.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:l(o,"exit",t),enter:l(o,"enter",t)})}})),c}var d=Object.values||function(t){return Object.keys(t).map((function(e){return t[e]}))},f=function(t){function e(e,n){var r,c=(r=t.call(this,e,n)||this).handleExited.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(r));return r.state={contextValue:{isMounting:!0},handleExited:c,firstRender:!0},r}Object(a.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(t,e){var n,r,c=e.children,a=e.handleExited;return{children:e.firstRender?(n=t,r=a,s(n.children,(function(t){return Object(i.cloneElement)(t,{onExited:r.bind(null,t),in:!0,appear:l(t,"appear",n),enter:l(t,"enter",n),exit:l(t,"exit",n)})}))):p(t,c,a),firstRender:!1}},n.handleExited=function(t,e){var n=s(this.props.children);t.key in n||(t.props.onExited&&t.props.onExited(e),this.mounted&&this.setState((function(e){var n=Object(c.a)({},e.children);return delete n[t.key],{children:n}})))},n.render=function(){var t=this.props,e=t.component,n=t.childFactory,c=Object(r.a)(t,["component","childFactory"]),a=this.state.contextValue,i=d(this.state.children).map(n);return delete c.appear,delete c.enter,delete c.exit,null===e?o.a.createElement(u.a.Provider,{value:a},i):o.a.createElement(u.a.Provider,{value:a},o.a.createElement(e,c,i))},e}(o.a.Component);f.propTypes={},f.defaultProps={component:"div",childFactory:function(t){return t}};e.a=f},219:function(t,e,n){"use strict";n.r(e);var r=n(36),c=n(4),a=(n(208),n(28)),i=n(1),o=n(6),u=n(10),s=n(26),l=n(218),p=n(213),d=n(0),f=function(){var t=Object(i.useState)([]),e=Object(c.a)(t,2),n=e[0],f=e[1],b=Object(i.useState)(7891),m=Object(c.a)(b,2),h=m[0],j=m[1],v=Object(i.useState)(!1),O=Object(c.a)(v,2),x=(O[0],O[1]),g=Object(i.useState)(!1),y=Object(c.a)(g,2),E=y[0],w=y[1],k=Object(a.a)(),_=k.loading,C=k.error,S=(k.clearError,k.getAllComics);Object(i.useEffect)((function(){N(h,!0)}),[]);var N=function(t,e){x(!e),S(t).then(V)},V=function(t){var e=!1;t.length<8&&(e=!0),f([].concat(Object(r.a)(n),Object(r.a)(t))),j((function(t){return t+8})),w(e)};var A=function(t){var e=t.map((function(t,e){return Object(d.jsx)(l.a,{timeout:500,classNames:"my-node",children:Object(d.jsx)("li",{className:"comics__item",children:Object(d.jsxs)(o.b,{to:"/Marvelapi/comics/".concat(t.id),children:[Object(d.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),Object(d.jsx)("div",{className:"comics__item-name",children:t.title}),Object(d.jsxs)("div",{className:"comics__item-price",children:[t.price,"$"]})]})},t.id)})}));return Object(d.jsx)("ul",{className:"comics__grid",children:Object(d.jsx)(p.a,{component:null,children:e})})}(n),F=C?Object(d.jsx)(s.a,{}):null,T=_?Object(d.jsx)(u.a,{}):null;return Object(d.jsxs)("div",{className:"comics__list",children:[A,T,F,Object(d.jsx)("button",{onClick:function(){return N(h)},style:{display:E?"none":"block"},className:"button button__main button__long",children:Object(d.jsx)("div",{className:"inner",children:"load more"})})]})},b=n(13);e.default=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b.a,{}),Object(d.jsx)(f,{})]})}},26:function(t,e,n){"use strict";var r=n.p+"static/media/error.42292aa1.gif",c=n(0);e.a=function(){return Object(c.jsx)("img",{src:r,style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"}})}},28:function(t,e,n){"use strict";var r=n(29),c=n.n(r),a=n(30),i=n(4),o=n(1);e.a=function(){var t=function(){var t=Object(o.useState)(!1),e=Object(i.a)(t,2),n=e[0],r=e[1],u=Object(o.useState)(null),s=Object(i.a)(u,2),l=s[0],p=s[1],d=Object(o.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(e){var n,a,i,o,u,s=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"GET",a=s.length>2&&void 0!==s[2]?s[2]:null,i=s.length>3&&void 0!==s[3]?s[3]:{"Content-Type":"application/json"},r(!0),t.prev=4,t.next=7,fetch(e,{method:n,body:a,headers:i});case 7:return o=t.sent,t.next=10,o.json();case 10:return u=t.sent,r(!1),t.abrupt("return",u);case 15:throw t.prev=15,t.t0=t.catch(4),r(!1),p(t.t0.message),t.t0;case 20:case"end":return t.stop()}}),t,null,[[4,15]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{loading:n,error:l,clearError:Object(o.useCallback)((function(){p(null)}),[]),request:d}}(),e=t.loading,n=t.error,r=t.clearError,u=t.request,s="https://gateway.marvel.com:443/v1/public/",l="apikey=0803ac54e9aa8cbbe036f1c7b3b3d1c0",p=210,d=function(){var t=Object(a.a)(c.a.mark((function t(){var e,n,r=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:p,t.next=3,u("".concat(s,"characters?limit=9&offset=").concat(e,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(j));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u("".concat(s,"characters/").concat(e,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",j(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(a.a)(c.a.mark((function t(){var e,n,r=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:p,t.next=3,u("".concat(s,"comics?limit=8&offset=").concat(e,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(v));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u("".concat(s,"comics/").concat(e,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",v(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u("".concat(s,"characters?name=").concat(e,"&").concat(l));case 2:return n=t.sent,t.abrupt("return",n.data.results.map(j));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(t){return{id:t.id,name:t.name,descr:t.description?t.description.slice(0,220)+"...":"description not found",homepage:t.urls[0].url,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,wiki:t.urls[1].url,comics:t.comics.items?t.comics.items.slice(0,9):"comics not found"}},v=function(t){return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:t.textObjects.language||"en-us",price:t.prices[0].price?t.prices[0].price:"not pricing",url:t.urls[0].url}};return{loading:e,error:n,getAllCharactres:d,getCharacter:f,clearError:r,getAllComics:b,getComic:m,getCharacterByName:h}}},36:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(9);var c=n(7);function a(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=7.ec3cec68.chunk.js.map