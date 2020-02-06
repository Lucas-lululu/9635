<template>
  <div class="pwd">
    <div class="header">
      <h1>
        <i class="el-icon-arrow-left" @click="_return_"></i>
        忘记密码
      </h1>
    </div>
    <div class="detail-content">
      <ul>
        <li>
          <p>手机号</p>
          <input v-model="phoneModel" type="text" placeholder="请输入手机号" />
          <a @click="_sendCode_">发送验证码</a>
        </li>
        <li>
          <p>验证码</p>
          <input v-model="codeModel" style="width: 72%" type="text" placeholder="请输入验证码" />
        </li>
        <li style="position: relative;">
          <p>新密码</p>
          <input v-model='pwdModel' style="width: 72%" type="text" placeholder="请输入6~14位登录密码" />
          <span class="eye">
            <img src="@/assets/img/close.png" alt />
          </span>
        </li>
      </ul>
      <a class="confirm" @click="_resetLogin_">提交</a>
    </div>
  </div>
</template>
<script>
import { Login as API } from '@/assets/api/api'
export default {
  data() {
    return {
      phoneModel: '',
      codeModel: '',
      pwdModel: ''
    };
  },
  methods: {
    _resetLogin_() {
      let data = {
        "phoneNumber": this.phoneModel,
        "code": this.codeModel,
        "newPassword": this.pwdModel
      }
      this.$api.post(API.resetLogin, data).then(res => {
        console.log(res)
      })
    },
    _sendCode_() {
      let data = {
        phoneNumber: this.phoneModel
      }
      this.$api.post(API.sendCode, data).then(res => {
        if (res.code == 0){
          this.inputyz();
        }
      });
    },
    _return_() {
      console.log(123);
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.pwd {
  background: #fff;
  .header {
    display: block;
    width: 100%;
    height: 64px;
    background: rgba(219, 70, 55, 1);
    h1 {
      text-align: center;
      font-size: 18px;
      color: rgba(255, 255, 255, 1);
      line-height: 64px;
      i {
        font-size: 21px;
        float: left;
        padding-top: 21px;
        padding-left: 10px;
      }
    }
  }
  .detail-content {
    ul {
      display: block;
      padding: 0px 12px;
      padding-top: 15px;
      li {
        font-size: 15px;
        color: #333333;
        border-bottom: 1px solid #f0f0f0;
        line-height: 46px;
        padding-left: 12px;
        height: 46px;
        p {
          width: 80.6px;
          float: left;
          font-size: 15px;
          text-align: left;
        }
        input {
          // width: 3.79rem;
          color: #999999;
          font-size: 15px;
          line-height: 21px;
          border: 0;
          outline: none;
          background-color: rgba(0, 0, 0, 0);
        }
        a {
          font-size: 12px;
          color: rgba(51, 51, 51, 1);
          float: right;
          padding-right: 15px;
          text-decoration: none;
        }
        .eye {
          position: absolute;
          display: inline-block;
          width: 16px;
          height: 16px;
          right: 10%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .confirm {
      display: block;
      margin: 30px 10px;
      margin-bottom: 15px;
      width: 94%;
      height: 36px;
      text-align: center;
      line-height: 36px;
      font-size: 18px;
      color: #ffffff;
      background: rgba(219, 70, 55, 1);
      border-radius: 5px;
      border: 2px solid;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>