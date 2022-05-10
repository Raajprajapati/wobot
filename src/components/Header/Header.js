import React from 'react';
import logo from '../../img/wobot-logo.png';
import './header.css';

function Header() {
    return (
        <>
            <header>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </header>
        </>
    )
}

export default Header;