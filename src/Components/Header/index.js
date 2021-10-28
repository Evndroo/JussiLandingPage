import React from 'react';
import logo from '../../assets/logo.svg';
import { ShoppingCart, Search }  from "@material-ui/icons"
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
            <div className="navmenu">
                <div className="navbar-item search-bar">
                    <input type="text" name="search" placeholder="Buscar" />
                    <Search/>
                </div>
                <a className="navbar-item" href="/">Login</a>
                <ShoppingCart/>
            </div>
        </header>
    );
}

export default Header;