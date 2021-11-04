import React from 'react';
import officePicture from "../../assets/jussi-office.png";
import "./style.css"

function About() {
    return ( 
        <section id="about-us">
            <div className="jussi-detail">
                <h5>Olá, somos a Jüssi</h5>
                <p>
                    A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
                </p>
                <button className="btn-default">Conheça a Jüssi</button>
            </div>
            <div className="image-container">
                <img src={officePicture} alt="Foto do escritório da Jüssi" />
            </div>
        </section>
    );
}

export default About;