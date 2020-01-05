<template>
  <div class="home">
    <div class="border-bottom">
      <i class="el-icon-arrow-left" @click="_return_"></i>
      <span class="name">{{nikeName}}</span>
    </div>
    <div class="teacher-introduce">
      <div class="avatar">
        <img :src="avatar" alt />
      </div>
      <div class="teacher-data">
        <ul class="lists sa-clear">
          <li class="list">
            <span>{{fansCount}}</span>
            <span class="key">粉丝</span>
          </li>
          <li class="list">
            <span>{{fansCount}}</span>
            <span class="key">发表观点</span>
          </li>
          <li class="list">
            <span>{{fansCount}}</span>
            <span class="key">课程</span>
          </li>
        </ul>
        <a href class="btn">关注</a>
      </div>
      <p class="zhengshu">
        <span class="el-icon-date"></span>
        <span class="number">{{certificate}}</span>
      </p>
      <p class="info">
        <span class="el-icon-date"></span>
        <span>{{introduce}}</span>
      </p>
    </div>

    <!--  -->
    <div class="teacher-list">
      <div class="nav">
        <a
          href="javascript:;"
          class="a"
          v-for="item in navList"
          :key="item.id"
          :class="aId === item.id ? 'active' : ''"
          @click="_change_(item.id)"
        >{{item.name}}</a>
      </div>
      <div class="content">
        <div v-if="aId === 0" class="message">
          <ul>
            <li v-for="(item, index) in list" :key="index">
              <div class="avatar">
                <img :src="item.img" alt />
              </div>
              <ul class="list">
                <li>
                  <div class="user-info">
                    <p class="user-name">
                      {{item.name}}
                      <span>{{item.time | formatDate}}</span>
                    </p>
                  </div>
                </li>
                <li class="commit-li">
                  <div class="commit-box">{{item.content}}</div>
                </li>
              </ul>
            </li>
            <li></li>
          </ul>
          <div class="commit-input-box">
            <input type="text" placeholder="好想说点什么..." v-model="commitText" />
            <a @click="_click_(commitText)">发送</a>
          </div>
        </div>
        <div v-if="aId === 1" class="tabs">
          <ul class="lists">
            <li
              class="video"
              v-for="(item,index) in videoList"
              :key="index"
              @click="_go_video_(item.articleId,item.userId)"
            >
              <img class="img" :src="item.videoImage" alt />
              <div>
                <p>{{item.title}}</p>
                <p>
                  <span class="el-icon-view"></span>
                  <span style="margin-top: -3px">{{item.watchCount}}次播放</span>
                  <span style="margin-top: -3px">{{item.time | formatDate}}</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div v-if="aId === 2" class="tabs">
          <ul class="lists">
            <li
              class="article"
              v-for="(item,index) in informationList"
              :key="index"
              @click="_go_detail_(item.articleId)"
              :class="item.articleImg.length > 1 ? 'active' : ''"
            >
              <div class="author-info">
                <div class="avatar">
                  <img class="img" :src="item.user.avatarUrl" alt />
                </div>
                <div class="author">
                  <p class="name">{{item.user.nikeName}}</p>
                  <p class="time">{{item.time | formatDate}} {{item.watchCount}}人阅读</p>
                </div>
                <div class="title-info">
                  <div class="title">
                    <span
                      class="body"
                      :class="item.articleImg.length > 1 ? 'active' : ''"
                    >{{item.title}}</span>
                    <div class="cover" :class="item.articleImg.length > 1 ? 'active' : ''">
                      <img
                        class="img"
                        v-for="(i,index) in item.articleImg"
                        :key="index"
                        :src="item.articleImg[index]"
                        alt
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div v-if="aId === 3" class="tabs">
          <ul class="lists">
            <li class="course" v-for="(item,index) in coursesList" :key="index">
              <div class="img">
                <img :src="item.courseImage" alt />
              </div>
              <div class="content">
                <p class="title">{{item.courseName}}</p>
                <div class="time">
                  <p class="intorduce">{{item.introduce}}</p>
                  <span>{{item.updateTime | formatDate}} 开课</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Detail as API } from "@/assets/api/api";
// import io from '@/assets/js/socket.io.js'
import CHAT from "@/assets/api/client";
export default {
  name: "home",
  data() {
    return {
      data: [],
      navList: [
        { id: 0, name: "互动" },
        { id: 1, name: "视频" },
        { id: 2, name: "观点" },
        { id: 3, name: "课程" }
      ],
      aId: 0,
      nikeName: "",
      avatar: "",
      fansCount: "",
      certificate: "",
      introduce: "",
      videoList: [],
      informationList: [],
      coursesList: [],
      commitText: "",
      id: "",
      list: [],
      user: {
        nikeName: ""
      },
      websock: null,
      objlist: [],
      wsuri: "ws://192.168.2.40:3000/"
    };
  },
  methods: {
    initWebSocket() {
      //初始化weosocket
      this.websock = new WebSocket(this.wsuri);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
      this.websock.onopen = this.websocketonopen;
    },
    websocketonopen() {
      //连接建立之后执行send方法发送数据
      // this.websocketsend(JSON.stringify(this.actions));
      console.log("建立连接");
    },
    websocketonerror() {
      //连接建立失败重连
      this.initWebSocket();
    },
    websocketonmessage(e) {
      //数据接收
      const redata = JSON.parse(JSON.stringify(e.data));
      this.objlist = JSON.parse(redata);
      for (const key in this.objlist) {
        let obj = {
          name: "简谱的小瓶盖平易近人 ",
          img:
            "https://hrhg-images-test.oss-cn-hangzhou.aliyuncs.com/default_avatar_0.png",
          time: new Date().getTime() / 1000,
          content: this.objlist[key].data
        };
        this.list.push(obj);
      }
    },
    websocketsend(Data) {
      //数据发送
      console.log("发送的数据" + Data);
      this.websock.send(Data);
    },
    websocketclose(e) {
      //关闭
      console.log("断开连接---", e);
    },
    _click_(val) {
      let obj = {
        data: val
      };
      let str = JSON.stringify(obj);
      this.websocketsend(str);
      this.commitText = "";
    },
    _go_detail_(id) {
      this.$router.push(`/web/article/detail?articleId=${id}`);
    },
    _go_video_(id, name) {
      this.$router.push(`/web/video/detail?videoId=${id}&teacherId=${name}`);
      this.$emit("video", 1);
    },
    _change_(id) {
      this.aId = id;
    },
    // 课程
    _getCourses_() {
      let data = {
        lastId: 0,
        teacherId: this.$route.query.teacherId
      };
      this.$api.post(API.courses, data).then(res => {
        if (res.code === 200) {
          this.coursesList = res.data;
        }
      });
    },
    // 观点
    _getInformation_() {
      let data = {
        lastId: 0,
        teacherId: this.$route.query.teacherId,
        type: 0
      };
      this.$api.post(API.Information, data).then(res => {
        if (res.code === 200) {
          this.informationList = res.data;
        }
      });
    },
    // 视频
    _getVideo_() {
      let data = {
        lastId: 0,
        teacherId: this.$route.query.teacherId
      };
      this.$api.post(API.video, data).then(res => {
        if (res.code === 200) {
          this.videoList = res.data;
        }
      });
    },
    _getDetail_() {
      let data = {
        roomId: this.$route.query.teacherId
      };
      this.$api.post(API.detail, data).then(res => {
        if (res.code === 200) {
        }
      });
    },
    _getInfo_() {
      let data = {
        teacherId: this.$route.query.teacherId
      };
      this.$api.post(API.info, data).then(res => {
        if (res.code === 200) {
          this.data = res.data;
          this.nikeName = this.data.user.nikeName;
          this.avatar = this.data.user.avatarUrl;
          this.fansCount = this.data.fansCount;
          this.certificate = this.data.certificate;
          this.introduce = this.data.introduce;
        }
      });
    },
    _return_() {
      this.$router.push("/index");
      this.$emit("detail", 1);
    }
  },
  destroyed() {
    this.websock.onclose();
  },
  created() {
    this.user = JSON.parse(this.$cookie.get("infoObj"));
    this._getInfo_();
    this._getDetail_();
    this.initWebSocket();
  },
  watch: {
    aId() {
      if (this.aId === 1) {
        this._getVideo_();
      }
      if (this.aId === 2) {
        this._getInformation_();
      }
      if (this.aId === 3) {
        this._getCourses_();
      }
    }
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  font-family: PingFangSC-Regular, Microsoft Yahei, "微软雅黑", SimHei, "黑体";
}
.border-bottom {
  border: 1px solid #eee;
  position: relative;
  text-align: center;
  font-size: 24px;
  color: #000;
  font-weight: 400;
  padding: 0px 0.133333rem;
  background: #fff;
  .el-icon-arrow-left {
    float: left;
    padding-top: 4px;
  }
}
.teacher-introduce {
  padding: 10px;
  border-bottom: 2px solid #eee;
  background: #fff;
  height: 163px;
  overflow: hidden;
  .avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: inline-block;
    > img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: inline-block;
    }
  }
  .teacher-data {
    display: inline-block;
    width: 270px;
    float: right;
    .lists {
      display: flex;
      width: 100%;
      list-style: none;
      .list {
        text-align: center;
        /* width: 25%; */
        width: 35%;
        > span {
          display: block;
          font-size: 13px;
          color: #333;
          font-family: JZhongYi, "微软雅黑";
        }
        .key {
          font-size: 12px;
          color: #999;
        }
      }
    }
    .btn {
      display: inline-block;
      background: #ff0000;
      color: #fff;
      font-size: 12px;
      float: right;
      padding: 2px 80px;
      border-radius: 4px;
      margin: 5px 15px;
      text-decoration: none;
    }
  }
  .zhengshu {
    padding-top: 10px;
    font-size: 12px;
    text-align: left;
  }
  .info {
    text-align: left;
    font-size: 12px;
    height: 65px;
    overflow: hidden;
    overflow-y: auto;
    line-height: 20.25px;
  }
}
.teacher-list {
  width: 100%;
  height: calc(100% - 20px);
  background: #f8f8f8;
  .nav {
    overflow: hidden;
    width: 100%;
    height: 39px;
    background: #fff;
    line-height: 39px;
    text-align: center;
    .a {
      display: block;
      float: left;
      width: 10.5%;
      font-size: 16px;
      color: #333;
      height: 36px;
      margin: 0 7.25%;
      text-decoration: none;
      font-size: 16px;
      margin: 0 27px;
      line-height: 39px;
      cursor: pointer;
      &.active {
        color: #e70e1d;
        border-bottom: 3px solid #e70e1d;
      }
    }
  }
  .content {
    overflow: hidden;
    width: 100%;
    // margin-top: -34px;
    height: calc(100% - 10px);
    .message {
      display: block;
      padding: 15px 17px;
      > ul {
        list-style: none;
        > li {
          display: flex;
          justify-content: flex-start;
          padding: 15px 0;
          .avatar {
            width: 37px;
            height: 37px;
            border-radius: 50%;
            > img {
              width: 100%;
              height: 100%;
              display: block;
              border-radius: 50%;
            }
          }
          .list {
            list-style: none;
            .user-info {
              margin-left: 9px;
              position: relative;
              word-wrap: break-word;
              word-break: break-all;
              display: flex;
              .user-name {
                font-size: 12px;
                color: #9b9b9b;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                > span {
                  color: #3f3f3f;
                  letter-spacing: 0;
                  font-size: 12px;
                  line-height: 15px;
                  cursor: text;
                  text-decoration: none;
                }
              }
            }
            .commit-li {
              padding-left: 9px;
              .commit-box {
                padding: 8px;
                border-radius: 5px;
                position: relative;
                word-wrap: break-word;
                float: left;
                background: #ffffff;
                border: 0.5px solid #f1f1f1;
              }
            }
          }
        }
      }
      .commit-input-box {
        font-size: 12px;
        width: 100%;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-items: center;
        position: fixed;
        bottom: 0;
        background-color: #fff;
        box-sizing: border-box;
        left: 0;
        > input {
          background-color: #f5f5f5;
          border-radius: 5px;
          padding-left: 10px;
          height: 30px;
          width: 86%;
          border: none;
          outline: none;
          &:focus {
            outline: none;
            border: none;
          }
        }
        > a {
          background: #e50e0e;
          color: #fff;
          padding: 5px 9px;
          border-radius: 5px;
          margin-left: 5px;
          width: 28px;
          text-align: center;
        }
      }
    }
    .tabs {
      padding: 0 15px;
      background: #fff;
      .lists {
        list-style: none;
        .video {
          border-bottom: 1px solid #e3e3e3;
          overflow: hidden;
          padding: 10px 0;
          width: 100%;
          .img {
            width: 129px;
            height: 76px;
            float: left;
          }
          div {
            width: 58%;
            float: right;
            p:first-child {
              font-size: 15px;
              line-height: 21px;
              color: #333;
              height: 42px;
              overflow: hidden;
              text-overflow: ellipsis;
              text-align: left;
              // padding-left: 24px;
            }
            p:last-child {
              color: #999;
              font-size: 12px;
              margin-top: 15px;
              span {
                display: block;
                float: left;
              }
              span:last-child {
                float: right;
              }
            }
          }
        }
        .article {
          border-bottom: 1px solid #eaeaea;
          padding-top: 15px;
          height: 139px;
          &.active {
            height: 156px;
          }
          .author-info {
            // height: 129px;
            .avatar {
              width: 36px;
              height: 36px;
              margin-right: 5px;
              border-radius: 50%;
              float: left;
              .img {
                width: 100%;
                height: 100%;
                display: block;
                border-radius: 50%;
              }
            }
            .author {
              float: left;
              .name {
                font-family: PingFangSC-Medium, "微软雅黑";
                font-size: 16px;
                font-weight: 500;
                color: #4a4a4a;
                text-align: left;
              }
              .time {
                font-size: 12px;
                font-weight: 400;
                color: #9b9b9b;
                > span {
                  width: 62%;
                  display: inline-block;
                  text-align: left;
                }
              }
            }
            .title-info {
              // margin-top: 15px;
              font-size: 12px;
              .title {
                width: 100%;
                // height: 68px;
                margin-top: 15px;
                float: left;
                overflow: hidden;
                .body {
                  width: 62%;
                  display: inline-block;
                  text-align: left;
                  &.active {
                    width: 100%;
                  }
                }
              }
              .cover {
                width: 35%;
                height: 75px;
                float: right;
                &.active {
                  display: flex;
                  float: left;
                  width: 100%;
                }
                .img {
                  width: 100%;
                  height: 100%;
                  margin: 0 2px;
                  display: block;
                }
              }
            }
          }
        }
        .img {
          width: 50%;
          height: 88px;
          float: left;
          position: relative;
          overflow: hidden;
          background: #999999;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        .content {
          width: 50%;
          float: right;
          .title {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 16px;
            line-height: 22.5px;
            overflow: hidden;
            color: #333;
          }
          .time {
            font-size: 0.293333rem;
            color: #333333;
            letter-spacing: 0;
            line-height: 15px;
            display: block;
          }
        }
        .course {
          padding: 10px 0px;
          border-bottom: 1px solid #eee;
          height: 90px;
          .img {
            width: 40%;
            height: 88px;
            float: left;
            position: relative;
            overflow: hidden;
            background: #999999;
            img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
          .content {
            // border: 1px solid red;
            width: 58%;
            .time {
              float: right;
              .intorduce {
                height: 40px;
                font-weight: 400;
                line-height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #666;
                text-align: left;
                float: left;
              }
              span {
                line-height: 18.75px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                float: left;
              }
            }
            .title {
              text-align: left;
              font-size: 16px;
              line-height: 22.5px;
              overflow: hidden;
              color: #333;
            }
          }
        }
      }
    }
  }
}
</style>
