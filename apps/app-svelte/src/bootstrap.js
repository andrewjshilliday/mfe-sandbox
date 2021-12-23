import App from './App.svelte';

export const mount = (el) => {
  new App({
    target: el,
    props: {
      name: 'world'
    }
  });
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#svelte-app');

  if (devRoot) {
    mount(devRoot);
  }
}
