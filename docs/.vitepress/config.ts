import { createBlogs } from './utils/createBlogs'
import fg from 'fast-glob'
import { createTags } from './utils/createTags';

export default async () => {
  const blogFilePaths = await fg(['docs/**/*.md']); // 获取所有博客的 markdown 文件路径
  const blogs = createBlogs(blogFilePaths)
  const tags = createTags(blogFilePaths)

  return {
    lang: 'zh-CN',
    base: '/blog/',
    title: '吕恒的个人博客',
    description: 'Just playing around.',
    head: [
      ['link', {rel: 'stylesheet', href: '/font/index.css'}],
    ],
    themeConfig: {
      blogs,
      tags,
      searchMaxSuggestions: 20,
      author: '吕恒',
      lastUpdated: '最后更新时间',
      
      nav: [
        { text: '首页', link: '/' },
        { text: '归档', link: '/archive/' },
        { text: '标签', link: '/tags/' },
        { text: '关于', link: '/about/' },
      ],

      // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
      repo: 'uphg/blog',
      // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
      // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
      repoLabel: '查看源码',

      // 以下为可选的编辑链接选项

      // 假如你的文档仓库和项目本身不在一个仓库：
      // docsRepo: 'vuejs/vuepress',
      // 假如文档不是放在仓库的根目录下：
      docsDir: 'docs',
      // 假如文档放在一个特定的分支下：
      docsBranch: 'master',
      // 默认是 false, 设置为 true 来启用
      editLinks: true,
      // 默认为 "Edit this page"
      editLinkText: '在 GitHub 上编辑此页面'
    },
    markdown: {
      lineNumbers: true
    }
  }
}