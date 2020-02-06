<template>
  <div>
    <v-header :title="title" />
    <div class="collection-content-list">
      <div class="collection-content-header">
        <ul>
          <li
            v-for="item in list"
            :key="item.id"
            @click="_change_(item.id)"
            :class="classId == item.id ? 'active' : ''"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="collection-list" v-if="show">
        <div class="article">
          <p class="mintui mintui-ku"></p>
          <p>您暂时没有收藏~</p>
        </div>
      </div>
      <ul class="list" v-else>
        <li class="item" v-for="item in collectionList" :key="item.courseId">
          <div class="left">
            <img :src="item.courseImage" alt />
          </div>
          <div class="right">
            <p class="title">{{item.courseName}}</p>
            <div class="box">
              <div class="left-box">
                <p>{{item.user.nikeName}}</p>
                <p>{{item.startTime | formatDate}}</p>
              </div>
              <p class="icon mintui mintui-shoucang2"></p>
            </div>
          </div>
        </li>
        <p class="more">加载完成</p>
      </ul>
    </div>
  </div>
</template>
<script>
import { List as API } from "@/assets/api/api";
import Headers from "./header";
export default {
  data() {
    return {
      title: "我的收藏",
      list: [
        {
          id: 3,
          name: "资讯"
        },
        {
          id: 2,
          name: "往期视频"
        },
        {
          id: 1,
          name: "课程"
        }
      ],
      show: true,
      collectionList: [],
      classId: 3
    };
  },
  methods: {
    _change_(id) {
      this.classId = id;
      this._get_Data_(this.classId);
    },
    _get_Data_(type) {
      let data = {
        type
      };
      this.$api.post(API.collectionList, data).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.collectionList = res.data;
          if (this.collectionList.length > 0) {
            this.show = false;
          } else {
            this.show = true;
          }
        }
      });
    }
  },
  components: {
    "v-header": Headers
  },
  created() {
    this._get_Data_(3);
  }
};
</script>
<style lang="less" scoped>
.collection-content-list {
  width: 100%;
  height: 100%;
  .collection-content-header {
    width: 100%;
    height: 35px;
    background: #f5f5f5;
    position: fixed;
    top: 48px;
    z-index: 999;
    ul {
      list-style: none;
      padding: 0 90px;
      li {
        float: left;
        margin: 0 13px;
        text-align: center;
        font-size: 14px;
        line-height: 35px;
        &.active {
          color: #e70e1d;
          border-bottom: 2px solid #e70e1d;
        }
      }
    }
  }
  .collection-list {
    margin-top: 83px;
    .article {
      width: 100%;
      padding-top: 90px;
      text-align: center;
      background: #f5f5f5;
      line-height: 20px;
      font-size: 14px;
      color: #4a4a4a;
      font-weight: 400;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        &:last-child {
          padding-left: 10px;
        }
      }
    }
  }
  .list {
    list-style: none;
    margin-top: 35px;
    background: #fff;
    .item {
      display: flex;
      padding: 12px;
      border-bottom: 1px solid #f5f5f5;
      .left {
        width: 110px;
        height: 70px;
        border-radius: 1px;
        background: #f5f5f5;
        > img {
          width: 100%;
          height: 100%;
          border-radius: 1px;
        }
      }
      .right {
        padding-left: 12px;
        width: 225px;
        .title {
          font-size: 16px;
          text-align: left;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 21px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .box {
          display: flex;
          justify-content: space-between;
          padding-top: 6px;
          .icon {
            color: #ee762e;
            font-size: 16px;
          }
          .left-box {
            p {
              height: 17px;
              text-align: left;
              font-size: 12px;
              font-family: PingFangSC-Regular;
              font-weight: 600;
              color: rgba(153, 153, 153, 1);
              line-height: 17px;
            }
          }
        }
      }
    }
    .more {
      font-size: 14px;
      text-align: center;
      line-height: 22.5px;
      padding: 11.5px;
    }
  }
}
</style>