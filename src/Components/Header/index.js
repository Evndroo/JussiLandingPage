import React from 'react';
import logo from '../../assets/logo.svg';
import { ShoppingCart, Search }  from "@material-ui/icons"
import "./style.css"

function Header() {
    const jussiServicesLinks = "https://jussi.com.br/services.html";
    const aboutJussiLink = "https://jussi.com.br/about.html";

    return (
        <header>
            <nav className="navbar">
                {/*TODO: Adicionar onClick para redirecionar para Home */}
                <div className="navbar-item logo">
                    <img src={logo} alt="Jüssi Logo" />
                    <p>
                        The Business<span>*</span> Agency
                    </p>
                </div>
                <a className="navbar-item" href={jussiServicesLinks} data-testid="solutionsLink">Nossas Soluções</a>
                <a className="navbar-item" href={aboutJussiLink} data-testid="aboutLink">Conheça a Jüssi</a>
            </nav>
            <div className="navmenu">
                <div className="navbar-item search-bar">
                    <input type="text" name="search" placeholder="Buscar" />
                    {/*TODO: Adicionar onClick para redirecionar para tela de busca */}
                    <Search className="clickable-logo"/>
                </div>
                <a className="navbar-item" href="/">Login</a>
                {/*TODO: Adicionar onClick para redirecionar para tela de carrinho */}
                <ShoppingCart className="clickable-logo" />
            </div>
        </header>
    );
}

export default Header;