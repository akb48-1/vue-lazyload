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
    <p><img v-lazy="imgUrl" /></p>
    <p><img v-lazy="imgUrl" /></p>
    <p><img v-lazy="imgUrl" /></p>
    <p><img v-lazy="imgUrl" /></p>
    <p><img v-lazy="imgUrl" /></p>
    <p><img v-lazy="imgUrl" /></p>
    <p><img v-lazy="imgUrl" /></p>
    <p><img v-lazy="imgUrl" /></p>
    <p><img v-lazy="imgUrl" /></p>
    <p><img v-lazy="imgUrl" /></p>
    <p><img v-lazy="imgUrl" /></p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      imgUrl: '/static/img.JPEG',
      imgUr2: '/static/error-picture-128.png'
    };
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
