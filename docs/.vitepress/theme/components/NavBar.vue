<script setup lang="ts">
import { useData, withBase } from 'vitepress'
import Search from './Search.vue'

const { theme, site } = useData()
const { nav } = theme.value
</script>

<template>
  <header class="nav-bar">
    <div class="nav-container">
      <a class="nav-button nav-title" href="/">{{ site.title }}</a>
      <Search />
      <a
        class="nav-button nav-item"
        v-for="(item, index) in nav"
        :key="index"
        :href="withBase(item.link)"
      >{{ item.text }}</a>
    </div>
  </header>
</template>

<style scoped lang="stylus">
.nav-bar {
  padding: 1.5rem 0;
  font-size: 14px;
}
.nav-container {
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: var(--c-main-width);
  display: flex;
  align-items: center;
  .search {
    margin-left: 16px;
  }
}

.nav-title {
  margin-right: auto;
}

.nav-button {
  color: inherit;
  text-decoration: inherit;
  transition: color 0.25s;
}
.nav-button:hover {
  color: var(--c-brand);
}

.nav-item {
  margin-left: 16px;
}
</style>
