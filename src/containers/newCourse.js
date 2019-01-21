import React from 'react';
import Header from './../blocks/header';
import NewSidebar from "./newSidebar";
import NewCourseContent from "./newCourseContent";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as userAction from "../actions/action";

class NewCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: ""}
    }
    //
    // componentDidUpdate() {
    //     this.setState({title: "Test title"});
    // }

    render() {
        const {savePageData} = this.props.userAction;
        return (
            <div>
                <Header />
                <div className = "container-fluid" >
                    <div className = "row">
                        <NewSidebar />
                        <NewCourseContent pathParams = {this.props.match.params} title={this.state.title} savePageData={savePageData}/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCourse)