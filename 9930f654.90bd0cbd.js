(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return g}));var n=a(0),M=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,M=function(e,t){if(null==e)return{};var a,n,M={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(M[a]=e[a]);return M}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(M[a]=e[a])}return M}var u=M.a.createContext({}),c=function(e){var t=M.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},b=function(e){var t=c(e.components);return M.a.createElement(u.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return M.a.createElement(M.a.Fragment,{},t)}},N=M.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,j=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=c(a),N=n,g=b["".concat(j,".").concat(N)]||b[N]||o[N]||i;return a?M.a.createElement(g,r(r({ref:t},u),{},{components:a})):M.a.createElement(g,r({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,j=new Array(i);j[0]=N;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,j[1]=r;for(var u=2;u<i;u++)j[u]=a[u];return M.a.createElement.apply(null,j)}return M.a.createElement.apply(null,a)}N.displayName="MDXCreateElement"},114:function(e,t,a){"use strict";function n(e){var t,a,M="";if("string"==typeof e||"number"==typeof e)M+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(M&&(M+=" "),M+=a);else for(t in e)e[t]&&(M&&(M+=" "),M+=t);return M}t.a=function(){for(var e,t,a=0,M="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(M&&(M+=" "),M+=t);return M}},122:function(e,t,a){"use strict";var n=a(0),M=a(123);t.a=function(){var e=Object(n.useContext)(M.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},123:function(e,t,a){"use strict";var n=a(0),M=Object(n.createContext)(void 0);t.a=M},132:function(e,t,a){"use strict";var n=a(0),M=a.n(n),i=a(122),j=a(114),r=a(58),l=a.n(r);const u=37,c=39;t.a=function(e){const{lazy:t,block:a,defaultValue:r,values:b,groupId:o,className:N}=e,{tabGroupChoices:g,setTabGroupChoices:s}=Object(i.a)(),[L,O]=Object(n.useState)(r),d=n.Children.toArray(e.children);if(null!=o){const e=g[o];null!=e&&e!==L&&b.some((t=>t.value===e))&&O(e)}const m=e=>{O(e),null!=o&&s(o,e)},p=[];return M.a.createElement("div",null,M.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(j.a)("tabs",{"tabs--block":a},N)},b.map((({value:e,label:t})=>M.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":L===e,className:Object(j.a)("tabs__item",l.a.tabItem,{"tabs__item--active":L===e}),key:e,ref:e=>p.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case c:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(p,e.target,e)},onFocus:()=>m(e),onClick:()=>{m(e)}},t)))),t?Object(n.cloneElement)(d.filter((e=>e.props.value===L))[0],{className:"margin-vert--md"}):M.a.createElement("div",{className:"margin-vert--md"},d.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==L})))))}},133:function(e,t,a){"use strict";var n=a(0),M=a.n(n);t.a=function({children:e,hidden:t,className:a}){return M.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}},212:function(e,t,a){"use strict";a.r(t),t.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNOTkgNTJoODR2MzRIOTl6Ii8+PHBhdGggZD0iTTIzIDE2M2MtNy4zOTggMC0xMy44NDMtNC4wMjctMTcuMzAzLTEwQTE5Ljg4NiAxOS44ODYgMCAwIDAgMyAxNjNjMCAxMS4wNDYgOC45NTQgMjAgMjAgMjBoMjB2LTIwSDIzeiIgZmlsbD0iIzNFQ0M1RiIvPjxwYXRoIGQ9Ik0xMTIuOTggNTcuMzc2TDE4MyA1M1Y0M2MwLTExLjA0Ni04Ljk1NC0yMC0yMC0yMEg3M2wtMi41LTQuMzNjLTEuMTEyLTEuOTI1LTMuODg5LTEuOTI1LTUgMEw2MyAyM2wtMi41LTQuMzNjLTEuMTExLTEuOTI1LTMuODg5LTEuOTI1LTUgMEw1MyAyM2wtMi41LTQuMzNjLTEuMTExLTEuOTI1LTMuODg5LTEuOTI1LTUgMEw0MyAyM2MtLjAyMiAwLS4wNDIuMDAzLS4wNjUuMDAzbC00LjE0Mi00LjE0MWMtMS41Ny0xLjU3MS00LjI1Mi0uODUzLTQuODI4IDEuMjk0bC0xLjM2OSA1LjEwNC01LjE5Mi0xLjM5MmMtMi4xNDgtLjU3NS00LjExMSAxLjM4OS0zLjUzNSAzLjUzNmwxLjM5IDUuMTkzLTUuMTAyIDEuMzY3Yy0yLjE0OC41NzYtMi44NjcgMy4yNTktMS4yOTYgNC44M2w0LjE0MiA0LjE0MmMwIC4wMjEtLjAwMy4wNDItLjAwMy4wNjRsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgNTNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgNjNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgNzNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgODNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgOTNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgMTAzbC00LjMzIDIuNWMtMS45MjUgMS4xMTEtMS45MjUgMy44ODkgMCA1TDIzIDExM2wtNC4zMyAyLjVjLTEuOTI1IDEuMTExLTEuOTI1IDMuODg5IDAgNUwyMyAxMjNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgMTMzbC00LjMzIDIuNWMtMS45MjUgMS4xMTEtMS45MjUgMy44ODkgMCA1TDIzIDE0M2wtNC4zMyAyLjVjLTEuOTI1IDEuMTExLTEuOTI1IDMuODg5IDAgNUwyMyAxNTNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgMTYzYzAgMTEuMDQ2IDguOTU0IDIwIDIwIDIwaDEyMGMxMS4wNDYgMCAyMC04Ljk1NCAyMC0yMFY4M2wtNzAuMDItNC4zNzZBMTAuNjQ1IDEwLjY0NSAwIDAgMSAxMDMgNjhjMC01LjYyMSA0LjM3LTEwLjI3MyA5Ljk4LTEwLjYyNCIgZmlsbD0iIzNFQ0M1RiIvPjxwYXRoIGZpbGw9IiMzRUNDNUYiIGQ9Ik0xNDMgMTgzaDMwdi00MGgtMzB6Ii8+PHBhdGggZD0iTTE5MyAxNThjLS4yMTkgMC0uNDI4LjAzNy0uNjM5LjA2NC0uMDM4LS4xNS0uMDc0LS4zMDEtLjExNi0uNDUxQTUgNSAwIDAgMCAxOTAuMzIgMTQ4YTQuOTYgNC45NiAwIDAgMC0zLjAxNiAxLjAzNiAyNi41MzEgMjYuNTMxIDAgMCAwLS4zMzUtLjMzNiA0Ljk1NSA0Ljk1NSAwIDAgMCAxLjAxMS0yLjk4NyA1IDUgMCAwIDAtOS41OTktMS45NTljLS4xNDgtLjA0Mi0uMjk3LS4wNzctLjQ0NS0uMTE1LjAyNy0uMjExLjA2NC0uNDIuMDY0LS42MzlhNSA1IDAgMCAwLTUtNSA1IDUgMCAwIDAtNSA1YzAgLjIxOS4wMzcuNDI4LjA2NC42MzktLjE0OC4wMzgtLjI5Ny4wNzMtLjQ0NS4xMTVhNC45OTggNC45OTggMCAwIDAtOS41OTkgMS45NTljMCAxLjEyNS4zODQgMi4xNTEgMS4wMTEgMi45ODctMy43MTcgMy42MzItNi4wMzEgOC42OTMtNi4wMzEgMTQuMyAwIDExLjA0NiA4Ljk1NCAyMCAyMCAyMCA5LjMzOSAwIDE3LjE2LTYuNDEgMTkuMzYxLTE1LjA2NC4yMTEuMDI3LjQyLjA2NC42MzkuMDY0YTUgNSAwIDAgMCA1LTUgNSA1IDAgMCAwLTUtNSIgZmlsbD0iIzQ0RDg2MCIvPjxwYXRoIGZpbGw9IiMzRUNDNUYiIGQ9Ik0xNTMgMTIzaDMwdi0yMGgtMzB6Ii8+PHBhdGggZD0iTTE5MyAxMTUuNWEyLjUgMi41IDAgMSAwIDAtNWMtLjEwOSAwLS4yMTQuMDE5LS4zMTkuMDMyLS4wMi0uMDc1LS4wMzctLjE1LS4wNTgtLjIyNWEyLjUwMSAyLjUwMSAwIDAgMC0uOTYzLTQuODA3Yy0uNTY5IDAtMS4wODguMTk3LTEuNTA4LjUxOGE2LjY1MyA2LjY1MyAwIDAgMC0uMTY4LS4xNjhjLjMxNC0uNDE3LjUwNi0uOTMxLjUwNi0xLjQ5NGEyLjUgMi41IDAgMCAwLTQuOC0uOTc5QTkuOTg3IDkuOTg3IDAgMCAwIDE4MyAxMDNjLTUuNTIyIDAtMTAgNC40NzgtMTAgMTBzNC40NzggMTAgMTAgMTBjLjkzNCAwIDEuODMzLS4xMzggMi42OS0uMzc3YTIuNSAyLjUgMCAwIDAgNC44LS45NzljMC0uNTYzLS4xOTItMS4wNzctLjUwNi0xLjQ5NC4wNTctLjA1NS4xMTMtLjExMS4xNjgtLjE2OC40Mi4zMjEuOTM5LjUxOCAxLjUwOC41MThhMi41IDIuNSAwIDAgMCAuOTYzLTQuODA3Yy4wMjEtLjA3NC4wMzgtLjE1LjA1OC0uMjI1LjEwNS4wMTMuMjEuMDMyLjMxOS4wMzIiIGZpbGw9IiM0NEQ4NjAiLz48cGF0aCBkPSJNNjMgNTUuNWEyLjUgMi41IDAgMCAxLTIuNS0yLjVjMC00LjEzNi0zLjM2NC03LjUtNy41LTcuNXMtNy41IDMuMzY0LTcuNSA3LjVhMi41IDIuNSAwIDEgMS01IDBjMC02Ljg5MyA1LjYwNy0xMi41IDEyLjUtMTIuNVM2NS41IDQ2LjEwNyA2NS41IDUzYTIuNSAyLjUgMCAwIDEtMi41IDIuNSIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0xMDMgMTgzaDYwYzExLjA0NiAwIDIwLTguOTU0IDIwLTIwVjkzaC02MGMtMTEuMDQ2IDAtMjAgOC45NTQtMjAgMjB2NzB6IiBmaWxsPSIjRkZGRjUwIi8+PHBhdGggZD0iTTE2OC4wMiAxMjRoLTUwLjA0YTEgMSAwIDEgMSAwLTJoNTAuMDRhMSAxIDAgMSAxIDAgMm0wIDIwaC01MC4wNGExIDEgMCAxIDEgMC0yaDUwLjA0YTEgMSAwIDEgMSAwIDJtMCAyMGgtNTAuMDRhMSAxIDAgMSAxIDAtMmg1MC4wNGExIDEgMCAxIDEgMCAybTAtNDkuODE0aC01MC4wNGExIDEgMCAxIDEgMC0yaDUwLjA0YTEgMSAwIDEgMSAwIDJtMCAxOS44MTRoLTUwLjA0YTEgMSAwIDEgMSAwLTJoNTAuMDRhMSAxIDAgMSAxIDAgMm0wIDIwaC01MC4wNGExIDEgMCAxIDEgMC0yaDUwLjA0YTEgMSAwIDEgMSAwIDJNMTgzIDYxLjYxMWMtLjAxMiAwLS4wMjItLjAwNi0uMDM0LS4wMDUtMy4wOS4xMDUtNC41NTIgMy4xOTYtNS44NDIgNS45MjMtMS4zNDYgMi44NS0yLjM4NyA0LjcwMy00LjA5MyA0LjY0Ny0xLjg4OS0uMDY4LTIuOTY5LTIuMjAyLTQuMTEzLTQuNDYtMS4zMTQtMi41OTQtMi44MTQtNS41MzYtNS45NjMtNS40MjYtMy4wNDYuMTA0LTQuNTEzIDIuNzk0LTUuODA3IDUuMTY3LTEuMzc3IDIuNTI4LTIuMzE0IDQuMDY1LTQuMTIxIDMuOTk0LTEuOTI3LS4wNy0yLjk1MS0xLjgwNS00LjEzNi0zLjgxMy0xLjMyMS0yLjIzNi0yLjg0OC00Ljc1LTUuOTM2LTQuNjY0LTIuOTk0LjEwMy00LjQ2NSAyLjM4NS01Ljc2MyA0LjQtMS4zNzMgMi4xMy0yLjMzNSAzLjQyOC00LjE2NSAzLjM1MS0xLjk3My0uMDctMi45OTItMS41MS00LjE3MS0zLjE3Ny0xLjMyNC0xLjg3My0yLjgxNi0zLjk5My01Ljg5NS0zLjg5LTIuOTI4LjEtNC4zOTkgMS45Ny01LjY5NiAzLjYxOC0xLjIzMiAxLjU2NC0yLjE5NCAyLjgwMi00LjIyOSAyLjcyNGExIDEgMCAwIDAtLjA3MiAyYzMuMDE3LjEwMSA0LjU0NS0xLjggNS44NzItMy40ODcgMS4xNzctMS40OTYgMi4xOTMtMi43ODcgNC4xOTMtMi44NTUgMS45MjYtLjA4MiAyLjgyOSAxLjExNSA0LjE5NSAzLjA0NSAxLjI5NyAxLjgzNCAyLjc2OSAzLjkxNCA1LjczMSA0LjAyMSAzLjEwMy4xMDQgNC41OTYtMi4yMTUgNS45MTgtNC4yNjcgMS4xODItMS44MzQgMi4yMDItMy40MTcgNC4xNS0zLjQ4NCAxLjc5My0uMDY3IDIuNzY5IDEuMzUgNC4xNDUgMy42ODEgMS4yOTcgMi4xOTcgMi43NjYgNC42ODYgNS43ODcgNC43OTYgMy4xMjUuMTA4IDQuNjM0LTIuNjIgNS45NDktNS4wMzUgMS4xMzktMi4wODggMi4yMTQtNC4wNiA0LjExOS00LjEyNiAxLjc5My0uMDQyIDIuNzI4IDEuNTk1IDQuMTExIDQuMzMgMS4yOTIgMi41NTMgMi43NTcgNS40NDUgNS44MjUgNS41NTZsLjE2OS4wMDNjMy4wNjQgMCA0LjUxOC0zLjA3NSA1LjgwNS01Ljc5NCAxLjEzOS0yLjQxIDIuMjE3LTQuNjggNC4wNjctNC43NzN2LTJ6IiBmaWxsPSIjMDAwIi8+PHBhdGggZmlsbD0iIzNFQ0M1RiIgZD0iTTgzIDE4M2g0MHYtNDBIODN6Ii8+PHBhdGggZD0iTTE0MyAxNThjLS4yMTkgMC0uNDI4LjAzNy0uNjM5LjA2NC0uMDM4LS4xNS0uMDc0LS4zMDEtLjExNi0uNDUxQTUgNSAwIDAgMCAxNDAuMzIgMTQ4YTQuOTYgNC45NiAwIDAgMC0zLjAxNiAxLjAzNiAyNi41MzEgMjYuNTMxIDAgMCAwLS4zMzUtLjMzNiA0Ljk1NSA0Ljk1NSAwIDAgMCAxLjAxMS0yLjk4NyA1IDUgMCAwIDAtOS41OTktMS45NTljLS4xNDgtLjA0Mi0uMjk3LS4wNzctLjQ0NS0uMTE1LjAyNy0uMjExLjA2NC0uNDIuMDY0LS42MzlhNSA1IDAgMCAwLTUtNSA1IDUgMCAwIDAtNSA1YzAgLjIxOS4wMzcuNDI4LjA2NC42MzktLjE0OC4wMzgtLjI5Ny4wNzMtLjQ0NS4xMTVhNC45OTggNC45OTggMCAwIDAtOS41OTkgMS45NTljMCAxLjEyNS4zODQgMi4xNTEgMS4wMTEgMi45ODctMy43MTcgMy42MzItNi4wMzEgOC42OTMtNi4wMzEgMTQuMyAwIDExLjA0NiA4Ljk1NCAyMCAyMCAyMCA5LjMzOSAwIDE3LjE2LTYuNDEgMTkuMzYxLTE1LjA2NC4yMTEuMDI3LjQyLjA2NC42MzkuMDY0YTUgNSAwIDAgMCA1LTUgNSA1IDAgMCAwLTUtNSIgZmlsbD0iIzQ0RDg2MCIvPjxwYXRoIGZpbGw9IiMzRUNDNUYiIGQ9Ik04MyAxMjNoNDB2LTIwSDgzeiIvPjxwYXRoIGQ9Ik0xMzMgMTE1LjVhMi41IDIuNSAwIDEgMCAwLTVjLS4xMDkgMC0uMjE0LjAxOS0uMzE5LjAzMi0uMDItLjA3NS0uMDM3LS4xNS0uMDU4LS4yMjVhMi41MDEgMi41MDEgMCAwIDAtLjk2My00LjgwN2MtLjU2OSAwLTEuMDg4LjE5Ny0xLjUwOC41MThhNi42NTMgNi42NTMgMCAwIDAtLjE2OC0uMTY4Yy4zMTQtLjQxNy41MDYtLjkzMS41MDYtMS40OTRhMi41IDIuNSAwIDAgMC00LjgtLjk3OUE5Ljk4NyA5Ljk4NyAwIDAgMCAxMjMgMTAzYy01LjUyMiAwLTEwIDQuNDc4LTEwIDEwczQuNDc4IDEwIDEwIDEwYy45MzQgMCAxLjgzMy0uMTM4IDIuNjktLjM3N2EyLjUgMi41IDAgMCAwIDQuOC0uOTc5YzAtLjU2My0uMTkyLTEuMDc3LS41MDYtMS40OTQuMDU3LS4wNTUuMTEzLS4xMTEuMTY4LS4xNjguNDIuMzIxLjkzOS41MTggMS41MDguNTE4YTIuNSAyLjUgMCAwIDAgLjk2My00LjgwN2MuMDIxLS4wNzQuMDM4LS4xNS4wNTgtLjIyNS4xMDUuMDEzLjIxLjAzMi4zMTkuMDMyIiBmaWxsPSIjNDREODYwIi8+PHBhdGggZD0iTTE0MyA0MS43NWMtLjE2IDAtLjMzLS4wMi0uNDktLjA1YTIuNTIgMi41MiAwIDAgMS0uNDctLjE0Yy0uMTUtLjA2LS4yOS0uMTQtLjQzMS0uMjMtLjEzLS4wOS0uMjU5LS4yLS4zOC0uMzEtLjEwOS0uMTItLjIxOS0uMjQtLjMwOS0uMzhzLS4xNy0uMjgtLjIzMS0uNDNhMi42MTkgMi42MTkgMCAwIDEtLjE4OS0uOTZjMC0uMTYuMDItLjMzLjA1LS40OS4wMy0uMTYuMDgtLjMxLjEzOS0uNDcuMDYxLS4xNS4xNDEtLjI5LjIzMS0uNDMuMDktLjEzLjItLjI2LjMwOS0uMzguMTIxLS4xMS4yNS0uMjIuMzgtLjMxLjE0MS0uMDkuMjgxLS4xNy40MzEtLjIzLjE0OS0uMDYuMzEtLjExLjQ3LS4xNC4zMi0uMDcuNjUtLjA3Ljk4IDAgLjE1OS4wMy4zMi4wOC40Ny4xNC4xNDkuMDYuMjkuMTQuNDMuMjMuMTMuMDkuMjU5LjIuMzguMzEuMTEuMTIuMjIuMjUuMzEuMzguMDkuMTQuMTcuMjguMjMuNDMuMDYuMTYuMTEuMzEuMTQuNDcuMDI5LjE2LjA1LjMzLjA1LjQ5IDAgLjY2LS4yNzEgMS4zMS0uNzMgMS43Ny0uMTIxLjExLS4yNS4yMi0uMzguMzEtLjE0LjA5LS4yODEuMTctLjQzLjIzYTIuNTY1IDIuNTY1IDAgMCAxLS45Ni4xOW0yMC0xLjI1Yy0uNjYgMC0xLjMtLjI3LTEuNzcxLS43M2EzLjgwMiAzLjgwMiAwIDAgMS0uMzA5LS4zOGMtLjA5LS4xNC0uMTctLjI4LS4yMzEtLjQzYTIuNjE5IDIuNjE5IDAgMCAxLS4xODktLjk2YzAtLjY2LjI3LTEuMy43MjktMS43Ny4xMjEtLjExLjI1LS4yMi4zOC0uMzEuMTQxLS4wOS4yODEtLjE3LjQzMS0uMjMuMTQ5LS4wNi4zMS0uMTEuNDctLjE0LjMyLS4wNy42Ni0uMDcuOTggMCAuMTU5LjAzLjMyLjA4LjQ3LjE0LjE0OS4wNi4yOS4xNC40My4yMy4xMy4wOS4yNTkuMi4zOC4zMS40NTkuNDcuNzMgMS4xMS43MyAxLjc3IDAgLjE2LS4wMjEuMzMtLjA1LjQ5LS4wMy4xNi0uMDguMzItLjE0LjQ3LS4wNy4xNS0uMTQuMjktLjIzLjQzLS4wOS4xMy0uMi4yNi0uMzEuMzgtLjEyMS4xMS0uMjUuMjItLjM4LjMxLS4xNC4wOS0uMjgxLjE3LS40My4yM2EyLjU2NSAyLjU2NSAwIDAgMS0uOTYuMTkiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+"},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return c})),a.d(t,"Highlight",(function(){return b})),a.d(t,"default",(function(){return N}));var n=a(3),M=a(7),i=(a(0),a(113)),j=a(132),r=a(133),l={id:"doc1",title:"Style Guide",sidebar_label:"Style Guide",slug:"/"},u={unversionedId:"guide/doc1",id:"guide/doc1",isDocsHomePage:!1,title:"Style Guide",description:"You can write content using GitHub-flavored Markdown syntax.",source:"@site/docs/guide/doc1.md",slug:"/",permalink:"/mysite/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guide/doc1.md",version:"current",sidebar_label:"Style Guide",sidebar:"docs",next:{title:"\u88c5\u673a\u914d\u7f6e",permalink:"/mysite/docs/guide/\u88c5\u673a\u914d\u7f6e"}},c=[{value:"Markdown Syntax",id:"markdown-syntax",children:[]},{value:"Headers",id:"headers",children:[]},{value:"H2 - Create the best documentation",id:"h2---create-the-best-documentation",children:[{value:"H3 - Create the best documentation",id:"h3---create-the-best-documentation",children:[]}]},{value:"Emphasis",id:"emphasis",children:[]},{value:"Lists",id:"lists",children:[]},{value:"Links",id:"links",children:[]},{value:"Images",id:"images",children:[]},{value:"Code",id:"code",children:[]},{value:"Tables",id:"tables",children:[]},{value:"Blockquotes",id:"blockquotes",children:[]},{value:"Inline HTML",id:"inline-html",children:[]},{value:"Line Breaks",id:"line-breaks",children:[]},{value:"Admonitions",id:"admonitions",children:[]},{value:"Tabs",id:"tabs",children:[]},{value:"Powered by MDX",id:"powered-by-mdx",children:[]}],b=function(e){var t=e.children,a=e.color;return Object(i.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},o={toc:c,Highlight:b};function N(e){var t=e.components,l=Object(M.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can write content using ",Object(i.b)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GitHub-flavored Markdown syntax"),"."),Object(i.b)("h2",{id:"markdown-syntax"},"Markdown Syntax"),Object(i.b)("p",null,"To serve as an example page when styling markdown based Docusaurus sites."),Object(i.b)("h2",{id:"headers"},"Headers"),Object(i.b)("h2",{id:"h2---create-the-best-documentation"},"H2 - Create the best documentation"),Object(i.b)("h3",{id:"h3---create-the-best-documentation"},"H3 - Create the best documentation"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"emphasis"},"Emphasis"),Object(i.b)("p",null,"Emphasis, aka italics, with ",Object(i.b)("em",{parentName:"p"},"asterisks")," or ",Object(i.b)("em",{parentName:"p"},"underscores"),"."),Object(i.b)("p",null,"Strong emphasis, aka bold, with ",Object(i.b)("strong",{parentName:"p"},"asterisks")," or ",Object(i.b)("strong",{parentName:"p"},"underscores"),"."),Object(i.b)("p",null,"Combined emphasis with ",Object(i.b)("strong",{parentName:"p"},"asterisks and ",Object(i.b)("em",{parentName:"strong"},"underscores")),"."),Object(i.b)("p",null,"Strikethrough uses two tildes. ",Object(i.b)("del",{parentName:"p"},"Scratch this.")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"lists"},"Lists"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"First ordered list item"),Object(i.b)("li",{parentName:"ol"},"Another item",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Unordered sub-list."))),Object(i.b)("li",{parentName:"ol"},"Actual numbers don't matter, just that it's a number",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Ordered sub-list"))),Object(i.b)("li",{parentName:"ol"},"And another item.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Unordered list can use asterisks")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Or minuses")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Or pluses")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"links"},"Links"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.google.com/"},"I'm an inline-style link")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.google.com/",title:"Google's Homepage"},"I'm an inline-style link with title")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.mozilla.org/"},"I'm a reference-style link")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"http://slashdot.org/"},"You can use numbers for reference-style link definitions")),Object(i.b)("p",null,"Or leave it empty and use the ",Object(i.b)("a",{parentName:"p",href:"http://www.reddit.com/"},"link text itself"),"."),Object(i.b)("p",null,"URLs and URLs in angle brackets will automatically get turned into links. ",Object(i.b)("a",{parentName:"p",href:"http://www.example.com/"},"http://www.example.com/")," or ",Object(i.b)("a",{parentName:"p",href:"http://www.example.com/"},"http://www.example.com/")," and sometimes example.com (but not on GitHub, for example)."),Object(i.b)("p",null,"Some text to show that the reference links can follow later."),Object(i.b)("p",null,"This is a link to ",Object(i.b)("a",{parentName:"p",href:"/mysite/docs/doc3"},"another document.")," This is a link to an ",Object(i.b)("a",{parentName:"p",href:"http://www.example.com/"},"external page.")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"images"},"Images"),Object(i.b)("p",null,"Here's our logo (hover to see the title text):"),Object(i.b)("p",null,"Inline-style: ",Object(i.b)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 1"})),Object(i.b)("p",null,"Reference-style: ",Object(i.b)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 2"})),Object(i.b)("p",null,"Images from any folder can be used by providing path to file. Path should be relative to markdown file."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:a(212).default})),Object(i.b)("hr",null),Object(i.b)("h2",{id:"code"},"Code"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'var s = "JavaScript syntax highlighting";\nalert(s);\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'s = "Python syntax highlighting"\nprint(s)\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"No language indicated, so no syntax highlighting.\nBut let's throw in a <b>tag</b>.\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"{2}","{2}":!0},'function highlightMe() {\n  console.log("This line can be highlighted!");\n}\n')),Object(i.b)("hr",null),Object(i.b)("h2",{id:"tables"},"Tables"),Object(i.b)("p",null,"Colons can be used to align columns."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Tables"),Object(i.b)("th",{parentName:"tr",align:"center"},"Are"),Object(i.b)("th",{parentName:"tr",align:"right"},"Cool"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"col 3 is"),Object(i.b)("td",{parentName:"tr",align:"center"},"right-aligned"),Object(i.b)("td",{parentName:"tr",align:"right"},"\\$1600")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"col 2 is"),Object(i.b)("td",{parentName:"tr",align:"center"},"centered"),Object(i.b)("td",{parentName:"tr",align:"right"},"\\$12")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"zebra stripes"),Object(i.b)("td",{parentName:"tr",align:"center"},"are neat"),Object(i.b)("td",{parentName:"tr",align:"right"},"\\$1")))),Object(i.b)("p",null,"There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Markdown"),Object(i.b)("th",{parentName:"tr",align:null},"Less"),Object(i.b)("th",{parentName:"tr",align:null},"Pretty"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"Still")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"renders")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"nicely"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"1"),Object(i.b)("td",{parentName:"tr",align:null},"2"),Object(i.b)("td",{parentName:"tr",align:null},"3")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"blockquotes"},"Blockquotes"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.")),Object(i.b)("p",null,"Quote break."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can ",Object(i.b)("em",{parentName:"p"},"put")," ",Object(i.b)("strong",{parentName:"p"},"Markdown")," into a blockquote.")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"inline-html"},"Inline HTML"),Object(i.b)("dl",null,Object(i.b)("dt",null,"Definition list"),Object(i.b)("dd",null,"Is something people use sometimes."),Object(i.b)("dt",null,"Markdown in HTML"),Object(i.b)("dd",null,"Does *not* work **very** well. Use HTML ",Object(i.b)("em",null,"tags"),".")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"line-breaks"},"Line Breaks"),Object(i.b)("p",null,"Here's a line for us to start with."),Object(i.b)("p",null,"This line is separated from the one above by two newlines, so it will be a ",Object(i.b)("em",{parentName:"p"},"separate paragraph"),"."),Object(i.b)("p",null,"This line is also a separate paragraph, but... This line is only separated by a single newline, so it's a separate line in the ",Object(i.b)("em",{parentName:"p"},"same paragraph"),"."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"admonitions"},"Admonitions"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},":::note\nThis is a note\n:::\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This is a note"))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This is a tip"))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This is important"))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This is a caution"))),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This is a warning"))),Object(i.b)("h2",{id:"tabs"},"Tabs"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"<Tabs\n  defaultValue=\"apple\"\n  values={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n  ]}>\n  <TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n")),Object(i.b)(j.a,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),Object(i.b)(r.a,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),Object(i.b)(r.a,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),Object(i.b)("h2",{id:"powered-by-mdx"},"Powered by MDX"),Object(i.b)("p",null,"You can write JSX and use React components within your Markdown thanks to ",Object(i.b)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => ( <span style={{\n      backgroundColor: color,\n      borderRadius: '2px',\n      color: '#fff',\n      padding: '0.2rem',\n    }}>{children}</span> );\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight> and <Highlight color=\"#1877F2\">Facebook blue</Highlight> are my favorite colors.\n\nI can write **Markdown** alongside my _JSX_!\n")),Object(i.b)(b,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",Object(i.b)(b,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",Object(i.b)("p",null,"I can write ",Object(i.b)("strong",{parentName:"p"},"Markdown")," alongside my ",Object(i.b)("em",{parentName:"p"},"JSX"),"!"))}N.isMDXComponent=!0}}]);