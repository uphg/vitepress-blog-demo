<script setup lang="ts">
import { ref, toRefs, computed } from 'vue'
import { BlogType } from '../../utils/interface'
import BlogItem from './BlogItem.vue'
import Pagination from './Pagination.vue';

const props = defineProps<{
  blogs: BlogType[]
}>()

const pageSize = 10

const currentPage = ref(1)
const { blogs } = toRefs(props)

const blogTotal = computed(() => blogs.value.length)
const currentBlogList = computed(() => {
  const start = pageSize * (currentPage.value - 1)
  const end = start + pageSize > blogTotal.value ? blogTotal.value : start + pageSize
  const currentBlogs = blogs.value.slice(start, end)

  if (currentBlogs.length > 0) {
    return currentBlogs
  } else {
    currentPage.value = 1
    blogs.value.slice(0, pageSize - 1)
  }
  return currentBlogs.length > 0 ? currentBlogs : blogs.value.slice(0, pageSize - 1)
})
</script>

<template>
  <div class="blog-list">
    <BlogItem
      v-for="(blog, index) in currentBlogList"
      :key="index"
      :item="blog"
    />
  </div>
  <Pagination
    v-model:page="currentPage"
    :page-size="pageSize"
    :total="blogTotal"
  />
</template>

<style scoped lang="stylus">
.blog-list {
  min-height 524px
}
</style>