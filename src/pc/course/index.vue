<template>
  <div class="course" v-loading.fullscreen.lock="fullscreenLoading">
    <v-head />
    <div class="main">
      <div class="right">
        <v-select :name="'首页>'" />
        <v-countlist :one="list" :two="list2" style="width: 100%" />
        <v-course :list="videoList" class="courseList" />
      </div>
      <div class="course-right">
        <p class="title">最热课程</p>
        <ul class="left-list">
          <li v-for="item in hotList" :key="item.courseId" class="video-item">
            <div class="video-box">
              <img :src="item.courseImage" alt />
            </div>
            <div class="hrhg_index_content">
              <P class="title">{{item.courseName}}</P>
              <!-- <P class="content">{{item.introduce}}</P>/ -->
              <p class="bottom">
                <span class="name">{{item.user.nikeName}}</span>
                <span class="watch">
                  {{item.watchCount}}
                  <span class="span">人访问</span>
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Head from "@/components/indexAdview";
import Select from "@/components/selectHead";
import CountList from "@/components/countList";
import Course from "@/components/subjuect";
import { Course as API } from "@/assets/api/api";

export default {
  data() {
    return {
      fullscreenLoading: true,
      list: [
        {
          id: 1,
          name: "徐文明团队"
        },
        {
          id: 2,
          name: "边风炜"
        },
        {
          id: 3,
          name: "魏宁海"
        },
        {
          id: 4,
          name: "吕长顺"
        },
        {
          id: 5,
          name: "李以勒团队"
        },
        {
          id: 6,
          name: "吴俊琛"
        },
        {
          id: 7,
          name: "余芳芳团队"
        }
      ],
      list2: [
        {
          id: 1,
          name: "孙志斌"
        },
        {
          id: 2,
          name: "王喜龙"
        },
        {
          id: 3,
          name: "胡磊"
        },
        {
          id: 4,
          name: "孙清"
        },
        {
          id: 5,
          name: "熊艳平"
        },
        {
          id: 6,
          name: "曲颂杰"
        },
        {
          id: 7,
          name: "蔡玲玲"
        },
        {
          id: 8,
          name: "刘馨亚"
        },
        {
          id: 9,
          name: "学院号"
        },
        {
          id: 10,
          name: "股民学堂"
        },
        {
          id: 11,
          name: "财经资讯"
        }
      ],
      hotList: [
        {
          courseId: 1,
          courseImage: 'https://images-test.integrity.com.cn/75eeb76225234751b2335438503e6b4c_%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20200203191202.png',
          user: {
            nikeName: '孙清'
          },
          courseName: '20200203-沪指下跌近8% 北向资金逆市净流入近200亿元',
          stratTime: '2020-02-03 18:50:00',
          watchCount: 2554
        },
        {
          courseId: 2,
          courseImage: 'https://images-test.integrity.com.cn/5421abf004d74d0d93521eefa7e5516f_%E5%B0%8F%E6%B8%94%E7%BB%93%E6%9E%84.png',
          user: {
            nikeName: '徐文明团队'
          },
          courseName: '出局还是平仓？',
          stratTime: '2020-02-03 09:45:14',
          watchCount: 1755
        },
        {
          courseId: 3,
          courseImage: 'https://images-test.integrity.com.cn/ba645a20a5974644b79586fc5b5d0b00_6281d9f0aa7f4fcf86ad5e1d9061b5d2_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191202140300.jpg',
          user: {
            nikeName: '吕长顺'
          },
          courseName: '20200203-凯恩斯看盘',
          stratTime: '2020-02-03 10:00:14',
          watchCount: 809
        },
        {
          courseId: 4,
          courseImage: 'https://images-test.integrity.com.cn/136acef3e2694fe0b92aed45cc9644b0_%E5%A5%BD%E4%BA%BA%E5%A5%BD%E8%82%A1app.jpg',
          user: {
            nikeName: '王喜龙'
          },
          courseName: '大盘还没跌完，谈谈对后市的看法',
          stratTime: '2020-02-03 13:22:52',
          watchCount: 497
        },
        {
          courseId: 5,
          courseImage: 'https://images-test.integrity.com.cn/a694ad7f52b54d99a6f39eace7f2c09a_1%20_2_.jpg',
          user: {
            nikeName: '王喜龙'
          },
          courseName: '下跌效率真高，明天不用急着割肉了',
          stratTime: '2020-02-03 17:43:47',
          watchCount: 355
        }
      ],
      videoList: []
    };
  },
  methods: {
    _get_list_() {
      let data = {
        type: 2,
        filter: 0,
        lastId: 0
      };
      this._netGet(API.courseList, data).then(res => {
        if (res.code === 0) {
          this.videoList = res.data.splice(0, 12);
          this.fullscreenLoading = false
          this.$emit('fullscreenLoading', false)
          // this.hotList = res.data.splice(0, 4);
        }
      }).catch(err => {
        setTimeout(() => {
          this.fullscreenLoading = false
        }, 2000)
      })
    }
  },
  created() {
    this._get_list_();
  },
  components: {
    "v-head": Head,
    "v-select": Select,
    "v-countlist": CountList,
    "v-course": Course
  }
};
</script>
<style lang="less" scoped>
.course {
  .main {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    padding-top: 37px;
    .right {
      width: 940px;
    }
    .course-right {
      width: 223px;
      // float: left;
      margin-left: 20px;
      .title {
        height: 28px;
        font-size: 20px;
        color: #ff4350;
        line-height: 28px;
        font-weight: bold;
        text-align: left;
      }
      .left-list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        .video-item {
          cursor: pointer;
          padding: 0;
          width: 221px;
          // height: 252px;
          height: 215px;
          background: rgba(255, 255, 255, 1);
          float: left;
          margin-right: 16px;
          margin-top: 16px;
          position: relative;
          transition: all 0.2s;
          border: 1px solid rgba(229, 229, 229, 1);
          &:nth-child(4n) {
            margin-right: 0;
          }
          &:hover {
            box-shadow: 0 2px 4px 0 rgba(225, 225, 225, 0.9);
          }
          .video-box {
            width: 100%;
            height: 148px;
            overflow: hidden;
            img {
              height: 100%;
              width: 100%;
            }
          }
          .hrhg_index_content {
            padding: 0 10px;
            position: absolute;
            top: 148px;
            left: 0;
            width: 90%;
            .title {
              height: 26px;
              font-size: 16px;
              font-family: PingFangSC-Medium;
              font-weight: 600;
              line-height: 26px;
              padding-top: 10px;
              text-align: left;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .content {
              text-align: left;
              height: 40px;
              font-size: 14px;
              font-family: PingFangSC-Regular;
              font-weight: 500;
              color: #666666;
              line-height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .bottom {
              > .name {
                float: right;
                height: 27px;
                font-size: 12px;
                font-family: PingFangSC-Regular;
                font-weight: 500;
                color: #666666;
                margin: 0;
                padding: 0;
                line-height: 27px;
                margin-left: 10px;
              }
              > .watch {
                font-size: 12px;
                font-family: PingFangSC-Regular;
                font-weight: 500;
                color: #666666;
                line-height: 27px;
                color: #ff7e00;
                float: right;
                .span {
                  font-size: 12px;
                  font-family: PingFangSC-Regular;
                  font-weight: 500;
                  color: #666666;
                  line-height: 27px;
                  color: #666;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.courseList {
  .left {
    width: 100%;
  }
}
</style>
