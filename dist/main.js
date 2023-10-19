/*! For license information please see main.js.LICENSE.txt */
(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new F(n||[]);return i(a,"_invoke",{value:T(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function b(){}function w(){}function x(){}var L={};f(L,u,(function(){return this}));var E=Object.getPrototypeOf,_=E&&E(E(N([])));_&&_!==o&&a.call(_,u)&&(L=_);var k=x.prototype=b.prototype=Object.create(L);function S(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(e,r){function n(o,i,c,u){var s=p(e[o],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function T(t,e,n){var o=d;return function(a,i){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=j(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=p(t,e,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function j(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=x,i(k,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},S(O.prototype),f(O.prototype,s,(function(){return this})),n.AsyncIterator=O,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new O(h(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(k),f(k,l,"Generator"),f(k,u,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=N,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}var o="https://api-v3.mbta.com/vehicles?api_key=172ad98635c0434da2487ac7bf45418c&filter[route]=1";mapboxgl.accessToken="pk.eyJ1Ijoic29mdGV4cGVyaW1lbnQiLCJhIjoiY2tjMngyZm9rMDFvajJzczJ3aWo0bnh6aiJ9.Bc_qK9Xf8SFBXkFM_x2gpg";var a=[],i=[],c=[],u=[],s=[],l=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v12",center:[-71.101,42.358],zoom:12});function f(){return(f=n(e().mark((function t(){var r,n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api-v3.mbta.com/stops?api_key=172ad98635c0434da2487ac7bf45418c&filter[route]=1");case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,c=n.data,console.log("BUS STOPS ",c),u=c.slice(0,24),console.log("TO BOSTON STOPS ",u),s=c.slice(23,47).reverse(),console.log("TO HARVARD STOPS ",s),console.log("Bus Stops data loaded successfully."),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.error("Error fetching bus stops:",t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))).apply(this,arguments)}function h(){return p.apply(this,arguments)}function p(){return(p=n(e().mark((function t(){var r,n,c,l;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(o);case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,(a=n.data).forEach((function(t){var e,r=(e=t.id,i.find((function(t){return t.id===e})));r?(r.customMarkerElement.style.backgroundColor=v(t),d(t)):y(t)})),(c=document.getElementById("toHarvardStopsTableBody")).innerHTML="",s.forEach((function(t,e){var r=t.id,n=t.attributes.at_street,o=a.find((function(t){return t.relationships.stop.data.id===r})),i=document.createElement("tr");i.innerHTML='\n\t\t      <th scope="row">'.concat(e+1,'</th>\n\t\t\t\t\t<td class=" station-cell ">').concat(n||t.attributes.name,'</td>\n\t\t\t\t\t<td class=" bus-cell-green ').concat(o&&0===o.attributes.direction_id?"flash-text":"",'">\n    ').concat(o&&0===o.attributes.direction_id?o.attributes.label:"--","\n  </td>\n\t\t\t\t\t\n\t\t\t\t "),c.appendChild(i)})),(l=document.getElementById("toBostonStopsTableBody")).innerHTML="",u.forEach((function(t,e){var r=t.id,n=t.attributes.at_street,o=a.find((function(t){return t.relationships.stop.data.id===r})),i=document.createElement("tr");i.innerHTML='\n\t\t\t    \n\t\t\t\t\t\t<td class=" bus-cell-red '.concat(o&&1===o.attributes.direction_id?"flash-text":"",'">\n\t\t  ').concat(o&&1===o.attributes.direction_id?o.attributes.label:"--",'\n\t\t</td>\n\t\t<td class=" station-cell ">').concat(n||t.attributes.name,'</td>\n\t\t<th scope="row">').concat(e+1,"</th>\n\t\t\t\t\t "),l.appendChild(i)})),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.error("Error:",t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))).apply(this,arguments)}function d(t){i.find((function(e){return e.id===t.id})).marker.setLngLat([t.attributes.longitude,t.attributes.latitude])}function y(t){t.attributes.direction_id;var e=t.id,r=document.createElement("div");r.className="custom-marker";var n=v(t);r.style.backgroundColor=n;var o=document.createElement("div");o.className="label",o.textContent=t.attributes.label,o.style.position="absolute",o.style.top="50%",o.style.left="50%",o.style.transform="translate(-50%, -50%)",r.appendChild(o);var a={id:e,marker:new mapboxgl.Marker({element:r,anchor:"bottom"}).setLngLat([t.attributes.longitude,t.attributes.latitude]).addTo(l),customMarkerElement:r,labelElement:o};i.push(a)}function v(t){var e=t.attributes.direction_id;return 0===e?"green":1===e?"red":void 0}window.onload=(new mapboxgl.Marker({color:"#FF3F"}).setLngLat([-71.0942,42.3601]).addTo(l),function(){f.apply(this,arguments)}(),h(),void setInterval(h,5e3))})();