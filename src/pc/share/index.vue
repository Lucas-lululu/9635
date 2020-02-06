<template>
  <div class="download-down-body">
    <div class="download-icon">
      <img src="https://www.9635.com.cn/file/pc_share_log.png" alt />
      <span>易学教育</span>
    </div>
    <div class="download-button">
      <ul>
        <li v-for="item in list">
          <span class="icon" :class="`mintui ${item.icon}`"></span>
          <span class="name">{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="download-text">
      <p>扫描二维码下载手机版</p>
      <p>或用手机浏览器输入这个网址下载：https://www.9635.com.cn/web/share/index</p>
    </div>
    <div class="download-line"></div>
    <div class="download-footer">
      <p>安卓版本：4.6.2 更新于2019-12-25 10:13:03</p>
      <p>IOS版本：4.6.2 更新于2019-12-02 09:56:05</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "iPhone免费下载",
          icon: "mintui-iconziti48"
        },
        {
          id: 2,
          name: "Android免费下载",
          icon: "mintui-anzhuo-copy"
        },
        {
          id: 3,
          name: "扫描二维码下载",
          icon: "mintui-erweima"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.download-down-body {
  width: 100%;
  height: 780px;
  background: url(https://www.9635.com.cn/file/pc_share.png) no-repeat center
    center fixed;
  background-size: 100% 100%;
  .download-icon {
    padding-top: 5.5%;
    text-align: center;
    img {
      width: 180px;
      height: 180px;
    }
    span {
      display: block;
      margin-top: 20px;
      font-size: 36px;
      font-family: PingFang-SC-Regular;
    }
  }
  .download-button {
    width: 1000px;
    height: 60px;
    margin: 40px auto;
    position: relative;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      li {
        padding: 13px 26px;
        border-radius: 2px;
        border: 2px solid rgba(219, 70, 55, 1);
        cursor: pointer;
        color: rgba(219, 70, 55, 1);
        .icon {
          font-size: 30px;
          text-align: center;
        }
        .name {
          font-size: 23px;
          margin-left: 16px;
          font-family: PingFang-SC-Regular;
        }
      }
    }
  }
  .download-text {
    font-size: 14px;
    color: #333333;
    text-align: center;
    font-weight: 500;
    font-family: PingFang-SC-Regular;
  }
  .download-line {
    width: 976px;
    height: 2px;
    margin: 30px auto;
    background: #f1a3a1;
  }
  .download-footer {
    font-size: 14px;
    color: #333333;
    text-align: center;
    font-family: PingFang-SC-Regular;
  }
}
</style>