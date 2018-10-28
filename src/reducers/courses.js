import {REQUEST_COURSE, RECEIVE_COURSE} from '../actions/action';

const initialState = {
    isFetching: false,
    items: []
};

export default function courses(state = initialState, action) {
    switch (action.type) {
        case REQUEST_COURSE:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_COURSE:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.courses,
            });
        default:
            return state
    }
}