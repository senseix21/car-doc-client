import React from 'react';
import about2 from '../../../assets/images/about_us/parts.jpg'
import about1 from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 my-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={about1} className="h-full lg:w-4/5 rounded-lg shadow-2xl  " alt='' />
                        <img src={about2} className=" absolute w-3/5 right-5 top-1/2 rounded-lg shadow-2xl " alt='' />
                    </div>
                    <div className='lg:w-1/2'>
                        <h3 className='text-md font-bold text-primary'>About Us</h3>
                        <h1 className="text-4xl font-bold">We are qualified <br />  & of experience <br /> in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <button className="btn btn-primary mt-5">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;