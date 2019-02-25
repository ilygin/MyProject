export const REQUEST_COURSE = 'REQUEST_COURSE';
export const RECEIVE_COURSE = 'RECEIVE_COURSE';
//const URL = "http://77.222.54.255";
/* for dev mode*/
const URL = "http://localhost:3000";
/**/
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
		dispatch(postUserData());
		if (!email || !password) {
			dispatch(statusError("Заполните поля email и пароль"));
			return("Заполните поля email и пароль");
		}
		const checkEmail = async(email) => {
			let isEmailNotNew = false;
			try {
				let data = await fetch(`${URL}/api/checkEmail/`, {
					method: 'post',
					credentials: 'include',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email
					})
				});
				let dataToJson = await data.json();
				isEmailNotNew = dataToJson[0]["count(`id`)"] > 0;
			} catch (e) {
				dispatch(statusError("Ошибка проверки на существовании почты"));
				return("Ошибка проверки на существовании почты");

			}

			if (isEmailNotNew) {
				dispatch(statusError("Email уже зарегестрирован"));
				return("Email уже зарегестрирован");
			} else {
				const registerNewUser = async (email, password) => {
					try {
						await fetch(`${URL}/auth/signup/`, {
							method: 'post',
							credentials: 'include',
							headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/json'
							},
							body: JSON.stringify({
								email,
								password
							})
						});
						dispatch(statusSuccess());
						return("Регистрация прошла успешно. Повторите введеные данные.");
					} catch (e) {
						dispatch(statusError("Ошибка регистрации пользователя"));
						return("Ошибка регистрации пользователя");
					}
				};
				return registerNewUser(email, password);
			}
		};
		return checkEmail(email);
	}
}

export const LOGIN_POST_USER_DATA= "LOGIN_POST_USER_DATA";
export const LOGIN_STATUS_SUCCESS = "LOGIN_STATUS_SUCCESS";
export const LOGIN_STATUS_ERROR = "LOGIN_STATUS_ERROR";
export const LOGIN_STATUS_FAILURE = "LOGIN_STATUS_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";

export function checkUserData() {
	return {
		type: LOGIN_POST_USER_DATA
	}
}

export function loginStatusSuccess() {
	return {
		type: LOGIN_STATUS_SUCCESS,
	}
}

export function loginStatusFailure(msgLogin) {
	return {
		type: LOGIN_STATUS_FAILURE,
		msgLogin
	}
}

export function loginStatusError(msg) {
	return {
		type: LOGIN_STATUS_ERROR,
		msg
	}
}

export function logoutUser() {
	return {
		type: LOGOUT_USER
	}
}

export function logInUser(email, password) {
	return function(dispatch) {
		dispatch(checkUserData());
		if (!email || !password) {
			dispatch(loginStatusError("Заполните поля email и пароль"));
			return("Заполните поля email и пароль");
		}
		const checkUser = async (email, password) => {
			try {
				let data = await fetch(`${URL}/auth/logInUser/`, {
					method: 'post',
					credentials: 'include',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email,
						password
					})
				});
				let checkUserDataJson = await data.json();
				if (checkUserDataJson.status === "success") {
					dispatch(loginStatusSuccess());
				}else {
					dispatch(loginStatusFailure(checkUserDataJson.msg));
					return(checkUserDataJson.msg);
				}
			}catch (e) {
				dispatch(loginStatusError(e.toString()));
			}
		};
		return checkUser(email, password);
	}
}

export function checkAuthorizationUser() {
	return function (dispatch) {
		const checkUser = async () => {
			try {
				let data = await fetch(`${URL}/auth/isAuthorized`);
				let dataJson = await data.json();
				if(dataJson.isAuthorized) {
					dispatch(loginStatusSuccess());
				}else {
					dispatch(loginStatusFailure());
				}
			}catch(e) {
				dispatch(loginStatusError(e.toString()));
			}
		};
		return checkUser();
	}
}

export function logOutUser() {
	return function (dispatch) {
		const logout = async function() {
			try {
				await fetch(`${URL}/auth/logout`);
				dispatch(logoutUser());
			}catch(e) {
				dispatch(loginStatusError(e.toString()));
			}
		};
		return logout();
	}
}
export const POST_PAGE = "POST_PAGE";
export const STATUS_SAVING_PAGE_SUCCESS = "STATUS_SAVING_PAGE_SUCCESS";
export const STATUS_SAVING_PAGE_ERROR = "STATUS_SAVING_PAGE_ERROR";

export function postPage() {
	return {
		type: POST_PAGE
	}
}

export function statusSavingPageSuccess() {
	return {
		type: STATUS_SAVING_PAGE_SUCCESS,

	}
}

export function statusSavingPageError(msg) {
	return {
		type: STATUS_SAVING_PAGE_ERROR,
		msg
	}
}

export function savePageData(title, content, courseId, pageNumber) {
	return function (dispatch) {
		dispatch(postPage());
		const savePageData = async(title, content, courseId, pageNumber) => {
			try {
				let data = await fetch(`${URL}/api/newCourse/savePageData`, {
					method: 'post',
					credentials: 'include',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						title,
						content, 
						courseId, 
						pageNumber
					})
				});
				let resultJson = await data.json();
				if (resultJson === 'success') {
					dispatch(statusSavingPageSuccess());
				} else {
					dispatch(statusSavingPageError("Ошибка с доступом к бд"));
				}
			} catch (e) {
				dispatch(statusSavingPageError(e.toString()));
			}
		};
		return savePageData(title, content, courseId, pageNumber);
	}
}

export const REQUEST_COURSE_DATA = 'REQUEST_COURSE_DATA';
export const RECEIVE_COURSE_DATA = 'RECEIVE_COURSE_DATA';

export function requestCoursesData() {
	return {
		type: REQUEST_COURSE_DATA
	}
}

export function receiveCoursesData(json) {
	return {
		type: RECEIVE_COURSE_DATA,
		courseData: json
	}
}

export function fetchCourseData(idCourse) {
	return function (dispatch) {
		dispatch(requestCoursesData());
		const request = async (idCourse) => {
			const response = await fetch(`${URL}/api/loadCourseData/${idCourse}`);
			try {
				const json = await response.json();
				dispatch(receiveCoursesData(json));
			} catch (e) {
				console.log(e);
			}
		};
		return request(idCourse);
	}
}

export const REQUEST_COURSE_DATA = 'REQUEST_COURSE_DATA';
export const RECEIVE_COURSE_DATA = 'RECEIVE_COURSE_DATA';

export function requestCoursesData() {
	return {
		type: REQUEST_COURSE_DATA
	}
}

export function receiveCoursesData(json) {
	return {
		type: RECEIVE_COURSE_DATA,
		courseData: json
	}
}

export function fetchCourseData(idCourse) {
	return function (dispatch) {
		dispatch(requestCoursesData());
		const request = async (idCourse) => {
			const response = await fetch(`${URL}/api/loadCourseData/${idCourse}`);
			try {
				const json = await response.json();
				dispatch(receiveCoursesData(json));
			} catch (e) {
				console.log(e);
			}
		};
		return request(idCourse);
	}
}
export const POST_PAGE = "POST_PAGE";
export const STATUS_SAVING_PAGE_SUCCESS = "STATUS_SAVING_PAGE_SUCCESS";
export const STATUS_SAVING_PAGE_ERROR = "STATUS_SAVING_PAGE_ERROR";

export function postPage() {
	return {
		type: POST_PAGE
	}
}

export function statusSavingPageSuccess() {
	return {
		type: STATUS_SAVING_PAGE_SUCCESS,

	}
}

export function statusSavingPageError(msg) {
	return {
		type: STATUS_SAVING_PAGE_ERROR,
		msg
	}
}

export function savePageData(title, content, courseId, pageNumber) {
	return function (dispatch) {
		dispatch(postPage());
		const savePageData = async(title, content, courseId, pageNumber) => {
			try {
				let data = await fetch(`${URL}/api/newCourse/savePageData`, {
					method: 'post',
					credentials: 'include',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						title,
						content, 
						courseId, 
						pageNumber
					})
				});
				let resultJson = await data.json();
				if (resultJson === 'success') {
					dispatch(statusSavingPageSuccess());
				} else {
					dispatch(statusSavingPageError("Ошибка с доступом к бд"));
				}
			} catch (e) {
				dispatch(statusSavingPageError(e.toString()));
			}
		};
		return savePageData(title, content, courseId, pageNumber);
	}
}
