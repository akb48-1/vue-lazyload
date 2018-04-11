<template>
  <div id="app">
    <ol></ol>
    <v-header @changeIndex="changeIndex" :curIndex="curIndex"/>
    <pages :curIndex="curIndex"/>
    {{name}}
    <button @click="changeName1({name: 'wangwu'})">替换名字</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
console.log(...mapActions({
    name: 'moduleA/name'
}), 3)

export default {
  name: "App",
  data() {
    return {
      curIndex: 0,
    };
  },
  computed: {
    ...mapState('moduleA', {
        name: state => state.name
    })
  },
  components: {
    "v-header": require('./components/header').default,
    "pages": require('./components/pages').default
  },
  methods:{
      changeIndex(index) {
          this.curIndex = index;
      },
      ...mapActions('moduleA', {
          'changeName1': 'changeName'
      })
  },
  mounted(){
      //console.log(this.$store.state.moduleA.name);
      console.log(this.name, this.changeName)
  }
};
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {margin:0;padding:0;}
</style>
