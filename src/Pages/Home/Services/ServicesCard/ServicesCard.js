import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className='m-5' >
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" className='lg:h-48' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions flex justify-between">
                        <h4 className='font-bold text-primary'>Price: ${price}</h4>
                        <Link to={'/'}><FaArrowRight className='text-primary' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;