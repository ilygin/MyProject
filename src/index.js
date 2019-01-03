import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import mainPage from './containers/mainPage';
import newCourse from './containers/newCourse';
import {Provider} from "react-redux";
import configurateStore from './store/configurateStore';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const store = configurateStore();
     //пример из статьи
const ProtectRouter = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={mainPage}/>
                <Route path={'/new_course/:id/:typePage/:id'} component={newCourse}/>
                <ProtectRouter path='/protected' component={AccountPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("app")
);

`Привет. Есть роут / и компонент MainPage, а также роут "/account" с компонентом "AccountPage". На первом роуте авторизация, а второй я пытаюсь сделать защищенным. У меня есть на серверной стороне готовые запросы на авторизацию, регистрацию и выход с рабочей сессией, но вот поймал затык на клиентской стороне. Можно создать такой protected route в корневом компоненте(прикладываю скрин)? и если да, то как проверять авторизаацию(в любом другом компоненте я бы создал стэйт редьюсер и экшен, который менял бы флаг в зависимости от действия пользователя, или, если это первоначальная загрузка страницы, использовал бы componentDidMount )       `
