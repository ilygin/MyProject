import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        const titleCourse = "";
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <Link to='/' className="logo">WebLib</Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">{titleCourse} <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;