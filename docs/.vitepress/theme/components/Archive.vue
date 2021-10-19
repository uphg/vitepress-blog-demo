<script setup lang="ts">
import { useData/*,  withBase */ } from 'vitepress'
// import dayjs from 'dayjs'
import { mockBlogList } from '../../mock/mockBlogList'
import { createArchives } from '../composables/archive'
import ArchiveItem from './ArchiveItem.vue'

const { theme } = useData()
const blogs = mockBlogList(theme.value.blogs)
const archives = createArchives(blogs)
// const displayDate = (time?: string | number) => dayjs(time).format('YYYY-MM-DD HH:mm')
</script>

<template>
  <div class="archive">
    <h2 class="column-title">归档</h2>
    <div
      v-for="(archive, index) in archives"
      :key="index + 'archive'"
      class="year-part"
    >
      <h3 class="year">{{ archive.year }}</h3>
      <ArchiveItem
        v-for="(blog, i) in archive.list"
        :key="i"
        :item="blog"
      />
      <!-- <div
        class="archive-item"
        v-for="(blog, i) in item.list"
        :key="i"
      >
        <a :href="withBase(blog.path)" class="title">{{ blog.title }}</a>
        <span class="date">{{ displayDate(blog.date) }}</span>
      </div> -->
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

// .archive-item
//   font-size 16px
//   display flex
//   justify-content space-between
//   margin 0.8em 0 0.8em 1em
//   .title
//     color inherit
//     text-decoration inherit
//     &:hover
//       color var(--c-brand)
//   .date
//     font-family -apple-system, helvetica neue, Helvetica, sans-serif
//     color #a9a9b3

</style>
