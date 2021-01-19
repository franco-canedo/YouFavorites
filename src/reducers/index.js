import {combineReducers} from 'redux';

import toggleReducer from './toggleReducer';
import categoryReducer from './categoryReducer';
import submitSearchReducer from './submitSearchReducer';
import videoReducer from './videosReducer';
import userInfoReducer from './userInfoReducer';
import userReducer from './userReducer';
import redirectReducer from './redirectReducer';
import LogoutReducer from './LogoutReducer';

const allReducers = combineReducers({
    toggle: toggleReducer,
    category: categoryReducer,
    search: submitSearchReducer,
    videos: videoReducer,
    userInfo: userInfoReducer,
    user: userReducer,
    redirect: redirectReducer,
    logout: LogoutReducer,
  })
  
  export default allReducers;