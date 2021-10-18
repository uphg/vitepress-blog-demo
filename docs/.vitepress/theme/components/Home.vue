<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import Intro from './Intro.vue'
import BlogList from './BlogList.vue'
import HomeFooter from './HomeFooter.vue'
import { mockBlogList } from '../../mock/mockBlogList'

const { theme, frontmatter } = useData()
const blogs = ref(mockBlogList(theme.value.blogs))
</script>

<template>
  <main class="home">
    <div class="home-content">
      <Intro
        v-if="frontmatter.avatar"
        :avatar="frontmatter.avatar"
        :description="frontmatter.description"
      />
      <BlogList :blogs="blogs" />
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
