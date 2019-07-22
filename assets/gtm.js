
// Copyright 2012 Google Inc. All rights reserved.
(function(){

var data = {
"resource": {
  "version":"26",
  "macros":[{
      "function":"__e"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-46172202-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Button",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",1],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":"Doc Upgrade to pro",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":8
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":9
    },{
      "function":"__cl",
      "tag_id":10
    },{
      "function":"__cl",
      "tag_id":11
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  #ofBar {\n    background: #40312d;\n    width: 50%;\n    left: 25%;\n    min-height: 55px;\n    position: fixed;\n    top: 0;\n    z-index: 999999999;\n    font-size: 16px;\n    color: #fff;\n    padding: 15px 5%;\n    font-weight: 400;\n    border-radius: 0 0 5px 5px;\n  }\n  #ofBar b {\n    font-size: 16px !important;\n  }\n  #count-down {\n    display: initial;\n    padding-left: 10px;\n    font-weight: bold;\n  }\n  #close-bar {\n    font-size: 22px;\n    color: #3e3947;\n    margin-right: 0;\n    position: fixed;\n    right: 26%;\n    background: white;\n    opacity: 0.8;\n    padding: 0px;\n    height: 30px;\n    line-height: 27px;\n    width: 30px;\n    border-radius: 50%;\n    text-align: center;\n    top: 12px;\n    cursor: pointer;\n    z-index: 9999999999;\n    font-weight: 200;\n  }\n  #close-bar:hover{\n    opacity: 1;\n  }\n  #btn-bar {\n    background-color: #fff;\n    color: #40312d;\n    border-radius: 4px;\n    padding: 10px 20px;\n    font-weight: bold;\n    text-transform: uppercase;\n    font-size: 14px;\n    opacity: .95;\n    margin-left: 15px;\n    cursor: pointer;\n    text-align: center;\n  }\n  #btn-bar{\n   opacity: 1;\n  }\n\n  #btn-bar span {\n    color: red;\n  }\n\n  @media (max-width: 768px) {\n\n    #ofBar {\n      padding: 50px 20px 20px;\n      text-align: center;\n      font-size: 20px;\n    }\n    #btn-bar{\n      display: block;\n      margin-top: 20px;\n      margin-left: 0;\n    }\n    #count-down {\n      display: block;\n      font-size: 25px;\n    }\n    #ofBar span {\n      display: none;\n    }\n  }\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(b,d,c){var a=new Date;a.setTime(a.getTime()+864E5*c);c=\"expires\\x3d\"+a.toUTCString();document.cookie=b+\"\\x3d\"+d+\";\"+c+\";path\\x3d\/\"}function readCookie(b){b+=\"\\x3d\";for(var d=document.cookie.split(\";\"),c=0;c\u003Cd.length;c++){for(var a=d[c];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return null}\nfunction createOfferBar(){var b=document.createElement(\"div\");b.setAttribute(\"id\",\"ofBar\");b.innerHTML=\"Interested in all of our \\x3cb\\x3eMaterial Products\\x3c\/b\\x3e? \\u2764\\ufe0f \\x3ca href\\x3d'https:\/\/www.creative-tim.com\/product\/buy\/bundle\/material-design-bundle\/?ref\\x3dmaterial-pro-demos' target\\x3d'_blank' id\\x3d'btn-bar'\\x3eBuy for \\x3cstrike\\x3e$1,112\\x3c\/strike\\x3e\/\\x3cspan\\x3e$99\\x3c\/span\\x3e\\x3c\/a\\x3e\\x3ca id\\x3d'close-bar'\\x3e\\u00d7\\x3c\/a\\x3e\";document.body.insertBefore(b,document.body.firstChild)}\nfunction closeOfferBar(){document.getElementById(\"ofBar\").setAttribute(\"hidden\",!0);setCookie(\"view_offer_bar\",\"true\",1)}var value=readCookie(\"view_offer_bar\");null==value\u0026\u0026(createOfferBar(),document.getElementById(\"close-bar\").addEventListener(\"click\",closeOfferBar));\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":7
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"btn-pro-component"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"material-kit-pro"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"material-dashboard-pro"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"react-native"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"material"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"pro"
    }],
  "rules":[
    [["if",0],["add",0,4,5]],
    [["if",1,2],["add",1]],
    [["if",0],["unless",3,4,5],["add",2]],
    [["if",0,5],["add",3]],
    [["if",0,6,7],["unless",5],["add",6]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,ca=/^[\w+/_-]+[=]{0,2}$/,da=null;var fa=function(){},ha=function(a){return"function"==typeof a},ia=function(a){return"string"==typeof a},ja=function(a){return"number"==typeof a&&!isNaN(a)},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},la=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ma=function(a,b){if(a&&ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},na=function(a,b){if(!ja(a)||
!ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},pa=function(a,b){for(var c=new oa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){return Math.round(Number(a))||0},ta=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ua=function(a){var b=[];if(ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},va=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},wa=function(){return(new Date).getTime()},oa=function(){this.prefix="gtm.";this.values={}};oa.prototype.set=function(a,b){this.values[this.prefix+a]=b};oa.prototype.get=function(a){return this.values[this.prefix+a]};oa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ca=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Da=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ea=function(a){if(null==a)return String(a);var b=Da.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Fa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ga=function(a){if(!a||"object"!=Ea(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Fa(a,"constructor")&&!Fa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Fa(a,b)},Ha=function(a,b){var c=b||("array"==Ea(a)?[]:{}),d;for(d in a)if(Fa(a,d)){var e=a[d];"array"==Ea(e)?("array"!=Ea(c[d])&&(c[d]=[]),c[d]=Ha(e,c[d])):Ga(e)?(Ga(c[d])||(c[d]={}),c[d]=Ha(e,c[d])):c[d]=e}return c};var f=window,u=document,Ia=navigator,Ja=u.currentScript&&u.currentScript.src,Ka=function(a,b){var c=f[a];f[a]=void 0===c?b:c;return f[a]},La=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Ma=function(a,b,c){var d=u.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;La(d,b);c&&(d.onerror=c);var e;if(null===da)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ca.test(k)){da=k;break b}}da=""}e=da;e&&d.setAttribute("nonce",e);var l=u.getElementsByTagName("script")[0]||u.body||u.head;l.parentNode.insertBefore(d,l);return d},Na=function(){if(Ja){var a=Ja.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Oa=function(a,b){var c=u.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=u.body&&u.body.lastChild||
u.body||u.head;d.parentNode.insertBefore(c,d);La(c,b);void 0!==a&&(c.src=a);return c},Pa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Qa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ta=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},A=function(a){f.setTimeout(a,0)},Ua=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Va=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Wa=function(a){var b=u.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Xa=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Ya=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Za=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var $a={},ab=function(a,b){$a[a]=$a[a]||[];$a[a][b]=!0},bb=function(a){for(var b=[],c=$a[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var db=/:[0-9]+$/,eb=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},hb=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=fb(a.protocol)||fb(f.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:f.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||f.location.hostname).replace(db,"").toLowerCase());var g=b,h,k=fb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=gb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(db,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||ab("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=la(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=eb(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},fb=function(a){return a?a.replace(":","").toLowerCase():""},gb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
ib=function(a){var b=u.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||ab("TAGGING",1),c="/"+c);var d=b.hostname.replace(db,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var jb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},mb=function(a,b,c,d){var e=kb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=lb(e,function(g){return g.Bb},b);if(1===e.length)return e[0].id;e=lb(e,function(g){return g.Ta},c);return e[0]?e[0].id:void 0}};
function nb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=jb(b,e).indexOf(c)}
var rb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,t=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var r=h[p];if(null!=r)switch(p){case "secure":r&&(m+="; secure");break;case "domain":q=r;break;default:"path"==p&&(t=r),"expires"==p&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+p+"="+r}}if("auto"===q){for(var v=pb(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!qb(y,t)&&nb(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!qb(q,t)&&nb(m,a,l)}return k};function lb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function kb(a,b){for(var c=[],d=jb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Bb:1*k[0]||1,Ta:1*k[1]||1}))}}return c}
var sb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,tb=/(^|\.)doubleclick\.net$/i,qb=function(a,b){return tb.test(document.location.hostname)||"/"===b&&sb.test(a)},pb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};var Pb=[],Qb=[],Rb=[],Sb=[],Ub=[],Vb={},Wb,Xb,Yb,Zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},$b=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Vb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Vb[c](e):(void 0)(c,e,b)},bc=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ac(a[e],b,c));return d},
cc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Vb[b];return c?c.priorityOverride||0:0},ac=function(a,b,c){if(ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ac(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Pb[g];if(!h||b.vc(h))return;c[g]=!0;try{var k=bc(h,b,c);k.vtp_gtmEventId=b.id;d=$b(k,b);Yb&&(d=Yb.nf(d,k))}catch(w){b.Nd&&b.Nd(w,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[ac(a[l],b,c)]=ac(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=ac(a[n],b,c);Xb&&(m=m||q===Xb.qb);d.push(q)}return Xb&&m?Xb.rf(d):d.join("");case "escape":d=ac(a[1],b,c);if(Xb&&ka(a[1])&&"macro"===a[1][0]&&Xb.Tf(a))return Xb.cg(d);d=String(d);for(var t=2;t<a.length;t++)ub[a[t]]&&(d=ub[a[t]](d));return d;case "tag":var p=a[1];if(!Sb[p])throw Error("Unable to resolve tag reference "+p+".");return d={zd:a[2],index:p};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=dc(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},dc=function(a,b,c){try{return Wb(bc(a,b,c))}catch(d){JSON.stringify(a)}return null};var ec=function(){var a=function(b){return{toString:function(){return b}}};return{Xc:a("convert_case_to"),Yc:a("convert_false_to"),Zc:a("convert_null_to"),$c:a("convert_true_to"),ad:a("convert_undefined_to"),fa:a("function"),De:a("instance_name"),Ee:a("live_only"),Fe:a("malware_disabled"),Ge:a("metadata"),Mg:a("original_vendor_template_id"),He:a("once_per_event"),pd:a("once_per_load"),qd:a("setup_tags"),rd:a("tag_id"),sd:a("teardown_tags")}}();var fc=null,ic=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];fc=gc(a);for(var e=0;e<Qb.length;e++){var g=Qb[e],h=hc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},hc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=fc(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=fc(e[g]);if(null===h)return null;
if(h)return!1}return!0},gc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=dc(Rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var yc={},zc=null,Ac=Math.random();yc.i="GTM-NKDMSK6";yc.ub="6k2";var Bc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Cc="www.googletagmanager.com/gtm.js";var Dc=Cc,Ec=null,Fc=null,Gc=null,Hc="//www.googletagmanager.com/a?id="+yc.i+"&cv=26",Ic={},Jc={},Kc=function(){var a=zc.sequence||0;zc.sequence=a+1;return a};var D=function(a,b,c,d){return(2===Lc()||d||"http:"!=f.location.protocol?a:b)+c},Lc=function(){var a=Na(),b;if(1===a)a:{var c=Dc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=u.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Mc=!1;
var Qc=function(){return"&tc="+Sb.filter(function(a){return a}).length},Zc=function(){Rc&&(f.clearTimeout(Rc),Rc=void 0);void 0===Sc||Tc[Sc]&&!Uc||(Vc[Sc]||Wc.Vf()||0>=Xc--?(ab("GTM",1),Vc[Sc]=!0):(Wc.ng(),Pa(Yc()),Tc[Sc]=!0,Uc=""))},Yc=function(){var a=Sc;if(void 0===a)return"";var b=bb("GTM"),c=bb("TAGGING");return[$c,Tc[a]?"":"&es=1",ad[a],b?"&u="+b:"",c?"&ut="+c:"",Qc(),Uc,"&z=0"].join("")},bd=function(){return[Hc,"&v=3&t=t","&pid="+na(),"&rv="+yc.ub].join("")},cd="0.005000">
Math.random(),$c=bd(),dd=function(){$c=bd()},Tc={},Uc="",Sc=void 0,ad={},Vc={},Rc=void 0,Wc=function(a,b){var c=0,d=0;return{Vf:function(){if(c<a)return!1;wa()-d>=b&&(c=0);return c>=a},ng:function(){wa()-d>=b&&(c=0);c++;d=wa()}}}(2,1E3),Xc=1E3,ed=function(a,b){if(cd&&!Vc[a]&&Sc!==a){Zc();Sc=a;Uc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";ad[a]="&e="+c+"&eid="+a;Rc||(Rc=f.setTimeout(Zc,500))}},fd=function(a,b,c){if(cd&&!Vc[a]&&b){a!==Sc&&(Zc(),Sc=a);var d=String(b[ec.fa]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Uc=Uc?Uc+"."+e:"&tr="+e;Rc||(Rc=f.setTimeout(Zc,500));2022<=Yc().length&&Zc()}};var gd={},hd=new oa,id={},jd={},nd={name:"dataLayer",set:function(a,b){Ha(kd(a,b),id);ld()},get:function(a){return md(a,2)},reset:function(){hd=new oa;id={};ld()}},md=function(a,b){if(2!=b){var c=hd.get(a);if(cd){var d=od(a);c!==d&&ab("GTM",5)}return c}return od(a)},od=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:qd(d)},qd=function(a){for(var b=id,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var td=function(a,b){jd.hasOwnProperty(a)||(hd.set(a,b),Ha(kd(a,b),id),ld())},kd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},ld=function(a){ra(jd,function(b,c){hd.set(b,c);Ha(kd(b,void 0),id);Ha(kd(b,c),id);a&&delete jd[b]})},ud=function(a,b,c){gd[a]=gd[a]||{};var d=1!==c?od(b):hd.get(b);"array"===Ea(d)||"object"===Ea(d)?gd[a][b]=Ha(d):gd[a][b]=d},vd=function(a,b){if(gd[a])return gd[a][b]};var wd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),xd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},yd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},zd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Bd=function(a){var b=md("gtm.whitelist");b&&ab("GTM",9);var c=b&&Ca(ua(b),xd),d=md("gtm.blacklist");d||(d=md("tagTypeBlacklist"))&&ab("GTM",3);
d?ab("GTM",8):d=[];Ad()&&(d=ua(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=la(ua(d),"google")&&ab("GTM",2);var e=d&&Ca(ua(d),yd),g={};return function(h){var k=h&&h[ec.fa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Jc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>la(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>
la(c,l[q])){ab("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var p=0<=la(e,k);if(p)t=p;else{var r=pa(e,l||[]);r&&ab("GTM",10);t=r}}var v=!m||t;v||!(0<=la(l,"sandboxedScripts"))||c&&-1!==la(c,"sandboxedScripts")||(v=pa(e,zd));return g[k]=v}},Ad=function(){return wd.test(f.location&&f.location.hostname)};var Cd={nf:function(a,b){b[ec.Xc]&&"string"===typeof a&&(a=1==b[ec.Xc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(ec.Zc)&&null===a&&(a=b[ec.Zc]);b.hasOwnProperty(ec.ad)&&void 0===a&&(a=b[ec.ad]);b.hasOwnProperty(ec.$c)&&!0===a&&(a=b[ec.$c]);b.hasOwnProperty(ec.Yc)&&!1===a&&(a=b[ec.Yc]);return a}};var Dd={active:!0,isWhitelisted:function(){return!0}},Ed=function(a){var b=zc.zones;!b&&a&&(b=zc.zones=a());return b};var Fd=!1,Gd=0,Hd=[];function Id(a){if(!Fd){var b=u.createEventObject,c="complete"==u.readyState,d="interactive"==u.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Fd=!0;for(var e=0;e<Hd.length;e++)A(Hd[e])}Hd.push=function(){for(var g=0;g<arguments.length;g++)A(arguments[g]);return 0}}}function Jd(){if(!Fd&&140>Gd){Gd++;try{u.documentElement.doScroll("left"),Id()}catch(a){f.setTimeout(Jd,50)}}}var Kd=function(a){Fd?a():Hd.push(a)};var Ld={},Md={},Nd=function(a,b,c,d){if(!Md[a]||Bc[b]||"__zone"===b)return-1;var e={};Ga(d)&&(e=Ha(d,e));e.id=c;e.status="timeout";return Md[a].tags.push(e)-1},Od=function(a,b,c,d){if(Md[a]){var e=Md[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Pd(a){for(var b=Ld[a]||[],c=0;c<b.length;c++)b[c]();Ld[a]={push:function(d){d(yc.i,Md[a])}}}
var Sd=function(a,b,c){Md[a]={tags:[]};ha(b)&&Qd(a,b);c&&f.setTimeout(function(){return Pd(a)},Number(c));return Rd(a)},Qd=function(a,b){Ld[a]=Ld[a]||[];Ld[a].push(ya(function(){return A(function(){b(yc.i,Md[a])})}))};function Rd(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&Pd(a)})},Ve:function(){d=!0;b>=c&&Pd(a)}}};var Td=function(){function a(d){return!ja(d)||0>d?0:d}if(!zc._li&&f.performance&&f.performance.timing){var b=f.performance.timing.navigationStart,c=ja(nd.get("gtm.start"))?nd.get("gtm.start"):0;zc._li={cst:a(c-b),cbt:a(Fc-b)}}};var Xd=!1,Yd=function(){return f.GoogleAnalyticsObject&&f[f.GoogleAnalyticsObject]},Zd=!1;
var $d=function(a){f.GoogleAnalyticsObject||(f.GoogleAnalyticsObject=a||"ga");var b=f.GoogleAnalyticsObject;if(f[b])f.hasOwnProperty(b)||ab("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);f[b]=c}Td();return f[b]},ae=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Yd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ce=function(){},be=function(){return f.GoogleAnalyticsObject||"ga"},de=!1;var ke=function(a){};function je(a,b){a.containerId=yc.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function le(a,b,c,d){var e=Sb[a],g=me(a,b,c,d);if(!g)return null;var h=ac(e[ec.qd],c,[]);if(h&&h.length){var k=h[0];g=le(k.index,{K:g,P:1===k.zd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function me(a,b,c,d){function e(){if(g[ec.Fe])k();else{var w=bc(g,c,[]),y=Nd(c.id,String(g[ec.fa]),Number(g[ec.rd]),w[ec.Ge]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var C=wa()-B;fd(c.id,Sb[a],"5");Od(c.id,y,"success",C);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var C=wa()-B;fd(c.id,Sb[a],"6");Od(c.id,y,"failure",C);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;fd(c.id,g,"1");var z=function(C){var E=wa()-B;ke(C);fd(c.id,g,"7");Od(c.id,y,"exception",E);x||(x=!0,k())};var B=wa();try{$b(w,c)}catch(C){z(C)}}}var g=Sb[a],h=b.K,k=b.P,l=b.terminate;if(c.vc(g))return null;var m=ac(g[ec.sd],c,[]);if(m&&m.length){var n=m[0],q=le(n.index,{K:h,P:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.zd?l:q}if(g[ec.pd]||g[ec.He]){var t=g[ec.pd]?Ub:c.yg,p=h,r=k;if(!t[a]){e=ya(e);var v=ne(a,t,e);h=v.K;k=v.P}return function(){t[a](p,r)}}return e}
function ne(a,b,c){var d=[],e=[];b[a]=oe(d,e,c);return{K:function(){b[a]=pe;for(var g=0;g<d.length;g++)d[g]()},P:function(){b[a]=qe;for(var g=0;g<e.length;g++)e[g]()}}}function oe(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function pe(a){a()}function qe(a,b){b()};var te=function(a,b){for(var c=[],d=0;d<Sb.length;d++)if(a.Sa[d]){var e=Sb[d];var g=b.add();try{var h=le(d,{K:g,P:g,terminate:g},a,d);h?c.push({ae:d,b:cc(e),zf:h}):(re(d,a),g())}catch(l){g()}}b.Ve();c.sort(se);for(var k=0;k<c.length;k++)c[k].zf();return 0<c.length};function se(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.ae,k=b.ae;g=h>k?1:h<k?-1:0}return g}
function re(a,b){if(!cd)return;var c=function(d){var e=b.vc(Sb[d])?"3":"4",g=ac(Sb[d][ec.qd],b,[]);g&&g.length&&c(g[0].index);fd(b.id,Sb[d],e);var h=ac(Sb[d][ec.sd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var ue=!1,ve=function(a,b,c,d,e){if("gtm.js"==b){if(ue)return!1;ue=!0}ed(a,b);var g=Sd(a,d,e);ud(a,"event",1);ud(a,"ecommerce",1);ud(a,"gtm");var h={id:a,name:b,vc:Bd(c),Sa:[],yg:[],Nd:function(n){ab("GTM",6);ke(n)}};h.Sa=ic(h);var k=te(h,g);"gtm.js"!==b&&"gtm.sync"!==b||ce();if(!k)return k;for(var l=0;l<h.Sa.length;l++)if(h.Sa[l]){var m=
Sb[l];if(m&&!Bc[String(m[ec.fa])])return!0}return!1};var G={Rb:"event_callback",Tb:"event_timeout"};var xe={};var ye=/[A-Z]+/,ze=/\s/,Ae=function(a){if(ia(a)&&(a=va(a),!ze.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(ye.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ia:d}}}}},Ce=function(a){for(var b={},c=0;c<a.length;++c){var d=Ae(a[c]);d&&(b[d.id]=d)}Be(b);var e=[];ra(b,function(g,h){e.push(h)});return e};
function Be(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.ia[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var De=null,Ee={},Fe={},Ge,Ie=function(a,b){var c={event:a};b&&(c.eventModel=Ha(b),b[G.Rb]&&(c.eventCallback=b[G.Rb]),b[G.Tb]&&(c.eventTimeout=b[G.Tb]));return c};
var Oe={config:function(a){},event:function(a){var b=a[1];if(ia(b)&&!(3<a.length)){var c;
if(2<a.length){if(!Ga(a[2]))return;c=a[2]}var d=Ie(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];xe[b]||(xe[b]=[]);xe[b].push(c)}},set:function(a){var b;2==a.length&&Ga(a[1])?b=Ha(a[1]):3==a.length&&ia(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Ha(b),b.event="gtag.set",b._clear=!0,b}},Pe={policy:!0};var Qe=function(){var a=!1;return a};var Se=function(a){return Re?u.querySelectorAll(a):null},Te=function(a,b){if(!Re)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!u.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ue=!1;if(u.querySelectorAll)try{var Ve=u.querySelectorAll(":root");Ve&&1==Ve.length&&Ve[0]==u.documentElement&&(Ue=!0)}catch(a){}var Re=Ue;var bf=function(a){if(af(a))return a;this.Fg=a};bf.prototype.Gf=function(){return this.Fg};var af=function(a){return!a||"object"!==Ea(a)||Ga(a)?!1:"getUntrustedUpdateValue"in a};bf.prototype.getUntrustedUpdateValue=bf.prototype.Gf;var cf=!1,df=[];function ef(){if(!cf){cf=!0;for(var a=0;a<df.length;a++)A(df[a])}}var ff=function(a){cf?A(a):df.push(a)};var gf=[],hf=!1,jf=function(a){return f["dataLayer"].push(a)},kf=function(a){var b=zc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},mf=function(a){var b=a._clear;ra(a,function(g,h){"_clear"!==g&&(b&&td(g,void 0),td(g,h))});Ec||(Ec=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Kc(),a["gtm.uniqueEventId"]=d,td("gtm.uniqueEventId",d));Gc=c;var e=lf(a);
Gc=null;return e};function lf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=zc.zones;d=e?e.checkState(yc.i,c):Dd;return d.active?ve(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var nf=function(){for(var a=!1;!hf&&0<gf.length;){hf=!0;delete id.eventModel;ld();var b=gf.shift();if(null!=b){var c=af(b);if(c){var d=b;b=af(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=md(h,1);if(ka(k)||Ga(k))k=Ha(k);jd[h]=k}}try{if(ha(b))try{b.call(nd)}catch(v){}else if(ka(b)){var l=b;if(ia(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),t=md(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&ia(b[0])){var r=Oe[b[0]];if(r&&(!c||!Pe[b[0]])){b=r(b);break a}}b=void 0}if(!b){hf=!1;continue}}a=mf(b)||a}}finally{c&&ld(!0)}}hf=!1}
return!a},of=function(){var a=nf();try{var b=yc.i,c=f["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},pf=function(){var a=Ka("dataLayer",[]),b=Ka("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Kd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});ff(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<zc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new bf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);gf.push.apply(gf,d);if(300<this.length)for(ab("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return nf()&&h};gf.push.apply(gf,a.slice(0));A(of)};var qf;var Mf={};Mf.qb=new String("undefined");
var Nf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Mf.qb?b:a[d]);return c.join("")}};Nf.prototype.toString=function(){return this.resolve("undefined")};Nf.prototype.valueOf=Nf.prototype.toString;Mf.Ie=Nf;Mf.cc={};Mf.rf=function(a){return new Nf(a)};var Of={};Mf.og=function(a,b){var c=Kc();Of[c]=[a,b];return c};Mf.xd=function(a){var b=a?0:1;return function(c){var d=Of[c];if(d&&"function"===typeof d[b])d[b]();Of[c]=void 0}};Mf.Tf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Mf.cg=function(a){if(a===Mf.qb)return a;var b=Kc();Mf.cc[b]=a;return'google_tag_manager["'+yc.i+'"].macro('+b+")"};Mf.Xf=function(a,b,c){a instanceof Mf.Ie&&(a=a.resolve(Mf.og(b,c)),b=fa);return{sc:a,K:b}};var Pf=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Ua(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Qf=function(a){zc.hasOwnProperty("autoEventsSettings")||(zc.autoEventsSettings={});var b=zc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Rf=function(a,b,c){Qf(a)[b]=c},Sf=function(a,b,c,d){var e=Qf(a),g=xa(e,b,d);e[b]=c(g)},Tf=function(a,b,c){var d=Qf(a);return xa(d,b,c)};var Uf=function(){for(var a=Ia.userAgent+(u.cookie||"")+(u.referrer||""),b=a.length,c=f.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(wa()/1E3)].join(".")},Xf=function(a,b,c,d){var e=Vf(b);return mb(a,e,Wf(c),d)},Vf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Wf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Yf(a,b){var c=""+Vf(a),d=Wf(b);1<d&&(c+="-"+d);return c};var Zf=["1"],$f={},dg=function(a,b,c,d){var e=ag(a);$f[e]||bg(e,b,c)||(cg(e,Uf(),b,c,d),bg(e,b,c))};function cg(a,b,c,d,e){var g;g=["1",Yf(d,c),b].join(".");rb(a,g,c,d,0==e?void 0:new Date(wa()+1E3*(void 0==e?7776E3:e)))}function bg(a,b,c){var d=Xf(a,b,c,Zf);d&&($f[a]=d);return d}function ag(a){return(a||"_gcl")+"_au"};var eg=function(){for(var a=[],b=u.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Pc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Pc]||(g[a[h].Pc]=[]),g[a[h].Pc].push({timestamp:k[1],Df:k[2]}))}return g};function fg(){for(var a=gg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function hg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var gg,ig,jg=function(a){gg=gg||hg();ig=ig||fg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(gg[l],gg[m],gg[n],gg[q])}return b.join("")},kg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=ig[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}gg=gg||hg();ig=ig||
fg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var lg;function mg(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var qg=function(){var a=ng,b=og,c=pg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Qa(u,"mousedown",d);Qa(u,"keyup",d);Qa(u,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},pg=function(){var a=Ka("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var rg=/(.*?)\*(.*?)\*(.*)/,sg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,tg=/^(?:www\.|m\.|amp\.)+/,ug=/([^?#]+)(\?[^#]*)?(#.*)?/,vg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,xg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(jg(String(d))))}var e=b.join("*");return["1",wg(e),e].join("*")},wg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=lg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}lg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^lg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},zg=function(){return function(a){var b=ib(f.location.href),c=b.search.replace("?",""),d=eb(c,"_gl",!0)||"";a.query=yg(d)||{};var e=hb(b,"fragment").match(vg);a.fragment=yg(e&&e[3]||
"")||{}}},yg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=rg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===wg(k,n)){l=!0;break a}l=!1}if(l){for(var q={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)q[t[p]]=kg(t[p+1]);return q}}}}catch(r){}};
function Ag(a,b,c){function d(m){var n=m,q=vg.exec(n),t=n;if(q){var p=q[2],r=q[4];t=q[1];r&&(t=t+p+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=ug.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function Bg(a,b,c){for(var d={},e={},g=pg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&mg(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=xg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,t=0;t<n.length;t++){var p=n[t];if("_gl"===p.name){p.setAttribute("value",l);q=!0;break}}if(!q){var r=u.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=Ag(l,a.action);Za.test(v)&&(a.action=v)}}}else Cg(l,a,!1)}if(!c&&Aa(e)){var w=xg(e);Cg(w,a,!0)}}function Cg(a,b,c){if(b.href){var d=Ag(a,b.href,void 0===c?!1:c);Za.test(d)&&(b.href=d)}}
var ng=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||Bg(e,e.hostname,!1)}}catch(h){}},og=function(a){try{if(a.action){var b=hb(ib(a.action),"host");Bg(a,b,!0)}}catch(c){}},Dg=function(a,b,c,d){qg();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};pg().decorators.push(e)},Eg=function(){var a=u.location.hostname,b=sg.exec(u.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(tg,"")===e.replace(tg,"")},Fg=function(a,b){return!1===a?!1:a||b||Eg()};var Gg={};var Hg=/^\w+$/,Ig=/^[\w-]+$/,Jg=/^~?[\w-]+$/,Kg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Lg(a){return a&&"string"==typeof a&&a.match(Hg)?a:"_gcl"}var Ng=function(){var a=ib(f.location.href),b=hb(a,"query",!1,void 0,"gclid"),c=hb(a,"query",!1,void 0,"gclsrc"),d=hb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||eb(e,"gclid",void 0);c=c||eb(e,"gclsrc",void 0)}return Mg(b,c,d)};
function Mg(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Ig))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Gg.gtm_3pds?0:Gg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Og(a,b,c){function d(q,t){var p=Pg(q,e);p&&rb(p,t,h,g,l,!0)}b=b||{};var e=Lg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Od?7776E3:b.Od;c=c||wa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.lh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var Pg=function(a,b){var c=Kg[a];if(void 0!==c)return b+c},Qg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function Rg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Sg=function(a,b,c,d,e){if(ka(b)){var g=Lg(e);Dg(function(){for(var h={},k=0;k<a.length;++k){var l=Pg(a[k],g);if(l){var m=jb(l,u.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Tg=function(a){return a.filter(function(b){return Jg.test(b)})},Ug=function(a){for(var b=["aw","dc"],c=Lg(a&&a.prefix),d={},e=0;e<b.length;e++)Kg[b[e]]&&(d[b[e]]=Kg[b[e]]);ra(d,function(g,h){var k=jb(c+h,u.cookie);if(k.length){var l=k[0],m=Qg(l),n={};n[g]=[Rg(l)];Og(n,a,m)}})};var Wg=/^\d+\.fls\.doubleclick\.net$/;function Xg(a){var b=ib(f.location.href),c=hb(b,"host",!1);if(c&&c.match(Wg)){var d=hb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Yg(a,b){if("aw"==a||"dc"==a){var c=Xg("gcl"+a);if(c)return c.split(".")}var d=Lg(b);if("_gcl"==d){var e;e=Ng()[a]||[];if(0<e.length)return e}var g=Pg(a,d),h;if(g){var k=[];if(u.cookie){var l=jb(g,u.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Rg(l[m]);n&&-1===la(k,n)&&k.push(n)}h=Tg(k)}else h=k}else h=k}else h=[];return h}
var Zg=function(){var a=Xg("gac");if(a)return decodeURIComponent(a);var b=eg(),c=[];ra(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Df);g=Tg(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},$g=function(a,b,c,d,e){dg(b,c,d,e);var g=$f[ag(b)],h=Ng().dc||[],k=!1;if(g&&0<h.length){var l=zc.joined_au=zc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk",t=q=q+"?gclid="+h[n]+"&auiddc="+g;Ia.sendBeacon&&Ia.sendBeacon(t)||Pa(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var p=ag(b),r=$f[p];r&&cg(p,r,c,d,e)}};var ah;if(3===yc.ub.length)ah="g";else{var bh="G";ah=bh}
var ch={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:ah,OPT:"o"},dh=function(a){var b=yc.i.split("-"),c=b[0].toUpperCase(),d=ch[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===yc.ub.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+yc.ub+e};var ih=["input","select","textarea"],jh=["button","hidden","image","reset","submit"],kh=function(a){var b=a.tagName.toLowerCase();return!ma(ih,function(c){return c===b})||"input"===b&&ma(jh,function(c){return c===a.type.toLowerCase()})?!1:!0};var nh=!!f.MutationObserver,oh=void 0,ph=function(a){if(!oh){var b=function(){var c=u.body;if(c)if(nh)(new MutationObserver(function(){for(var e=0;e<oh.length;e++)A(oh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Qa(c,"DOMNodeInserted",function(){d||(d=!0,A(function(){d=!1;for(var e=0;e<oh.length;e++)A(oh[e])}))})}};oh=[];u.body?b():A(b)}oh.push(a)};var Rh=f.clearTimeout,Sh=f.setTimeout,H=function(a,b,c){if(Qe()){b&&A(b)}else return Ma(a,b,c)},Th=function(){return new Date},Uh=function(){return f.location.href},Vh=function(a){return hb(ib(a),"fragment")},Wh=function(a){return gb(ib(a))},Xh=null;
var Yh=function(a,b){return md(a,b||2)},Zh=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return jf(a)},$h=function(a,b){f[a]=b},K=function(a,b,c){b&&(void 0===f[a]||c&&!f[a])&&(f[a]=b);return f[a]},ai=function(a,b,c){return jb(a,b,void 0===c?!0:!!c)},bi=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Od:d},g=Ng();Og(g,e);Ug(e)},ci=function(a,b,c,d,e){var g=zg(),h=pg();h.data||(h.data={query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&
(za(k,l.query),za(k,l.fragment));for(var m=Lg(b),n=0;n<a.length;++n){var q=a[n];if(void 0!==Kg[q]){var t=Pg(q,m),p=k[t];if(p){var r=Math.min(Qg(p),wa()),v;b:{for(var w=r,y=jb(t,u.cookie),x=0;x<y.length;++x)if(Qg(y[x])>w){v=!0;break b}v=!1}v||rb(t,p,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var z={prefix:b,path:c,domain:d};Og(Mg(k.gclid,k.gclsrc),z);},di=function(a,b,c,d,e){Sg(a,b,c,d,e);},
ei=function(a,b){if(Qe()){b&&A(b)}else Oa(a,b)},fi=function(a){return!!Tf(a,"init",!1)},gi=function(a){Rf(a,"init",!0)},hi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Dc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ra(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});H(D("https://","http://",d))},ii=function(a,b){var c=a[b];return c};
var ki=Mf.Xf;var li=new oa,mi=function(a,b){function c(h){var k=ib(h),l=hb(k,"protocol"),m=hb(k,"host",!0),n=hb(k,"port"),q=hb(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},ni=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ka(c)){for(var d=0;d<c.length;d++)if(ni({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=la(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var t=a.ignore_case?"i":void 0;try{var p=String(c)+t,r=li.get(p);r||(r=new RegExp(c,t),li.set(p,r));q=r.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return mi(b,c)}return!1};var pi=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var qi={},ri=encodeURI,L=encodeURIComponent,si=Pa;var ti=function(a,b){if(!a)return!1;var c=hb(ib(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var ui=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};qi.Uf=function(){var a=!1;return a};var vi=function(){var a=!1;return a};var Vi=function(){var a=f.gaGlobal=f.gaGlobal||{};a.hid=a.hid||na();return a.hid};var mj=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},nj=function(){this.c=1;this.e=[];this.p=null};function oj(a){var b=zc,c=b.gss=b.gss||{};return c[a]=c[a]||new nj}var pj=function(a,b){oj(a).p=b},qj=function(a){var b=oj(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,l.p)}catch(m){}};g(d);g(e)}};var Aj=window,Bj=document,Cj=function(a){var b=Aj._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Aj["ga-disable-"+a])return!0;try{var c=Aj.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=jb("AMP_TOKEN",Bj.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Bj.getElementById("__gaOptOutExtension")?!0:!1};var Jj=function(a,b,c){Ij(a);var d=Math.floor(wa()/1E3);oj(a).e.push(new mj(b,d,c,void 0));qj(a)},Kj=function(a,b,c){Ij(a);var d=Math.floor(wa()/1E3);oj(a).e.push(new mj(b,d,c,!0))},Ij=function(a){if(1===oj(a).c&&(oj(a).c=2,!Qe())){var b=encodeURIComponent(a);Ma(("http:"!=f.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Mj=function(a,b){},Lj=function(a,
b){};var Y={a:{}};



Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.b=0})(function(a){return String(vd(a.vtp_gtmEventId,"event"))})}();Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.b=0})(function(a){var b=Yh("gtm.referrer",1)||u.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?hb(ib(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Wh(String(b)):String(b)})}();
Y.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Pf(c,"gtm.click");Zh(d)}}(function(b){Y.__cl=b;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.b=0})(function(b){if(!fi("cl")){var c=K("document");Qa(c,"click",a,!0);gi("cl")}A(b.vtp_gtmOnSuccess)})}();
Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Yh("gtm.url",1))||Uh();var d=b[a("vtp_component")];if(!d||"URL"==d)return Wh(String(c));var e=ib(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ka(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var q=hb(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){g=q;break a}}g=void 0}else g=hb(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Yh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.ua=["google"],function(){var a,b=function(c){var d={},e={},g={},h={},k={},l=void 0;if(c.vtp_gaSettings){var m=c.vtp_gaSettings;Ha(ui(m.vtp_fieldsToSet,"fieldName","value"),e);Ha(ui(m.vtp_contentGroup,"index","group"),g);Ha(ui(m.vtp_dimension,"index","dimension"),h);Ha(ui(m.vtp_metric,"index","metric"),k);c.vtp_gaSettings=null;m.vtp_fieldsToSet=void 0;m.vtp_contentGroup=void 0;m.vtp_dimension=void 0;m.vtp_metric=void 0;var n=Ha(m);c=Ha(c,n)}Ha(ui(c.vtp_fieldsToSet,"fieldName","value"),e);Ha(ui(c.vtp_contentGroup,
"index","group"),g);Ha(ui(c.vtp_dimension,"index","dimension"),h);Ha(ui(c.vtp_metric,"index","metric"),k);var q=$d(c.vtp_functionName);if(ha(q)){var t="",p="";c.vtp_setTrackerName&&"string"==typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(p=c.vtp_trackerName,t=p+"."):(p="gtm"+Kc(),t=p+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},v={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},w=function(V){var N=[].slice.call(arguments,0);N[0]=t+N[0];q.apply(window,N)},y=function(V,N){return void 0===N?N:V(N)},x=function(V,N){if(N)for(var Z in N)N.hasOwnProperty(Z)&&w("set",V+Z,N[Z])},z=function(){},B=function(V,N,Z){var qa=0;if(V)for(var Ba in V)if(V.hasOwnProperty(Ba)&&(Z&&r[Ba]||!Z&&void 0===r[Ba])){var Ra=v[Ba]?ta(V[Ba]):V[Ba];"anonymizeIp"!=Ba||Ra||(Ra=void 0);N[Ba]=Ra;qa++}return qa},C={name:p};B(e,C,!0);(function(){})();
q("create",c.vtp_trackingId||d.trackingId,C);w("set","&gtm",dh(!0));c.vtp_enableRecaptcha&&w("require","recaptcha","recaptcha.js");(function(V,N){void 0!==c[N]&&w("set",V,c[N])})("nonInteraction","vtp_nonInteraction");x("contentGroup",g);x("dimension",h);x("metric",k);var E={};B(e,E,!1)&&w("set",E);var F;c.vtp_enableLinkId&&w("require",
"linkid","linkid.js");w("set","hitCallback",function(){var V=e&&e.hitCallback;ha(V)&&V();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){c.vtp_enableEcommerce&&(w("require","ec","ec.js"),z());var P={hitType:"event",eventCategory:String(c.vtp_eventCategory||d.category),eventAction:String(c.vtp_eventAction||d.action),eventLabel:y(String,c.vtp_eventLabel||d.label),eventValue:y(sa,c.vtp_eventValue||d.value)};B(F,P,!1);w("send",
P);}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("TRACK_TIMING"==
c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else if("TRACK_DATA"==c.vtp_trackType){}else{c.vtp_enableEcommerce&&(w("require","ec","ec.js"),z());if(c.vtp_doubleClick||"DISPLAY_FEATURES"==c.vtp_advertisingFeaturesType){var S=
"_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","displayfeatures",void 0,{cookieName:S})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==c.vtp_advertisingFeaturesType){var X="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");w("require","adfeatures",{cookieName:X})}F?w("send","pageview",F):w("send","pageview");}if(!a){var W=c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";c.vtp_useInternalVersion&&!c.vtp_useDebugVersion&&(W="internal/"+W);a=!0;var ea=D("https:","http:","//www.google-analytics.com/"+W,e&&e.forceSSL);H(ea,function(){var V=Yd();V&&V.loaded||c.vtp_gtmOnFailure();},
c.vtp_gtmOnFailure)}}else A(c.vtp_gtmOnFailure)};Y.__ua=b;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.b=0}();



Y.a.aev=["google"],function(){function a(p,r){var v=!1,w;var y=vd(p,"gtm");if(!y)return;v=!0;w=y[r];v||(w=Yh("gtm."+r,1));return w}function b(p,r,v,w){w||(w="element");var y=p+"."+r,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(p,w);if(z&&(x=v(z),n[y]=x,q.push(y),35<q.length)){var B=q.shift();delete n[B]}}return x}function c(p,r,v){var w=a(p,t[r]);return void 0!==w?w:v}function d(p,r){if(!p)return!1;
var v=e(Uh());ka(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(p))return!1}else{var x=r[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!ti(p,w)}function e(p){m.test(p)||(p="http://"+p);return hb(ib(p),"HOST",!0)}function g(p,r,v){switch(p){case "SUBMIT_TEXT":return b(r,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":return b(r,"FORM."+p,k)||v;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,
"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":return a(r,"interactedFormFieldPosition")||v;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return Ua(p,"value");case "button":return Va(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var r=0,v=0;v<p.elements.length;v++)kh(p.elements[v])&&r++;return r}}function l(p,r,v){var w=a(p,"interactedFormField");return w&&Ua(w,r)||v}var m=/^https?:\/\//i,
n={},q=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Y.__aev=p;Y.__aev.g="aev";Y.__aev.h=!0;Y.__aev.b=0})(function(p){var r=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");
return y&&y.tagName||v;case "TEXT":return b(r,w,Va)||v;case "URL":var x;a:{var z=String(a(r,"elementUrl")||v||""),B=ib(z),C=String(p.vtp_component||"URL");switch(C){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,p.vtp_affiliatedDomains);break a;default:x=hb(B,C,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(r,w,v);else{var F=p.vtp_attribute,P=a(r,"element");E=P&&Ua(P,F)||v||""}return E;case "MD":var U=p.vtp_mdValue,R=b(r,"MD",Dh);
return U&&R?Gh(R,U)||v:R||v;case "FORM":return g(String(p.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();
Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.g="gas";Y.__gas.h=!0;Y.__gas.b=0})(function(a){var b=Ha(a),c=b;c[ec.fa]=null;c[ec.De]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();





Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.g="paused";Y.__paused.h=!0;Y.__paused.b=0})(function(a){A(a.vtp_gtmOnFailure)})}();

Y.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=u.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,La(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){A(h)}}}var c=function(d){if(u.body){var e=
d.vtp_gtmOnFailure,g=ki(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.sc,k=g.K;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(u.body,Wa(h),k,e)()}else Sh(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.b=0}();



var Nj={};Nj.macro=function(a){if(Mf.cc.hasOwnProperty(a))return Mf.cc[a]},Nj.onHtmlSuccess=Mf.xd(!0),Nj.onHtmlFailure=Mf.xd(!1);Nj.dataLayer=nd;Nj.callback=function(a){Ic.hasOwnProperty(a)&&ha(Ic[a])&&Ic[a]();delete Ic[a]};Nj.$e=function(){zc[yc.i]=Nj;za(Jc,Y.a);Xb=Xb||Mf;Yb=Cd};
Nj.Pf=function(){Gg.gtm_3pds=!0;zc=f.google_tag_manager=f.google_tag_manager||{};if(zc[yc.i]){var a=zc.zones;a&&a.unregisterChild(yc.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Sb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);Qb.push(q)}Vb=Y;Wb=ni;Nj.$e();pf();Fd=!1;Gd=0;if("interactive"==u.readyState&&!u.createEventObject||"complete"==u.readyState)Id();else{Qa(u,"DOMContentLoaded",Id);Qa(u,"readystatechange",Id);if(u.createEventObject&&u.documentElement.doScroll){var p=!0;try{p=!f.frameElement}catch(y){}p&&Jd()}Qa(f,"load",Id)}cf=!1;"complete"===u.readyState?ef():
Qa(f,"load",ef);a:{if(!cd)break a;f.setInterval(dd,864E5);}
Fc=(new Date).getTime();}};(0,Nj.Pf)();

})()
