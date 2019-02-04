import React from 'react';
import DraftEditor from './editorContainer';

class NewCoursePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onSavePageContent = this.onSavePageContent.bind(this);
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
		try {
			this.props.savePageData(title, this.state.text, this.props.pathParams.courseId, this.props.pathParams.pageNumber);
		}catch (e) {
			console.log(e);
		}
	}

	render() {
		let title = this.props.pathParams.typePage === "titlePage" ? "Название курса:" :
			this.props.pathParams.typePage === "section" ?  "Название раздела:" : "Название главы:";

		return (
			<div className={"course-block__right-container"}>
				<div className="right-container__title-page">
					<input autocomplete="off" type="text" className="form-control titleCourse" id="inputDefault" placeholder={title}/>
					<button onClick={this.onSavePageContent} className="title-page__btn-save">Сохранить изменения</button>
				</div>
				<div className={"right-container__editor-block"}>
					<DraftEditor />
				</div>
			</div>
		)
	}
}
export default NewCoursePage;
