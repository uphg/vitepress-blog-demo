<script setup lang="ts">
import PageFooter from './PageFooter.vue'
import NextAndPrevLinks from './NextAndPrevLinks.vue'
</script>

<template>
  <main class="page">
    <div class="container">
      <slot name="top" />

      <Content class="content" />
      <PageFooter />
      <NextAndPrevLinks />

      <slot name="bottom" />
    </div>
  </main>
</template>

<style lang="stylus">
.container
  margin 0 auto
  padding 0 1.5rem 4rem
  max-width 48rem
</style>