import React from "react";
import ReactDOM from "react-dom";

import 'react-quill/dist/quill.snow.css';
import "react-quill/dist/quill.bubble.css";

import './newStyle.css';

import mainPage from './containers/mainPage';
import newCourse from './containers/newCourse';
import AccountPage from './containers/accountPage';
import ProtectRouter from './containers/privateRoute';

import {Provider} from "react-redux";
import configurateStore from './store/configurateStore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
