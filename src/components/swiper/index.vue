<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="item in bannerList" :key="item.bannerId">
      <img :src="item.imageUrl" alt />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  props: {
    bannerList: {
      type: Array
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        paginationClickable: false,
        autoplay: {
          delay: 3000, //秒
          stopOnLastSlide: false,
          disableOnInteraction: false //滑动不会失效
        },
        loop: true, // 环路
        grabCursor: true, // 鼠标上去变成手
        // speed: 3000, // 切换时候的速度
        autoplayDisableOnInteraction: false,
        dynamicBullets: true,
        // effect: "fade", // 轮播方式
        // fadeEffect: {
        //   crossFade: true
        // }, // 轮播图过渡  当图片大小不同时候可以使用
        // direction: "vertical", // 竖向
        // freeMode: true, // 滑动进一格
        // initialSlide: 8 // slide的索引
        coverflow: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: true
        }
      }
    };
  }
};
</script>