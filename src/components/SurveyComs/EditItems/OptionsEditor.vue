<template>
  <div key="id">
    <div class="flex align-item-center mb-10">
      <div class="mr-10">选项</div>
      <el-button size="small" circle :icon="Plus" @click="addOptionHandle"></el-button>
    </div>
    <div v-for="(item, index) in status" :key="index" class="flex align-items-center">
      <el-input placeholder="选项" class="mt-5 mb-5" v-model="textArr[index]" />
      <el-button
        type="danger"
        class="ml-10"
        size="small"
        circle
        :icon="Minus"
        @click="removeOption(index)"
      ></el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus, Minus } from '@element-plus/icons-vue';
import { ref, inject } from 'vue';
import type { VueComType } from '@/types/index.ts';
const props = defineProps<{
  status: string[];
  isShow: boolean;
  configKey: string;
  editCom: VueComType;
  id: string;
}>();

// 这里其实修改了textArr的内容就直接修改了props.status的内容，因为props.status是引用类型的，使用的是跟仓库中的一个地址
const textArr = ref(props.status);
const updateStatus: any = inject('updateStatus');
const addOptionHandle = () => {
  updateStatus(props.configKey);
};
const removeOption = (index: number) => {
  updateStatus(props.configKey, index);
};
</script>

<style scoped></style>
