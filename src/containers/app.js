import React from 'react';
import Header from '../blocks/header';
import ListCourses from "./listCourse";
import LoginForm from '../blocks/loginForm';
//import PersonalAccount from './mainPage/PersonalAccount';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userAction from '../actions/action'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        const {courses} = this.props;
        const {fetchCourses, logIn} = this.props.userAction;
        return (
            <div>
                <Header />
                <div className = "container" >
                    <div className = "row main-page-row my-4" >
                        <ListCourses fetchCourses={fetchCourses} courses={courses}/>
                        <LoginForm logIn={logIn}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)