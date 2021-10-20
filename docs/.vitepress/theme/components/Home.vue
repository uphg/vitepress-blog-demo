<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import Intro from './Intro.vue'
import BlogList from './BlogList.vue'
import HomeFooter from './HomeFooter.vue'

const { theme } = useData()
const blogs = ref(theme.value.blogs)
</script>

<template>
  <main class="home">
    <div class="home-content">
      <Intro />
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

@media (max-width: 768px) {
  .home-content {
    padding: 0 0 4rem;
  }
}
</style>
