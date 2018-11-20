import React from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2'

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

class CodeMirrorEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorHtml: '', theme: 'snow'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (html) {
        this.setState({ editorHtml: html });
    }

    render() {
        let options = {
            lineNumbers: true,
            mode: 'javascript'
        };
        console.log(this.props);
        return (
            <CodeMirror  options={options}/>
        )
    }
}
export default CodeMirrorEditor;