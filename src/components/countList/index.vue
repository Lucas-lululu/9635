<template>
  <div class="count-list">
    <div class="count-list-box">
      <div class="name">老师：</div>
      <ul class="nav-name">
        <li class="nav-name-item">
          <a class="all">全部老师</a>
        </li>
        <li v-for="item in one" :key="item.id" class="nav-name-item">
          <a>{{item.name}}</a>
        </li>
      </ul>
      <div class="more" @click="_change_" v-if="!show">
        更多
        <i class="el-icon-arrow-down"></i>
      </div>
      <div class="more" @click="_change_" v-else>
        收起
        <i class="el-icon-arrow-up"></i>
      </div>
    </div>
    <div class="list-box" v-if="show">
      <ul>
        <li v-for="item in two" :key="item.id">
          <a>{{item.name}}</a>
        </li>
      </ul>
    </div>
    <div class="class" v-if="classShow">
      <div class="catalog">分类:</div>
      <ul class="nav_name">
        <li
          v-for="item in list"
          :key="item.id"
          @click="classId = item.id"
          :class="classId == item.id ? 'active' : ''"
        >{{item.name}}</li>
      </ul>
    </div>
    <div class="select">
      <span class="name">搜索：</span>
      <!-- <el-date-picker
        v-model="time"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>-->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    one: {
      type: Array
    },
    two: {
      type: Array
    }
  },
  data() {
    return {
      show: false,
      time: "",
      classId: 1,
      classShow: false,
      list: [
        {
          id: 1,
          name: "全部课程"
        },
        {
          id: 2,
          name: "公开课"
        },
        {
          id: 3,
          name: "精品课"
        },
        {
          id: 4,
          name: "订阅课"
        }
      ]
    };
  },
  methods: {
    _change_() {
      this.show = !this.show;
    }
  },
  mounted() {
    if (this.$route.name === "pccourseindex") {
      this.classShow = true;
    } else {
      this.classShow = false;
    }
  }
};
</script>
<style lang="less" scoped>
.count-list {
  background: #fff;
  width: 780px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 4px 1px rgba(225, 225, 225, 0.75);
  border-radius: 2px;
  margin-top: 12px;
  .count-list-box {
    display: flex;
    position: relative;
    padding: 10px 0;
    .name {
      font-size: 14px;
      color: rgba(153, 153, 153, 1);
      line-height: 28px;
      padding-left: 20px;
    }
    .nav-name {
      list-style: none;
      display: flex;
      .nav-name-item {
        font-size: 14px;
        color: #666666;
        line-height: 28px;
        padding: 0 15px;
        a {
          cursor: pointer;
          text-decoration: none;
        }
        .all {
          color: #ff4350;
        }
      }
    }
    .more {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 14px;
      color: rgba(51, 51, 51, 1);
      line-height: 28px;
      cursor: pointer;
      font-family: PingFangSC-Regular;
    }
  }
  .list-box {
    display: flex;
    flex-wrap: wrap;
    padding-left: 62px;
    > ul {
      list-style: none;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      width: 93%;
      li {
        font-size: 14px;
        color: #666666;
        line-height: 28px;
        padding: 0 15px;
      }
    }
  }
  .class {
    width: 100%;
    border-top: 1px solid #eeeeee;
    padding: 10px 0;
    background: #fff;
    line-height: 28px;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    .catalog {
      font-size: 14px;
      color: rgba(153, 153, 153, 1);
      height: 20px;
      line-height: 20px;
      padding-left: 20px;
    }
    .nav_name {
      list-style: none;
      display: flex;
      li {
        font-size: 14px;
        cursor: pointer;
        color: #666666;
        height: 20px;
        line-height: 20px;
        padding: 0 26px;
        &.active {
          color: #ff4350;
        }
      }
    }
  }
  .select {
    width: 100%;
    border-top: 1px solid #eeeeee;
    padding: 10px 0;
    display: flex;
    justify-content: flex-start;
    background: #fff;
    .name {
      font-size: 14px;
      color: rgba(153, 153, 153, 1);
      line-height: 28px;
      padding-left: 20px;
    }
  }
}
</style>