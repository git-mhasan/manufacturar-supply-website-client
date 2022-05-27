import React from 'react';

const ProductCard = ({ product, setProductId, setPrice, setMinimumOrder }) => {

    return (
        <div>
            <div className="card w-[150px] h-[250px] bg-base-100 shadow-xl border">
                <figure className="px-4 pt-4">
                    <img src={product.img} alt="" className="rounded-xl w-[140px] h-[100px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-sm">{product.name}</h2>
                    {/* <p>{product.desc.length > 20 ? product.desc.slice(0, 20) + "..." : product.desc}</p> */}
                    <div className="card-actions">
                        <button onClick={() => {
                            setProductId(product._id);
                            setPrice(parseInt(product.minOrder) * parseInt(product.unitPrice))
                            setMinimumOrder(product.minOrder)
                        }} className="btn btn-xs btn-primary">purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;