<script setup lang="ts">
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
import BlogList from './BlogList.vue'
import { BlogType } from 'docs/.vitepress/utils/interface'

const activeIndex = ref<number | null>(null)
const { theme } = useData()
const getTags = computed(() => theme.value.tags)

const blogs = ref(theme.value.blogs)

const tagBlogs = computed(() => {
  const index = activeIndex.value

  return index || index === 0 ? blogs.value.filter((blog: BlogType) => {
    const tag = getTags.value[index]
    return blog?.tags?.includes(tag)
  }) || [] : blogs.value
})

const clickTag = (index: number) => {
  if (activeIndex.value === index) {
    activeIndex.value = null
    return
  }

  activeIndex.value = index
}
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
          { active: activeIndex === index }
        ]"
        @click="clickTag(index)"
      >{{ item }}</button>
    </section>
    <BlogList :blogs="tagBlogs" />
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
  padding 0 20px 1rem

.tag-button
  border none
  cursor pointer
  min-height 2em
  display inline-block
  padding 4px 10px
  font-size 14px
  background-color #eff1fa
  color #3850b7
  border-radius 4px
  margin-right 1em
  margin-bottom 1em
  &.active
    background-color #485fc7
    color #fff
</style>
