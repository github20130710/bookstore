export const MENUS = [
  {
    path: 'pages',
    children: [
      {
        title: 'Dashboard',
        icon: 'ion-android-home',
        path: 'dashboard',
        selected: false,
        expanded: false,
        order: 0
      },{
        title: '资源',
        icon: 'icon-edit',
        path: 'resource',
        selected: false,
        expanded: false,
        order: 100,
        children: [
          {
            path: 'pages/resource/book',
            title: '书籍'
          },{
            path: 'pages/resource/category',
            title: '分类'
          },{
            path: 'pages/resource/tag',
            title: '标签'
          }
        ]
      },{
        title: '用户',
        icon: 'icon-edit',
        path: 'people',
        selected: false,
        expanded: false,
        order: 100,
        children: [
          {
            path: '/resource/book',
            title: '人员'
          },{
            path: '/resource/category',
            title: '分组'
          },{
            path: '/resource/tag',
            title: '角色'
          }
        ]
      }
    ]
  }
];
