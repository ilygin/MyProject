import React from 'react';

import Header from './../blocks/header';
import NewSidebar from "./NewSidebar";
import NewCourseContent from "./newCourseContent";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as userAction from "../actions/action";

class NewCourse extends React.Component {
    render() {
        // const { createUnit, createSection } = this.props.userAction;
        // const { items } = this.props;
        //
        // let context = this.props.items.context.filter(
        //     item => {
        //         return item.id.toUpperCase().includes(this.props.match.params.id.toUpperCase())
        //     }
        // );

        return (
            <div>
                <Header />
                <div className = "container-fluid" >
                    <div className = "row">
                        <NewSidebar />
                        <NewCourseContent />
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {
        items: state.createCourse
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCourse)