// 工具库
import type { TextProps, OptionsProps } from '@/types/editProps.ts';
import { isPicTitleDescStatusArray, isStringArray } from '@/types/editProps.ts';
export function getTextStatus(props: TextProps) {
  return props.status;
}

export function getStringStatus(props: OptionsProps) {
  if (props && isStringArray(props.status)) {
    return props.status;
  }
}

export function getPicTitleDescStatusArr(props: OptionsProps) {
  console.log('1');
  if (props && isPicTitleDescStatusArray(props.status)) {
    console.log('2');
    return props.status;
  }
}

export function getCurrentStatus(props: OptionsProps) {
  return props.currentStatus;
}

export function getStringStatusByCurrentStatus(props: OptionsProps) {
  if (props && isStringArray(props.status)) {
    return props.status[props.currentStatus];
  }
}
