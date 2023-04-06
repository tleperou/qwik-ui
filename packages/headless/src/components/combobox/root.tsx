import {
  component$,
  Slot,
  QwikIntrinsicElements,
  createContextId,
  useContextProvider,
  useOn,
  $,
} from '@builder.io/qwik';
import { Context } from './use/use-combobox';
import { LogicalKeys, useLogicalKeys } from '@qwik-ui/shared';

export const rootContext = createContextId<Context>('combobox-root');

type Props = QwikIntrinsicElements['div'] & {
  use: Context;
};

export const Root = component$<Props>(({ use, ...props }: Props) => {
  useContextProvider(rootContext, use);

  console.log({ use });

  useLogicalKeys({ ref: use.ref, dir: use.dir });

  useOn(
    LogicalKeys.ArrowInlineEnd,
    $(() => {
      console.log('next input');
    })
  );

  return (
    <div {...props} ref={use.ref}>
      <Slot />
    </div>
  );
});
