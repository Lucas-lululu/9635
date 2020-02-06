<template>
    <div class="course-detail-box" v-if="body" v-loading.fullscreen.lock="fullscreenLoading">
        <!-- 头部图片 -->
        <div class="detail-header">
            <i class="el-icon-arrow-left" @click="_return_"></i>
            <img :src="body.courseImage" alt="">
        </div>
        <!-- nav -->
        <ul class="nav-list">
            <li v-for="item in navList" :key="item.id" @click="classId = item.id">
                <span :class="classId == item.id ? 'active' : ''">{{item.title}}
                    <i v-if='item.id == 3'>({{body.commentCount}})</i>
                </span>
            </li>
        </ul>
        <!-- end -->
        <!-- main-简介 -->
        <div class="main-box" v-if="classId == 1">
            <div class="header">
                <h3>{{body.courseName}}</h3>
                <p>
                    <el-rate v-model="mainRate"></el-rate>
                    <span>{{body.tenantCode}}人已报名</span>
                    <span>{{body.updateDate}}更新</span>
                </p>
            </div>
            <div class="main">
                <!-- 头部 -->
                <div class="header">
                    <i></i>
                    <span>老师介绍</span>
                </div>
                <!-- 内容 -->
                <div class="body">
                     <img src="https://www.9635.com.cn/images/teacher_num.png" alt="">
                    <span v-if="body.teacher">{{body.teacher.certificate}}</span>
                </div>
                <div class="body">
                    <img src="https://www.9635.com.cn/images/teacher_info.png" alt="">
                    <span v-if="body.teacher">{{body.teacher.introduce}}</span>
                </div>
            </div>
            <div class="main">
                <!-- 头部 -->
                <div class="header">
                    <i></i>
                    <span>课程简介</span>
                </div>
                <!-- 内容 -->
                <p>目录：<br>一、如何构建一套交易系统<br>二、怎样的系统才能赚钱？<br>三、找到自己在市场中的定位</p>
            </div>
            <div class="main-bottom"></div>
        </div>
        <!-- main-目录 -->
        <div class="main-box" v-if="classId == 2">
            <div class="nav-header">
                <i></i>
                <span>课程目录</span>
            </div>
            <ul class="list">
                <li class="item" v-for="(item, index) in lessList" :key="index">
                    <span>{{index + 1}}.</span>
                    <span>{{item.lessonName}}</span>
                </li>
                <li class="item">加载完成</li>
            </ul>
        </div>
        <!-- main-评论 -->
        <div class="main-box" v-if="classId == 3">
            <div class="nav-header">
                <i></i>
                <span>用户评论</span>
            </div>
           <div class="list-box">
                <ul class="list">
                    <li class="item" v-for="item in commentList" :key="item.id">
                        <div class="user-info">
                           <div class="left">
                                <img :src="item.img" alt="">
                                <div>
                                    <p>{{item.name}}</p>
                                    <p>{{item.time}}</p>
                                </div>
                           </div>
                           <div class="right">
                               <el-rate v-model="item.rate">
                                </el-rate>
                           </div>
                        </div>
                        <div class="user-commit">{{item.commit}}</div>
                    </li>
                    <li class="item" style="padding-top: 12px">加载完成</li>
                </ul>
           </div>
        </div>
        <!-- end -->
        <!-- 悬浮 -->
        <div class="btn">
            <ul>
                <li>
                    <img src="https://www.9635.com.cn/images/talk_serve.png" alt="">
                    <span>咨询客服</span>
                </li>
                <li>
                    <span>我要观看</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import  * as API  from '@/assets/api/api'
export default {
    data () {
        return {
            fullscreenLoading: true,
            navList: [
                {
                    id: 1,
                    title: '简介'
                },
                {
                    id: 2,
                    title: '目录'
                },
                {
                    id: 3,
                    title: '评价'
                }
            ],
            lessList: [],
            commentList: [],
            body: '',
            Id: this.$route.query.courseId,
            classId: 1,
            mainRate: 4
        }
    },
    methods: {
        // 获取详情内容
        _getLiveDetail_() {
            let data = {
                courseId: this.Id
            }
            this._netGet(API.Detail.courseDetail, data).then(res => {
                if (res.code === 0) {
                    this.body = res.data
                    this.fullscreenLoading = false
                }
            }).catch(err => {
                setTimeout(() => {
                    this.fullscreenLoading = false
                }, 2000)
            })
        },
        // 获取详情目录列表
        _get_detail_() {
            this.fullscreenLoading = true
            let data = {
                courseId: this.Id
            }
            this.$api.post(API.List.lessonList, data).then(res => {
                if (res.code === 0) {
                    this.lessList = res.data
                    this.fullscreenLoading = false
                }
            }).catch(err => {
                setTimeout(() => {
                    this.fullscreenLoading = false
                }, 2000)
            })
        },
        // 获取详情评论列表
        _get_courseList_() {
            this.fullscreenLoading = true
            let data = {
                courseId: this.Id
            }
            this.$api.get(API.List.courseCommentList, data).then(res => {
                if (res.code === 0) {
                //    this.commentList = res.data
                   console.log('评论')
                   console.log(res)
                   this.fullscreenLoading = false
                }
            }).catch(err => {
                setTimeout(() => {
                    this.fullscreenLoading = false
                }, 2000)
            })
        },
        _return_() {
            this.$router.go(-1)
        }
    },
    created () {
        this._get_courseList_()
        this._get_detail_()
        this._getLiveDetail_()
    }
}
</script>
<style lang="less" scoped>
@import './style/index.less';
</style>
<style lang="less">
    .el-rate {
        width: 100px;
        span {
            i {
                color: #EE762E !important;
                font-size: 13px;
            }   
        } 
    }
</style>