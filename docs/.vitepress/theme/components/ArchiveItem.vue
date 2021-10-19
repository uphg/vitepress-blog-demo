<script setup lang="ts">
import { withBase } from 'vitepress'
import dayjs from 'dayjs'
import { BlogType } from 'docs/.vitepress/utils/interface'

defineProps<{
  item: BlogType
}>()

const displayDate = (time?: string | number) => dayjs(time).format('YYYY-MM-DD HH:mm')
</script>

<template>
  <div class="archive-item">
    <a :href="withBase(item.path)" class="title" :title="item.title">{{ item.title }}</a>
    <span class="date">{{ displayDate(item.date) }}</span>
  </div>
</template>

<style scoped lang="stylus">
@require '../styles/mixins'

.archive-item
  font-size 16px
  display flex
  justify-content space-between
  margin 0.8em 0 0.8em 1em
  .title
    color inherit
    text-decoration inherit
    width calc(100% - 8.5em)
    text-ellipsis()
    &:hover
      color var(--c-brand)
  .date
    font-family -apple-system, helvetica neue, Helvetica, sans-serif
    color #a9a9b3

</style>
