<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
const { frontmatter, theme } = useData()

const author = computed(() => frontmatter.value.author || theme.value.author)

const href = window.location.href;
const protocol = window.location.protocol;
const host = window.location.host;
const URL = document.URL;
const location = document.location;

const address = computed(() => document.location.origin + document.location.pathname)

console.log('href')
console.log(href)

console.log('protocol')
console.log(protocol)

console.log('host')
console.log(host)

console.log('URL')
console.log(URL)

console.log('location')
console.log(location)

</script>

<template>
  <div class="page-copyright">
    <p class="copyright-item">
      <span>作者：</span>
      <span>{{ author }}</span>
    </p>
    <p class="copyright-item">
      <span>链接：</span>
      <a class="link" :href="address">{{ address }}</a>
    </p>
    <p class="copyright-item lincese">
      <span>本文采用</span>
      <a
        class="link"
        rel="license"
        href="http://creativecommons.org/licenses/by-nc/4.0/"
        target="_blank"
      >知识共享署名-非商业性使用 4.0 国际许可协议</a>
      <span>进行许可</span>
    </p>
  </div>
</template>

<style lang="stylus">
.page-copyright
  padding 0.8rem 1.2rem
  margin 1rem 0
  border 1px solid #ddd
  border-radius 6px
  font-size 14px
  // background-color #fafafa
  .copyright-item
    margin 8px 0
    &.lincese
      font-weight bold
    .link
      color inherit
      text-decoration inherit
      transition color 0.25s
      &:hover
        color var(--c-brand)

</style>