import React from 'react';
import { EditorState, ContentState, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

class CourseContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};

	}

	render() {
		let title = "";
		let editorState;

		if (this.props.courseData.courseDataItems[this.props.pageNumber-1]) {
			title = this.props.courseData.courseDataItems[this.props.pageNumber-1].title;
			let content = convertFromRaw(JSON.parse(this.props.courseData.courseDataItems[this.props.pageNumber-1].pageContent));
			editorState= EditorState.createWithContent(content);
		}
		return (
			<div className={"course-block__right-container"}>
				<div className={"right-container__course-block"}>
					<div className={"titleCourseView"}>
						<h2>{title}</h2>
					</div>
					<Editor
				      	toolbarHidden
				        wrapperClassName="demo-wrapper"
				        editorClassName="demo-editor"
				        editorState={editorState}
				        readOnly = {true}
				      />
				</div>
			</div>
		)
	}
}

export default CourseContent;