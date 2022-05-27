import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AllProducts from './AllProducts';
import ProductDetails from './ProductDetails';



const Purchase = () => {

    const [productId, setProductId] = useState('');
    const [price, setPrice] = useState(0);
    const [minimumOrder, setMinimumOrder] = useState(0);

    const urlParam = useParams();
    useEffect(() => {
        if (urlParam.id === 'undefined') {
            setProductId('')
        }
        urlParam ? setProductId(urlParam.id) : setProductId('');
    }, [urlParam])


    return (
        <div>
            <AllProducts setProductId={setProductId}
                setPrice={setPrice}
                setMinimumOrder={setMinimumOrder}>
            </AllProducts>

            <ProductDetails
                productId={productId}
                price={price}
                setPrice={setPrice}
                minimumOrder={minimumOrder}
                setMinimumOrder={setMinimumOrder}
            ></ProductDetails>
        </div>
    );
};

export default Purchase;