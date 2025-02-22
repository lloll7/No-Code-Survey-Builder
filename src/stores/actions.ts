import type { TextProps, OptionsProps, PicLink } from '@/types/index.ts';
import { isStringArray } from '@/types/index.ts';
import { isPicTitleDescStatusArray } from '@/types/editProps.ts';
export function setTextStatus(textProps: TextProps, text: string) {
  textProps.status = text;
}

// 增加选项
export function addOption(optionsProps: OptionsProps) {
  // 因为OptionsProps中的status可能是多个类型的数组，OptionsProps用于确定该数组为字符串数组
  if (isStringArray(optionsProps.status)) {
    const num = Number(
      optionsProps.status[optionsProps.status.length - 1].split('')[
        optionsProps.status[optionsProps.status.length - 1].length - 1
      ],
    );
    optionsProps.status.push(`新增选项${!isNaN(num) ? num + 1 : 1}`);
  }
}

export function removeOption(optionsProps: OptionsProps, index: number) {
  if (optionsProps.status.length === 2) {
    return false;
  } else {
    optionsProps.status.splice(index, 1);
    return true;
  }
}

export function setPosition(optionsProps: OptionsProps, pos: number) {
  optionsProps.currentStatus = pos;
}

export function setSize(optionsProps: OptionsProps, index: number) {
  optionsProps.currentStatus = index;
}

export function setWeight(optionsProps: OptionsProps, index: number) {
  optionsProps.currentStatus = index;
}

export function setItalic(optionsProps: OptionsProps, index: number) {
  optionsProps.currentStatus = index;
}

export function setColor(textProps: TextProps, color: string) {
  textProps.status = color;
}

export function setPicLinkByIndex(optionsProps: OptionsProps, payload: PicLink) {
  if (isPicTitleDescStatusArray(optionsProps.status)) {
    optionsProps.status[payload.index].value = payload.link;
  }
}
