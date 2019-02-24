import React, { Component } from 'react';

export default class Account extends Component {
	constructor(props) {
		super(props);
		this.onLogout = this.onLogout.bind(this);
	}

	async onLogout(e)  {
		e.preventDefault();
		try {
			await this.props.logOutUser();
		}catch (error) {
			console.log(`Error: ${error}`);
		}
	}

	render() {
		return (
			<div className="right-container__account-page">
				<div className="account-page__text-block">
					<h1>Добро пожаловать!</h1>
					<p>Данный сервирс находится на этапе разработки.</p>
				</div>	
				<button onClick={this.onLogout} type="submit" className="account-page__logout-btn">Выйти</button>
			</div>
		)
	}
}
