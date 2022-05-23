import React from 'react';
import gMap from '../../images/gmap.png';

const OurLoaction = () => {
    return (
        <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl my-14 text-accent'>Our Location</h2>
            <img src={gMap} alt="" />
        </div>
    );
};

export default OurLoaction;