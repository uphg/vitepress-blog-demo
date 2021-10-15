<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

// components
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import Page from './components/Page.vue'
import Archive from './components/Archive.vue'
import Tags from './components/Tags.vue'
import About from './components/About.vue'

// generic state
const { frontmatter } = useData()

const isCustomLayout = computed(() => !!frontmatter.value.customLayout)

const mainContent = computed(() => {
  if (!!frontmatter.value.home) return Home
  if (!!frontmatter.value.isArchive) return Archive
  if (!!frontmatter.value.isTags) return Tags
  if (!!frontmatter.value.isAbout) return About
  return Page
})

</script>

<template>
  <div class="theme">
    <NavBar />

    <Content v-if="isCustomLayout" />
    <component v-else :is="mainContent"></component>

  </div>
  <Debug />
</template>
