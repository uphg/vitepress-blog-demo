export const mockBlogList = (existingBlogs) => {
  const newBlogList = []
  const oneDay = 24 * 3600 * 1000
  const oneYear = 365 * oneDay
  for (let i = 0; i < 80; i++) {
    newBlogList.push({
      path: `博客${i}的路径`,
      title: `标题${i}`,
      date: new Date().getTime() - (Math.floor(i / 10) * oneYear + (i * 30 * oneDay)),
      tags: ['JavaScript', 'ES6', 'Vue', 'SSR', 'Node.js']
    })
  }

  return [...existingBlogs, ...newBlogList]
}