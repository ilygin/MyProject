import {REQUEST_COURSE_DATA, RECEIVE_COURSE_DATA} from '../actions/action';

const initialState = {
    isFetching: false,
    courseDataItems: []
};

export default function courseData(state = initialState, action) {
    switch (action.type) {
        case REQUEST_COURSE_DATA:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_COURSE_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                courseDataItems: action.courseData,
            });
        default:
            return state
    }
}
