import React from 'react';
import Header from '../blocks/header';
import LoginForm from '../blocks/mainPage/loginForm';
import ListCourses from "../containers/listCourse";

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userAction from '../actions/action';



class MainPage extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		const {courses, loginUser, newUser} = this.props;
		const {fetchCourses, signUpUser, logInUser, checkAuthorizationUser} = this.props.userAction;
		return (
			<div>
				<Header />
				<div className = "main-block grid-width">
					<div className = "main-block__left-container">
						<ListCourses fetchCourses={fetchCourses} courses={courses}/>
					</div>
					<div className={"main-block__right-container"}>
						<LoginForm checkAuthorizationUser={checkAuthorizationUser} newUser={newUser} loginUser={loginUser}  logInUser={logInUser} signUpUser={signUpUser}/>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		courses: state.courses,
		loginUser: state.loginUser,
		newUser: state.newUser
	}
}

function mapDispatchToProps(dispatch) {
	return {
		userAction: bindActionCreators(userAction, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
