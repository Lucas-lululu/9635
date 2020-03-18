<template>
  <div class="article" v-loading.fullscreen.lock="fullscreenLoading">
    <v-head />
    <div class="main">
      <div class="left-box">
        <div class="head">
          <span>资讯</span>
          <span>带你了解更多精彩内容</span>
        </div>
        <ul class="list">
          <li v-for="item in list" :key="item.articleId" class="item" @click="_go_(item)">
            <img :src="item.articleImg[0]" alt />
            <div class="box">
              <p>{{item.title}}</p>
              <p>{{item.summary}}</p>
              <p>
                <img :src="item.user.avatarUrl" alt />
                <span>{{item.user.nikeName}}</span>
                <span>{{item.time | formatDate}}</span>
                <span>{{item.commentCount}}条评论</span>
                <span>{{item.watchCount}}人阅读</span>
              </p>
            </div>
          </li>
        </ul>
        <!-- <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>-->
      </div>
      <div class="right-box">
        <v-list :list="topList" :icon="'mintui-zuire'" :name="'最热文章'" />
        <v-list :list="topList" :icon="'mintui-shandian'" :name="'最新文章'" style="margin-top: 10px" />
      </div>
    </div>
  </div>
</template>
<script>
import Head from "@/components/indexAdview";
import List from "@/components/list";
import { List as API } from "@/assets/api/api";
export default {
  data() {
    return {
      fullscreenLoading: true,
      list: [],
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
      ]
    };
  },
  methods: {
    _go_(obj) {
      this.$router.push(
        `/pc/article/detail?articleId=${obj.id}&teacherId=${
          obj.user.userId
        }`
      );
    },
    _get_list_(type = 0, today = false, lastId = 0) {
      let data = {
        type,
        today,
        lastId
      };
      this._netGet(API.articleList, data).then(res => {
        if (res.code === 0) {
          this.list = res.data.splice(0, 6);
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
  components: {
    "v-head": Head,
    "v-list": List
  },
  created() {
    this._get_list_();
  }
};
</script>
<style lang="less">
.el-pagination {
  .el-pager {
    li {
      margin: 0 10px !important;
      font-size: 12px !important;
      min-width: 33px !important;
      height: 28px;
      border-radius: 4px !important;
      line-height: 28px !important;
    }
    .more {
      &:before {
        line-height: 0px !important;
      }
    }
  }
  button {
    min-width: 33px !important;
    height: 28px;
    > .el-icon {
      font-size: 12px !important;
    }
  }
}
</style>
<style lang="less" scoped>
.article {
  .main {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    margin-top: 26px;
    display: flex;
    .left-box {
      width: 860px;
      .head {
        display: flex;
        justify-content: flex-start;
        padding-top: 6px;
        padding-left: 20px;
        background: #fff;
        span {
          &:first-child {
            font-size: 26px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            color: #000;
            height: 55px;
            line-height: 65px;
            // display: block;
          }
          &:last-child {
            background: url(https://www.9635.com.cn/images/arrow_line.png);
            background-size: 100% 100%;
            display: block;
            font-size: 14px;
            color: #fff;
            font-weight: 600;
            line-height: 39px;
            width: 202px;
            height: 42px;
            text-indent: -20px;
            margin-top: 13px;
            margin-left: 9px;
          }
        }
      }
      .list {
        list-style: none;
        padding: 0 20px;

        background: #fff;
        .item {
          height: 150px;
          padding: 20px 0;
          border-bottom: 1px solid #eee;
          display: flex;
          cursor: pointer;
          > img {
            width: 200px;
            height: 150px;
          }
          > .box {
            margin-left: 14px;
            width: 605px;
            p {
              &:first-child {
                font-family: PingFangSC-Medium;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #000;
                font-size: 18px;
                height: 52px;
                text-align: left;
                line-height: 52px;
                font-weight: 500;
              }
              &:nth-child(2) {
                font-size: 12px;
                text-align: left;
                color: #666;
                font-weight: 400;
                width: 100%;
                font-family: PingFangSC-Regular;
                height: 44px;
                line-height: 22px;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              &:last-child {
                color: #666;
                font-size: 12px;
                font-weight: 400;
                height: 24px;
                line-height: 24px;
                margin-top: 20px;
                > span {
                  margin-left: 14px;
                  &:nth-child(2) {
                    float: left;
                  }
                  &:nth-child(3) {
                    float: left;
                  }
                  &:nth-child(4) {
                    float: right;
                  }
                  &:last-child {
                    float: right;
                  }
                }
                > img {
                  width: 24px;
                  height: 24px;
                  float: left;
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }
    }
    .right-box {
      width: 320px;
      margin-left: 20px;
    }
  }
}
</style>