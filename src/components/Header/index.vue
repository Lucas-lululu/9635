<template>
  <div class="header">
    <div class="header__icon">
      <img src="@/assets/img/1.png" alt />
      <img src="@/assets/img/2.png" alt />
    </div>
    <div>
      <div class="header__title">
        <span>排行榜</span>
        <img class src="@/assets/img/daizi.png" alt />
      </div>
      <img class="header__bg" src="@/assets/img/headbg.png" alt />
    </div>
    <div class="btn">
      <p
        v-for="item in btn"
        :key="item.id"
        @click="_changeItem_(item)"
        :class="classId == item.id ? 'active' : ''"
      >{{item.name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      classId: 1,
      btn: [
        {
          id: 1,
          name: "家族偷水"
        },
        {
          id: 2,
          name: "氧气值"
        },
        {
          id: 3,
          name: "资源"
        }
      ]
    };
  },
  methods: {
    _changeItem_(item) {
      this.classId = item.id;
      this.$emit('classId', this.classId)
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  position: relative;
  &__icon {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -100px;
    > img {
      &:first-child {
        width: 132px;
        height: 117px;
      }
      &:last-child {
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        top: calc(50% - 32px);
        width: 48px;
        height: 48px;
      }
    }
  }
  &__bg {
    width: 100%;
    position: absolute;
    left: 0;
    top: 30px;
    z-index: -1;
  }
  &__title {
    //   position: abs;
    > img {
      width: 80%;
      height: 141px50;
    }
    > span {
      font-size: 34px;
      font-family: SimHei;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 88px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .btn {
    display: flex;
    padding: 0 30px;
    border: 1px solid #e8e8e8;
    border-top: none;
    border-bottom: none;
    justify-content: space-between;
    align-items: center;
    > p {
      width: 128px;
      height: 48px;
      background: #d2d2d2;
      margin-right: 30px;
      border-radius: 18px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      &:last-child {
        margin-right: 0;
      }
      &.active {
        background: rgba(177, 212, 91, 1);
      }
    }
  }
}
</style>