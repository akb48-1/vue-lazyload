<template>
  <section>
    <el-row v-for="(page, index) in pages" :key="index" v-if="index === curIndex">
        <el-col :span="5">
            <ul>
                <li v-for="(child, index) in page.childs" :key="index" :class="{current: index === page.current}" @click="page.current = index;addTabs(child)">
                    <router-link :to="{path: child.route}" >{{child.title}}</router-link>
                </li>
            </ul>
        </el-col>
        <el-col :span="19">
          <tabs :tabList="tabList" />
        </el-col>
    </el-row>
  </section>
</template>
<script>
export default {
  props: ["curIndex"],
  data() {
    return {
      pages: [
        {
          current: 0,
          childs: [
            {
              title: "page1 - child1",
              route: "/page1"
            },
            {
              title: "page1 - child2",
              route: "/page1/child2"
            },
            {
              title: "page1 - child3",
              route: "/page1/child3"
            },
            {
              title: "page1 - child4",
              route: "/page1/child4"
            }
          ]
        },
        {
          current: 0,
          childs: [
            {
              title: "page2 - child1",
              route: "/page2/child1"
            },
            {
              title: "page2 - child2",
              route: "/page2/child2"
            },
            {
              title: "page2 - child3",
              route: "/page2/child3"
            },
            {
              title: "page2 - child4",
              route: "/page2/child4"
            }
          ]
        },
        {
          current: 0,
          childs: [
            {
              title: "page3 - child1",
              route: "/page3/child1"
            },
            {
              title: "page3 - child2",
              route: "/page3/child2"
            },
            {
              title: "page3 - child3",
              route: "/page3/child3"
            },
            {
              title: "page3 - child4",
              route: "/page3/child4"
            }
          ]
        },
        {
          current: 0,
          childs: [
            {
              title: "page4 - child1",
              route: "/page4/child1"
            },
            {
              title: "page4 - child2",
              route: "/page4/child2"
            },
            {
              title: "page4 - child3",
              route: "/page4/child3"
            },
            {
              title: "page4 - child4",
              route: "/page4/child4"
            }
          ]
        },
        {
          current: 0,
          childs: [
            {
              title: "page5 - child1",
              route: "/page5/child1"
            },
            {
              title: "page5 - child2",
              route: "/page5/child2"
            },
            {
              title: "page5 - child3",
              route: "/page5/child3"
            },
            {
              title: "page5 - child4",
              route: "/page5/child4"
            }
          ]
        }
      ],
      tabList: []
    };
  },
  components: {
      "tabs": require('./tabs').default
  },
  created() {
    const tabList = sessionStorage.getItem('tabList');
    this.tabList = tabList ? JSON.parse(tabList) : [];
  },
  methods:{
    addTabs(child) { // 添加标签页
      const forkChild = this.tabList.find(({ route }) => {
        console.log(child.route, route)
        return child.route === route
      });

      console.log(forkChild);

      if (forkChild === undefined) {
        this.tabList.push(child);
      }
      
      /*
      */
     /*
      var tabsInfo = sessionStorage.getItem('tabsInfo') || '[]';
      const has = function (a, b) {
        return b.indexOf(JSON.stringify(a)) > -1? true : false;
      };

      if (has(child, tabsInfo)) return;
      tabsInfo = JSON.parse(tabsInfo);
      tabsInfo.push(child);
      tabsInfo = JSON.stringify(tabsInfo);
      sessionStorage.setItem('tabsInfo', tabsInfo);
      */
    }
  }
};
</script>
<style scoped>

ul li.current {
  background-color: coral;
}
ul li a {display:block;}
</style>


