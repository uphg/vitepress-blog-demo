<script setup lang="ts">
import { useData } from 'vitepress'

const { site } = useData()
const msgs = [
  `这里什么都没有。`,
  `我们是怎么来到这里的？`,
  `那是404。`,
  `看起来我们有一些断开的链接。`
]
const getMessage = () => msgs[Math.floor(Math.random() * msgs.length)]
</script>

<template>
  <div class="theme">
    <h1>404</h1>
    <blockquote>{{ getMessage() }}</blockquote>
    <a :href="site.base" aria-label="go to home">带我回家。</a>
  </div>
</template>

