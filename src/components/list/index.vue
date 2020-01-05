<template>
  <div class="top-box">
    <div class="head">
      <i :class="`mintui ${icon}`"></i>
      {{name}}
    </div>
    <ul class="list">
      <li class="item" v-for="item in list" :key="item.id">
        <p>
          <i>{{item.id}}.</i>
          {{item.title}}
        </p>
        <p>
          <span>
            <span>{{item.name}}</span>
            <span>{{item.time}}</span>
          </span>
          <span>
            <span>{{item.watch}}</span>人阅读
          </span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String
    },
    icon: {
      type: String
    },
    list: {
      type: Array
    }
  }
};
</script>
<style lang="less" scoped>
.head {
  height: 63px;
  line-height: 64px;
  margin: 0 14px;
  font-size: 18px;
  font-family: PingFangSC-Regular;
  color: #000;
  display: flex;
  justify-content: flex-start;
  font-weight: 400;
  > i {
    color: #ff4200;
    font-size: 20px;
  }
}
.top-box {
  background: #fff;
}
.list {
  list-style: none;
  .item {
    margin: 0 14px;
    padding: 17px 0;
    border-top: 1px solid #eee;
    cursor: pointer;
    p {
      color: #000;
      font-size: 14px;
      line-height: 25px;
      font-family: PingFangSC-Regular;
      overflow: hidden;
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:last-child {
        margin-left: 9px;
        color: #666;
        font-size: 12px;
        font-weight: 400;
        font-family: PingFangSC-Regular;
        line-height: 17px;
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        span {
          margin-left: 12px;
          &:first-child {
            margin-left: 0;
          }
        }
      }
      > i {
        font-size: 18px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: #000;
      }
    }
  }
}
</style>