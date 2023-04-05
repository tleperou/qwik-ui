import { component$, Slot, QwikIntrinsicElements } from '@builder.io/qwik';

type Props = QwikIntrinsicElements['div'];

export const Root = component$<Props>(() => {
  return <Slot />;
});
