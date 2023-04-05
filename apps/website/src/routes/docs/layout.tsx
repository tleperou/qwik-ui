import { component$, Slot, useContext } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { MaterialProvider } from '../../components/material';
import { Menu } from '../../components/menu/menu';
import { APP_STATE } from '../../constants';

export default component$(() => {
  const appState = useContext(APP_STATE);
  return <Slot />;
});

export const head: DocumentHead = ({ url }) => {
  const UrlPathList = url.pathname.split('/').filter((path) => path !== '');
  if (UrlPathList.length === 3) {
    const Component =
      UrlPathList[2].charAt(0).toUpperCase() + UrlPathList[2].slice(1);
    const ComponentTheme =
      UrlPathList[1].charAt(0).toUpperCase() + UrlPathList[1].slice(1);
    return {
      title: `QwikUI | ${ComponentTheme} | ${Component}`,
    };
  }
  return {
    title: `QwikUI | Docs`,
  };
};
