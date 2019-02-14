import React from 'react';
import Header from './../blocks/header';
import Sidebar from "./sidebar";
import CourseContent from "./courseContent";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as userAction from "../actions/action";

class Course extends React.Component {
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
					<Sidebar />
					<CourseContent />
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

export default connect(mapStateToProps, mapDispatchToProps)(Course)
