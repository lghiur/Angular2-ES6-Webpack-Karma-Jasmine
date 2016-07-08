import { Iterable } from 'immutable';
import createLogger from 'redux-logger';

const logger = createLogger({
    level: 'info',
    collapsed: true,
    predicate: (getState, action) => ENV === 'development',
    stateTransformer: (state) => state.toJS()
});

export default logger;
