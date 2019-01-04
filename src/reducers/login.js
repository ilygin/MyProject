import {LOGIN_POST_USER_DATA, LOGIN_STATUS_ERROR, LOGIN_STATUS_SUCCESS, LOGIN_STATUS_FAILURE} from '../actions/action';

const initialState = {
    isFetchingLogin: false,
    statusLogin: "",
    msgLogin: "",
    isAuth: false
};

export default function loginUser(state = initialState, action) {
    switch (action.type) {
        case LOGIN_POST_USER_DATA:
            return Object.assign({}, state, {
                isFetchingLogin: true
            });
        case LOGIN_STATUS_SUCCESS:
            return Object.assign({}, state, {
                isFetchingLogin: false,
                statusLogin: "success",
                msgLogin: "",
                isAuth: true
            });
        case LOGIN_STATUS_FAILURE:
            return Object.assign({}, state, {
                isFetchingLogin: false,
                statusLogin: "failure",
                msgLogin: "",
                isAuth: false
            });
        case LOGIN_STATUS_ERROR:
            return Object.assign({}, state, {
                isFetchingLogin: false,
                statusLogin: 'error',
                msgLogin: action.msg,
                isAuth: false
            });
        default:
            return state
    }
}
