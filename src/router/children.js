export const pc = [{
  path: '/pc',
  name: 'pchome',
  component: () => import('@/pc/Home'),
  children: [{
      path: 'index',
      name: 'pcindex',
      component: () => import('@/pc/index')
    },
    {
      path: 'teacher',
      name: 'pcteacherindex',
      component: () => import('@/pc/recommend')
    },
    {
      path: 'article',
      name: 'pcarticleindex',
      component: () => import('@/pc/article')
    },
    {
      path: 'video',
      name: 'pcvideoindex',
      component: () => import('@/pc/video')
    },
    {
      path: 'course',
      name: 'pccourseindex',
      component: () => import('@/pc/course')
    },
    {
      path: 'share',
      name: 'pcshareindex',
      component: () => import('@/pc/share')
    },
    {
      path: 'pc_download',
      name: 'pcdownloadindex',
      component: () => import('@/pc/download')
    },
    {
      path: 'article/detail',
      name: 'pcarticleDetail',
      component: () => import('@/pc/views/article')
    },
    {
      path: 'video/detail',
      name: 'pcvideoDetail',
      component: () => import('@/pc/views/video')
    }
  ]
}]
// import Home form '@/web/Home'
export const web = [{
  path: '/web',
  name: 'webhome',
  component: () => import('@/web/Home'),
  children: [{
      path: 'index',
      name: 'webindex',
      component: () => import('@/web/index')
    },
    {
      path: 'course',
      name: 'webcourse',
      component: () => import('@/web/views/course')
    },
    {
      path: 'teacher',
      name: 'webteacherindex',
      component: () => import('@/web/views/teacher')
    },
    {
      path: 'mine',
      name: 'webmineindex',
      component: () => import('@/web/views/mine')
    },
    {
      path: 'mine/follow',
      name: 'webminefollwo',
      component: () => import('@/web/views/mine/follow')
    },
    {
      path: 'mine/collection',
      name: 'webminecollection',
      component: () => import('@/web/views/mine/collection')
    },
    {
      path: 'mine/about',
      name: 'webmineabout',
      component: () => import('@/web/views/mine/about')
    },
    {
      path: 'mine/disclaimer',
      name: 'webminedisclaimer',
      component: () => import('@/web/views/mine/disclaimer')
    },
    {
      path: 'teacher/detail',
      name: 'webteacherdetail',
      component: () => import('@/web/views/detail')
    },
    {
      path: 'login/index',
      name: 'webloginindex',
      component: () => import('@/web/views/login')
    },
    {
      path: 'login/phone_login',
      name: 'webloginphone',
      component: () => import('@/web/views/login/phone')
    },
    {
      path: 'login/forget_pwd',
      name: 'webloginPwd',
      component: () => import('@/web/views/login/pwd')
    },
    {
      path: 'video/detail',
      name: 'webvideodetail',
      component: () => import('@/web/views/video')
    },
    {
      path: 'article/index',
      name: 'webarticle',
      component: () => import('@/web/views/article')
    },
    {
      path: 'article/detail',
      name: 'webarticleDetail',
      component: () => import('@/web/views/article/detail')
    },
    {
      path: 'course/detail',
      name: 'courseDetail',
      component: () => import('@/web/views/courseDetail')
    }
  ]
}]