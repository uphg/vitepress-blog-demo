<script setup lang="ts">
import { useData, withBase } from 'vitepress'
const { theme } = useData()
const { nav } = theme.value
</script>

<template>
  <header class="nav-bar">
    <div class="nav-container">
      <span class="nav-title">xxx 的个人博客</span>
      <a
        class="nav-item"
        v-for="(item, index) in nav"
        :key="index"
        :href="withBase(item.link)"
      >{{ item.text }}</a>
    </div>
  </header>
</template>

<style scoped>
.nav-bar {
  height: 60px;
  padding: 1rem 0;
  font-size: 14px;
}
.nav-container {
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: var(--c-main-width);
  display: flex;
}

.nav-title {
  margin-right: auto;
}

.nav-item {
  color: inherit;
  text-decoration: inherit;
  margin-left: 16px;
}

</style>
