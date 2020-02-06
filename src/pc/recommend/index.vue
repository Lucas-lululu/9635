<template>
  <div class="recomment" v-loading.fullscreen.lock="fullscreenLoading">
    <div class="teacher_index_adview">
      <img src="https://www.9635.com.cn/file/adview.jpg" />
    </div>
    <div class="main">
      <div class="hrhg_index_teacher_live">
        <!-- 左边 -->
        <div class="left">
          <div class="head">
            <div>
              <i></i>
              <span>名师直播</span>
            </div>
            <p @click="_router_go_(path)" style="color: #FF4350">换一换>></p>
          </div>
          <!-- 内容 -->
          <ul class="left-list">
            <li v-for="item in teacherList" :key="item.userId">
              <div class="img">
                <img :src="item.avatarUrl" alt class="headImg" />
                <img class="log" src="https://www.9635.com.cn/images/icon/bigV.png" alt />
              </div>
              <div class="name">
                <span>{{item.nikeName}}</span>
                <span>易学教育</span>
                <div class="live-name">{{item.nikeName}}的直播间</div>
                <div class="font" v-if="item.level">
                  <span>{{item.level}}</span>
                  粉丝
                </div>
                <div class="font" v-else>
                  <span>0</span>
                  粉丝
                </div>
              </div>
              <!-- 按钮 -->
              <div class="vip" v-if="item.id == 1 || item.id == 3">
                <img src="https://www.9635.com.cn/file/vip.png" alt />
              </div>
              <span class="btn">立即观看</span>
            </li>
          </ul>
        </div>
        <!-- 右边直播排行 -->
        <div class="right-box">
          <div class="right" style="height: 460px">
            <div class="head">
              <div class="box">
                <img src="https://www.9635.com.cn/images/icon/ren.png" class="img" />
                <span>人气排行</span>
              </div>
              <div class="more" @click="_router_go_('live')">更多>></div>
            </div>
            <ul class="right-list">
              <li class="right-list-item" v-for="item in topTeacherList" :key="item.teacherId">
                <div class="right-list-item-box">
                  <div class="img-box">
                    <img :src="item.avatarUrl" class="img" />
                  </div>
                  <div class="right-list-item-content">
                    <p>{{item.nikeName}}</p>
                    <p>{{item.data}}</p>
                  </div>
                  <div class="right-list-right-box">
                    <span>人气：{{item.count}}</span>
                    <p class="btn">
                      <i class="el-icon-plus"></i>关注
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="right" style="margin-top: 26px">
            <div class="head">
              <div class="box">
                <img src="https://www.9635.com.cn/images/icon/paihang.png" class="img" />
                <span>粉丝排行</span>
              </div>
              <div class="more" @click="_router_go_('live')">更多>></div>
            </div>
            <ul class="right-list">
              <li
                class="right-list-item"
                v-for="(item, key) in bottomTeacherList"
                :key="item.teacherId"
              >
                <div class="box">
                  <span class="num">{{key + 1}}.</span>
                  <span class="name">{{item.nikeName}}</span>
                  <span class="teacher" v-if="item.rankType === 3">院长</span>
                  <span class="teacher" v-if="item.rankType === 1">讲师</span>
                </div>
                <p class="face">粉丝数：{{item.follow}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Teacher from "@/components/teacher";
import { Index as API } from "@/assets/api/api";
export default {
  data() {
    return {
      fullscreenLoading: true,
      leftTeacherList: [], // 左边列表
      rightTeacherList: [
        {
          id: 1,
          name: "孙清",
          post: "院长",
          face: 11568
        },
        {
          id: 2,
          name: "徐文明团队",
          post: "院长",
          face: 9584
        },
        {
          id: 3,
          name: "魏宁海",
          post: "院长",
          face: 8710
        },
        {
          id: 4,
          name: "边风炜",
          post: "院长",
          face: 7397
        },
        {
          id: 5,
          name: "吴俊琛",
          post: "讲师",
          face: 6628
        },
        {
          id: 6,
          name: "吕长顺",
          post: "院长",
          face: 6137
        }
      ],
      bottomTeacherList: [
        {
          teacherId: 77,
          nikeName: "孙清",
          avatarUrl:
            "https://images-test.integrity.com.cn/fb70ca47e3fa4016a5b1c8c5a1a556b0_wechatimg12%403x.png",
          certificateNumber: "",
          introduce:
            "孙清（江海老师） \r\n易学教育投教首席培训导师，担任多家阳光私募的投资总顾问，曾任复旦大学证券研究所投资者教育基地副主任、复旦大学证券研究所高级研究员，具有丰富的职业操盘手培训经验，数年来为国内私募输送了大批顶级的优秀技术分析师。",
          rankType: 3,
          follow: 11583,
          isVip: 0,
          isFollow: "尚未关注",
          vipLiveIconImg: null
        },
        {
          teacherId: 44532,
          nikeName: "徐文明团队",
          avatarUrl:
            "https://images-test.integrity.com.cn/3374e8233e3247c183e01af055eecf00_%E5%BE%90%E6%96%87%E6%98%8E%403x.png",
          certificateNumber: "",
          introduce:
            "  徐文明团队\r\n【徐文明】 证书编号：A0150119010002\r\n易学教育名誉院长，财富讲坛特邀嘉宾，清华大学操盘学特聘讲师，CCTV证券资讯《投资我主张》特邀嘉宾， 证券投资界的著名投资人，20年职业操盘手，基金管理人。 当代中国杰出的A股市场股评家。\r\n【刘凤（小渔）】证书编号：A0150619070001\r\n国际经济与贸易，行为心理学专业，曾担任多家知名证券咨询机构分析师，拥有理财规划师，基金从业，投资顾问等多项权威认证，活跃于股市，期货市场，自主研发《解密结构》理论。",
          rankType: 3,
          follow: 9591,
          isVip: 1,
          isFollow: "尚未关注",
          vipLiveIconImg: null
        },
        {
          teacherId: 79,
          nikeName: "魏宁海",
          avatarUrl:
            "https://images-test.integrity.com.cn/bf50f527f45d4d30b8ef4da06a7d5f55_%E9%AD%8F%E8%80%81%E5%B8%88%E6%96%B0%403x.png",
          certificateNumber: "",
          introduce:
            "易学教育名誉院长\r\n新浪SHOW首席投资顾问\r\n第一财经特约财经评论员\r\n专注于技术战法分析和研究，属于现代股市实战派的代表人物。善于把复杂深奥的股市技术用自己生动的图形表达描述出来。",
          rankType: 3,
          follow: 8747,
          isVip: 0,
          isFollow: "尚未关注",
          vipLiveIconImg: null
        },
        {
          teacherId: 78,
          nikeName: "边风炜",
          avatarUrl:
            "https://images-test.integrity.com.cn/d3f5a037c866483fb10f0563cf472bfd_wechatimg31%403x.png",
          certificateNumber: "",
          introduce:
            "知名证券分析师，现任国泰君安上海研究部总监。\r\n1995年入市，曾参加大型私募基金操作，具有丰富的大资金实战运作经验。24岁即以特约嘉宾的身份参加《凤凰财经》、《公司时间》、《今日股市》等多档知名证券节目的录制，担任第一财经《股市天天向上》特邀评委，在亿万股民中拥有极高的知名度。\r\n2007、08年连续获评“第一财经最受股民欢迎分析师”称号。",
          rankType: 3,
          follow: 7404,
          isVip: 1,
          isFollow: "尚未关注",
          vipLiveIconImg: null
        },
        {
          teacherId: 111,
          nikeName: "吴俊琛",
          avatarUrl:
            "https://images-test.integrity.com.cn/84f6d7dc97754cc9acd23bd6de9e0307_wechatimg288%403x.png",
          certificateNumber: "",
          introduce:
            "易学教育明星讲师\r\n第一财经《公司与行业》和《财经风味》栏目重要嘉宾。\r\n2017年2月28日至2019年3月8日第一财经旗下“有看投”个人锦囊总收益高达144.72%。\r\n十年新经济研究，F10功能发起人和参与者之一，5年10万份研报的阅读量级，对因基本面变化而形成的投资机会总结出一套独到的分析系统和应用方法，通过三大逻辑前瞻性的把握热点和主题性投资机会。\r\n当下主流题材投资和主题投资模版的创造者和引领者之一，在市场上率先推出并持续挖掘了上千余个题材，极大的丰富了机构和个人投资者的投资方法。",
          rankType: 1,
          follow: 6629,
          isVip: 0,
          isFollow: "尚未关注",
          vipLiveIconImg: null
        },
        {
          teacherId: 81,
          nikeName: "吕长顺",
          avatarUrl:
            "https://images-test.integrity.com.cn/8e217d55c9f441438735bb600e2a5ece_wechatimg290%403x.png",
          certificateNumber: "",
          introduce:
            "吕长顺（凯恩斯）\r\n证书编号：A0150619070003\r\n对外经贸大学客座教授，中国人民大学操盘学高级讲师、清华大学操盘学特训讲师，中央电视台CCTV2《交易时间》特聘专家。\r\n陈立锋\r\n证书编号：A0150619110001\r\n曾任国内私募基金经理，在职期间管理的私募基金，排名同类型产品的前20名。",
          rankType: 3,
          follow: 6141,
          isVip: 0,
          isFollow: "尚未关注",
          vipLiveIconImg: null
        }
      ],
      topTeacherList: [
        {
          teacherId: 77,
          nikeName: "孙清",
          avatarUrl:
            "https://images-test.integrity.com.cn/fb70ca47e3fa4016a5b1c8c5a1a556b0_wechatimg12%403x.png",
          certificateNumber: null,
          introduce: null,
          rankType: 1,
          isVip: 0,
          isFollow: "尚未关注",
          count: 29284,
          data: "发表了一篇新文章：《江海1227早盘私密分享》"
        },
        {
          teacherId: 79,
          nikeName: "魏宁海",
          avatarUrl:
            "https://images-test.integrity.com.cn/bf50f527f45d4d30b8ef4da06a7d5f55_%E9%AD%8F%E8%80%81%E5%B8%88%E6%96%B0%403x.png",
          certificateNumber: null,
          introduce: null,
          rankType: 1,
          isVip: 0,
          isFollow: "尚未关注",
          count: 27138,
          data:
            "盘面热点，最近新能源汽车、半导体材料和网红经济等都有表现，新能源上，特斯拉一直叫大家关注，现在盘面最高5板还是在特斯拉上，整个板块的持续性是很不错的，而且内部的股票是有轮动"
        },
        {
          teacherId: 83,
          nikeName: "李以勒团队",
          avatarUrl:
            "https://images-test.integrity.com.cn/79a9cad4a6bc4574aa0ba25cb684d84a_wechatimg1391%403x.png",
          certificateNumber: null,
          introduce: null,
          rankType: 1,
          isVip: 1,
          isFollow: "尚未关注",
          count: 11058,
          data: "上架了一节新视频：《20191226线上教学倒数第二天》"
        },
        {
          teacherId: 81,
          nikeName: "吕长顺",
          avatarUrl:
            "https://images-test.integrity.com.cn/8e217d55c9f441438735bb600e2a5ece_wechatimg290%403x.png",
          certificateNumber: null,
          introduce: null,
          rankType: 1,
          isVip: 0,
          isFollow: "尚未关注",
          count: 7706,
          data: "发表了一篇新文章：《12.27早间要闻评论》"
        },
        {
          teacherId: 87,
          nikeName: "熊艳平",
          avatarUrl:
            "https://images-test.integrity.com.cn/d6ed1fb557a041bcb37f06fd2cedba7f_%E7%86%8A%E9%9D%92%E9%BE%99_2%403x.png",
          certificateNumber: null,
          introduce: null,
          rankType: 1,
          isVip: 1,
          isFollow: "尚未关注",
          count: 7623,
          data: "上架了一节新视频：《20191220 不追涨，多低吸（盘中版）》"
        }
      ],
      teacherList: []
    };
  },
  methods: {
    _get_Home_page_() {
      this.$api.get(API.homepage, {}).then(res => {
        if (res.code === 0) {
          this.teacherList = res.data.teachers.splice(0, 10);
          this.fullscreenLoading = false
          this.$emit('fullscreenLoading', false)
        }
      }).catch(err => {
        setTimeout(() => {
          this.fullscreenLoading = false
        }, 2000)
      })
    },
    _get_list_(page = 1, pageSize = 6) {
      let data = {
        page,
        pageSize
      };
      this.$api.post(API.list, data).then(res => {});
    }
  },
  components: {
    "v-teacher": Teacher
  },
  created() {
    this._get_Home_page_();
  }
};
</script>
<style lang="less" scoped>
.teacher_index_adview {
  width: 100%;
  height: 200px;
  box-shadow: 0 2px 4px 2px rgba(225, 225, 225, 0.9);
  > img {
    width: 100%;
    height: 100%;
  }
}
.main {
  width: 1200px;
  margin: 0 auto;
  .hrhg_index_teacher_live {
    width: 100%;
    margin-top: 30px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .left {
      width: 860px;
      height: 100%;
      background: #ffffff;
      box-shadow: 0px 0px 6px 0px rgba(187, 187, 187, 0.38);
      .head {
        width: 100%;
        height: 65px;
        line-height: 65px;
        display: flex;
        justify-content: space-between;
        > div {
          display: flex;
          > i {
            width: 4px;
            height: 26px;
            display: block;
            margin-left: 20px;
            margin-top: 26px;
            background: rgba(231, 14, 29, 1);
          }
          > span {
            height: 37px;
            font-size: 26px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            color: rgba(231, 14, 29, 1);
            line-height: 37px;
            padding-top: 20px;
            padding-left: 6px;
          }
        }
        > p {
          font-size: 14px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 20px;
          padding-top: 29px;
          padding-right: 20px;
          cursor: pointer;
        }
      }
      .left-list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        li {
          position: relative;
          width: 360px;
          padding: 20px;
          background: rgba(255, 255, 255, 1);
          margin-left: 20px;
          margin-bottom: 20px;
          border-radius: 2px;
          display: flex;
          border: 1px solid rgba(228, 226, 226, 1);
          .img {
            width: 100px;
            height: 100px;
            position: relative;
            .headImg {
              border-radius: 50%;
              width: 100%;
              height: 100%;
              transition: all 0.2s;
              &:hover {
                transform: scale(1.1);
              }
            }
            .log {
              position: absolute;
              bottom: 3px;
              right: calc(50% - 48px);
            }
          }
          .name {
            margin-top: 10px;
            display: inline-block;
            padding-left: 20px;
            span {
              &:first-child {
                height: 24px;
                font-size: 18px;
                font-family: PingFangSC-Medium;
                font-weight: 500;
                color: rgba(0, 0, 0, 1);
                line-height: 24px;
              }
              &:nth-child(2) {
                height: 20px;
                font-size: 14px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: rgba(102, 102, 102, 1);
                line-height: 20px;
                padding-left: 10px;
              }
            }
            .live-name {
              height: 20px;
              font-size: 14px;
              font-family: PingFangSC-Regular;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              line-height: 20px;
              text-align: left;
              padding-top: 10px;
            }
            .font {
              padding-top: 10px;
              text-align: left;
              span {
                &:first-child {
                  color: #ff7e00;
                  font-size: 18px;
                }
              }
            }
          }
          .vip {
            position: absolute;
            right: 20px;
          }
          .btn {
            position: absolute;
            top: 90px;
            font-size: 14px;
            font-weight: 400;
            color: #fff;
            padding: 3px 13px;
            background: rgba(226, 5, 5, 1);
            border-radius: 2px;
            right: 24px;
            cursor: pointer;
          }
        }
        .video-item {
          cursor: pointer;
          padding: 0;
          width: 264px;
          height: 252px;
          background: rgba(255, 255, 255, 1);
          float: left;
          margin-bottom: 16px;
          margin-left: 14px;
          position: relative;
          transition: all 0.2s;
          border: 1px solid rgba(229, 229, 229, 1);
          &:hover {
            box-shadow: 0px 2px 4px 0 rgba(225, 225, 225, 0.9);
          }
          .video-box {
            width: 100%;
            height: 148px;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
          .hrhg_index_videodesc {
            padding: 0 10px;
            position: absolute;
            top: 148px;
            left: 0;
            width: 90%;
            p {
              text-align: left;
              &:first-child {
                font-family: PingFangSC-Regular;
                width: 100%;
                padding-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 16px;
                line-height: 22px;
                height: 22px;
                color: #333333;
              }
              &:nth-child(2) {
                font-family: PingFangSC-Regular;
                width: 100%;
                height: 22px;
                line-height: 22px;
                padding: 10px 0;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 16px;
                color: #333;
              }
              &:last-child {
                font-size: 12px;
                height: 17px;
                line-height: 17px;
                font-family: PingFangSC-Regular;
                color: #333333;
                display: flex;
                justify-content: space-between;
                .first {
                  > i {
                    color: #ff7e00;
                  }
                  > span {
                    padding-left: 5px;
                  }
                }
                .last {
                  > i {
                    color: #ff7e00;
                  }
                  > span {
                    padding-left: 5px;
                  }
                }
              }
            }
          }
          .hrhg_index_content {
            padding: 0 10px;
            position: absolute;
            top: 148px;
            left: 0;
            width: 90%;
            .title {
              height: 26px;
              font-size: 16px;
              font-family: PingFangSC-Medium;
              font-weight: 600;
              line-height: 26px;
              padding-top: 10px;
              text-align: left;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .content {
              text-align: left;
              height: 40px;
              font-size: 14px;
              font-family: PingFangSC-Regular;
              font-weight: 500;
              color: #666666;
              line-height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .bottom {
              > .name {
                float: right;
                height: 27px;
                font-size: 12px;
                font-family: PingFangSC-Regular;
                font-weight: 500;
                color: #666666;
                margin: 0;
                padding: 0;
                line-height: 27px;
              }
              > .watch {
                font-size: 12px;
                font-family: PingFangSC-Regular;
                font-weight: 500;
                color: #666666;
                line-height: 27px;
                color: #ff7e00;
                margin-left: 42%;
                .span {
                  font-size: 12px;
                  font-family: PingFangSC-Regular;
                  font-weight: 500;
                  color: #666666;
                  line-height: 27px;
                  color: #666;
                }
              }
            }
          }
        }
      }
    }
    .right {
      width: 320px;
      height: 388px;
      background: #ffffff;
      box-shadow: 0px 0px 6px 0px rgba(187, 187, 187, 0.38);
      .head {
        padding: 0px 13px;
        height: 65px;
        line-height: 65px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .box {
          display: flex;
          justify-content: center;
          align-items: center;
          .img {
            width: 20px;
            height: 20px;
          }
          span {
            height: 25px;
            font-size: 18px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            line-height: 25px;
            padding-left: 6px;
          }
        }
        .more {
          height: 20px;
          font-size: 14px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 20px;
        }
      }
      .right-list {
        list-style: none;
        padding: 0 14px;
        .right-list-item {
          padding: 13px 0;
          display: flex;
          justify-content: space-between;
          vertical-align: middle;
          border-top: 1px solid #eeeeee;
          .box {
            height: 22px;
            font-size: 16px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: #000000;
            line-height: 22px;
            cursor: pointer;
            .num {
              height: 25px;
              font-size: 18px;
              font-family: PingFangSC-Medium;
              font-weight: 500;
              color: #000;
              line-height: 25px;
            }
            .name {
              padding-left: 5px;
            }
            .teacher {
              height: 17px;
              font-size: 12px;
              font-family: PingFangSC-Regular;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              line-height: 17px;
              padding-left: 15px;
            }
          }
          .right-list-item-box {
            position: relative;
            width: 100%;
            .img-box {
              width: 50px;
              height: 50px;
              overflow: hidden;
              border-radius: 50%;
              .img {
                width: 100%;
                height: 100%;
              }
            }
            .right-list-item-content {
              padding-top: 5px;
              position: absolute;
              top: 0;
              left: 62px;
              p {
                text-align: left;
                &:first-child {
                  height: 16px;
                  font-size: 16px;
                  font-family: PingFangSC-Regular;
                  font-weight: 600;
                  color: #333333;
                  line-height: 16px;
                }
                &:last-child {
                  max-width: 130px;
                  height: 12px;
                  font-size: 12px;
                  font-family: PingFangSC-Regular;
                  font-weight: 500;
                  color: #666666;
                  line-height: 12px;
                  padding-top: 10px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
            .right-list-right-box {
              position: absolute;
              right: 0;
              top: 0;
              > span {
                font-size: 12px;
                line-height: 12px;
                font-family: PingFang-SC;
                font-weight: 500;
                color: #666666;
              }
              .btn {
                width: 73px;
                height: 26px;
                color: #fff;
                text-align: center;
                line-height: 26px;
                background: linear-gradient(
                  166deg,
                  rgba(255, 113, 59, 1) 0%,
                  rgba(214, 40, 17, 1) 100%
                );
                font-size: 12px;
                font-weight: bold;
                border-radius: 4px;
                > i {
                  font-size: 12px;
                  padding-right: 3px;
                }
              }
            }
          }
          .face {
            height: 17px;
            font-size: 12px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(254, 103, 46, 1);
            line-height: 17px;
            padding-top: 8px;
          }
          .video-right-i {
            .num {
              font-size: 14px;
              width: 20px;
              height: 20px;
              font-weight: 500;
              border-radius: 50%;
              background: #999999;
              line-height: 20px;
              display: inline-block;
              text-align: center;
              color: #fff;
            }
            .else {
              background: #ff7e00;
            }
          }
          .video-right-title {
            padding-left: 15px;
            display: inline-block;
            font-size: 16px;
            color: #000;
            padding-left: 10px;
            width: 240px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            height: 20px;
            line-height: 20px;
            font-weight: 400;
            text-align: left;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
</style>