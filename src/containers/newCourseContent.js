import React from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

class NewCoursePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createEmpty(),
		};
		this.onSavePageContent = this.onSavePageContent.bind(this);
		this.onEditorStateChange = this.onEditorStateChange.bind(this);
	}

	async componentDidMount() {
		try {
			await this.props.fetchCourseData(this.props.pathParams.courseId);
		}catch (e) {
			console.log(e);
		}
	}

	onSavePageContent(e) {
		e.preventDefault();
		let title = document.querySelector(".titleCourse").value;
		let convertToRawEditorData = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
		debugger;
		try {
			this.props.savePageData(title, convertToRawEditorData, this.props.pathParams.courseId, this.props.pathParams.pageNumber);
		}catch (e) {
			console.log(e);
		}
	}

	onEditorStateChange(editorState) {
		this.setState({
			editorState,
		});
	}

	render() {
		const { editorState } = this.state;
		let title = this.props.pathParams.typePage === "titlePage" ? "Название курса:" :
			this.props.pathParams.typePage === "section" ?  "Название раздела:" : "Название главы:";

		return (
			<div className={"course-block__right-container"}>
				<div className="right-container__title-page">
					<input autocomplete="off" type="text" className="form-control titleCourse" id="inputDefault" placeholder={title}/>
					<button onClick={this.onSavePageContent} className="title-page__btn-save">Сохранить изменения</button>
				</div>
				<div className={"right-container__editor-block"}>
					<Editor
						editorState={editorState}
						wrapperClassName="demo-wrapper"
						editorClassName="demo-editor"
						onEditorStateChange={this.onEditorStateChange}
					/>
				</div>
			</div>
		)
	}
}

export default NewCoursePage;