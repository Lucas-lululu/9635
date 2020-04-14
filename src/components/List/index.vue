<template>
  <ul>
    <v-item v-for="item in list" :key="item.id" :item="item" />
  </ul>
</template>
<script>
import vItem from "@/components/Item";
export default {
  props: {
    list: {
      type: Array
    }
  },
  components: {
    vItem
  }
};
</script>
<style lang="less" scoped>
ul {
    border: 1px solid #EAEAEA;
    border-top: none;
  height: 600px;
   padding: 0 30px;
   padding-top: 22px;
  border-radius: 0 0 10px 10px;
  overflow: scroll;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>