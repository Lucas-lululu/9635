<template>
  <div class="right">
    <p class="title">{{title}}</p>
    <ul class="list">
      <li v-for="item in list" :key="item.courseId" class="item">
        <span class="img">
          <img :src="item.courseImage" alt />
        </span>
        <div class="right-list">
          <p class="title">{{item.courseName}}</p>
          <p>{{item.user.nikeName}}</p>
          <p>
            <i class="el-icon-view"></i>
            {{item.watchCount}}
            <span>{{item.startTime | formatDate}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    list: {
      type: Array
    }
  }
};
</script>
<style lang="less" scoped>
.right {
  margin-left: 20px;
  width: 100%;
  .title {
    height: 28px;
    font-size: 20px;
    color: rgba(51, 51, 51, 1);
    line-height: 28px;
    text-align: left;
  }
  .list {
    margin-top: 12px;
    box-shadow: 0 2px 4px 2px rgba(225, 225, 225, 0.9);
    background-color: #fff;
    overflow: hidden;
    padding: 0 9px 0 14px;
    list-style: none;
    .item {
      border-bottom: 1px solid #eeeeee;
      padding: 16px 0;
      height: 89px;
      display: flex;
      .img {
        > img {
          width: 170px;
          height: 89px;
          float: left;
          display: block;
        }
      }
      .right-list {
        width: 50%;
        margin-left: 10px;
        p {
          text-align: left;
          &:first-child {
            font-size: 16px;
            color: rgba(51, 51, 51, 1);
            line-height: 22px;
            width: 100%;
            height: 22px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          &:nth-child(2) {
            font-size: 16px;
            color: rgba(51, 51, 51, 1);
            line-height: 22px;
            height: 22px;
            margin-top: 10px;
          }
          &:last-child {
            color: #333333;
            font-size: 12px;
            margin-top: 10px;
            > i {
              color: #ff7e00;
              font-size: 12px;
            }
            > span {
              float: right;
            }
          }
        }
      }
    }
  }
}
</style>