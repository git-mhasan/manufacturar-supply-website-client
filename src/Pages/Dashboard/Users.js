import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner';
import url from '../../Shared/Utils/ServerUrl';
import UserTable from './UserTable';

const Users = () => {
    const { isLoading, error, data, refetch } = useQuery('user', () =>
        fetch(`${url}user`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403) {
                toast.error('Forbidden Data Access.');
            }
            if (res.status === 401) {
                toast.error('Unauthorized Access Prevented.');
            }
            return res.json()
        })
    )

    if (isLoading) {
        return <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl my-14 text-black'>Please Wait...</h2>
            <Spinner></Spinner>
        </div>
    }

    if (error) {
        toast.error(error);
    }

    return (
        <div>
            <UserTable users={data}
                refetch={refetch}
            ></UserTable>
        </div>
    );
};

export default Users;