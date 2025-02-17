<template>
  <div :key="id">
    <div class="mb-10">标题内容</div>
    <el-input
      v-model="text"
      @update:modelValue="inputHandle"
      placeholder="请输入题目标题"
    ></el-input>
  </div>
</template>

<script setup lang="ts">
import type { VueComType } from '@/types/index.ts';
// inject 依赖注入：类似注册事件、触发事件，用于跨组件进行数据传递
import { ref, inject } from 'vue';
const props = defineProps<{
  status: string;
  isShow: boolean;
  configKey: string;
  editCom: VueComType;
  id: string;
}>();

// 拿到标题初始值
const text = ref(props.status);
const updateStatus: any = inject('updateStatus');

// 文本框值更新时触发
function inputHandle(newVal: string) {
  updateStatus(props.configKey, newVal);
}
</script>

<style scoped></style>
