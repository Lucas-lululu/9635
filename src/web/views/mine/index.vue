<template>
  <div style="padding: 1px">
    <!-- 个人信息 -->
    <div class="mine-top">
      <p>
        <span class="mine-img">
          <img :src="img" alt />
        </span>
        <span class="name">{{name}}</span>
      </p>
    </div>
    <!-- 功能列表 -->
    <div class="mine-list">
      <ul>
        <li v-for="item in list" class="mine-list-item" @click="_go_(item)">
          <span class="mine-list-item-left">
            <i :class="`mintui ${item.icon}`"></i>
            {{item.name}}
          </span>
          <span class="mine-list-item-right">
            <i class="el-icon-arrow-right"></i>
          </span>
        </li>
      </ul>
    </div>
    <v-footer />
  </div>
</template>
<script>
import FooterMenu from "../../footer";
import { Login as API } from "@/assets/api/api";
export default {
  data() {
    return {
      img: "",
      name: "",
      list: [
        {
          id: 1,
          name: "我的关注",
          icon: "mintui-tianjiaguanzhu",
          to: "/mine/follow"
        },
        {
          id: 2,
          name: "我的收藏",
          icon: "mintui-shoucang2",
          to: "/mine/collection"
        },
        {
          id: 3,
          name: "联系客服",
          icon: "mintui-kefu",
          to: ""
        },
        {
          id: 4,
          name: "关于我们",
          icon: "mintui-nanren",
          to: "/mine/about"
        },
        {
          id: 5,
          name: "免责声明",
          icon: "mintui-shangcheng__shengming",
          to: "/mine/disclaimer"
        },
        {
          id: 6,
          name: "退出登录",
          icon: "mintui-tuichudenglu",
          to: 'out'
        }
      ]
    };
  },
  methods: {
    _go_login(){
      this.$router.push("/web/login/phone_login");
    },
    _go_(obj) {
      if (obj.to) {
        if (obj.to !== 'out') {
          this.$router.push(`/web${obj.to}`);
        } else {
          this.$confirm('是否确认退出?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            center: true
          }).then(() => {
            // this.$cookie.remove('token',[window.location.href])
            this.$cookie.set('token','')
            this.$layer.msg('退出成功')
            this.$router.push('/web/login/index')
          })
        }
      } else {
        window.location.href = `//p.qiao.baidu.com/cps/chat?siteId=12852949&userId=25872180`
      }
    },
    _getInfo_() {
      let data = {
        deviceType: "h5"
      };
      this._netGet(API.info, data).then(res => {
        console.log(res)
        if (res.code == 100005002){
          this._go_login();
          return;
        }
        this.name = res.data.nickName;
        this.img = res.data.avatarUrl||'http://oss.astevencui.com/upload/20200130/ee64698980bb4bcb825d99b18fad642d.png';
        this.$cookie.set('infoObj', JSON.stringify(res.data))
        this.$cookie.set('userId', res.data.userId)
      });
    }
  },
  components: {
    "v-footer": FooterMenu
  },
  created() {
    if (this.$cookie.get("token")) {
      this._getInfo_();
      } else {
      this.$router.push("/web/login/phone_login");
    }
  }
};
</script>
<style lang="less" scoped>
.mine-top {
  width: 100%;
  height: 145px;
  background: url(https://www.9635.com.cn/file/bitmap@2x.png);
  > p {
    padding: 64px 12px 0 22px;
    .mine-img {
      width: 65px;
      height: 65px;
      float: left;
      display: inline-block;
      > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.78);
      }
    }
    .name {
      float: left;
      width: 220px;
      height: 33px;
      padding: 12px 0 0 15px;
      font-family: PingFangSC-Semibold;
      font-size: 20px;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      line-height: 33px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.mine-list {
  overflow: auto;
  width: 339px;
  background: rgba(255, 255, 255, 1);
  border-radius: 3px;
  margin: 18px 15px;
  height: 438px;
  ul {
    list-style: none;
    padding: 0 22px 0 16px;
    .mine-list-item {
      padding: 15px 0;
      border-bottom: 0.5px solid rgb(245, 245, 245);
      height: 20px;
      .mine-list-item-left {
        float: left;
        height: 20px;
        font-size: 14px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 20px;
      }
      .mine-list-item-right {
        float: right;
        margin-right: 6.5px;
        font-size: 18px;
        color: #999999;
      }
    }
  }
}
</style>
<style lang="less">
.el-message-box__wrapper {
  .el-message-box {
    width: 280PX;
    height: 132PX;
  }
  .el-message-box--center {
    padding: 0;
    .el-message-box__header {
      padding-top: 23PX;
      .el-message-box__headerbtn {
        display: none;
      }
    }
  }
  .el-message-box__btns {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    .el-button--primary {
      background: none;
    }
    button {
      width: 50%;
      border-radius: 0;
      border: none;
      > span {
        color: #006CDA;
        font-size: 18px;
        font-weight: 400;
      }
      &:first-child {
        border-top: 1px solid #e5e5e5;
        border-right: 1px solid #e5e5e5;
      }
      // padding: 0;
      &:nth-child(2) {
        border-top: 1px solid #e5e5e5;
        margin-left: 0 !important;
      }
    }
  }
}
</style>
