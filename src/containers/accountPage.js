import React from 'react';
import Header from '../blocks/header';
import Account from '../blocks/AccountPage/account';
import ListCourses from "../containers/listCourse";

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userAction from '../actions/action';


class AccountPage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {courses} = this.props;
        const {fetchCourses, logOutUser} = this.props.userAction;
        return (
            <div>
                <Header />
                <div className = "container" >
                    <div className = "row main-page-row my-4" >
                        <ListCourses fetchCourses={fetchCourses} courses={courses}/>
                        <Account logOutUser={logOutUser} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
