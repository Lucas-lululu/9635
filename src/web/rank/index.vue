<template>
  <div class="rank-lists">
    <div class="tabs">
      <a
        @click="_changeClass_(item.id)"
        :class="aId == item.id ? 'active' : ''"
        v-for="item in tabs"
        :key="item.id"
      >{{item.name}}</a>
    </div>
    <ul class="lists">
      <li @click="_go_teacher_detail_(item.userId)" class="li" v-for="item in list" :key="item.userId">
        <div class="avatar">
          <a>
            <img :src="item.avatarUrl" alt />
          </a>
        </div>
        <div class="introduce">
          <p class="name">{{item.nikeName}}</p>
          <p class="intro">{{item.msg}}</p>
        </div>
        <div class="btn-follow">
          <p>
            <i class="mintui mintui-hot"></i>
            {{item.data}}
          </p>
          <a v-if="item.follow" class="followTeacher">已关注</a>
          <a v-else>点击关注</a>
        </div>
      </li>
    </ul>
    <p class="more" @click="_go_">查看更多</p>
  </div>
</template>
<script>
export default {
  props: {
    rank: {
      type: Array | Object
    }
  },
  data() {
    return {
      tabs: [
        {
          id: 0,
          name: "人气直播"
        },
        {
          id: 1,
          name: "粉丝排行"
        },
        {
          id: 2,
          name: "新晋老师"
        }
      ],
      list: [],
      aId: 0
    };
  },
  methods: {
    _go_() {
      this.$router.push("/web/teacher");
    },
    _changeClass_(id) {
      if (id === undefined) {
        id = 0;
      }
      this.aId = id;
      if (this.$route.name === "webteacherindex") {
        this.$emit("aId", this.aId);
      } else {
        if (this.aId === 0) {
          this.list = this.rank.hotRank;
        }
        if (this.aId === 1) {
          this.list = this.rank.fansRank;
        }
        if (this.aId === 2) {
          this.list = this.rank.timeRank;
        }
      }
    }
  },
  watch: {
    rank(v) {
      if (this.$route.name === "webteacherindex") {
        this.list = this.rank;
      } else {
        this.list = this.rank.hotRank;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.rank-lists {
  background: #fff;
  .tabs {
    background-color: #fff;
    padding: 20px 19px 15px 19px;
    display: flex;
    justify-content: space-between;
    a {
      display: inline-block;
      font-size: 17px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.4);
      line-height: 17px;
      border-bottom: 2px solid #fff;
      padding-bottom: 10px;
      text-decoration: none;
      &.active {
        border-bottom: 2px solid #4a4a4a;
        color: #4a4a4a;
      }
    }
  }
  .lists {
    padding: 0 19px 0 19px;
    background: #fff;
    .li {
      border-bottom: 1px solid #eaeaea;
      padding: 15px 0;
      display: flex;
      clear: both;
      height: 63px;
      .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        float: left;
        margin-right: 10px;
        > a {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: block;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
      .introduce {
        float: left;
        width: 165px;
        overflow: hidden;
        white-space: nowrap;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        .name {
          font-size: 17px;
          font-weight: 500;
          color: #4a4a4a;
          line-height: 35px;
          margin-bottom: 5px;
          text-align: left;
        }
        .intro {
          font-size: 14px;
          font-weight: 400;
          color: #9b9b9b;
          line-height: 14px;
          overflow: hidden;
          white-space: nowrap;
          -ms-text-overflow: ellipsis;
          text-overflow: ellipsis;
        }
      }
      .btn-follow {
        float: right;
        > p {
          line-height: 35px;
          color: #4a4a4a;
          font-weight: 400;
          font-size: 14px;
        }
        > a {
          font-size: 14px;
          display: block;
          font-weight: 400;
          color: #ff4350;
          text-align: center;
          border: 1px solid #ffb0b6;
          padding: 3px 14px;
          border-radius: 8px;
          text-decoration: none;
        }
        .followTeacher {
          color: #666;
          border: 0;
        }
      }
    }
  }
  .more {
    font-size: 14px;
    font-weight: 400;
    color: #ff4350;
    text-align: center;
    margin-top: 15px;
    height: 34px;
    display: block;
  }
}
</style>
