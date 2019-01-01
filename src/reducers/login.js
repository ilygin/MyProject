import {POST_USER_DATA, STATUS_ERROR, STATUS_SUCCESS} from '../actions/action';

const initialState = {
    isFetching: false,
    status: "",
    msg: ""
};

export default function loginUser(state = initialState, action) {
    switch (action.type) {
        case POST_USER_DATA:
            return Object.assign({}, state, {
                isFetching: true
            });
        case STATUS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                status: 'success'
            });
        case STATUS_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                status: 'error',
                msg: action.msg
            });
        default:
            return state
    }
}