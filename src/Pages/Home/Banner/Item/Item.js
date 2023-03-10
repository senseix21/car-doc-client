import React from 'react';


const Item = ({ slide }) => {
    console.log(slide)
    const { image, prev, next, id } = slide;


    return (
        <div id={`slide1${id}`} className="carousel-item  w-full relative ">
            <div className="hero lg:min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-left">
                    <div className="text-neutral-content lg:mx-10">
                        <h1 className="mb-10 text-5xl font-bold ">
                            Affordable <br />
                            Price for Car <br />
                            Servicing</h1>
                        <p className="mb-10 lg:w-1/2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className='btn btn-primary mr-3'> Discover More</button>
                        <button className='btn btn-outline btn-primary'> Latest Works</button>

                    </div>
                </div>
            </div>

            {/* <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div> */}
        </div>

    );
};

export default Item;