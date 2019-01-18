import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import * as userAction from "../actions/action";

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.userAction.checkAuthorizationUser();
    }
    render() {
        const { component: Component, ...rest } = this.props;
        return (
            <Route {...rest} render={props => {

                return rest.isAuth ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: {from: props.location},
                        }}
                    />
                )
            }
            }
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.loginUser.isAuth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        userAction: bindActionCreators(userAction, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)



























