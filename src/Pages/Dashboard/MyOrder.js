import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../../Shared/Spinner';
import url from '../../Shared/Utils/ServerUrl';
import OrderTable from './OrderTable';

const MyOrder = () => {
    const [user, loading, errorUser] = useAuthState(auth);
    const { isLoading, error, data: orders, refetch } = useQuery('userOrders', () =>
        fetch(`${url}orders/${user?.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )

    if (loading || isLoading) {
        return <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl my-14 text-black'>Please Wait...</h2>
            <Spinner></Spinner>
        </div>
    }

    if (error || errorUser) {
        toast.error(error)
    }

    return (
        <div>
            <OrderTable orders={orders} refetch={refetch} ></OrderTable>
        </div>
    );
};

export default MyOrder;