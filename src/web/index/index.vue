<template>
  <div v-loading.fullscreen.lock="fullscreenLoading">
    <!-- 首页轮播图 -->
    <div class="carousel_box">
      <v-swiper :bannerList="bannerList" />
    </div>
    <!-- 首页老师 -->
    <v-teacher :oneList="oneList" :twoList="twoList" @id="_getId_" />
    <v-rank :rank="rank" />
    <v-news :news="news" @newsn="_news_" />
    <v-footer-menu />
  </div>
</template>
<script>
import FooterMenu from "@/web/footer";
import { Index as API } from "@/assets/api/api";
import Teacher from "@/web/indexTeacher";
import Rank from "@/web/rank";
import News from "@/web/news";
import Swiper from "@/components/swiper";
export default {
  data() {
    return {
      bannerList: [],
      oneList: [],
      twoList: [],
      rank: [],
      news: [],
      fullscreenLoading: true
      // screenWidth: document.body.clientWidth
    };
  },
  components: {
    "v-swiper": Swiper,
    "v-teacher": Teacher,
    "v-rank": Rank,
    "v-news": News,
    "v-footer-menu": FooterMenu
  },
  methods: {
    _news_(v) {
      this.$emit("news", v);
    },
    _getId_(v) {
      this.$emit("id", v);
    },
    _get_Home_page_() {
      this.$api.get(API.homepage, {}).then(res => {
        if (res.code === 0) {
          let list = res.data.banners
          for (let key of list) {
            if (key.platformType === 1) {
              this.bannerList.push(key)
            }
          } 
          // this.bannerList = res.data.banners;
          this.oneList = res.data.teachers.splice(0, 10);
          this.twoList = res.data.teachers;
          this.rank = res.data.rank;
          this.news = res.data.information.articles;
          this.fullscreenLoading = false
        }
      }).catch(err => {
        setTimeout(() => {
          this.fullscreenLoading = false
        }, 2000)
      })
    }
  },
  mounted() {
    // window.onresize = () => {
    //   return (() => {
    //       window.screenWidth = document.body.clientWidth
    //       this.screenWidth = window.screenWidth
    //   })()
    // }
  },
  // watch: {
  //   screenWidth(v) {
  //     if (v <= 500) {
  //       this.$router.push('/web/index')
  //     } else {
  //       this.$router.push('/pc/index')
  //     }
  //   }
  // },
  created() {
    this._get_Home_page_();
  }
};
</script>
<style lang="less">
.carousel_box {
  height: 128px;
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-wrapper {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination {
      .swiper-pagination-bullet-active {
        background: #fff !important;
      }
    }
  }
  .el-carousel__container {
    .el-carousel__item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  ul.el-carousel__indicators {
    width: 100%;
    li.el-carousel__indicator {
      .el-carousel__button {
        border-radius: 50%;
        width: 8px;
        height: 8px;
      }
    }
  }
}
</style>
