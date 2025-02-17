<template>
  <div
    :class="{
      'text-center': computedState.position,
    }"
  >
    <MaterialsHeader
      :title="computedState.title"
      :titleSize="computedState.titleSize"
      :descSize="computedState.descSize"
      :descWeight="computedState.descWeight"
      :titleWeight="computedState.titleWeight"
      :titleItalic="computedState.titleItalic"
      :descItalic="computedState.descItalic"
      :titleColor="computedState.titleColor"
      :descColor="computedState.descColor"
      :desc="computedState.desc"
      :serialNum="serialNum"
    >
    </MaterialsHeader>
    <div class="ragio-group">
      <el-radio-group>
        <el-radio v-for="(item, index) in computedState.options" :value="item" :key="index">{{
          item
        }}</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import MaterialsHeader from '../../Common/MaterialsHeader.vue';
import type { OptionsStatus } from '@/types';
import {
  getTextStatus,
  getStringStatus,
  getCurrentStatus,
  getStringStatusByCurrentStatus,
} from '@/utils/index.ts';
const props = defineProps<{
  serialNum: number;
  status: OptionsStatus;
}>();

const computedState = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  options: getStringStatus(props.status.options),
  position: getCurrentStatus(props.status.position),
  titleSize: getStringStatusByCurrentStatus(props.status.titleSize),
  descSize: getStringStatusByCurrentStatus(props.status.descSize),
  titleWeight: getCurrentStatus(props.status.titleWeight),
  descWeight: getCurrentStatus(props.status.descWeight),
  titleItalic: getCurrentStatus(props.status.titleItalic),
  descItalic: getCurrentStatus(props.status.descItalic),
  titleColor: getStringStatus(props.status.titleColor),
  descColor: getStringStatus(props.status.descColor),
}));
</script>

<style scoped></style>
