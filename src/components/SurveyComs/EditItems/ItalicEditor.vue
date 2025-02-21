<template>
  <ButtonGroup
    :title="`${configKey === 'titleItalic' ? '标题' : '描述'}倾斜`"
    :status="`${status[currentStatus]}`"
  >
    <el-button-group>
      <el-button
        :class="{
          select: currentStatus === 0,
        }"
        @click="changeItalic(0)"
      >
        <font-awesome-icon icon="italic" size="lg" />
      </el-button>
      <el-button
        :class="{
          select: currentStatus === 1,
        }"
        @click="changeItalic(1)"
      >
        <font-awesome-icon icon="italic" size="sm" />
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

const changeItalic = (index: number) => {
  updateStatus(props.configKey, index);
};
</script>

<style scoped></style>
