(this["webpackJsonpreact-map-tracker"]=this["webpackJsonpreact-map-tracker"]||[]).push([[0],{19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(2),i=n.n(r),a=n(3),s=n.n(a),o=(n(19),n(7)),l=n.n(o),j=n(8),d=n(5),u=n(13),b=n(10),f=n(11),h=n.n(f),O=n(12),g=n.n(O),x=function(e){var t=e.type,n=(e.lat,e.lng,e.onClick);return Object(c.jsx)("div",{className:"location-marker",onClick:n,children:Object(c.jsx)(b.Icon,{icon:"fire"===t?h.a:g.a,className:"location-icon ".concat(t)})})},m=function(e){var t=e.info;return Object(c.jsxs)("div",{className:"location-info",children:[Object(c.jsx)("h2",{children:"Event Location Info"}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["ID: ",Object(c.jsx)("strong",{children:t.id})]}),Object(c.jsxs)("li",{children:["Name: ",Object(c.jsx)("strong",{children:t.title})]})]})]})},v=function(e){var t=e.eventData,n=e.center,i=e.zoom,a=Object(r.useState)(null),s=Object(d.a)(a,2),o=s[0],l=s[1],j=t.map((function(e){return 8===e.categories[0].id?Object(c.jsx)(x,{type:"fire",lat:e.geometries[0].coordinates[1],lng:e.geometries[0].coordinates[0],onClick:function(){return l({id:e.id,title:e.title})}}):10===e.categories[0].id?Object(c.jsx)(x,{type:"storm",lat:e.geometries[e.geometries.length-1].coordinates[1],lng:e.geometries[e.geometries.length-1].coordinates[0],onClick:function(){return l({id:e.id,title:e.title})}}):null}));return Object(c.jsxs)("div",{className:"map",children:[Object(c.jsx)(u.a,{bootstrapURLKeys:{key:"AIzaSyCMgGAY0MaBzjQ1ieByaPz5XC34g-X2Yqo"},defaultCenter:n,defaultZoom:i,children:j}),o&&Object(c.jsx)(m,{info:o})]})};v.defaultProps={center:{lat:40.0292,lng:-3.618},zoom:3};var p=v,k=n.p+"static/media/spinner.1a32f552.gif",y=function(){return Object(c.jsxs)("div",{className:"loader",children:[Object(c.jsx)("img",{src:k,alt:"Loading"}),Object(c.jsx)("h1",{children:"Fetching Data"})]})},C=function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsx)("h1",{children:"Events World Tracker (Powered by NASA)"})})};var N=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(!1),s=Object(d.a)(a,2),o=s[0],u=s[1];return Object(r.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c=n.events,i(c),u(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(C,{}),o?Object(c.jsx)(y,{}):Object(c.jsx)(p,{eventData:n})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),S()}},[[23,1,2]]]);
//# sourceMappingURL=main.1e629ee8.chunk.js.map