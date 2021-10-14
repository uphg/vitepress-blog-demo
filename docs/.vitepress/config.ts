

export default async () => {
  return {
    title: 'Hello VitePress',
    description: 'Just playing around.',
    themeConfig: {
      // _blogs: blogs,
      // searchMaxSuggestions: 10,
      nav: [
        { text: '首页', link: '/' },
        { text: '示例', link: '/example/' },
      ],
      sidebar: [
        {
          text: '示例',   // 必要的
          link: '/example/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            {
              text: '介绍',
              link: '/example/index',
            },
            {
              text: '第一篇',
              link: '/example/one',
            },
            {
              text: '第二篇',
              link: '/example/two',
            },
            {
              text: '第三篇',
              link: '/example/three',
            }
          ]
        },
      ]
    },
  }
}