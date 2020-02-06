<template>
  <div class="pc">
    <!-- pc-index-轮播图 -->
    <div class="carousel_box">
      <v-swiper :bannerList="bannerList" />
    </div>
    <div class="main">
      <!-- 直播 -->
      <div class="hrhg_index">
        <div class="hrhg_index_live">
          <img :src="liveImg" alt />
        </div>
        <div class="hrhg_index_live_list">
          <div class="top">
            <span
              v-for="item in live_top_list"
              :key="item.id"
              @click="_change_live_(item.id)"
              :class="classId == item.id ? 'active' : ''"
            >{{item.name}}</span>
          </div>
          <div class="content">
            <ul class="list">
              <li class="item">节目名称</li>
              <li class="item">时间</li>
            </ul>
            <ul class="live_list">
              <li v-for="item in live" :key="item.liveId" class="live_item">
                <ul>
                  <li>{{item.liveTitle}}</li>
                  <li>{{item.startTime | formatDate}}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 推荐直播 -->
      <div class="hrhg_index_recommend_live">
        <div class="hrhg_index_tit">
          <i class="hrhg_index_teacher_tit"></i>
          <span>推荐直播</span>
        </div>
        <el-carousel
          height="130px"
          direction="vertical"
          autoplay
          indicator-position="none"
          :interval="4000"
        >
          <el-carousel-item>
            <ul class="list">
              <li class="item">
                <div class="img">
                  <img
                    src="https://images-test.integrity.com.cn/fb70ca47e3fa4016a5b1c8c5a1a556b0_wechatimg12%403x.png"
                    alt
                  />
                </div>
                <img class="hot" src="https://www.9635.com.cn/file/hight.gif" alt />
                <div class="int">
                  <p class="name">
                    孙清
                    <span class="btn">点击关注</span>
                  </p>
                  <p class="content">准备于20:00进行视频直播:《江氏财富之窗-涨停聚金</p>
                </div>
              </li>
              <li class="item">
                <div class="img">
                  <img
                    src="https://images-test.integrity.com.cn/d6ed1fb557a041bcb37f06fd2cedba7f_%E7%86%8A%E9%9D%92%E9%BE%99_2%403x.png"
                    alt
                  />
                </div>
                <img class="hot" src="https://www.9635.com.cn/file/hight.gif" alt />
                <div class="int">
                  <p class="name">
                    熊艳平
                    <span class="btn">点击关注</span>
                  </p>
                  <p class="content">上架了一节新视频：《20191213 跳空向上，坚守强势（盘中版）》</p>
                </div>
              </li>
              <li class="item">
                <div class="img">
                  <img
                    src="https://images-test.integrity.com.cn/79a9cad4a6bc4574aa0ba25cb684d84a_wechatimg1391%403x.png"
                    alt
                  />
                </div>
                <img class="hot" src="https://www.9635.com.cn/file/hight.gif" alt />
                <div class="int">
                  <p class="name">
                    李克勤团队
                    <span class="btn">点击关注</span>
                  </p>
                  <p class="content">上架了一节新视频：《20191225 线上教学倒数第3天》</p>
                </div>
              </li>
            </ul>
          </el-carousel-item>
          <el-carousel-item>
            <ul class="list">
              <li class="item">
                <div class="img">
                  <img
                    src="https://images-test.integrity.com.cn/d6ed1fb557a041bcb37f06fd2cedba7f_%E7%86%8A%E9%9D%92%E9%BE%99_2%403x.png"
                    alt
                  />
                </div>
                <img class="hot" src="https://www.9635.com.cn/file/hight.gif" alt />
                <div class="int">
                  <p class="name">
                    熊艳平
                    <span class="btn">点击关注</span>
                  </p>
                  <p class="content">上架了一节新视频：《20191213 跳空向上，坚守强势（盘中版）》</p>
                </div>
              </li>
              <li class="item">
                <div class="img">
                  <img
                    src="https://images-test.integrity.com.cn/fb70ca47e3fa4016a5b1c8c5a1a556b0_wechatimg12%403x.png"
                    alt
                  />
                </div>
                <img class="hot" src="https://www.9635.com.cn/file/hight.gif" alt />
                <div class="int">
                  <p class="name">
                    孙清
                    <span class="btn">点击关注</span>
                  </p>
                  <p class="content">准备于20:00进行视频直播:《江氏财富之窗-涨停聚金</p>
                </div>
              </li>
              <li class="item">
                <div class="img">
                  <img
                    src="https://images-test.integrity.com.cn/79a9cad4a6bc4574aa0ba25cb684d84a_wechatimg1391%403x.png"
                    alt
                  />
                </div>
                <img class="hot" src="https://www.9635.com.cn/file/hight.gif" alt />
                <div class="int">
                  <p class="name">
                    李克勤团队
                    <span class="btn">点击关注</span>
                  </p>
                  <p class="content">上架了一节新视频：《20191225 线上教学倒数第3天》</p>
                </div>
              </li>
            </ul>
          </el-carousel-item>
          <el-carousel-item>
            <ul class="list">
              <li class="item">
                <div class="img">
                  <img
                    src="https://images-test.integrity.com.cn/79a9cad4a6bc4574aa0ba25cb684d84a_wechatimg1391%403x.png"
                    alt
                  />
                </div>
                <img class="hot" src="https://www.9635.com.cn/file/hight.gif" alt />
                <div class="int">
                  <p class="name">
                    李克勤团队
                    <span class="btn">点击关注</span>
                  </p>
                  <p class="content">上架了一节新视频：《20191225 线上教学倒数第3天》</p>
                </div>
              </li>
              <li class="item">
                <div class="img">
                  <img
                    src="https://images-test.integrity.com.cn/fb70ca47e3fa4016a5b1c8c5a1a556b0_wechatimg12%403x.png"
                    alt
                  />
                </div>
                <img class="hot" src="https://www.9635.com.cn/file/hight.gif" alt />
                <div class="int">
                  <p class="name">
                    孙清
                    <span class="btn">点击关注</span>
                  </p>
                  <p class="content">准备于20:00进行视频直播:《江氏财富之窗-涨停聚金</p>
                </div>
              </li>
              <li class="item">
                <div class="img">
                  <img
                    src="https://images-test.integrity.com.cn/d6ed1fb557a041bcb37f06fd2cedba7f_%E7%86%8A%E9%9D%92%E9%BE%99_2%403x.png"
                    alt
                  />
                </div>
                <img class="hot" src="https://www.9635.com.cn/file/hight.gif" alt />
                <div class="int">
                  <p class="name">
                    熊艳平
                    <span class="btn">点击关注</span>
                  </p>
                  <p class="content">上架了一节新视频：《20191213 跳空向上，坚守强势（盘中版）》</p>
                </div>
              </li>
            </ul>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 大V面对面 -->
      <div class="hrhg_index_recommend_live">
        <div class="hrhg_index_tit" style="position: relative">
          <i class="hrhg_index_teacher_tit"></i>
          <span>大V面对面</span>
          <p class="moreTeacher" @click="_router_go_('/pc/teacher/index')">更多老师>></p>
        </div>
        <ul class="faceList">
          <li v-for="item in faceTofaceList" :key="item.id" class="faceItem">
            <ul>
              <li>
                <img :src="item.img" />
              </li>
              <li class="name">{{item.name}}</li>
              <li class="name">{{item.title}}</li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- 名师直播 -->
      <v-teacher
        :teacherList="leftTeacherList"
        :rightTeacherList="rightTeacherList"
        :path="'/pc/teacher/index'"
      />
      <!-- 视频精选 -->
      <div class="hrhg_index_teacher_live" style="height: 608px">
        <!-- 左边 -->
        <div class="left" style="height: 100%">
          <div class="head">
            <div>
              <i></i>
              <span>视频精选</span>
            </div>
            <p @click="_router_go_('teacher')">查看更多>></p>
          </div>
          <!-- 内容 -->
          <ul class="left-list">
            <li v-for="item in videoList" :key="item.id" class="video-item">
              <div class="video-box">
                <img :src="item.img" alt />
              </div>
              <div class="hrhg_index_videodesc">
                <P>{{item.title}}</P>
                <P>{{item.name}}</P>
                <p>
                  <span class="first">
                    <i class="el-icon-view"></i>
                    <span>{{item.watch}}</span>
                  </span>
                  <span class="last">
                    <i class="el-icon-timer"></i>
                    <span>{{item.time}}</span>
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <!-- 右边直播排行 -->
        <div class="right" style="height: 608px">
          <div class="head">
            <div class="box">
              <img src="https://www.9635.com.cn/images/icon/shoushi.png" class="img" />
              <span>收视排行</span>
            </div>
            <div class="more" @click="_router_go_('teacher')">更多>></div>
          </div>
          <ul class="right-list">
            <li
              class="right-list-item"
              style="justify-content: start"
              v-for="item in videoRightList"
              :key="item.id"
            >
              <div class="video-right-i">
                <span class="num else" v-if="item.id < 4">{{item.id}}</span>
                <span class="num" v-else>{{item.id}}</span>
              </div>
              <div class="video-right-title">{{item.title}}</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 课程精选 -->
      <div class="hrhg_index_teacher_live" style="height: 608px">
        <!-- 左边 -->
        <div class="left" style="height: 100%">
          <div class="head">
            <div>
              <i></i>
              <span>视频精选</span>
            </div>
            <p @click="_router_go_('teacher')">查看更多>></p>
          </div>
          <!-- 内容 -->
          <ul class="left-list">
            <li v-for="item in courseList" :key="item.id" class="video-item">
              <div class="video-box">
                <img :src="item.img" alt />
              </div>
              <div class="hrhg_index_content">
                <P class="title">{{item.title}}</P>
                <P class="content">{{item.content}}</P>
                <p class="bottom">
                  <span class="watch">
                    {{item.watch}}
                    <span class="span">人访问</span>
                  </span>
                  <span class="name">{{item.name}}</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <!-- 右边直播排行 -->
        <div class="right" style="height: 608px">
          <div class="head">
            <div class="box">
              <img src="https://www.9635.com.cn/images/icon/zuire.png" class="img" />
              <span>最热课程</span>
            </div>
            <div class="more" @click="_router_go_('teacher')">更多>></div>
          </div>
          <ul class="right-list">
            <li
              class="right-list-item"
              style="justify-content: start"
              v-for="item in courseRightList"
              :key="item.id"
            >
              <div class="video-right-i">
                <span class="num else" v-if="item.id < 4">{{item.id}}</span>
                <span class="num" v-else>{{item.id}}</span>
              </div>
              <div class="video-right-title">{{item.title}}</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 合作伙伴 -->
      <div class="cooperation">
        <div class="hrhg_index_tit">
          <i class="hrhg_index_teacher_tit"></i>
          <span>合作伙伴</span>
        </div>
        <ul class="logList">
          <li class="log-item" v-for="item in logList" :key="item.id">
            <img :src="item.img" alt />
          </li>
        </ul>
      </div>
      <!-- 友情链接 -->
      <div class="hrhg_index_about">
        <div class="hrhg_index_tit">
          <i class="hrhg_index_teacher_tit"></i>
          <span>友情链接</span>
        </div>
        <div class="about">从零开始学炒股</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Index as API } from "@/assets/api/api";
import Swiper from "@/components/swiper";
import Teacher from "@/components/teacher";
export default {
  data() {
    return {
      bannerList: [
        {
          bannerId: 1,
          imageUrl:
            "https://images-test.integrity.com.cn/36aac539b57d4089b21465500f85bc87_8ee83bd42dcc4c21b8bdea8e01141597_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191018172415.jpg"
        },
        {
          bannerId: 2,
          imageUrl:
            "https://images-test.integrity.com.cn/38bf7484fe524c81acaa50c4b10bdf33_%E8%B4%A2%E5%AF%8C%E6%80%BB%E8%A3%81%E7%8F%AD2%E6%9C%9Fbanner%E7%94%B5%E8%84%91%E7%89%88.jpg"
        },
        {
          bannerId: 3,
          imageUrl:
            "https://images-test.integrity.com.cn/3dbca86e3e0a40cc81f5ee600dd56524_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191128095346.jpg"
        },
        {
          bannerId: 4,
          imageUrl:
            "https://images-test.integrity.com.cn/2bc6d189e449486a9b60121a575842c3_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191224142324.jpg"
        },
        {
          bannerId: 5,
          imageUrl:
            "https://images-test.integrity.com.cn/c36a0531898446b384f32a6701df0612_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191225143427.jpg"
        },
        {
          bannerId: 6,
          imageUrl:
            "https://images-test.integrity.com.cn/7456431a29f44c038dd092c3383c53f7_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191212154043.jpg"
        },
        {
          bannerId: 7,
          imageUrl:
            "https://images-test.integrity.com.cn/14d0bcad893c4830980d6c36b7d47a16_22b31ca47c704bd38d7934d014fcc105_PCbanner.png"
        },
        {
          bannerId: 8,
          imageUrl:
            "https://images-test.integrity.com.cn/a6df4edef30e435984a214a8fff0639b_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191101155812.jpg"
        },
        {
          bannerId: 9,
          imageUrl:
            "https://images-test.integrity.com.cn/3f8d5b54f9034bfe88237d08bf3e833e_434878aa45934262b2c48055bae2f9b.jpg"
        }
      ],
      nav_list: [
        {
          id: 1,
          name: "首页"
        },
        {
          id: 2,
          name: "老师"
        },
        {
          id: 3,
          name: "资讯"
        },
        {
          id: 4,
          name: "视频"
        },
        {
          id: 5,
          name: "课程"
        },
        {
          id: 6,
          name: "APP下载"
        },
        {
          id: 7,
          name: "模拟训练营"
        },
        {
          id: 8,
          name: "主升浪下载"
        }
      ],
      live_top_list: [
        {
          id: 1,
          name: "直播预告"
        },
        {
          id: 2,
          name: "正在直播"
        },
        {
          id: 3,
          name: "今日回顾"
        }
      ], // 直播头
      live_list: [], //
      live: [], // 直播列表
      liveImg: "", // 直播图片
      faceTofaceList: [
        {
          id: 1,
          img:
            "https://images-test.integrity.com.cn/475d32646aa447748b3d900f114ab734_sunqing.png",
          name: "孙清",
          title: "易学教育高端操盘手"
        },
        {
          id: 2,
          img:
            "https://images-test.integrity.com.cn/0eef204105e84e6bbb5343f69e988f0b_bianfengwei.png",
          name: "边风炜",
          title: "易学教育高端操盘手"
        },
        {
          id: 3,
          img:
            "https://images-test.integrity.com.cn/ce23217ca7ae4d60a114040b426c40e3_kaiensi.png",
          name: "吕长顺",
          title: "易学教育高端操盘手"
        },
        {
          id: 4,
          img:
            "https://images-test.integrity.com.cn/26e0f431e5294aae943489b2c4ac6a7b_xuwenming.png",
          name: "徐文明团队",
          title: "易学教育高端操盘手"
        },
        {
          id: 5,
          img:
            "https://images-test.integrity.com.cn/75a6bede95fb46f3aded97ebe4d326d0_weininghai.png",
          name: "魏宁海",
          title: "易学教育高端操盘手"
        }
      ], // 大V面对面
      leftTeacherList: [
        {
          id: 1,
          name: "孙清",
          img:
            "https://images-test.integrity.com.cn/fb70ca47e3fa4016a5b1c8c5a1a556b0_wechatimg12%403x.png",
          face: 11566
        },
        {
          id: 2,
          name: "徐文明团队",
          img:
            "https://images-test.integrity.com.cn/3374e8233e3247c183e01af055eecf00_%E5%BE%90%E6%96%87%E6%98%8E%403x.png",
          face: 9583
        },
        {
          id: 3,
          name: "魏宁海",
          img:
            "https://images-test.integrity.com.cn/bf50f527f45d4d30b8ef4da06a7d5f55_%E9%AD%8F%E8%80%81%E5%B8%88%E6%96%B0%403x.png",
          face: 8708
        },
        {
          id: 4,
          name: "边风炜",
          img:
            "https://images-test.integrity.com.cn/d3f5a037c866483fb10f0563cf472bfd_wechatimg31%403x.png",
          face: 7395
        }
      ], // 左边列表
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
      videoList: [
        {
          id: 1,
          img:
            "https://images-test.integrity.com.cn/b54bd2c89ec541df956777c0e0a44939_%E5%91%A8%E6%B3%A2%E8%A7%A3%E7%9B%98.jpg",
          title: "板块短期轮动，大盘蓄势中",
          name: "周波",
          watch: "99",
          time: "19-12-26 11:11"
        },
        {
          id: 2,
          img:
            "https://images-test.integrity.com.cn/2a13ba3576b44756be0e9daed8d15f55_f3f6b7c91bea447e916d26a1611c07c2_%E7%89%9B%E8%82%A1%E8%B5%B7%E6%B6%A8.png",
          title: "20191226 紧跟热点，耐心持股（盘中版）",
          name: "熊艳平",
          watch: "210",
          time: "19-12-26 10:22"
        },
        {
          id: 3,
          img:
            "https://images-test.integrity.com.cn/5421abf004d74d0d93521eefa7e5516f_%E5%B0%8F%E6%B8%94%E7%BB%93%E6%9E%84.png",
          title: "小渔结构",
          name: "徐文明团队",
          watch: "232",
          time: " 19-12-26 09:43"
        },
        {
          id: 4,
          img:
            "https://images-test.integrity.com.cn/013e96f061424155b6f389b9d4ab9a22_7cfcbc002dde4d5c9175b5644d9ecc32_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191202140323.jpg",
          title: "20191226-凯恩斯看盘",
          name: "吕长顺",
          watch: "79",
          time: " 19-12-26 09:15"
        },
        {
          id: 5,
          img:
            "https://images-test.integrity.com.cn/6ff946ceb9e34d73992efc74be5d6c98_%E7%86%8A%E8%89%B3%E5%B9%B3-%E5%BC%A0%E9%87%91%E8%81%9A%E5%81%9C%EF%BC%88%E5%91%A8%E5%9B%9B%E6%99%9A%EF%BC%89.jpg",
          title: "青龙实战之 如何做好热点题材股？（周三干货直播）",
          name: "熊艳平",
          watch: "514",
          time: " 19-12-25 21:34"
        },
        {
          id: 6,
          img:
            "https://images-test.integrity.com.cn/e00b8638368d4c2b91c6ed81fa34af94_%E5%88%A9%E4%B9%90%20%E5%88%A9%E8%82%A1%E4%B9%90%E9%81%93.png",
          title: "20191225 线上教学倒数第3天",
          name: "李以勒团队",
          watch: "1161",
          time: " 19-12-25 19:54"
        }
      ], //视频精选
      videoRightList: [
        {
          id: 1,
          title: "20191211 芳芳老师交易系统定位"
        },
        {
          id: 2,
          title: "寻找大牛股回踩确认后的绝佳上车机会"
        },
        {
          id: 3,
          title: "周二（1210）盘后分享-上涨运行结构应对"
        },
        {
          id: 4,
          title: "2轮B浪反弹结构未变"
        },
        {
          id: 5,
          title: "上涨过程中的量价关系"
        },
        {
          id: 6,
          title: "反包后的结构变化"
        },
        {
          id: 7,
          title: "20191218 高位震荡，回踩皆为大机会"
        },
        {
          id: 8,
          title: "跨年时间窗口开启"
        },
        {
          id: 9,
          title: "20191218 滚动低吸，切莫追涨（盘中版）"
        },
        {
          id: 10,
          title: "大金融带动持续放量，缩量回踩皆机会"
        }
      ],
      courseList: [
        {
          id: 1,
          img:
            "https://images-test.integrity.com.cn/8cbfc250647045dca1d57fbe59b47b69_%E8%B4%A2%E5%AF%8C%E6%80%BB%E8%A3%81%E7%8F%AD2%E6%9C%9F%E8%AF%BE%E7%A8%8B%E5%B0%81%E9%9D%A2.jpg",
          content:
            "本课程从技术入门，将操盘口诀，案例分析和价值选股有机结合，详解操盘买卖点，传授抄底逃顶秘诀，并有成熟操盘手详解庄家操盘机要，半年时间让小白投资者攀升顶尖操盘水准。1、量价绝杀量价筑底篇和突破（买在启动前）、量价拉升篇和出货（卖在出货前）、量价实战擒牛。2、神奇指标趋势指标叠加震荡指标，MACD与KDJ精准把握趋势绝佳买卖点，BOLL叠加SAR双指标验证，打造高抛低吸短线克星。3、均线实战结合均线波段案例带你学习特定均线，不同均线组合在各周期交易和抄底逃顶中的实战应用。4、短线操盘实战班涨停板教学与案例现场互动，顶尖操盘手详解操盘实战法则（真正了解庄家是怎么操盘的）。5、价值导论价值投资学习要点和认知误区，如何看懂一家公司，投资者如何研读年报，资产负债表蕴含哪些投资秘诀。6、价值真经实战班三大报表快速入门，中国投资两大实践：新兴行业和政策买卖点价值投资全解密，交易体系完善与某一行业投资机会，透视财报区别企业优劣，价值体系应用详解。7、总裁班密训七类企业价值投资实战应用，现场答疑解惑让课程融入实战，上市公司调研，总裁班毕业晚宴。",
          title: "财富总裁班（第二期）",
          name: "边风炜",
          watch: "1842"
        },
        {
          id: 2,
          img:
            "https://images-test.integrity.com.cn/75fb6a87d5f24a5289909271522f9836_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191225131907.jpg",
          content: "稳操胜券操盘体系——寻找牛股回调后的上车机会！",
          title: "稳操胜券操盘体系",
          name: "魏宁海",
          watch: "234"
        },
        {
          id: 3,
          img:
            "https://images-test.integrity.com.cn/50694ab4bdc64c4895f964a220968dbe_e8585204218b48c7a3ec0e885d54d8a7_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_201912121540431.jpg",
          content:
            "一、核心逻辑：趋势循环 多空博弈 筹码转换二、交易目标定向：主流资金布局，波段持仓的看盘思路和操盘体系三、大思维/大格局立体看盘策略：阴阳转换，熊牛循环，波段结构、级别判定，大小周期共振四、买卖区域和点位的类别判断和操作五、上涨行情机会的时空目标测算和持仓应对六、大资金稳健操盘的必经之路：趋势操作、波段持仓的心理建设",
          title: "【正式课】波段结构学",
          name: "余芳芳团队",
          watch: "3070"
        },
        {
          id: 4,
          img:
            "https://images-test.integrity.com.cn/b047d469f3ea4dac8972af19690e3ea0_%E8%82%A1%E5%B8%82%E7%9C%9F%E7%BB%8F%E5%AF%8C%E8%B1%AA%E7%8F%AD%E8%AF%BE%E7%A8%8B%E5%B0%81%E9%9D%A2.jpg",
          title: "富豪班VIP课堂",
          content:
            "内容：量价绝杀二鬼绝杀阴阳绝杀形态绝杀包含：牛股基因、阴阳博弈、大盘定势、经典K线、经典图形、天眼战法、新股战法、二鬼战法",
          name: "徐文明团队",
          watch: "22135"
        },
        {
          id: 5,
          img:
            "https://images-test.integrity.com.cn/01693e3af6524c1aa3892a7bf2ada045_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_201912201809212.jpg",
          content: "如何掌握大牛股时间：2019.12.28（周六）9:00~17：00",
          title: "如何掌握大牛股",
          name: "李以勒团队",
          watch: "1517"
        },
        {
          id: 6,
          img:
            "https://images-test.integrity.com.cn/5c9950db97f04fdca3f895a6d09e27ab_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20191224142327.jpg",
          content:
            "1. 课程内容：宏观分析与行业研究学习收获：通过学习宏观经济指标、行业数据以及医疗行业研究实践，帮助你提高宏观分析能力，准确把握熊市末端抄底时机。2. 课程内容：企业价值研究与财务分析学习收获：两天掌握三大财务报表分析，学会如何通过企业风险分析来防止踩雷，通过学习凯式牛股矩阵，帮你解决“买什么”的选股难题。3. 课程内容：估值与投资组合学习收获：通过学习凯式估值和凯式组合，帮你解决何时买，何时卖，赚什么钱，赚多少钱的操作难题，手把手教你建立自己的股票池，学会制定交易计划，掌握“三买”操盘方法。4. 课程内容：走进上市公司与企业调研学习收获：通过实地调研真正的好公司（3家），帮你破除K线的“障”，明白好公司才是股价的万有引力，股价上涨真正的动力来自于公司本身业绩的增长。5. 网络辅导课一年10次凯老师带你实时跟进公司财报数据变化，适时调整股票池组合投资策略，跟踪学习效果确保课程内容完全吸收掌握。",
          title: "操盘手投资实践班",
          name: "吕长顺",
          watch: "1923"
        }
      ], //课程列表
      courseRightList: [
        {
          id: 1,
          title: "《手把手教你用研报》一年期"
        },
        {
          id: 2,
          title: "操盘特训班"
        },
        {
          id: 3,
          title: "富豪班VIP课堂"
        },
        {
          id: 4,
          title: "量价狙击实战班"
        },
        {
          id: 5,
          title: "财富总裁班"
        },
        {
          id: 6,
          title: "赢在起跑线-手把手教您价值掘金"
        },
        {
          id: 7,
          title: "利用盘中六论 轻松抓涨停板"
        },
        {
          id: 8,
          title: "2019下半年医疗与科技行业报告会"
        },
        {
          id: 9,
          title: "【公开课】波段结构学"
        },
        {
          id: 10,
          title: "江氏弟子班VIP视频"
        }
      ],
      logList: [
        {
          id: 1,
          img: "https://www.9635.com.cn/file/flink/zgzqb.jpg"
        },
        {
          id: 2,
          img: "https://www.9635.com.cn/file/flink/shzqb.jpg"
        },
        {
          id: 3,
          img: "https://www.9635.com.cn/file/flink/zqrb.jpg"
        },
        {
          id: 4,
          img: "https://www.9635.com.cn/file/flink/zqsb.png"
        },
        {
          id: 5,
          img: "https://www.9635.com.cn/file/flink/shzqb.png"
        },
        {
          id: 6,
          img: "https://www.9635.com.cn/file/flink/szzqjys.png"
        },
        {
          id: 7,
          img: "https://www.9635.com.cn/file/flink/zgzqyxh.png"
        },
        {
          id: 8,
          img: "https://www.9635.com.cn/file/flink/sina.png"
        },
        {
          id: 9,
          img: "https://www.9635.com.cn/file/flink/sohu.png"
        },
        {
          id: 10,
          img: "https://www.9635.com.cn/file/flink/jrj.png"
        },
        {
          id: 11,
          img: "https://www.9635.com.cn/file/flink/news163.png"
        },
        {
          id: 12,
          img: "https://www.9635.com.cn/file/flink/xinhua.png"
        }
      ],
      oneList: [],
      twoList: [],
      rank: [],
      news: [],
      // screenWidth: document.body.clientWidth,
      classId: 1
    };
  },
  // mounted() {
  //   window.onresize = () => {
  //     return (() => {
  //       window.screenWidth = document.body.clientWidth;
  //       this.screenWidth = window.screenWidth;
  //     })();
  //   };
  // },
  // watch: {
  //   screenWidth(v) {
  //     if (v <= 500) {
  //       this.$router.push("/web/index");
  //     } else {
  //       this.$router.push("/pc/index");
  //     }
  //   }
  // },
  methods: {
    _router_go_(path) {
      this.$router.push(path);
    },
    _change_live_(id = 1) {
      this.live = [];
      this.classId = id;
      if (this.classId == 1) {
        for (const key of this.live_list) {
          if (!key.living) {
            this.live.push(key);
          }
        }
      } else if (this.classId == 2) {
        for (const key of this.live_list) {
          if (key.living) {
            this.live.push(key);
          }
        }
      }
    },
    _get_Home_page_() {
      this.$api.get(API.homepage, {}).then(res => {
        if (res.code === 0) {
          this.live_list = res.data.lives;
          let list = [];
          this._change_live_(1);
          for (const key of this.live_list) {
            if (key.living) {
              list.push(key);
            }
          }
          if (list.length == 0) {
            this.liveImg =
              "https://images-test.integrity.com.cn/cover/default_live_cover_2.png";
          } else {
            this.liveImg = list[0].imageUrl;
          }
          this.leftTeacherList = res.data.teachers.splice(0, 4);
          this.oneList = res.data.teachers.splice(0, 10);
          this.twoList = res.data.teachers;
          this.rank = res.data.rank;
          this.news = res.data.information;
          this.$emit('fullscreenLoading', false)
        }
      });
    }
  },
  created() {
    this._get_Home_page_();
  },
  components: {
    "v-swiper": Swiper,
    "v-teacher": Teacher
  }
};
// prettier
</script>
<style lang="less">
.pc {
  .carousel_box {
    height: 337px;
    .swiper-container {
      width: 100%;
      height: 100%;
      .swiper-pagination-bullet {
        margin: 0 4px !important;
        width: 8px !important;
        height: 8px !important;
        display: inline-block;
        border-radius: 100%;
        background: #000;
        opacity: 0.2;
      }
      .swiper-pagination-bullets {
        bottom: 10px !important;
        left: 0;
        width: 100%;
      }
      .swiper-pagination-bullet-active {
        background: #007aff !important;
      }
      .swiper-wrapper {
        img {
          width: 100%;
          height: 100%;
        }
      }
      .swiper-pagination {
        .swiper-pagination-bullet-active {
          background: #fff !important;
        }
      }
    }
    .el-carousel__container {
      .el-carousel__item {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    ul.el-carousel__indicators {
      width: 100%;
      li.el-carousel__indicator {
        .el-carousel__button {
          border-radius: 50%;
          width: 8px;
          height: 8px;
        }
      }
    }
  }
}
</style>
<style lang="less" scoped>
.pc {
  background: #f8f8f8;
  .main {
    width: 1200px;
    margin: 0 auto;

    .hrhg_index {
      display: flex;
      .hrhg_index_live {
        width: 718px;
        height: 416px;
        border-radius: 2px;
        margin-top: 26px;
        border: 1px solid rgba(210, 210, 210, 1);
        img {
          width: 718px;
          height: 416px;
          border-radius: 2px;
        }
      }
      .hrhg_index_live_list {
        margin-top: 26px;
        width: 100%;
        margin-left: 8px;
        .top {
          width: 100%;
          position: relative;
          height: 58px;
          display: flex;
          justify-content: space-around;
          border-bottom: 1px solid #d9d9d9;
          span {
            width: 32.83%;
            background: #fafafa;
            text-align: center;
            height: 54px;
            font-size: 22px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            line-height: 54px;
            color: #000000;
            cursor: pointer;
            &.active {
              border-right: 1px solid #d9d9d9;
              border-top: 3px solid var(--hrhg-theme-skin, #e70e1d);
              border-bottom: 0;
              background: #ffffff;
              border-left: 1px solid #d9d9d9;
              height: 56px;
            }
          }
        }
        .content {
          overflow: hidden;
          width: 472px;
          height: 370px;
          background: #ffffff;
          .list {
            list-style: none;
            display: flex;
            .item {
              height: 20px;
              font-size: 14px;
              font-family: PingFangSC-Regular;
              font-weight: 500;
              color: rgba(51, 51, 51, 1);
              line-height: 20px;
              margin: 11px 70px 12px 34px;
              &:last-child {
                margin-left: 105px;
              }
            }
          }
          .live_list {
            list-style: none;
            .live_item {
              cursor: pointer;
              border-bottom: 1px solid #eeeeee;
              padding: 11px 0 12px 0;
              ul {
                list-style: none;
                display: flex;
                li {
                  width: 50%;
                  margin-left: 37px;
                  text-align: left;
                  font-size: 14px;
                  font-weight: 400;
                  color: #333;
                  line-height: 20px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  font-family: PingFangSC-Regular;
                  &:last-child {
                    margin-left: 25px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .hrhg_index_recommend_live {
      width: 100%;
      margin-top: 20px;
      .moreTeacher {
        position: absolute;
        right: 0;
        cursor: pointer;
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 20px;
        padding-top: 29px;
      }
      .hrhg_index_tit {
        width: 100%;
        height: 65px;
        line-height: 65px;
        display: flex;
        justify-content: flex-start;
        .hrhg_index_teacher_tit {
          width: 4px;
          height: 26px;
          display: block;
          float: left;
          margin-top: 26px;
          background: rgba(231, 14, 29, 1);
        }
        span {
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
      .list {
        width: 100%;
        margin-top: 15px;
        position: relative;
        overflow: hidden;
        height: 130px;
        display: flex;
        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
          margin-left: 23px;
          position: relative;
          &:first-child {
            margin: 0;
          }
          .hot {
            position: absolute;
            bottom: 20px;
            left: calc(50% - 112px);
            background: #fff;
            border-radius: 50%;
          }
          .img {
            cursor: pointer;
            // float: left;
            display: inline-block;
            width: 100px;
            height: 100px;
            margin: 15px;
            border-radius: 50%;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .int {
            // float: right;
            display: inline-block;
            width: 238px;
            margin-right: 15px;
            .name {
              display: flex;
              justify-content: flex-start;
              cursor: pointer;
              font-size: 26px;
              font-weight: 500;
              font-family: SourceHanSansCN;
              color: #333333;
              height: 61px;
              position: relative;
              line-height: 63px;
              .btn {
                cursor: pointer;
                font-size: 16px;
                line-height: 22px;
                position: absolute;
                top: calc(50% - 16px);
                right: 20px;
                color: #ff4350;
                font-size: 16px;
                font-family: PingFangSC;
                padding: 5px;
                border: 2px solid #ff4350;
                border-radius: 4px;
              }
            }
            .content {
              font-size: 16px;
              color: #9b9b9b;
              font-family: PingFangSC;
              line-height: 22px;
              overflow: hidden;
              text-overflow: ellipsis;
              text-align: left;
              height: 47px;
              margin-bottom: 27px;
            }
          }
        }
      }
      .faceList {
        list-style: none;
        display: flex;
        width: 100%;
        .faceItem {
          width: 20%;
          margin-left: 15px;
          background: #fff;
          box-shadow: 0px 0px 6px 0px rgba(187, 187, 187, 0.38);
          transition: all 0.2s;
          &:first-child {
            margin-left: 0px;
          }
          &:hover {
            box-shadow: rgba(187, 187, 187, 0.86) 2px 2px 6px 0px;
          }
          ul {
            list-style: none;
            .name {
              color: #333;
              font-size: 14px;
              line-height: 20px;
            }
            li {
              cursor: pointer;
              &:first-child {
                margin: 0;
              }
              &:nth-child(2) {
                font-weight: 500;
              }
              &:last-child {
                margin: 0;
                font-size: 10px;
                margin-bottom: 6px;
              }
            }
          }
        }
      }
    }
    .hrhg_index_teacher_live {
      width: 100%;
      margin-top: 30px;
      height: 388px;
      display: flex;
      justify-content: space-between;
      .left {
        width: 860px;
        height: 388px;
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
    .cooperation {
      width: 100%;
      height: 238px;
      background: #fff;
      margin-top: 30px;
      box-shadow: 0px 2px 4px 2px rgba(225, 225, 225, 0.9);
      .hrhg_index_tit {
        width: 100%;
        height: 65px;
        line-height: 65px;
        display: flex;
        justify-content: flex-start;
        .hrhg_index_teacher_tit {
          width: 4px;
          height: 26px;
          display: block;
          float: left;
          margin-top: 26px;
          margin-left: 20px;
          background: rgba(231, 14, 29, 1);
        }
        span {
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
      .logList {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        .log-item {
          width: 184px;
          height: 70px;
          float: left;
          margin: 0 0 14px 10px;
          cursor: pointer;
          border: 1px solid #dcdcdc;
          .img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .hrhg_index_about {
      width: 100%;
      height: 120px;
      margin-top: 30px;
      background: #fff;
      box-shadow: 0px 2px 4px 2px rgba(225, 225, 225, 0.9);
      margin-bottom: 60px;
      .hrhg_index_tit {
        width: 100%;
        height: 65px;
        line-height: 65px;
        display: flex;
        justify-content: flex-start;
        .hrhg_index_teacher_tit {
          width: 4px;
          height: 26px;
          display: block;
          float: left;
          margin-top: 26px;
          margin-left: 20px;
          background: rgba(231, 14, 29, 1);
        }
        span {
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
      .about {
        padding: 20px;
        line-height: 18px;
        font-size: 14px;
        color: #666;
        text-align: left;
      }
    }
  }
}
</style>