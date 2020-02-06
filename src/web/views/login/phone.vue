<template>
  <div class="login">
    <div class="header">
      <a class="a" @click="_return_">
        <span>
          <i class="el-icon-arrow-left"></i>
          返回
        </span>
      </a>
      <p class="img">
        <img src="https://www.9635.com.cn/file/log.png" alt />
      </p>
      <p class="word">
        <img src="https://www.9635.com.cn/file/word.png" alt />
      </p>
    </div>
    <div class="login_content">
      <ul>
        <li>
          <p>手机号</p>
          <input v-model="phone" type="text" placeholder="请输入手机号" />
          <a v-if="!backgroundspan" @click="_send_code_">{{hqyzm}}</a>
          <a v-else>{{hqyzm}}</a>
        </li>
        <li>
          <p>验证码</p>
          <input v-model="code" type="text" style="width: 64%" placeholder="请输入短信验证码" />
        </li>
      </ul>
      <a class="confirm" @click="_login_phone_">登录/注册</a>
      <p class="sign" @click="_go_login_">账号密码登录</p>
      <div class="bottom">
        <p class="introduce">
          <span>登录或注册即代表您同意易学教育的</span>
          <span class="agreement">《用户协议》</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import md5 from "js-md5";
import crypto from "@/assets/js/ctocode_aes.js";
let Base64 = require("js-base64").Base64;
import { Login as API } from "@/assets/api/api";
export default {
  data() {
    return {
      phone: "",
      code: "",
      hqyzm: '获取验证码',
      backgroundspan: false,
      situp: true,
    };
  },
  methods: {
    _send_code_() {
      let num = md5(this.phone);
      let data = {
        phoneNumber: this.phone
      };
      this.$api.post(API.sendCode, data).then(res => {
        if (res.code == 0){
          this.inputyz();
        }
      });
    },
    inputyz(){
      let timer = 60;
      let timeres = setInterval(() => {
        if(timer == 0){
          clearInterval(timeres);
          this.hqyzm = '获取验证码';
          this.backgroundspan = false;
        }else{
          this.hqyzm = timer + '秒后重试';
          this.backgroundspan = true;
          timer--;
        }
      },1000)
//
    },
    _login_phone_(){
      let data = {
        deviceType: 'h5',
        phoneNumber: this.phone,
        code: this.code
      };
      this.$api.post(API.loginWithPhone, data).then(res => {
        if (res.code == 0){
          this.$cookie.set('token',res.data.token);
          // this.$router.go(-1);
          this.$layer.msg('登录成功')
          this.$router.push('/web/mine')
        }
      });
    },
    _go_login_() {
      this.$router.push("/web/login/index");
    },
    _return_() {
      this.$router.push("/index");
      this.$emit("index", 1);
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  background: #fff;
  .header {
    display: block;
    width: 100%;
    height: 242px;
    background: url(https://www.9635.com.cn/file/bottom.png);
    background-size: 100% 100%;
    .a {
      position: absolute;
      color: #fff;
      font-size: 18px;
      top: 32px;
      left: 9px;
      text-decoration: none;
    }
    .img {
      width: 65px;
      height: 65px;
      display: block;
      margin: 0 auto;
      padding-top: 64px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .word {
      width: 97.5px;
      height: 22.5px;
      display: block;
      padding-top: 10px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .login_content {
    ul {
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
          width: 80.5px;
          float: left;
          font-size: 15px;
        }
        input {
          width: 134.6px;
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
          padding-right: 22.5px;
          text-decoration: none;
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
    .sign {
      font-size: 14px;
      color: rgba(255, 126, 0, 1);
      line-height: 16.5px;
      text-align: center;
    }
    .bottom {
      .introduce {
        text-align: center;
        padding-top: 82.5px;
        span {
          font-size: 12px;
          font-weight: 400;
          line-height: 14px;
        }
        :first-child {
          color: rgba(153, 153, 153, 1);
        }
        :last-child {
          color: #ff7e00;
        }
      }
    }
  }
}
</style>
