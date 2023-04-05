import {
  QwikIntrinsicElements,
  Slot,
  component$,
  useId,
} from '@builder.io/qwik';

type Props = QwikIntrinsicElements['ul'] & {
  label: string;
};

export const Options = component$(
  ({ id = useId(), label, ...props }: Props) => {
    return (
      <ul {...props} role="listbox" aria-label={label} id={id}>
        <Slot />
      </ul>
    );
  }
);
