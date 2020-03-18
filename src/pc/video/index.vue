<template>
  <div class="video" v-loading.fullscreen.lock="fullscreenLoading">
    <v-head />
    <div class="main">
      <div class="left">
        <v-select-head :name="'精彩讲堂'" style="width: 780px" />
        <v-countlist :one="list" :two="list2" />
        <v-videolist :videoList="videoList" />
      </div>
      <div class="right">
        <v-right-list :title="'昨日热播'" :list="rightList" />
        <v-right-list :title="'热门节目'" :list="rightList" style="padding-top: 20px" />
      </div>
    </div>
  </div>
</template>
<script>
import VideoList from "@/components/videoList";
import VideoRightList from "@/components/videoRightList";
import Select from "@/components/selectHead";
import CountList from "@/components/countList";
import Head from "@/components/indexAdview";
import * as API  from "@/assets/api/api";
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
      videoList: [],
      rightList: [
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
      ]
    };
  },
  methods: {
    _getVideo_Detail_() {
      let data = {
        lastId: 0,
        teacherId: this.$route.query.teacherId
      };
      this.$api.post(API.Teacher.video, data).then(res => {
       console.log(res)
      });
    },
    _get_list_() {
      let data = {
        type: 2,
        filter: 0,
        lastId: 0
      };
      this.$api.post(API.Detail.video, {teacherId: "1217788431430586370",lastId: 0}).then(res => {
        if (res.code === 0) {
          this.videoList = res.data.list
          this.fullscreenLoading = false
          this.$emit('fullscreenLoading', false)
        }
      }).catch(err => {
        setTimeout(() => {
          this.fullscreenLoading = false
          this.$emit('fullscreenLoading', false)
        }, 2000)
      })
      this._netGet(API.Course.courseList, data).then(res => {
        if (res.code === 0) {
          // this.videoList = res.data.splice(0, 12);
          // this.rightList = res.data.splice(0, 5);
        }
      });
    }
  },
  created() {
    this._get_list_();
  },
  components: {
    "v-head": Head,
    "v-select-head": Select,
    "v-countlist": CountList,
    "v-videolist": VideoList,
    "v-right-list": VideoRightList
  }
};
</script>
<style lang="less">
.video {
  .left {
    .hrhg_index_teacher_live {
      width: 780px;
      .left {
        .left-list {
          .video-item {
            width: 237px;
          }
        }
      }
    }
  }
}
</style>
<style lang="less" scoped>
.video {
  .main {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    padding-top: 37px;
    .right {
      width: 398px;
    }
  }
}
</style>
