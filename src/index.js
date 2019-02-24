import React from "react";
import ReactDOM from "react-dom";

import './style.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import mainPage from './containers/mainPage';
import CoursePage from './containers/CoursePage';
import newCourse from './containers/editCoursePage';
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
                <Route path={'/course/:courseId/:pageNumber'} component={CoursePage}/>
                <Route path={'/createNewCourse/:courseId/:typePage/:pageNumber'} component={newCourse}/>
                <ProtectRouter path='/account' component={AccountPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("app")
);
