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
    <div class="flex wrap">
      <el-radio-group class="flex wrap" v-model="radioValue">
        <el-radio
          v-for="(item, index) in computedState.options"
          class="picOption flex mb-15"
          :value="item.picTitle"
          :key="index"
        >
          <PicItem :key="index" v-bind="{ ...item, index }" />
        </el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import MaterialsHeader from '../../Common/MaterialsHeader.vue';
import PicItem from '../../Common/PicItem.vue';
import type { OptionsStatus } from '@/types';
import {
  getTextStatus,
  getCurrentStatus,
  getStringStatusByCurrentStatus,
  getPicTitleDescStatusArr,
} from '@/utils/index.ts';
const props = defineProps<{
  serialNum: number;
  status: OptionsStatus;
}>();

const radioValue = ref('');

const computedState = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  options: getPicTitleDescStatusArr(props.status.options),
  position: getCurrentStatus(props.status.position),
  titleSize: getStringStatusByCurrentStatus(props.status.titleSize),
  descSize: getStringStatusByCurrentStatus(props.status.descSize),
  titleWeight: getCurrentStatus(props.status.titleWeight),
  descWeight: getCurrentStatus(props.status.descWeight),
  titleItalic: getCurrentStatus(props.status.titleItalic),
  descItalic: getCurrentStatus(props.status.descItalic),
  titleColor: getTextStatus(props.status.titleColor),
  descColor: getTextStatus(props.status.descColor),
}));
</script>

<style scoped lang="scss">
.picOption {
  height: auto;
  flex-direction: column-reverse;
}
</style>
