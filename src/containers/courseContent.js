import React from 'react';
import { EditorState, convertFromRaw, draftToHtml } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

class CourseContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

	}


	render() {
		let title = "";
		var content;

		if (this.props.courseData.courseDataItems[this.props.pageNumber-1]) {
			title = this.props.courseData.courseDataItems[this.props.pageNumber-1].title;
			content = this.props.courseData.courseDataItems[this.props.pageNumber-1].pageContent;
		}
			console.log(content)
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
				        defaultContentState={content}
				        readOnly = {true}
				      />
				</div>
			</div>
		)
	}
}

export default CourseContent;