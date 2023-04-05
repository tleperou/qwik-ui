import { QwikIntrinsicElements, Slot, component$ } from '@builder.io/qwik';

type Props = QwikIntrinsicElements['div'];

export const Popover = component$((props: Props) => {
  return (
    <div {...props} role="presentation">
      <Slot />
    </div>
  );
});
