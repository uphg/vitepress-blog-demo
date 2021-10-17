import fs from 'fs'
import p from 'path'
import matter from 'gray-matter'
import orderBy from 'lodash.orderby'
import { BlogType } from './interface'

const hasKeys = (obj, keys) => {
  for (const key of keys) {
    if (obj[key]) return true
  }
}

export const createBlogs = (blogs: string[]) => {
  // 根据时间排序
  const orderBlogs = orderBy(blogs, (filePath) => {
    const source = fs.readFileSync(p.resolve(filePath), 'utf8');
    const { data: frontmatter } = matter(source)
    return new Date(frontmatter.date || 0).getTime()
  }, 'desc')

  const newBlogs: BlogType[] = []
  for (const filePath of orderBlogs) {
    const source = fs.readFileSync(p.resolve(filePath), 'utf8');
    const { data: frontmatter } = matter(source)
    const { title, date, tags } = frontmatter

    if (hasKeys(frontmatter, ['home', 'isArchive', 'isTags', 'isAbout'])) continue
    newBlogs.push({
      path: filePath.replace(/(^docs\/)|(\.(md|html))?$/g, ''),
      title,
      date,
      tags
    })
  }
  return newBlogs
}