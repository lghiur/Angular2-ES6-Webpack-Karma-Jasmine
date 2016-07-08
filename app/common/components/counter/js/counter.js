import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NgRedux } from 'ng2-redux';

import { NtsButton } from 'app/common/components/button/js/button';
import { AppState } from 'app/common/components/state/js/state';
import { CounterActions } from './counter-actions';

class Counter {
  constructor() {
    this.ngRedux = new NgRedux(AppState);
    this.actions = new CounterActions();
  }

  ngOnInit() {
    this.counter = this.ngRedux.select(this.selectCount);
  }

  selectCount(state) {
    return state.getIn(['counter', 'count']);
  }
}

const CounterConfig = new Component({
  directives: [
    NtsButton
  ],
  inputs: [
    'counter',
    'increment',
    'decrement'
  ],
  pipes: [
    AsyncPipe
  ],
  providers: [
    CounterActions
  ],
  selector: "counter",
  styleUrls: ['../styles/counter.scss'],
  templateUrl: '../template/counter.html'
});

Counter.annotations = [
  CounterConfig
];

export { Counter };
