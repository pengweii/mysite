(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{104:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),b=r,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||i;return t?o.a.createElement(d,a(a({ref:n},p),{},{components:t})):o.a.createElement(d,a({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=b;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var p=2;p<i;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),i=(t(0),t(104)),c={id:"vue_cli",title:"vue_cli"},a={unversionedId:"vue_cli",id:"vue_cli",isDocsHomePage:!1,title:"vue_cli",description:"\u5916\u90e8\u53ea\u80fd\u8bbf\u95eestatic\u6587\u4ef6\u5939\u4e0b\u7684\u5185\u5bb9",source:"@site/docs/vue_cli.md",slug:"/vue_cli",permalink:"/docs/vue_cli",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/vue_cli.md",version:"current",sidebar:"someSidebar",previous:{title:"\u88c5\u673a\u914d\u7f6e",permalink:"/docs/\u88c5\u673a\u914d\u7f6e"},next:{title:"Powered by MDX",permalink:"/docs/mdx"}},s=[{value:"\u4f20\u5217\u8868\u7c7b\u578b\u7684\u95ee\u9898",id:"\u4f20\u5217\u8868\u7c7b\u578b\u7684\u95ee\u9898",children:[]}],p={toc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u5916\u90e8\u53ea\u80fd\u8bbf\u95eestatic\u6587\u4ef6\u5939\u4e0b\u7684\u5185\u5bb9"),Object(i.b)("p",null,"\u6bd4\u5982\u53ef\u4ee5\u8bbf\u95ee\uff1a\nhttp://localhost:8080/static/mock/index.json"),Object(i.b)("p",null,"\u4e0d\u80fd\u8bbf\u95ee\uff1a\nhttp://localhost:8080/src/main.js"),Object(i.b)("p",null,"\u4f1a\u88ab\u91cd\u5b9a\u5411\u5230\u9996\u9875"),Object(i.b)("p",null,"\u90a3\u4e48\u8981\u8bbf\u95ee"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"{18-29}","{18-29}":!0},"<script>\n\nimport HomeHeader from './components/Header'\nimport HomeSwiper from './components/Swiper'\nimport HomeIcons from './components/Icons'\nimport HomeRecommend from './components/Recommend'\nimport HomeWeekend from './components/Weekend'\nimport axios from 'axios'\nexport default {\n  name: 'Home',\n  components: {\n    HomeHeader,\n    HomeSwiper,\n    HomeIcons,\n    HomeRecommend,\n    HomeWeekend\n  },\n  methods: {\n    getHomeInfo () {\n      axios.get('/api/index.json')\n        .then(this.getHomeInfoSucc)\n    },\n    getHomeInfoSucc (res) {\n      console.log(res)\n    }\n  },\n  mounted () {\n    this.getHomeInfo()\n  }\n}\n<\/script>\n")),Object(i.b)("p",null,"\u7136\u540e\u5728config > index.js > module.exports > dev "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"{4-11}","{4-11}":!0},"// Paths\nassetsSubDirectory: 'static',\nassetsPublicPath: '/',\nproxyTable: {\n  '/api': {\n    target: 'http://localhost:8080',\n    pathRewrite: {\n      '^/api': '/static/mock'\n    }\n  }\n},\n")),Object(i.b)("p",null,"\u8fd9\u6837\u5728\u65b9\u6cd5\u91cc\u5199\u7684\u662f/api\uff0c\u8bbf\u95ee\u7684\u5374\u662f/static/mock"),Object(i.b)("h2",{id:"\u4f20\u5217\u8868\u7c7b\u578b\u7684\u95ee\u9898"},"\u4f20\u5217\u8868\u7c7b\u578b\u7684\u95ee\u9898"),Object(i.b)("p",null,"\u56fe\u7247\u9ed8\u8ba4\u663e\u793a\u7684\u662f\u6700\u540e\u4e00\u5f20\uff0c\u800c\u4e0d\u662f\u7b2c\u4e00\u7ae0\u3002\u8fd9\u662f\u56e0\u4e3aswiperList\u662f\u7531\u7a7a\u6570\u7ec4\u521b\u5efa\u7684\uff0c\u6240\u4ee5\u53ef\u4ee5\u52a0\u4e2a\u5224\u65ad\uff0c\u53ea\u6709\u5f53\u6570\u636e\u4f20\u8fc7\u6765\u7684\u65f6\u5019\u624d\u521b\u5efasweiperList"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"{3}","{3}":!0},'<template>\n  <div class="wrapper">\n    <swiper :options="swiperOption" v-if="list.length"> ### \u52a0v-if\n\n      <swiper-slide v-for="item of list" :key="item.id">\n        <img class="swiper-img" :src="item.imgUrl"/>\n      </swiper-slide>\n\n      <div class="swiper-pagination"  slot="pagination"></div>\n    </swiper>\n  </div>\n</template>\n')),Object(i.b)("p",null,"\u8fd9\u6837\u5199\u4e0d\u592a\u4f18\u96c5\uff0c\u5e94\u5c3d\u91cf\u907f\u514d\u903b\u8f91\u6027\u4ee3\u7801\uff0c\u53ef\u4ee5\u589e\u52a0\u4e00\u4e2a\u8ba1\u7b97\u5c5e\u6027\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"computed: {\n    showSwiper () {\n      return this.list.length\n    }\n  }\n")),Object(i.b)("p",null,"\u8fd9\u6837swiper\u91cc\u9762\u5c31\u6539\u6210"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'<swiper :options="swiperOption" v-if="showSwiper"> ### list.length -> showSwiper\n')))}l.isMDXComponent=!0}}]);