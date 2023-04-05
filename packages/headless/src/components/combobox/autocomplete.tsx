import { QwikIntrinsicElements, component$, useId } from '@builder.io/qwik';

type Props = QwikIntrinsicElements['input'] & {
  label: string;
  labelHidden?: boolean;
};

export const Autocomplete = component$(
  ({ id = useId(), label, labelHidden = false, ...props }: Props) => {
    const ariaLabel = !labelHidden
      ? { 'aria-labelledby': `${id}__label` }
      : { 'aria-label': label };

    return (
      <>
        {!labelHidden && (
          <label id={`${id}__label`} for={id}>
            {label}
          </label>
        )}
        <input
          {...props}
          {...ariaLabel}
          role="combobox"
          aria-label={`Search reviewer`}
          aria-autocomplete="list"
          aria-expanded={false}
          aria-controls={`listbox`}
          type="text"
          id={id}
        />
      </>
    );
  }
);
