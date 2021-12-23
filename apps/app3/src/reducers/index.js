import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';

const rootReducer = combineReducers({ form: formReducer });

export default rootReducer;
