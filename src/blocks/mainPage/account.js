import React, { Component } from 'react';

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }

    async onLogout(e)  {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Hello User!</h1>
                <button onClick={this.onLogout} type="submit" className="btn btn-primary">Войти</button>
            </div>
        )
    }
}
