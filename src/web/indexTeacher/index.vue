<template>
  <div class="index_teacher">
    <swiper :options="swiperOption">
      <swiper-slide>
        <ul>
          <li @click="_go_(item.userId)" class="item" v-for="item in oneList" :key="item.userId">
            <img :src="item.avatarUrl" alt />
            <p>{{item.nikeName}}</p>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <li @click="_go_(item.userId)" class="item" v-for="item in twoList" :key="item.userId">
            <img :src="item.avatarUrl" alt />
            <p>{{item.nikeName}}</p>
          </li>
        </ul>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  props: {
    oneList: {
      type: Array
    },
    twoList: {
      type: Array
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: true,
        loop: true,
        coverflow: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: true
        }
      }
    };
  },
  methods: {
    _go_(id) {
      this.$router.push(`/web/teacher/detail?teacherId=${id}`);
      this.$emit("id", 1);
    }
  }
};
</script>
<style lang="less">
.index_teacher {
  width: 100%;
  height: 195px;
  margin: 10px 0;
  background: #fff;
  .swiper-container {
    width: 100%;
    height: 195px;
    margin: 10px auto;
    .swiper-pagination {
      bottom: -2.5px;
      .swiper-pagination-bullet {
        background: #e8e7e7;
      }
      .swiper-pagination-bullet-active {
        background: #c3c3c3;
      }
    }
    .swiper-wrapper {
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
        .item {
          width: 57px;
          margin: 8px 7px 0 7px;
          img {
            width: 57px;
            height: 57px;
            border-radius: 50%;
          }
          p {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
            font-size: 13px;
            line-height: 18.5px;
            height: 18.5px;
            // margin-top: 4px;
            color: #333;
          }
        }
      }
    }
  }
}
</style>