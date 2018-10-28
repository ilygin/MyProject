export const REQUEST_COURSE = 'REQUEST_COURSE'
export const RECEIVE_COURSE = 'RECEIVE_COURSE'

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
            const response = await fetch('http://localhost:3000/api/courses.json');
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