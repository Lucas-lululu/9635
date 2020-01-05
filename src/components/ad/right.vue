<template>
  <div class="right">
    <div class="box"></div>
    <div class="text"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.right {
  position: fixed;
  height: 72px;
  width: 144px;
  right: 3px;
  bottom: 3px;
  border-radius: 6px;
  overflow: hidden;
  .box {
    width: 100%;
    height: 100%;
    background: #e8a114
      url(//sgoutong.baidu.com/embed/1575453895/asset/embed/css/pc/icon/img/iconBack5.png)
      no-repeat;
  }
  .text {
    background: url(//sgoutong.baidu.com/embed/1575453895/asset/embed/css/pc/icon/img/iconWord2.png);
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}
</style>