import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    perms: ['GET /aaa','POST /bbb']     will control the page perms (you can set multiple perms)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '上海悦为', icon: 'dashboard', noCache: true }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/home',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'homeManage',
    meta: {
      title: '首页',
      icon: 'chart'
    },
    children: [
      {
        path: 'banner',
        component: () => import('@/views/home/bannerList'),
        name: 'banner',
        meta: {
          title: '首页Banner',
          noCache: true
        }
      },
      {
        path: 'brand',
        component: () => import('@/views/home/brandList'),
        name: 'brand',
        meta: {
          title: '品牌客户',
          noCache: true
        }
      },
      {
        path: 'business',
        component: () => import('@/views/home/businessList'),
        name: 'business',
        meta: {
          title: '主营业务',
          noCache: true
        }
      },
      {
        path: 'advantage',
        component: () => import('@/views/home/advantageList'),
        name: 'advantage',
        meta: {
          title: '悦为优势',
          noCache: true
        }
      },
      {
        path: 'cooperate',
        component: () => import('@/views/home/cooperateList'),
        name: 'cooperate',
        meta: {
          title: '合作流程',
          noCache: true
        }
      }
    ]
  },

  {
    path: '/marketing',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'integratedMarketing',
    meta: {
      title: '整合营销',
      icon: 'chart'
    },
    children: [
      {
        path: 'global',
        component: () => import('@/views/market/global'),
        name: 'global',
        meta: {
          title: '全域运营',
          noCache: true
        }
      },
      {
        path: 'content',
        component: () => import('@/views/market/content'),
        name: 'content',
        meta: {
          title: '内容运营',
          noCache: true
        }
      },
      {
        path: 'broadcast',
        component: () => import('@/views/market/broadcast'),
        name: 'broadcast',
        meta: {
          title: '直播代运营',
          noCache: true
        }
      },
      {
        path: 'micro',
        component: () => import('@/views/market/micro'),
        name: 'micro',
        meta: {
          title: '双微代运营',
          noCache: true
        }
      },
      {
        path: 'private',
        component: () => import('@/views/market/private'),
        name: 'private',
        meta: {
          title: '私域运营',
          noCache: true
        }
      },
      {
        path: 'explosive',
        component: () => import('@/views/market/explosive'),
        name: 'explosive',
        meta: {
          title: '爆款计划',
          noCache: true
        }
      },
      {
        path: 'video',
        component: () => import('@/views/market/video'),
        name: 'video',
        meta: {
          title: '视频/摄影',
          noCache: true
        }
      }
    ]
  },

  {
    path: '/operate',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'operateManage',
    meta: {
      title: '全渠道运营',
      icon: 'chart'
    },
    children: [
      {
        path: 'cross',
        component: () => import('@/views/operate/cross'),
        name: 'cross',
        meta: {
          title: '跨境业务',
          noCache: true
        }
      },
      {
        path: 'data',
        component: () => import('@/views/operate/data'),
        name: 'data',
        meta: {
          title: '数据服务',
          noCache: true
        }
      },
      {
        path: 'deposit',
        component: () => import('@/views/operate/deposit'),
        name: 'deposit',
        meta: {
          title: '整店托管运营',
          noCache: true
        }
      },
      {
        path: 'vision',
        component: () => import('@/views/operate/vision'),
        name: 'vision',
        meta: {
          title: '品牌视觉',
          noCache: true
        }
      },
      {
        path: 'plan',
        component: () => import('@/views/operate/plan'),
        name: 'plan',
        meta: {
          title: '品牌策划',
          noCache: true
        }
      },
      {
        path: 'customer',
        component: () => import('@/views/operate/customer'),
        name: 'customer',
        meta: {
          title: '客户服务',
          noCache: true
        }
      },
      {
        path: 'logistics',
        component: () => import('@/views/operate/logistics'),
        name: 'logistics',
        meta: {
          title: '仓储物流',
          noCache: true
        }
      }
    ]
  },

  {
    path: '/case',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'classicCase',
    meta: {
      title: '经典案例',
      icon: 'chart'
    },
    children: [
      {
        path: 'banner',
        component: () => import('@/views/case/bannerList'),
        name: 'bannerList',
        meta: {
          title: 'Banner图片',
          noCache: true
        }
      },
      {
        path: 'brand',
        component: () => import('@/views/case/brandList'),
        name: 'brandList',
        meta: {
          title: '品牌集锦',
          noCache: true
        }
      }
      // {
      //   path: 'cases',
      //   component: () => import('@/views/case/caseList'),
      //   name: 'caseList',
      //   meta: {
      //     title: '成功案例',
      //     noCache: true
      //   }
      // }
    ]
  },

  {
    path: '/about',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'aboutManage',
    meta: {
      title: '关于我们',
      icon: 'chart'
    },
    children: [
      {
        path: 'happydo',
        component: () => import('@/views/about/yueweiList'),
        name: 'happydo',
        meta: {
          title: '关于悦为',
          noCache: true
        }
      },
      {
        path: 'news',
        component: () => import('@/views/about/newsList'),
        name: 'news',
        meta: {
          title: '新闻中心',
          noCache: true
        }
      }
    ]
  },

  {
    path: '/join',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    name: 'joinManage',
    meta: {
      title: '加入我们',
      icon: 'chart'
    },
    children: [
      {
        path: 'banner',
        component: () => import('@/views/join/bannerList'),
        name: 'banner',
        meta: {
          title: 'Banner图片',
          noCache: true
        }
      },
      {
        path: 'reason',
        component: () => import('@/views/join/reasonList'),
        name: 'reason',
        meta: {
          title: '为何要加入悦为',
          noCache: true
        }
      },
      // {
      //   path: 'culture',
      //   component: () => import('@/views/join/cultureList'),
      //   name: 'culture',
      //   meta: {
      //     title: '悦为企业文化',
      //     noCache: true
      //   }
      // },
      {
        path: 'recruit',
        component: () => import('@/views/join/recruitList'),
        name: 'recruit',
        meta: {
          title: '招聘岗位',
          noCache: true
        }
      }
      // {
      //   path: 'address',
      //   component: () => import('@/views/join/addressList'),
      //   name: 'address',
      //   meta: {
      //     title: '公司地址-地图',
      //     noCache: true
      //   }
      // }
    ]
  },
  // {
  //   path: '/bottom',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   alwaysShow: true,
  //   name: 'bottomNavigation',
  //   meta: {
  //     title: '底部导航',
  //     icon: 'chart'
  //   },
  //   children: [
  //     {
  //       path: 'contact',
  //       component: () => import('@/views/bottom/contact'),
  //       name: 'bottomContact',
  //       meta: {
  //         title: '联系我们',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },

  {
    path: '/profile',
    component: Layout,
    redirect: 'noredirect',
    alwaysShow: true,
    children: [
      {
        path: 'password',
        component: () => import('@/views/profile/password'),
        name: 'password',
        meta: { title: '修改密码', noCache: true }
      }
    ],
    hidden: true
  },

  { path: '*', redirect: '/404', hidden: true }
]
