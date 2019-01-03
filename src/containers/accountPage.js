import React from 'react';
import Header from '../blocks/header';
import MainPageContent from '../containers/mainPageContent'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userAction from '../actions/action';


class AccountPage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {checkAuthorizationUser} = this.props.userAction;
        const {isAuthorized} = this.props;
        return (
            <div>
                <Header />
                <MainPageContent isAuthorized={isAuthorized} checkAuthorizationUser={checkAuthorizationUser}/>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        isAuthorized: state.isAuthorizedUser.isAuth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage)
