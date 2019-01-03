import React from 'react';
import ListCourses from "./listCourse";
import LoginForm from '../blocks/mainPage/loginForm';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userAction from '../actions/action';

class MainPageContent extends React.Component {
    constructor(props){
        super(props);
    }

    async componentDidMount(){
        try {
            await this.props.checkAuthorizationUser();
        }catch(e){
            console.log(`Error: ${e}`);
        }
    }

    render() {
        const {courses, newUserState, loginUserState} = this.props;
        const {fetchCourses, signUpUser, logInUser} = this.props.userAction;
        return (
            <div className = "container" >
                <div className = "row main-page-row my-4" >
                    <ListCourses fetchCourses={fetchCourses} courses={courses}/>
                    <LoginForm loginUserState={loginUserState} logInUser={logInUser} signUpUser={signUpUser} newUser={newUserState}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        courses: state.courses,
        newUserState: state.newUser,
        loginUserState: state.loginUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContent)
