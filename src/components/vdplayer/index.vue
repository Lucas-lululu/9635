<template>
  <!-- <client-only> -->
  <d-player
    v-if="url"
    ref="dplayer"
    class="dplayer"
    :url="url"
    :pic="pic"
    :type="type"
    :options="options"
    @ended="ended"
    @play="playCallback"
    @pause="pauseCallback"
  ></d-player>
  <!-- </client-only> -->
</template>

<script>
// userAgent

import VueDPlayer from "vue-dplayer";
import "vue-dplayer/dist/vue-dplayer.css";
import UserAgents from "@/utils/UserAgents";

export default {
  name: "Player",
  props: {
    pic: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    }
    // id: {
    //     type: Number,
    //     default: 0
    // }
  },
  data() {
    return {
      curl: ""
    };
  },
  components: {
    DPlayer: VueDPlayer
  },
  computed: {
    watchUrl() {
      return this.url.replace("http:", window.location.protocol);
    },
    options() {
      /* 在ios端type要为normal，解决在ios端会显示"Error：Hls is not supported"的问题 */
      const type = UserAgents.isIos === true ? "normal" : "auto";
      return {
        video: {
          url: this.url,
          pic: this.pic,
          type
        },
        lang: "zh-cn",
        autoplay: false,
        preload: "metadata", // 视频预加载
        mutex: true // 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
      };
    }
  },
  mounted() {
    this.setVideoAttr();
  },
  methods: {
    setVideoAttr() {
      this.$nextTick(() => {
        if (UserAgents.isMobile) {
          const _dom = this.$refs.dplayer.$el.querySelectorAll("video")[0];
          _dom.setAttribute("x5-playsinline", true);
          _dom.setAttribute("playsinline", true);
          _dom.setAttribute("webkit-playsinline", "");
          _dom.setAttribute("x5-video-player-type", "h5-page");
        }
      });
    },
    setVideoWrapper() {
      this.$nextTick(() => {
        const v = this.$refs.dplayer.$el.querySelectorAll("video")[0];
        if (v) {
          // 产品规定 页面中只会有一个 <video>
          const target = v;
          // 防止重复创建 wrapper
          if (target.parentNode.className === "video-wrapper") return;
          // 清除 <video> 播放工具栏
          target.controls = "";
          target.className = "video-hack";
          // 创建播放按钮
          const btn = document.createElement("i");
          btn.className = "video-play_btn iconfont icon-play";
          // 创建容器
          const wrap = document.createElement("div");
          wrap.className = "video-wrapper";
          wrap.appendChild(btn);
          wrap.appendChild(target.cloneNode());
          // 插入容器并删除原本的 <video>
          target.parentNode.insertBefore(wrap, target);
          target.parentNode.removeChild(target);
        }
      });
    },
    ended() {
      if (!UserAgents.isIos) {
        this.$refs.dplayer.dp.play();
        setTimeout(() => {
          this.$refs.dplayer.dp.pause();
        }, 100);
      }
    },
    play() {
      this.$refs.dplayer.dp.play();
    },
    pause() {
      this.$refs.dplayer.dp.pause();
    },
    playCallback() {
      const time = this.$refs.dplayer.dp.video.currentTime; // 已播放时间
      const status = this.$refs.dplayer.dp.video.paused; // 是否暂停
      const obj = {
        time,
        id: this.id,
        status
      };
      this.$emit("playCallback", obj);
    },
    pauseCallback() {
      const status = this.$refs.dplayer.dp.video.paused; // 是否暂停
      const obj = {
        id: this.id,
        status
      };
      this.$emit("pauseCallback", obj);
    },
    destroyed() {
      this.$refs.dplayer.dp.destroy();
    }
  }
};
</script>

<style lang="less">
.dplayer {
  width: 100%;
  height: 100%;
  position: relative;
}
.dplayer-video-wrap {
  width: 100% !important;
}
.dplayer-menu {
  display: none !important;
}
.dplayer-setting {
  display: none !important;
}
.dplayer-full .dplayer-full-in-icon {
  display: none !important;
}
</style>
