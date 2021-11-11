import React, { useEffect, useState } from 'react';
import SolutionCard from "../SolutionCard"
import api from '../../services/api';
import "./style.css"

function OurSolutions() {
    const [phones, setPhones] = useState([]);

    const getPhones = async () => {
        const response = (await api.get("/top-by-interest")).data
        
        setPhones(response.data.phones.slice(0,4))
    }

    useEffect(() => {
        getPhones()
    }, [])

    return ( 
        <section id="our-solutions">
            <h4 className="solution-title"><span>{"//"}</span>Nossas Soluções</h4>
            <div className="solution-list">
                {
                    phones.map((phone) => (
                        <SolutionCard 
                            key={phone.slug}
                            slug={phone.slug}
                            name={phone.phone_name}
                        />
                    ))
                }
            </div>
        </section>
     );
}

export default OurSolutions;