<template>
  <div class="header">
    <i class="el-icon-arrow-left" @click="_return_"></i>
    {{title}}
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    _return_() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less">
.header {
  width: 100%;
  height: 48px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  > i {
    position: absolute;
    font-size: 18px;
    left: 17px;
  }
}
</style>