import React, { useState, useEffect } from 'react';
import ServicesCard from './ServicesCard/ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`services.json`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    console.log(services)

    return (
        <div>
            <div className='text-center'>
                <h3 className='text-md font-bold text-black'>Services</h3>
                <h3 className='text-3xl font-bold text-primary'>Our Service Area</h3>
                <p className='w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid lg:grid-cols-3 '>
                {
                    services.map(service =>
                        <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
            <div className='flex justify-center'>
                <button className='btn btn-outline btn-primary '>More Services</button>
            </div>
        </div>
    );
};

export default Services;