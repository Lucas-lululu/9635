<template>
  <div class="article_detail_box">
    <v-header />
    <div class="detail_content">
      <div class="detail_title">{{list.title}}</div>
      <div class="detail_author_info" v-if="list.user">
        <img :src="list.user.avatarUrl" />
        <span class="author_name">{{list.user.nikeName}}</span>
        <span class="detail_time">{{list.time | formatDate}}</span>
      </div>

      <div class="detail_atten">
        <span class="detail_atten_tip">摘要</span>
        <span class="detail_atten_content">{{list.summary}}</span>
      </div>

      <div class="detail_desc">
        <div class="detail_article_content" :style="aId === 0 ? 'height: 500px' : ''">
          <p v-html="change(body)"></p>
          <p v-html="change(list.content)"></p>
        </div>
        <div class="article-detail-content-masker">
          <div class="masker" v-if="show">
            <i class="el-icon-arrow-down" @click="_show_"></i>
          </div>
          <div class="box">
            <a class="btn">打开好人好股App，看更多精彩内容</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Detail as API } from "@/assets/api/api";
import Header from "./header";
import { type } from "os";
export default {
  data() {
    return {
      list: [
        {
          title: "",
          user: {
            avatarUrl: "",
            nikeName: "",
            userId: ""
          },
          time: "",
          summary: "",
          content: ""
        }
      ],
      aId: 0,
      show: true,
      body: ''
    };
  },
  methods: {
    change(content) {
      if (content) {
        content = content.replace(/&lt;p&gt;/g, "<p>");
        content = content.replace(/&lt;\/p&gt;/g, "<p>");
        content = content.replace(
          /&lt;figure class=&quot;image&quot;&gt;/g,
          "<figure class='image'>"
        );
        content = content.replace(/&lt;\/figure&gt;/g, "</figure>");
        content = content.replace(/&lt;img src=&quot;/g, `<img src=`);
        content = content.replace(/&quot;&gt;/g, " />");
        content = content.replace(/&lt;strong&gt;/g, "<strong>");
        content = content.replace(/&lt;\/strong&gt;/g, "</strong>");
        content = content.replace(/&amp;nbsp;/g, " ");
        return content;
      }
    },
    _show_() {
      this.aId = 1;
      this.show = false;
      let dom = document.getElementsByClassName("image");
      for (let key in dom) {
        if (typeof dom[key] == "object") {
          dom[key].firstChild.style.height = "100%";
          dom[key].firstChild.style.width = "100%";
        }
      }
    },
    _get_articleDetail_() {
      let data = {
        articleId: this.$route.query.articleId
      };
      this.$api.post(API.article, data).then(res => {
        if (res.code === 200) {
          this.list = res.data;
        }
      });
    }
  },
  created() {
    this._get_articleDetail_();
  },
  components: {
    "v-header": Header
  }
};
</script>
<style lang="less" scoped>
.article_detail_box {
  background: #000 !important;
}
.detail_content {
  overflow: hidden;
  overflow-y: scroll;
  .detail_title {
    text-align: left;
    padding: 0 17px;
    background: #fff;
    font-size: 24px;
    color: #000;
    line-height: 34px;
    padding-top: 15px;
  }
  .detail_author_info {
    padding: 10px 17px 26px 17px;
    background: #fff;
    line-height: 33px;
    height: 33px;
    text-align: left;
    img {
      width: 33px;
      height: 33px;
      float: left;
      border-radius: 50%;
    }
    .author_name {
      display: block;
      float: left;
      margin-left: 8.5px;
      font-size: 14px;
      color: #333;
    }
    .detail_time {
      display: block;
      float: left;
      margin-left: 8.5px;
      font-size: 14px;
      color: #999;
    }
  }
  .detail_atten {
    padding: 0 17px;
    background: #fff;
    position: relative;
    .detail_atten_tip {
      position: absolute;
      height: 21.5px;
      line-height: 21px;
      font-size: 15px;
      left: 44px;
      top: -10.5px;
      font-weight: 500;
    }
    .detail_atten_content {
      padding: 18.5px 25px;
      display: block;
      background: #f5f5f5;
      font-size: 16px;
      line-height: 24px;
      color: #333;
      text-align: left;
    }
  }

  .detail_desc {
    padding: 0 17px;
    background: #fff;
    padding-top: 15px;
    overflow: hidden;
    position: relative;
    .detail_article_content {
      p {
        margin-bottom: 18px;
        font-size: 18px;
        line-height: 32px;
        word-break: normal;
        text-align: justify;
        .image {
          border: 1px solid red;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .article-detail-content-masker {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      .box {
        width: 100%;
        height: 70px;
        background: #fff;
        padding-top: 20px;
        .btn {
          display: block;
          width: 90%;
          height: 42px;
          margin: 0 auto;
          background: #ff7e00;
          border-radius: 2px;
          line-height: 42px;
          text-align: center;
          color: #fff;
          font-size: 14px;
        }
      }
      .masker {
        text-align: center;
        background: linear-gradient(180deg, hsla(0, 0%, 100%, 0.3), #fff);
        height: 100px;
        i {
          margin-top: 60px;
          font-size: 28px;
          color: #ff7e00;
        }
      }
    }
  }
}
</style>