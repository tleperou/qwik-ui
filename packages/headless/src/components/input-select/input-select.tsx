import {
  $,
  component$,
  useComputed$,
  useId,
  useSignal,
  useStylesScoped$,
} from '@builder.io/qwik';
import styles from './input-select.css?inline';
import { useSelect } from './use-select';

export const InputSelect = component$(() => {
  useStylesScoped$(styles);

  const name = useId();

  const multiple = useSignal(true);
  const type = useComputed$(() => (multiple.value ? 'checkbox' : 'radio'));

  const ref = useSignal<HTMLElement>();
  const triggerRef = useSignal<HTMLElement>();

  const required = useSignal(false);
  const pressed = useSignal(false);
  const activedescendant = useSignal<string>();

  useSelect({ ref, triggerRef, pressed });

  return (
    <ul ref={ref}>
      <li role="combobox">
        <label
          for={name}
          aria-required={required.value}
          onClick$={() => (pressed.value = true)}
        >
          Current value or placeholder
        </label>

        <button
          aria-controls={`#${name}`}
          aria-expanded={pressed.value}
          aria-pressed={pressed.value}
          ref={triggerRef}
          onClick$={() => (pressed.value = !pressed.value)}
        >
          {!pressed.value ? <IconChevronDown /> : <IconChevronUp />}
        </button>
      </li>

      {pressed.value && (
        <>
          <li class="autocomplete">
            <input
              aria-activedescendant={activedescendant.value || ''}
              aria-autocomplete="list"
              aria-controls={`#${name}`}
              aria-expanded={pressed.value}
              type="text"
              placeholder="Search"
              id={`${name}-autocomplete`}
            />
          </li>

          <li id={name} role="listbox">
            {required.value && (
              <ul>
                <li role="option">
                  <input
                    type={type.value}
                    name={name}
                    id={`${name}__unselect`}
                    onFocus$={() => (activedescendant.value = undefined)}
                  />
                  <label for={`${name}__unselect`}>Unselect</label>
                </li>
              </ul>
            )}

            {[1, 2, 3].map((i) => (
              <fieldset key={useId()} aria-required={required.value}>
                <legend>Group {i}</legend>
                <ul>
                  {[1, 2, 3, 4, 5].map((ii) => (
                    <li key={useId()} role="option">
                      <input
                        type={type.value}
                        name={name}
                        id={`${name}__${i}-${ii}`}
                        onFocus$={() =>
                          (activedescendant.value = `${name}__${i}-${ii}`)
                        }
                      />
                      <label for={`${name}__${i}-${ii}`}>
                        Option {i}.{ii}
                      </label>
                    </li>
                  ))}
                </ul>
              </fieldset>
            ))}
          </li>
        </>
      )}
    </ul>
  );
});

const IconChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const IconChevronUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);
