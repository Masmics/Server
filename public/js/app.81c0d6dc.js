(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],d=0,p=[];d<s.length;d++)i=s[d],o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0019":function(e,t,n){},"0120":function(e,t,n){},"039a":function(e,t,n){"use strict";var r=n("3760"),o=n.n(r);o.a},"13d9":function(e,t,n){"use strict";var r=n("bf85"),o=n.n(r);o.a},1981:function(e,t,n){},"36f4":function(e,t,n){},3760:function(e,t,n){},5617:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=n("8c4f"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("RouterView")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("nav",[n("RouterLink",{staticClass:"link",attrs:{to:"/"}},[e._v("Home")]),n("RouterLink",{staticClass:"link",attrs:{to:"/resorts"}},[e._v("Resorts")]),n("RouterLink",{staticClass:"link",attrs:{to:"/about"}},[e._v("About")]),n("RouterLink",{staticClass:"link",attrs:{to:"/login"}},[e._v("Sign Up/In")]),n("button",{on:{click:e.onLogout}},[e._v("Logout")])],1)])},u=[],c="",l="",d={setToken:function(e){c=e},getToken:function(){return c},setUser:function(e){l=e},getUser:function(){return l},signIn:function(e){return fetch("/api/auth/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},signUp:function(e){return fetch("/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},getResortByid:function(e){return fetch("/api/map/resort/".concat(e),{method:"GET"}).then(function(e){return e.json()})},getMarkers:function(){return fetch("/api/map/markers",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})},getResorts:function(){return fetch("/api/map/resortall",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})}},p={methods:{onLogout:function(){d.setToken(""),this.$router.push("/")}}},f=p,m=(n("8baf"),n("2877")),v=Object(m["a"])(f,s,u,!1,null,null,null);v.options.__file="Header.vue";var h=v.exports,g={components:{Header:h}},b=g,_=(n("9993"),Object(m["a"])(b,a,i,!1,null,null,null));_.options.__file="App.vue";var k=_.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("h1",[e._v("Welcome to Snoweden!")]),e.user?n("h3",[e._v("Hello "+e._s(e.user))]):e._e()])},R=[],y={data:function(){return{user:""}},created:function(){this.user=d.getUser().username}},S=y,j=(n("b497"),Object(m["a"])(S,w,R,!1,null,null,null));j.options.__file="Home.vue";var C=j.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("br"),n("label",{attrs:{id:"drop-down"}},[e._v("Select a Resort:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.resorts,expression:"resorts"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.resorts=t.target.multiple?n:n[0]}}},e._l(e.allResorts,function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v("\n        "+e._s(t.resort_name)+"\n      ")])}),0),n("br"),n("br"),n("div",{attrs:{id:"gmap"}},[n("GmapMap",{staticStyle:{width:"1000px",height:"600px"},attrs:{center:e.center,zoom:7,"map-type-id":"terrain"}},e._l(e.markers,function(t){return n("GmapMarker",{key:t.id,attrs:{position:t.position,clickable:!0,draggable:!1},on:{click:function(n){e.onMarkerClick(t.id)}}})}),1)],1)])},x=[],O=(n("ac6a"),{data:function(){return{center:{lat:45,lng:-122},markers:[],allResorts:[],selected:""}},props:{resorts:Array},created:function(){var e=this;d.getMarkers().then(function(t){var n=[];t.forEach(function(e){var t={};t.id=e.id,t.position={lat:e.coordinate_lat,lng:e.coordinate_lon},n.push(t)}),e.markers=n}),d.getResorts().then(function(t){e.allResorts=t})},methods:{onMarkerClick:function(e){this.$router.push("/resorts/".concat(e))},getResorts:function(){var e=this;d.getResorts().then(function(t){e.allResorts=t})},selectedResort:function(){}}}),I=O,P=(n("13d9"),Object(m["a"])(I,T,x,!1,null,null,null));P.options.__file="Resorts.vue";var $=P.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("About")])},E=[],L={},N=L,A=(n("b8ab"),Object(m["a"])(N,U,E,!1,null,null,null));A.options.__file="About.vue";var W=A.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"login"}},["signin"===e.method?n("div",[n("form",{on:{submit:function(t){return t.preventDefault(),e.onSignIn(t)}}},[n("h3",[e._v("Log In:")]),n("label",[e._v("Username:\n                "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signIn.username,expression:"signIn.username"}],attrs:{required:""},domProps:{value:e.signIn.username},on:{input:function(t){t.target.composing||e.$set(e.signIn,"username",t.target.value)}}})]),n("br"),n("label",[e._v("Password:\n                "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signIn.password,expression:"signIn.password"}],attrs:{type:"password",required:""},domProps:{value:e.signIn.password},on:{input:function(t){t.target.composing||e.$set(e.signIn,"password",t.target.value)}}})]),n("br"),n("button",[e._v("Log In")]),n("p",[e._v("\n                Need to register?\n                "),n("button",{on:{click:function(t){e.method="signup"}}},[e._v("Sign Up")])])])]):n("div",[n("form",{on:{submit:function(t){return t.preventDefault(),e.onSignUp(t)}}},[n("h3",[e._v("Sign Up:")]),n("label",[e._v("Username:\n                "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signUp.username,expression:"signUp.username"}],attrs:{required:""},domProps:{value:e.signUp.username},on:{input:function(t){t.target.composing||e.$set(e.signUp,"username",t.target.value)}}})]),n("br"),n("label",[e._v("Password:\n                "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signUp.password,expression:"signUp.password"}],attrs:{type:"password",required:""},domProps:{value:e.signUp.password},on:{input:function(t){t.target.composing||e.$set(e.signUp,"password",t.target.value)}}})]),n("br"),n("button",[e._v("Sign Up")]),n("p",[e._v("\n                Already have an account?\n                "),n("button",{on:{click:function(t){e.method="signin"}}},[e._v("Sign In")])])])])])},D=[],H={data:function(){return{method:"signin",profile:{username:"",password:""},signIn:{},signUp:{}}},methods:{onSignIn:function(){var e=this;d.signIn(this.signIn).then(function(t){d.setUser(t),d.setToken(t.token),e.$router.push("/")})},onSignUp:function(){d.signUp(this.signUp).then(function(e){return d.setToken(e)})}}},q=H,G=(n("039a"),Object(m["a"])(q,M,D,!1,null,null,null));G.options.__file="Login.vue";var J=G.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.token?n("div",[e.resort?n("section",{staticClass:"details"},[e._v("\n    "+e._s(e.resort.resort_name)),n("br"),e._v("\n    "+e._s(e.resort.description)),n("br"),e._v("\n    "+e._s(e.resort.address)),n("br"),e._v("\n    "+e._s(e.resort.url)),n("br")]):e._e(),n("StarRating"),n("br"),n("br"),n("ResortComments"),e.resort?n("ResortWeather",{attrs:{resort:e.resort}}):e._e(),n("ResortWeather"),n("LiveComments")],1):n("div",[n("p",[e._v("You're not logged in.  Sign in to view content")]),n("RouterLink",{attrs:{to:"/login"}},[n("button",[e._v("Sign In")])])],1)},Y=[],B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{attrs:{id:"comment"},on:{submit:function(t){return t.preventDefault(),e.submitComment(t)}}},[n("label",[e._v("Comment:\n      "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.feedback.comment,expression:"feedback.comment"}],attrs:{rows:"4",cols:"50",name:"comment",placeholder:"Enter comment..."},domProps:{value:e.feedback.comment},on:{input:function(t){t.target.composing||e.$set(e.feedback,"comment",t.target.value)}}})]),n("button",[e._v("Submit")])]),n("br"),n("form",{attrs:{id:"user-questions"},on:{submit:function(t){return t.preventDefault(),e.submitComment(t)}}},[n("label",[e._v("Adult All-Day Ticket Price:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.feedback.ticketPrice,expression:"feedback.ticketPrice"}],attrs:{type:"number"},domProps:{value:e.feedback.ticketPrice},on:{input:function(t){t.target.composing||e.$set(e.feedback,"ticketPrice",t.target.value)}}})]),n("br"),n("br"),n("label",[e._v("Who Are You?\n      "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.feedback.who,expression:"feedback.who"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.feedback,"who",t.target.multiple?n:n[0])}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Please select one")]),n("option",{attrs:{value:"skier"}},[e._v("Skier")]),n("option",{attrs:{value:"snowboarder"}},[e._v("Snowboarder")]),n("option",{attrs:{value:"cocoa"}},[e._v("Cocoa Drinker")]),n("option",{attrs:{value:"sledder"}},[e._v("Sledder")]),n("option",{attrs:{value:"md"}},[e._v("Mischievous Deliquent")])])]),n("br"),n("br"),n("label",[e._v("How crowded is the resort?\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.feedback.crowded,expression:"feedback.crowded"}],attrs:{type:"number"},domProps:{value:e.feedback.crowded},on:{input:function(t){t.target.composing||e.$set(e.feedback,"crowded",t.target.value)}}})]),n("br"),n("button",[e._v("Submit")])])])},V=[],F={addComment:function(e){return fetch("/api/userinput/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()})},addStarRating:function(e){return fetch("/api/userinput/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()})}},K={data:function(){return{feedback:{}}},methods:{submitComment:function(){this.feedback.profileId=d.getToken(),this.feedback.resortId=this.$route.params.id,F.addComment(this.feedback)}}},Q=K,X=(n("73ea"),Object(m["a"])(Q,B,V,!1,null,null,null));X.options.__file="ResortComments.vue";var Z=X.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.submitStarRating(t)}}},[n("div",{staticStyle:{display:"inline-block"},on:{mouseleave:e.showCurrentRating}},[n("StarRating",{on:{"current-rating":e.showCurrentRating,"rating-selected":e.setCurrentSelectedRating}}),n("div",{staticStyle:{"margin-top":"10px","font-weight":"bold"}},[e._v("You have selected: "+e._s(e.currentRating)+" stars")])],1),n("br"),n("button",[e._v("Submit")])])},te=[],ne=n("c1da"),re=n.n(ne),oe={data:function(){return{rating:"",currentRating:"",currentSelectedRating:"",boundRating:3,feedback:{StarRating:null,profileId:"",resortId:""}}},components:{StarRating:re.a},methods:{showCurrentRating:function(){this.currentRating=this.rating,this.feedback.StarRating=this.rating},setCurrentSelectedRating:function(e){this.currentSelectedRating=e,this.feedback.StarRating=e},submitStarRating:function(){this.feedback.profileId.id=d.getToken(),console.log(d.getToken()),this.feedback.resortId=this.$route.params.id,F.addStarRating(this.feedback),console.log("asdfa",this.feedback.StarRating)}}},ae=oe,ie=(n("9ce7"),Object(m["a"])(ae,ee,te,!1,null,null,null));ie.options.__file="ResortRating.vue";var se=ie.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.weather?n("div",[e._m(0),n("tr",[n("td",[e._v("\n      Temperature\n    ")]),n("td",[e._v("\n      "+e._s(e.weather.main.temp)+"\n    ")])]),n("tr",[n("td",[e._v("\n      Humidity\n    ")]),n("td",[e._v("\n      "+e._s(e.weather.main.humidity)+"\n    ")])]),n("tr",[n("td",[e._v("\n      Wind Speed\n    ")]),n("td",[e._v("\n      "+e._s(e.weather.wind.speed)+"\n    ")])]),n("tr",[n("td",[e._v("\n      Cloud Cover\n    ")]),n("td",[e._v("\n      "+e._s(e.weather.clouds.all)+"\n    ")])]),n("tr",[n("td",[e._v("\n      General Weather\n    ")]),n("td",[e._v("\n      "+e._s(e.weather.weather[0].description)+"\n    ")])])]):e._e()},ce=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("\n      Condition\n    ")]),n("th",[e._v("\n      Value\n    ")])])}],le={getWeather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(encodeURIComponent(e),"&lon=").concat(encodeURIComponent(t),"&appid=9abd4dd837ed2f8c11ab1eb3a10377c6")).then(function(e){return e.json()})}},de={data:function(){return{weather:null,coord:null}},props:{resort:Object},created:function(){var e=this;le.getWeather(this.resort.coordinate_lat,this.resort.coordinate_lon).then(function(t){e.weather=t})}},pe=de,fe=(n("65d2"),Object(m["a"])(pe,ue,ce,!1,null,null,null));fe.options.__file="ResortWeather.vue";var me=fe.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("Live Comments:")]),n("ul",e._l(e.feedback,function(t,r){return n("li",{key:r},[e._v("\n        "+e._s(t.user)+": "+e._s(t.comment)+"\n    ")])}),0)])},he=[],ge={getComments:function(e){return console.log("getcommentns",d.getToken()),fetch("/api/feedback/".concat(e),{method:"GET",headers:{"Content-Type":"application/json",Authorization:d.getToken()}}).then(function(e){return e.json()}).then(function(e){var t=[];return e.forEach(function(e){var n={};n.user=JSON.parse(e.profile_id).username,n.comment=e.comment,t.push(n)}),t})}},be={data:function(){return{feedback:[]}},created:function(){var e=this;ge.getComments(this.$route.params.id).then(function(t){return e.feedback=t})}},_e=be,ke=(n("8a60"),Object(m["a"])(_e,ve,he,!1,null,null,null));ke.options.__file="LiveComments.vue";var we=ke.exports,Re={data:function(){return{token:!1,resort:null}},components:{ResortComments:Z,StarRating:se,ResortWeather:me,LiveComments:we},created:function(){var e=this;this.token=d.getToken(),d.getResortByid(this.$route.params.id).then(function(t){e.resort=t})}},ye=Re,Se=(n("de0c"),Object(m["a"])(ye,z,Y,!1,null,null,null));Se.options.__file="ResortDetail.vue";var je=Se.exports,Ce=new o["a"]({routes:[{path:"/",component:C},{path:"/resorts",component:$},{path:"/resorts/:id",component:je},{path:"/about",component:W},{path:"/login",component:J},{path:"*",redirect:"/"}]}),Te=n("755e");r["a"].config.productionTip=!1,r["a"].use(o["a"]),r["a"].use(Te,{load:{key:"AIzaSyAWWF1R-Hmbz13viqaccbTK3bif3Lmuq2E",libraries:"places"}}),r["a"].directive("focus",{inserted:function(e){e.focus()}}),new r["a"]({router:Ce,render:function(e){return e(k)}}).$mount("#app")},"65d2":function(e,t,n){"use strict";var r=n("1981"),o=n.n(r);o.a},"73ea":function(e,t,n){"use strict";var r=n("5617"),o=n.n(r);o.a},"782e":function(e,t,n){},"8a60":function(e,t,n){"use strict";var r=n("0019"),o=n.n(r);o.a},"8baf":function(e,t,n){"use strict";var r=n("782e"),o=n.n(r);o.a},9759:function(e,t,n){},9993:function(e,t,n){"use strict";var r=n("c352"),o=n.n(r);o.a},"9ce7":function(e,t,n){"use strict";var r=n("9759"),o=n.n(r);o.a},a0e7:function(e,t,n){},b497:function(e,t,n){"use strict";var r=n("a0e7"),o=n.n(r);o.a},b8ab:function(e,t,n){"use strict";var r=n("36f4"),o=n.n(r);o.a},bf85:function(e,t,n){},c352:function(e,t,n){},de0c:function(e,t,n){"use strict";var r=n("0120"),o=n.n(r);o.a}});
//# sourceMappingURL=app.81c0d6dc.js.map