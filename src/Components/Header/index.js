import React from 'react';
import logo from '../../assets/logo.svg';
import "./style.css"

function Header() {
    return (
        <header>
            <ul className="navbar">
                <li>
                    <div className="logo">
                        <img src={logo} alt="Jüssi Logo" />
                        <p>
                            The Business<span>*</span> Agency
                        </p>
                    </div>
                </li>
                <li className="navbar-link">
                    <a href="/">Nossas Soluções</a>
                </li>
                <li className="navbar-link">
                    <a href="/">Conheça a Jüssi</a>
                </li>
            </ul>

        </header>
    );
}

export default Header;