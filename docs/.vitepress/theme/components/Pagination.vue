<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  total: number // 总条数
  page: number // 当前页
  pageSize?: number // 每页显示条目个数
}>(), {
  total: 0,
  page: 1,
  pageSize: 10,
})

const emit = defineEmits<{
  (e: 'update:page', value: number): void
}>()

const setCurrentPage = (value: number) => {
  // 更新当前页
  emit('update:page', value)
}

const pageTotal = computed(() => Math.ceil(props.total / props.pageSize))
</script>

<template>
  <div class="pagination">
    <button>上一页</button>
    <button
      v-for="item in pageTotal"
      :key="item"
      @click="setCurrentPage(item)"
    >{{ item }}</button>
    <button>下一页</button>
  </div>
</template>

<style>
.pagination {
  text-align: center;
  padding-top: 20px;
}
</style>
