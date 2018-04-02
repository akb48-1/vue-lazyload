<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
     -->
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
      </router-view>
    </keep-alive> -->
    <button @click="show = !show">{{ show? '图片隐藏' : '图片显示' }}</button>
    <button @click="changeImg" class="changeImg">改变图片地址</button>
    <p>{{ isUpdata }}</p>
    <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    <ul class="list" v-if="show">
      <li  v-for="(item, index) in list" :key="index" style="border:1px solid #000;margin-bottom:15px;">
        <p>{{item.tit}}</p>
        <img v-lazy="item.src" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: true,
      isUpdata: false,
      imgUrl: '/static/img.JPEG',
      imgUr2: '/static/error-picture-128.png',
      list: [
        {
          src: 'http://sgjs.4006996669.com/doc/example/carousel/1.jpg',
          tit: '图片1'
          },
        {
          src: 'http://sgjs.4006996669.com/doc/example/carousel/2.jpg',
          tit: '图片2'
          },
        {
          src: 'http://sgjs.4006996669.com/doc/example/carousel/3.jpg',
          tit: '图片3'
          },
        {
          src: 'http://sgjs.4006996669.com/doc/example/carousel/4.jpg',
          tit: '图片4'
          },
        {
          src: 'http://sgjs.4006996669.com/doc/example/carousel/5.jpg',
          tit: '图片5'
          },
        {
          src: 'http://sgjs.4006996669.com/doc/example/carousel/6.jpg',
          tit: '图片6'
          },
        {
          src: 'http://sgjs.4006996669.com/doc/example/carousel/7.jpg',
          tit: '图片7'
          },
        {
          src: 'http://sgjs.4006996669.com/doc/example/carousel/8.jpg',
          tit: '图片8'
          },
        {
          src: 'http://sgjs.4006996669.com/doc/example/carousel/9.jpg',
          tit: '图片9'
          },
        {
          src: 'http://sgjs.4006996669.com/doc/example/carousel/10.jpg',
          tit: '图片10'
          },
        {
          src: 'http://sgjs.4006996669.com/doc/example/carousel/11.jpg',
          tit: '图片11'
          }
      ]
    };
  },
  methods: {
    changeImg() {
      this.list[10] = this.list[0];
      this.isUpdata = !this.isUpdata;
      this.isUpdata = !this.isUpdata;
    },
    removeImg() {

    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.changeImg {
  position: fixed;
  left:30px;
  top:30px;
}
.list li {
  list-style:none;
  padding-bottom:8px;
}
.list img {
  display: block;
  width:640px;
  height:426px;
  margin:0 auto;
}
</style>
