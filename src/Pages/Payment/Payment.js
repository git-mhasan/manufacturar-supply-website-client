import React from 'react';
import { loadStripe } from '@stripe/stripe-js'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../../Shared/Spinner';
import url from '../../Shared/Utils/ServerUrl';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3ysAHjBtoU7GQcNWr7uV0kgFp9RrmKPYZUSVMlBt5wAX7KgO4wGhY31O578WoAuQiUu1F74PXOr4BNeQSblbdB0083BL9MlJ');

const Payment = () => {
    const { id } = useParams();
    const { isLoading, data: order } = useQuery(['orderByID', id], () =>
        fetch(`${url}order/${id}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        }).then(res => res.json())
    )

    if (isLoading) {
        return <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl my-14 text-accent'>Payment Processing...</h2>
            <Spinner></Spinner>
        </div>
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            <div class="card w-50 max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-lg font-bold">Order No #{order?._id.slice(order?._id.length - 5)}</h2>
                    <h2 class="card-title">Product Name: {order.productName}</h2>
                    <p class="text-lg font-bold">Order Quantity: {order?.orderQuantity} pcs <br />
                        Total Price: {order?.totalPrice} BDT</p>
                    <p class="text-md ">Billing Address: {order?.address} <br />
                        Phone No: {order?.phone}</p>
                    <h2 class="text-lg">Please pay ${parseFloat(order?.totalPrice / 85).toFixed(2)} to complete your order.</h2>

                </div>
            </div>
            <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 mt-5">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;