(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{13:function(e,t,r){e.exports={"products-page":"styles_products-page__2WCDU","products-page__wrapper":"styles_products-page__wrapper__1M9bh",content:"styles_content__3PCsX"}},16:function(e,t,r){e.exports={"product-list__wrapper":"styles_product-list__wrapper__1WnVx","product-item":"styles_product-item__JHkWx","product-item__title":"styles_product-item__title__RDCeP","product-item__info":"styles_product-item__info__1aaGx"}},18:function(e,t,r){e.exports={"input-range":"styles_input-range__QnhWN","input-range__title":"styles_input-range__title__2ew6h","input-range__wrapper":"styles_input-range__wrapper__3Tupy"}},19:function(e,t,r){e.exports={ControlPanel:"styles_ControlPanel__am9qe",ControlPanel__item:"styles_ControlPanel__item__25xdH"}},24:function(e,t,r){e.exports={loader:"styles_loader__1-S83","lds-ring":"styles_lds-ring__rgqE8","dot-pulse":"styles_dot-pulse__32FY7",dotPulse:"styles_dotPulse__3CFfq",dotPulseBefore:"styles_dotPulseBefore__3lcWX",dotPulseAfter:"styles_dotPulseAfter__1ZANP"}},26:function(e,t,r){e.exports={navbar:"styles_navbar__2LrPe",navbar__item:"styles_navbar__item__SzQwO",active:"styles_active__3gvtd"}},31:function(e,t,r){e.exports={header:"styles_header__3MAlL",header__wrapper:"styles_header__wrapper__2uuvS"}},42:function(e,t,r){e.exports={"product-image":"styles_product-image__oQk-1"}},43:function(e,t,r){e.exports={stars:"styles_stars__1gYNA"}},46:function(e,t,r){e.exports={sidebar:"styles_sidebar__gH9yi"}},57:function(e,t,r){},98:function(e,t,r){"use strict";r.r(t);var n,c=r(0),a=r(23),s=r.n(a),o=r(11),i=(r(57),r(7)),u=r(3),l=r(1),d=function(){return Object(l.jsx)("div",{children:"ProductIdPage"})},p=r(24),_=r.n(p),j=function(){return Object(l.jsxs)("div",{className:_.a.loader,children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})},b=function(e,t){return e.find((function(e){return e.type===t}))},O=function e(t,r){var n=0;return Object.keys(t).some((function(c){return c===r?(n=t[c],!0):!(!t[c]||"object"!==typeof t[c])&&void 0!==(n=e(t[c],r))})),n},x=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},h=function(e,t,r){return t>=b(e,r).curRange.min&&t<=b(e,r).curRange.max},f=o.c,g=r(12),C=r.n(g),m=r(15),v=r(25),E=r.n(v);!function(e){e.FETCH_PRODUCTS="FETCH_PRODUCTS",e.FETCH_PRODUCTS_SUCCESS="FETCH_PRODUCTS_SUCCESS",e.FETCH_PRODUCTS_ERROR="FETCH_PRODUCTS_ERROR"}(n||(n={}));var y,R=r(42),S=r.n(R),T=function(e){var t=e.product;return Object(l.jsx)("img",{className:S.a["product-image"],src:t.image,alt:t.title})},w=r(43),k=r.n(w),N=function(e){var t=e.rate;return Object(l.jsx)("div",{className:k.a.stars,style:{"--rating":t},"data-rate":t})},P=r(16),H=r.n(P),F=function(e){var t=e.product,r=Object(u.g)();return Object(l.jsxs)("div",{className:H.a["product-item"],onClick:function(){return r.push("/products/".concat(t.category,"/").concat(t.id))},children:[Object(l.jsx)(T,{product:t}),Object(l.jsx)("span",{className:H.a["product-item__title"],children:t.title}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{children:[t.price,"$"]}),Object(l.jsx)(N,{rate:t.rating.rate}),Object(l.jsx)("span",{children:t.rating.rate})]})]})},L=function(e){var t=e.category,r=void 0===t?"":t,a=f((function(e){return e.product})),s=a.products,i=a.error,u=a.loading,d=f((function(e){return e.filterRange})).ranges,p=Object(o.b)(),_=s.filter((function(e){return h(d,e.price,"price")&&h(d,e.rating.rate,"rate")}));return Object(c.useEffect)((function(){p(function(e){return function(){var t=Object(m.a)(C.a.mark((function t(r){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{r({type:n.FETCH_PRODUCTS}),setTimeout(Object(m.a)(C.a.mark((function t(){var c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("https://fakestoreapi.com/products"+(e?"/category/".concat(e):""));case 2:c=t.sent,r({type:n.FETCH_PRODUCTS_SUCCESS,payload:c.data});case 4:case"end":return t.stop()}}),t)}))),500)}catch(i){r({type:n.FETCH_PRODUCTS_ERROR,payload:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432"})}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(r))}),[r,p]),Object(l.jsxs)("div",{children:[r?Object(l.jsx)("h1",{children:x(r)}):Object(l.jsx)("h1",{children:"The new arrivals"}),i||u&&Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:H.a["product-list__wrapper"],children:_.map((function(e){return Object(l.jsx)(F,{product:e},e.id)}))})]})},A=(r(82),r(45)),U=r.n(A);!function(e){e.SET_RANGES="SET_RANGES"}(y||(y={}));var G,D=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=e.map((function(e){return e.type===t&&(n&&(e.range.min=Math.floor(r.min),e.range.max=Math.ceil(r.max)),e.curRange.min=Math.floor(r.min),e.curRange.max=Math.ceil(r.max)),e}));return function(e){e({type:y.SET_RANGES,payload:c})}},I=r(18),M=r.n(I),W=function(){var e=f((function(e){return e.product})).products,t=f((function(e){return e.filterRange})).ranges,r=Object(o.b)();Object(c.useEffect)((function(){0!==e.length&&t.forEach((function(n){var c=function(e,t){var r=e.reduce((function(e,r){if(void 0!==O)return O(e,t)<O(r,t)?e:r})),n=e.reduce((function(e,r){if(void 0!==O)return O(e,t)>O(r,t)?e:r}));return{min:O(r,t),max:O(n,t)}}(e,n.type);r(D(t,n.type,c,!0))}))}),[e]);return Object(l.jsx)("div",{className:M.a["range-list"],children:t.map((function(n){return Object(l.jsxs)("div",{className:M.a["input-range"],children:[Object(l.jsx)("span",{className:M.a["input-range__title"],children:n.title}),Object(l.jsx)("div",{className:M.a["input-range__wrapper"],children:Object(l.jsx)(U.a,{maxValue:n.range.max,minValue:n.range.min,formatLabel:function(e){return"".concat(e," ").concat(n.sign)},disabled:0===e.length,value:n.curRange,onChange:(c=n.type,function(e){"object"===typeof e&&r(D(t,c,e))})})})]},n.id);var c}))})},B=r(46),V=r.n(B),Z=function(){return Object(l.jsx)("div",{className:V.a.sidebar,children:Object(l.jsx)(W,{})})},q=r(13),J=r.n(q),Q=[{path:"/products",component:function(){return Object(l.jsx)("div",{className:J.a["products-page"],children:Object(l.jsxs)("div",{className:J.a["products-page__wrapper"],children:[Object(l.jsx)(Z,{}),Object(l.jsx)("div",{className:J.a.content,children:Object(l.jsx)(L,{category:""})})]})})},exact:!0},{path:"/products/:category",component:function(){var e=Object(u.h)();return Object(l.jsx)("div",{className:J.a["products-page"],children:Object(l.jsxs)("div",{className:J.a["products-page__wrapper"],children:[Object(l.jsx)(Z,{}),Object(l.jsx)("div",{className:J.a.content,children:Object(l.jsx)(L,{category:e.category})})]})})},exact:!0},{path:"/products/:category/:id",component:d,exact:!0}],X=function(){return Object(l.jsxs)(u.d,{children:[Q.map((function(e){return Object(l.jsx)(u.b,{component:e.component,path:e.path,exact:e.exact},e.path)})),Object(l.jsx)(u.a,{to:"/products"})]})},Y=function(){return Object(l.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{d:"M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999V4.60999Z",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},$=function(){return Object(l.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("path",{d:"M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(l.jsx)("path",{d:"M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(l.jsx)("path",{d:"M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})},z=function(){return Object(l.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("path",{d:"M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(l.jsx)("path",{d:"M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})},K=r(19),ee=r.n(K),te=function(){return Object(l.jsxs)("div",{className:ee.a.ControlPanel,children:[Object(l.jsx)(i.b,{className:ee.a.ControlPanel__item,to:"/products",children:Object(l.jsx)($,{})}),Object(l.jsx)(i.b,{className:ee.a.ControlPanel__item,to:"/products",children:Object(l.jsx)(Y,{})}),Object(l.jsx)(i.b,{className:ee.a.ControlPanel__item,to:"/products",children:Object(l.jsx)(z,{})})]})},re=function(){return Object(l.jsx)("h1",{style:{margin:0},children:Object(l.jsx)("span",{style:{color:"#D90429"},children:"TEST"})})},ne=function(){return Object(l.jsx)(i.b,{to:"/products",children:Object(l.jsx)(re,{})})};!function(e){e.FETCH_CATEGORIES="FETCH_CATEGORIES",e.FETCH_CATEGORIES_SUCCESS="FETCH_CATEGORIES_SUCCESS",e.FETCH_CATEGORIES_ERROR="FETCH_CATEGORIES_ERROR"}(G||(G={}));var ce=function(){return Object(l.jsx)("div",{className:_.a["dot-pulse"]})},ae=r(26),se=r.n(ae),oe=function(){var e=f((function(e){return e.category})),t=e.categories,r=e.error,n=e.loading,a=Object(o.b)();return Object(c.useEffect)((function(){a(function(){var e=Object(m.a)(C.a.mark((function e(t){var r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:G.FETCH_CATEGORIES}),e.next=4,E.a.get("https://fakestoreapi.com/products/categories");case 4:r=e.sent,t({type:G.FETCH_CATEGORIES_SUCCESS,payload:r.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:G.FETCH_CATEGORIES_ERROR,payload:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a]),Object(l.jsx)("div",{className:"navbar",children:Object(l.jsxs)("div",{children:[r||n&&Object(l.jsx)(ce,{}),t.map((function(e){return Object(l.jsx)(i.c,{className:se.a.navbar__item,to:"/products/".concat(e),activeClassName:se.a.navbar__item+" "+se.a.active,children:x(e)},e)}))]})})},ie=r(31),ue=r.n(ie),le=function(){return Object(l.jsx)("div",{className:ue.a.header,children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:ue.a.header__wrapper,children:[Object(l.jsx)(ne,{}),Object(l.jsx)(oe,{}),Object(l.jsx)(te,{})]})})})},de=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(le,{}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(X,{})})]})},pe=r(17),_e=r(47),je={categories:[],loading:!1,error:null},be={ranges:[{id:1,type:"price",title:"Price range",sign:"$",range:{min:0,max:999},curRange:{min:0,max:999}},{id:2,type:"rate",title:"Rate range",sign:"\u2606",range:{min:1,max:5},curRange:{min:1,max:5}}]},Oe={products:[],loading:!1,error:null},xe=Object(pe.b)({product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.FETCH_PRODUCTS:return{loading:!0,error:null,products:[]};case n.FETCH_PRODUCTS_SUCCESS:return{loading:!1,error:null,products:t.payload};case n.FETCH_PRODUCTS_ERROR:return{loading:!1,error:t.payload,products:[]};default:return e}},category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.FETCH_CATEGORIES:return{loading:!0,error:null,categories:[]};case G.FETCH_CATEGORIES_SUCCESS:return{loading:!1,error:null,categories:t.payload};case G.FETCH_CATEGORIES_ERROR:return{loading:!1,error:t.payload,categories:[]};default:return e}},filterRange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;return t.type===y.SET_RANGES?{ranges:t.payload}:e}}),he=Object(pe.c)(xe,Object(pe.a)(_e.a));s.a.render(Object(l.jsx)(o.a,{store:he,children:Object(l.jsx)(de,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.76aab60b.chunk.js.map