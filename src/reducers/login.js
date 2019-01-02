import {LOGIN_POST_USER_DATA, LOGIN_STATUS_ERROR, LOGIN_STATUS_SUCCESS} from '../actions/action';

const initialState = {
    isFetchingLogin: false,
    statusLogin: "",
    msgLogin: ""
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
                statusLogin: 'success'
            });
        case LOGIN_STATUS_ERROR:
            return Object.assign({}, state, {
                isFetchingLogin: false,
                statusLogin: 'error',
                msgLogin: action.msg
            });
        default:
            return state
    }
}
