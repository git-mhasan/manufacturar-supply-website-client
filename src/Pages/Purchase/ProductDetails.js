import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Spinner from '../../Shared/Spinner';
import url from '../../Shared/Utils/ServerUrl';

const ProductDetails = ({ productId }) => {

    const [user, loading, error] = useAuthState(auth);
    const [orderQuantity, setOrderQuantity] = useState(0);

    const handleQuantityChange = event => {
        setOrderQuantity(event.target.value);
        console.log(orderQuantity);
        // console.log(event.target.value);
    }
    useEffect(() => {

    }, [])

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
                            <form >
                                <h2 className="card-title font-bold text-2xl mb-4">{product.name}</h2>
                                {/* <p className='text-lg'>Specification: {product.desc}</p> */}

                                <p className='mb-2'> <span className='font-bold text-lg inline-block w-[80px]'>Name:</span> <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs text-lg" /></p>
                                <p className='mb-2'> <span className='font-bold text-lg inline-block w-[80px]'>Email: </span> <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs text-lg" /></p>
                                <p className='mb-2'> <span className='font-bold text-lg inline-block w-[80px]'>Address: </span> <input type="text" name="address" required className="input input-bordered w-full max-w-xs text-lg" /></p>
                                <p className='mb-2'> <span className='font-bold text-lg inline-block w-[80px]'>Phone: </span> <input type="text" name="phone" required className="input input-bordered w-full max-w-xs text-lg" /></p>

                                <p className='mb-2'> <span className='font-bold text-lg inline-block w-[140px]'>Unit Price: </span> <input type="number" name="price" value={product.unitPrice} disabled required className="input input-bordered w-1/4 max-w-xs text-lg" /><span className='text-sm '> Tk. (per unit price)</span></p>

                                <p className='mb-2'> <span className='font-bold text-lg inline-block w-[140px]'>Available: </span> <input type="number" name="available" value={product.unitPrice} disabled required className="input input-bordered w-1/4 max-w-xs text-lg" /><span className='text-sm '> Tk. (per unit price)</span></p>

                                <p className='mb-2'> <span className='font-bold text-lg inline-block w-[140px]'>Order Quantity: </span> <input type="number" name="order" osOnChangeTimerDelay={200} onChange={handleQuantityChange} value={product.minOrder} required className="input input-bordered w-1/4 max-w-xs text-lg" /><span className='text-sm '> (Min. Order: {product.minOrder} pcs)</span></p>

                                <p className='text-lg'>Available: {product.available} pcs</p>
                                <p className='text-lg'>Unit Price: {product.unitPrice} Tk.</p>
                                <div className="card-actions justify-end">
                                    { }
                                    <input type="submit" value="Buy Now" disabled className="btn btn-primary max-w-xs" />

                                </div>
                            </form>

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