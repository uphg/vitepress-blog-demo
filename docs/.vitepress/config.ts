import { createPages } from './utils/createPages'

// import fs from 'fs'
// import p from 'path'
// import matter from 'gray-matter'
import fg from 'fast-glob'

// const fileNames = (filePath: string) => {
//   return new Promise((resolve, reject) => {
//     fs.readdir(filePath, (error, fileList) => {
//       if (error) return reject(error)
//       resolve(fileList)
//     })
//   })
// }

// console.log('fg')
// console.log(fg)

// const str = fs.readFileSync(p.resolve('./docs/example/one.md'), 'utf8');
// console.log(matter(str));



export default async () => {
  const pagePaths = await fg(['docs/**/*.md']); // 获取所有 markdown 文件路径
  const pages = createPages(pagePaths)
  console.log('pages')
  console.log(pages)

  return {
    title: 'Hello VitePress',
    description: 'Just playing around.',
    themeConfig: {
      pages,
      // _blogs: blogs,
      // searchMaxSuggestions: 10,
      nav: [
        { text: '首页', link: '/' },
        { text: '归档', link: '/archive/' },
        { text: '标签', link: '/tags/' },
        { text: '关于', link: '/about/' },
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