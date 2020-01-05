<template>
    <div class="hrhg_index_teacher_live">
      <!-- 左边 -->
      <div class="left">
        <div class="head">
          <div>
            <i></i>
            <span>名师直播</span>
          </div>
          <p @click="_router_go_(path)">查看更多>></p>
        </div>
        <!-- 内容 -->
        <ul class="left-list">
          <li v-for="item in teacherList" :key="item.userId">
            <div class="img">
              <img :src="item.avatarUrl" alt="" class="headImg">
              <img class="log" src="https://www.9635.com.cn/images/icon/bigV.png" alt="">
            </div>
            <div class="name">
              <span>{{item.nikeName}}</span>
              <span>好人好股</span>
              <div class="live-name">{{item.nikeName}}的直播间</div>
              <div class="font">
                <span>{{item.level}}</span>
                粉丝</div>
            </div>
            <!-- 按钮 -->
            <div class="vip" v-if="item.id == 1 || item.id == 3">
              <img src="https://www.9635.com.cn/file/vip.png" alt="">
            </div>
            <span class="btn">立即观看</span>
          </li>
        </ul>
      </div>
      <!-- 右边直播排行 -->
      <div class="right">
        <div class="head">
          <div class="box">
            <img src="https://www.9635.com.cn/images/icon/zhibo.png" class="img">
            <span>直播排行</span>
          </div>
          <div class="more" @click="_router_go_('live')">更多>></div>
        </div>
        <ul class="right-list">
          <li class="right-list-item" v-for="item in rightTeacherList" :key="item.id">
            <div class="box">
              <span class="num">{{item.id}}.</span>
              <span class="name">{{item.name}}</span>
              <span class="teacher">{{item.post}}</span>
            </div>
            <p class="face">粉丝数：{{item.face}}</p>
          </li>
        </ul>
      </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    teacherList: {
      type: Array
    },
    rightTeacherList: {
      type: Array
    },
    path: {
      type: String
    }
  },
  methods: {
    _router_go_(path) {
      this.$router.push(path)
    }
  }
}
</script>
<style lang="less" scoped>
.hrhg_index_teacher_live {
  width: 100%;
  margin-top: 30px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .left {
    width: 860px;
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 0px 6px 0px rgba(187,187,187,0.38);
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
          background: rgba(231,14,29,1);
        }
        > span {
          height: 37px;
          font-size: 26px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
          color: rgba(231,14,29,1);
          line-height: 37px;
          padding-top: 20px;
          padding-left: 6px;
        }
      }
      > p {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(102,102,102,1);
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
      li {
        position: relative;
        width: 360px;
        padding: 20px;
        background: rgba(255,255,255,1);
        margin-left: 20px;
        margin-bottom: 20px;
        border-radius: 2px;
        display: flex;
        border: 1px solid rgba(228,226,226,1);
        .img {
          width: 100px;
          height: 100px;
          position: relative;
          .headImg {
            border-radius: 50%;
            width: 100%;
            height: 100%;
            transition: all 0.2s;
            &:hover {
              transform: scale(1.1);
            }
          }
          .log {
            position: absolute;
            bottom: 3px;
            right: calc(50% - 48px);
          }
        }
        .name {
          margin-top: 10px;
          display: inline-block;
          padding-left: 20px;
          span {
            &:first-child {
              height: 24px;
              font-size: 18px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              color: rgba(0,0,0,1);
              line-height: 24px;
            }
            &:nth-child(2) {
              height: 20px;
              font-size: 14px;
              font-family: PingFangSC-Regular;
              font-weight: 400;
              color: rgba(102,102,102,1);
              line-height: 20px;
              padding-left: 10px;
            }
          }
          .live-name {
            height: 20px;
            font-size: 14px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(102,102,102,1);
            line-height: 20px;
            text-align: left;
            padding-top: 10px;
          }
          .font {
            padding-top: 10px;
            text-align: left;
            span {
              &:first-child {
                color: #FF7E00;
                font-size: 18px;
              }
            }
          }
        }
        .vip {
          position: absolute;
          right: 20px;
        }
        .btn {
          position: absolute;
          top: 90px;
          font-size: 14px;
          font-weight: 400;
          color: #fff;
          padding: 3px 13px;
          background: rgba(226,5,5,1);
          border-radius: 2px;
          right: 24px;
          cursor: pointer;
        }
      }
      .video-item {
        cursor: pointer;
        padding: 0;
        width: 264px;
        height: 252px;
        background: rgba(255,255,255,1);
        float: left;
        margin-bottom: 16px;
        margin-left: 14px;
        position: relative;
        transition: all 0.2s;
        border: 1px solid rgba(229,229,229,1);
        &:hover {
          box-shadow: 0px 2px 4px 0 rgba(225,225,225,0.9);
        }
        .video-box {
          width: 100%;
          height: 148px;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .hrhg_index_videodesc {
          padding: 0 10px;
          position: absolute;
          top: 148px;
          left: 0;
          width: 90%;
          p {
            text-align: left;
            &:first-child {
              font-family: PingFangSC-Regular;
              width: 100%;
              padding-top: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 16px;
              line-height: 22px;
              height: 22px;
              color: #333333;
            }
            &:nth-child(2) {
              font-family: PingFangSC-Regular;
              width: 100%;
              height: 22px;
              line-height: 22px;
              padding: 10px 0;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 16px;
              color: #333;
            }
            &:last-child {
              font-size: 12px;
              height: 17px;
              line-height: 17px;
              font-family: PingFangSC-Regular;
              color: #333333;
              display: flex;
              justify-content: space-between;
              .first {
                > i {
                  color: #FF7E00;
                }
                > span {
                  padding-left: 5px;
                }
              }
              .last {
                > i {
                  color: #FF7E00;
                }
                > span {
                  padding-left: 5px;
                }
              }
            }
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
            }
            > .watch {
              font-size: 12px;
              font-family: PingFangSC-Regular;
              font-weight: 500;
              color: #666666;
              line-height: 27px;
              color: #FF7E00;
              margin-left: 42%;
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
  .right {
    width: 320px;
    height: 388px;
    background: #ffffff;
    box-shadow: 0px 0px 6px 0px rgba(187,187,187,0.38);
    .head {
      padding: 0px 13px;
      height: 65px;
      line-height: 65px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .box {
        display: flex;
        justify-content: center;
        align-items: center;
        .img {
          width: 20px;
          height: 20px;
        }
        span {
          height: 25px;
          font-size: 18px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(0,0,0,1);
          line-height: 25px;
          padding-left: 6px;
        }
      }
      .more {
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(102,102,102,1);
        line-height: 20px;
      }
    }
    .right-list {
      list-style: none;
      padding: 0 14px;
      .right-list-item {
        padding: 13px 0;
        display: flex;
        justify-content: space-between;
        vertical-align: middle;
        border-top: 1px solid #EEEEEE;
        .box {
          height: 22px;
          font-size: 16px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #000000;
          line-height: 22px;
          cursor: pointer;
          .num {
            height: 25px;
            font-size: 18px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: #000;
            line-height: 25px;
          }
          .name {
            padding-left: 5px;
          }
          .teacher {
            height: 17px;
            font-size: 12px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(102,102,102,1);
            line-height: 17px;
            padding-left: 15px;
          }
        }
        .face {
          height: 17px;
          font-size: 12px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(254,103,46,1);
          line-height: 17px;
          padding-top: 8px;
        }
        .video-right-i {
          .num {
            font-size: 14px;
            width: 20px;
            height: 20px;
            font-weight: 500;
            border-radius: 50%;
            background: #999999;
            line-height: 20px;
            display: inline-block;
            text-align: center;
            color: #fff;
          }
          .else {
            background: #FF7E00;
          }
        }
        .video-right-title {
          padding-left: 15px;
          display: inline-block;
          font-size: 16px;
          color: #000;
          padding-left: 10px;
          width: 240px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          height: 20px;
          line-height: 20px;
          font-weight: 400;
          text-align: left;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>