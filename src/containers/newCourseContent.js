import React from 'react';
import quillEditor from '../blocks/newPage/quillEditor';
// import CodeMirror from 'react-codemirror'

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

class NewCoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editors: []
        };
        // this.updateCode = this.updateCode.bind(this);
        //this.addEditor = this.addEditor.bind(this);
    }

    // updateCode(newCode) {
    //     this.setState({
    //         codemirror: newCode,
    //     });
    // }
    //
    addEditor(type) {
        let currentListOfEditors = this.state.editors || JSON.parse(window.localStorage.getItem("Blocks")||"[]");
        let newBlock = {
            id: currentListOfEditors.length,
            type
        };
        let newListOfEditors = [...currentListOfEditors, newBlock];
        localStorage.setItem("Blocks", JSON.stringify(newListOfEditors));
        this.setState({editors: newListOfEditors});
    }

    render() {
        let pageEditors = [];
        if (this.state.editors.length === 0) {
            pageEditors = JSON.parse(window.localStorage.getItem("Editors") || "[]").map((item, index) => {
                if (item.type === "quill") {
                    return (<quillEditor />)
                }
            })
        } else {
            pageEditors = this.state.editors.map((item, index) => {
                if (item.type === "quill") {
                    return (<quillEditor />)
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
                    <button type="button" className="btn btn-outline-secondary">
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