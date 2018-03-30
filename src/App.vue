<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
     -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
      </router-view>
    </keep-alive>
    <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
    <div class="list">
      <input type="text" name="" v-model="msg" style="display:block;margin:50px auto;">
      <img v-lazy="src" v-for="src in list"  style="display:block;margin:0 auto;" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      imgUrl: '/static/img.JPEG',
      imgUr2: '/static/error-picture-128.png',
      list: [
        'http://sgjs.4006996669.com/doc/example/carousel/1.jpg',
        'http://sgjs.4006996669.com/doc/example/carousel/2.jpg',
        'http://sgjs.4006996669.com/doc/example/carousel/3.jpg',
        'http://sgjs.4006996669.com/doc/example/carousel/4.jpg',
        'http://sgjs.4006996669.com/doc/example/carousel/5.jpg',
        'http://sgjs.4006996669.com/doc/example/carousel/6.jpg',
        'http://sgjs.4006996669.com/doc/example/carousel/7.jpg',
        'http://sgjs.4006996669.com/doc/example/carousel/8.jpg',
        'http://sgjs.4006996669.com/doc/example/carousel/9.jpg',
        'http://sgjs.4006996669.com/doc/example/carousel/10.jpg',
        'http://sgjs.4006996669.com/doc/example/carousel/11.jpg'
      ],
      msg: ''
    };
  },
  mounted() {
    setTimeout(() => {
      // this.imgUrl = this.imgUr2;
    }, 3000)
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
</style>
