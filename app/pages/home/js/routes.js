const homeRouterConfig = {
  component: 'Home',
  path: ''
};

const homeAsyncRoutes = {
  'Home': require('es6-promise!./home')
};

export {
  homeRouterConfig,
  homeAsyncRoutes
};
