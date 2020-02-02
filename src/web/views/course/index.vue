<template>
  <div>
    <div class="top">
      <div class="nav">
        <a
          @click="_changeInputClass_(item.id)"
          v-for="item in topList"
          :key="item.id"
          type="button"
          class="item"
          :class="inputId === item.id ? 'active': ''"
        >{{item.title}}</a>
      </div>
    </div>
    <div class="content">
      <div class="course-list">
        <div class="nav_list">
          <a href="javascripts:;" :class="aId === 0 ? 'active' : ''" @click="_changeClass_(0)">全部</a>
          <a href="javascripts:;" :class="aId === 1 ? 'active' : ''" @click="_changeClass_(1)">已报名</a>
          <a
            href="javascripts:;"
            :class="aId === 2 ? 'active' : ''"
            @click="_changeClass_(2)"
            v-if="inputId === 0"
          >未报名</a>
        </div>
        <ul class="courselists">
          <li class="item" v-for="(item,index) in list" :key="index">
            <div class="img" @click="_go_detail_(item)">
              <img :src="item.courseImage" alt />
            </div>
            <div class="content">
              <p class="title" @click="_go_detail_(item)">{{item.courseName}}</p>
              <p class="bottom" @click="_go_detail_(item)">
                <span>{{item.user.nikeName}}</span>
              </p>
              <p class="bottom" @click="_go_detail_(item)">
                <span>{{item.endTime}}</span>
              </p>
              <p class="shoucang mintui mintui-collect"></p>
            </div>
          </li>
        </ul>
        <p class="more" v-if="show">加载完成</p>
      </div>
    </div>
    <v-footer-menu />
  </div>
</template>
<script>
import FooterMenu from "@/web/footer";
import { Course as API } from "@/assets/api/api";
export default {
  data() {
    return {
      topList: [
        {
          id: 1,
          title: "公开课"
        },
        {
          id: 2,
          title: "精品课"
        },
        {
          id: 3,
          title: "订阅课"
        }
      ],
      aId: 0,
      inputId: 1,
      filter: 0,
      lastId: 0,
      list: [],
      show: false
    };
  },
  methods: {
    _go_detail_(obj) {
      // console.log(obj)
      this.$router.push(`course/detail?courseId=${obj.courseId}`)
    },
    _changeInputClass_(id) {
      this.inputId = id;
      this.aId = 0;
      this._getCourse_(this.inputId);
    },
    _changeClass_(id) {
      this.aId = id;
    },
    _getCourse_(id) {
      let data = {
        filter: this.filter,
        lastId: this.lastId,
        type: id
      };
      this._netGet(API.courseList, data).then(res => {
        if (res.code === 0) {
          this.list = res.data;
        }
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.show = true;
    });
  },
  components: {
    "v-footer-menu": FooterMenu
  },
  created() {
    this._getCourse_(1);
  }
};
</script>
<style lang="less" scoped>
.top {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  background: #fff;
  overflow: hidden;
  .nav {
    height: 32px;
    background: #ffffff;
    text-align: center;
    margin: 15px 17px 7px 17px;
    overflow: hidden;
    .item {
      font-size: 16px;
      line-height: 20px;
      color: #333333;
      height: 32px;
      margin: 0 11.5px;
      &.active {
        font-size: 18px;
        color: #e70e1d;
      }
    }
  }
}
.content {
  .course-list {
    display: block;
    background: #ffffff;
    .nav_list {
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2);
      z-index: 99;
      position: fixed;
      top: 52.92px;
      width: 100%;
      height: 35px;
      line-height: 35px;
      background: #f5f5f5;
      font-size: 13px;
      text-align: center;
      a {
        margin: 0 22.5px;
        color: #333;
        font-size: 13p;
        display: inline-block;
        height: 32px;
        text-decoration: none;
        &.active {
          border-bottom: 3px solid #e70e1d;
          color: #e70e1d;
        }
      }
    }
    .courselists {
      padding-top: 90px;
      overflow-y: scroll;
      .item {
        padding: 12.5px 0px;
        border-bottom: 1px solid #eee;
        overflow: hidden;
        margin: 0px 17px;
        .img {
          margin-top: 3.75px;
          width: 110.5px;
          height: 70.5px;
          float: left;
          position: relative;
          overflow: hidden;
          background: #999999;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        .content {
          width: 221.25px;
          float: right;
          position: relative;
          .title {
            font-size: 15px;
            line-height: 22.5px;
            overflow: hidden;
            color: #333;
            text-align: left;
          }
          p:nth-child(2) {
            margin-top: 2.25px;
          }
          .bottom {
            display: block;
            overflow: hidden;
            span {
              float: right;
              font-size: 0.32rem;
              color: #999;
              font-weight: 400;
              display: block;
              float: left;
            }
          }
          .shoucang {
            position: absolute;
            right: 0;
            bottom: 1.875px;
            font-size: 18px;
            color: #666;
          }
        }
      }
    }
    .more {
      font-size: 14px;
      text-align: center;
      line-height: 22.5px;
      padding: 11.25px;
    }
  }
}
</style>
