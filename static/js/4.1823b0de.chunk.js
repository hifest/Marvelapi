(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[4],{21:function(e,t,n){"use strict";var r=n.p+"static/media/error.42292aa1.gif",c=n(0);t.a=function(){return Object(c.jsx)("img",{src:r,style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"}})}},22:function(e,t,n){"use strict";var r=n(23),c=n.n(r),a=n(24),i=n(4),o=n(1);t.a=function(){var e=function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(o.useState)(null),l=Object(i.a)(s,2),u=l[0],b=l[1],d=Object(o.useCallback)(function(){var e=Object(a.a)(c.a.mark((function e(t){var n,a,i,o,s,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:null,i=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},r(!0),e.prev=4,e.next=7,fetch(t,{method:n,body:a,headers:i});case 7:return o=e.sent,e.next=10,o.json();case 10:return s=e.sent,r(!1),e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(4),r(!1),b(e.t0.message),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:n,error:u,clearError:Object(o.useCallback)((function(){b(null)}),[]),request:d}}(),t=e.loading,n=e.error,r=e.clearError,s=e.request,l="https://gateway.marvel.com:443/v1/public/",u="apikey=0803ac54e9aa8cbbe036f1c7b3b3d1c0",b=210,d=function(){var e=Object(a.a)(c.a.mark((function e(){var t,n,r=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:b,e.next=3,s("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(m));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("".concat(l,"characters/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",m(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(){var t,n,r=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:b,e.next=3,s("".concat(l,"comics?limit=8&offset=").concat(t,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(p));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s("".concat(l,"comics/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",p(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return{id:e.id,name:e.name,descr:e.description?e.description.slice(0,220)+"...":"description not found",homepage:e.urls[0].url,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,wiki:e.urls[1].url,comics:e.comics.items?e.comics.items.slice(0,9):"comics not found"}},p=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices[0].price?e.prices[0].price:"not pricing",url:e.urls[0].url}};return{loading:t,error:n,getAllCharactres:d,getCharacter:h,clearError:r,getAllComics:j,getComic:f}}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(9);var c=n(7);function a(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},31:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},41:function(e,t,n){"use strict";var r=n(25),c=n(5);var a=n(27),i=(n(26),n(1)),o=n.n(i),s=n(28);function l(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(i.isValidElement)(e)?t(e):e}(e)})),n}function u(e,t,n){return null!=n[t]?n[t]:e.props[t]}function b(e,t,n){var r=l(e.children),c=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,c=Object.create(null),a=[];for(var i in e)i in t?a.length&&(c[i]=a,a=[]):a.push(i);var o={};for(var s in t){if(c[s])for(r=0;r<c[s].length;r++){var l=c[s][r];o[c[s][r]]=n(l)}o[s]=n(s)}for(r=0;r<a.length;r++)o[a[r]]=n(a[r]);return o}(t,r);return Object.keys(c).forEach((function(a){var o=c[a];if(Object(i.isValidElement)(o)){var s=a in t,l=a in r,b=t[a],d=Object(i.isValidElement)(b)&&!b.props.in;!l||s&&!d?l||!s||d?l&&s&&Object(i.isValidElement)(b)&&(c[a]=Object(i.cloneElement)(o,{onExited:n.bind(null,o),in:b.props.in,exit:u(o,"exit",e),enter:u(o,"enter",e)})):c[a]=Object(i.cloneElement)(o,{in:!1}):c[a]=Object(i.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:u(o,"exit",e),enter:u(o,"enter",e)})}})),c}var d=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},h=function(e){function t(t,n){var r,c=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:c,firstRender:!0},r}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,c=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,r=a,l(n.children,(function(e){return Object(i.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:u(e,"appear",n),enter:u(e,"enter",n),exit:u(e,"exit",n)})}))):b(e,c,a),firstRender:!1}},n.handleExited=function(e,t){var n=l(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(c.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,c=Object(r.a)(e,["component","childFactory"]),a=this.state.contextValue,i=d(this.state.children).map(n);return delete c.appear,delete c.enter,delete c.exit,null===t?o.a.createElement(s.a.Provider,{value:a},i):o.a.createElement(s.a.Provider,{value:a},o.a.createElement(t,c,i))},t}(o.a.Component);h.propTypes={},h.defaultProps={component:"div",childFactory:function(e){return e}};t.a=h},44:function(e,t,n){"use strict";n.r(t);var r=n(4),c=(n(31),n.p+"static/media/mjolnir.61f31e18.png"),a=n(21),i=n(10),o=n(1),s=n(22),l=n(45),u=n(0),b=function(e){var t=e.char,n=(e.load,t.name),r=t.descr,c=t.thumbnail,a=t.homepage,i=t.wiki,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(o={objectFit:"contain"}),Object(u.jsxs)("div",{className:"randomchar__block",children:[Object(u.jsx)("img",{src:c,alt:"Random character",className:"randomchar__img",style:o}),Object(u.jsxs)("div",{className:"randomchar__info",children:[Object(u.jsx)("p",{className:"randomchar__name",children:n}),Object(u.jsx)("p",{className:"randomchar__descr",children:r}),Object(u.jsxs)("div",{className:"randomchar__btns",children:[Object(u.jsx)("a",{href:a,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:i,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=function(e){var t=Object(o.useState)({}),n=Object(r.a)(t,2),d=n[0],h=n[1],j=Object(o.useState)(!1),f=Object(r.a)(j,2),m=f[0],p=f[1];Object(o.useEffect)((function(){N()}),[]);var O=Object(s.a)(),v=O.loading,x=O.error,_=O.getCharacter,y=O.clearError,g=function(e){h(e),p(!0)},N=function(){y();var e=Math.floor(400*Math.random()+1011e3);_(e).then(g)},k=x?Object(u.jsx)(a.a,{}):null,E=v?Object(u.jsx)(i.a,{}):null,w=v||x?null:Object(u.jsx)(b,{char:d});return Object(u.jsx)(l.a,{in:m,timeout:300,classNames:"my-node1",children:Object(u.jsxs)("div",{className:"randomchar",children:[k,E,w,Object(u.jsxs)("div",{className:"randomchar__static",children:[Object(u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(u.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(u.jsx)("button",{className:"button button__main",onClick:function(){N(),p(!1)},children:Object(u.jsx)("div",{className:"inner",children:"try it"})}),Object(u.jsx)("img",{src:c,alt:"mjolnir",className:"randomchar__decoration"})]})]})})},h=n(29),j=n(41),f=(n(35),function(e){var t=Object(o.useState)([]),n=Object(r.a)(t,2),c=n[0],b=n[1],d=Object(o.useState)(!1),f=Object(r.a)(d,2),m=f[0],p=f[1],O=Object(o.useState)(250),v=Object(r.a)(O,2),x=v[0],_=v[1],y=Object(o.useState)(!1),g=Object(r.a)(y,2),N=g[0],k=g[1],E=Object(s.a)(),w=E.loading,S=E.error,C=E.getAllCharactres;Object(o.useEffect)((function(){F(x,!0)}),[]);var F=function(e,t){p(!t),C(e).then(R)},R=function(e){var t=!1;e.length<9&&(t=!0),b((function(t){return[].concat(Object(h.a)(t),Object(h.a)(e))})),p((function(e){return!1})),_((function(e){return e+9})),k((function(e){return t}))},P=Object(o.useRef)([]),T=function(e){P.current.forEach((function(e){e.classList.remove("char__item_selected")})),P.current[e].classList.add("char__item_selected"),P.current[e].focus()};var A=function(t){var n=t.map((function(t,n){var r={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(r={objectFit:"unset"}),Object(u.jsx)(l.a,{timeout:300,classNames:"my-node",children:Object(u.jsxs)("li",{className:"char__item",ref:function(e){return P.current[n]=e},onClick:function(){e.onCharSelected(t.id),T(n)},onKeyPress:function(r){" "!==r.key&&"Enter"!==r.key||(e.onCharSelected(t.id),T(n))},children:[Object(u.jsx)("img",{src:t.thumbnail,alt:t.name,style:r}),Object(u.jsx)("div",{className:"char__name",children:t.name})]},t.id)})}));return Object(u.jsx)("ul",{className:"char__grid",children:Object(u.jsx)(j.a,{component:null,children:n})})}(c),I=S?Object(u.jsx)(a.a,{}):null,V=w&&!m?Object(u.jsx)(i.a,{}):null;return Object(u.jsxs)("div",{className:"char__list",children:[I,V,A,Object(u.jsx)("button",{className:"button button__main button__long",style:{display:N?"none":"block"},onClick:function(){return F(x)},children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})}),m=(n(36),n(37),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(u.jsxs)("div",{className:"skeleton",children:[Object(u.jsxs)("div",{className:"pulse skeleton__header",children:[Object(u.jsx)("div",{className:"pulse skeleton__circle"}),Object(u.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"})]})]})}),p=n(6),O=function(e){var t=e.char,n=t.name,r=t.descr,c=t.thumbnail,a=t.homepage,i=t.wiki,o=t.comics,s={objectFit:"cover"};"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(s={objectFit:"contain"});var l=o.map((function(e,t){var n=[];n.push(e.resourceURI);var r=n.map((function(e){var t=e.lastIndexOf("/");return+e.substring(t+1)}));return console.log(r),Object(u.jsx)("li",{className:"char__comics-item",children:Object(u.jsx)(p.b,{to:"/comics/".concat(r),children:e.name})},t)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"char__basics",children:[Object(u.jsx)("img",{src:c,alt:"abyss",style:s}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"char__info-name",children:n}),Object(u.jsxs)("div",{className:"char__btns",children:[Object(u.jsx)("a",{href:a,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:i,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(u.jsx)("div",{className:"char__descr",children:r}),Object(u.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(u.jsxs)("ul",{className:"char__comics-list",children:[o.length>0?null:"There is no comics with this character",l]})]})},v=function(e){var t=Object(o.useState)(null),n=Object(r.a)(t,2),c=n[0],l=n[1],b=Object(o.useState)(null),d=Object(r.a)(b,2),h=(d[0],d[1],Object(s.a)()),j=h.loading,f=h.error,p=h.getCharacter,v=h.clearError;Object(o.useEffect)((function(){x()}),[e.charId]);var x=function(){var t=e.charId;t&&(v(),p(t).then(_))},_=function(e){l(e)},y=j||f||c?null:Object(u.jsx)(m,{}),g=f?Object(u.jsx)(a.a,{}):null,N=j?Object(u.jsx)(i.a,{}):null,k=j||f||!c?null:Object(u.jsx)(O,{char:c});return Object(u.jsxs)("div",{className:"char__info",children:[g,N,k,y]})};function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e){return(N="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){return!t||"object"!==N(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var c=g(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return k(this,n)}}var w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,e);var t,n,r,c=E(i);function i(){var e;x(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=c.call.apply(c,[this].concat(n))).state={error:!1},e}return t=i,(n=[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(u.jsx)(a.a,{}):this.props.children}}])&&_(t.prototype,n),r&&_(t,r),i}(o.Component),S=n.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(o.useState)(null),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(w,{children:Object(u.jsx)(d,{})}),Object(u.jsxs)("div",{className:"char__content",children:[Object(u.jsx)(w,{children:Object(u.jsx)(f,{onCharSelected:function(e){c(e)}})}),Object(u.jsx)(w,{children:Object(u.jsx)(v,{charId:n})})]}),Object(u.jsx)("img",{className:"bg-decoration",src:S,alt:"vision"})]})}}}]);
//# sourceMappingURL=4.1823b0de.chunk.js.map