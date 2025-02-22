// 整个组件市场中所有组件状态的仓库
import { defineStore } from 'pinia';

import { defaultStatusMap } from '@/configs/defaultStatus/defaultStatusMap.ts';
import {
  setTextStatus,
  addOption,
  removeOption,
  setPosition,
  setSize,
  setWeight,
  setItalic,
  setColor,
  setPicLinkByIndex,
} from './actions.ts';
export const useMaterialStore = defineStore('materialStore', {
  state: () => ({
    currentMaterialCom: 'single-select',
    // 记录所有的业务组件
    coms: {
      'single-select': defaultStatusMap['single-select'](),
      'single-pic-select': defaultStatusMap['single-pic-select'](),
    },
  }),
  actions: {
    setCurrentMaterialCom(comName: string) {
      this.currentMaterialCom = comName;
    },
    setTextStatus,
    addOption,
    removeOption,
    setPosition,
    setSize,
    setWeight,
    setItalic,
    setColor,
    setPicLinkByIndex,
  },
});
