import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => {
                    console.log(`rest.isAuth: ${rest.isAuth}`);
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
};

const mapStateToProps = state => {
    return {
        isAuth: state.loginUser.isAuth
    }
};

export default connect(mapStateToProps)(PrivateRoute)
