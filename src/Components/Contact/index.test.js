import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react"
import Contact from "./index"

describe("Quando o form for preenchido e o botão for clicado", () => {
    it("Uma mensagem de sucesso deve aparecer", async () => {
        render(<Contact />);

        const txtEmail = await screen.findByPlaceholderText("Digite seu e-mail");
        const btnSend = await screen.findByTestId("btnSend");

        fireEvent.change(txtEmail, { target: { value: "evandro.slipjr@gmail.com" } });
        fireEvent.click(btnSend)

        expect(await screen.findByTestId("succes-message")).toBeInTheDocument()

    })

    it.todo("O endereo de e-mail deve ser enviado para a api de newsletter")
})