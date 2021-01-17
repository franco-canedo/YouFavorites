import {combineReducers} from 'redux';

import toggleReducer from './toggleReducer';
import categoryReducer from './categoryReducer';
import submitSearchReducer from './submitSearchReducer';
import videoReducer from './videosReducer';
import userInfoReducer from './userInfoReducer';
import userReducer from './userReducer';

const allReducers = combineReducers({
    toggle: toggleReducer,
    category: categoryReducer,
    search: submitSearchReducer,
    videos: videoReducer,
    userInfo: userInfoReducer,
    user: userReducer,
  })
  
  export default allReducers;