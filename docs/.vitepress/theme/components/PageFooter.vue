<script setup lang="ts">
import EditLink from './EditLink.vue'
import LastUpdated from './LastUpdated.vue'
</script>

<template>
  <footer class="page-footer">
    <div class="edit">
      <EditLink />
    </div>
    <div class="updated">
      <LastUpdated />
    </div>
  </footer>
</template>