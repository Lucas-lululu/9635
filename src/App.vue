<template>
  <div id="app">
    <router-view />
    <!-- <v-footer-menu v-if="show" @aId="_show_" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  font-family: PingFangSC-Regular, Microsoft Yahei, "微软雅黑", SimHei, "黑体";
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f8f8f8;
  width: 100%;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
}
</style>
