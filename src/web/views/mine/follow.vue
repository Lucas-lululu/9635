<template>
  <div>
    <v-head :title="title" />
    <div class="follow-list">
      <ul class="list">
        <li v-for="item in list" :key="item.teacherId">
          <div class="img">
            <img :src="item.avatarUrl" alt />
          </div>
          <span>{{item.nikeName}}</span>
        </li>
        <p class="more">加载完成</p>
      </ul>
    </div>
  </div>
</template>
<script>
import Headers from "./header";
import { List as API } from "@/assets/api/api";
export default {
  data() {
    return {
      title: "我的关注",
      list: []
    };
  },
  methods: {
    _get_Data_(userId = this.$cookie.get("userId"), lastId = 0) {
      let data = {
        userId,
        lastId
      };
      this.$api.post(API.follows, data).then(res => {
        if (res.code === 200) {
          this.list = res.data;
        }
      });
    }
  },
  created() {
    this._get_Data_();
  },
  components: {
    "v-head": Headers
  }
};
</script>
<style lang="less" scoped>
.follow-list {
  background: #ffffff;
  margin-top: 13px;
  .list {
    padding: 0 10px;
    li {
      display: flex;
      align-items: center;
      padding: 10px 0;
      .img {
        width: 60px;
        height: 60px;
        > img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      span {
        font-size: 14px;
        padding-left: 12px;
      }
    }
    .more {
      border-top: 1px solid #f5f5f5;
      font-size: 14px;
      text-align: center;
      line-height: 22.5px;
      padding: 11.25px;
    }
  }
}
</style>