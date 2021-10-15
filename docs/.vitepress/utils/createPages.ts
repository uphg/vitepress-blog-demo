import fs from 'fs'
import p from 'path'
import matter from 'gray-matter'
import orderBy from 'lodash.orderby'

const hasKeys = (obj, keys) => {
  for (const key of keys) {
    if (obj[key]) return true
  }
} 

export const createPages = (pages: string[]) => {
  // 根据时间排序
  const orderPages = orderBy(pages, (filePath) => {
    const source = fs.readFileSync(p.resolve(filePath), 'utf8');
    const { data: frontmatter } = matter(source)
    return new Date(frontmatter.date || 0).getTime()
  }, 'desc')

  const newPages = []
  for (const filePath of orderPages) {
    const source = fs.readFileSync(p.resolve(filePath), 'utf8');
    const { data: frontmatter } = matter(source)
    const { title, date, tags } = frontmatter

    if (hasKeys(frontmatter, ['home', 'isArchive', 'isTags', 'isAbout'])) continue
    newPages.push({
      path: filePath.replace(/(^docs\/)|(\.md$)/g, ''),
      title,
      date,
      tags
    })
  }
  return newPages/* .map((filePath) => {
    const source = fs.readFileSync(p.resolve(filePath), 'utf8');
    const { data: frontmatter } = matter(source)
    const { title, date, tags } = frontmatter
    console.log('frontmatter')
    console.log(frontmatter)
    return title && {
      path: filePath.replace(/\.md$/, ''),
      title,
      date,
      tags
    }
  }) */
}