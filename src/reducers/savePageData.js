import {POST_PAGE, STATUS_SAVING_PAGE_SUCCESS, STATUS_SAVING_PAGE_ERROR} from '../actions/action';

const initialState = {
    isFetching: false,
    status: "",
    msg: ""
};

export default function savePageData(state = initialState, action) {
    switch (action.type) {
        case POST_PAGE:
            return Object.assign({}, state, {
                isFetching: true
            });
        case STATUS_SAVING_PAGE_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                status: 'success'
            });
        case STATUS_SAVING_PAGE_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                status: 'error',
                msg: action.msg
            });
        default:
            return state
    }
}