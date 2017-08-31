import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import recipeReducer from './recipeReducer';

const rootReducer = combineReducers({
	counterReducer: counterReducer,
	recipeReducer: recipeReducer
});

export default rootReducer;