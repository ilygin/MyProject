import React from 'react';

class NewCoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
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
            </div>
        )
    }
}

export default NewCoursePage;