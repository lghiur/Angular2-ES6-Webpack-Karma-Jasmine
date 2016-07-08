import { combineReducers } from 'redux-immutable';
import { fromJS, Map } from 'immutable';

import { CounterState, CounterReducer } from 'app/common/components/counter/js/counter-reducer';

let AppState = fromJS({
  counter: CounterState
});

export { AppState };
export default combineReducers({
  counter: CounterReducer
});
