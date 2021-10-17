import dayjs from 'dayjs'
import { BlogType } from 'docs/.vitepress/utils/interface'

interface Archive {
  year: number,
  list: BlogType[]
}

export function createArchive(blogs: BlogType[]) {
  const newArchives = [] as Archive[]
  blogs.forEach(blog => {
    if (newArchives.length <= 0) {
      newArchives.push({
        year: dayjs(blog.date).year(),
        list: []
      })
    }
    for (const item of newArchives) {
      if (item.year && item.year === dayjs(blog.date).year()) {
        item.list.push(blog)
        break
      } else {
        newArchives.push({
          year: dayjs(blog.date).year(),
          list: []
        })
      }
    }
  });

  return newArchives
}