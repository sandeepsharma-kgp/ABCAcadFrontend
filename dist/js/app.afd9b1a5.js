(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],d=0,u=[];d<o.length;d++)r=o[d],n[r]&&u.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);p&&p(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(i=!1)}i&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},r={app:0},n={app:0},s=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"72322d0e","chunk-02027c0b":"091b2896","chunk-2250194c":"544ca6be","chunk-6ced3eff":"073e73f7"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-02027c0b":1,"chunk-2250194c":1,"chunk-6ced3eff":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-02027c0b":"3ec1d245","chunk-2250194c":"9e3fb4f5","chunk-6ced3eff":"666f5c0d"}[t]+".css",n=l.p+i,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===i||d===n))return e()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){c=u[o],d=c.getAttribute("data-href");if(d===i||d===n)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var i=e&&e.target&&e.target.src||n,s=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=i,delete r[t],p.parentNode.removeChild(p),a(s)},p.href=n;var b=document.getElementsByTagName("head")[0];b.appendChild(p)}).then(function(){r[t]=0}));var i=n[t];if(0!==i)if(i)e.push(i[2]);else{var s=new Promise(function(e,a){i=n[t]=[e,a]});e.push(i[2]=s);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=o(t),c=function(e){d.onerror=d.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+i+": "+r+")");s.type=i,s.request=r,a[1](s)}n[t]=void 0}};var u=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=d;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"018d":function(t,e,a){},"01f2":function(t,e,a){t.exports=a.p+"img/call.561f9fb6.svg"},"02aa":function(t,e,a){"use strict";var i=a("cff9"),r=a.n(i);r.a},1095:function(t,e,a){},"11ef":function(t,e,a){t.exports=a.p+"img/youtube.8df2f084.svg"},"202a":function(t,e,a){t.exports=a.p+"img/map-pin-marked.2bca9586.svg"},"256f":function(t,e,a){t.exports=a.p+"img/blogging-blur-communication-261662.18ac1b9a.jpg"},3061:function(t,e,a){},3273:function(t,e,a){t.exports=a.p+"img/man-user.3572e1ce.svg"},"3c6d":function(t,e,a){"use strict";var i=a("018d"),r=a.n(i);r.a},"564f":function(t,e,a){"use strict";var i=a("f3bc"),r=a.n(i);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a(t.layout,{tag:"component"},[a("router-view")],1)],1)},n=[],s="default",o={computed:{layout:function(){return(this.$route.meta.layout||s)+"-layout"}},created:function(){console.log(this.$route,this.$route.meta.layout)},updated:function(){console.log(this.$route,this.$route.meta.layout)}},l=o,c=(a("ac68"),a("2877")),d=Object(c["a"])(l,r,n,!1,null,"5195faf6",null),u=d.exports,p=a("8c4f");i["default"].use(p["a"]);var b=new p["a"]({mode:"history",routes:[{path:"/",name:"home",meta:{layout:"Default"},component:a("bc13").default},{path:"/about",name:"about",meta:{layout:"Default"},component:function(){return a.e("about").then(a.bind(null,"a1d1"))}},{path:"/program8_9",name:"program8_9",meta:{layout:"Default"},component:function(){return a.e("chunk-6ced3eff").then(a.bind(null,"87b6"))}},{path:"/program11_12",name:"program11_12",meta:{layout:"Default"},component:function(){return a.e("chunk-2250194c").then(a.bind(null,"9afc"))}},{path:"/program9_10",name:"program9_10",meta:{layout:"Default"},component:function(){return a.e("chunk-02027c0b").then(a.bind(null,"44fe"))}}]}),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-bar"),a("div",[a("div",[t._t("default")],2)]),a("footer-bar"),a("ContactUs")],1)},g=[],v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info",fixed:"top"}},[i("b-navbar-brand",{staticStyle:{"font-weight":"bold","font-size":"27px"},attrs:{href:"#",to:"/"},nativeOn:{click:function(e){t.open=!1}}},[t._v("\r\n      Albedo Academy")]),i("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("b-navbar-nav",{staticClass:"ml-auto"},[i("a",{staticClass:"call",attrs:{href:"#"}},[i("b-img",{staticStyle:{padding:"14px"},attrs:{src:a("01f2")}}),i("h8",{staticStyle:{padding:"14px","padding-left":"0px"}},[t._v("+91-xxxxxxxxxx")])],1),i("b-button",{staticClass:"scholar",attrs:{variant:"outline-dark"}},[t._v("Scholarship")]),i("b-modal",{ref:"modal",attrs:{"hide-footer":"",id:"modal-prevent-closing",title:"Login/Sign Up",size:"xl"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk}},[i("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[i("div",{attrs:{id:"login"}},[i("div",{staticClass:"sign-up"},[i("h1",[t._v(" Welcome to Albedo ")]),i("form",{on:{submit:t.signUpData}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.name,expression:"signUp.name"}],attrs:{type:"text",placeholder:"Full Name",required:""},domProps:{value:t.signUp.name},on:{input:function(e){e.target.composing||t.$set(t.signUp,"name",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.email,expression:"signUp.email"}],attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.signUp.email},on:{input:function(e){e.target.composing||t.$set(t.signUp,"email",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.contact,expression:"signUp.contact"}],attrs:{type:"tele",pattern:"[0-9]{10}",placeholder:"Contact Number",required:""},domProps:{value:t.signUp.contact},on:{input:function(e){e.target.composing||t.$set(t.signUp,"contact",e.target.value)}}}),i("select",{directives:[{name:"model",rawName:"v-model",value:t.signUp.category,expression:"signUp.category"}],attrs:{placeholder:"Category",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.signUp,"category",e.target.multiple?a:a[0])}}},[i("option",{attrs:{disabled:"",value:"",selected:"","data-default":""}},[t._v("Category")]),i("option",{attrs:{value:"Unreserved"}},[t._v("Unreserved")]),i("option",{attrs:{value:"OBC"}},[t._v("OBC")]),i("option",{attrs:{value:"SC"}},[t._v("SC")]),i("option",{attrs:{value:"ST"}},[t._v("ST")]),i("option",{attrs:{value:"Unreserved-PH"}},[t._v("Unreserved-PH")]),i("option",{attrs:{value:"OBC-PH"}},[t._v("OBC-PH")]),i("option",{attrs:{value:"SC-PH"}},[t._v("SC-PH")]),i("option",{attrs:{value:"ST-PH"}},[t._v("ST-PH")])]),i("img",{staticClass:"select-arrow",attrs:{src:a("d005")}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.pin,expression:"signUp.pin"}],attrs:{type:"text",pattern:"[0-9]{6}",maxlength:"6",placeholder:"Pin Code",required:""},domProps:{value:t.signUp.pin},on:{input:function(e){e.target.composing||t.$set(t.signUp,"pin",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.city,expression:"signUp.city"}],attrs:{type:"text",placeholder:"City",required:""},domProps:{value:t.signUp.city},on:{input:function(e){e.target.composing||t.$set(t.signUp,"city",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.password,expression:"signUp.password"}],attrs:{type:"password",placeholder:"Type-Password",required:""},domProps:{value:t.signUp.password},on:{input:function(e){e.target.composing||t.$set(t.signUp,"password",e.target.value)}}}),i("input",{attrs:{type:"submit",value:"SIGN ME UP"}})])]),i("div",{staticClass:"sign-in"},[i("h2",[t._v("Sign In")]),i("form",{staticStyle:{position:"relative",top:"80px"},on:{submit:t.signInData}},[t.error?i("div",{staticClass:"error"},[t._v(t._s(t.error)+t._s(t.remember))]):t._e(),i("input",{directives:[{name:"model",rawName:"v-model",value:t.signIn.email,expression:"signIn.email"}],staticClass:"sign-in-email",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.signIn.email},on:{input:function(e){e.target.composing||t.$set(t.signIn,"email",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.signIn.password,expression:"signIn.password"}],staticClass:"sign-in-password",staticStyle:{position:"relative",top:"15px"},attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:t.signIn.password},on:{input:function(e){e.target.composing||t.$set(t.signIn,"password",e.target.value)}}}),i("label",{staticClass:"container"},[t._v(" Remember me\r\n          "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.remember,expression:"remember"}],attrs:{type:"checkbox",value:"marked"},domProps:{checked:Array.isArray(t.remember)?t._i(t.remember,"marked")>-1:t.remember},on:{change:function(e){var a=t.remember,i=e.target,r=!!i.checked;if(Array.isArray(a)){var n="marked",s=t._i(a,n);i.checked?s<0&&(t.remember=a.concat([n])):s>-1&&(t.remember=a.slice(0,s).concat(a.slice(s+1)))}else t.remember=r}}}),i("span",{staticClass:"checkmark"})]),i("input",{staticStyle:{position:"relative",top:"50px"},attrs:{type:"submit",value:"SIGN IN"}}),i("div",{staticClass:"psw",staticStyle:{"text-align":"center",position:"relative",top:"50px"}},[t._v("Forgot Password?")])])]),i("div",{staticClass:"or"},[t._v("OR")])])])]),i("b-nav-item",{staticStyle:{padding:"5px"},attrs:{href:"#",active:"",to:{name:"about"}},nativeOn:{click:function(e){t.open=!1}}},[t._v("About Us")]),i("b-nav-item",{staticStyle:{padding:"5px"},attrs:{href:"#",active:"",to:{name:"login"}},nativeOn:{click:function(e){t.open=!1}}},[t._v("Doubts & Solution")]),i("b-nav-item-dropdown",{staticStyle:{padding:"5px"},attrs:{text:"All Program",right:"",type:"dark"}},[i("b-dropdown-item",{attrs:{href:"#",active:"",to:{name:"program8_9"}},nativeOn:{click:function(e){t.open=!1}}},[t._v("Class 8-9")]),i("b-dropdown-item",{attrs:{href:"#",active:"",to:{name:"program9_10"}},nativeOn:{click:function(e){t.open=!1}}},[t._v("Class 9-10")]),i("b-dropdown-item",{attrs:{href:"#",active:"",to:{name:"program11_12"}},nativeOn:{click:function(e){t.open=!1}}},[t._v("Class 11-12")])],1),i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}],attrs:{variant:"transparent"}},[i("b-img",{staticStyle:{padding:"8px"},attrs:{src:a("3273")}})],1),i("b-img",{staticStyle:{padding:"8px"},attrs:{src:a("202a")}})],1)],1)],1)],1)},f=[],h={name:"login",data:function(){return{error:"",remember:"",signUp:{name:null,email:null,contact:null,category:"",pin:null,city:null,password:null},signIn:{email:null,password:null}}},methods:{signUpData:function(){console.log(JSON.stringify(this.signUp))},signInData:function(){console.log(JSON.stringify(this.signIn))}}},x=h,y=(a("c396"),a("02aa"),Object(c["a"])(x,v,f,!1,null,"fb90405a",null)),_=y.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fixed-bottom",staticStyle:{"text-align":"right",padding:"20px 40px"}},[i("b-button",{staticStyle:{"background-color":"#063b6c","border-color":"#063b6c","border-radius":"8px"}},[i("b-img",{staticStyle:{padding:"0px 5px 0px 0px"},attrs:{src:a("8e29")}}),t._v("\n        Contact Us\n    ")],1)],1)},C=[],S={name:"contact-us"},k=S,U=Object(c["a"])(k,w,C,!1,null,null,null),I=U.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"social"},[t._v("\r\n        Connect with Us"),i("br"),i("b-img",{staticStyle:{padding:"14px"},attrs:{src:a("8485")}}),i("b-img",{staticStyle:{padding:"14px"},attrs:{src:a("acf9")}}),i("b-img",{staticStyle:{padding:"14px"},attrs:{src:a("5bde")}}),i("b-img",{staticStyle:{padding:"14px"},attrs:{src:a("11ef")}}),i("b-img",{staticStyle:{padding:"14px"},attrs:{src:a("bd6c")}})],1),i("div",{staticClass:"copright",staticStyle:{height:"50px"}},[t._v("\r\n        Copyright Notice: @ 2018 Greycells18 Media Limited and its Licensors. All rights reserved.\r\n    ")])])},L=[],O={name:"footer"},P=O,B=(a("760c"),Object(c["a"])(P,E,L,!1,null,null,null)),j=B.exports,N={components:{NavBar:_,ContactUs:I,FooterBar:j}},$=N,T=Object(c["a"])($,m,g,!1,null,null,null),A=T.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-bar"),a("div",[t._t("default")],2),a("footer-bar")],1)},q=[],D={components:{NavBar:_,ContactUs:I,FooterBar:j}},M=D,H=Object(c["a"])(M,z,q,!1,null,null,null),F=H.exports,W=a("5f5b");a("f9e3"),a("2dd8");i["default"].component("Default-layout",A),i["default"].component("NoContactUs-layout",F),i["default"].component("blanck-layout",F),i["default"].use(W["a"]),i["default"].config.productionTip=!1,new i["default"]({router:b,render:function(t){return t(u)}}).$mount("#app")},"586b":function(t,e,a){"use strict";var i=a("fe88"),r=a.n(i);r.a},"59e6":function(t,e,a){t.exports=a.p+"img/black-and-white-blur-capture-240163 (1).ef4691bd.jpg"},"5bde":function(t,e,a){t.exports=a.p+"img/gmail.7667d752.svg"},"760c":function(t,e,a){"use strict";var i=a("b675"),r=a.n(i);r.a},"798e":function(t,e,a){t.exports=a.p+"img/blog-businesswoman-create-267569.9ef7eed7.jpg"},8485:function(t,e,a){t.exports=a.p+"img/facebook.c3d544c8.svg"},"8e29":function(t,e,a){t.exports=a.p+"img/envelope.ee2597be.svg"},9872:function(t,e,a){t.exports=a.p+"img/question.16194deb.svg"},a59e:function(t,e,a){},a7e0:function(t,e,a){t.exports=a.p+"img/abacus-addition-arithmetic-1019470.f4b35aae.jpg"},ac68:function(t,e,a){"use strict";var i=a("b928"),r=a.n(i);r.a},acf9:function(t,e,a){t.exports=a.p+"img/twitter.319e57a1.svg"},ad30:function(t,e,a){t.exports=a.p+"img/black-and-white-boy-casual-555790.a4272d18.jpg"},b675:function(t,e,a){},b928:function(t,e,a){},bc13:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("br"),a("Carousel"),a("Courses"),a("Advertisements"),a("br"),a("Blogs"),a("br"),a("Students"),a("Videos"),a("br"),a("br"),a("br")],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("br"),a("br"),t._m(0),a("div",{staticStyle:{"background-color":"#62959a"}},[a("p",{staticStyle:{"font-weight":"bold",padding:"10px",color:"white","font-size":"20px"}},[t._v("Take Tests")]),a("div",{staticClass:"container",staticStyle:{padding:"0px 100px 25px"}},[a("b-card-group",{attrs:{deck:""}},[a("b-card",{staticStyle:{color:"#060505"},attrs:{title:"Competitive Exams"}},[a("b-card-text",{staticStyle:{padding:"25px 0px"}},[a("div",{staticClass:"container"},[a("b-button",{staticStyle:{"background-color":"#0f536d","border-color":"#0f536d",width:"100%"},attrs:{type:"submit"}},[t._v("JEE")])],1),a("div",{staticClass:"container"},[a("b-button",{staticStyle:{"background-color":"#0f536d","border-color":"#0f536d",width:"100%"},attrs:{type:"submit"}},[t._v("NEET")])],1)])],1),t._v("\r\n                  \r\n            "),a("b-card",{staticStyle:{color:"#060505"},attrs:{title:"Class 8-12"}},[a("b-card-text",[a("div",{staticClass:"container"},[a("b-form-select",{staticStyle:{"background-color":"#62959a",color:"white"},attrs:{options:t.Board},model:{value:t.selectBoard,callback:function(e){t.selectBoard=e},expression:"selectBoard"}})],1),a("div",{staticClass:"container"},[a("b-form-select",{staticStyle:{"background-color":"#62959a",color:"white"},attrs:{options:t.Class},model:{value:t.selectClass,callback:function(e){t.selectClass=e},expression:"selectClass"}})],1),a("div",{staticClass:"container"},[a("b-button",{staticStyle:{width:"100%","background-color":"#e16119","border-color":"#e16119"}},[t._v("Submit")])],1)])],1)],1)],1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticStyle:{"font-weight":"bold",padding:"10px",color:"#585252","font-size":"30px"}},[t._v("---Advertisement---")])])}],o={data:function(){return{selectBoard:null,Board:[{value:null,text:"Select your Board"},{value:"State",text:"State Board"},{value:"CBSE",text:"CBSE Board"},{value:"ICSE",text:"ICSE Board"}],selectClass:null,Class:[{value:null,text:"Select your Class"},{value:"08",text:"8"},{value:"09",text:"9"},{value:"10",text:"10"},{value:"11",text:"11"},{value:"12",text:"12"}]}}},l=o,c=(a("564f"),a("2877")),d=Object(c["a"])(l,n,s,!1,null,"4d0e62ba",null),u=d.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",staticStyle:{padding:"30px 100px 25px"}},[i("b-container",{staticClass:"bv-example-row"},[i("b-row",[i("b-col",{staticClass:"border-right"},[i("strong",{staticStyle:{"font-size":"20px","font-weight":"bold",color:"#141313"}},[t._v("Blogs")]),i("div",{staticStyle:{padding:"40px 14px 0px 0px"}},[i("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"4"}},[i("b-card-img",{staticStyle:{padding:"25px 20px 0px 20px",width:"150px"},attrs:{src:a("256f")}})],1),i("b-col",{attrs:{md:"8"}},[i("b-card-body",[i("b-card-text",{staticStyle:{"text-align":"left"}},[i("a",{attrs:{href:""}},[t._v("This is a wider card with supporting text as a natural lead.")]),i("br"),i("p",{staticStyle:{"font-size":"15px",color:"grey"}},[t._v("By:abc")])])],1)],1)],1)],1),i("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"4"}},[i("b-card-img",{staticStyle:{padding:"25px 20px 0px 20px",width:"150px"},attrs:{src:a("256f")}})],1),i("b-col",{attrs:{md:"8"}},[i("b-card-body",[i("b-card-text",{staticStyle:{"text-align":"left"}},[i("a",{attrs:{href:""}},[t._v("This is a wider card with supporting text as a natural lead.")]),i("br"),i("p",{staticStyle:{"font-size":"15px",color:"grey"}},[t._v("By:abc")])])],1)],1)],1)],1),i("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"4"}},[i("b-card-img",{staticStyle:{padding:"25px 20px 0px 20px",width:"150px"},attrs:{src:a("798e")}})],1),i("b-col",{attrs:{md:"8"}},[i("b-card-body",[i("b-card-text",{staticStyle:{"text-align":"left"}},[i("a",{attrs:{href:""}},[t._v("This is a wider card with supporting text as a natural lead.")]),i("br"),i("p",{staticStyle:{"font-size":"15px",color:"grey"}},[t._v("By:abc")])])],1)],1)],1)],1)],1),i("br"),i("b-button",{staticStyle:{"background-color":"#e16119","border-color":"#e16119",width:"150px"}},[t._v("View More")])],1),i("b-col",[i("strong",{staticStyle:{"font-size":"20px","font-weight":"bold",color:"#141313"}},[t._v("Questions & Answers")]),i("div",{staticStyle:{padding:"40px 0px 0px 14px"}},[i("b-row",[i("b-col",{attrs:{sm:"8"}},[i("b-form-input",{attrs:{placeholder:"Type your question here..."},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),i("b-col",{attrs:{sm:"4"}},[i("b-button",{staticStyle:{"background-color":"#e16119","border-color":"#e16119"}},[t._v("Ask Question")])],1)],1),i("br"),i("br"),i("b-card",{staticClass:"overflow-hidden",staticStyle:{height:"150px"},attrs:{"no-body":""}},[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"2"}},[i("b-card-img",{staticStyle:{padding:"50px 10px",width:"80px"},attrs:{src:a("9872")}})],1),i("b-col",{attrs:{md:"10"}},[i("b-card-body",{staticStyle:{"text-align":"left"}},[i("b-card-text",[i("p",{staticStyle:{color:"grey","font-size":"15px"}},[t._v("Class-Board-Subject")]),i("a",{attrs:{href:""}},[t._v("This is a wider card with supporting text as a natural lead.")]),i("br"),i("p",{staticStyle:{"font-size":"15px",color:"grey"}},[t._v("By:abc")])])],1)],1)],1)],1),i("b-card",{staticClass:"overflow-hidden",staticStyle:{height:"150px"},attrs:{"no-body":""}},[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"2"}},[i("b-card-img",{staticStyle:{padding:"50px 10px",width:"80px"},attrs:{src:a("9872")}})],1),i("b-col",{attrs:{md:"10"}},[i("b-card-body",{staticStyle:{"text-align":"left"}},[i("b-card-text",[i("p",{staticStyle:{color:"grey","font-size":"15px"}},[t._v("Class-Board-Subject")]),i("a",{attrs:{href:""}},[t._v("This is a wider card with supporting text as a natural lead.")]),i("br"),i("p",{staticStyle:{"font-size":"15px",color:"grey"}},[t._v("By:abc")])])],1)],1)],1)],1)],1),i("br"),i("b-button",{staticStyle:{"background-color":"#e34a00","border-color":"#e34a00",width:"150px"}},[t._v("View More")])],1)],1)],1)],1)},b=[],m={},g=m,v=(a("3c6d"),Object(c["a"])(g,p,b,!1,null,null,null)),f=v.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"50px"}},[a("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"480","img-height":"120"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/480/120/?image=52"}},[a("h3",[t._v("The Best")]),a("h4",[t._v("We pride ourselves in being the very best in Teaching")])]),a("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/480/120/?image=59"}}),a("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/480/120/?image=42"}})],1),t._m(0)],1)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notif"},[a("h4",{staticStyle:{color:"rgb(240, 222, 61)"}},[a("b",{staticStyle:{color:"white"}},[t._v("Notification : ")]),t._v("CLAT 2019 to be conducted online.")])])}],y={},_=y,w=(a("debf"),Object(c["a"])(_,h,x,!1,null,"81287e08",null)),C=w.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"programs",staticStyle:{"padding-bottom":"150px"}},[a("h1",{staticStyle:{padding:"15px 15px 0px",color:"white","text-decoration":"underline"}},[t._v("Programs")]),a("b-container",{staticClass:"bv-example-row"},[a("b-row",[a("b-col",[a("h2",{staticStyle:{padding:"15px 15px 0px",color:"white"}},[t._v("Class 8-9")]),a("br"),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("br"),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("br"),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("br"),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("br")],1),a("b-col",[a("h2",{staticStyle:{padding:"15px 15px 0px",color:"white"}},[t._v("Class 9-10")]),a("br"),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("br"),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("br"),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("br"),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("br")],1),a("b-col",[a("h2",{staticStyle:{padding:"15px 15px 0px",color:"white"}},[t._v("Class 10-11")]),a("br"),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("br"),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("br"),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("br"),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),a("br")],1)],1)],1)],1)},k=[],U={},I=U,E=(a("f746"),Object(c["a"])(I,S,k,!1,null,"77631d8c",null)),L=E.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{padding:"0px 0px"}},[i("div",[i("b-carousel",{attrs:{id:"carousel-1",interval:4e4,controls:"",indicators:"",background:"#E0E0E0","img-width":"1024","img-height":"280"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[i("b-carousel-slide",{staticStyle:{},attrs:{caption:"","img-blank":"","img-alt":""}},[i("div",{staticClass:"container"},[i("div",[i("h5",{staticClass:"text-dark",staticStyle:{"font-weight":"bold","font-size":"30px",padding:"20px 0px"}},[t._v("Words from our Students")])]),i("div",{staticClass:"container"},[i("img",{staticClass:"rounded-circle",attrs:{src:a("ad30"),alt:"Sample image",width:"150",height:"125"}}),i("p",{staticClass:"text-dark",staticStyle:{padding:"30px"}},[t._v("Lorem ipsum dolar sit amet consectuer adipiscing elite sed do eiusmod tempor incididunt ut labor at dolar manga aliqua")])])])]),i("b-carousel-slide",{staticStyle:{},attrs:{caption:"","img-blank":"","img-alt":""}},[i("div",{staticClass:"container"},[i("div",[i("h5",{staticClass:"text-dark",staticStyle:{"font-weight":"bold","font-size":"30px",padding:"20px 0px"}},[t._v("Words from our Students")])]),i("div",{staticClass:"container"},[i("img",{staticClass:"rounded-circle",attrs:{src:a("ad30"),alt:"Sample image",width:"150",height:"125"}}),i("p",{staticClass:"text-dark",staticStyle:{padding:"30px"}},[t._v("Lorem ipsum dolar sit amet consectuer adipiscing elite sed do eiusmod tempor incididunt ut labor at dolar manga aliqua")])])])]),i("b-carousel-slide",{staticStyle:{},attrs:{caption:"","img-blank":"","img-alt":""}},[i("div",{staticClass:"container"},[i("div",[i("h5",{staticClass:"text-dark",staticStyle:{"font-weight":"bold","font-size":"30px",padding:"20px 0px"}},[t._v("Words from our Students")])]),i("div",{staticClass:"container"},[i("img",{staticClass:"rounded-circle",attrs:{src:a("ad30"),alt:"Sample image",width:"150",height:"125"}}),i("p",{staticClass:"text-dark",staticStyle:{padding:"30px"}},[t._v("Lorem ipsum dolar sit amet consectuer adipiscing elite sed do eiusmod tempor incididunt ut labor at dolar manga aliqua")])])])]),i("b-carousel-slide",{staticStyle:{},attrs:{caption:"","img-blank":"","img-alt":""}},[i("div",{staticClass:"container"},[i("div",[i("h5",{staticClass:"text-dark",staticStyle:{"font-weight":"bold","font-size":"30px",padding:"20px 0px"}},[t._v("Words from our Students")])]),i("div",{staticClass:"container"},[i("img",{staticClass:"rounded-circle",attrs:{src:a("ad30"),alt:"Sample image",width:"150",height:"125"}}),i("p",{staticClass:"text-dark",staticStyle:{padding:"30px"}},[t._v("Lorem ipsum dolar sit amet consectuer adipiscing elite sed do eiusmod tempor incididunt ut labor at dolar manga aliqua")])])])])],1),i("p",{staticClass:"mt-4"})],1)])},P=[],B={data:function(){return{slide:0,sliding:null,mainProps:{blank:!0,blankColor:"#777",width:75,height:75,class:"m1"}}},methods:{}},j=B,N=(a("586b"),Object(c["a"])(j,O,P,!1,null,null,null)),$=N.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{},[i("h5",{staticClass:"text-dark",staticStyle:{"font-weight":"bold","font-size":"35px",padding:"px 0px"}},[t._v("Videos")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"thumbnail"},[i("img",{staticStyle:{width:"420"},attrs:{src:a("a7e0"),alt:"Lights",height:"240"}})])]),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"thumbnail"},[i("img",{staticStyle:{width:"420"},attrs:{src:a("59e6"),alt:"Nature",height:"240"}})])]),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"thumbnail"},[i("img",{staticStyle:{width:"420"},attrs:{src:a("d0f1"),alt:"Fjords",height:"240"}})])])])])}],z={},q=z,D=Object(c["a"])(q,T,A,!1,null,null,null),M=D.exports,H={name:"home",components:{Advertisements:u,Blogs:f,Carousel:C,Courses:L,Students:$,Videos:M}},F=H,W=Object(c["a"])(F,i,r,!1,null,"016c1c02",null);e["default"]=W.exports},bd6c:function(t,e,a){t.exports=a.p+"img/instagram.e6d0b5ea.svg"},c396:function(t,e,a){"use strict";var i=a("3061"),r=a.n(i);r.a},cff9:function(t,e,a){},d005:function(t,e,a){t.exports=a.p+"img/down_arrow.2526e99c.svg"},d0f1:function(t,e,a){t.exports=a.p+"img/biology-blur-blurred-background-954585.f1c194f6.jpg"},debf:function(t,e,a){"use strict";var i=a("1095"),r=a.n(i);r.a},f3bc:function(t,e,a){},f746:function(t,e,a){"use strict";var i=a("a59e"),r=a.n(i);r.a},fe88:function(t,e,a){}});
//# sourceMappingURL=app.afd9b1a5.js.map