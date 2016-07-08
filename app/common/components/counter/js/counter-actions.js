import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { AppState } from 'app/common/components/state/js/state';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants';

class CounterActions {
  constructor () {
    this.ngRedux = new NgRedux(AppState);
  }

  increment () {
    this.ngRedux.dispatch({type: INCREMENT_COUNTER});
  }

  decrement () {
    this.ngRedux.dispatch({type: DECREMENT_COUNTER});
  }
}

const CounterActionsConfig = new Injectable();

CounterActions.annotations = [
  CounterActionsConfig
];

export { CounterActions };
