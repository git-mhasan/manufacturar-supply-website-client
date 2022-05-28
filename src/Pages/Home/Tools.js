import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';
import url from '../../Shared/Utils/ServerUrl';
import ToolCard from './ToolCard';

const Tools = () => {
    let products;
    const { isLoading, error, data } = useQuery('products', () =>
        fetch(`${url}products`).then(res =>
            res.json()
        )
    )
    if (data?.length > 6) {
        products = [...data]?.slice(6);
    }
    else {
        products = data;
    }

    if (isLoading) {
        return <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl my-14 text-accent'>Equipments</h2>
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
        <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl my-14 text-accent'>Equipments</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5'>
                {
                    products.map(product => <ToolCard
                        key={product._id}
                        product={product}
                    ></ToolCard>)
                }

            </div>

        </div>
    );
};

export default Tools;