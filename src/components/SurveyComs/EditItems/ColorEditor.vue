<template>
  <ButtonGroup :title="`${configKey === 'titleColor' ? '标题' : '描述'}颜色`" :status="`${status}`">
    <div class="block">
      <el-color-picker v-model="currColor" @change="changeColor"></el-color-picker>
    </div>
  </ButtonGroup>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import ButtonGroup from './components/ButtonGroup.vue';
import type { VueComType } from '@/types';
const props = defineProps<{
  status: string;
  isShow: boolean;
  configKey: string;
  editCom: VueComType;
  id: string;
}>();

const updateStatus: any = inject('updateStatus');
const currColor = ref(props.status);

const changeColor = (newVal: string) => {
  updateStatus(props.configKey, newVal);
};
</script>

<style scoped></style>
