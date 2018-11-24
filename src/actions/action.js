export const REQUEST_COURSE = 'REQUEST_COURSE';
export const RECEIVE_COURSE = 'RECEIVE_COURSE';

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
            const response = await fetch('http://77.222.54.255/api/courses.json');
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
        type: STATUS_SUCCESS
    }
}

export function statusError() {
    return {
        type: STATUS_ERROR
    }
}
export function logIn(email, password) {
    return function (dispatch) {
        dispatch(postUserData());
        const request = async (email = 0, password = 0) => {
            try {
                let a = fetch('http://77.222.54.255/api/login/', {
                    method: 'post',
                    body: JSON.stringify({email, password}),
                    headers: {
                        'content-type': 'application/json'
                    }
                });
                console.log('LoginUser ', a);
                dispatch(statusSuccess());
            } catch (e) {
                dispatch(statusError());
            }
        };
        return request(email, password);
    }
}