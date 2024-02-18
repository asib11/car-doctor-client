import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";


const Services = () => {
    const [asc, setAsc] = useState(true)
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://car-doctor-server-blush-six.vercel.app/services?sort=${asc? 'asc': 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [asc])
    return (
        <div>
            <div className="text-center space-y-4 my-10">
                <h3 className="text-3xl font-semibold text-[#FF3811]">Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                <button className="btn btn-secondary" onClick={()=> setAsc(!asc)}>
                    {
                        asc? "price: low to high": "price: high to low"
                    }
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>

    );
};

export default Services;