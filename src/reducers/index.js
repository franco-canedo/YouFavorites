import {combineReducers} from 'redux';

import toggleReducer from './toggleReducer';
import categoryReducer from './categoryReducer'

const allReducers = combineReducers({
    toggle: toggleReducer,
    category: categoryReducer,
  })
  
  export default allReducers;