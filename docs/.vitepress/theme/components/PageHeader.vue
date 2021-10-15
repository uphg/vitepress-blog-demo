<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
console.log('frontmatter.value')
console.log({...frontmatter.value})
</script>

<template>
  <div class="page-top">
    <h2>{{ frontmatter.title }}</h2>
  </div>
</template>
