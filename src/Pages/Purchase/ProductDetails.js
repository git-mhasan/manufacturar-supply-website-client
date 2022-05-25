import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Spinner from '../../Shared/Spinner';
import url from '../../Shared/Utils/ServerUrl';

const ProductDetails = ({ productId }) => {

    const [user, loading, error] = useAuthState(auth);

    const { data: product, isLoading } = useQuery(['productById', productId], () => fetch(`${url}product/${productId}`)
        .then(res => res.json()))

    if (isLoading || loading) {
        return <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl my-14 text-black'>Please Wait ...</h2>
            <Spinner></Spinner>
        </div>
    }
    return (
        <div className='my-5 md:my-8 lg:my-10'>
            {
                productId ?
                    <div className="card lg:card-side bg-base-100 shadow-xl border-t">
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
                    </div>
                    :
                    <div className="card bg-base-100 shadow-xl border-t h-[300px] items-center justify-center">
                        <h2 className="card-title font-bold text-2xl">Please Select an Item to proceed checkout.</h2>
                    </div>
            }
        </div>
    );
};

export default ProductDetails;