<script setup lang="ts">
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
import { mockBlogList } from '../../mock/mockBlogList'
import BlogListx from './BlogList.vue'

const currentTagIndex = ref<number | null>(null)
const { theme } = useData()
const getTags = computed(() => theme.value.tags)

const blogs = ref(mockBlogList(theme.value.blogs))

const tagBlogs = computed(() => {
  const index = currentTagIndex.value

  return index || index === 0 ? blogs.value.filter((blog) => {
    const tag = getTags.value[index]
    return blog?.tags?.includes(tag)
  }) || [] : blogs.value
})
</script>

<template>
  <div class="tags">
    <h2 class="column-title">标签</h2>
    <section class="tags-container">
      <button
        v-for="(item, index) in getTags"
        :key="index"
        :class="[
          'tag-button',
          { active: currentTagIndex === index }
        ]"
        @click="currentTagIndex = index"
      >{{ item }}</button>
    </section>
    <BlogListx :blogs="tagBlogs" />
  </div>
</template>

<style scoped lang="stylus">
.tags
  margin 0 auto
  padding 0 1.5rem 4rem
  max-width: calc(var(--c-main-width) + 40px);

.tags-container
  display flex
  align-items center
  padding 0 20px 2rem

.tag-button
  border none
  cursor pointer
  min-height 2em
  display inline-block
  padding 4px 10px
  background-color #eff1fa
  font-size 14px
  color #3850b7
  border-radius 4px
  &.active
    background-color #485fc7
    color #fff
  &:not(:last-child)
    margin-right 1em

</style>
