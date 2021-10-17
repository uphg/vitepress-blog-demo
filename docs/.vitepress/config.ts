import { createBlogs } from './utils/createBlogs'
import fg from 'fast-glob'

export default async () => {
  const blogFilePaths = await fg(['docs/**/*.md']); // 获取所有博客的 markdown 文件路径
  const blogs = createBlogs(blogFilePaths)
  console.log('blogs')
  console.log(blogs)

  return {
    hiConfig: 'hello World',
    title: '吕恒的个人博客',
    description: 'Just playing around.',
    themeConfig: {
      blogs,
      // searchMaxSuggestions: 10,
      author: '吕恒',

      editLinks: true,
      editLinkText: 'Edit this page on GitHub',

      lastUpdated: '最后更新时间',
      
      nav: [
        { text: '首页', link: '/' },
        { text: '归档', link: '/archive/' },
        { text: '标签', link: '/tags/' },
        { text: '关于', link: '/about/' },
      ],
      // sidebar: [
      //   {
      //     text: '示例',   // 必要的
      //     link: '/example/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      //     collapsable: false, // 可选的, 默认值是 true,
      //     children: [
      //       {
      //         text: '介绍',
      //         link: '/example/index',
      //       },
      //       {
      //         text: '第一篇',
      //         link: '/example/one',
      //       },
      //       {
      //         text: '第二篇',
      //         link: '/example/two',
      //       },
      //       {
      //         text: '第三篇',
      //         link: '/example/three',
      //       }
      //     ]
      //   },
      // ]
    },
    markdown: {
      lineNumbers: true
    }
  }
}