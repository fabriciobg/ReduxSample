import { createStore } from 'redux';

import rootReduccer from './reducers';

const store = createStore(rootReduccer);

export default store;