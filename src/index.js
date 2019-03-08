    import React from "react";
import ReactDOM from "react-dom";

import './style/style.css';
import './style/coursePage.css';
import './style/mainPage.css';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import mainPage from './containers/mainPage';
import CoursePage from './containers/CoursePage';
import EditCourse from './containers/editCoursePage';
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
                <Route path={'/editCourse/:courseId/:typePage/:pageNumber'} component={EditCourse}/>
                <ProtectRouter path='/account' component={AccountPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("app")
);
