<template>
  <div id="pc" v-loading.fullscreen.lock="fullscreenLoading">
    <!-- pc-顶部横条 -->
    <div class="nav-top">
      <div>
        <span>经营证券期货业务许可证 统一社会信用代码（境外机构编号）：911102281029993028</span>
        <a class="shxxLoginPopUp">登录</a>
        <a class="shxxLoginPopUp">注册</a>
        <span class="cus_service">客服电话:021-50206163</span>
      </div>
    </div>
    <!-- pc-导航栏 -->
    <div class="web_header">
      <div class="nav-header">
        <div class="nav_log">
          <img src="@/assets/img/nav.png" alt />
          <!-- <img src="https://www.9635.com.cn/file/nav.png" alt /> -->
        </div>
        <div class="nav_list">
          <ul>
            <li v-for="item in nav_list" :key="item.id" @click="_class_change_(item)">
              <router-link :class="classId == item.id ? 'active' : ''" :to="item.to">{{item.name}}</router-link>
            </li>
          </ul>
          <span id="span">
            <el-input class="input_box" v-model="homeSelect" placeholder="老师\课程\咨询"></el-input>
            <el-button type="primary" icon="el-icon-search"></el-button>
          </span>
        </div>
      </div>
    </div>
    <!-- pc-index视图 -->
    <router-view @fullscreenLoading="_loding_" />
    <v-right />
    <!-- <v-left /> -->
    <v-footer v-if="show && !fullscreenLoading" />
  </div>
</template>
<script>
import Right from "@/components/ad/right";
// import Left from "@/components/ad/left";
import Footer from "./footer";
export default {
  data() {
    return {
      nav_list: [
        {
          id: 1,
          name: "首页",
          to: "/pc/index"
        },
        {
          id: 2,
          name: "老师",
          to: "/pc/teacher"
        },
        {
          id: 3,
          name: "资讯",
          to: "/pc/article"
        },
        {
          id: 4,
          name: "视频",
          to: "/pc/video"
        },
        {
          id: 5,
          name: "课程",
          to: "/pc/course"
        },
        {
          id: 6,
          name: "APP下载",
          to: "/pc/share"
        },
        {
          id: 7,
          name: "模拟训练营",
          to: "/pc/share"
        },
        {
          id: 8,
          name: "主升浪下载",
          to: "/pc/pc_download"
        }
      ],
      homeSelect: "",
      oneList: [],
      twoList: [],
      rank: [],
      news: [],
      show: true,
      classId: 1,
      fullscreenLoading: true
    };
  },
  methods: {
    _class_change_(obj) {
      this.classId = obj.id;
    },
    _loding_(v) {
      this.fullscreenLoading = v
    }
  },
  mounted() {
    if (
      this.$route.name === "pcshareindex" ||
      this.$route.name === "pcdownloadindex"
    ) {
      this.show = false;
    } else {
      this.show = true;
    }
  },
  created() {
    if (this.$route.name === "pcindex") {
      this.classId = 1;
    }
    if (this.$route.name === "pcteacherindex") {
      this.classId = 2;
    }
    if (this.$route.name === "pcarticleindex") {
      this.classId = 3;
    }
    if (this.$route.name === "pcvideoindex") {
      this.classId = 4;
    }
    if (this.$route.name === "pccourseindex") {
      this.classId = 5;
    }
    if (this.$route.name === "pcshareindex") {
      this.classId = 6;
    }
    if (this.$route.name === "pcdownloadindex") {
      this.classId = 8;
    }
  },
  components: {
    "v-footer": Footer,
    "v-right": Right,
    // "v-left": Left
  }
};
// prettier
</script>
<style lang="less">
#span {
  display: block;
  position: relative;
  // float: left;
  width: 200px;
  height: 30px;
  border: 1px solid var(--hrhg-theme-skin, #ff4350);
  border-radius: 4px;
  margin-top: 25px;
  margin-left: 29px;
  .el-input {
    font-size: 14px;
    width: 100%;
    height: 100%;
    > .el-input__inner {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      height: 100%;
      line-height: 30px;
      font-size: 14px;
      font-weight: 400;
      float: left;
      text-indent: 8px;
      padding: 0;
    }
  }
  .el-button {
    display: block;
    // float: right;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 0px 4px 4px 0;
    padding: 6px;
    width: 43px;
    height: 30px;
    background: var(--hrhg-theme-skin, #ff4350);
    text-align: center;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
  }
}
</style>
<style lang="less" scoped>
#pc {
  background: #f8f8f8;
}
.nav-top {
  display: block;
  width: 100%;
  height: 30px;
  background: #ff4350;
  line-height: 30px;
  > div {
    width: 1200px;
    margin: 0 auto;
    font-size: 12px;
    color: #ffffff;
    font-weight: 400;
    line-height: 30px;
    span {
      float: left;
      font-weight: bold;
    }
    a.shxxLoginPopUp {
      font-weight: bold;
      float: right;
      margin-left: 13px;
      text-decoration: none;
    }
    .cus_service {
      float: right;
      margin-left: 13px;
    }
  }
}
.web_header {
  background: #ffffff;
  width: 100%;
  height: 80px;
  .nav-header {
    display: block;
    clear: both;
    display: block;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    div.nav_log {
      display: block;
      width: 203px;
      padding-top: 20px;
      img {
        width: 100%;
      }
    }
    div.nav_list {
      display: block;
      display: flex;
      font-family: PingFangSC-Regular;
      ul {
        list-style: none;
        display: flex;
        li {
          float: left;
          padding: 29px 20px;
          position: relative;
          text-align: center;
          a {
            display: block;
            cursor: pointer;
            height: 22px;
            font-size: 16px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            line-height: 22px;
            text-decoration: none;
            &.active {
              color: #ff4350;
              &::after {
                content: "";
                width: 40px;
                height: 3px;
                background-color: #ff4350;
                display: block;
                position: absolute;
                top: 70px;
                left: calc(50% - 20px);
              }
            }
          }
        }
      }
    }
  }
}
</style>