import React from 'react';
import Spinner from '../../Shared/Spinner';
import ToolCard from './ToolCard';

const Tools = () => {
    return (
        <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl my-14 text-accent'>Equipments</h2>

            <Spinner></Spinner>
            <ToolCard></ToolCard>

        </div>
    );
};

export default Tools;