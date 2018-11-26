import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: ''
        };
        this.onSignUpClick = this.onSignUpClick.bind(this);
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
                        {this.props.newUser.status === "error" ? <div><h3>{this.props.newUser.msg}</h3></div> :
                            this.props.newUser.status === "success" ? <div><h3>Поздравляю с успешной регистрацией</h3></div> : (false)}
                        <button  type="submit" className="btn btn-primary">Войти</button>
                        <button onClick={this.onSignUpClick} type="button" className="btn btn-outline-primary ml-1">Я новичок</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default LoginForm;