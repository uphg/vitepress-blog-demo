<script setup lang="ts">
import { ref, computed } from 'vue'
import { useData, withBase, useRouter } from 'vitepress'
import { BlogType } from 'docs/.vitepress/utils/interface'

const { theme } = useData()
const { go } = useRouter()
const blogs = theme.value.blogs
const text = ref('')
const focused = ref(false)
const focusIndex = ref<number | null>(null)

const displaySuggestions = computed(() => {
  return suggestions.value.length > 0 && focused.value
})
const suggestions = computed(() => {
  if (text.value) {
    const max = 20
    const result = blogs.filter((blog: BlogType) => {
      return blog.title.toLowerCase().includes(text.value.toLowerCase())
    })
    return result.length > 10 ? result.slice(0, max) : result
  }
  return []
}) 

const handleInput = (e: Event) => {
  text.value = (e.target as HTMLTextAreaElement).value
  focused.value = !!text.value
}

const goPage = (index: number | null) => {
  if (!(typeof index === 'number')) return
  
  const item = suggestions.value[index]
  item && (go(withBase(item.path)))
}

const onUp = () => {
  if (!focusIndex.value) return

  focusIndex.value -= 1
}

const onDown = () => {
  if (focusIndex.value && focusIndex.value >= suggestions.value.length - 1) return

  if (typeof focusIndex.value === 'number') {
    focusIndex.value += 1
  } else {
    focusIndex.value = 0
  }
}

const focus = (index: number) => {
  focusIndex.value = index
}

const unfocus = () => {
  focusIndex.value = null
}
</script>

<template>
  <div class="search-container">
    <input
      class="search"
      type="text"
      placeholder="搜索"
      @input="handleInput"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.enter="goPage(focusIndex)"
      @keyup.up="onUp"
      @keyup.down="onDown"
    >
    <ul class="suggestions" v-if="displaySuggestions" @mouseleave="unfocus">
      <li
        v-for="(blog, index) in suggestions"
        :key="index"
        :class="[
          'suggestion',
          { active: focusIndex === index }
        ]"
      >
        <a
          :href="withBase(blog.path)"
          @mousedown="goPage(index)"
          @mouseenter="focus(index)"
        >{{ blog.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="stylus">
@require '../styles/mixins'

.search-container
  position relative
  .suggestions
    max-width 320px
    position absolute
    top 100%
    left 0
    z-index 2
    padding 0.4rem
    background-color #fff
    list-style-type none
    border-radius 3px
    border 1px solid var(--c-divider)
    box-shadow 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)
    .suggestion
      a
        display block
        white-space normal
        color inherit
        text-decoration inherit
        cursor pointer
        line-height 1.4
        padding 0.4rem 0.6rem
        border-radius 2px
      &.active a
        background-color #eff1fa
        color var(--c-brand)

  .search
    min-width 160px
    padding 3px 6px
    border-radius 2px
    border 1px solid #d9d9d9
    transition border-color 0.25s, box-shadow 0.25s
    placeholder-color #bfbfbf
    &:hover
      border-color var(--c-brand)
    &:focus
      outline none
      border-color var(--c-brand)
      box-shadow 0 0 0 2px rgba(24, 144, 255, .12)

</style>
