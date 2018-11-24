import React from 'react';
import ReactQuill from 'react-quill'

class quillEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorHtml: '', theme: 'snow'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (html) {
        this.setState({ editorHtml: html });
    }

    render() {
        let modules = {
            toolbar: [
                [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                [{size: []}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'},
                    {'indent': '-1'}, {'indent': '+1'}]
                    ['clean']
            ],
            clipboard: {
                // toggle to add extra line breaks when pasting HTML:
                matchVisual: false,
            }
        };
        let formats = [
            'header', 'font', 'size',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent'
        ];

        return (
            <ReactQuill
                theme={this.state.theme}
                onChange={this.handleChange}
                value={this.state.editorHtml}
                modules={modules}
                formats={formats}
                bounds={'.app'}
                placeholder={this.props.placeholder}
            />
        )
    }
}
export default quillEditor;