import React from 'react';
// import NewQuillEditor from './NewQuillEditor.js';
// import CodeMirror from 'react-codemirror'

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

class NewCoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.updateCode = this.updateCode.bind(this);
        // this.addQuillEditor = this.addQuillEditor.bind(this);
    }

    // updateCode(newCode) {
    //     this.setState({
    //         codemirror: newCode,
    //     });
    // }
    //
    // addQuillEditor(type) {
    //     let newGuid = uuidv1();
    //     let newBlock = {
    //         id: newGuid,
    //         type
    //     };
    //     let currentPageBlocks = JSON.parse(window.localStorage.getItem("Blocks")||"[]");
    //     currentPageBlocks.push(newBlock);
    //     localStorage.setItem("Blocks", JSON.stringify(currentPageBlocks));
    // }

    render() {
        // let options = {
        //     mode: 'javascript',
        //     lineNumbers: true,
        // };
        //
        // console.log(this.props);
        // let pageEditors = JSON.parse(window.localStorage.getItem("Editors")||"[]").map( (item, index) => {
        //     console.log(item, index);
        // });
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

                </div>
                <div className={"mt-2"}>
                    <button type="button" className="btn btn-outline-secondary">
                        Добавить редактор <strong>кода</strong>
                    </button>
                    <button type="button" className="btn btn-outline-secondary ml-4">
                        Добавить редактор <strong>текста</strong>
                    </button>
                </div>
            </div>
        )
    }
}

export default NewCoursePage;