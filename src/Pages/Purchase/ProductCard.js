import React from 'react';

const ProductCard = ({ product }) => {

    return (
        <div>
            <div className="card lg:w-lg bg-base-100 shadow-xl">
                <figure className="px-4 pt-4">
                    <img src={product.img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.desc.length > 15 ? product.desc.slice(0, 15) + "..." : product.desc}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;