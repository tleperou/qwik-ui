import { QwikIntrinsicElements, Slot, component$ } from '@builder.io/qwik';

type Props = QwikIntrinsicElements['li'] & {
  label: string;
};

export const Group = component$(({ label, ...props }: Props) => {
  return (
    <ul role="group">
      <li {...props} role="option" aria-label={label}>
        <Slot name="group" />
      </li>
      <Slot />
    </ul>
  );
});
