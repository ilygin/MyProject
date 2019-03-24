import React from 'react';
import { EditorState, convertToRaw, ContentState, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

class NewCoursePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createEmpty(),
			titlePlaceholder: "",
			titleValue:""
		};
		this.onSavePageContent = this.onSavePageContent.bind(this);
		this.onEditorStateChange = this.onEditorStateChange.bind(this);
		this.onChangeTitle = this.onChangeTitle.bind(this);
	}

	componentDidMount() {	
		const {typePage} = this.props.pathParams;
		let titlePlaceholder = this.chooseTitlePage(typePage); 
		this.setState({titlePlaceholder});
	}

	componentWillReceiveProps(nextProps) {
		const {typePage, pageNumber} = nextProps.pathParams;
		const {courseDataItems} = nextProps.courseData;
		let newTitle = this.state.titleValue;
		let editorState;
		if (courseDataItems !== undefined && courseDataItems[pageNumber] !== undefined) {
			const {title, pageContent} = courseDataItems[pageNumber];
			newTitle = title;
			let content = convertFromRaw(JSON.parse(pageContent));
			editorState = EditorState.createWithContent(content);
		}else {
			newTitle = this.chooseTitlePage(typePage)
		}
		this.setState({
			editorState,
			titleValue: newTitle 
		})
	}

	chooseTitlePage(type) {
		switch(type){
			case "titlePage":
				return "Название курса";
			case "section":
				return "Название раздела";
			default:
				return "Название главы";
		}
	}

	onSavePageContent(e) {
		e.preventDefault();
		let title = document.querySelector(".titleCourse").value;
		let convertToRawEditorData = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));

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

	onChangeTitle(event) {
		this.setState({titleValue: event.target.value});
	}
	render() {
		let { editorState, titlePlaceholder, titleValue } = this.state;
		return  (
			<div className={"course-block__right-container"}>
				<div className="right-container__title-page">
					<input  autocomplete = "off"
							type = "text"
							id = "inputDefault"
							onChange={(value) => this.onChangeTitle(value)}
							className = {"titleCourse"}
							placeholder = {titlePlaceholder}
							value = {titleValue}/>
					<button onClick = {this.onSavePageContent}
							className = "title-page__btn-save">
								Сохранить изменения
					</button>
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