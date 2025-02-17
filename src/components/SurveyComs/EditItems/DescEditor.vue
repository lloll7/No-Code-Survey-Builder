<template>
  <div :key="id">
    <div class="mb-10">描述内容</div>
    <el-input
      type="textarea"
      v-model="text"
      @update:modelValue="inputHandle"
      placeholder="请输入题目描述"
    ></el-input>
  </div>
</template>

<script setup lang="ts">
import type { VueComType } from '@/types/index.ts';
import { ref, inject } from 'vue';
const props = defineProps<{
  status: string;
  isShow: boolean;
  configKey: string;
  editCom: VueComType;
  id: string;
}>();
// 拿到描述初始值
const text = ref(props.status);
const updateStatus: any = inject('updateStatus');

// 文本框值更新时触发
function inputHandle(newVal: string) {
  updateStatus(props.configKey, newVal);
}
</script>

<style scoped></style>
