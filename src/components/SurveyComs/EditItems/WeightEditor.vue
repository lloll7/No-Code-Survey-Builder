<template>
  <ButtonGroup
    :title="`${configKey === 'titleWeight' ? '标题' : '描述'}加粗`"
    :status="`${status[currentStatus]}`"
  >
    <el-button-group>
      <el-button
        :class="{
          select: currentStatus === 0,
        }"
        @click="changeWeight(0)"
      >
        <font-awesome-icon icon="bold" size="lg" />
      </el-button>
      <el-button
        :class="{
          select: currentStatus === 1,
        }"
        @click="changeWeight(1)"
      >
        <font-awesome-icon icon="bold" size="sm" />
      </el-button>
    </el-button-group>
  </ButtonGroup>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import ButtonGroup from './components/ButtonGroup.vue';
import type { VueComType } from '@/types';
const props = defineProps<{
  currentStatus: number;
  status: string[];
  isShow: boolean;
  configKey: string;
  editCom: VueComType;
}>();

const updateStatus: any = inject('updateStatus');

const changeWeight = (index: number) => {
  updateStatus(props.configKey, index);
};
</script>

<style scoped></style>
