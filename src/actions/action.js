export const REQUEST_COURSE = 'REQUEST_COURSE';
export const RECEIVE_COURSE = 'RECEIVE_COURSE';
const URL = "http://77.222.54.255";
const URL2 = "http://localhost";
export function requestCourses() {
    return {
        type: REQUEST_COURSE
    }
}

export function receiveCourses(json) {
    return {
        type: RECEIVE_COURSE,
        courses: json
    }
}

export function fetchCourses() {
    return function (dispatch) {
        dispatch(requestCourses());
        const request = async () => {
            const response = await fetch(`${URL}/api/courses.json`);
            try {
                const json = await response.json();
                dispatch(receiveCourses(json));
            } catch (e) {
                console.log(e);
            }
        };
        return request();
    }
}

export const POST_USER_DATA = "POST_USER_DATA";
export const STATUS_SUCCESS = "STATUS_SUCCESS";
export const STATUS_ERROR = "STATUS_ERROR";

export function postUserData() {
    return {
        type: POST_USER_DATA
    }
}

export function statusSuccess() {
    return {
        type: STATUS_SUCCESS,

    }
}

export function statusError(msg) {
    return {
        type: STATUS_ERROR,
        msg
    }
}
export function signUpUser(email, password) {
    return function (dispatch) {
        if (!email && !password) {
            dispatch(statusError());
            return;
        }
        dispatch(postUserData());
        const checkEmail = async(email) => {
            let isEmailNew = false;
            try {
                isEmailNew = await fetch(`${URL}/api/checkEmail`, {
                    method: 'post',
                    body: JSON.stringify({email}),
                    headers: {
                        'content-type': 'application/json'
                    }
                });
                dispatch(statusSuccess());
            } catch (e) {
                dispatch(statusError(e.toString()));
            }

            if (isEmailNew) {
                const registerNewUser = async (email, password) => {
                    try {
                        await fetch(`${URL}/api/signup/`, {
                            method: 'post',
                            body: JSON.stringify({email, password}),
                            headers: {
                                'content-type': 'application/json'
                            }
                        });
                        dispatch(statusSuccess());
                    } catch (e) {
                        dispatch(statusError(e.toString()));
                    }
                };
                return registerNewUser(email, password);
            } else {
                dispatch(statusError("Email уже зарегестрирован"));
            }
        };
        return checkEmail(email);
    }
}