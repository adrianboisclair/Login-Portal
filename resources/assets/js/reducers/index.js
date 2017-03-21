import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import PostReducer from './reducer-posts';
import ActiveUserReducer from './reducer-active-user';
import ActivePostReducer from './reducer-active-post';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    activePost: ActivePostReducer,
    posts: PostReducer
});

export default allReducers;