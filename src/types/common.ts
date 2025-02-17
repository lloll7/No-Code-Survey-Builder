// 公共的类型
import type { defineComponent } from 'vue';
import type { OptionsStatus } from './editProps.ts';

// 到处Vue组件类型
export type VueComType = ReturnType<typeof defineComponent>;

// 整个组件状态的类型
export interface Status {
  type: VueComType;
  name: string;
  id: string;
  status: OptionsStatus;
}
