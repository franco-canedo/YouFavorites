import {combineReducers} from 'redux';

import toggleReducer from './toggleReducer';
import categoryReducer from './categoryReducer';
import submitSearchReducer from './submitSearchReducer';
import videoReducer from './videosReducer';
import userInfoReducer from './userInfoReducer';

const allReducers = combineReducers({
    toggle: toggleReducer,
    category: categoryReducer,
    search: submitSearchReducer,
    videos: videoReducer,
    user: userInfoReducer,
  })
  
  export default allReducers;