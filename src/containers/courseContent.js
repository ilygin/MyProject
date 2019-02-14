import React from 'react';
import { EditorState, convertFromRaw, draftToHtml } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

const content = {"blocks":[{"key":"cedak","text":"Тут будет отображаться курс","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}};

class CourseContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: ""
		};

	}


	render() {
		return (
			<div className={"course-block__right-container"}>
				<div className={"right-container__course-block"}>
					<div className={"titleCourseView"}>
						<h2>Заголовок</h2>
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