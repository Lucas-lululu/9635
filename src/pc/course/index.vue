<template>
  <div class="course">
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
              <P class="content">{{item.introduce}}</P>
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
      hotList: [],
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
      this.$api.post(API.courseList, data).then(res => {
        if (res.code === 200) {
          console.log(res.data);
          this.videoList = res.data.splice(0, 12);
          this.hotList = res.data.splice(0, 4);
        }
      });
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
          height: 252px;
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
