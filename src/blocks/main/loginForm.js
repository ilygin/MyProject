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
		await this.setState({message: ""});
		let email = document.querySelector(".emailInput").value;
		let password = document.querySelector(".passwordInput").value;
		try {
			let data = await this.props.signUpUser(email, password);
			data === "" ? this.setState({message: ""}) : this.setState({message: data});
		} catch (e) {
			console.log("Error: ", e + "");
		}
		document.querySelector(".passwordInput").value = "";
	}

	async onLogInUserClick(e)  {
		e.preventDefault();
		await this.setState({message: ""});
		let email = document.querySelector(".emailInput").value;
		let password = document.querySelector(".passwordInput").value;
		try {
			let data = await this.props.logInUser(email, password);
			data === "" ? this.setState({message: ""}) : this.setState({message: data});
			
		} catch (e) {
			console.log("Error: ", e + "");
		}
		document.querySelector(".passwordInput").value = "";
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

					<div className="login-form__button-groups">
						<button className="button-groups__login" onClick={this.onLogInUserClick} type="submit">Войти</button>
						<button className="button-groups__signup" onClick={this.onSignUpClick} type="button">Я новичок</button>
						<div className="button-groups__message">{this.state.message}</div>
					</div>
				</div>
			)
		}else {
			 return <div />
		}
	}
}

export default LoginForm;

