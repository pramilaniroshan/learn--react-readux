import counterReducre from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({

	counter : counterReducre,
	isLogged : loggedReducer
});

export default allReducers;