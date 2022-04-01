/*! For license information please see c4f5d8e4.8df1bf8f.js.LICENSE.txt */
(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[195,329],{1473:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var n=r(7294);r(9578);function a(){var e=n.useState([]),t=e[0],r=e[1];return n.useEffect((function(){fetch("https://myapi.hasura.app/v1/graphql",{method:"POST",headers:{"Content-Type":"application/json","x-hasura-admin-secret":"azg431y5OY2WxHHPDrUxbQ61zF2PI4Zff1HCkwdLUtugqniHwRWXnajSjxy7K59D"},body:JSON.stringify({query:"\n{\n    employee(order_by: {empid: asc}) {\n      empid\n      empname\n      departments {\n        deptname\n        region\n      }\n    }\n}  \n"})}).then((function(e){return e.json()})).then((function(e){return r(e.data.employee)}))}),[]),n.createElement("div",{className:"container"},n.createElement("h1",{className:"header"},"Fetch data from Hasura GraphQL API"),n.createElement("p",null,n.createElement("h4",null,"Employee ID | Employee Name | Department Name"),n.createElement("ul",null,n.createElement("p",null,"Loop through each field"),t.map((function(e){return n.createElement("li",null,e.empid,": ",e.empname,": ",e.departments.deptname," - ",e.departments.region)}))),n.createElement("button",{onClick:""},"mutation")))}},8439:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7294),a=(r(4184),r(2297)),i=r(2263),o=(r(4996),r(9578)),s=r(1828),l=(0,r(4680).Z)("card-deck"),c=[{link:"docs/synopsis",title:"About me",text:"I am a self-motivated professional, passionate about technology. I like to design, develop, and improvise all kinds of software documentation."},{link:"history",title:"Professional Experience",text:"IT professional with 10+ years of experience working as a Technical Writer, Database Admin, Linux/Unix Admin, & Corporate Trainer."},{link:"techDocs",title:"Technical Documentation",text:"Using DDLC, Agile methods, and treating Docs as code help to version control, track issues, review/reuse code, and implement CI/CD."}],u=function(){return n.createElement("div",null,n.createElement(l,null,c.map((function(e){return n.createElement("a",{href:e.link},n.createElement(s.Z,{className:o.Z.sections},n.createElement(s.Z.Body,null,n.createElement(s.Z.Title,null,e.title),n.createElement(s.Z.Text,null,e.text))))}))))},d=(r(1473),function(){var e=(0,i.Z)().siteConfig,t=void 0===e?{}:e;return n.createElement(a.Z,{title:t.title+" | Personal Website"},n.createElement("header",{className:o.Z.header},n.createElement("div",{className:o.Z.features},n.createElement("img",{src:"https://media-exp1.licdn.com/dms/image/C4D03AQHedoWkAeRaJw/profile-displayphoto-shrink_400_400/0/1607250393657?e=1652918400&v=beta&t=Ai3J9dKms8hV8ey5NnH89Mfuxw0KNx2KsO7ISWd9wvM",alt:"logo",style:{borderRadius:"100%",maxWidth:120}}),n.createElement("h1",{className:"hero__title"},t.title),n.createElement("p",{className:o.Z.tagline},t.tagline))),n.createElement("div",{className:o.Z.header},n.createElement(u,null)))})},4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},9578:function(e,t){"use strict";t.Z={container:"container_J4y9",header:"header_2zn2",tagline:"tagline_DGO-",sections:"sections_2apy",features:"features_3azU",showcaseUser:"showcaseUser_3mEX",pContent:"pContent_Tsok",center:"center_P8rY",skills:"skills_BbpN",nextrow:"nextrow_2OP8",date:"date_1uUI",title:"title_3dbr",img:"img_3ZhY",history:"history_6qtF"}},1828:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var n=r(4034),a=r(9973),i=r(4036),o=r.n(i),s=r(7294),l=r(6792),c=r(4680),u=function(e){return s.forwardRef((function(t,r){return s.createElement("div",(0,n.Z)({},t,{ref:r,className:o()(t.className,e)}))}))},d=s.createContext(null);d.displayName="CardContext";var m=d,f=["bsPrefix","className","variant","as"],p=s.forwardRef((function(e,t){var r=e.bsPrefix,i=e.className,c=e.variant,u=e.as,d=void 0===u?"img":u,m=(0,a.Z)(e,f),p=(0,l.vE)(r,"card-img");return s.createElement(d,(0,n.Z)({ref:t,className:o()(c?p+"-"+c:p,i)},m))}));p.displayName="CardImg",p.defaultProps={variant:null};var v=p,h=["bsPrefix","className","bg","text","border","body","children","as"],y=u("h5"),g=u("h6"),x=(0,c.Z)("card-body"),E=(0,c.Z)("card-title",{Component:y}),b=(0,c.Z)("card-subtitle",{Component:g}),Z=(0,c.Z)("card-link",{Component:"a"}),N=(0,c.Z)("card-text",{Component:"p"}),C=(0,c.Z)("card-header"),P=(0,c.Z)("card-footer"),k=(0,c.Z)("card-img-overlay"),w=s.forwardRef((function(e,t){var r=e.bsPrefix,i=e.className,c=e.bg,u=e.text,d=e.border,f=e.body,p=e.children,v=e.as,y=void 0===v?"div":v,g=(0,a.Z)(e,h),E=(0,l.vE)(r,"card"),b=(0,s.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return s.createElement(m.Provider,{value:b},s.createElement(y,(0,n.Z)({ref:t},g,{className:o()(i,E,c&&"bg-"+c,u&&"text-"+u,d&&"border-"+d)}),f?s.createElement(x,null,p):p))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=v,w.Title=E,w.Subtitle=b,w.Body=x,w.Link=Z,w.Text=N,w.Header=C,w.Footer=P,w.ImgOverlay=k;var _=w},6792:function(e,t,r){"use strict";r.d(t,{vE:function(){return i}});var n=r(7294),a=n.createContext({});a.Consumer,a.Provider;function i(e,t){var r=(0,n.useContext)(a);return e||r[t]||t}},4680:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(4034),a=r(9973),i=r(4036),o=r.n(i),s=/-(.)/g;var l=r(7294),c=r(6792),u=["className","bsPrefix","as"],d=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function m(e,t){var r=void 0===t?{}:t,i=r.displayName,s=void 0===i?d(e):i,m=r.Component,f=r.defaultProps,p=l.forwardRef((function(t,r){var i=t.className,s=t.bsPrefix,d=t.as,f=void 0===d?m||"div":d,p=(0,a.Z)(t,u),v=(0,c.vE)(s,e);return l.createElement(f,(0,n.Z)({ref:r,className:o()(i,v)},p))}));return p.defaultProps=f,p.displayName=s,p}},4036:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&e.push(o)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);