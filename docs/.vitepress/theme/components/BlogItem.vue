<script setup lang="ts">
// import { toRefs } from 'vue'
import { displayTime } from '../utils'

defineProps<{
  title: string
  date: number
  description: string
}>()

</script>

<template>
  <div class="blog-item">
    <h2 class="title-content">
      <span class="title" :title="title">{{ title }}</span>
      <span class="date">{{ displayTime(date) }}</span>
    </h2>
    <div class="summary">
      <span>{{ description }}</span>
    </div>
  </div>
</template>

<style scoped>
.blog-item {
  margin-top: 36px;
}
.title-content {
  margin: 0;
  font-size: 18px;
  font-weight: normal;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.title-content .title {
  width: calc(100% - 9em);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title-content .date {
  font-size: 16px;
  color: #a6a6a6;
  text-align: right;
  /* width: 30%; */
  width: 10em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.summary {
  color: #808080;
  padding-top: 10px;
}
</style>