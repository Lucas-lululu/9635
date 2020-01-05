<template>
  <div class="subject">
    <div class="hrhg_index_teacher_live" style="height: 100%">
      <!-- 左边 -->
      <div class="left" style="height: 100%">
        <div class="head" v-if="!show">
          <div>
            <i></i>
            <span>视频精选</span>
          </div>
          <p @click="_router_go_('teacher')">查看更多>></p>
        </div>
        <!-- 内容 -->
        <ul class="left-list">
          <li v-for="item in list" :key="item.id" class="video-item">
            <div class="video-box">
              <img :src="item.courseImage" alt />
            </div>
            <div class="hrhg_index_content">
              <P class="title">{{item.courseName}}</P>
              <P class="content">{{item.introduce}}</P>
              <p class="bottom">
                <span class="name">{{item.user.nikeName}}</span>
                <span class="watch">
                  {{item.watchCount}}
                  <span class="span">人访问</span>
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array
    }
  },
  data() {
    return {
      show: false
    };
  },
  mounted() {
    if (this.$route.name === "pccourseindex") {
      this.show = true;
    } else {
      this.show = false;
    }
  }
};
</script>
<style lang="less" scoped>
.hrhg_index_teacher_live {
  width: 100%;
  margin-top: 30px;
  height: 388px;
  display: flex;
  justify-content: space-between;
  .left {
    width: 100%;
    height: 388px;
    .head {
      width: 100%;
      height: 65px;
      line-height: 65px;
      display: flex;
      justify-content: space-between;
      > div {
        display: flex;
        > i {
          width: 4px;
          height: 26px;
          display: block;
          margin-left: 20px;
          margin-top: 26px;
          background: rgba(231, 14, 29, 1);
        }
        > span {
          height: 37px;
          font-size: 26px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          color: rgba(231, 14, 29, 1);
          line-height: 37px;
          padding-top: 20px;
          padding-left: 6px;
        }
      }
      > p {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 20px;
        padding-top: 29px;
        padding-right: 20px;
        cursor: pointer;
      }
    }
    .left-list {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      .video-item {
        cursor: pointer;
        padding: 0;
        width: 221px;
        height: 252px;
        background: rgba(255, 255, 255, 1);
        float: left;
        margin-right: 16px;
        margin-top: 16px;
        position: relative;
        transition: all 0.2s;
        border: 1px solid rgba(229, 229, 229, 1);
        &:nth-child(4n) {
          margin-right: 0;
        }
        &:hover {
          box-shadow: 0 2px 4px 0 rgba(225, 225, 225, 0.9);
        }
        .video-box {
          width: 100%;
          height: 148px;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .hrhg_index_content {
          padding: 0 10px;
          position: absolute;
          top: 148px;
          left: 0;
          width: 90%;
          .title {
            height: 26px;
            font-size: 16px;
            font-family: PingFangSC-Medium;
            font-weight: 600;
            line-height: 26px;
            padding-top: 10px;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .content {
            text-align: left;
            height: 40px;
            font-size: 14px;
            font-family: PingFangSC-Regular;
            font-weight: 500;
            color: #666666;
            line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .bottom {
            > .name {
              float: right;
              height: 27px;
              font-size: 12px;
              font-family: PingFangSC-Regular;
              font-weight: 500;
              color: #666666;
              margin: 0;
              padding: 0;
              line-height: 27px;
              margin-left: 10px;
            }
            > .watch {
              font-size: 12px;
              font-family: PingFangSC-Regular;
              font-weight: 500;
              color: #666666;
              line-height: 27px;
              color: #ff7e00;
              float: right;
              margin-left: 10px;
              .span {
                font-size: 12px;
                font-family: PingFangSC-Regular;
                font-weight: 500;
                color: #666666;
                line-height: 27px;
                color: #666;
              }
            }
          }
        }
      }
    }
  }
}
.cooperation {
  width: 100%;
  height: 238px;
  background: #fff;
  margin-top: 30px;
  box-shadow: 0px 2px 4px 2px rgba(225, 225, 225, 0.9);
  .hrhg_index_tit {
    width: 100%;
    height: 65px;
    line-height: 65px;
    display: flex;
    justify-content: flex-start;
    .hrhg_index_teacher_tit {
      width: 4px;
      height: 26px;
      display: block;
      float: left;
      margin-top: 26px;
      margin-left: 20px;
      background: rgba(231, 14, 29, 1);
    }
    span {
      height: 37px;
      font-size: 26px;
      font-family: PingFangSC-Semibold;
      font-weight: 600;
      color: rgba(231, 14, 29, 1);
      line-height: 37px;
      padding-top: 20px;
      padding-left: 6px;
    }
  }
  .logList {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    .log-item {
      width: 184px;
      height: 70px;
      float: left;
      margin: 0 0 14px 10px;
      cursor: pointer;
      border: 1px solid #dcdcdc;
      .img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>