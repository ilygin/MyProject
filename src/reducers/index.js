import { combineReducers } from 'redux';
import courses from './courses';
import newUser from './signup';
import loginUser from './login';
import isAuthorizedUser from './isAuthorized';
export default combineReducers({
    courses,
    newUser,
    loginUser,
    isAuthorizedUser
})