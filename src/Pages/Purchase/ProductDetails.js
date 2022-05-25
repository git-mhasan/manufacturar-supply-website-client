import React from 'react';

const ProductDetails = ({ productId }) => {
    return (
        <div>
            Product ID: {productId}
            {/* <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='p-10 border-b-2 lg:border-r-2 lg:border-b-0 basis-2/6'><img src={product.img} alt="Album" /></figure>
                <div className="card-body basis-4/6">
                    <h2 className="card-title font-bold text-2xl">{product.name}</h2>
                    <p className='text-lg'>Specification: {product.desc}</p>
                    <p className='text-lg'>Minimum Order: {product.minOrder} pcs</p>
                    <p className='text-lg'>Available: {product.available} pcs</p>
                    <p className='text-lg'>Unit Price: {product.unitPrice} Tk.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ProductDetails;