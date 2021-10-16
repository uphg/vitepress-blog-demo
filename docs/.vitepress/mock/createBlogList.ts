export const createBlogList = (existingBlogs) => {
  const newBlogList = []
  for (let i = 0; i < 80; i++) {
    newBlogList.push({
      path: `博客${i}的路径`,
      title: `标题${i}`,
      date: new Date().getTime() - (i * 24 * 3600 * 1000),
      tags: ['JavaScript', 'ES6', 'Vue', 'SSR', 'Node.js']
    })
  }

  return [...existingBlogs, ...newBlogList]
}