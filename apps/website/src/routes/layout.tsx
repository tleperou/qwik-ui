import {
  component$,
  Slot,
  useBrowserVisibleTask$,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';
import Header from '../components/header/header';
import { APP_STATE } from '../constants';
import { AppState } from '../types';

export default component$(() => {
  const state = useStore<AppState>({
    darkMode: false,
    theme: 'NOT_DEFINED',
  });
  useContextProvider(APP_STATE, state);

  useBrowserVisibleTask$(() => {
    state.darkMode = localStorage.getItem('theme') === 'dark';
    state.theme =
      location.pathname.indexOf('/headless') !== -1
        ? 'HEADLESS'
        : location.pathname.indexOf('/material') !== -1
        ? 'MATERIAL'
        : 'DAISY';
  });

  return <Slot />;
});
