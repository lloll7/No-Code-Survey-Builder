<!--
 * @Author: lloll7 Linzylloll@outlook.com
 * @Date: 2025-02-14 17:34:13
 * @LastEditors: lloll7 Linzylloll@outlook.com
 * @LastEditTime: 2025-02-22 16:16:57
 * @FilePath: \wenjuan\src\views\MaterialsView\Layout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="layout-container flex">
    <!-- 选择具体的业务组件 -->
    <div class="left flex wrap space-between">
      <slot />
    </div>
    <!-- 显示对应的业务组件 -->
    <div class="center">
      <!-- 这里对应的 <slot /> 中切换的路由-->
      <!-- 采用动态组件渲染的方式，用Component拿到要渲染的组件 -->
      <router-view v-slot="{ Component }">
        <component
          :is="Component"
          :status="store.coms[store.currentMaterialCom].status"
          :serialNum="1"
        />
      </router-view>
    </div>
    <!-- 编辑面板 -->
    <div class="right">
      <EditPannel :com="currentCom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import EditPannel from '@/components/SurveyComs/EditItems/EditPannel.vue';
// provide 依赖注入：类似注册事件、触发事件，用于跨组件进行数据传递
import { computed, provide } from 'vue';
import { useMaterialStore } from '@/stores/useMaterial';
import { ElMessage } from 'element-plus';
import type { PicLink } from '@/types';
import { isPicLink } from '@/types';
// 拿到数据仓库
const store = useMaterialStore();
// 拿到当前选中的组件的数据状态
const currentCom = computed(() => store.coms[store.currentMaterialCom]);

const updateStatus = (configKey: string, payload?: number | string | boolean) => {
  // 拿到新的状态数据，之后去修改仓库中的数据
  switch (configKey) {
    case 'title':
    case 'desc': {
      if (typeof payload !== 'string') {
        console.error("Invalid payload type for 'type', Expected string");
      }
      store.setTextStatus(currentCom.value.status[configKey], <string>payload);
      break;
    }
    case 'options': {
      if (typeof payload === 'number') {
        // 说明是删除选项
        const res = store.removeOption(currentCom.value.status[configKey], payload);
        if (res) {
          ElMessage.success('删除成功');
        } else {
          ElMessage.error('至少要保留两个选项');
        }
      } else if (typeof payload === 'object' && isPicLink(payload)) {
        // 说明是在设置图片的链接
        store.setPicLinkByIndex(currentCom.value.status[configKey], payload);
      } else {
        // 否则为新增选项
        store.addOption(currentCom.value.status[configKey]);
      }
      break;
    }
    case 'position': {
      if (typeof payload !== 'number') {
        console.error("Invalid payload type for 'position', Expected number");
      }
      store.setPosition(currentCom.value.status[configKey], payload as number);
      break;
    }
    case 'titleSize':
    case 'descSize': {
      if (typeof payload !== 'number') {
        console.error("Invalid payload type for 'titleSize', Expected number");
      }
      store.setSize(currentCom.value.status[configKey], payload as number);
      break;
    }
    case 'titleWeight':
    case 'descWeight': {
      if (typeof payload !== 'number') {
        console.error("Invalid payload type for 'titleWeight', Expected number");
      }
      store.setWeight(currentCom.value.status[configKey], payload as number);
      break;
    }
    case 'titleItalic':
    case 'descItalic': {
      if (typeof payload !== 'number') {
        console.error("Invalid payload type for 'titleItalic', Expected boolean");
      }
      store.setItalic(currentCom.value.status[configKey], payload as number);
      break;
    }
    case 'titleColor':
    case 'descColor': {
      if (typeof payload !== 'string') {
        console.error("Invalid payload type for 'titleColor', Expected string");
      }
      store.setColor(currentCom.value.status[configKey], payload as string);
      break;
    }
  }
};

const getLink = (link: PicLink) => {
  updateStatus('options', link);
};
provide('updateStatus', updateStatus);
provide('getLink', getLink);
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  // Header组件高度50px，h1高度50px，上下margin 20px，最后20px是额外多减去一部分，避免贴底
  height: calc(100vh - 100px - 40px - 20px);
  align-items: flex-start;
  border: 1px solid var(--border-color);
  border-top-right-radius: var(--border-radius-lg);
  border-bottom-left-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
}
.left {
  width: 180px;
  text-align: center;
  align-items: flex-start;
  padding: 20px;
}
.center {
  width: 550px;
  // 多减去的60px是上下的padding，，最后20px是额外多减去一部分，避免贴底
  height: calc(100vh - 100px - 40px - 60px - 20px);
  overflow-y: scroll;
  padding: 30px;
  border-left: 1px solid var(--border-color);
}
.right {
  width: 350px;
  height: calc(100vh - 100px - 40px - 20px);
  overflow-y: scroll;
  border-left: 1px solid var(--border-color);
}
</style>
