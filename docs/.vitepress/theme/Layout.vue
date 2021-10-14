<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

// components
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import Page from './components/Page.vue'

// generic state
const { page, theme, frontmatter } = useData()
console.log('page.value')
console.log({...page.value})
console.log('theme.value')
console.log({...theme.value})

// has home
const enableHome = computed(() => !!frontmatter.value.home)
</script>

<template>
  <div class="theme">
    <NavBar />
    <Home v-if="enableHome" />
    <Page v-else />
  </div>
</template>
