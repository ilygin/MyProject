import React from 'react';
import ReactQuill from 'react-quill';

class NewCoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: ""
        };
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.onSavePageContent = this.onSavePageContent.bind(this);
    }

    handleEditorChange(value) {
        this.setState({ text: value })
    }

    onSavePageContent(e) {
        e.preventDefault();
        let title = document.querySelector(".titleCourse").value;
        try {
            this.props.savePageData(title, this.state.text);
        }catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-8 mt-2 offset-md-1">
                <div className="form-group">
                    <label className="control-label" htmlFor="inputDefault">
                        <h3>Название курса: </h3>
                    </label>
                    <input type="text" className="form-control titleCourse" id="inputDefault" placeholder={this.props.title}/>
                </div>
                <div>
                    <h3>Содержание курса: </h3>
                </div>
                <div>
                    <ReactQuill value={this.state.text}
                                onChange={this.handleEditorChange} />
                </div>
                <div>
                    <button onClick={this.onSavePageContent}>Сохранить</button>
                </div>
            </div>
        )
    }
}

export default NewCoursePage;