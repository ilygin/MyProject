import {POST_USER_DATA_LOGIN, STATUS_ERROR_LOGIN, STATUS_SUCCESS_LOGIN} from '../actions/action';

const initialState = {
    isFetchingLogin: false,
    statusLogin: "",
    msgLogin: ""
};

export default function loginUser(state = initialState, action) {
    switch (action.type) {
        case POST_USER_DATA_LOGIN:
            return Object.assign({}, state, {
                isFetchingLogin: true
            });
        case STATUS_SUCCESS_LOGIN:
            return Object.assign({}, state, {
                isFetchingLogin: false,
                statusLogin: 'success'
            });
        case STATUS_ERROR_LOGIN:
            return Object.assign({}, state, {
                isFetchingLogin: false,
                statusLogin: 'error',
                msgLogin: action.msg
            });
        default:
            return state
    }
}