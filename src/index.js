import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import mainPage from './containers/mainPage';
import newCourse from './containers/newCourse';
import AccountPage from './containers/accountPage';
import ProtectRouter from './containers/privateRoute';

import {Provider} from "react-redux";
import configurateStore from './store/configurateStore';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const store = configurateStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={mainPage}/>
                <Route path={'/createNewCourse/:courseId/:typePage/:pageNumber'} component={newCourse}/>
                <ProtectRouter path='/account' component={AccountPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("app")
);
