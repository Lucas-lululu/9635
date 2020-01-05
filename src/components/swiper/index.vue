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
        autoplayDisableOnInteraction: false,
        loop: false,
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