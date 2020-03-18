<template>
  <div class="right">
    <div class="box" v-if="show">
      <i class="el-icon-circle-close icon" @click="show = false"></i>
      <img src="https://www.9635.com.cn/file/kefu.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    }
  }
};
</script>
<style lang="less" scoped>
.right {
  position: fixed;
  height: 100px;
  width: 200px;
  right: 0px;
  bottom: 0px;
  border-radius: 6px;
  // overflow: hidden;
  cursor: pointer;
  z-index: 10;
  > .box {
    position: relative;
    &:hover {
      > .icon {
        opacity: 1;
      }
    }
    > .icon {
      position: absolute;
      top: -16px;
      right: 0;
      opacity: 0;
      color: #d1d1d1;
      transition: all .3s;
      // opacity: .3;
    }
    > img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>