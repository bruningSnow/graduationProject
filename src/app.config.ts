export default {
  pages: ['pages/home/index', 'pages/classfiy/index', 'pages/my/index'],
  subPackages: [
    {
      root: 'subPackages/',
      pages: ['productDetail/index', 'searchPage/index'],
    },
  ],
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: 'pages/home/index',
      },
      {
        pagePath: 'pages/classfiy/index',
      },
      {
        pagePath: 'pages/my/index',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '标题',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom',
  },
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序车辆位置定位',
    },
  },
};
