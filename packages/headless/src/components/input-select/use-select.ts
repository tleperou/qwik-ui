import {
  $,
  type Signal,
  useOn,
  useTask$,
  useVisibleTask$,
} from '@builder.io/qwik';

type Params = {
  ref: Signal<HTMLElement | undefined>;
  triggerRef: Signal<HTMLElement | undefined>;
  pressed: Signal<boolean | undefined>;
};

export const useSelect = ({ ref, pressed, triggerRef }: Params) => {
  useVisibleTask$(function handleFocusAndClickOut() {
    const fn = (e: FocusEvent | MouseEvent) => {
      const element = e.target as Node | null;

      if (
        !ref.value ||
        !(element instanceof Node) ||
        ref.value?.contains(element)
      ) {
        return;
      }

      pressed.value = false;
    };

    window.addEventListener('focus', fn, true);
    document.addEventListener('click', fn, true);

    () => {
      window.removeEventListener('focus', fn);
      document.removeEventListener('click', fn);
    };
  });

  useOn(
    'keydown',
    $(function handleEscapeEvent(e) {
      if ((e as KeyboardEvent).key !== 'Escape') {
        return;
      }

      pressed.value = false;
    })
  );

  useTask$(function handleFocusOnPressed({ track }) {
    track(() => pressed.value);

    if (!ref.value || !triggerRef.value) {
      return;
    }

    if (!pressed.value) {
      triggerRef.value.focus();
    }

    // focus can only happen after that the listbox
    // and autocomplete have been rendered
    setTimeout(
      () => ref.value?.querySelector<HTMLInputElement>('input')?.focus(),
      100
    );
  });
};
