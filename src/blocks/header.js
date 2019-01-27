import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        const titleCourse = "";
        return (
            <header className="header-block">
                <div className="grid-width">
                    <Link to='/'>
                        <p className="header-block__logo">WebLib</p>
                    </Link>
                </div>
            </header>
        )
    }
}

export default Header;