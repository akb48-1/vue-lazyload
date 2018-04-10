<template>
  <header id="header">
      <el-row>
        <el-col class="logo" :span="4">logo</el-col>
        <el-col class="nav" :span="20">
            <div :class="{active: curIndex === 0 }" @click="clickHandle(0)">page1</div>
            <div :class="{active: curIndex === 1 }" @click="clickHandle(1)">page2</div>
            <div :class="{active: curIndex === 2 }" @click="clickHandle(2)">page3</div>
            <div :class="{active: curIndex === 3 }" @click="clickHandle(3)">page4</div>
            <div :class="{active: curIndex === 4 }" @click="clickHandle(4)">page5</div>
        </el-col>
      </el-row>
  </header>
</template>
<script>
export default {
  props: {
    curIndex: Number,
  },
  methods: {
    clickHandle(index) {
      this.$emit('changeIndex', index);
    }
  }
}
</script>

<style>
    #header {line-height:32px;}
    .logo {background-color:cadetblue;}
    .nav {background-color:brown;}
    .nav div {color:#fff;float:left;padding:0 8px;margin-right: 1px;background-color:#ccc;}
    .nav div.active {color:#f00;}
</style>

