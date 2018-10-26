import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// import '../dist/quill.snow.css';
//import 'codemirror/lib/codemirror.css';
// import App from './blocks/App';
//import CoursePage from './blocks/CoursePage';
//import {Provider} from "react-redux";
// import configurateStore from './store/configurateStore';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import CreateCourse from "./blocks/NewCourse";


const store = configurateStore();

// ReactDOM.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <Switch>
//                 <Route exact path='/' component={App}/>
//                 <Route path='/course/:id' component={CoursePage}/>
//                 <Route path='/create_course/:id' component={CreateCourse}/>
//             </Switch>
//         </BrowserRouter>
//     </Provider>,
//     document.getElementById("app")
// );
ReactDOM.render(
    <h1>Hello world!</h1>,
    document.getElementById("app")
);