import React from 'react';
import { LinkedIn, Facebook, Instagram } from "@material-ui/icons"
import footerLogo from "../../assets/footer-logo.png";
import "./style.css"

function Footer() {
    return (
        <footer>
            <img src={footerLogo} alt="Logo Awpp company" />
            <div className="social-medias">
                <a 
                    data-testid="facebookLink"
                    href="https://www.facebook.com/agencia.jussi/"
                >
                    <Facebook />
                </a>
                <a 
                    data-testid="instagramLink"
                    href="https://www.instagram.com/jussi/?hl=pt"
                >
                    <Instagram />
                </a>
                <a 
                    data-testid="linkedinLink"
                    href="https://www.linkedin.com/company/agencia-jussi/?originalSubdomain=br"
                >
                    <LinkedIn />
                </a>                
            </div>
        </footer>
    );
}

export default Footer;