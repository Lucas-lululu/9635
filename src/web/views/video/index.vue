<template>
  <div class="video" v-loading.fullscreen.lock="fullscreenLoading">
    <p class="video-logo">
      <img src="https://www.9635.com.cn/images/video-logo.png" />
    </p>
    <d-player :url="url" :pic="pic" :type="type" />
    <div class="des">
      <a class="btn">打开易学教育App，看更多精彩视频</a>
      <p class="title">{{title}}</p>
      <p class="info">
        <i class="el-icon-view"></i>
        <span class="watch">{{watch}}次播放</span>
        <span class="time">{{date | formatDate}}</span>
      </p>
    </div>
    <ul class="lists">
      <li class="item" @click="_change_video_(item)" v-for="(item,index) in list" :key="index">
        <div class="cover">
          <img :src="item.videoImage" alt />
        </div>
        <div class="info">
          <p class="title">{{item.title}}</p>
          <span class="watch">
            <i class="el-icon-view"></i>
            {{item.watchCount}}次播放
          </span>
          <span class="time">{{item.time | formatDate}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { Detail as API } from "@/assets/api/api";
import VueDplayer from "@/components/vdplayer";
export default {
  data() {
    return {
      fullscreenLoading: true,
      url: "",
      pic: "",
      type: "",
      title: "",
      watch: "",
      date: "",
      list: []
    };
  },
  methods: {
    _change_video_(obj) {
      let url = window.location.href;
      url = url.split("?")[0];
      window.location.href = `${url}?videoId=${obj.id}&teacherId=${
        obj.user.userId
      }`;
    },
    async _getVideo_Detail_() {
      let data = {
        lastId: 0,
        teacherId: this.$route.query.teacherId
      };
      
      await this.$api.post(API.video, data).then(res => {
        if (res.code === 0) {
          for (let key in res.data.list) {
            if (res.data.list[key].id == this.$route.query.videoId) {
              this.url = res.data.list[key].videoUrl;
              let url = this.url;
              url = url.split(".");
              this.type = url[url.length - 1];
              this.title = res.data.list[key].title;
              this.watch = res.data.list[key].watchCount;
              this.date = res.data.list[key].time;
            }
             else {
              this._netGet(API.lessDetail, {lessonId: this.$route.query.teacherId}).then(res => {
                if (res.code === 0) {
                  this.url = res.data.videoUrl
                  this.title = res.data.lessonName
                  this.watch = 0
                  
                }
              })
            }
          }
          this.list = res.data.list;
          this.fullscreenLoading = false
        }
      }).catch(err => {
        setTimeout(() => {
          this.fullscreenLoading = false
        }, 2000)
      })
    }
  },
  created() {
    console.log('开始执行')
    this._getVideo_Detail_();
  },
  components: {
    "d-player": VueDplayer
  }
};
</script>
<style lang="less" scoped>
.video {
  background: #fff;
  .video-logo {
    width: 100%;
    height: 40px;
    text-align: center;
    > img {
      height: 25px;
      padding: 7.5px 0;
      display: inline-block;
    }
  }
  .des {
    padding: 12.5px;
    .btn {
      background: #db4637;
      border: 2px solid #d84232;
      box-shadow: 0 5px 8px 0 rgba(219, 70, 55, 0.56);
      border-radius: 4px;
      font-size: 15px;
      color: #ffffff;
      letter-spacing: 0;
      display: block;
      padding: 9px 0;
      text-align: center;
      text-decoration: none;
      font-weight: 600;
    }
    .title {
      font-family: PingFangTC-Medium, "微软雅黑";
      font-size: 20px;
      color: #333333;
      letter-spacing: 0;
      overflow: hidden;
      text-align: left;
      margin-top: 20px;
    }
    .info {
      font-size: 12.5px;
      color: #999;
      letter-spacing: 0;
      margin-top: 7.5px;
      text-align: left;
      span {
        vertical-align: middle;
        height: 15px;
        line-height: 15px;
        font-size: 12.75px;
      }
      .time {
        float: right;
      }
    }
  }
  .lists {
    margin: 0 10px;
    margin-top: 10px;
    overflow: hidden;
    overflow-y: scroll;
    .item {
      padding: 10px 0px;
      border-bottom: 1px solid #eee;
      display: flex;
      font-size: 12px;
      .cover {
        width: 120px;
        height: 75px;
        float: left;
        margin-right: 10px;
        > img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .info {
        width: 75%;
        height: 75px;
        float: left;
        .title {
          text-align: left;
          margin-bottom: 10px;
        }
        .watch {
          float: left;
        }
        .time {
          float: right;
        }
      }
    }
  }
}
</style>