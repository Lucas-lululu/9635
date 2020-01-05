const PATH_HEAD = `https://api.9635.com.cn`
const WWW_HEAD = `https://www.9635.com.cn`

// 全局API
export const Index = {
  homepage: `${PATH_HEAD}/v2/home/homepage`,
  popularityLive: `${PATH_HEAD}/rest/v1/teacher/popularityLive`,
  list: `${WWW_HEAD}/rest/v1/teacher/list`
}

export const Course = {
  courseList: `${PATH_HEAD}/v5/course/list`
}

export const Teacher = {
  list: `${PATH_HEAD}/v2/rank/list`
}

export const Detail = {
  detail: `${PATH_HEAD}/v4/live/detail`,
  info: `${PATH_HEAD}/teacher/info`,
  video: `${PATH_HEAD}/teacher/videos`,
  Information: `${PATH_HEAD}/teacher/information`,
  courses: `${PATH_HEAD}/teacher/courses`,
  article: `${PATH_HEAD}/article/detail`,
  videoDetail: `${PATH_HEAD}/article/videoDetail`
}

export const List = {
  articleList: `${PATH_HEAD}/v2/article/list`,
  collectionList: `${PATH_HEAD}/v2/collection/list`,
  follows: `${PATH_HEAD}/user/follows`
}

export const Login = {
  info: `${PATH_HEAD}/v3/user/info`,
  sendCode: `${PATH_HEAD}/login/sendVerityCode`
}