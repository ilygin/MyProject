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
	async componentDidMount() {
		console.log(this.props)
		try {
			this.props.userAction.fetchCourseData(this.props.match.params.courseId);
		}catch(e) {
			console.log('Error: ', e);
		}
	}

	render() {
		const {savePageData, fetchCourseData} = this.props.userAction;
		const {courseData} = this.props;
	
		let sidebarList = courseData.courseDataItems.map((item)=>{
			return {
				title: item.title,
				isUnit: !!item.isUnit,
				courseId: item.courseId,
				numberPage: item.numberPage
			}
		});

		sidebarList.sort(function(a, b){
			return a.numberPage - b.numberPage
		})

		return (
			<div>
				<Header />
				<div className = "course-block">
					<Sidebar sidebarList={sidebarList}/>
					<CourseContent pageNumber={this.props.match.params.pageNumber} courseData={courseData}/>
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
