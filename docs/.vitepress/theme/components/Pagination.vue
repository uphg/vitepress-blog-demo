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

const prev = () => {
  if (props.page <= 1) return
  setCurrentPage(props.page - 1)
}

const next = () => {
  if (props.page >= pageTotal.value) return
  setCurrentPage(props.page + 1)
}

const pageTotal = computed(() => Math.ceil(props.total / props.pageSize))
</script>

<template>
  <div v-if="page > 1" class="pagination">
    <button
      :disabled="page <= 1"
      @click="prev"
      class="button-prev"
    >上一页</button>
    <button
      v-for="item in pageTotal"
      :key="item"
      @click="setCurrentPage(item)"
      :class="[
        'button-number',
        { active: item === page }
      ]"
    >{{ item }}</button>
    <button
      :disabled="page >= pageTotal"
      @click="next"
      class="button-next"
    >下一页</button>
  </div>
</template>

<style lang="stylus">
.pagination
  text-align center
  padding-top 3em
  .button-number, .button-next, .button-prev
    border none
    cursor pointer
    border-radius 4px
    min-width 30px
    background-color #eff1fa
    color #3850b7
    font-size 14px
    line-height 2
    padding 0 8px
    margin 0 5px
    &:hover, &.active
      background-color #485fc7
      color #fff
    &:disabled
      color #c0c4cc
      background-color #eff1fa        

</style>
