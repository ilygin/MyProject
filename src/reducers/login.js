import {LOGIN_POST_USER_DATA, LOGIN_STATUS_ERROR, LOGIN_STATUS_SUCCESS, LOGIN_STATUS_FAILURE, LOGOUT_USER} from '../actions/action';

const initialState = {
    isFetchingLogin: false,
    statusLogin: "",
    msgLogin: "",
    isAuth: null
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
                msgLogin: action.msgLogin,
                isAuth: false
            });
        case LOGIN_STATUS_ERROR:
            return Object.assign({}, state, {
                isFetchingLogin: false,
                statusLogin: 'error',
                msgLogin: action.msgLogin,
                isAuth: false
            });
        case LOGOUT_USER:
            return Object.assign({}, state, {
                isFetchingLogin: false,
                statusLogin: '',
                msgLogin: action.msg,
                isAuth: false
            });
        default:
            return state
    }
}
