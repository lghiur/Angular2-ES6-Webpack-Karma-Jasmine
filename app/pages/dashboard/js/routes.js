const dashboardRouterConfig = {
  component: 'Dashboard',
  path: 'dashboard'
};

const dashboardAsyncRoutes = {
  'Dashboard': require('es6-promise!./dashboard')
};

export {
  dashboardRouterConfig,
  dashboardAsyncRoutes
};
