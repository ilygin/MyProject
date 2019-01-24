import { combineReducers } from 'redux';
import courses from './courses';
import newUser from './signup';
import loginUser from './login';
import savePageData from './savePageData';
import courseData from './loadCourseData';

export default combineReducers({
    courses,
    newUser,
    loginUser,
    savePageData,
    courseData
})
