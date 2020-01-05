<template>
  <div class="menu_bottom">
    <ul>
      <li class="menu_index" v-for="item in list" :key="item.id" @click="_go_(item.to)">
        <p :class="`mintui ${item.url}`" :style="aId == item.id ? 'color: red' : ''"></p>
        <p
          class="title"
          :class="aId == item.id ? 'active' : ''"
          @click="_changeClass_(item.id)"
        >{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 0,
          title: "首页",
          url: "mintui-yemian-copy-copy",
          to: "/web/index"
        },
        {
          id: 1,
          title: "课程",
          url: "mintui-liebiao",
          to: "/web/course"
        },
        {
          id: 2,
          title: "老师",
          url: "mintui-shipin",
          to: "/web/teacher"
        },
        {
          id: 3,
          title: "我的",
          url: "mintui-wode",
          to: "/web/mine"
        }
      ],
      route: "",
      aId: 0
    };
  },
  methods: {
    _go_(path) {
      this.$router.push(path);
    },
    _changeClass_(id) {
      this.aId = id;
      if (this.aId === 3) {
        this.$emit("aId", this.aId);
      }
    }
  },
  watch: {
    route() {
      if (this.route === "webindex") {
        this.aId = 0;
      } else if (this.route === "webcourse") {
        this.aId = 1;
      } else if (this.route === "webteacherindex") {
        this.aId = 2;
      } else if (this.route === "webmineindex") {
        this.aId = 3;
      }
    }
  },
  created() {
    this.$cookie.set("authorization", "2b5fe3d34e364a4f8ee9444bb3014965");
    this.route = this.$route.name;
  }
};
</script>
<style lang="less">
ul {
  list-style: none;
}
.menu_bottom {
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  border-top: 1px solid #eee;
  ul {
    .menu_index {
      width: 25%;
      float: left;
      text-align: center;
      cursor: pointer;
      color: #999;
      height: 100%;
      p {
        font-size: 12px;
      }
      p:first-child {
        font-size: 20px !important;
        padding-top: 10px;
      }
      .title {
        &.active {
          color: #e70e1d;
        }
      }
    }
  }
}
</style>