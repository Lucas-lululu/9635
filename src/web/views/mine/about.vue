<template>
  <div>
    <v-header :title="title" />
    <div class="mine-body">
      <div class="mine-body-img">
        <p class="log">
          <img src="//www.9635.com.cn//file/log.png" alt />
        </p>
        <p class="desc">好人好股</p>
      </div>
    </div>
    <div class="word">
      <p>北京中和应泰财务顾问有限公司是一家成立于1999年的专业持牌证券服务机构，证监会投资咨询许可号：000000028921 。旗下好人好股平台，只从事投资者教育培训，通过线上、线下相结合的方式为广大股民提供投资培训服务，旨在帮助投资者树立理性的投资理念，培养独立思考的能力，建立适合自己的投资体系。</p>
      <p>好人好股平台老师教学中涉及的个股、信息、资料及图表，仅作为案例解说，不构成对任何股票操作建议。本平台，不提供投资顾问服务，不推荐股票，不指导操作，不代客理财，不承诺投资收益。提醒每位学员，股市有风险，入市需谨慎，理性投资，独立决策，自担风险。</p>
    </div>
  </div>
</template>
<script>
import Header from "./header";
export default {
  data() {
    return {
      title: "关于我们"
    };
  },
  components: {
    "v-header": Header
  }
};
</script>
<style lang="less" scoped>
.mine-body {
  .mine-body-img {
    padding-top: 54px;
    > .log {
      width: 52px;
      height: 52px;
      margin: 0 auto;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    > .desc {
      font-size: 14px;
      color: #000000;
      letter-spacing: 0;
      line-height: 22px;
      width: 64px;
      padding-top: 10px;
      height: 22px;
      margin: 0 auto;
    }
  }
}
.word {
  > p {
    padding: 20px 37px;
    text-indent: 22.5px;
    font-size: 14px;
  }
}
</style>