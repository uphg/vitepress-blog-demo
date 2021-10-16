<script setup lang="ts">
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
import Pagination from './Pagination.vue';
import Intro from './Intro.vue'
import BlogList from './BlogList.vue'
import HomeFooter from './HomeFooter.vue'
import { createBlogList } from '../../mock/createBlogList'

const { theme, frontmatter } = useData()

const pageSize = 10
const blogs = ref(createBlogList(theme.value.blogs))
const currentPage = ref(1)

const blogTotal = computed(() => blogs.value.length)
const currentBlogList = computed(() => {
  const start = pageSize * (currentPage.value - 1)
  const end = start + pageSize > blogTotal.value ? blogTotal.value : start + pageSize
  return blogs.value.slice(start, end)
})
</script>

<template>
  <main class="home">
    <div class="home-content">
      <Intro
        v-if="frontmatter.avatar"
        :avatar="frontmatter.avatar"
        :description="frontmatter.description"
      />
      <BlogList :blogs="currentBlogList" />
      <Pagination
        v-model:page="currentPage"
        :page-size="pageSize"
        :total="blogTotal"
      />
    </div>
    <HomeFooter />
  </main>
</template>

<style scoped>
.home-content {
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  max-width: calc(var(--c-main-width) + 40px);
}
</style>
