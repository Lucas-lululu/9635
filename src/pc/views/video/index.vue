<template>
  <div class="video">
    <div class="top">
      <span>当前位置：
        <a>首页> </a>
        <a v-if="videoList.length > 0">{{body.user.nikeName}}> </a>
        <a>{{body.title}} </a>
        <!-- <a v-if="body.user">{{body.user.nikeName}}> </a>
        <a>{{body.title}} </a> -->
      </span>
    </div>
    <div class="body">
      <div id="dplayer-box">
        <d-player :url="url" :pic="pic" :type="type" />
      </div>
      <div class="video-list">
        <div class="top-head">
          <span>HOT</span>
          <span>热门视频</span>
        </div>
        <div class="body">
          <ul>
            <li v-for="item in list" :key="item.id">
              <div>
                <img :src="item.img" alt="">
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 往期回顾 -->
    <div class="before-video-list">
      <p class="head">
        <span class="mintui mintui-wangqihuigu"></span>
        <span>往期回顾</span>
      </p>
      <ul class="video-list">
        <li v-for="item in videoList" :key="item.articleId" @click="_go_(item)">
          <div class="img">
            <img :src="item.videoImage" alt="">
          </div>
          <p>{{item.title}}</p>
          <div class="box">
            <div class="left">
             <i class="el-icon-view"></i>
             <span>{{item.watchCount}}</span>
            </div>
            <div class="right">
              <i class="el-icon-timer"></i>
              <span>{{item.time | formatDate}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import VueDplayer from '@/components/vdplayer'
// import {Detail as API from '@/assets/api/api'
import * as API from '@/assets/api/api'
export default {
  data () {
    return {
      body: {
        user: '',
        title: ''
      },
      url: '',
      pic: '',
      type: '',
      list: [
        {
          id: 1,
          img: 'https://images-test.integrity.com.cn/20901ac7f09a4229aa9ea0a82b2f5647_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191212105850.jpg'
        },
        {
          id: 2,
          img: 'https://images-test.integrity.com.cn/20901ac7f09a4229aa9ea0a82b2f5647_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191212105850.jpg'
        },
        {
          id: 3,
          img: 'https://images-test.integrity.com.cn/20901ac7f09a4229aa9ea0a82b2f5647_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191212105850.jpg'
        }
      ],
      videoList: [
        {
          id: 1,
          title: ''
        }
      ]
    }
  },
  methods: {
    _go_(obj) {
      // console.log(obj)
      // window.location.href = `/pc/video/detail?videoId=${obj.articleId}&teacherId=${obj.userId}`
    },
    _get_video_(id) {
      let data = {
        teacherId: id,
        lastId: 0
      }
      // this.$api.post(API.video, data).then(res => {
      //   if (res.code === 0) {
      //     this.videoList = res.data.splice(0, 8)
      //   }
      // })
    },
    _get_Data_(id) {
      let data = {
        videoId: id
      }
      // this.$api.post(API.videoDetail, data).then(res => {
      // this._netGet(API.Detail.videoDetail, data).then(res => {
      //   console.log(res)
      //   if (res.code === 200) {
      //     this.body = res.data
      //     this.url = this.body.videoUrl
      //     this.pic = this.body.videoImage
      //     this._get_video_(this.body.user.userId)
      //   }
      // })
      // console.log(this.$route)
      // let obj = this.$route.params
      // this.url = obj.videoUrl
      // this.pic = obj.videoImage
      // this.body = obj.user
      this.$api.post(API.Detail.video, {teacherId: "1217788431430586370",lastId: 0}).then(res => {
        if (res.code === 0) {
          this.videoList = res.data.list
          this.url = this.videoList[0].videoUrl
          this.pic = this.videoList[0].videoImage
          this.body.title = this.videoList[0].title
          this.body.user = this.videoList[0].user
          this.$emit('fullscreenLoading', false)
        }
      }).catch(err => {
        setTimeout(() => {
          this.$emit('fullscreenLoading', false)
        }, 2000)
      })
    }
  },
  created() {
    this._get_Data_(this.$route.query.videoId)
  },
  components: {
    "d-player": VueDplayer
  }
}
</script>
<style lang="less" scoped>
  .video {
    width: 1200PX;
    background: #F5F5F5;
    margin: 0 auto;
    .top {
      padding-top: 37px;
      text-align: left;
      padding-bottom: 8px;
    }
    .nav-list {
      display: flex;
      justify-content: flex-start;
      padding-top: 37PX;
      height: 20PX;
      font-size: 14PX;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(51,51,51,1);
      line-height: 20PX;
    }
    .body {
      display: flex;
      .video-list {
        .top-head {
          height: 58px;
          background: #343434;
          display: flex;
          padding-left: 16px;
          align-items: center;
          span {
            &:first-child {
              height: 16px;
              font-size: 12px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              color: rgba(255,255,255,1);
              line-height: 17px;
              padding: 0px 3px;
              background: rgba(255,126,0,1);
              border-radius: 2px;
            }
            &:last-child {
              padding-left: 9px;
              height: 25px;
              font-size: 18px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              color: rgba(255,126,0,1);
              line-height: 25px;
            }
          }
        }
        .body {
          background: #343434;
          ul {
            padding: 0 16px;
            list-style: none;
            li {
              padding-bottom: 16px;
              > div {
                border-radius: 2px;
                color: rgba(255, 255, 255, 0);
                display: block;
                width: 248px;
                height: 138px;
                border: 1px solid #343434;
                position: relative;
                > img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
    .before-video-list {
      padding-top: 30px;
      .head {
        text-align: left;
        span {
          &:first-child {
            font-size: 24px;
            color: #FF7E00;
          }
        }
      }
      .video-list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        li {
          cursor: pointer;
          padding: 37px 20px 0 0;
          > .img {
            width: 285px;
            height: 160px;
            // position: relative;
            > img {
              width: 100%;
              height: 100%;
            }
          }
          p {
            text-align: left;
            max-width: 280px;
            height: 25px;
            font-size: 18px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: rgba(51,51,51,1);
            line-height: 25px;
            padding-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .box {
            display: flex;
            padding-top: 10px;
            justify-content: space-between;
            .left,.right {
              color: #999999;
              font-size: 14px;
              > span {
                font-size: 12px;
                padding-left: 3px;
              }
            }
          }
          &:nth-child(1),&:nth-child(2),&:nth-child(3),&:nth-child(4) {
            padding-top: 8px;
          }
          &:nth-child(4n) {
            padding-right: 0;
          }
        }
      }
    }
  }
</style>