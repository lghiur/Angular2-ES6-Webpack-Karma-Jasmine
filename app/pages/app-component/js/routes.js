import { provideRouter, RouterConfig} from '@angular/router';
import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';

import { homeAsyncRoutes, homeRouterConfig } from 'app/pages/home/js/routes';
import { dashboardAsyncRoutes, dashboardRouterConfig } from 'app/pages/dashboard/js/routes';

export const routes: RouterConfig = [
  homeRouterConfig,
  dashboardRouterConfig
];

const asyncRoutes = Object.assign({},
  homeAsyncRoutes,
  dashboardAsyncRoutes
);

export { asyncRoutes };

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
