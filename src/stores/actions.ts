import type { TextProps } from '@/types/index.ts';
export function setTextStatus(textProps: TextProps, text: string) {
  console.log(textProps, text, 'setTextStatus');
  textProps.status = text;
}
