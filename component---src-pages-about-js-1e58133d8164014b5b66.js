(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{211:function(e,n,t){"use strict";t.r(n),t.d(n,"query",function(){return l});var a=t(0),r=t.n(a),i=t(223),o=t(231),c=t(220);n.default=function(e){var n=e.data;return r.a.createElement(i.a,null,r.a.createElement(c.a,{pageTitle:n.aboutJson.title}),r.a.createElement(o.b,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.aboutJson.content.childMarkdownRemark.html}})))};var l="3981516706"},216:function(e,n,t){"use strict";t(14),t(15),t(6),t(27);var a=t(215),r={DESKTOP:992,TABLET:768,BIG_PHONE_1:616,BIG_PHONE:426,PHONE:376};function i(){var e=c(["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "]);return i=function(){return e},e}function o(){var e=c(["\n    @media (max-width: ","em) {\n      ",";\n    }\n  "]);return o=function(){return e},e}function c(e,n){return n||(n=e.slice(0)),e.raw=n,e}var l=Object.keys(r).reduce(function(e,n){return e[n]=function(){return Object(a.b)(o(),r[n]/16,a.b.apply(void 0,arguments))},e["MIN_"+n]=function(){return Object(a.b)(i(),r[n]/16,a.b.apply(void 0,arguments))},e},{});n.a=l},217:function(e,n,t){"use strict";t.d(n,"b",function(){return u});var a=t(0),r=t.n(a),i=t(82),o=t.n(i);t.d(n,"a",function(){return o.a});t(218),t(17).default.enqueue;var c=r.a.createContext({});function l(e){var n=e.staticQueryData,t=e.data,a=e.query,i=e.render,o=t?t.data:n[a]&&n[a].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var n=e.data,t=e.query,a=e.render,i=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(l,{data:n,query:t,render:a||i,staticQueryData:e})})}},218:function(e,n,t){var a;e.exports=(a=t(226))&&a.default||a},219:function(e,n,t){"use strict";t.d(n,"b",function(){return m}),t.d(n,"a",function(){return s});var a=t(215),r=t(216);function i(){var e=u(["\n        padding: 1.5rem 1.5rem;\n    "]);return i=function(){return e},e}function o(){var e=u(["\n    border: none;\n    border-radius: 4px;\n    color: white;\n    padding: 1.5rem 2.5rem;\n    font-size: 1.3rem;\n    transition: all 0.5s ease-in-out;\n    background: #008CFF;\n    width: 100%;\n\n    ","\n\n    &:hover {\n        cursor: pointer;\n    }\n"]);return o=function(){return e},e}function c(){var e=u(["\n        padding: 1.35rem 0.95rem;\n    "]);return c=function(){return e},e}function l(){var e=u(["\n    border: none;\n    border-radius: 4px;\n    color: white;\n    padding: 1.5rem 2.5rem;\n    font-size: 1rem;\n    transition: all 0.5s ease-in-out;\n    background: #31768a;\n\n    ","\n\n    &:hover {\n        cursor: pointer;\n    }\n"]);return l=function(){return e},e}function u(e,n){return n||(n=e.slice(0)),e.raw=n,e}var m=a.c.button(l(),r.a.BIG_PHONE(c())),s=a.c.button(o(),r.a.PHONE(i()))},220:function(e,n,t){"use strict";t(13);var a=t(227),r=t(0),i=t.n(r),o=t(232),c=t(217),l=t(36),u=function(e){var n=e.siteTitle,t=e.siteDescription,a=e.siteUrl,r=e.pageTitle,c=e.pageTitleFull,l=void 0===c?r?n+": "+r:n:c,u=e.themeColor,m=e.social,s=e.imageUrl,p=e.location,f=e.canonical,d=void 0===f?a+(p.pathname||""):f;return i.a.createElement(o.Helmet,null,i.a.createElement("html",{lang:"en"}),i.a.createElement("meta",{content:"IE=edge",httpEquiv:"X-UA-Compatible"}),i.a.createElement("meta",{content:"width=device-width,initial-scale=1.0,user-scalable=yes",name:"viewport"}),i.a.createElement("meta",{content:n,name:"apple-mobile-web-app-title"}),i.a.createElement("meta",{content:l,property:"og:title"}),i.a.createElement("meta",{content:l,name:"twitter:title"}),i.a.createElement("title",null,l),i.a.createElement("meta",{content:t,name:"description"}),i.a.createElement("meta",{content:t,property:"og:description"}),i.a.createElement("meta",{content:t,name:"twitter:description"}),i.a.createElement("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),i.a.createElement("meta",{content:"black-translucent",name:"apple-mobile-web-app-status-bar-style"}),i.a.createElement("meta",{content:u,name:"theme-color"}),i.a.createElement("meta",{content:n,name:"application-name"}),i.a.createElement("meta",{content:"website",property:"og:type"}),i.a.createElement("meta",{content:n,property:"og:site_name"}),i.a.createElement("meta",{content:m.fbAppId,property:"fb:app_id"}),i.a.createElement("meta",{content:"summary_large_image",name:"twitter:card"}),i.a.createElement("meta",{content:"@"+m.twitter,name:"twitter:site"}),i.a.createElement("meta",{content:"@"+m.twitter,name:"twitter:creator"}),i.a.createElement("meta",{content:l,name:"twitter:text:title"}),i.a.createElement("meta",{content:d,property:"og:url"}),i.a.createElement("meta",{content:d,name:"twitter:url"}),i.a.createElement("link",{rel:"canonical",href:d}),i.a.createElement("meta",{content:s||a+"/social.png",property:"og:image"}),i.a.createElement("meta",{content:"1024",property:"og:image:width"}),i.a.createElement("meta",{content:"512",property:"og:image:height"}),i.a.createElement("meta",{content:s||a+"/social.png",name:"twitter:image"}),i.a.createElement("meta",{content:"1024",name:"twitter:image:width"}),i.a.createElement("meta",{content:"512",name:"twitter:image:height"}),i.a.createElement("meta",{content:s||a+"/social.png",property:"og:image"}),i.a.createElement("meta",{content:"1024",property:"og:image:width"}),i.a.createElement("meta",{content:"512",property:"og:image:height"}),i.a.createElement("meta",{content:u,name:"msapplication-TileColor"}),i.a.createElement("meta",{content:"/icons/mstile-70x70.png",name:"msapplication-square70x70"}),i.a.createElement("meta",{content:"/icons/mstile-144x144.png",name:"msapplication-square144x144"}),i.a.createElement("meta",{content:"/icons/mstile-150x150.png",name:"msapplication-square150x150"}),i.a.createElement("meta",{content:"/icons/mstile-310x150.png",name:"msapplication-wide310x150"}),i.a.createElement("meta",{content:"/icons/mstile-310x310.png",name:"msapplication-square310x310"}),i.a.createElement("link",{href:"/manifest.json",rel:"manifest"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-57x57.png",rel:"apple-touch-icon",sizes:"57x57"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-60x60.png",rel:"apple-touch-icon",sizes:"60x60"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-72x72.png",rel:"apple-touch-icon",sizes:"72x72"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-76x76.png",rel:"apple-touch-icon",sizes:"76x76"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-114x114.png",rel:"apple-touch-icon",sizes:"114x114"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-120x120.png",rel:"apple-touch-icon",sizes:"120x120"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-144x144.png",rel:"apple-touch-icon",sizes:"144x144"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-152x152.png",rel:"apple-touch-icon",sizes:"152x152"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-167x167.png",rel:"apple-touch-icon",sizes:"167x167"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-180x180.png",rel:"icon",sizes:"180x180",type:"image/png"}),i.a.createElement("link",{href:"/icons/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),i.a.createElement("link",{href:"/icons/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var n=e.location,t=e.canonical,a=e.siteUrl,r=e.pageTitle,i=e.siteTitle,o=[{"@context":"http://schema.org","@type":"WebSite",url:t,name:r||i,alternateName:e.pageTitleFull}];return r&&"/"!==n.pathname&&o.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:i}},{"@type":"ListItem",position:2,item:{"@id":t,name:r}}]}),o}({location:p,canonical:d,siteUrl:a,pageTitle:r,siteTitle:n,pageTitleFull:l}))))};n.a=function(e){return i.a.createElement(c.b,{query:"177639445",render:function(n){return i.a.createElement(l.Location,null,function(t){var a=t.location;return i.a.createElement(u,Object.assign({},n.site.siteMetadata,e,{location:a}))})},data:a})}},221:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var a=t(0),r=t.n(a),i=t(233),o=t.n(i),c=t(219);n.b=function(e){var n=e.children;return r.a.createElement("button",{className:o.a.button},n)};var l=function(e){var n=e.children;return r.a.createElement(c.a,null,n)}},222:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(215),o=t(216);function c(){var e=m(["\n    position: relative;\n    overflow: hidden;\n    background-color: #fff;\n    border-radius: 4px;\n    box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);\n    width: 100%;\n    color: #414156;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 1rem;\n"]);return c=function(){return e},e}function l(){var e=m(["\n    font-size: ",";\n  "]);return l=function(){return e},e}function u(){var e=m(["\n  display: block;\n  padding: 2rem 0;\n  color:#004196;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.2;\n\n  ",";\n"]);return u=function(){return e},e}function m(e,n){return n||(n=e.slice(0)),e.raw=n,e}var s=i.c.span(u(),function(e){var n=e.size;return function(){switch(n){case"large":return"400";default:return"500"}}},function(e){var n=e.size;return function(){switch(n){case"large":return"5.2rem";default:return"2rem"}}},o.a.TABLET(l(),function(e){var n=e.size;return function(){switch(n){case"large":return"2.6rem";default:return"2rem"}}}));i.c.div(c());t.d(n,"a",function(){return p});n.b=function(e){var n=e.children,t=e.as,a=void 0===t?"span":t,i=e.size;return r.a.createElement(s,{as:a,size:i},n)};var p=function(e){var n=e.children;return r.a.createElement("div",null,r.a.createElement("p",null,n))}},223:function(e,n,t){"use strict";t(13);var a=t(225),r=t(0),i=t.n(r),o=t(217),c=t(220),l=t(88),u=t(215),m=t(216);function s(){var e=f(["\n      margin-left: 1rem;\n      margin-right: 2rem;\n  "]);return s=function(){return e},e}function p(){var e=f(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1rem;\n  margin-right: 3rem;\n  margin-left: 10rem;\n\n  ","\n\n  a {\n    color: #757575;\n    transition: color 0.2s ease;\n    text-decoration: none;\n\n    &:hover {\n      color: inherit;\n    }\n  }\n"]);return p=function(){return e},e}function f(e,n){return n||(n=e.slice(0)),e.raw=n,e}var d=u.c.header(p(),m.a.BIG_PHONE_1(s()));t(222);function g(){var e=E(["\n      li {\n        font-size: 1.05rem;\n      }\n    "]);return g=function(){return e},e}function h(){var e=E(["\n  ul {\n    display: flex;\n    align-items: center;\n    list-style: none;\n    padding: 0;\n\n    li {\n      text-transform: uppercase;\n      font-size: 1.3rem;\n\n      & + li {\n        margin-left: 2rem;\n      }\n    }\n  }\n\n  img {\n    width: 24px;\n  }\n\n  .nav_menu {\n    ","\n  }\n"]);return h=function(){return e},e}function E(e,n){return n||(n=e.slice(0)),e.raw=n,e}var b=u.c.nav(h(),m.a.PHONE(g())),v=(t(228),t(229),t(221),t(219)),y=function(e){var n=e.children;return i.a.createElement(v.b,null,n)},x=function(){return i.a.createElement(b,null,i.a.createElement("ul",{className:"nav_menu"},i.a.createElement("li",null,i.a.createElement(o.a,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/about"},"About")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/work/"},"Work")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/blog"},"Blog")),i.a.createElement("li",null,i.a.createElement("a",{href:"/contact"},i.a.createElement(y,null,"GET IN TOUCH")))))},w=t(230),k=t.n(w),z=l.b.div({enter:{y:0,transition:{ease:"easeInOut"}},exit:{y:"-100%",transition:{ease:"easeInOut"}}}),T=function(e){e.title;return i.a.createElement(z,null,i.a.createElement(d,null,i.a.createElement(o.a,{to:"/",style:{display:"flex",alignItems:"center",marginTop:"28px"}},i.a.createElement("img",{src:k.a,style:{maxWidth:"50px",maxHeight:"50px",marginRight:"1rem"},alt:"a hand writing"})),i.a.createElement(x,null)))},I=t(224);function q(){var e=_(["\n        padding: 2rem;\n    "]);return q=function(){return e},e}function O(){var e=_(["\n    padding: 2rem 10rem;\n    \n    ","\n"]);return O=function(){return e},e}function _(e,n){return n||(n=e.slice(0)),e.raw=n,e}var H=u.c.div(O(),m.a.BIG_PHONE_1(q())),j=function(e){var n=e.data,t=e.children;return i.a.createElement("div",null,i.a.createElement(I.a,null),i.a.createElement(c.a,null),i.a.createElement(T,{title:n.site.siteMetadata.siteTitle}),i.a.createElement(H,null,t))};n.a=function(e){return i.a.createElement(o.b,{query:"2302781957",render:function(n){return i.a.createElement(j,Object.assign({data:n},e))},data:a})}},224:function(e,n,t){"use strict";var a=t(215);function r(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(['\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";\n    line-height: 1;\n    font-size: 1.6rem;\n    color: #000;\n    background-color: #fff;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizeLegibility;\n    -webkit-font-feature-settings: "pnum";\n    font-feature-settings: "pnum";\n    font-variant-numeric: proportional-nums;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  a {\n    color: ',";\n  }\n\n  pre {\n    display: block;\n    padding: 2rem;\n    margin-top: 4rem;\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    border-radius: 5px;\n    color: ",';\n    border: 1px solid #ddd;\n    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;\n  }\n\n  video {\n    max-width: 100%;\n  }\n\n  h2 {\n    font-size: 3rem;\n    color: #343a40;\n  }\n\n  h3 {\n    font-size: 2rem;\n  }\n\n  p {\n    margin-bottom: 1rem;\n    line-height: 2.5rem;\n    color: #3E4756;\n  }\n']);return r=function(){return e},e}n.a=Object(a.a)(r(),"#f90000","#f90000")},225:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"The Itchy Writer"}}}}},226:function(e,n,t){"use strict";t.r(n);t(13);var a=t(0),r=t.n(a),i=t(113);n.default=function(e){var n=e.location,t=e.pageResources;return t?r.a.createElement(i.a,Object.assign({location:n,pageResources:t},t.json)):null}},227:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"The Itchy Writer",siteTitleShort:"TIW",siteDescription:"A site consolidating one itchy writer's thoughts about basically everything.",siteUrl:"https://theitchywriter.com",themeColor:"#000",social:{twitter:"bradleykingz",fbAppId:"966242223397117"}}}}}},228:function(e,n,t){e.exports=t.p+"static/github-logo-dc90aac3692b0721db0244c5985d5544.png"},229:function(e,n,t){e.exports=t.p+"static/twitter-8f35a40403a84631c4125c4f1859c7a6.png"},230:function(e,n,t){e.exports=t.p+"static/writing1-c3446578ceb629a513108214723df3b2.png"},231:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(215),o=t(216);function c(){var e=m(["\n        grid-template-columns: unset;\n        \n        .title_parent {\n            grid-row: 2;\n        }\n    "]);return c=function(){return e},e}function l(){var e=m(["\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    align-items: center;\n\n    ","\n"]);return l=function(){return e},e}function u(){var e=m(["\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    align-items: center;\n"]);return u=function(){return e},e}function m(e,n){return n||(n=e.slice(0)),e.raw=n,e}var s=i.c.div(u()),p=i.c.div(l(),o.a.BIG_PHONE(c()));t.d(n,"a",function(){return f});n.b=function(e){var n=e.children;return r.a.createElement(s,null,n)};var f=function(e){var n=e.children;return r.a.createElement(p,null,n)}}}]);
//# sourceMappingURL=component---src-pages-about-js-1e58133d8164014b5b66.js.map