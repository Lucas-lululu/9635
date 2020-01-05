<template>
  <div class="head">
    <div class="name">
      {{name}}
      <span v-if="show">全部课程</span>
    </div>
    <div class="search">
      <el-input class="input_box" v-model="select" placeholder="节目搜索"></el-input>
      <el-button type="primary" icon="el-icon-search"></el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: "",
      show: false
    };
  },
  props: {
    name: {
      type: String
    }
  },
  mounted() {
    if (this.$route.name === "pccourseindex") {
      this.show = true;
    } else {
      this.show = false;
    }
  }
};
</script>
<style lang="less">
.search {
  display: block;
  position: relative;
  // float: left;
  width: 200px;
  height: 30px;
  border: 1px solid var(--hrhg-theme-skin, #ff4350);
  .el-input {
    font-size: 14px;
    width: 100%;
    height: 100%;
    > .el-input__inner {
      width: 100%;
      height: 100%;
      border-radius: 0px;
      height: 100%;
      line-height: 30px;
      font-size: 14px;
      font-weight: 400;
      float: left;
      text-indent: 8px;
      padding: 0;
    }
  }
  .el-button {
    display: block;
    // float: right;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 0;
    padding: 6px;
    width: 43px;
    height: 30px;
    background: var(--hrhg-theme-skin, #ff4350);
    text-align: center;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
  }
}
</style>
<style lang="less" scoped>
.head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .name {
    font-size: 24px;
    color: rgba(51, 51, 51, 1);
    line-height: 33px;
    font-weight: 500;
    > span {
      font-size: 20px;
      font-weight: 500;
      color: #ff4350;
      line-height: 28px;
    }
  }
}
</style>