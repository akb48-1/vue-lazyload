<template>
  <section style="border-left:1px solid;border-top:1px solid;">
      <div class="tabs">
          <div class="tab-item">
            <div class="home tab">首页</div>
            <div class="tab" v-if="tabList.length" v-for="tab in tabList" @click="tabHandle(tab)">
                {{tab.title}}
                <i class="closeBtn" @click.stop="closeTab">iii</i>
            </div>
          </div>
          <router-view></router-view>
      </div>
  </section>
</template>
<script>
export default {
  props: {
      tabList: Array
  },
  watch: {
      tabList(newVal) {
          console.log(newVal);
          sessionStorage.setItem('tabList', JSON.stringify(newVal))
      }
  },
  methods:{
      tabHandle(tab){
          console.log(tab.route)
          this.$router.push({path:tab.route})
          console.log('tabHandle');
      },
      closeTab(){
          console.log('closeTab');
      }
  },
  computed:{
      tabs() {
          return JSON.parse(sessionStorage.getItem('tabsInfo'));
      }
  },
  mounted(){
      window.addEventListener('storage', (event)=> {
          console.log(event);
      }, false)
      console.log(this.tabs);
  }
}
</script>
<style scoped>
    .tab-item  {overflow: hidden;}
    .tab-item .tab {float:left;padding:5px 10px;margin-right:3px;border:1px solid #ccc;line-height:24px;}
</style>

