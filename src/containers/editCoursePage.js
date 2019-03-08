import React from 'react';
import Header from '../blocks/header';
import NewSidebar from "../blocks/edit/editSidebar";
import NewCourseContent from "../blocks/edit/editCourseContent";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as userAction from "../actions/action";

class EditCourse extends React.Component {
	constructor(props) {
		super(props);
		this.state = {title: "", sidebarList: []}
	}

	render() {
		const {savePageData, fetchCourseData} = this.props.userAction;
		const {courseData} = this.props;

		const activeItemId = this.props.match.params.pageNumber;
		const courseId = this.props.match.params.courseId;
		
		return (
			<div>
				<Header />
				<div className = "course-block">
					<div className = "course-block__left-container">
						<NewSidebar fetchCourseData= {fetchCourseData}
								activeItem = {activeItemId}
								courseId = {courseId}
								items = {courseData}
						/>
					</div>
					<NewCourseContent
						courseData = {courseData}
						pathParams = {this.props.match.params}
						title = {this.state.title}
						savePageData = {savePageData}
					/>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditCourse)
