import { combineReducers } from 'redux';
import courses from './courses';
import newUser from './signup';

export default combineReducers({
    courses,
    newUser
})