<template>
  <div class="header">
    <a class="icon">
      <img src="@/assets/img/nav.png" alt />
      <!-- <img src="https://www.9635.com.cn/images/download/icon-hao.png" alt /> -->
    </a>
    <!-- <a class="text">
      <img src="https://www.9635.com.cn/images/download/hrhg_text.png" alt />
    </a> -->
    <!-- <a class="des">好好学习·天天向上</a> -->
    <a class="app">打开App</a>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 50px;
  background: #2c2c2c;
  overflow: hidden;
  a {
    display: block;
    text-decoration: none;
    float: left;
  }
  .icon {
    width: 178px;
    line-height: 76px;
    margin-left: 10px;
    img {
      width: 100%;
    }
  }
  .text {
    width: 82.5px;
    margin-left: 8px;
    line-height: 61px;
    img {
      width: 100%;
    }
  }
  .des {
    margin-left: 8px;
    line-height: 50px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
  }
  .app {
    width: 75px;
    height: 30px;
    margin-top: 10px;
    float: right;
    margin-right: 10px;
    background: #db4637;
    border-radius: 2px;
    color: #fff;
    line-height: 30px;
    font-size: 14px;
    text-align: center;
    font-weight: 600;
  }
}
</style>
</style>