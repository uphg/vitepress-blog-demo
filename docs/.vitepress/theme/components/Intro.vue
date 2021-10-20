<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { frontmatter, site } = useData()
const { avatar } = frontmatter.value

const description = computed(() => site.value.description || frontmatter.value.description)

</script>

<template>
  <div class="intro">
    <div class="avatar" v-if="avatar">
      <a class="avatar-link" href="">
        <img class="avatar-img" :src="withBase(avatar)" alt="个人头像">
      </a>
    </div>
    <p class="description" v-if="description">{{ description }}</p>
  </div>
</template>

<style scoped>
.intro {
  text-align: center;
  padding: 4em 0 4em;
}

.home .avatar-img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  transition: transform 0.25s;
  border: 4px solid rgb(0 0 0 / 5%);
}

.home .avatar-img:hover {
  position: relative;
  transform: translateY(-0.75em);
  cursor: pointer;
}
</style>

