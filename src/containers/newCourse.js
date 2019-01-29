import React from 'react';
import Header from './../blocks/header';
import NewSidebar from "./newSidebar";
import NewCourseContent from "./newCourseContent";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as userAction from "../actions/action";

class NewCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: ""}
    }

    render() {
        const {savePageData, fetchCourseData} = this.props.userAction;
        const {courseData} = this.props;
        return (
            <div>
                <Header />
                <div className = "course-block">
                    <div className = "course-block__left-container">
                        <NewSidebar/>
                    </div>
                    <div className={"course-block__right-container"}>
                        <NewCourseContent fetchCourseData={fetchCourseData} courseData={courseData} pathParams = {this.props.match.params} title={this.state.title} savePageData={savePageData}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        courseData: state.courseData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCourse)
