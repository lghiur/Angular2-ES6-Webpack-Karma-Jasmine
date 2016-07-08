import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { NgRedux } from 'ng2-redux';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { APP_ROUTER_PROVIDERS } from 'app/pages/app-component/js/routes';
import { provideWebpack } from '@angularclass/webpack-toolkit';

import { asyncRoutes } from 'app/pages/app-component/js/routes';
import { AppComponent } from 'app/pages/app-component/js/app-component';

if(ENV === 'production') {
  enableProdMode();
}

let boot = document.addEventListener('DOMContentLoaded', () => {
  bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    provideWebpack(asyncRoutes),
    NgRedux
  ]);
});

module.exports = boot;
