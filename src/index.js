import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
//import '../dist/quill.snow.css';
import 'codemirror/lib/codemirror.css';
import App from './containers/app';
//import CoursePage from './blocks/CoursePage';
import {Provider} from "react-redux";
import configurateStore from './store/configurateStore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import CreateCourse from "./blocks/NewCourse";


const store = configurateStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("app")
);