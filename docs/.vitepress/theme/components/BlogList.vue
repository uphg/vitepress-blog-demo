<script setup lang="ts">
import { BlogType } from '../../utils/interface'
import BlogItem from './BlogItem.vue'
defineProps<{
  blogs: BlogType[]
}>()
</script>

<template>
  <div class="blog-list">
    <BlogItem
      v-for="(blog, index) in blogs"
      :key="index"
      :item="blog"
    />
  </div>
</template>

<style scoped lang="stylus">
.blog-list {
  min-height 524px
}
</style>