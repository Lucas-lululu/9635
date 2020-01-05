<template>
  <div class="border-bottom">
    <!-- <span class="name">{{data.user.nikeName}}</span> -->
  </div>
</template>
<script>
export default {
  props: ["data"]
};
</script>
<style lang="less" scoped>
.border-bottom {
  border: 1px solid #eee;
  position: relative;
  text-align: center;
  font-size: 0.64rem;
  color: #000;
  font-weight: 400;
  padding: 0px 0.133333rem;
  background: #fff;
  .name {
    text-align: center;
    font-size: 0.64rem;
    color: #000;
    font-weight: 400;
  }
}
</style>