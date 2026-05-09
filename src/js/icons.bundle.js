var faIcons=(()=>{function h1(c,a){(a==null||a>c.length)&&(a=c.length);for(var l=0,e=Array(a);l<a;l++)e[l]=c[l];return e}function _4(c){if(Array.isArray(c))return c}function $4(c){if(Array.isArray(c))return h1(c)}function X4(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function $1(c,a){for(var l=0;l<a.length;l++){var e=a[l];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,N2(e.key),e)}}function K4(c,a,l){return a&&$1(c.prototype,a),l&&$1(c,l),Object.defineProperty(c,"prototype",{writable:!1}),c}function c1(c,a){var l=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!l){if(Array.isArray(c)||(l=H1(c))||a&&c&&typeof c.length=="number"){l&&(c=l);var e=0,r=function(){};return{s:r,n:function(){return e>=c.length?{done:!0}:{done:!1,value:c[e++]}},e:function(n){throw n},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,f=!0,s=!1;return{s:function(){l=l.call(c)},n:function(){var n=l.next();return f=n.done,n},e:function(n){s=!0,i=n},f:function(){try{f||l.return==null||l.return()}finally{if(s)throw i}}}}function p(c,a,l){return(a=N2(a))in c?Object.defineProperty(c,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[a]=l,c}function Y4(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function J4(c,a){var l=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(l!=null){var e,r,i,f,s=[],n=!0,t=!1;try{if(i=(l=l.call(c)).next,a===0){if(Object(l)!==l)return;n=!1}else for(;!(n=(e=i.call(l)).done)&&(s.push(e.value),s.length!==a);n=!0);}catch(M){t=!0,r=M}finally{try{if(!n&&l.return!=null&&(f=l.return(),Object(f)!==f))return}finally{if(t)throw r}}return s}}function Q4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X1(c,a){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),l.push.apply(l,e)}return l}function o(c){for(var a=1;a<arguments.length;a++){var l=arguments[a]!=null?arguments[a]:{};a%2?X1(Object(l),!0).forEach(function(e){p(c,e,l[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):X1(Object(l)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(l,e))})}return c}function i1(c,a){return _4(c)||J4(c,a)||H1(c,a)||Q4()}function y(c){return $4(c)||Y4(c)||H1(c)||Z4()}function c3(c,a){if(typeof c!="object"||!c)return c;var l=c[Symbol.toPrimitive];if(l!==void 0){var e=l.call(c,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(c)}function N2(c){var a=c3(c,"string");return typeof a=="symbol"?a:a+""}function e1(c){"@babel/helpers - typeof";return e1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},e1(c)}function H1(c,a){if(c){if(typeof c=="string")return h1(c,a);var l={}.toString.call(c).slice(8,-1);return l==="Object"&&c.constructor&&(l=c.constructor.name),l==="Map"||l==="Set"?Array.from(c):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?h1(c,a):void 0}}var K1=function(){},R1={},k2={},y2=null,w2={mark:K1,measure:K1};try{typeof window<"u"&&(R1=window),typeof document<"u"&&(k2=document),typeof MutationObserver<"u"&&(y2=MutationObserver),typeof performance<"u"&&(w2=performance)}catch{}var a3=R1.navigator||{},Y1=a3.userAgent,J1=Y1===void 0?"":Y1,D=R1,v=k2,Q1=y2,Q=w2,n5=!!D.document,T=!!v.documentElement&&!!v.head&&typeof v.addEventListener=="function"&&typeof v.createElement=="function",A2=~J1.indexOf("MSIE")||~J1.indexOf("Trident/"),M1,l3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,e3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,P2={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},r3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},F2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],g="classic",K="duotone",T2="sharp",B2="sharp-duotone",D2="chisel",H2="etch",R2="graphite",q2="jelly",E2="jelly-duo",U2="jelly-fill",G2="notdog",W2="notdog-duo",I2="slab",O2="slab-press",j2="thumbprint",V2="utility",_2="utility-duo",$2="utility-fill",X2="whiteboard",f3="Classic",i3="Duotone",s3="Sharp",n3="Sharp Duotone",o3="Chisel",t3="Etch",z3="Graphite",m3="Jelly",M3="Jelly Duo",p3="Jelly Fill",L3="Notdog",u3="Notdog Duo",v3="Slab",d3="Slab Press",C3="Thumbprint",h3="Utility",g3="Utility Duo",x3="Utility Fill",b3="Whiteboard",K2=[g,K,T2,B2,D2,H2,R2,q2,E2,U2,G2,W2,I2,O2,j2,V2,_2,$2,X2],o5=(M1={},p(p(p(p(p(p(p(p(p(p(M1,g,f3),K,i3),T2,s3),B2,n3),D2,o3),H2,t3),R2,z3),q2,m3),E2,M3),U2,p3),p(p(p(p(p(p(p(p(p(M1,G2,L3),W2,u3),I2,v3),O2,d3),j2,C3),V2,h3),_2,g3),$2,x3),X2,b3)),S3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},N3={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},k3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),y3={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},Y2=["fak","fa-kit","fakd","fa-kit-duotone"],Z1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},w3=["kit"],A3="kit",P3="kit-duotone",F3="Kit",T3="Kit Duotone",t5=p(p({},A3,F3),P3,T3),B3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},D3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},H3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},c2={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},p1,Z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},R3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],q3="classic",E3="duotone",U3="sharp",G3="sharp-duotone",W3="chisel",I3="etch",O3="graphite",j3="jelly",V3="jelly-duo",_3="jelly-fill",$3="notdog",X3="notdog-duo",K3="slab",Y3="slab-press",J3="thumbprint",Q3="utility",Z3="utility-duo",c0="utility-fill",a0="whiteboard",l0="Classic",e0="Duotone",r0="Sharp",f0="Sharp Duotone",i0="Chisel",s0="Etch",n0="Graphite",o0="Jelly",t0="Jelly Duo",z0="Jelly Fill",m0="Notdog",M0="Notdog Duo",p0="Slab",L0="Slab Press",u0="Thumbprint",v0="Utility",d0="Utility Duo",C0="Utility Fill",h0="Whiteboard",z5=(p1={},p(p(p(p(p(p(p(p(p(p(p1,q3,l0),E3,e0),U3,r0),G3,f0),W3,i0),I3,s0),O3,n0),j3,o0),V3,t0),_3,z0),p(p(p(p(p(p(p(p(p(p1,$3,m0),X3,M0),K3,p0),Y3,L0),J3,u0),Q3,v0),Z3,d0),c0,C0),a0,h0)),g0="kit",x0="kit-duotone",b0="Kit",S0="Kit Duotone",m5=p(p({},g0,b0),x0,S0),N0={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},k0={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},g1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},y0=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],J2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(R3,y0),w0=["solid","regular","light","thin","duotone","brands","semibold"],Q2=[1,2,3,4,5,6,7,8,9,10],A0=Q2.concat([11,12,13,14,15,16,17,18,19,20]),P0=["aw","fw","pull-left","pull-right"],F0=[].concat(y(Object.keys(k0)),w0,P0,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Z.GROUP,Z.SWAP_OPACITY,Z.PRIMARY,Z.SECONDARY]).concat(Q2.map(function(c){return"".concat(c,"x")})).concat(A0.map(function(c){return"w-".concat(c)})),T0={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},P="___FONT_AWESOME___",x1=16,Z2="fa",c4="svg-inline--fa",E="data-fa-i2svg",b1="data-fa-pseudo-element",B0="data-fa-pseudo-element-pending",q1="data-prefix",E1="data-icon",a2="fontawesome-i2svg",D0="async",H0=["HTML","HEAD","STYLE","SCRIPT"],a4=["::before","::after",":before",":after"],l4=(function(){try{return!0}catch{return!1}})();function Y(c){return new Proxy(c,{get:function(l,e){return e in l?l[e]:l[g]}})}var e4=o({},P2);e4[g]=o(o(o(o({},{"fa-duotone":"duotone"}),P2[g]),Z1.kit),Z1["kit-duotone"]);var R0=Y(e4),S1=o({},y3);S1[g]=o(o(o(o({},{duotone:"fad"}),S1[g]),c2.kit),c2["kit-duotone"]);var l2=Y(S1),N1=o({},g1);N1[g]=o(o({},N1[g]),H3.kit);var U1=Y(N1),k1=o({},N0);k1[g]=o(o({},k1[g]),B3.kit);var M5=Y(k1),q0=l3,r4="fa-layers-text",E0=e3,U0=o({},S3),p5=Y(U0),G0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],L1=r3,W0=[].concat(y(w3),y(F0)),_=D.FontAwesomeConfig||{};function I0(c){var a=v.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function O0(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}v&&typeof v.querySelector=="function"&&(e2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],e2.forEach(function(c){var a=i1(c,2),l=a[0],e=a[1],r=O0(I0(l));r!=null&&(_[e]=r)}));var e2,f4={styleDefault:"solid",familyDefault:g,cssPrefix:Z2,replacementClass:c4,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_.familyPrefix&&(_.cssPrefix=_.familyPrefix);var O=o(o({},f4),_);O.autoReplaceSvg||(O.observeMutations=!1);var m={};Object.keys(f4).forEach(function(c){Object.defineProperty(m,c,{enumerable:!0,set:function(l){O[c]=l,$.forEach(function(e){return e(m)})},get:function(){return O[c]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(a){O.cssPrefix=a,$.forEach(function(l){return l(m)})},get:function(){return O.cssPrefix}});D.FontAwesomeConfig=m;var $=[];function j0(c){return $.push(c),function(){$.splice($.indexOf(c),1)}}var B=x1,w={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function V0(c){if(!(!c||!T)){var a=v.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var l=v.head.childNodes,e=null,r=l.length-1;r>-1;r--){var i=l[r],f=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(e=i)}return v.head.insertBefore(a,e),c}}var _0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function r2(){for(var c=12,a="";c-- >0;)a+=_0[Math.random()*62|0];return a}function j(c){for(var a=[],l=(c||[]).length>>>0;l--;)a[l]=c[l];return a}function G1(c){return c.classList?j(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function i4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $0(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,'="').concat(i4(c[l]),'" ')},"").trim()}function s1(c){return Object.keys(c||{}).reduce(function(a,l){return a+"".concat(l,": ").concat(c[l].trim(),";")},"")}function W1(c){return c.size!==w.size||c.x!==w.x||c.y!==w.y||c.rotate!==w.rotate||c.flipX||c.flipY}function X0(c){var a=c.transform,l=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(l/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),n={transform:"".concat(i," ").concat(f," ").concat(s)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:n,path:t}}function K0(c){var a=c.transform,l=c.width,e=l===void 0?x1:l,r=c.height,i=r===void 0?x1:r,f=c.startCentered,s=f===void 0?!1:f,n="";return s&&A2?n+="translate(".concat(a.x/B-e/2,"em, ").concat(a.y/B-i/2,"em) "):s?n+="translate(calc(-50% + ".concat(a.x/B,"em), calc(-50% + ").concat(a.y/B,"em)) "):n+="translate(".concat(a.x/B,"em, ").concat(a.y/B,"em) "),n+="scale(".concat(a.size/B*(a.flipX?-1:1),", ").concat(a.size/B*(a.flipY?-1:1),") "),n+="rotate(".concat(a.rotate,"deg) "),n}var Y0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function s4(){var c=Z2,a=c4,l=m.cssPrefix,e=m.replacementClass,r=Y0;if(l!==c||e!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),f=new RegExp("\\--".concat(c,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(l,"-")).replace(f,"--".concat(l,"-")).replace(s,".".concat(e))}return r}var f2=!1;function u1(){m.autoAddCss&&!f2&&(V0(s4()),f2=!0)}var J0={mixout:function(){return{dom:{css:s4,insertCss:u1}}},hooks:function(){return{beforeDOMElementCreation:function(){u1()},beforeI2svg:function(){u1()}}}},F=D||{};F[P]||(F[P]={});F[P].styles||(F[P].styles={});F[P].hooks||(F[P].hooks={});F[P].shims||(F[P].shims=[]);var k=F[P],n4=[],o4=function(){v.removeEventListener("DOMContentLoaded",o4),r1=1,n4.map(function(a){return a()})},r1=!1;T&&(r1=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),r1||v.addEventListener("DOMContentLoaded",o4));function Q0(c){T&&(r1?setTimeout(c,0):n4.push(c))}function J(c){var a=c.tag,l=c.attributes,e=l===void 0?{}:l,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?i4(c):"<".concat(a," ").concat($0(e),">").concat(i.map(J).join(""),"</").concat(a,">")}function i2(c,a,l){if(c&&c[a]&&c[a][l])return{prefix:a,iconName:l,icon:c[a][l]}}var Z0=function(a,l){return function(e,r,i,f){return a.call(l,e,r,i,f)}},v1=function(a,l,e,r){var i=Object.keys(a),f=i.length,s=r!==void 0?Z0(l,r):l,n,t,M;for(e===void 0?(n=1,M=a[i[0]]):(n=0,M=e);n<f;n++)t=i[n],M=s(M,a[t],t,a);return M};function t4(c){return y(c).length!==1?null:c.codePointAt(0).toString(16)}function s2(c){return Object.keys(c).reduce(function(a,l){var e=c[l],r=!!e.icon;return r?a[e.iconName]=e.icon:a[l]=e,a},{})}function y1(c,a){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=l.skipHooks,r=e===void 0?!1:e,i=s2(a);typeof k.hooks.addPack=="function"&&!r?k.hooks.addPack(c,s2(a)):k.styles[c]=o(o({},k.styles[c]||{}),i),c==="fas"&&y1("fa",a)}var X=k.styles,c6=k.shims,z4=Object.keys(U1),a6=z4.reduce(function(c,a){return c[a]=Object.keys(U1[a]),c},{}),I1=null,m4={},M4={},p4={},L4={},u4={};function l6(c){return~W0.indexOf(c)}function e6(c,a){var l=a.split("-"),e=l[0],r=l.slice(1).join("-");return e===c&&r!==""&&!l6(r)?r:null}var v4=function(){var a=function(i){return v1(X,function(f,s,n){return f[n]=v1(s,i,{}),f},{})};m4=a(function(r,i,f){if(i[3]&&(r[i[3]]=f),i[2]){var s=i[2].filter(function(n){return typeof n=="number"});s.forEach(function(n){r[n.toString(16)]=f})}return r}),M4=a(function(r,i,f){if(r[f]=f,i[2]){var s=i[2].filter(function(n){return typeof n=="string"});s.forEach(function(n){r[n]=f})}return r}),u4=a(function(r,i,f){var s=i[2];return r[f]=f,s.forEach(function(n){r[n]=f}),r});var l="far"in X||m.autoFetchSvg,e=v1(c6,function(r,i){var f=i[0],s=i[1],n=i[2];return s==="far"&&!l&&(s="fas"),typeof f=="string"&&(r.names[f]={prefix:s,iconName:n}),typeof f=="number"&&(r.unicodes[f.toString(16)]={prefix:s,iconName:n}),r},{names:{},unicodes:{}});p4=e.names,L4=e.unicodes,I1=n1(m.styleDefault,{family:m.familyDefault})};j0(function(c){I1=n1(c.styleDefault,{family:m.familyDefault})});v4();function O1(c,a){return(m4[c]||{})[a]}function r6(c,a){return(M4[c]||{})[a]}function q(c,a){return(u4[c]||{})[a]}function d4(c){return p4[c]||{prefix:null,iconName:null}}function f6(c){var a=L4[c],l=O1("fas",c);return a||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function H(){return I1}var C4=function(){return{prefix:null,iconName:null,rest:[]}};function i6(c){var a=g,l=z4.reduce(function(e,r){return e[r]="".concat(m.cssPrefix,"-").concat(r),e},{});return K2.forEach(function(e){(c.includes(l[e])||c.some(function(r){return a6[e].includes(r)}))&&(a=e)}),a}function n1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.family,e=l===void 0?g:l,r=R0[e][c];if(e===K&&!c)return"fad";var i=l2[e][c]||l2[e][r],f=c in k.styles?c:null,s=i||f||null;return s}function s6(c){var a=[],l=null;return c.forEach(function(e){var r=e6(m.cssPrefix,e);r?l=r:e&&a.push(e)}),{iconName:l,rest:a}}function n2(c){return c.sort().filter(function(a,l,e){return e.indexOf(a)===l})}var o2=J2.concat(Y2);function o1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.skipLookups,e=l===void 0?!1:l,r=null,i=n2(c.filter(function(L){return o2.includes(L)})),f=n2(c.filter(function(L){return!o2.includes(L)})),s=i.filter(function(L){return r=L,!F2.includes(L)}),n=i1(s,1),t=n[0],M=t===void 0?null:t,z=i6(i),u=o(o({},s6(f)),{},{prefix:n1(M,{family:z})});return o(o(o({},u),z6({values:c,family:z,styles:X,config:m,canonical:u,givenPrefix:r})),n6(e,r,u))}function n6(c,a,l){var e=l.prefix,r=l.iconName;if(c||!e||!r)return{prefix:e,iconName:r};var i=a==="fa"?d4(r):{},f=q(e,r);return r=i.iconName||f||r,e=i.prefix||e,e==="far"&&!X.far&&X.fas&&!m.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var o6=K2.filter(function(c){return c!==g||c!==K}),t6=Object.keys(g1).filter(function(c){return c!==g}).map(function(c){return Object.keys(g1[c])}).flat();function z6(c){var a=c.values,l=c.family,e=c.canonical,r=c.givenPrefix,i=r===void 0?"":r,f=c.styles,s=f===void 0?{}:f,n=c.config,t=n===void 0?{}:n,M=l===K,z=a.includes("fa-duotone")||a.includes("fad"),u=t.familyDefault==="duotone",L=e.prefix==="fad"||e.prefix==="fa-duotone";if(!M&&(z||u||L)&&(e.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(e.prefix="fab"),!e.prefix&&o6.includes(l)){var C=Object.keys(s).find(function(x){return t6.includes(x)});if(C||t.autoFetchSvg){var d=k3.get(l).defaultShortPrefixId;e.prefix=d,e.iconName=q(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||i==="fa")&&(e.prefix=H()||"fas"),e}var m6=(function(){function c(){X4(this,c),this.definitions={}}return K4(c,[{key:"add",value:function(){for(var l=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var f=r.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(s){l.definitions[s]=o(o({},l.definitions[s]||{}),f[s]),y1(s,f[s]);var n=U1[g][s];n&&y1(n,f[s]),v4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(l,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var f=r[i],s=f.prefix,n=f.iconName,t=f.icon,M=t[2];l[s]||(l[s]={}),M.length>0&&M.forEach(function(z){typeof z=="string"&&(l[s][z]=t)}),l[s][n]=t}),l}}])})(),t2=[],W={},I={},M6=Object.keys(I);function p6(c,a){var l=a.mixoutsTo;return t2=c,W={},Object.keys(I).forEach(function(e){M6.indexOf(e)===-1&&delete I[e]}),t2.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(f){typeof r[f]=="function"&&(l[f]=r[f]),e1(r[f])==="object"&&Object.keys(r[f]).forEach(function(s){l[f]||(l[f]={}),l[f][s]=r[f][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(f){W[f]||(W[f]=[]),W[f].push(i[f])})}e.provides&&e.provides(I)}),l}function w1(c,a){for(var l=arguments.length,e=new Array(l>2?l-2:0),r=2;r<l;r++)e[r-2]=arguments[r];var i=W[c]||[];return i.forEach(function(f){a=f.apply(null,[a].concat(e))}),a}function U(c){for(var a=arguments.length,l=new Array(a>1?a-1:0),e=1;e<a;e++)l[e-1]=arguments[e];var r=W[c]||[];r.forEach(function(i){i.apply(null,l)})}function R(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return I[c]?I[c].apply(null,a):void 0}function A1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,l=c.prefix||H();if(a)return a=q(l,a)||a,i2(h4.definitions,l,a)||i2(k.styles,l,a)}var h4=new m6,L6=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,U("noAuto")},u6={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T?(U("beforeI2svg",a),R("pseudoElements2svg",a),R("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Q0(function(){d6({autoReplaceSvgRoot:l}),U("watch",a)})}},v6={icon:function(a){if(a===null)return null;if(e1(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:q(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var l=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=n1(a[0]);return{prefix:e,iconName:q(e,l)||l}}if(typeof a=="string"&&(a.indexOf("".concat(m.cssPrefix,"-"))>-1||a.match(q0))){var r=o1(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:q(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=H();return{prefix:i,iconName:q(i,a)||a}}}},S={noAuto:L6,config:m,dom:u6,parse:v6,library:h4,findIconDefinition:A1,toHtml:J},d6=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=a.autoReplaceSvgRoot,e=l===void 0?v:l;(Object.keys(k.styles).length>0||m.autoFetchSvg)&&T&&m.autoReplaceSvg&&S.dom.i2svg({node:e})};function t1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return J(e)})}}),Object.defineProperty(c,"node",{get:function(){if(T){var e=v.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function C6(c){var a=c.children,l=c.main,e=c.mask,r=c.attributes,i=c.styles,f=c.transform;if(W1(f)&&l.found&&!e.found){var s=l.width,n=l.height,t={x:s/n/2,y:.5};r.style=s1(o(o({},i),{},{"transform-origin":"".concat(t.x+f.x/16,"em ").concat(t.y+f.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function h6(c){var a=c.prefix,l=c.iconName,e=c.children,r=c.attributes,i=c.symbol,f=i===!0?"".concat(a,"-").concat(m.cssPrefix,"-").concat(l):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},r),{},{id:f}),children:e}]}]}function g6(c){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(l){return l in c})}function j1(c){var a=c.icons,l=a.main,e=a.mask,r=c.prefix,i=c.iconName,f=c.transform,s=c.symbol,n=c.maskId,t=c.extra,M=c.watchable,z=M===void 0?!1:M,u=e.found?e:l,L=u.width,C=u.height,d=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(A){return t.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(t.classes).join(" "),x={children:[],attributes:o(o({},t.attributes),{},{"data-prefix":r,"data-icon":i,class:d,role:t.attributes.role||"img",viewBox:"0 0 ".concat(L," ").concat(C)})};!g6(t.attributes)&&!t.attributes["aria-hidden"]&&(x.attributes["aria-hidden"]="true"),z&&(x.attributes[E]="");var h=o(o({},x),{},{prefix:r,iconName:i,main:l,mask:e,maskId:n,transform:f,symbol:s,styles:o({},t.styles)}),b=e.found&&l.found?R("generateAbstractMask",h)||{children:[],attributes:{}}:R("generateAbstractIcon",h)||{children:[],attributes:{}},N=b.children,G=b.attributes;return h.children=N,h.attributes=G,s?h6(h):C6(h)}function z2(c){var a=c.content,l=c.width,e=c.height,r=c.transform,i=c.extra,f=c.watchable,s=f===void 0?!1:f,n=o(o({},i.attributes),{},{class:i.classes.join(" ")});s&&(n[E]="");var t=o({},i.styles);W1(r)&&(t.transform=K0({transform:r,startCentered:!0,width:l,height:e}),t["-webkit-transform"]=t.transform);var M=s1(t);M.length>0&&(n.style=M);var z=[];return z.push({tag:"span",attributes:n,children:[a]}),z}function x6(c){var a=c.content,l=c.extra,e=o(o({},l.attributes),{},{class:l.classes.join(" ")}),r=s1(l.styles);r.length>0&&(e.style=r);var i=[];return i.push({tag:"span",attributes:e,children:[a]}),i}var d1=k.styles;function P1(c){var a=c[0],l=c[1],e=c.slice(4),r=i1(e,1),i=r[0],f=null;return Array.isArray(i)?f={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(L1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(L1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(L1.PRIMARY),fill:"currentColor",d:i[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:l,icon:f}}var b6={found:!1,width:512,height:512};function S6(c,a){!l4&&!m.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function F1(c,a){var l=a;return a==="fa"&&m.styleDefault!==null&&(a=H()),new Promise(function(e,r){if(l==="fa"){var i=d4(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&d1[a]&&d1[a][c]){var f=d1[a][c];return e(P1(f))}S6(c,a),e(o(o({},b6),{},{icon:m.showMissingIcons&&c?R("missingIconAbstract")||{}:{}}))})}var m2=function(){},T1=m.measurePerformance&&Q&&Q.mark&&Q.measure?Q:{mark:m2,measure:m2},V='FA "7.2.0"',N6=function(a){return T1.mark("".concat(V," ").concat(a," begins")),function(){return g4(a)}},g4=function(a){T1.mark("".concat(V," ").concat(a," ends")),T1.measure("".concat(V," ").concat(a),"".concat(V," ").concat(a," begins"),"".concat(V," ").concat(a," ends"))},V1={begin:N6,end:g4},a1=function(){};function M2(c){var a=c.getAttribute?c.getAttribute(E):null;return typeof a=="string"}function k6(c){var a=c.getAttribute?c.getAttribute(q1):null,l=c.getAttribute?c.getAttribute(E1):null;return a&&l}function y6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(m.replacementClass)}function w6(){if(m.autoReplaceSvg===!0)return l1.replace;var c=l1[m.autoReplaceSvg];return c||l1.replace}function A6(c){return v.createElementNS("http://www.w3.org/2000/svg",c)}function P6(c){return v.createElement(c)}function x4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.ceFn,e=l===void 0?c.tag==="svg"?A6:P6:l;if(typeof c=="string")return v.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(f){r.setAttribute(f,c.attributes[f])});var i=c.children||[];return i.forEach(function(f){r.appendChild(x4(f,{ceFn:e}))}),r}function F6(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var l1={replace:function(a){var l=a[0];if(l.parentNode)if(a[1].forEach(function(r){l.parentNode.insertBefore(x4(r),l)}),l.getAttribute(E)===null&&m.keepOriginalSource){var e=v.createComment(F6(l));l.parentNode.replaceChild(e,l)}else l.remove()},nest:function(a){var l=a[0],e=a[1];if(~G1(l).indexOf(m.replacementClass))return l1.replace(a);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,n){return n===m.replacementClass||n.match(r)?s.toSvg.push(n):s.toNode.push(n),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",i.toNode.join(" "))}var f=e.map(function(s){return J(s)}).join(`
`);l.setAttribute(E,""),l.innerHTML=f}};function p2(c){c()}function b4(c,a){var l=typeof a=="function"?a:a1;if(c.length===0)l();else{var e=p2;m.mutateApproach===D0&&(e=D.requestAnimationFrame||p2),e(function(){var r=w6(),i=V1.begin("mutate");c.map(r),i(),l()})}}var _1=!1;function S4(){_1=!0}function B1(){_1=!1}var f1=null;function L2(c){if(Q1&&m.observeMutations){var a=c.treeCallback,l=a===void 0?a1:a,e=c.nodeCallback,r=e===void 0?a1:e,i=c.pseudoElementsCallback,f=i===void 0?a1:i,s=c.observeMutationsRoot,n=s===void 0?v:s;f1=new Q1(function(t){if(!_1){var M=H();j(t).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!M2(z.addedNodes[0])&&(m.searchPseudoElements&&f(z.target),l(z.target)),z.type==="attributes"&&z.target.parentNode&&m.searchPseudoElements&&f([z.target],!0),z.type==="attributes"&&M2(z.target)&&~G0.indexOf(z.attributeName))if(z.attributeName==="class"&&k6(z.target)){var u=o1(G1(z.target)),L=u.prefix,C=u.iconName;z.target.setAttribute(q1,L||M),C&&z.target.setAttribute(E1,C)}else y6(z.target)&&r(z.target)})}}),T&&f1.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function T6(){f1&&f1.disconnect()}function B6(c){var a=c.getAttribute("style"),l=[];return a&&(l=a.split(";").reduce(function(e,r){var i=r.split(":"),f=i[0],s=i.slice(1);return f&&s.length>0&&(e[f]=s.join(":").trim()),e},{})),l}function D6(c){var a=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=o1(G1(c));return r.prefix||(r.prefix=H()),a&&l&&(r.prefix=a,r.iconName=l),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=r6(r.prefix,c.innerText)||O1(r.prefix,t4(c.innerText))),!r.iconName&&m.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function H6(c){var a=j(c.attributes).reduce(function(l,e){return l.name!=="class"&&l.name!=="style"&&(l[e.name]=e.value),l},{});return a}function R6(){return{iconName:null,prefix:null,transform:w,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function u2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},l=D6(c),e=l.iconName,r=l.prefix,i=l.rest,f=H6(c),s=w1("parseNodeAttributes",{},c),n=a.styleParser?B6(c):[];return o({iconName:e,prefix:r,transform:w,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:n,attributes:f}},s)}var q6=k.styles;function N4(c){var a=m.autoReplaceSvg==="nest"?u2(c,{styleParser:!1}):u2(c);return~a.extra.classes.indexOf(r4)?R("generateLayersText",c,a):R("generateSvgReplacementMutation",c,a)}function E6(){return[].concat(y(Y2),y(J2))}function v2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!T)return Promise.resolve();var l=v.documentElement.classList,e=function(z){return l.add("".concat(a2,"-").concat(z))},r=function(z){return l.remove("".concat(a2,"-").concat(z))},i=m.autoFetchSvg?E6():F2.concat(Object.keys(q6));i.includes("fa")||i.push("fa");var f=[".".concat(r4,":not([").concat(E,"])")].concat(i.map(function(M){return".".concat(M,":not([").concat(E,"])")})).join(", ");if(f.length===0)return Promise.resolve();var s=[];try{s=j(c.querySelectorAll(f))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var n=V1.begin("onTree"),t=s.reduce(function(M,z){try{var u=N4(z);u&&M.push(u)}catch(L){l4||L.name==="MissingIcon"&&console.error(L)}return M},[]);return new Promise(function(M,z){Promise.all(t).then(function(u){b4(u,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),n(),M()})}).catch(function(u){n(),z(u)})})}function U6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;N4(c).then(function(l){l&&b4([l],a)})}function G6(c){return function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:A1(a||{}),r=l.mask;return r&&(r=(r||{}).icon?r:A1(r||{})),c(e,o(o({},l),{},{mask:r}))}}var W6=function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=l.transform,r=e===void 0?w:e,i=l.symbol,f=i===void 0?!1:i,s=l.mask,n=s===void 0?null:s,t=l.maskId,M=t===void 0?null:t,z=l.classes,u=z===void 0?[]:z,L=l.attributes,C=L===void 0?{}:L,d=l.styles,x=d===void 0?{}:d;if(a){var h=a.prefix,b=a.iconName,N=a.icon;return t1(o({type:"icon"},a),function(){return U("beforeDOMElementCreation",{iconDefinition:a,params:l}),j1({icons:{main:P1(N),mask:n?P1(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:b,transform:o(o({},w),r),symbol:f,maskId:M,extra:{attributes:C,styles:x,classes:u}})})}},I6={mixout:function(){return{icon:G6(W6)}},hooks:function(){return{mutationObserverCallbacks:function(l){return l.treeCallback=v2,l.nodeCallback=U6,l}}},provides:function(a){a.i2svg=function(l){var e=l.node,r=e===void 0?v:e,i=l.callback,f=i===void 0?function(){}:i;return v2(r,f)},a.generateSvgReplacementMutation=function(l,e){var r=e.iconName,i=e.prefix,f=e.transform,s=e.symbol,n=e.mask,t=e.maskId,M=e.extra;return new Promise(function(z,u){Promise.all([F1(r,i),n.iconName?F1(n.iconName,n.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var C=i1(L,2),d=C[0],x=C[1];z([l,j1({icons:{main:d,mask:x},prefix:i,iconName:r,transform:f,symbol:s,maskId:t,extra:M,watchable:!0})])}).catch(u)})},a.generateAbstractIcon=function(l){var e=l.children,r=l.attributes,i=l.main,f=l.transform,s=l.styles,n=s1(s);n.length>0&&(r.style=n);var t;return W1(f)&&(t=R("generateAbstractTransformGrouping",{main:i,transform:f,containerWidth:i.width,iconWidth:i.width})),e.push(t||i.icon),{children:e,attributes:r}}}},O6={mixout:function(){return{layer:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return t1({type:"layer"},function(){U("beforeDOMElementCreation",{assembler:l,params:e});var f=[];return l(function(s){Array.isArray(s)?s.map(function(n){f=f.concat(n.abstract)}):f=f.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(y(i)).join(" ")},children:f}]})}}}},j6={mixout:function(){return{counter:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,f=e.classes,s=f===void 0?[]:f,n=e.attributes,t=n===void 0?{}:n,M=e.styles,z=M===void 0?{}:M;return t1({type:"counter",content:l},function(){return U("beforeDOMElementCreation",{content:l,params:e}),x6({content:l.toString(),title:i,extra:{attributes:t,styles:z,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(y(s))}})})}}}},V6={mixout:function(){return{text:function(l){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?w:r,f=e.classes,s=f===void 0?[]:f,n=e.attributes,t=n===void 0?{}:n,M=e.styles,z=M===void 0?{}:M;return t1({type:"text",content:l},function(){return U("beforeDOMElementCreation",{content:l,params:e}),z2({content:l,transform:o(o({},w),i),extra:{attributes:t,styles:z,classes:["".concat(m.cssPrefix,"-layers-text")].concat(y(s))}})})}}},provides:function(a){a.generateLayersText=function(l,e){var r=e.transform,i=e.extra,f=null,s=null;if(A2){var n=parseInt(getComputedStyle(l).fontSize,10),t=l.getBoundingClientRect();f=t.width/n,s=t.height/n}return Promise.resolve([l,z2({content:l.innerHTML,width:f,height:s,transform:r,extra:i,watchable:!0})])}}},k4=new RegExp('"',"ug"),d2=[1105920,1112319],C2=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),N3),T0),D3),D1=Object.keys(C2).reduce(function(c,a){return c[a.toLowerCase()]=C2[a],c},{}),_6=Object.keys(D1).reduce(function(c,a){var l=D1[a];return c[a]=l[900]||y(Object.entries(l))[0][1],c},{});function $6(c){var a=c.replace(k4,"");return t4(y(a)[0]||"")}function X6(c){var a=c.getPropertyValue("font-feature-settings").includes("ss01"),l=c.getPropertyValue("content"),e=l.replace(k4,""),r=e.codePointAt(0),i=r>=d2[0]&&r<=d2[1],f=e.length===2?e[0]===e[1]:!1;return i||f||a}function K6(c,a){var l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(a),r=isNaN(e)?"normal":e;return(D1[l]||{})[r]||_6[l]}function h2(c,a){var l="".concat(B0).concat(a.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(l)!==null)return e();var i=j(c.children),f=i.filter(function(z1){return z1.getAttribute(b1)===a})[0],s=D.getComputedStyle(c,a),n=s.getPropertyValue("font-family"),t=n.match(E0),M=s.getPropertyValue("font-weight"),z=s.getPropertyValue("content");if(f&&!t)return c.removeChild(f),e();if(t&&z!=="none"&&z!==""){var u=s.getPropertyValue("content"),L=K6(n,M),C=$6(u),d=t[0].startsWith("FontAwesome"),x=X6(s),h=O1(L,C),b=h;if(d){var N=f6(C);N.iconName&&N.prefix&&(h=N.iconName,L=N.prefix)}if(h&&!x&&(!f||f.getAttribute(q1)!==L||f.getAttribute(E1)!==b)){c.setAttribute(l,b),f&&c.removeChild(f);var G=R6(),A=G.extra;A.attributes[b1]=a,F1(h,L).then(function(z1){var j4=j1(o(o({},G),{},{icons:{main:z1,mask:C4()},prefix:L,iconName:b,extra:A,watchable:!0})),m1=v.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(m1,c.firstChild):c.appendChild(m1),m1.outerHTML=j4.map(function(V4){return J(V4)}).join(`
`),c.removeAttribute(l),e()}).catch(r)}else e()}else e()})}function Y6(c){return Promise.all([h2(c,"::before"),h2(c,"::after")])}function J6(c){return c.parentNode!==document.head&&!~H0.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(b1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var Q6=function(a){return!!a&&a4.some(function(l){return a.includes(l)})},Z6=function(a){if(!a)return[];var l=new Set,e=a.split(/,(?![^()]*\))/).map(function(n){return n.trim()});e=e.flatMap(function(n){return n.includes("(")?n:n.split(",").map(function(t){return t.trim()})});var r=c1(e),i;try{for(r.s();!(i=r.n()).done;){var f=i.value;if(Q6(f)){var s=a4.reduce(function(n,t){return n.replace(t,"")},f);s!==""&&s!=="*"&&l.add(s)}}}catch(n){r.e(n)}finally{r.f()}return l};function g2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(T){var l;if(a)l=c;else if(m.searchPseudoElementsFullScan)l=c.querySelectorAll("*");else{var e=new Set,r=c1(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var f=i.value;try{var s=c1(f.cssRules),n;try{for(s.s();!(n=s.n()).done;){var t=n.value,M=Z6(t.selectorText),z=c1(M),u;try{for(z.s();!(u=z.n()).done;){var L=u.value;e.add(L)}}catch(d){z.e(d)}finally{z.f()}}}catch(d){s.e(d)}finally{s.f()}}catch(d){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(f.href," (").concat(d.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(d){r.e(d)}finally{r.f()}if(!e.size)return;var C=Array.from(e).join(", ");try{l=c.querySelectorAll(C)}catch{}}return new Promise(function(d,x){var h=j(l).filter(J6).map(Y6),b=V1.begin("searchPseudoElements");S4(),Promise.all(h).then(function(){b(),B1(),d()}).catch(function(){b(),B1(),x()})})}}var c5={hooks:function(){return{mutationObserverCallbacks:function(l){return l.pseudoElementsCallback=g2,l}}},provides:function(a){a.pseudoElements2svg=function(l){var e=l.node,r=e===void 0?v:e;m.searchPseudoElements&&g2(r)}}},x2=!1,a5={mixout:function(){return{dom:{unwatch:function(){S4(),x2=!0}}}},hooks:function(){return{bootstrap:function(){L2(w1("mutationObserverCallbacks",{}))},noAuto:function(){T6()},watch:function(l){var e=l.observeMutationsRoot;x2?B1():L2(w1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},b2=function(a){var l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),f=i[0],s=i.slice(1).join("-");if(f&&s==="h")return e.flipX=!0,e;if(f&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(f){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},l)},l5={mixout:function(){return{parse:{transform:function(l){return b2(l)}}}},hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-transform");return r&&(l.transform=b2(r)),l}}},provides:function(a){a.generateAbstractTransformGrouping=function(l){var e=l.main,r=l.transform,i=l.containerWidth,f=l.iconWidth,s={transform:"translate(".concat(i/2," 256)")},n="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),M="rotate(".concat(r.rotate," 0 0)"),z={transform:"".concat(n," ").concat(t," ").concat(M)},u={transform:"translate(".concat(f/2*-1," -256)")},L={outer:s,inner:z,path:u};return{tag:"g",attributes:o({},L.outer),children:[{tag:"g",attributes:o({},L.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:o(o({},e.icon.attributes),L.path)}]}]}}}},C1={x:0,y:0,width:"100%",height:"100%"};function S2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function e5(c){return c.tag==="g"?c.children:[c]}var r5={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-mask"),i=r?o1(r.split(" ").map(function(f){return f.trim()})):C4();return i.prefix||(i.prefix=H()),l.mask=i,l.maskId=e.getAttribute("data-fa-mask-id"),l}}},provides:function(a){a.generateAbstractMask=function(l){var e=l.children,r=l.attributes,i=l.main,f=l.mask,s=l.maskId,n=l.transform,t=i.width,M=i.icon,z=f.width,u=f.icon,L=X0({transform:n,containerWidth:z,iconWidth:t}),C={tag:"rect",attributes:o(o({},C1),{},{fill:"white"})},d=M.children?{children:M.children.map(S2)}:{},x={tag:"g",attributes:o({},L.inner),children:[S2(o({tag:M.tag,attributes:o(o({},M.attributes),L.path)},d))]},h={tag:"g",attributes:o({},L.outer),children:[x]},b="mask-".concat(s||r2()),N="clip-".concat(s||r2()),G={tag:"mask",attributes:o(o({},C1),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,h]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:e5(u)},G]};return e.push(A,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(b,")")},C1)}),{children:e,attributes:r}}}},f5={provides:function(a){var l=!1;D.matchMedia&&(l=D.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:o(o({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=o(o({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:o(o({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||s.children.push({tag:"animate",attributes:o(o({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},f),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:o(o({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:o(o({},f),{},{values:"1;0;0;0;0;1;"})}]}),l||e.push({tag:"path",attributes:o(o({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},i5={hooks:function(){return{parseNodeAttributes:function(l,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return l.symbol=i,l}}}},s5=[J0,I6,O6,j6,V6,c5,a5,l5,r5,f5,i5];p6(s5,{mixoutsTo:S});var L5=S.noAuto,u5=S.config,y4=S.library,w4=S.dom,v5=S.parse,d5=S.findIconDefinition,C5=S.toHtml,h5=S.icon,g5=S.layer,x5=S.text,b5=S.counter;var A4={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M61.4 64C27.5 64 0 91.5 0 125.4 0 126.3 0 127.1 .1 128L0 128 0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256-.1 0c0-.9 .1-1.7 .1-2.6 0-33.9-27.5-61.4-61.4-61.4L61.4 64zM464 192.3L464 384c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-191.7 154.8 117.4c31.4 23.9 74.9 23.9 106.4 0L464 192.3zM48 125.4C48 118 54 112 61.4 112l389.2 0c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7z"]};var P4={prefix:"far",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M193.1 32c-18.7 0-36.2 9.4-46.6 24.9L120.5 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-56.5 0-26-39.1C355.1 41.4 337.6 32 318.9 32L193.1 32zm-6.7 51.6c1.5-2.2 4-3.6 6.7-3.6l125.7 0c2.7 0 5.2 1.3 6.7 3.6l33.2 49.8c4.5 6.7 11.9 10.7 20 10.7l69.3 0c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l69.3 0c8 0 15.5-4 20-10.7l33.2-49.8zM256 384a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 272a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"]};var F4={prefix:"far",iconName:"comment",icon:[512,512,[128489,61669],"f075","M51.9 384.9C19.3 344.6 0 294.4 0 240 0 107.5 114.6 0 256 0S512 107.5 512 240 397.4 480 256 480c-36.5 0-71.2-7.2-102.6-20L37 509.9c-3.7 1.6-7.5 2.1-11.5 2.1-14.1 0-25.5-11.4-25.5-25.5 0-4.3 1.1-8.5 3.1-12.2l48.8-89.4zm37.3-30.2c12.2 15.1 14.1 36.1 4.8 53.2l-18 33.1 58.5-25.1c11.8-5.1 25.2-5.2 37.1-.3 25.7 10.5 54.2 16.4 84.3 16.4 117.8 0 208-88.8 208-192S373.8 48 256 48 48 136.8 48 240c0 42.8 15.1 82.4 41.2 114.7z"]};var T4={prefix:"far",iconName:"image",icon:[448,512,[],"f03e","M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm128 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm136 72c8.5 0 16.4 4.5 20.7 11.8l80 136c4.4 7.4 4.4 16.6 .1 24.1S352.6 384 344 384l-240 0c-8.9 0-17.2-5-21.3-12.9s-3.5-17.5 1.6-24.8l56-80c4.5-6.4 11.8-10.2 19.7-10.2s15.2 3.8 19.7 10.2l17.2 24.6 46.5-79c4.3-7.3 12.2-11.8 20.7-11.8z"]};var B4={prefix:"far",iconName:"comment-dots",icon:[512,512,[128172,62075,"commenting"],"f4ad","M0 240c0 54.4 19.3 104.6 51.9 144.9L3.1 474.3c-2 3.7-3.1 7.9-3.1 12.2 0 14.1 11.4 25.5 25.5 25.5 4 0 7.8-.6 11.5-2.1L153.4 460c31.4 12.9 66.1 20 102.6 20 141.4 0 256-107.5 256-240S397.4 0 256 0 0 107.5 0 240zM94 407.9c9.3-17.1 7.4-38.1-4.8-53.2-26.1-32.3-41.2-71.9-41.2-114.7 0-103.2 90.2-192 208-192s208 88.8 208 192-90.2 192-208 192c-30.2 0-58.7-5.9-84.3-16.4-11.9-4.9-25.3-4.8-37.1 .3L76 440.9 94 407.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]};var D4={prefix:"far",iconName:"copy",icon:[448,512,[],"f0c5","M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"]};var H4={prefix:"fas",iconName:"code",icon:[576,512,[],"f121","M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"]};var R4={prefix:"fas",iconName:"square-rss",icon:[448,512,["rss-square"],"f143","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM96 136c0-13.3 10.7-24 24-24 137 0 248 111 248 248 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24 83.9 0 152 68.1 152 152 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104-13.3 0-24-10.7-24-24zm0 120a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]};var q4={prefix:"fas",iconName:"bag-shopping",icon:[448,512,["shopping-bag"],"f290","M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]};var E4={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]};var U4={prefix:"fab",iconName:"flickr",icon:[448,512,[],"f16e","M400 32L48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48zM144.5 192a63.5 63.5 0 1 1 0 127 63.5 63.5 0 1 1 0-127zm159 0a63.5 63.5 0 1 1 0 127 63.5 63.5 0 1 1 0-127z"]};var G4={prefix:"fab",iconName:"mastodon",icon:[448,512,[],"f4f6","M433 179.1c0-97.2-63.7-125.7-63.7-125.7-62.5-28.7-228.6-28.4-290.5 0 0 0-63.7 28.5-63.7 125.7 0 115.7-6.6 259.4 105.6 289.1 40.5 10.7 75.3 13 103.3 11.4 50.8-2.8 79.3-18.1 79.3-18.1l-1.7-36.9s-36.3 11.4-77.1 10.1c-40.4-1.4-83-4.4-89.6-54-.6-4.6-.9-9.3-.9-13.9 85.6 20.9 158.7 9.1 178.7 6.7 56.1-6.7 105-41.3 111.2-72.9 9.8-49.8 9-121.5 9-121.5zM357.9 304.3l-46.6 0 0-114.2c0-49.7-64-51.6-64 6.9l0 62.5-46.3 0 0-62.5c0-58.5-64-56.6-64-6.9l0 114.2-46.7 0c0-122.1-5.2-147.9 18.4-175 25.9-28.9 79.8-30.8 103.8 6.1l11.6 19.5 11.6-19.5c24.1-37.1 78.1-34.8 103.8-6.1 23.7 27.3 18.4 53 18.4 175l0 0z"]};var W4={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};var I4={prefix:"fab",iconName:"500px",icon:[384,512,[],"f26e","M71.8 344.3c-6.5-14.2-6.9-18.3 7.4-23.1 25.6-8 8 9.2 43.2 49.2l.3 0 0-93.9c1.2-50.2 44-92.2 97.7-92.2 53.9 0 97.7 43.5 97.7 96.8 0 63.4-60.8 113.2-128.5 93.3-10.5-4.2-2.1-31.7 8.5-28.6 53 0 89.4-10.1 89.4-64.4 0-61-77.1-89.6-116.9-44.6-23.5 26.4-17.6 42.1-17.6 157.6 50.7 31 118.3 22 160.4-20.1 24.8-24.8 38.5-58 38.5-93 0-35.2-13.8-68.2-38.8-93.3-24.8-24.8-57.8-38.5-93.3-38.5S151 163.3 126.3 188c-.3 .3-16 16.5-21.2 23.9l-.5 .6c-3.3 4.7-6.3 9.1-20.1 6.1-6.9-1.7-14.3-5.8-14.3-11.8L70.2 20c0-5 3.9-10.5 10.5-10.5L322 9.5c8.3 0 8.3 11.6 8.3 15.1 0 3.9 0 15.1-8.3 15.1l-223.2 0 0 132.9 .3 0c104.2-109.8 282.8-36 282.8 108.9 0 178.1-244.8 220.3-310.1 62.8zM135.1 83.5c-.5 4.2 4.6 24.5 14.6 20.6 124.8-47.5 202.8 40.4 209.4 40.4 4.8 0 22.8-15.3 14.3-22.8-93.2-89-234.5-57-238.3-38.2zM361.5 414.7c-110 109.9-299 60.8-332-104.2 0-12.2-30.4-7.4-28.9 3.3 24 173.4 246 256.9 381.6 121.3 6.9-7.8-12.6-28.4-20.7-20.4zM182.1 306.6c0 4 4.3 7.3 5.5 8.5 3 3 6.1 4.4 8.5 4.4 3.8 0 2.6 .2 22.3-19.5 19.6 19.3 19.1 19.5 22.3 19.5 5.4 0 18.5-10.4 10.7-18.2l-17.3-17.3 18.2-18.2c6.3-6.8-10.1-21.8-16.2-15.7L218.2 268c-18.6-18.8-18.4-19.5-21.5-19.5-5 0-18 11.7-12.4 17.3L202.5 284c-18.1 17.9-20.4 19.2-20.4 22.6z"]};var O4={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]};y4.add(P4,T4,A4,D4,B4,F4,R4,H4,q4,G4,W4,I4,U4,E4,O4);w4.i2svg();})();
/*! Bundled license information:

@fortawesome/fontawesome-svg-core/index.mjs:
@fortawesome/free-regular-svg-icons/index.mjs:
@fortawesome/free-solid-svg-icons/index.mjs:
@fortawesome/free-brands-svg-icons/index.mjs:
  (*!
   * Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   * Copyright 2026 Fonticons, Inc.
   *)
*/
