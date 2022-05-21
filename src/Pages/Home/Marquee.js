import React from 'react';

const Marquee = () => {

    const marqeeItems = <>
        <span class="text-4xl mx-4"><img src="https://www.iwmbd.org/images/iwm.png" style={{ width: "100px", height: "75px" }} alt="" /></span>
        <span class="text-4xl mx-4"><img src="https://www.cegisbd.com/img/CEGIS_Logo_New.png" style={{ width: "200px", height: "75px" }} alt="" /></span>
        <span class="text-4xl mx-4"><img src="https://www.cegisbd.com/images/logos/WARPO.png" style={{ width: "150px", height: "75px" }} alt="" /></span>
        <span class="text-4xl mx-4"><img src="https://www.cegisbd.com/images/logos/DESCO.png" style={{ width: "200px", height: "75px" }} alt="" /></span>
        <span class="text-4xl mx-4"><img src="https://www.cegisbd.com/images/logos/DOE.png" style={{ width: "200px", height: "75px" }} alt="" /></span>
    </>

    return (
        <div class="relative flex overflow-x-hidden">
            <div class="py-12 animate-marquee flex">
                {marqeeItems}
            </div>

            <div class="absolute top-0 py-12 animate-marquee2 flex">
                {marqeeItems}
            </div>
        </div>
    );
};

export default Marquee;