import React from 'react';
import PromotionCard from '../PromotionCard';
import "./style.css"

import fridgeImage from "../../assets/products/geladeira.png";
import mixerImage from "../../assets/products/batedeira.png";
import whiskyImage from "../../assets/products/whisky.png";

function CallToAction() {
    return (
        <section className="cta">
            <div className="cta-content">
                <h1>Criamos lojas que vendem mais.</h1>
                <p>A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
                <button>Veja nossas soluções</button>
            </div>
            <div className="cta-products">
                <PromotionCard 
                    src={fridgeImage} 
                    alt="Imagem de uma geladeira na promoção" 
                    protionText="Mais detalhes"
                />
                <PromotionCard 
                    src={mixerImage} 
                    alt="Imagem de uma batedeira na promoção" 
                    protionText="Comprar em 12x"
                />
                <PromotionCard 
                    src={whiskyImage} 
                    alt="Imagem de um whisky na promoção" 
                    protionText="Adicionar à sacola"
                />
            </div>
        </section>
    );
}

export default CallToAction;