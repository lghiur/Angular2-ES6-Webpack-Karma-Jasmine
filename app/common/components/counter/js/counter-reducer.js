import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../constants';
import { fromJS, Map } from 'immutable';

const INITIAL_STATE = fromJS({
  count: 0,
});

let CounterState = INITIAL_STATE;

function CounterReducer(state = CounterState,
  action = { type: '' }) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state.update('count', (value) => value + 1);

    case DECREMENT_COUNTER:
      return state.update('count', (value) => value - 1);

    default:
      return state;
  }
}

export {
  CounterState,
  CounterReducer
};
