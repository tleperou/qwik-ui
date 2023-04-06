import {
  $,
  QwikIntrinsicElements,
  Slot,
  component$,
  useContext,
  useId,
  useStylesScoped$,
} from '@builder.io/qwik';
import { rootContext } from './root';

type Props = QwikIntrinsicElements['div'] & {
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

    const ctx = useContext(rootContext);

    return (
      <>
        {!labelHidden && (
          <label id={`${id}__label`} for={id}>
            {label}
          </label>
        )}

        <div {...props} id={`${id}__inner`} role="presentation">
          <button
            role="combobox"
            aria-labelledby={`${id}__label ${id}__inner`}
            aria-expanded={ctx.expanded}
            aria-controls={`listbox`}
            aria-haspopup="listbox"
            id={id}
            onClick$={$(() => {
              ctx.expanded = !ctx.expanded;
            })}
          ></button>
          <Slot />
          <Slot name="button" />
        </div>
      </>
    );
  }
);
