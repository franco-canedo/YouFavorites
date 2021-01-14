import {combineReducers} from 'redux';

import toggleReducer from './toggleReducer';
import categoryReducer from './categoryReducer';
import submitSearchReducer from './submitSearchReducer';

const allReducers = combineReducers({
    toggle: toggleReducer,
    category: categoryReducer,
    search: submitSearchReducer,
  })
  
  export default allReducers;