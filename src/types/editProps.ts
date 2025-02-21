// 配置项属性参考SingleSelect.ts
import type { VueComType } from './common.ts';

export interface BaseProps {
  id: string;
  name: string;
  isShow: boolean;
  editCom: VueComType;
}

// status属性除了string类型之外的三种情况
export type StringStatusArr = string[];
export type ValueStatusArr = Array<{ value: string; status: string }>;
export type PicTitleDescStatusArr = Array<{
  picTitle: string;
  picDesc: string;
  value: string;
}>;

export interface TextProps extends BaseProps {
  status: string;
}

export type OptionsStatusArr = StringStatusArr | ValueStatusArr | PicTitleDescStatusArr;

export interface OptionsProps extends BaseProps {
  status: StringStatusArr | ValueStatusArr | PicTitleDescStatusArr;
  currentStatus: number;
}

// 公共设置项（整个status对象的类型）
export interface BaseStatus {
  title: TextProps;
  desc: TextProps;
  position: OptionsProps;
  descSize: OptionsProps;
  titleSize: OptionsProps;
  titleWeight: OptionsProps;
  descWeight: OptionsProps;
  titleItalic: OptionsProps;
  descItalic: OptionsProps;
  titleColor: TextProps;
  descColor: TextProps;
}

// 有由于不是所有组件都有options配置项，所以要将它单独抽出来
export interface OptionsStatus extends BaseStatus {
  options: OptionsProps;
}

// 确定status是字符串数组
export function isStringArray(status: OptionsStatusArr): status is string[] {
  return Array.isArray(status) && typeof status[0] === 'string';
}

// 确定status是对象数组 [ {value: string , status: string} ]
export function isValueStatusArray(status: OptionsStatusArr): status is ValueStatusArr {
  return (
    Array.isArray(status) &&
    typeof status[0] === 'object' &&
    'value' in status[0] &&
    'status' in status[0]
  );
}

// 确定 status 是 { picTitle: string, picDesc: string, value: string } 这种类型的数组
export function isPicTitleDescStatusArray(
  status: OptionsStatusArr,
): status is PicTitleDescStatusArr {
  return (
    Array.isArray(status) &&
    typeof status[0] === 'object' &&
    'picTitle' in status[0] &&
    'picDesc' in status[0] &&
    'value' in status[0]
  );
}

export type PicLink = { link: string; index: number };

export function isPicLink(obj: object): obj is PicLink {
  return 'link' in obj && 'index' in obj;
}
