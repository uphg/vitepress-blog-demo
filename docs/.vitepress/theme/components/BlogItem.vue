<script setup lang="ts">
import { withBase } from 'vitepress'
import { displayTime } from '../utils'
import { BlogType } from 'docs/.vitepress/utils/interface'

defineProps<{
  item: BlogType
}>()
</script>

<template>
  <a
    class="blog-item"
    :href="withBase(item.path)"
  >
    <h2 class="title-content">
      <span class="title" :title="item.title">{{ item.title }}</span>
    </h2>
    <div v-if="item.description" class="summary">
      <span>{{ item.description }}</span>
    </div>
    <div class="meta">
      <template v-if="item.date">
        <span class="date">{{ displayTime(item.date || 0) }}</span>
        <span v-if="item.tags && item.tags.length > 0" class="divider"></span>
      </template>
      <template v-for="(tag, index) in item.tags" :key="index">
        <span v-if="index !== 0" class="divider"></span>
        <span class="tag-item">{{ tag }}</span>
      </template>
    </div>
  </a>
</template>

<style scoped lang="stylus">
@require '../styles/mixins'

.blog-item {
  color: inherit;
  text-decoration: inherit;
  padding: 16px 20px;
  display: block;
  border-radius: 5px;
  /* margin-bottom: 1.5em; */
  transition: background-color 0.25s;
}
.blog-item:hover {
  background-color: rgba(0, 0, 0, 5%);
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
  text-ellipsis()
}
.blog-item .meta {
  padding-top: 8px;
  font-size: 16px;
  color: #a9a9b3;
  display: flex;
  align-items: center;
}
.blog-item .divider {
  divider-style()
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