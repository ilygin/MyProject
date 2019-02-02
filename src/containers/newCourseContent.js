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
			<div className="col-sm-9 col-sm-offset-3 col-md-8 mt-2 offset-md-1">
				<div className="form-group">
					<label className="control-label" htmlFor="inputDefault">
						<h3>{title}</h3>
					</label>
					<input type="text" className="form-control titleCourse" id="inputDefault" placeholder={this.props.title}/>
				</div>
				<div>
					<h3>Содержание курса:  </h3>
				</div>
				<div>
					<DraftEditor />
				</div>
				<div>
					<button onClick={this.onSavePageContent} className="btn btn-primary">Сохранить страницу</button>
				</div>
			</div>
		)
	}
}
export default NewCoursePage;
