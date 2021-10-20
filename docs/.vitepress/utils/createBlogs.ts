import orderBy from 'lodash.orderby'
import { BlogType } from './interface'
import { getMatter } from './getMatter'

const hasKeys = (obj, keys) => {
  for (const key of keys) {
    if (obj[key]) return true
  }
}

export const createBlogs = (filePaths: string[]) => {
  // 根据时间排序
  const newBlogs: BlogType[] = []
  const orderBlogs = orderBy(filePaths, (filePath) => {
    const { date } = getMatter(filePath)
    return new Date(date || 0).getTime()
  }, 'desc')

  for (const filePath of orderBlogs) {
    const frontmatter = getMatter(filePath)
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