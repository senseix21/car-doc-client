import React from 'react';
import { FaCalendarAlt, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='max-w-screen-xl my-10'>
            <div className="grid lg:grid-cols-3 bg-gray-600 lg:bg-black lg:shadow-md rounded-md  ">
                <div className=" flex p-10 ">
                    <div className=""><FaCalendarAlt className='text-6xl font-bold text-primary px-2' /></div>
                    <div>
                        <div className=" font-normal text-sm text-white">We are open monday-friday</div>
                        <div className=" text-xl font-bold text-primary">7:00 am - 9:00 pm</div>
                    </div>
                </div>
                <div className=" flex p-10 ">
                    <div className="-title"><FaPhoneAlt className='text-6xl font-bold text-primary px-2' /></div>
                    <div>
                        <div className=" font-normal text-sm text-white">Have a question?</div>
                        <div className=" text-xl font-bold text-primary">+2546 251 2658</div>
                    </div>
                </div>
                <div className=" flex p-10 ">
                    <div className=""><FaMapMarkedAlt className='text-6xl font-bold text-primary px-2' /></div>
                    <div>
                        <div className=" font-normal text-sm text-white">Need services? Our Address</div>
                        <div className=" text-xl font-bold text-primary">Liza Street, New York</div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Contact;