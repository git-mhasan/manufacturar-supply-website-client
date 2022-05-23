import React from 'react';

const Marquee = () => {

    const marqeeItems = <>
        <span className="text-4xl mx-1 md:mx-4 lg:mx-8"><img src="https://www.iwmbd.org/images/iwm.png" style={{ width: "180px", height: "75px" }} alt="" /></span>
        <span className="text-4xl mx-1 md:mx-4 lg:mx-8"><img src="https://www.cegisbd.com/img/CEGIS_Logo_New.png" style={{ width: "300px", height: "75px" }} alt="" /></span>
        <span className="text-4xl mx-1 md:mx-4 lg:mx-8"><img src="https://www.cegisbd.com/images/logos/WARPO.png" style={{ width: "150px", height: "75px" }} alt="" /></span>
        <span className="text-4xl mx-1 md:mx-4 lg:mx-8"><img src="https://www.cegisbd.com/images/logos/DESCO.png" style={{ width: "200px", height: "75px" }} alt="" /></span>
        <span className="text-4xl mx-1 md:mx-4 lg:mx-8"><img src="https://www.cegisbd.com/images/logos/DOE.png" style={{ width: "200px", height: "75px" }} alt="" /></span>
    </>

    return (
        <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl mt-14 text-accent'>Our Partner</h2>
            <div className="relative flex overflow-x-hidden">
                <div className="py-12 animate-marquee flex">
                    {marqeeItems}
                </div>

                <div className="absolute top-0 py-12 animate-marquee2 flex">
                    {marqeeItems}
                </div>
            </div>
        </div>
    );
};

export default Marquee;