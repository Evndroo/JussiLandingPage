import React from 'react';
import "./style.css"

function PromotionCard({src, alt, protionText}) {
    return (
        <div className="promotion-card">
            <img data-testid="promotion-card-image" src={src} alt={alt} />
            <button data-testid="promotion-card-button" >{protionText}</button>
        </div>
    );
}

export default PromotionCard;