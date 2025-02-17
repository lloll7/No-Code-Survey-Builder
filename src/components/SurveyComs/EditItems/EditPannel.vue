<!-- 整个编辑面板 -->
<template>
  <div class="editPannelContainer">
    <div v-for="(item, key) in com.status" :key="item.id" class="mb-20">
      <!-- 每一个编辑功能都是一个组件 -->
      <component v-if="item.isShow" :is="item.editCom" :config-key="key" v-bind="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Status } from '@/types/index.ts';
defineProps<{
  com: Status;
}>();
</script>

<style scoped>
.editPannelContainer {
  padding: 30px;
  background-color: var(--bg-color);
}
</style>
