import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: ''
        };
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    async onLoginClick(e)  {
        e.preventDefault();
        let email = document.querySelector(".emailInput").value;
        let password = document.querySelector(".passwordInput").value;
        try {
            // await this.props.logIn(email, password);
            await this.props.logIn(email, password);
        } catch (e) {
            console.log("Error: ", e + "");
        }
    }

    render() {
        return (
            <div className=".d-flex col-sm">
                <form method="post" className="registrationForm">
                    <fieldset>
                        <div className="form-group">
                            <input type="email" className="form-control mb-2 emailInput" aria-describedby="emailHelp"
                                   placeholder="Почта"/>
                            <input type="password" className="form-control mt-2 passwordInput"
                                   placeholder="Пароль" />
                        </div>
                        <button onClick={this.onLoginClick} type="submit" className="btn btn-primary">Войти</button>
                        <button type="button" className="btn btn-outline-primary ml-1">Я новичок</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default LoginForm;