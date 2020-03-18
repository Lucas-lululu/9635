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
        <!-- <img src="https://www.9635.com.cn/file/word.png" alt /> -->
        易学商学院
      </p>
    </div>
    <div class="login_content">
      <ul>
        <li>
          <p>账 号</p>
          <input type="text" placeholder="请输入账号" v-model="webModel" />
        </li>
        <li>
          <p>密 码</p>
          <input :type="pwdType" v-model="webPwd" style="width: 60%" placeholder="请输入密码" />
          <span class="eye" @click="_changePWD_">
            <img src="@/assets/img/close.png" alt />
          </span>
        </li>
      </ul>
      <a class="confirm" @click="_pwd_login_">登录</a>
      <p class="sign">
        <span @click="_go_pwd_">忘记密码？</span>
        <span @click="_go_phone_">验证码登录</span>
      </p>
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
import { Login as API} from '@/assets/api/api'
export default {
  data() {
    return {
      webModel: '',
      webPwd: '',
      pwdType: 'password'
    };
  },
  methods: {
    _go_pwd_() {
      this.$router.push("/web/login/forget_pwd");
    },
    _go_phone_() {
      this.$router.push("/web/login/phone_login");
    },
    _changePWD_() {
      if (this.pwdType === 'password') {
        this.pwdType = 'text'
      } else {
        this.pwdType = 'password'
      }
    },
    _pwd_login_() {
      if (this.webPwd && this.webModel) {
        let data = {
          mobile: this.webModel,
          phoneNumber: this.webPwd
        }
        this.$api.post(API.login, data).then(res => {
          if (res.code === 0) {
            this.$cookie.set('token', res.data.token)
            this.$layer.msg('登录成功')
            this.$router.push('/web/mine')
          }
        })
      }
      
    },
    _return_() {
      this.$router.go(-1);
    }
  },
  created() {}
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
      font-size: 19px;
      font-weight: bold;
      color: #fff;
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
          width: 40.6px;
          float: left;
          text-align: left;
          font-size: 15px;
        }
        input {
          width: 64%;
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
        .eye {
          display: inline-block;
          width: 16px;
          height: 16px;
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
    .sign {
      font-size: 14px;
      color: rgba(255, 126, 0, 1);
      line-height: 16.5px;
      text-align: center;
      padding: 0 25px;
      :first-child {
        float: left;
      }
      :last-child {
        float: right;
      }
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