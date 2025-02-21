// 单选题 JSON-Schema 配置
// 单选题（业务组件） ---> 编辑组件

// 业务组件
import SingleSelect from '@/components/SurveyComs/Materials/SelectComs/SinglePicSelect.vue';
// 编辑组件
import TitleEditor from '@/components/SurveyComs/EditItems/TitleEditor.vue';
import DescEditor from '@/components/SurveyComs/EditItems/DescEditor.vue';
import PicOptionsEditor from '@/components/SurveyComs/EditItems/PicOptionsEditor.vue';
import SizeEditor from '@/components/SurveyComs/EditItems/SizeEditor.vue';
import WeightEditor from '@/components/SurveyComs/EditItems/WeightEditor.vue';
import ColorEditor from '@/components/SurveyComs/EditItems/ColorEditor.vue';
import ItalicEditor from '@/components/SurveyComs/EditItems/ItalicEditor.vue';
import PositionEditor from '@/components/SurveyComs/EditItems/PositionEditor.vue';

import { markRaw } from 'vue';
import { v4 as uuidv4 } from 'uuid';
export default function () {
  return {
    // markRaw将响应式对象转为普通对象，因为引入的响应式组件会经常改变，为了避免额外的性能消耗，将其转为普通对象
    type: markRaw(SingleSelect),
    name: 'single-pic-select',
    id: uuidv4(),
    status: {
      // 组件的状态：组件的每一个能够修改的状态都应该对应一个编辑组件
      title: {
        id: uuidv4(),
        status: '图片单选标题',
        isShow: true,
        name: 'title-editor',
        editCom: markRaw(TitleEditor), // 对应的编辑组件
      },
      desc: {
        id: uuidv4(),
        status: '图片单选描述',
        isShow: true,
        name: 'desc-editor',
        editCom: markRaw(DescEditor), // 对应的编辑组件
      },
      options: {
        id: uuidv4(),
        status: [
          {
            picTitle: '图片标题1',
            picDesc: '图片描述1',
            value: '',
          },
          {
            picTitle: '图片标题2',
            picDesc: '图片描述2',
            value: '',
          },
        ], // 单选题的选项
        currentStatus: 0, // 当前选中的选项下标
        isShow: true,
        name: 'pic-options-editor',
        editCom: markRaw(PicOptionsEditor), // 对应的编辑组件
      },
      position: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['左对齐', '居中对齐'], // 单选题的位置
        isShow: true,
        name: 'position-editor',
        editCom: markRaw(PositionEditor), // 对应的编辑组件
      },
      descSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['16', '14', '12'], // 单选题的选项
        isShow: true,
        name: 'size-editor',
        editCom: markRaw(SizeEditor), // 对应的编辑组件
      },
      titleSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['22', '20', '18'], // 单选题的字体大小
        isShow: true,
        name: 'size-editor',
        editCom: markRaw(SizeEditor), // 对应的编辑组件
      },
      titleWeight: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['加粗', '正常'],
        isShow: true,
        name: 'weight-editor',
        editCom: markRaw(WeightEditor), // 对应的编辑组件
      },
      descWeight: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['加粗', '正常'],
        isShow: true,
        name: 'weight-editor',
        editCom: markRaw(WeightEditor), // 对应的编辑组件
      },
      titleItalic: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['斜体', '正常'],
        isShow: true,
        name: 'italic-editor',
        editCom: markRaw(ItalicEditor), // 对应的编辑组件
      },
      descItalic: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['斜体', '正常'],
        isShow: true,
        name: 'italic-editor',
        editCom: markRaw(ItalicEditor), // 对应的编辑组件
      },
      titleColor: {
        id: uuidv4(),
        status: '#000', // 单选题的字体颜色
        isShow: true,
        name: 'color-editor',
        editCom: markRaw(ColorEditor), // 对应的编辑组件
      },
      descColor: {
        id: uuidv4(),
        status: '#909399', // 单选题的字体颜色
        isShow: true,
        name: 'color-editor',
        editCom: markRaw(ColorEditor), // 对应的编辑组件
      },
    },
  };
}
