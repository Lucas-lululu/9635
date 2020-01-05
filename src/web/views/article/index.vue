<template>
  <div class="index_article">
    <div class="tabs">
      <i class="el-icon-arrow-left" @click="_return_"></i>
      <a>资讯</a>
    </div>
    <ul class="lists">
      <li class="li" v-for="item in list" :class="item.articleImg.length > 1 ? 'active' : ''">
        <div class="author-info">
          <div class="avatar">
            <img :src="item.user.avatarUrl" alt />
          </div>
        </div>
        <div class="author">
          <p class="name">{{item.user.nikeName}}</p>
          <p class="time">{{item.time}} {{item.watchCount}}人阅读{{item.articleImg.length}}</p>
        </div>
        <div class="title-info">
          <div class="title" :class="item.articleImg.length > 1 ? 'active' : ''">{{item.title}}</div>
          <div class="cover" v-if="item.articleImg.length === 1">
            <img :src="item.articleImg[index]" alt v-for="(i,index) in item.articleImg" />
          </div>
          <div class="cover three" v-else-if="item.articleImg.length === 2">
            <img :src="item.articleImg[index]" alt v-for="(i,index) in item.articleImg" />
          </div>
          <div class="cover two" v-else-if="item.articleImg.length === 3">
            <img :src="item.articleImg[index]" alt v-for="(i,index) in item.articleImg" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { List as API } from "@/assets/api/api";
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    _return_() {
      this.$router.go(-1);
      this.$emit("article", 1);
    },
    _getList_() {
      let data = {
        lastId: 0,
        today: false,
        type: 0
      };
      this.$api.post(API.articleList, data).then(res => {
        if (res.code === 200) {
          this.list = res.data;
        }
      });
    }
  },
  created() {
    this._getList_();
  }
};
</script>
<style lang="less" scoped>
.index_article {
  padding: 20px 19px 15px 19px;
  padding-top: 0;
  background: #fff;
  margin-top: 10px;
  .more {
    font-size: 14px;
    font-weight: 400;
    color: #ff4350;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 50px;
  }
  .tabs {
    background-color: #fff;
    // padding: 20px 19px 15px 19px;
    a {
      display: inline-block;
      font-size: 17px;
      font-weight: 400;
      line-height: 17px;
      padding-bottom: 10px;
      text-decoration: none;
      border-bottom: 2px solid #4a4a4a;
      color: #4a4a4a;
    }
    i {
      float: left;
      font-size: 22px;
      padding-top: 2px;
      padding-left: 10px;
    }
  }
  .lists {
    .li {
      border-bottom: 1px solid #eaeaea;
      padding: 15px 0;
      display: block;
      clear: both;
      height: 129px;
      &.active {
        height: 173px;
      }
      .author-info {
        display: block;
        clear: both;
        .avatar {
          width: 36px;
          height: 36px;
          margin-right: 5px;
          border-radius: 50%;
          float: left;
          img {
            width: 100%;
            height: 100%;
            display: block;
            border-radius: 50%;
          }
        }
      }
      .author {
        float: left;
        .name {
          font-size: 16px;
          font-weight: 500;
          color: #4a4a4a;
          text-align: left;
        }
        .time {
          font-size: 12px;
          font-weight: 400;
          color: #9b9b9b;
        }
      }
      .title-info {
        font-size: 12px;
        width: 100%;
        height: 100%;
        .title {
          width: 60%;
          margin-top: 15px;
          height: 67.5px;
          float: left;
          overflow: hidden;
          text-align: left;
          &.active {
            width: 100%;
          }
        }
        .cover {
          margin-top: 15px;
          width: 30%;
          height: 75px;
          float: right;
          &.two {
            float: left;
            margin-top: -21px;
            display: flex;
            width: 32.5%;
          }
          &.three {
            float: left;
            margin-top: -21px;
            display: flex;
            width: 49%;
          }
          > img {
            width: 100%;
            height: 100%;
            margin: 0 2px;
            display: block;
          }
        }
      }
    }
  }
}
</style>