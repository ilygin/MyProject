import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: '',
            redirectToPreviousRoute: false
        };
        this.onSignUpClick = this.onSignUpClick.bind(this);
        this.onLogInUserClick = this.onLogInUserClick.bind(this);
    }

    componentWillMount() {
        this.props.checkAuthorizationUser();
    }

    async onSignUpClick(e)  {
        e.preventDefault();
        let email = document.querySelector(".emailInput").value;
        let password = document.querySelector(".passwordInput").value;
        try {
            await this.props.signUpUser(email, password);
        } catch (e) {
            console.log("Error: ", e + "");
        }
    }

    async onLogInUserClick(e)  {
        e.preventDefault();
        let email = document.querySelector(".emailInput").value;
        let password = document.querySelector(".passwordInput").value;
        try {
            await this.props.logInUser(email, password);

        } catch (e) {
            console.log("Error: ", e + "");
        }
    }

    render() {
        if (this.props.loginUser.isAuth) {
            return <Redirect to={"/account"} />
        }else if (!this.props.loginUser.isFetching && !this.props.loginUser.isAuth && this.props.loginUser.isAuth !== null) {
            return (
                <div className="right-container__login-form">
                        <div className="login-form__inputs-group">
                            <input type="email" className="inputs-group__item emailInput" aria-describedby="emailHelp"
                                   placeholder="Почта"/>
                            <input type="password" className="inputs-group__item passwordInput"
                                   placeholder="Пароль"/>
                        </div>
                        {this.props.newUser.status === "error" ? <div><h3>{this.props.newUser.msg}</h3></div> :
                            (this.props.loginUser.statusLogin === "error" || this.props.loginUser.statusLogin === "failure")?
                                <div><h3>{this.props.loginUser.msgLogin}</h3></div> :
                                    this.props.newUser.status === "success" ? <div><h3>Поздравляю с успешной регистрацией</h3></div> : (false)}
                        <div className="login-form__button-groups">
                            <button className="button-groups__login" onClick={this.onLogInUserClick} type="submit">Войти</button>
                            <button className="button-groups__signup" onClick={this.onSignUpClick} type="button">Я новичок</button>
                        </div>
                </div>
            )
        }else {
             return <div />
        }
    }
}

export default LoginForm;

