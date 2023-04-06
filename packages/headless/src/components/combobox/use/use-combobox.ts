import { type Signal, useId, useSignal, useStore } from '@builder.io/qwik';

export type Context = {
  ref?: Signal<HTMLElement | undefined>;
  dir?: 'ltr' | 'rtl';
  id: string;
  activedescendant: string | undefined;
  expanded: boolean;
};

export const useCombobox = (params: Partial<Context> | void): Context => {
  return useStore<Context>({
    ref: params?.ref || useSignal<HTMLElement>(),
    dir: params?.dir || 'ltr',
    activedescendant: params?.activedescendant || '',
    expanded: params?.expanded || false,
    id: params?.id || useId(),
  });
};
