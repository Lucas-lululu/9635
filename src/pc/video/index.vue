<template>
  <div class="video">
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
      videoList: [],
      rightList: []
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
        if (res.code === 0) {
          this.videoList = res.data.splice(0, 12);
          this.rightList = res.data.splice(0, 5);
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
