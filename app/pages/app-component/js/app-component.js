import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { fromJS, Map } from 'immutable';
import reduxLogger from 'redux-logger';
import { ROUTER_DIRECTIVES } from '@angular/router';

import AppReducer from 'app/common/components/state/js/state';
import { Menu, MenuItem } from 'app/common/components/menu/js/menu';
import logger from 'app/common/components/redux-logger/js/redux-logger';

let middlewares = [];

if(ENV === 'development') {
  middlewares.push(logger);
}

class AppComponent {
  constructor () {
    this.ngRedux = new NgRedux();
    NgRedux.prototype.configureStore (
      AppReducer,
      Map({}),
      middlewares
    );
  }
}

AppComponent.annotations = [
  new Component({
    directives: [
      ROUTER_DIRECTIVES,
      Menu,
      MenuItem
    ],
    selector: "my-app",
    templateUrl: '../template/app-component.html'
  })
];

export { AppComponent };
