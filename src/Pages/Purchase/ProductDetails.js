import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../../Shared/Spinner';
import url from '../../Shared/Utils/ServerUrl';

const ProductDetails = ({ productId, price, setPrice, minimumOrder }) => {

    const [user, loading, error] = useAuthState(auth);


    const { register, handleSubmit, formState: { errors }, } = useForm();

    const { data: product, isLoading, refetch } = useQuery(['productById', productId], () => fetch(`${url}product/${productId}`)
        .then(res => res.json()))

    // useEffect(() => {
    //     setMinimumOrder(product?.minOrder);
    // }, [product])


    if (isLoading || loading) {
        return <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl my-14 text-black'>Please Wait ...</h2>
            <Spinner></Spinner>
        </div>
    }

    const handleOrder = event => {
        setPrice(parseInt(event.target.value) * parseInt(product.unitPrice))
    }

    const onSubmit = data => {

        const available = parseInt(product.available) - parseInt(data.order);
        const totalPrice = parseInt(data.order) * parseInt(product.unitPrice)
        const order = {
            productId: product?._id,
            productName: product.name,
            userName: user?.displayName,
            userEmail: user.email,
            orderQuantity: data.order,
            address: data.address,
            phone: data.phone,
            totalPrice: totalPrice,
            payment: false

        }

        // order placing
        fetch(`${url}order`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Order placed Successfully.`)
                }
                else {
                    toast.error(`Order cannot be processed.`)
                }
                // refetch();
            });

        // update product after order.
        fetch(`${url}product/${product?._id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ available })
        })
            .then(res => res.json())
            .then(data => {
                refetch();
            });

    }

    return (
        <div className='my-5 md:my-8 lg:my-10'>
            {
                Object.keys(product).length === 0 ?
                    <div className="card bg-base-100 shadow-xl border-t h-[300px] items-center justify-center">
                        <h2 className="card-title font-bold text-2xl">Please Select an Item to proceed checkout.</h2>
                    </div>
                    :
                    <div className="card lg:card-side bg-base-100 shadow-xl border-t">
                        <figure className='p-10 border-b-2 lg:border-r-2 lg:border-b-0 basis-2/6'><img src={product.img} alt="Album" /></figure>
                        <div className="card-body basis-4/6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h2 className="card-title font-bold text-2xl mb-4">{product.name}</h2>
                                {/* <p className='text-lg'>Specification: {product.desc}</p> */}

                                <p className='mb-2'> <span className='font-bold text-lg inline-block w-[80px]'>Name:</span> <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs text-lg" /></p>
                                <p className='mb-2'> <span className='font-bold text-lg inline-block w-[80px]'>Email: </span> <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs text-lg" /></p>
                                <p className='mb-2'> <span className='font-bold text-lg inline-block w-[80px]'>Address: </span>
                                    <input type="text" name="address" required className="input input-bordered w-full max-w-xs text-lg"
                                        {...register("address")}

                                    /></p>

                                <p className='mb-2'> <span className='font-bold text-lg inline-block w-[80px]'>Phone: </span>
                                    <input type="text" name="phone" required className="input input-bordered w-full max-w-xs text-lg"
                                        {...register("phone")}
                                    /></p>

                                <p className='mb-2'> <span className='font-bold text-lg inline-block w-[140px]'>Unit Price: </span> <input type="number" name="price" value={product.unitPrice} disabled required className="input input-bordered w-1/4 max-w-xs text-lg"

                                /><span className='text-sm '> Tk. (per unit price)</span></p>

                                <p className='mb-2'> <span className='font-bold text-lg inline-block w-[140px]'>Available: </span>
                                    <input type="number" name="available" value={product.available} disabled required className="input input-bordered w-1/4 max-w-xs text-lg"
                                    /><span className='text-sm '> pcs available</span></p>

                                <p className='mb-2'> <span className='font-bold text-lg inline-block w-[140px]'>Order Quantity: </span> <input type="number" name="order" onChangeCapture={handleOrder} defaultValue={minimumOrder} className="input input-bordered w-1/4 max-w-xs text-lg"
                                    {...register("order", {
                                        required: {
                                            value: true,
                                            message: '* Order Quantity is required.'
                                        },
                                        min: {
                                            value: product.minOrder,
                                            message: '* Order Quantity must be greater than minimum order quantity.'
                                        },
                                        max: {
                                            value: product.available,
                                            message: '* Order Quantity must be less than available quantity.'
                                        }
                                    })}
                                /><span className='text-sm '> (Min. Order: {product.minOrder} pcs)</span></p>

                                <label className="label">
                                    {errors.order?.type === 'required' && <span className="label-text-alt text-sm text-red-500">{errors.order.message}</span>}
                                    {errors.order?.type === 'min' && <span className="label-text-alt text-sm text-red-500">{errors.order.message}</span>}
                                    {errors.order?.type === 'max' && <span className="label-text-alt text-sm text-red-500">{errors.order.message}</span>}
                                </label>

                                <p className='mb-2'> <span className='font-bold text-lg inline-block w-[140px]'>Total Price: </span> <input type="number" name="price" value={price} disabled required className="input input-bordered w-1/4 max-w-xs text-lg"
                                /><span className='text-sm '> Tk. </span></p>

                                <div className="card-actions justify-end">
                                    <input type="submit" value="Confirm Order" className="btn btn-primary max-w-xs" />

                                </div>
                            </form>

                        </div>
                    </div>
            }
        </div>
    );
};

export default ProductDetails;