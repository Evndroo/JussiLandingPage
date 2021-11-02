import React from 'react';
import "./style.css"

import { ArrowRight }  from "@material-ui/icons"
import compraCertaLogo from "../../assets/cases/compra_certa.svg"
import consulLogo from "../../assets/cases/consul.svg"
import theBarLogo from "../../assets/cases/the_bar.png"


function MainStores() {
    const brastempLogo = "https://img.imageboss.me/cdn/http://bimg.visie.com.br/2018/07/logo-brastemp-orange.svg"


    return ( 
        <div className="main-stores">
            <p>Nossas principais lojas VTEX</p>
            <ArrowRight/>
            <a href="https://www.brastemp.com.br/">
                <img src={brastempLogo} alt="Logo da empresa Compra Certa"/>
            </a>
            <a href="https://www.compracerta.com.br/">
                <img src={compraCertaLogo} alt="Logo da empresa Compra Certa"/>
            </a>
            <a href="https://loja.consul.com.br/">
                <img src={consulLogo} alt="Logo da empresa Consul"/>
            </a>
            <a href="https://br.thebar.com/">
                <img src={theBarLogo} alt="Logo da empresa The bar"/>
            </a>
        </div> 
    );
}

export default MainStores;