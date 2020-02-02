<template>
  <div class="header">{{title}}</div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.header {
  text-align: center;
  border-bottom: 2px solid #eee;
  background: #fff;
  line-height: 40px;
  font-weight: 500;
  font-size: 19px;
}
</style>