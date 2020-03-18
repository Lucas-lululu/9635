<template>
  <div class="article" v-loading.fullscreen.lock="fullscreenLoading">
    <div class="main">
      <!-- 头部 -->
      <div class="head">
        <div class="top">
          <span>
            当前位置：
            <a v-for="value in navTopList" :key="value.id">{{value.name}}></a>
            <a>{{body.title}}</a>
          </span>
        </div>
        <div class="box">
          <div class="left">
            <div class="img" v-if="body.user">
              <img :src="body.user.avatarUrl" alt />
            </div>
            <div class="text">
              <p>
                {{body.user.nikeName}}
                <a v-if="body.user.level == 2">院长</a>
                <a v-else>讲师</a>
              </p>
              <p>
                <i class="el-icon-plus"></i>关注
              </p>
            </div>
          </div>
          <div class="right">
            <div class="numCount">
              <p>总篇量</p>
              <p>577</p>
            </div>
            <div class="numCount">
              <p>粉丝量</p>
              <p>6161</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 内容 -->
      <div class="content">
        <div class="title">
          <p>{{body.title}}</p>
          <p>
            <span>
              <span>{{body.time | formatDate}}</span>
              <span>
                参考来源：
                <span class="red">易学教育</span>
              </span>
            </span>
            <span>
              <i class="el-icon-mobile-phone"></i>
              <span class="phone">用手机看</span>
              <i class="el-icon-arrow-down"></i>
            </span>
          </p>
        </div>
        <div class="atten">
          <p class="atten_head">摘要</p>
          <p class="atten_detail">{{body.summary}}</p>
        </div>
        <!-- 详情 -->
        <div class="detail" v-html="change(body.content)"></div>
        <ul class="bottomList">
          <li class="bottomItem">
            <p>上一篇:</p>
            <p>收评+干货分享：股市的黄金组合，MACD与KDJ双剑合璧，若不懂，在股市谈何生存？</p>
          </li>
          <li class="bottomItem">
            <p>下一篇:</p>
            <p>午评：2019/12/30</p>
          </li>
        </ul>
        <div class="botom-box">
          <ul>
            <li>
              <i class="mintui mintui-zan"></i>赞
            </li>
            <li>
              <i class="el-icon-star-on"></i>收藏
            </li>
            <li>
              <i class="el-icon-share"></i>分享
            </li>
          </ul>
        </div>
      </div>
      <!-- 底部 -->
      <div class="about">
        <div class="about-head">
          <i></i>
          相关推荐
        </div>
        <ul class="body">
          <li>
            <img
              src="https://images-test.integrity.com.cn/7b6786ae26e64343817121f8e7df39b9_%E5%9B%BE%E7%89%87%20%2812%29.jpg"
              alt
            />
            <p>突破，突破，上涨提前！</p>
          </li>
          <li>
            <img
              src="https://images-test.integrity.com.cn/8451bc9809874f4499791bc312abfa97_image.png"
              alt
            />
            <p>下周突破3050，坚定看好五大行业</p>
          </li>
          <li>
            <img
              src="https://images-test.integrity.com.cn/e92f87e90cfb4577bea5cbdf8e7b512c_QQ%E6%88%AA%E5%9B%BE20191031140722.jpg"
              alt
            />
            <p>凯恩斯：北上资金回归,降准预期利好，有多少上涨空间？</p>
          </li>
        </ul>
      </div>
      <!-- 评论 -->
      <div class="commit">
        <div class="commit-head">
          <div class="left">
            <span>
              <i></i>
              我来说两句
            </span>
          </div>
          <div class="right">
            <span class="commit-right">
              <span class="text">
                <span class="red">0</span>
                人参与
              </span>
              <span class="text">
                <span class="red">0</span>
                条评论
              </span>
            </span>
          </div>
        </div>
        <!-- 评论区 -->
        <div class="textbody">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="输入您想说的内容"
            v-model="commitText"
          ></el-input>
          <div class="btn">提交</div>
        </div>
        <!--  -->
        <div class="bottom-box">
          <p>
            <i class="mintui mintui-shafa"></i>
          </p>
          <p>还没有评论，快来抢沙发吧！</p>
        </div>
      </div>
    </div>
    <!-- 右边列表 -->
    <div class="list">
      <v-list :list="topList" :icon="'mintui-zuire'" :name="'最热文章'" style="width: 320px" />
      <v-list
        :list="topList"
        :icon="'mintui-shandian'"
        :name="'最新文章'"
        style="margin-top: 10px;width: 320px"
      />
    </div>
  </div>
</template>
<script>
import List from "@/components/list";
import { Detail as API } from "@/assets/api/api";
export default {
  data() {
    return {
      fullscreenLoading: true,
      navTopList: [
        {
          id: 1,
          name: "首页"
        },
        {
          id: 2,
          name: "资讯"
        }
      ],
      topList: [
        {
          id: 1,
          name: "吴俊琛",
          time: "19-04-11 09:50",
          watch: "4659",
          title:
            "为什么说“长三角一体化”中吴江和嘉善的机会比青浦大？均富卡的作用将会显现！"
        },
        {
          id: 2,
          name: "学院号",
          time: "19-05-20 08:32",
          watch: "4170",
          title: "刘士余主动投案，这些股票需要注意了！"
        },
        {
          id: 3,
          name: "吴俊琛",
          time: "19-04-10 13:12",
          watch: "4047",
          title: "长三角一体化消息不断，跟着我们一起拥抱四月！"
        },
        {
          id: 4,
          name: "孙清",
          time: "19-04-22 07:32",
          watch: "3832",
          title: "探底回升，等待大机会"
        },
        {
          id: 5,
          name: "孙清",
          time: "19-04-26 06:45",
          watch: "3742",
          title: "M头洗盘，大方向大趋势"
        },
        {
          id: 6,
          name: "吴俊琛",
          time: "19-03-27 17:28",
          watch: "3497",
          title: "说说我们是怎么抓到美锦能源的？"
        }
      ],
      commitText: "",
      body: {
        title: "",
        user: "",
        summary: "",
        content: ""
      }
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
    _get_Detail_(id) {
      let data = {
        articleId: id
      };
      this._netGet(API.article, data).then(res => {
        if (res.code === 0) {
          this.body = res.data;
          this.fullscreenLoading = false
          this.$emit('fullscreenLoading', false)
        }
      }).catch(err => {
        setTimeout(() => {
          this.fullscreenLoading = false
          this.$emit('fullscreenLoading', false)
        }, 2000)
      })
    }
  },
  created() {
    this._get_Detail_(this.$route.query.articleId);
  },
  components: {
    "v-list": List
  }
};
</script>
<style lang="less">
.detail {
  padding: 0 48px;
  padding-bottom: 28px;
  p {
    width: 100%;
    font-size: 14px;
    line-height: 28px;
    color: #333;
    font-weight: 400;
    word-break: normal;
    text-align: justify;
    text-justify: inter-ideograph;
    margin-top: 26px;
  }
  img {
    width: 585px;
    margin: 0 auto;
    margin-top: 8px;
  }
}
.commit {
  .textbody {
    padding: 0 20px;
    height: 206px;
    border-bottom: 1px solid #eee;
    .el-textarea {
      font-size: 12px;
      > textarea {
        height: 108px !important;
        background: #f4f4f4;
        width: 100%;
        padding: 10px;
        border: 1px solid #dcdcdc;
        outline: none;
        resize: none;
        font-size: 12px;
        line-height: 17px;
        border-radius: 2px;
      }
    }
    .btn {
      color: #fff;
      background: #ff4350;
      width: 70px;
      height: 28px;
      line-height: 28px;
      border-radius: 2px;
      float: right;
      font-family: PingFangSC-Medium;
      font-size: 14px;
      font-weight: 500;
      margin-top: 10px;
    }
  }
}
</style>
<style lang="less" scoped>
.article {
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 54px;
  .main {
    width: 860px;
    .head {
      width: 100%;
      height: 168px;
      background: #fff;
      box-shadow: 0px 2px 4px 2px rgba(225, 225, 225, 0.9);
      .top {
        height: 47px;
        line-height: 47px;
        border-bottom: 1px solid #e2e2e2;
        color: #666;
        font-size: 14px;
        font-weight: 400;
        font-family: PingFangSC-Regular;
        text-indent: 20px;
        display: flex;
        justify-content: flex-start;
        a {
          cursor: pointer;
          text-decoration: none;
          &:last-child {
            width: 200px;
            height: 30px;
            margin-left: 25px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .box {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .left {
          display: flex;
          .img {
            width: 80px;
            height: 80px;
            overflow: hidden;
            border-radius: 50%;
            margin-left: 20px;
            margin-top: 20px;
            > img {
              width: 100%;
              height: 100%;
            }
          }
          .text {
            margin-top: 30px;
            margin-left: 20px;
            > p {
              color: #666;
              font-size: 18px;
              line-height: 24px;
              font-weight: bold;
              > a {
                font-weight: 400;
                line-height: 24px;
                font-size: 14px;
                margin-left: 10px;
                color: #e81d2b;
              }
              &:last-child {
                color: #ff7e00;
                height: 28px;
                font-weight: 400;
                margin-top: 10px;
                line-height: 24px;
                font-size: 14px;
                width: 70px;
                height: 24px;
                color: #fff;
                text-align: center;
                background: rgba(255, 86, 21, 1);
                box-shadow: 2px 2px 6px 0 rgba(255, 134, 134, 0.58);
                border-radius: 2px;
                > i {
                  font-size: 12px;
                  padding-right: 5px;
                }
              }
            }
          }
        }
        .right {
          display: flex;
          .numCount {
            margin: 0 17px;
            margin-top: 55px;
            text-align: center;
            p {
              &:first-child {
                color: #666;
                font-size: 12px;
                line-height: 17px;
                font-weight: 400;
              }
              &:last-child {
                font-size: 20px;
                color: #ff7e00;
                height: 28px;
                line-height: 28px;
                font-weight: 400;
                margin-top: 4px;
              }
            }
          }
        }
      }
    }
    .content {
      width: 100%;
      box-shadow: 0px 2px 4px 2px rgba(225, 225, 225, 0.9);
      background: #fff;
      margin-top: 10px;
      .title {
        height: 100px;
        padding: 0 20px;
        border-bottom: 1px solid #e2e2e2;
        p {
          &:first-child {
            font-family: PingFangSC-Medium;
            font-size: 26px;
            font-weight: 500;
            height: 37px;
            line-height: 37px;
            color: #000;
            padding-top: 21px;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          &:last-child {
            display: flex;
            justify-content: space-between;
            span {
              margin-right: 20px;
              font-size: 12px;
              color: #666;
              height: 17px;
              line-height: 17px;
              margin-top: 8px;
              &:last-child {
                position: relative;
                margin-right: 0;
                color: #666;
                font-size: 12px;
                cursor: pointer;
                i {
                  font-size: 16px;
                  color: #666;
                }
                .phone {
                  margin: 0 5px;
                }
              }
              .red {
                color: #ff4350;
              }
            }
          }
        }
      }
      .atten {
        width: 820px;
        padding: 20px 0;
        background: #f8f8f8;
        margin: 0 auto;
        margin-top: 21px;
        position: relative;
        .atten_head {
          position: absolute;
          left: 42px;
          top: -12px;
          font-size: 18px;
          color: #000;
          font-weight: 400;
          height: 25px;
          line-height: 25px;
        }
        .atten_detail {
          width: 734px;
          line-height: 20px;
          font-size: 14px;
          color: #333;
          margin-left: 42px;
          word-break: normal;
          text-align: justify;
          text-justify: inter-ideograph;
          margin-bottom: 10px;
        }
      }
      .bottomList {
        background: #fff;
        list-style: none;
        display: flex;
        justify-content: space-around;
        width: 100%;
        padding-bottom: 44px;
        .bottomItem {
          width: 320px;
          cursor: pointer;
          height: 99px;
          background: #f1f1f1;
          padding: 10px 20px;
          p {
            &:first-child {
              color: #333;
              text-align: left;
              font-size: 20px;
              line-height: 28px;
              font-family: PingFangSC-Medium;
              font-weight: 600;
            }
            &:last-child {
              text-align: left;
              color: #666;
              margin-top: 8px;
              font-size: 16px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              line-height: 22px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
      .botom-box {
        height: 96px;
        background: #fff;
        > ul {
          list-style: none;
          display: flex;
          justify-content: center;
          li {
            width: 100px;
            height: 30px;
            line-height: 30px;
            background: #e1e1e1;
            color: #666;
            font-size: 14px;
            font-weight: 600;
            margin: 0 7px;
            &:first-child {
              i {
                margin-right: 2px;
              }
            }
            i {
              font-size: 14px;
            }
          }
        }
      }
    }
    .about {
      width: 860px;
      background: #fff;
      box-shadow: 0 2px 4px 2px rgba(225, 225, 225, 0.9);
      margin-top: 20px;
      .about-head {
        height: 41px;
        line-height: 41px;
        border-bottom: 1px solid #d8d8d8;
        font-size: 18px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        padding-left: 20px;
        text-align: left;
        > i {
          width: 4px;
          height: 17px;
          background: #ff4350;
          float: left;
          margin-top: 12px;
          margin-right: 6px;
        }
      }
      .body {
        list-style: none;
        display: flex;
        justify-content: center;
        li {
          margin-left: 20px;
          width: 260px;
          margin-top: 10px;
          &:first-child {
            margin-left: 0;
          }
          cursor: pointer;
          img {
            width: 100%;
            height: 195px;
          }
          p {
            margin-top: 14px;
            color: #333;
            font-size: 14px;
            line-height: 21px;
            font-weight: 400;
            height: 42px;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
    .commit {
      width: 860px;
      box-shadow: 0 2px 4px 2px rgba(225, 225, 225, 0.9);
      background: #fff;
      margin-top: 20px;
      .commit-head {
        display: flex;
        justify-content: space-between;
        height: 42px;
        line-height: 42px;
        .left {
          padding-left: 20px;
          span {
            color: #333;
            font-weight: 500;
            font-family: PingFangSC-Medium;
            font-size: 16px;
            margin-left: 6px;
            > i {
              width: 4px;
              height: 17px;
              background: #ff4350;
              float: left;
              margin-top: 12px;
              margin-right: 6px;
            }
          }
        }
        .right {
          padding-right: 20px;
          .commit-right {
            .text {
              color: #333;
              font-weight: 500;
              font-family: PingFangSC-Medium;
              font-size: 14px;
              margin-left: 16px;
              .red {
                color: #ff7e00;
              }
            }
          }
        }
      }
      .bottom-box {
        padding: 20px;
        p {
          text-align: center;
          font-size: 16px;
          color: #999;
          > i {
            font-size: 50px;
          }
        }
      }
    }
  }
}
</style>