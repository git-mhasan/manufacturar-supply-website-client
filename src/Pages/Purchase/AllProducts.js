import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';
import url from '../../Shared/Utils/ServerUrl';

const AllProducts = () => {
    const { isLoading, error, data: products } = useQuery('products', () =>
        fetch(`${url}products`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl my-14 text-accent'>All Equipments</h2>
            <Spinner></Spinner>
        </div>
    }
    if (error) {
        return <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl my-14 text-accent'>Equipments</h2>
            <h2 className='text-center font-bold text-3xl my-14 text-black'>Data could not be Loaded.</h2>
        </div>
    }

    return (
        <div>

        </div>
    );
};

export default AllProducts;