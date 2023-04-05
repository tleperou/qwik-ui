import {
  QwikIntrinsicElements,
  Slot,
  component$,
  useId,
  useStylesScoped$,
} from '@builder.io/qwik';

type Props = QwikIntrinsicElements['button'] & {
  label: string;
  labelHidden?: boolean;
};

export const Trigger = component$(
  ({ id = useId(), label, labelHidden = false, ...props }: Props) => {
    useStylesScoped$(`
    [role="presentation"] {
      position: relative;
    }
    
    button {
      position: absolute;
      appearance: none;
      inset: 0;
      z-index: 1;
    }
    
    *:focus {
      outline: .15em solid;
    }
  `);

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
        <div role="presentation">
          <button
            {...props}
            {...ariaLabel}
            role="combobox"
            aria-expanded={false}
            aria-controls={`listbox`}
            aria-haspopup="listbox"
            id={id}
          ></button>
          <Slot />
        </div>
      </>
    );
  }
);
