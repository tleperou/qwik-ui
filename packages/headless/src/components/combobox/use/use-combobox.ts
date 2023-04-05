import {
  createContextId,
  useContextProvider,
  useId,
  useSignal,
  useStore,
} from '@builder.io/qwik';

export type Context = {
  id: string;
  activedescendant: string | undefined;
  expanded: boolean;
};

export const context = createContextId<Context>('combobox-root');

export const useCombobox = () => {
  const service: Context = useStore({
    activedescendant: '',
    expanded: false,
    id: useId(),
  });
  useContextProvider(context, service);

  return {
    ref: useSignal<HTMLElement>(),
    ...service,
  };
};
