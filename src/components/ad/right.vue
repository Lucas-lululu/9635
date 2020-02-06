<template>
  <div class="right">
    <img src="https://www.9635.com.cn/file/kefu.png" alt="">
    <!-- <div class="box"></div> -->
    <!-- <div class="text"></div> -->
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.right {
  position: fixed;
  height: 100px;
  width: 200px;
  right: 0px;
  bottom: 0px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  z-index: 10;
  > img {
    width: 100%;
    height: 100%;
  }
  // .box {
  //   width: 100%;
  //   height: 100%;
  //   // background: #e8a114
  //   //   url(//sgoutong.baidu.com/embed/1575453895/asset/embed/css/pc/icon/img/iconBack5.png)
  //   //   no-repeat;
  // }
  // .text {
  //   background: url();
  //   position: absolute;
  //   background-repeat: no-repeat;
  //   background-position: center;
  //   bottom: 0;
  //   right: 0;
  //   width: 100%;
  //   height: 100%;
  // }
}
</style>