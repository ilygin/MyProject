import React, { Component } from 'react';

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }

    async onLogout(e)  {
        e.preventDefault();
        try {
           await fetch('http://localhost:3000/auth/logout');
        }catch (error) {
            console.log(`Error: ${error}`);
        }
    }

    render() {
        return (
            <div className=".d-flex col-sm">
                <h1>Hello User!</h1>
                <button onClick={this.onLogout} type="submit" className="btn btn-primary">Выйти</button>
            </div>
        )
    }
}
