import {
  QwikIntrinsicElements,
  Slot,
  component$,
  useId,
} from '@builder.io/qwik';

type Props = QwikIntrinsicElements['div'];

export const Option = component$(({ id = useId(), ...props }: Props) => {
  return (
    <li role="option" aria-labelledby={`${id}__inner`} id={id}>
      <div {...props} role="presentation" id={`${id}__inner`}>
        <Slot />
      </div>
    </li>
  );
});
