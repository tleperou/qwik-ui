import { useOn, type Signal, $ } from '@builder.io/qwik';

export enum LogicalKeys {
  'ArrowDown' = 'ArrowBlockEnd',
  'ArrowUp' = 'ArrowBlockStart',
  'ArrowLeft' = 'ArrowInlineStart',
  'ArrowRight' = 'ArrowInlineEnd',
}

export const logicalKeys = new Map()
  .set('ArrowDown', 'ArrowBlockEnd')
  .set('ArrowUp', 'ArrowBlockStart')
  .set('ArrowLeft', 'ArrowInlineStart')
  .set('ArrowRight', 'ArrowInlineEnd');

export const useLogicalKeys = (ref?: Signal<HTMLElement | undefined>) => {
  useOn(
    'keydown',
    $((e) => {
      const logicalKey = logicalKeys.get((e as KeyboardEvent).key);

      if (!ref?.value || !logicalKey) {
        return;
      }

      ref.value.dispatchEvent(new CustomEvent(logicalKey));

      e.preventDefault();
      e.stopPropagation();
    })
  );
};
