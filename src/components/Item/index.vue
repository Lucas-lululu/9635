<template>
  <li class="item">
    <div class="item__user">
      <p class="item__user__index">{{item.id}}</p>
      <img src="@/assets/img/user.png" alt />
      <p class="item__user__name">{{item.name}}</p>
    </div>
    <div class="item__like">
        <p class="item__like__name">{{item.like}}</p>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
};
</script>
<style lang="less" scoped>
.item {
  display: flex;
  justify-content: space-between;
  &__user {
      width: 26%;
    align-items: center;
    justify-content: space-between;
    display: flex;
    &__index {
      width: 30px;
      height: 30px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(253, 186, 30, 1);
      border-radius: 15px;
    }
    &__name {
      font-size: 24px;
      font-family: SimHei;
      font-weight: 400;
      color: rgba(112, 112, 112, 1);
      line-height: 88px;
    }
  }
  &__like {
      &__name {
          font-size: 24px;
      font-family: SimHei;
      font-weight: 400;
      color: rgba(112, 112, 112, 1);
      line-height: 88px;
      }
  }
}
</style>