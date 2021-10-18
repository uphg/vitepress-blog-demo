<script lang="ts">
const getCurrentYear = (archives: Archive[], date?: string) => {
  for (let i = 0; i < archives.length; i++) {
    const item = archives[i]
    if (item.year && item.year === dayjs(date).year()) {
      return item
    }
  }
}

const createArchives = (blogs: BlogType[]) => {
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
</script>

<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import { mockBlogList } from '../../mock/mockBlogList'
import dayjs from 'dayjs'
import { BlogType } from 'docs/.vitepress/utils/interface'

interface Archive {
  year: number,
  list: BlogType[]
}

const { theme } = useData()
const blogs = mockBlogList(theme.value.blogs)
const archives = createArchives(blogs)
const displayDate = (time?: string | number) => dayjs(time).format('YYYY-MM-DD HH:mm')
</script>

<template>
  <div class="archive">
    <h2 class="column-title">归档</h2>
    <div
      v-for="(item, index) in archives"
      :key="index + 'archive'"
      class="year-part"
    >
      <h3 class="year">{{ item.year }}</h3>
      <div
        class="archive-item"
        v-for="(blog, i) in item.list"
        :key="i"
      >
        <a :href="withBase(blog.path)" class="title">{{ blog.title }}</a>
        <span class="date">{{ displayDate(blog.date) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.archive
  margin 0 auto
  padding 0 1.5rem 4rem
  max-width var(--c-main-width)
  .year-part
    margin-bottom 20px
  .year
    margin 0

.archive-item
  font-size 16px
  display flex
  justify-content space-between
  margin 0.8em 0 0.8em 1em
  .title
    color inherit
    text-decoration inherit
    &:hover
      color var(--c-brand)
  .date
    font-family -apple-system, helvetica neue, Helvetica, sans-serif
    color #a9a9b3

</style>
