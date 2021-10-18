import orderBy from 'lodash.orderby'
import { getMatter } from './getMatter'

export const createTags = (filePaths: string[]) => {
  const newTags: string[] = []
  
  for (const filePath of filePaths) {
    const { frontmatter } = getMatter(filePath)
    const { tags } = frontmatter
    if (!(tags && tags.length > 0)) continue
    for (const tag of tags) {
      !newTags.includes(tag) && (newTags.push(tag))
    }
  }

  return orderBy(newTags)
}