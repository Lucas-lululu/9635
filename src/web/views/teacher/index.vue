<template>
  <div class="teacher" v-loading.fullscreen.lock="fullscreenLoading">
    <v-header />
    <v-rank :rank="rank" @aId="_watch_aId_" />
    <v-footer-menu />
  </div>
</template>
<script>
import Header from "@/web/headers";
import Rank from "@/web/rank";
import FooterMenu from "@/web/footer";
import { Teacher as API } from "@/assets/api/api";
export default {
  data() {
    return {
      fullscreenLoading: true,
      rank: [],
      type: ""
    };
  },
  methods: {
    _watch_aId_(v) {
      this._getList_(v);
    },
    _getList_(type) {
      this.fullscreenLoading = true
      let data = {
        type
      };
      this._netGet(API.list, data).then(res => {
        if (res.code === 0) {
          this.rank = res.data;
          this.fullscreenLoading = false
        }
      }).catch(err => {
        setTimeout(() => {
          this.fullscreenLoading = false
        }, 2000)
      })
    }
  },
  created() {
    this._getList_(0);
  },
  components: {
    "v-header": Header,
    "v-rank": Rank,
    "v-footer-menu": FooterMenu
  }
};
</script>
<style lang="less" scoped>
</style>
