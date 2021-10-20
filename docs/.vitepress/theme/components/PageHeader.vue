<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { displayTime } from '../utils'

const { frontmatter, theme } = useData()

const author = computed(() => frontmatter.value.author || theme.value.author)
</script>

<template>
  <div class="page-header">
    <h2 class="page-title">{{ frontmatter.title }}</h2>
    <div class="meta">
      <span class="author">{{ author }}</span>
      <span>&nbsp;发布于&nbsp;</span>
      <span class="date">{{ displayTime(frontmatter.date || 0) }}</span>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  /* text-align: center; */
  padding: 2em 0;
}

.page-title {
  margin: 1em 0 0;
  font-size: 2em;
}
.page-header .meta {
  padding-top: 1em;
  color: #909090;
  font-size: 14px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.author {
  color: var(--c-text);
}
</style>