import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner';
import url from '../../Shared/Utils/ServerUrl';
import ProductTable from './ProductTable';

const ManageProducts = () => {

    const { isLoading, error, data: products, refetch } = useQuery('allProducts', () =>
        fetch(`${url}products`, {
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
            <ProductTable products={products} refetch={refetch} ></ProductTable>
        </div>
    );
};

export default ManageProducts;