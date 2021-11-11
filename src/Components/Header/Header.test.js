import React from 'react';
import { render, screen } from "@testing-library/react"
import Header from "./index"


describe("O componente Header", () => {

    it("Deve possuir um botão de login", () =>{
        render(<Header/>)
        expect(screen.getByText("Login")).toBeInTheDocument();
    })

    
    it("Deve possuir um link para tela de soluções", () =>{
        render(<Header/>)

        const jussiServicesLinks = "#our-solutions";
        const link = screen.getByTestId("solutionsLink");

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", jussiServicesLinks)
    })

    it("Deve possuir um link para tela de detalhes", () =>{
        render(<Header/>)
    
        const aboutJussiLink = "#about-us";
        const link = screen.getByTestId("aboutLink");

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", aboutJussiLink)
    })
})