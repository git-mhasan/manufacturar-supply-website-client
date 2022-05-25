import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AllProducts from './AllProducts';
import ProductDetails from './ProductDetails';



const Purchase = () => {

    const [productId, setProductId] = useState('');
    const urlParam = useParams();
    useEffect(() => {
        if (urlParam.id === 'undefined') {
            setProductId('')
        }
        urlParam ? setProductId(urlParam.id) : setProductId('');
    }, [urlParam])

    console.log(urlParam.id);

    return (
        <div>
            <AllProducts setProductId={setProductId}></AllProducts>
            <ProductDetails productId={productId}></ProductDetails>
        </div>
    );
};

export default Purchase;