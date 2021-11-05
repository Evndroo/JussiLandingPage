import React, { useState } from 'react';
import {CheckCircle} from "@material-ui/icons"
import "./style.css";

function Contact() {

    const [email, setEmail] = useState("");
    const [sended, setSended] = useState(false);

    const signEmail = () => {
        if(!email || email.length === 0){

        }
        //TODO: Chamar método de adicionar e-mail a newsletter
        setEmail("")
        setSended(true)
    };

    const sendedMessage = (
        <div data-testid="succes-message" className="sucess-on-send">
            <CheckCircle />
            <span>Enviado com sucesso!</span>
        </div>
    );

    return ( 
        <section className="contact">
            <h3> receba novidades da nossa área de produtos digitais.</h3>
            <div>
                <div className="newsletter-form">
                    <input 
                        placeholder="Digite seu e-mail" 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <button data-testid="btnSend" onClick={signEmail}>Cadastrar</button>
                </div>
                {sended ? sendedMessage : null}
            </div>
        </section>
    );
}

export default Contact;