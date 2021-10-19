<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{
  avatar: string // 总条数
  description?: string // 当前页
}>()
</script>

<template>
  <div class="intro">
    <div class="avatar" v-if="avatar">
      <a class="avatar-link" href="">
        <img class="avatar-img" :src="withBase(avatar)" alt="个人头像">
      </a>
    </div>
    <p class="description">{{ description }}</p>
  </div>
</template>

<style>
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

