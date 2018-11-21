import React from 'react';
import QuillEditor from '../blocks/newPage/quillEditor';
import CodeMirrorEditor from '../blocks/newPage/codeMirrorEditor';

class NewCoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editors: []
        };
    }

    addEditor(type) {
        let currentListOfEditors = this.state.editors || JSON.parse(window.localStorage.getItem("Blocks")||"[]");
        let newBlock = {
            id: currentListOfEditors.length,
            type
        };
        let newListOfEditors = [...currentListOfEditors, newBlock];
        localStorage.setItem("Editors", JSON.stringify(newListOfEditors));
        this.setState({editors: newListOfEditors});
    }

    render() {
        let pageEditors = [];
        if (this.state.editors.length === 0) {
            pageEditors = JSON.parse(window.localStorage.getItem("Editors") || "[]").map((item, index) => {
                if (item.type === "quill") {
                    return (
                        <div className={"my-2"}>
                            <QuillEditor />
                        </div>)
                } else if (item.type === "codemirror") {
                    return (
                        <div className={"my-2"}>
                            <CodeMirrorEditor />
                        </div>)
                }
            })
        } else {
            pageEditors = this.state.editors.map((item, index) => {
                if (item.type === "quill") {
                    return (
                        <div className={"my-2"}>
                            <QuillEditor />
                        </div>)
                } else if (item.type === "codemirror") {
                    return (
                        <div className={"my-2"}>
                            <CodeMirrorEditor />
                        </div>)
                }
            })
        }

        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-8 mt-2 offset-md-1">
                <div className="form-group">
                    <label className="control-label" htmlFor="inputDefault">
                        <h3>Название курса: </h3>
                    </label>
                    <input type="text" className="form-control" id="inputDefault"/>
                </div>
                <div className={"my-4"}>
                    <h3>Содержание курса:</h3>
                    {pageEditors}
                </div>
                <div className={"mt-2"}>
                    <button onClick={this.addEditor.bind(this, "codemirror")} type="button" className="btn btn-outline-secondary">
                        Добавить редактор <strong>кода</strong>
                    </button>
                    <button onClick={this.addEditor.bind(this, "quill")} type="button" className="btn btn-outline-secondary ml-4">
                        Добавить редактор <strong>текста</strong>
                    </button>
                </div>
            </div>
        )
    }
}

export default NewCoursePage;