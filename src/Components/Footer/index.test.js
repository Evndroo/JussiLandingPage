import React from 'react';
import { render, screen } from "@testing-library/react"
import Footer from "./index"

describe("Links no footer", () => {
    const linksList = {
        instagramLink: "https://www.instagram.com/jussi/?hl=pt",
        linkedinLink: "https://www.linkedin.com/company/agencia-jussi/?originalSubdomain=br",
        facebookLink: "https://www.facebook.com/agencia.jussi/"
    };

    it("Logo do instagram deve ter um link para a página da Jüssi no instagram", async () => {
        render(<Footer/>);
        const currentTestId = "instagramLink";

        const link = await screen.findByTestId(currentTestId);

        expect(link).toHaveAttribute("href", linksList[currentTestId]);
    });

    it("Logo do facebook deve ter um link para a página da Jüssi no facebook", async () => {
        render(<Footer/>);
        const currentTestId = "facebookLink";

        const link = await screen.findByTestId(currentTestId);

        expect(link).toHaveAttribute("href", linksList[currentTestId]);
    });

    it("Logo do LinkedIn deve ter um link para a página da Jüssi no LinkedIn", async () => {
        render(<Footer/>);
        const currentTestId = "linkedinLink";

        const link = await screen.findByTestId(currentTestId);

        expect(link).toHaveAttribute("href", linksList[currentTestId]);
    });
})