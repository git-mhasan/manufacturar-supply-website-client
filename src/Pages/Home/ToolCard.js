import React from 'react';

const ToolCard = ({ product }) => {
    // const product = {
    //     _id: "626f0c6172da28bca4c041ef",
    //     name: "Level Machine",
    //     img: "https://atcshop.com.bd/wp-content/uploads/2018/10/Sokkia-Auto-Level-B40-B30-B20.jpg",
    //     desc: "Rapid,Accurate and Stable Automatic Compensation. Ultra-Short 20cm(7.9 in.) Focusing. Clampless, Endless Fine Horizontal Adjustments. 32x , 28x and 24x Magnifications.",
    //     minOrder: "5",
    //     available: "150",
    //     unitPrice: "55000",
    //     quantity: "0"
    // }
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='p-10 border-b-2 lg:border-r-2 lg:border-b-0 basis-2/6'><img src={product.img} alt="Album" /></figure>
                <div className="card-body basis-4/6">
                    <h2 className="card-title font-bold text-3xl">{product.name}</h2>
                    <p className='text-lg'>Specification: {product.desc}</p>
                    <p className='text-lg'>Minimum Order: {product.minOrder} pcs</p>
                    <p className='text-lg'>Available: {product.available} pcs</p>
                    <p className='text-lg'>Unit Price: {product.unitPrice} Tk.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;