---
id: vue_cli
title: vue_cli
---

外部只能访问 static 文件夹下的内容

比如可以访问：
http://localhost:8080/static/mock/index.json

不能访问：
http://localhost:8080/src/main.js

会被重定向到首页

那么要访问

```js {18-29}
<script>

import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
```

然后在 config > index.js > module.exports > dev

```js {4-11}
// Paths
assetsSubDirectory: 'static',
assetsPublicPath: '/',
proxyTable: {
  '/api': {
    target: 'http://localhost:8080',
    pathRewrite: {
      '^/api': '/static/mock'
    }
  }
},
```

这样在方法里写的是/api，访问的却是/static/mock

## 传列表类型的问题

图片默认显示的是最后一张，而不是第一章。这是因为 swiperList 是由空数组创建的，所以可以加个判断，只有当数据传过来的时候才创建 sweiperList

```js {3}
<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="list.length"> ### 加v-if

      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
```

这样写不太优雅，应尽量避免逻辑性代码，可以增加一个计算属性：

```
computed: {
    showSwiper () {
      return this.list.length
    }
  }
```

这样 swiper 里面就改成

```
<swiper :options="swiperOption" v-if="showSwiper"> ### list.length -> showSwiper
```

## 一像素边框

```css
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
```

## 滚动插件 better-scroll

使用 ref 获取 DOM。

```js
<div class="list" ref="wrapper">
  <div>... ...</div>
</div>
```

```js
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
```

## 搜索内容

用到双向绑定 v-model
