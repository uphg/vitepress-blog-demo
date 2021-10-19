<script setup lang="ts">
import { useData } from 'vitepress'
import { mockBlogList } from '../../mock/mockBlogList'
import { createArchives } from '../composables/archive'
import ArchiveItem from './ArchiveItem.vue'

const { theme } = useData()
const blogs = mockBlogList(theme.value.blogs)
const archives = createArchives(blogs)
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

</style>
