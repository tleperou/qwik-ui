import {
  component$,
  Slot,
  useContextProvider,
  useStore,
  useTask$,
  useVisibleTask$,
} from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import Header from '../components/header/header';
import { APP_STATE } from '../constants';
import { AppState } from '../types';

export default component$(() => {
  const state = useStore<AppState>({
    darkMode: false,
    theme: 'NOT_DEFINED',
  });
  const loc = useLocation();
  useContextProvider(APP_STATE, state);

  useVisibleTask$(() => {
    state.darkMode = localStorage.getItem('theme') === 'dark';
  });

  useTask$(() => {
    state.theme =
      loc.url.pathname.indexOf('/headless') !== -1
        ? 'HEADLESS'
        : loc.url.pathname.indexOf('/material') !== -1
        ? 'MATERIAL'
        : 'DAISY';
  });

  return <Slot />;
});
