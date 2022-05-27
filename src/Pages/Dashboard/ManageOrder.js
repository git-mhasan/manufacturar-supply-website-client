import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner';
import url from '../../Shared/Utils/ServerUrl';
import ManageOrderTable from './ManageOrderTable';

const ManageOrder = () => {
    const { isLoading, error, data: orders, refetch } = useQuery('allOrders', () =>
        fetch(`${url}orders`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )

    if (isLoading) {
        return <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl my-14 text-black'>Please Wait...</h2>
            <Spinner></Spinner>
        </div>
    }

    if (error) {
        toast.error(error)
    }

    return (
        <div>
            <ManageOrderTable
                orders={orders}
                refetch={refetch}
            ></ManageOrderTable>
        </div>
    );
};

export default ManageOrder;