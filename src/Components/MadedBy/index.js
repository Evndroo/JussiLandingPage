import React from 'react';
import "./style.css"

function MadedBy() {

    const email = "comercial@jussi.com.br";
    const linkEmail = "mailto:" + email

    return ( 
        <section className="maded-by-jussi">
            <h2>Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.</h2>
            <span>Entre em contato</span>
            <address className="jussi-email"><a href={linkEmail}>{email}</a></address>
        </section> 
    );
}

export default MadedBy;