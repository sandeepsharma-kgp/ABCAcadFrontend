(function(t){function a(a){for(var i,r,o=a[0],l=a[1],c=a[2],d=0,u=[];d<o.length;d++)r=o[d],n[r]&&u.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);p&&p(a);while(u.length)u.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],i=!0,r=1;r<e.length;r++){var o=e[r];0!==n[o]&&(i=!1)}i&&(s.splice(a--,1),t=l(l.s=e[0]))}return t}var i={},r={app:0},n={app:0},s=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"72322d0e","chunk-1582daba":"e014aebf","chunk-48e79af9":"ae17840e","chunk-49b0f070":"9fafe1c2"}[t]+".js"}function l(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.e=function(t){var a=[],e={"chunk-1582daba":1,"chunk-48e79af9":1,"chunk-49b0f070":1};r[t]?a.push(r[t]):0!==r[t]&&e[t]&&a.push(r[t]=new Promise(function(a,e){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-1582daba":"666f5c0d","chunk-48e79af9":"3ec1d245","chunk-49b0f070":"48a97e39"}[t]+".css",n=l.p+i,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===i||d===n))return a()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){c=u[o],d=c.getAttribute("data-href");if(d===i||d===n)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var i=a&&a.target&&a.target.src||n,s=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=i,delete r[t],p.parentNode.removeChild(p),e(s)},p.href=n;var b=document.getElementsByTagName("head")[0];b.appendChild(p)}).then(function(){r[t]=0}));var i=n[t];if(0!==i)if(i)a.push(i[2]);else{var s=new Promise(function(a,e){i=n[t]=[a,e]});a.push(i[2]=s);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=o(t),c=function(a){d.onerror=d.onload=null,clearTimeout(u);var e=n[t];if(0!==e){if(e){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src,s=new Error("Loading chunk "+t+" failed.\n("+i+": "+r+")");s.type=i,s.request=r,e[1](s)}n[t]=void 0}};var u=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(a)},l.m=t,l.c=i,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)l.d(e,i,function(a){return t[a]}.bind(null,i));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var p=d;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"018d":function(t,a,e){},"01f2":function(t,a,e){t.exports=e.p+"img/call.561f9fb6.svg"},"02aa":function(t,a,e){"use strict";var i=e("cff9"),r=e.n(i);r.a},1095:function(t,a,e){},"11ef":function(t,a,e){t.exports=e.p+"img/youtube.8df2f084.svg"},"202a":function(t,a,e){t.exports=e.p+"img/map-pin-marked.2bca9586.svg"},"256f":function(t,a,e){t.exports=e.p+"img/blogging-blur-communication-261662.18ac1b9a.jpg"},3061:function(t,a,e){},3273:function(t,a,e){t.exports=e.p+"img/man-user.3572e1ce.svg"},"3c6d":function(t,a,e){"use strict";var i=e("018d"),r=e.n(i);r.a},"564f":function(t,a,e){"use strict";var i=e("f3bc"),r=e.n(i);r.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e(t.layout,{tag:"component"},[e("router-view")],1)],1)},n=[],s="default",o={computed:{layout:function(){return(this.$route.meta.layout||s)+"-layout"}},created:function(){console.log(this.$route,this.$route.meta.layout)},updated:function(){console.log(this.$route,this.$route.meta.layout)}},l=o,c=(e("ac68"),e("2877")),d=Object(c["a"])(l,r,n,!1,null,"5195faf6",null),u=d.exports,p=e("8c4f");i["default"].use(p["a"]);var b=new p["a"]({mode:"history",routes:[{path:"/",name:"home",meta:{layout:"Default"},component:e("bc13").default},{path:"/about",name:"about",meta:{layout:"Default"},component:function(){return e.e("about").then(e.bind(null,"a1d1"))}},{path:"/program8_9",name:"program8_9",meta:{layout:"Default"},component:function(){return e.e("chunk-1582daba").then(e.bind(null,"87b6"))}},{path:"/program11_12",name:"program11_12",meta:{layout:"Default"},component:function(){return e.e("chunk-49b0f070").then(e.bind(null,"9afc"))}},{path:"/program9_10",name:"program9_10",meta:{layout:"Default"},component:function(){return e.e("chunk-48e79af9").then(e.bind(null,"44fe"))}}]}),m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav-bar"),e("div",[e("div",[t._t("default")],2)]),e("footer-bar"),e("ContactUs")],1)},g=[],v=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info",fixed:"top"}},[i("b-navbar-brand",{staticStyle:{"font-weight":"bold","font-size":"27px"},attrs:{href:"#",to:"/"},nativeOn:{click:function(a){t.open=!1}}},[t._v("\r\n      Albedo Academy")]),i("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("b-navbar-nav",{staticClass:"ml-auto"},[i("a",{staticClass:"call",attrs:{href:"#"}},[i("b-img",{staticStyle:{padding:"14px"},attrs:{src:e("01f2")}}),i("h8",{staticStyle:{padding:"14px","padding-left":"0px"}},[t._v("+91-xxxxxxxxxx")])],1),i("b-button",{staticClass:"scholar",attrs:{variant:"outline-dark"}},[t._v("Scholarship")]),i("b-modal",{ref:"modal",attrs:{"hide-footer":"",id:"modal-prevent-closing",title:"Login/Sign Up",size:"xl"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk}},[i("form",{ref:"form",on:{submit:function(a){return a.stopPropagation(),a.preventDefault(),t.handleSubmit(a)}}},[i("div",{attrs:{id:"login"}},[i("div",{staticClass:"sign-up"},[i("h1",[t._v(" Welcome to Albedo ")]),i("form",{on:{submit:t.signUpData}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.name,expression:"signUp.name"}],attrs:{type:"text",placeholder:"Full Name",required:""},domProps:{value:t.signUp.name},on:{input:function(a){a.target.composing||t.$set(t.signUp,"name",a.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.email,expression:"signUp.email"}],attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.signUp.email},on:{input:function(a){a.target.composing||t.$set(t.signUp,"email",a.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.contact,expression:"signUp.contact"}],attrs:{type:"tele",pattern:"[0-9]{10}",placeholder:"Contact Number",required:""},domProps:{value:t.signUp.contact},on:{input:function(a){a.target.composing||t.$set(t.signUp,"contact",a.target.value)}}}),i("select",{directives:[{name:"model",rawName:"v-model",value:t.signUp.category,expression:"signUp.category"}],attrs:{placeholder:"Category",required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.$set(t.signUp,"category",a.target.multiple?e:e[0])}}},[i("option",{attrs:{disabled:"",value:"",selected:"","data-default":""}},[t._v("Category")]),i("option",{attrs:{value:"Unreserved"}},[t._v("Unreserved")]),i("option",{attrs:{value:"OBC"}},[t._v("OBC")]),i("option",{attrs:{value:"SC"}},[t._v("SC")]),i("option",{attrs:{value:"ST"}},[t._v("ST")]),i("option",{attrs:{value:"Unreserved-PH"}},[t._v("Unreserved-PH")]),i("option",{attrs:{value:"OBC-PH"}},[t._v("OBC-PH")]),i("option",{attrs:{value:"SC-PH"}},[t._v("SC-PH")]),i("option",{attrs:{value:"ST-PH"}},[t._v("ST-PH")])]),i("img",{staticClass:"select-arrow",attrs:{src:e("d005")}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.pin,expression:"signUp.pin"}],attrs:{type:"text",pattern:"[0-9]{6}",maxlength:"6",placeholder:"Pin Code",required:""},domProps:{value:t.signUp.pin},on:{input:function(a){a.target.composing||t.$set(t.signUp,"pin",a.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.city,expression:"signUp.city"}],attrs:{type:"text",placeholder:"City",required:""},domProps:{value:t.signUp.city},on:{input:function(a){a.target.composing||t.$set(t.signUp,"city",a.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.signUp.password,expression:"signUp.password"}],attrs:{type:"password",placeholder:"Type-Password",required:""},domProps:{value:t.signUp.password},on:{input:function(a){a.target.composing||t.$set(t.signUp,"password",a.target.value)}}}),i("input",{attrs:{type:"submit",value:"SIGN ME UP"}})])]),i("div",{staticClass:"sign-in"},[i("h2",[t._v("Sign In")]),i("form",{staticStyle:{position:"relative",top:"80px"},on:{submit:t.signInData}},[t.error?i("div",{staticClass:"error"},[t._v(t._s(t.error)+t._s(t.remember))]):t._e(),i("input",{directives:[{name:"model",rawName:"v-model",value:t.signIn.email,expression:"signIn.email"}],staticClass:"sign-in-email",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.signIn.email},on:{input:function(a){a.target.composing||t.$set(t.signIn,"email",a.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.signIn.password,expression:"signIn.password"}],staticClass:"sign-in-password",staticStyle:{position:"relative",top:"15px"},attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:t.signIn.password},on:{input:function(a){a.target.composing||t.$set(t.signIn,"password",a.target.value)}}}),i("label",{staticClass:"container"},[t._v(" Remember me\r\n          "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.remember,expression:"remember"}],attrs:{type:"checkbox",value:"marked"},domProps:{checked:Array.isArray(t.remember)?t._i(t.remember,"marked")>-1:t.remember},on:{change:function(a){var e=t.remember,i=a.target,r=!!i.checked;if(Array.isArray(e)){var n="marked",s=t._i(e,n);i.checked?s<0&&(t.remember=e.concat([n])):s>-1&&(t.remember=e.slice(0,s).concat(e.slice(s+1)))}else t.remember=r}}}),i("span",{staticClass:"checkmark"})]),i("input",{staticStyle:{position:"relative",top:"50px"},attrs:{type:"submit",value:"SIGN IN"}}),i("div",{staticClass:"psw",staticStyle:{"text-align":"center",position:"relative",top:"50px"}},[t._v("Forgot Password?")])])]),i("div",{staticClass:"or"},[t._v("OR")])])])]),i("b-nav-item",{staticStyle:{padding:"5px"},attrs:{href:"#",active:"",to:{name:"about"}},nativeOn:{click:function(a){t.open=!1}}},[t._v("About Us")]),i("b-nav-item",{staticStyle:{padding:"5px"},attrs:{href:"#",active:"",to:{name:"login"}},nativeOn:{click:function(a){t.open=!1}}},[t._v("Doubts & Solution")]),i("b-nav-item-dropdown",{staticStyle:{padding:"5px"},attrs:{text:"All Program",right:"",type:"dark"}},[i("b-dropdown-item",{attrs:{href:"#",active:"",to:{name:"program8_9"}},nativeOn:{click:function(a){t.open=!1}}},[t._v("Class 8-9")]),i("b-dropdown-item",{attrs:{href:"#",active:"",to:{name:"program9_10"}},nativeOn:{click:function(a){t.open=!1}}},[t._v("Class 9-10")]),i("b-dropdown-item",{attrs:{href:"#",active:"",to:{name:"program11_12"}},nativeOn:{click:function(a){t.open=!1}}},[t._v("Class 11-12")])],1),i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}],attrs:{variant:"transparent"}},[i("b-img",{staticStyle:{padding:"8px"},attrs:{src:e("3273")}})],1),i("b-img",{staticStyle:{padding:"8px"},attrs:{src:e("202a")}})],1)],1)],1)],1)},f=[],h={name:"login",data:function(){return{error:"",remember:"",signUp:{name:null,email:null,contact:null,category:"",pin:null,city:null,password:null},signIn:{email:null,password:null}}},methods:{signUpData:function(){console.log(JSON.stringify(this.signUp))},signInData:function(){console.log(JSON.stringify(this.signIn))}}},x=h,y=(e("c396"),e("02aa"),Object(c["a"])(x,v,f,!1,null,"fb90405a",null)),_=y.exports,w=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"fixed-bottom",staticStyle:{"text-align":"right",padding:"20px 40px"}},[i("b-button",{staticStyle:{"background-color":"#063b6c","border-color":"#063b6c","border-radius":"8px"}},[i("b-img",{staticStyle:{padding:"0px 5px 0px 0px"},attrs:{src:e("8e29")}}),t._v("\n        Contact Us\n    ")],1)],1)},C=[],S={name:"contact-us"},k=S,U=Object(c["a"])(k,w,C,!1,null,null,null),I=U.exports,E=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"social"},[t._v("\r\n        Connect with Us"),i("br"),i("b-img",{staticStyle:{padding:"14px"},attrs:{src:e("8485")}}),i("b-img",{staticStyle:{padding:"14px"},attrs:{src:e("acf9")}}),i("b-img",{staticStyle:{padding:"14px"},attrs:{src:e("5bde")}}),i("b-img",{staticStyle:{padding:"14px"},attrs:{src:e("11ef")}}),i("b-img",{staticStyle:{padding:"14px"},attrs:{src:e("bd6c")}})],1),i("div",{staticClass:"copright",staticStyle:{height:"50px"}},[t._v("\r\n        Copyright Notice: @ 2018 Greycells18 Media Limited and its Licensors. All rights reserved.\r\n    ")])])},L=[],O={name:"footer"},P=O,B=(e("760c"),Object(c["a"])(P,E,L,!1,null,null,null)),j=B.exports,N={components:{NavBar:_,ContactUs:I,FooterBar:j}},$=N,T=Object(c["a"])($,m,g,!1,null,null,null),A=T.exports,z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav-bar"),e("div",[t._t("default")],2),e("footer-bar")],1)},q=[],D={components:{NavBar:_,ContactUs:I,FooterBar:j}},M=D,H=Object(c["a"])(M,z,q,!1,null,null,null),F=H.exports,W=e("5f5b");e("f9e3"),e("2dd8");i["default"].component("Default-layout",A),i["default"].component("NoContactUs-layout",F),i["default"].component("blanck-layout",F),i["default"].use(W["a"]),i["default"].config.productionTip=!1,new i["default"]({router:b,render:function(t){return t(u)}}).$mount("#app")},"586b":function(t,a,e){"use strict";var i=e("fe88"),r=e.n(i);r.a},"59e6":function(t,a,e){t.exports=e.p+"img/black-and-white-blur-capture-240163 (1).ef4691bd.jpg"},"5bde":function(t,a,e){t.exports=e.p+"img/gmail.7667d752.svg"},"760c":function(t,a,e){"use strict";var i=e("b675"),r=e.n(i);r.a},"798e":function(t,a,e){t.exports=e.p+"img/blog-businesswoman-create-267569.9ef7eed7.jpg"},8485:function(t,a,e){t.exports=e.p+"img/facebook.c3d544c8.svg"},"8e29":function(t,a,e){t.exports=e.p+"img/envelope.ee2597be.svg"},9872:function(t,a,e){t.exports=e.p+"img/question.16194deb.svg"},a59e:function(t,a,e){},a7e0:function(t,a,e){t.exports=e.p+"img/abacus-addition-arithmetic-1019470.f4b35aae.jpg"},ac68:function(t,a,e){"use strict";var i=e("b928"),r=e.n(i);r.a},acf9:function(t,a,e){t.exports=e.p+"img/twitter.319e57a1.svg"},ad30:function(t,a,e){t.exports=e.p+"img/black-and-white-boy-casual-555790.a4272d18.jpg"},b675:function(t,a,e){},b928:function(t,a,e){},bc13:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("br"),e("br"),e("Carousel"),e("Courses"),e("Advertisements"),e("br"),e("Blogs"),e("br"),e("Students"),e("Videos"),e("br"),e("br"),e("br")],1)},r=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("br"),e("br"),e("br"),t._m(0),e("div",{staticStyle:{"background-color":"#62959a"}},[e("p",{staticStyle:{"font-weight":"bold",padding:"10px",color:"white","font-size":"20px"}},[t._v("Take Tests")]),e("div",{staticClass:"container",staticStyle:{padding:"0px 100px 25px"}},[e("b-card-group",{attrs:{deck:""}},[e("b-card",{staticStyle:{color:"#060505"},attrs:{title:"Competitive Exams"}},[e("b-card-text",{staticStyle:{padding:"25px 0px"}},[e("div",{staticClass:"container"},[e("b-button",{staticStyle:{"background-color":"#0f536d","border-color":"#0f536d",width:"100%"},attrs:{type:"submit"}},[t._v("JEE")])],1),e("div",{staticClass:"container"},[e("b-button",{staticStyle:{"background-color":"#0f536d","border-color":"#0f536d",width:"100%"},attrs:{type:"submit"}},[t._v("NEET")])],1)])],1),t._v("\r\n                  \r\n            "),e("b-card",{staticStyle:{color:"#060505"},attrs:{title:"Class 8-12"}},[e("b-card-text",[e("div",{staticClass:"container"},[e("b-form-select",{staticStyle:{"background-color":"#62959a",color:"white"},attrs:{options:t.Board},model:{value:t.selectBoard,callback:function(a){t.selectBoard=a},expression:"selectBoard"}})],1),e("div",{staticClass:"container"},[e("b-form-select",{staticStyle:{"background-color":"#62959a",color:"white"},attrs:{options:t.Class},model:{value:t.selectClass,callback:function(a){t.selectClass=a},expression:"selectClass"}})],1),e("div",{staticClass:"container"},[e("b-button",{staticStyle:{width:"100%","background-color":"#e16119","border-color":"#e16119"}},[t._v("Submit")])],1)])],1)],1)],1)])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("p",{staticStyle:{"font-weight":"bold",padding:"10px",color:"#585252","font-size":"30px"}},[t._v("---Advertisement---")])])}],o={data:function(){return{selectBoard:null,Board:[{value:null,text:"Select your Board"},{value:"State",text:"State Board"},{value:"CBSE",text:"CBSE Board"},{value:"ICSE",text:"ICSE Board"}],selectClass:null,Class:[{value:null,text:"Select your Class"},{value:"08",text:"8"},{value:"09",text:"9"},{value:"10",text:"10"},{value:"11",text:"11"},{value:"12",text:"12"}]}}},l=o,c=(e("564f"),e("2877")),d=Object(c["a"])(l,n,s,!1,null,"4d0e62ba",null),u=d.exports,p=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container",staticStyle:{padding:"30px 100px 25px"}},[i("b-container",{staticClass:"bv-example-row"},[i("b-row",[i("b-col",{staticClass:"border-right"},[i("strong",{staticStyle:{"font-size":"20px","font-weight":"bold",color:"#141313"}},[t._v("Blogs")]),i("div",{staticStyle:{padding:"40px 14px 0px 0px"}},[i("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"4"}},[i("b-card-img",{staticStyle:{padding:"25px 20px 0px 20px",width:"150px"},attrs:{src:e("256f")}})],1),i("b-col",{attrs:{md:"8"}},[i("b-card-body",[i("b-card-text",{staticStyle:{"text-align":"left"}},[i("a",{attrs:{href:""}},[t._v("This is a wider card with supporting text as a natural lead.")]),i("br"),i("p",{staticStyle:{"font-size":"15px",color:"grey"}},[t._v("By:abc")])])],1)],1)],1)],1),i("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"4"}},[i("b-card-img",{staticStyle:{padding:"25px 20px 0px 20px",width:"150px"},attrs:{src:e("256f")}})],1),i("b-col",{attrs:{md:"8"}},[i("b-card-body",[i("b-card-text",{staticStyle:{"text-align":"left"}},[i("a",{attrs:{href:""}},[t._v("This is a wider card with supporting text as a natural lead.")]),i("br"),i("p",{staticStyle:{"font-size":"15px",color:"grey"}},[t._v("By:abc")])])],1)],1)],1)],1),i("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":""}},[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"4"}},[i("b-card-img",{staticStyle:{padding:"25px 20px 0px 20px",width:"150px"},attrs:{src:e("798e")}})],1),i("b-col",{attrs:{md:"8"}},[i("b-card-body",[i("b-card-text",{staticStyle:{"text-align":"left"}},[i("a",{attrs:{href:""}},[t._v("This is a wider card with supporting text as a natural lead.")]),i("br"),i("p",{staticStyle:{"font-size":"15px",color:"grey"}},[t._v("By:abc")])])],1)],1)],1)],1)],1),i("br"),i("b-button",{staticStyle:{"background-color":"#e16119","border-color":"#e16119",width:"150px"}},[t._v("View More")])],1),i("b-col",[i("strong",{staticStyle:{"font-size":"20px","font-weight":"bold",color:"#141313"}},[t._v("Questions & Answers")]),i("div",{staticStyle:{padding:"40px 0px 0px 14px"}},[i("b-row",[i("b-col",{attrs:{sm:"8"}},[i("b-form-input",{attrs:{placeholder:"Type your question here..."},model:{value:t.text,callback:function(a){t.text=a},expression:"text"}})],1),i("b-col",{attrs:{sm:"4"}},[i("b-button",{staticStyle:{"background-color":"#e16119","border-color":"#e16119"}},[t._v("Ask Question")])],1)],1),i("br"),i("br"),i("b-card",{staticClass:"overflow-hidden",staticStyle:{height:"150px"},attrs:{"no-body":""}},[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"2"}},[i("b-card-img",{staticStyle:{padding:"50px 10px",width:"80px"},attrs:{src:e("9872")}})],1),i("b-col",{attrs:{md:"10"}},[i("b-card-body",{staticStyle:{"text-align":"left"}},[i("b-card-text",[i("p",{staticStyle:{color:"grey","font-size":"15px"}},[t._v("Class-Board-Subject")]),i("a",{attrs:{href:""}},[t._v("This is a wider card with supporting text as a natural lead.")]),i("br"),i("p",{staticStyle:{"font-size":"15px",color:"grey"}},[t._v("By:abc")])])],1)],1)],1)],1),i("b-card",{staticClass:"overflow-hidden",staticStyle:{height:"150px"},attrs:{"no-body":""}},[i("b-row",{attrs:{"no-gutters":""}},[i("b-col",{attrs:{md:"2"}},[i("b-card-img",{staticStyle:{padding:"50px 10px",width:"80px"},attrs:{src:e("9872")}})],1),i("b-col",{attrs:{md:"10"}},[i("b-card-body",{staticStyle:{"text-align":"left"}},[i("b-card-text",[i("p",{staticStyle:{color:"grey","font-size":"15px"}},[t._v("Class-Board-Subject")]),i("a",{attrs:{href:""}},[t._v("This is a wider card with supporting text as a natural lead.")]),i("br"),i("p",{staticStyle:{"font-size":"15px",color:"grey"}},[t._v("By:abc")])])],1)],1)],1)],1)],1),i("br"),i("b-button",{staticStyle:{"background-color":"#e34a00","border-color":"#e34a00",width:"150px"}},[t._v("View More")])],1)],1)],1)],1)},b=[],m={},g=m,v=(e("3c6d"),Object(c["a"])(g,p,b,!1,null,null,null)),f=v.exports,h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{padding:"50px"}},[e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"480","img-height":"120"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(a){t.slide=a},expression:"slide"}},[e("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/480/120/?image=52"}},[e("h3",[t._v("The Best")]),e("h4",[t._v("We pride ourselves in being the very best in Teaching")])]),e("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/480/120/?image=59"}}),e("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/480/120/?image=42"}})],1),t._m(0)],1)},x=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"notif"},[e("h4",{staticStyle:{color:"rgb(240, 222, 61)"}},[e("b",{staticStyle:{color:"white"}},[t._v("Notification : ")]),t._v("CLAT 2019 to be conducted online.")])])}],y={},_=y,w=(e("debf"),Object(c["a"])(_,h,x,!1,null,"81287e08",null)),C=w.exports,S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"programs",staticStyle:{"padding-bottom":"150px"}},[e("h1",{staticStyle:{padding:"15px 15px 0px",color:"white","text-decoration":"underline"}},[t._v("Programs")]),e("b-container",{staticClass:"bv-example-row"},[e("b-row",[e("b-col",[e("h2",{staticStyle:{padding:"15px 15px 0px",color:"white"}},[t._v("Class 8-9")]),e("br"),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("br"),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("br"),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("br"),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("br")],1),e("b-col",[e("h2",{staticStyle:{padding:"15px 15px 0px",color:"white"}},[t._v("Class 9-10")]),e("br"),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("br"),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("br"),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("br"),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("br")],1),e("b-col",[e("h2",{staticStyle:{padding:"15px 15px 0px",color:"white"}},[t._v("Class 10-11")]),e("br"),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("br"),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("br"),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("br"),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("b-button",{staticClass:"btn",attrs:{href:"#",variant:"warning"}},[t._v("I am a Link")]),e("br")],1)],1)],1)],1)},k=[],U={},I=U,E=(e("f746"),Object(c["a"])(I,S,k,!1,null,"77631d8c",null)),L=E.exports,O=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticStyle:{padding:"0px 0px"}},[i("div",[i("b-carousel",{attrs:{id:"carousel-1",interval:4e4,controls:"",indicators:"",background:"#E0E0E0","img-width":"1024","img-height":"280"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(a){t.slide=a},expression:"slide"}},[i("b-carousel-slide",{staticStyle:{},attrs:{caption:"","img-blank":"","img-alt":""}},[i("div",{staticClass:"container"},[i("div",[i("h5",{staticClass:"text-dark",staticStyle:{"font-weight":"bold","font-size":"30px",padding:"20px 0px"}},[t._v("Words from our Students")])]),i("div",{staticClass:"container"},[i("img",{staticClass:"rounded-circle",attrs:{src:e("ad30"),alt:"Sample image",width:"150",height:"125"}}),i("p",{staticClass:"text-dark",staticStyle:{padding:"30px"}},[t._v("Lorem ipsum dolar sit amet consectuer adipiscing elite sed do eiusmod tempor incididunt ut labor at dolar manga aliqua")])])])]),i("b-carousel-slide",{staticStyle:{},attrs:{caption:"","img-blank":"","img-alt":""}},[i("div",{staticClass:"container"},[i("div",[i("h5",{staticClass:"text-dark",staticStyle:{"font-weight":"bold","font-size":"30px",padding:"20px 0px"}},[t._v("Words from our Students")])]),i("div",{staticClass:"container"},[i("img",{staticClass:"rounded-circle",attrs:{src:e("ad30"),alt:"Sample image",width:"150",height:"125"}}),i("p",{staticClass:"text-dark",staticStyle:{padding:"30px"}},[t._v("Lorem ipsum dolar sit amet consectuer adipiscing elite sed do eiusmod tempor incididunt ut labor at dolar manga aliqua")])])])]),i("b-carousel-slide",{staticStyle:{},attrs:{caption:"","img-blank":"","img-alt":""}},[i("div",{staticClass:"container"},[i("div",[i("h5",{staticClass:"text-dark",staticStyle:{"font-weight":"bold","font-size":"30px",padding:"20px 0px"}},[t._v("Words from our Students")])]),i("div",{staticClass:"container"},[i("img",{staticClass:"rounded-circle",attrs:{src:e("ad30"),alt:"Sample image",width:"150",height:"125"}}),i("p",{staticClass:"text-dark",staticStyle:{padding:"30px"}},[t._v("Lorem ipsum dolar sit amet consectuer adipiscing elite sed do eiusmod tempor incididunt ut labor at dolar manga aliqua")])])])]),i("b-carousel-slide",{staticStyle:{},attrs:{caption:"","img-blank":"","img-alt":""}},[i("div",{staticClass:"container"},[i("div",[i("h5",{staticClass:"text-dark",staticStyle:{"font-weight":"bold","font-size":"30px",padding:"20px 0px"}},[t._v("Words from our Students")])]),i("div",{staticClass:"container"},[i("img",{staticClass:"rounded-circle",attrs:{src:e("ad30"),alt:"Sample image",width:"150",height:"125"}}),i("p",{staticClass:"text-dark",staticStyle:{padding:"30px"}},[t._v("Lorem ipsum dolar sit amet consectuer adipiscing elite sed do eiusmod tempor incididunt ut labor at dolar manga aliqua")])])])])],1),i("p",{staticClass:"mt-4"})],1)])},P=[],B={data:function(){return{slide:0,sliding:null,mainProps:{blank:!0,blankColor:"#777",width:75,height:75,class:"m1"}}},methods:{}},j=B,N=(e("586b"),Object(c["a"])(j,O,P,!1,null,null,null)),$=N.exports,T=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{},[i("h5",{staticClass:"text-dark",staticStyle:{"font-weight":"bold","font-size":"35px",padding:"px 0px"}},[t._v("Videos")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"thumbnail"},[i("img",{staticStyle:{width:"420"},attrs:{src:e("a7e0"),alt:"Lights",height:"240"}})])]),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"thumbnail"},[i("img",{staticStyle:{width:"420"},attrs:{src:e("59e6"),alt:"Nature",height:"240"}})])]),i("div",{staticClass:"col-md-4"},[i("div",{staticClass:"thumbnail"},[i("img",{staticStyle:{width:"420"},attrs:{src:e("d0f1"),alt:"Fjords",height:"240"}})])])])])}],z={},q=z,D=Object(c["a"])(q,T,A,!1,null,null,null),M=D.exports,H={name:"home",components:{Advertisements:u,Blogs:f,Carousel:C,Courses:L,Students:$,Videos:M}},F=H,W=Object(c["a"])(F,i,r,!1,null,"016c1c02",null);a["default"]=W.exports},bd6c:function(t,a,e){t.exports=e.p+"img/instagram.e6d0b5ea.svg"},c396:function(t,a,e){"use strict";var i=e("3061"),r=e.n(i);r.a},cff9:function(t,a,e){},d005:function(t,a,e){t.exports=e.p+"img/down_arrow.2526e99c.svg"},d0f1:function(t,a,e){t.exports=e.p+"img/biology-blur-blurred-background-954585.f1c194f6.jpg"},debf:function(t,a,e){"use strict";var i=e("1095"),r=e.n(i);r.a},f3bc:function(t,a,e){},f746:function(t,a,e){"use strict";var i=e("a59e"),r=e.n(i);r.a},fe88:function(t,a,e){}});
//# sourceMappingURL=app.ec1f313a.js.map