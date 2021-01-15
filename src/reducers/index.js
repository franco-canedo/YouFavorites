import {combineReducers} from 'redux';

import toggleReducer from './toggleReducer';
import categoryReducer from './categoryReducer';
import submitSearchReducer from './submitSearchReducer';
import videoReducer from './videosReducer';

const allReducers = combineReducers({
    toggle: toggleReducer,
    category: categoryReducer,
    search: submitSearchReducer,
    videos: videoReducer,
  })
  
  export default allReducers;