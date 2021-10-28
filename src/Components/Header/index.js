import React from 'react';
import logo from '../../assets/logo.svg';
import "./style.css"

function Header() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-item logo">
                    <img src={logo} alt="Jüssi Logo" />
                    <p>
                        The Business<span>*</span> Agency
                    </p>
                </div>
                <a className="navbar-item" href="/">Nossas Soluções</a>
                <a className="navbar-item" href="/">Conheça a Jüssi</a>
            </nav>

        </header>
    );
}

export default Header;