import {
  QwikIntrinsicElements,
  Slot,
  component$,
  useId,
} from '@builder.io/qwik';

type Props = QwikIntrinsicElements['div'] & {
  label: string;
};

export const Groups = component$(({ id = useId(), label, ...props }: Props) => {
  return (
    <div {...props} role="listbox" aria-label={label} id={id}>
      <Slot />
    </div>
  );
});
