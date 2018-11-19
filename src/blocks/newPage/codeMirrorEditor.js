import CodeMirror from 'react-codemirror';

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
        };
        console.log(this.props);
        return (
            <CodeMirror value={this.state.code} onChange={this.updateCode} options={options}/>
        )
    }
}
export default CodeMirrorEditor;