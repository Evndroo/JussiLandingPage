import React, { useEffect, useState } from 'react';
import { SdStorage, Memory, Battery90 } from "@material-ui/icons" 
import api from "../../services/api";
import "./style.css";

function SolutionCard({ name, slug }) {

    const [isLoading, setIsLoading] = useState(true);
    const [phone, setPhone] = useState({});

    const loadingImage = (
        <div className="loading-image">

        </div>
    );

    useEffect(() => {
        const getPhoneData = async () => {
            const response = (await api.get(`/${slug}`)).data;
    
            const phone = response.data;

            let releaseMoment = phone.release_date;
            releaseMoment = releaseMoment[0].toLowerCase() + releaseMoment.slice(1, releaseMoment.length);
            phone.description = `${phone.brand} - ${phone.phone_name}, ${releaseMoment}`
    
            phone.storage = phone.storage.split(",")[0]

            const batteryDetail = phone.specifications.filter(item => item.title === "Battery")[0];
            phone.bateryType = (batteryDetail.specs.filter(item => item.key === "Type")[0]).val[0]

            const cpuDetail = phone.specifications.filter(item => item.title === "Platform")[0];
            phone.cpu = (cpuDetail.specs.filter(item => item.key === "CPU")[0]).val[0];



            setPhone(phone);
            setIsLoading(false)
        }

        getPhoneData();
    }, [slug]);


    return (
        <div className="phone-card">
            {
                isLoading ? loadingImage : <img src={phone.thumbnail} alt={name} />
            }
            <h4>{name}</h4>
            {
                !isLoading ?
                    <div className="phone-details">
                        <p className="phone-description">{phone.description}</p>
                        
                        <div className="phone-data">
                            <SdStorage/>
                            <p>{phone.storage}</p>
                        </div>
                        <div className="phone-data">
                            <Memory/>
                            <p>{phone.cpu}</p>
                        </div>
                        <div className="phone-data">
                            <Battery90/>
                            <p>{phone.bateryType}</p>
                        </div>
                    </div> :
                    <div className="empty-data"></div>
            }

            <button className="see-solution">Ver solução</button>
        </div>
    );
}

export default SolutionCard;