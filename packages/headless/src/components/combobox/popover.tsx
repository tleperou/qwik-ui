import {
  QwikIntrinsicElements,
  Slot,
  component$,
  useContext,
} from '@builder.io/qwik';
import { rootContext } from './root';

type Props = QwikIntrinsicElements['div'];

export const Popover = component$((props: Props) => {
  const { expanded } = useContext(rootContext);

  return (
    <div {...props} role="presentation">
      {expanded && <Slot />}
    </div>
  );
});
