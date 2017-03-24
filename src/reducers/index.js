import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import reducerPosts from './reducer_posts'

const rootReducer = combineReducers({
  form : formReducer,
  posts : reducerPosts
});

export default rootReducer;
