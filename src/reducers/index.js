import { combineReducers } from 'redux';
import courses from './courses';
import newUser from './signup';
import loginUser from './login';
import savePageData from './savePageData'
export default combineReducers({
    courses,
    newUser,
    loginUser,
    savePageData
})