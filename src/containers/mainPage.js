import React from 'react';
import Header from '../blocks/header';
import ListCourses from "./listCourse";
import LoginForm from '../blocks/mainPage/loginForm';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userAction from '../actions/action';


class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        const {courses, newUser} = this.props;
        const {fetchCourses, signUpUser, logInUser} = this.props.userAction;
        return (
            <div>
                <Header />
                <div className = "container" >
                    <div className = "row main-page-row my-4" >
                        <ListCourses fetchCourses={fetchCourses} courses={courses}/>
                        <LoginForm logInUser={logInUser} signUpUser={signUpUser} newUser={newUser}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        courses: state.courses,
        newUser: state.newUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)