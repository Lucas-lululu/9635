const API_HEAD = `https://api.9635.com.cn`
const PATH_HEAD = `http://47.101.68.155:8201`
const WWW_HEAD = `https://www.9635.com.cn`

// 全局API
export const Index = {
  homepage: `${PATH_HEAD}/api/finance/home/homepage`,
  popularityLive: `${PATH_HEAD}/rest/v1/teacher/popularityLive`,
  list: `${WWW_HEAD}/rest/v1/teacher/list`
}

export const Course = {
  courseList: `${PATH_HEAD}/api/finance/course/list`,
  video: `${API_HEAD}/teacher/videos`
}

export const Teacher = {
  list: `${PATH_HEAD}/api/finance/rank/list`,
  video: `${API_HEAD}/teacher/videos`
}

export const Detail = {
  detail: `${PATH_HEAD}/api/finance/live/detail`,
  info: `${PATH_HEAD}/api/finance/teacher/info`,
  video: `${PATH_HEAD}/api/finance/teacher/videos`,
  Information: `${PATH_HEAD}/api/finance/teacher/information`,
  courses: `${PATH_HEAD}/api/finance/teacher/courses`,
  article: `${PATH_HEAD}/api/finance/article/detail`,
  videoDetail: `${PATH_HEAD}/api/finance/article/videoDetail`,
  courseDetail: `${PATH_HEAD}/api/finance/course/detail`
}

export const List = {
  articleList: `${PATH_HEAD}/api/finance/article/list`,
  collectionList: `${PATH_HEAD}/v2/collection/list`,
  follows: `${PATH_HEAD}/user/follows`,
  courseCommentList: `${PATH_HEAD}/api/finance/course/commentList`,
  lessonList: `${PATH_HEAD}/api/finance/course/lessonList`
}

export const Login = {
  info: `${PATH_HEAD}/api/finance/user/info`,
  sendCode: `${PATH_HEAD}/api/finance/login/sendVerityCode`,
  loginWithPhone: `${PATH_HEAD}/api/finance/login/loginWithPhone`,
  login: `${PATH_HEAD}/api/finance/login/login`,
  resetLogin: `${PATH_HEAD}/api/finance/login/resetPassword`
}
