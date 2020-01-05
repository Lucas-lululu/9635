<template>
  <div class="left left-fixed-box">
    <div class="box">
      <div class="head">
        <span>请您留言</span>
        <i class="el-icon-minus"></i>
      </div>
      <div class="body">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请在此输入留言内容，我们会尽快与您联系。（必填）"
          v-model="textarea"
        ></el-input>
        <div class="icon-box">
          <i class="el-icon-user-solid"></i>
          <el-input v-model="input" placeholder="姓名"></el-input>
        </div>
        <div class="icon-box">
          <i class="el-icon-phone"></i>
          <el-input v-model="input" placeholder="电话（必填）"></el-input>
        </div>
        <div class="icon-box">
          <i class="el-icon-s-comment"></i>
          <el-input v-model="input" placeholder="邮箱"></el-input>
        </div>
        <div class="icon-box">
          <i class="el-icon-caret-bottom"></i>
          <el-input v-model="input" placeholder="地址"></el-input>
        </div>
        <div class="icon-box code">
          <el-input v-model="input" placeholder="验证码"></el-input>
        </div>
        <div class="btn">发送</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textarea: "",
      input: ""
    };
  }
};
</script>
<style lang="less">
.left-fixed-box {
  .box {
    .body {
      .el-textarea {
        height: 81px;
        font-size: 12px;
        textarea {
          height: 100%;
          padding: 0;
          border-radius: 0;
        }
      }
      .icon-box {
        position: relative;
        > i {
          position: absolute;
          left: 10px;
          font-size: 14px;
          color: #a4a4a4;
          top: calc(50% + 3px);
          z-index: 1;
        }
        .el-input {
          height: 30px;
          font-size: 12px;
          input {
            border-radius: 0;
            width: 100%;
            height: 100%;
            padding: 0;
            padding-left: 35px;
            margin-top: 10px;
          }
        }
      }
      .code {
        width: 40%;
      }
      .btn {
        height: 35px;
        width: 90px;
        line-height: 35px;
        text-align: center;
        border-radius: 2px;
        font-size: 14px;
        margin-top: 15px;
        color: #fff;
        cursor: pointer;
        background-color: #f49c11;
      }
    }
  }
}
</style>
<style lang="less" scoped>
.left {
  position: fixed;
  width: 240px;
  border-radius: 6px;
  height: auto;
  bottom: 3px;
  left: 6px;
  .box {
    .head {
      background: #e8a114
        url(//sgoutong.baidu.com/embed/1575453895/asset/embed/css/pc/message/img/boardTop5.png)
        no-repeat;
      height: 35px;
      background-color: #00aef3;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      line-height: 35px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 15px;
      padding-right: 8px;
      > i {
        font-size: 17px;
        font-weight: bold;
        cursor: pointer;
      }
    }
    .body {
      padding: 10px;
      background-color: #ededed;
    }
  }
}
</style>