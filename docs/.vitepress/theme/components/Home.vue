<script setup lang="ts">
import { useData } from 'vitepress'
import { displayTime } from '../utils'

const { theme, frontmatter } = useData()
const { pages } = theme.value
</script>

<template>
  <main class="home">
    <div class="home-content">
      <div class="intro">
        <div class="avatar" v-if="frontmatter.avatar">
          <a class="avatar-link" href="">
            <img class="avatar-img" :src="frontmatter.avatar" alt="个人头像">
          </a>
        </div>
        <p class="description">{{ frontmatter.description }}</p>
      </div>
      <div class="blog-list">
        <a
          class="blog-item"
          v-for="(page, index) in pages"
          :key="index"
          :href="page.path"
        >
          <h2 class="title-content">
            <span class="title" :title="page.title">{{ page.title }}</span>
          </h2>
          <div v-if="page.description" class="summary">
            <span>{{ page.description }}</span>
          </div>
          <div class="date">{{ displayTime(page.date) }}</div>
        </a>
      </div>
    </div>
    <!-- <footer class="footer">
      <div class="container">
        <p class="text">{{ '一些内容...' }}</p>
      </div>
    </footer> -->
  </main>
</template>

<style scoped>
.home-content {
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  max-width: calc(var(--c-main-width) + 40px);
}

.intro {
  text-align: center;
  margin: 4em 0 4em;
}

.home .avatar-img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  transition: transform 0.25s;
  border: 4px solid rgb(0 0 0 / 5%);
  /* box-shadow: 0 0 0 0.3618em rgb(0 0 0 / 5%); */
}

.home .avatar-img:hover {
  position: relative;
  transform: translateY(-0.75em);
  cursor: pointer;
}

.blog-item {
  padding: 16px 20px;
  color: inherit;
  text-decoration: inherit;
  display: block;
  border-radius: 5px;
  /* margin-bottom: 1.5em; */
  transition: background-color 0.25s;
}
.blog-item:hover {
  background-color: rgb(0, 0, 0, 0.05);
}
.title-content {
  margin: 0;
  font-size: 18px;
  font-weight: normal;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.blog-item .title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.blog-item .date {
  padding-top: 8px;
  font-size: 16px;
  color: #a6a6a6;
}
.summary {
  color: #808080;
  padding-top: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.6;
}
</style>