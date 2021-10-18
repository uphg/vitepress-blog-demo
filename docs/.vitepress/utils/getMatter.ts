import fs from 'fs'
import p from 'path'
import matter from 'gray-matter'

export const getMatter = (filePath) => {
  const source = fs.readFileSync(p.resolve(filePath), 'utf8');
  const { data: frontmatter } = matter(source)
  return { frontmatter }
}