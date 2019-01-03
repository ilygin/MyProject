import {NOT_AUTHORIZED_USER, AUTHORIZED_USER} from '../actions/action';

const initialState = {
    isAuth: false
};

export default function isAuthorizedUser(state = initialState, action) {

    switch (action.type) {
        case AUTHORIZED_USER:
            return Object.assign({}, state, {
                isAuth: true
            });
        case NOT_AUTHORIZED_USER:
            return Object.assign({}, state, {
                isAuth: false
            });
        default:
            return state
    }
}
