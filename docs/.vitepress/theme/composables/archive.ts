import dayjs from 'dayjs'
import { BlogType } from 'docs/.vitepress/utils/interface'

export interface Archive {
  year: number,
  list: BlogType[]
}

const getCurrentYear = (archives: Archive[], date?: string) => {
  for (let i = 0; i < archives.length; i++) {
    const item = archives[i]
    if (item.year && item.year === dayjs(date).year()) {
      return item
    }
  }
}

export const createArchives = (blogs: BlogType[]) => {
  const newArchives = [] as Archive[]
  for (const blog of blogs) {
    if (newArchives.length <= 0) {
      newArchives.push({
        year: dayjs(blog.date).year(),
        list: [blog]
      })
      continue
    }
    const currentYear = getCurrentYear(newArchives, blog.date)
    if (currentYear) {
      currentYear.list.push(blog)
    } else {
      newArchives.push({
        year: dayjs(blog.date).year(),
        list: [blog]
      })
    }
  }

  return newArchives
}