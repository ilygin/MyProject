import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
//import '../dist/quill.snow.css';
import 'codemirror/lib/codemirror.css';

import mainPage from './containers/mainPage';
import newCourse from './containers/newCourse';

import {Provider} from "react-redux";
import configurateStore from './store/configurateStore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const store = configurateStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={mainPage}/>
                <Route path={'/new_course/:id/page/:id'} component={newCourse}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("app")
);