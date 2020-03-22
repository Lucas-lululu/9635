<template>
  <div class="bottom_all">
    <div class="bottom-main">
      <div class="title"></div>
      <div class="content">
        <div class="left">
          <p>客服电话：021-50206163</p>
          <p>邮箱：service@integrity.com.cn</p>
          <p>公司地址：上海市浦东新区东方路1267弄8号（陆家嘴金融服务广场二期）10层</p>
          <p>备案/许可证编号：粤ICP备20014440号</p>
        </div>
        <div class="right">
          <div class="log">
            <img src="@/assets/img/code.png" alt />
            <p>让投资因学习而确定</p>
            <p>扫描二维码下载易学教育APP</p>
          </div>
          <div class="code">
            <img src="@/assets/img/code.png" alt />
            <p>微信扫一扫</p>
            <p>关注「易学教育」公众号</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.bottom_all {
  margin-top: 60px;
  height: 230px;
  width: 100%;
  background: #4a4a4a;
  .bottom-main {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    .title {
      font-size: 14px;
      font-weight: 600;
      text-align: left;
      color: #ffffff;
      line-height: 34px;
      border-bottom: 2px solid #3f3f40;
    }
    .content {
      display: flex;
      justify-content: space-between;
      padding: 30px 0;
      padding-bottom: 0;
      .left {
        p {
          font-weight: 600 !important;
          font-size: 14px;
          color: #ffffff;
          letter-spacing: 0;
          line-height: 28px;
          text-align: left;
          font-family: PingFangSC-Regular;
          font-weight: 400;
        }
      }
      .right {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        .log {
          margin-right: 45px;
        }
        img {
          width: 80px;
          height: 80px;
        }
        p {
          font-weight: 600;
          font-size: 14px;
          color: #ffffff;
          letter-spacing: 0;
          line-height: 28px;
          text-align: center;
          font-family: PingFangSC-Regular;
        }
      }
    }
  }
}
</style>