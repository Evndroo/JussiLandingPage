import React from 'react';
import { render, screen } from "@testing-library/react"
import PromotionCard from "./index"

import mixerImg from "../../assets/products/batedeira.png"


describe("O card deve", () => {
    it("Mostrar texto passdo por parâmetro", () => {
        render(<PromotionCard protionText="Mais detalhes"/>)
        expect(screen.getByText("Mais detalhes")).toBeInTheDocument()
    })
    

    it("Mostrar imagem passada por parâmetro", ()=>{
        render(<PromotionCard protionText="Mais detalhes" src={mixerImg}/>)

        /**
         * @type {HTMLImageElement}
         */
        const image = document.querySelector("[data-testid=promotion-card-image]");
        const src = image.src;
        const extension = src.slice(src.lastIndexOf("."), src.length + 1);
        

        expect(src).toContain("batedeira");
        expect(extension).toBe(".png")

    })
    it("Imagem passada por parâmetro deve póssuir atributo alt", () => {
        const alt = "Imagem de uma batedeira na promoção"
        
        render(<PromotionCard 
            protionText="Mais detalhes" 
            src={mixerImg}
            alt={alt}/>
        );

        const image = screen.getByTestId("promotion-card-image");

        expect(image).toHaveAttribute("alt", alt);

    })
});