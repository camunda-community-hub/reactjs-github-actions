(this["webpackJsonpreactjs-github-actions"]=this["webpackJsonpreactjs-github-actions"]||[]).push([[3],{12:function(e,t,n){!function(e){"use strict";var t,n,i,a,r=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},o=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},c=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},u=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},s=function(e,t,n){var i;return function(a){t.value>=0&&(a||n)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},f=-1,m=function(){return"hidden"===document.visibilityState?0:1/0},v=function(){c((function(e){var t=e.timeStamp;f=t}),!0)},d=function(){return f<0&&(f=m(),v(),u((function(){setTimeout((function(){f=m(),v()}),0)}))),{get firstHiddenTime(){return f}}},p=function(e,t){var n,i=d(),a=r("FCP"),c=function(e){"first-contentful-paint"===e.name&&(m&&m.disconnect(),e.startTime<i.firstHiddenTime&&(a.value=e.startTime,a.entries.push(e),n(!0)))},f=performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],m=f?null:o("paint",c);(f||m)&&(n=s(e,a,t),f&&c(f),u((function(i){a=r("FCP"),n=s(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,n(!0)}))}))})))},l=!1,h=-1,g={passive:!0,capture:!0},T=new Date,y=function(e,a){t||(t=a,n=e,i=new Date,L(removeEventListener),E())},E=function(){if(n>=0&&n<i-T){var e={entryType:"first-input",name:t.type,target:t.target,cancelable:t.cancelable,startTime:t.timeStamp,processingStart:t.timeStamp+n};a.forEach((function(t){t(e)})),a=[]}},S=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){y(e,t),a()},i=function(){a()},a=function(){removeEventListener("pointerup",n,g),removeEventListener("pointercancel",i,g)};addEventListener("pointerup",n,g),addEventListener("pointercancel",i,g)}(t,e):y(t,e)}},L=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,S,g)}))},w=new Set;e.getCLS=function(e,t){l||(p((function(e){h=e.value})),l=!0);var n,i=function(t){h>-1&&e(t)},a=r("CLS",0),f=0,m=[],v=function(e){if(!e.hadRecentInput){var t=m[0],i=m[m.length-1];f&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(f+=e.value,m.push(e)):(f=e.value,m=[e]),f>a.value&&(a.value=f,a.entries=m,n())}},d=o("layout-shift",v);d&&(n=s(i,a,t),c((function(){d.takeRecords().map(v),n(!0)})),u((function(){f=0,h=-1,a=r("CLS",0),n=s(i,a,t)})))},e.getFCP=p,e.getFID=function(e,i){var f,m=d(),v=r("FID"),p=function(e){e.startTime<m.firstHiddenTime&&(v.value=e.processingStart-e.startTime,v.entries.push(e),f(!0))},l=o("first-input",p);f=s(e,v,i),l&&c((function(){l.takeRecords().map(p),l.disconnect()}),!0),l&&u((function(){var o;v=r("FID"),f=s(e,v,i),a=[],n=-1,t=null,L(addEventListener),o=p,a.push(o),E()}))},e.getLCP=function(e,t){var n,i=d(),a=r("LCP"),f=function(e){var t=e.startTime;t<i.firstHiddenTime&&(a.value=t,a.entries.push(e)),n()},m=o("largest-contentful-paint",f);if(m){n=s(e,a,t);var v=function(){w.has(a.id)||(m.takeRecords().map(f),m.disconnect(),w.add(a.id),n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,v,{once:!0,capture:!0})})),c(v,!0),u((function(i){a=r("LCP"),n=s(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,w.add(a.id),n(!0)}))}))}))}},e.getTTFB=function(e){var t,n=r("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0)return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)},Object.defineProperty(e,"__esModule",{value:!0})}(t)}}]);
//# sourceMappingURL=3.6f66160f.chunk.js.map