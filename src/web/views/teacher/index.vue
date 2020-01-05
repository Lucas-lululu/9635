<template>
  <div class="teacher">
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
      rank: [],
      type: ""
    };
  },
  methods: {
    _watch_aId_(v) {
      this._getList_(v);
    },
    _getList_(type) {
      let data = {
        type
      };
      this.$api.post(API.list, data).then(res => {
        if (res.code === 200) {
          this.rank = res.data;
        }
      });
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