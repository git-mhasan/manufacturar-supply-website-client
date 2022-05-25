import React, { useState } from 'react';
import AllProducts from './AllProducts';
import ProductDetails from './ProductDetails';



const Purchase = () => {

    const [productId, setProductId] = useState('');
    console.log(productId);
    return (
        <div>
            <AllProducts setProductId={setProductId}></AllProducts>
            <ProductDetails productId={productId}></ProductDetails>
        </div>
    );
};

export default Purchase;