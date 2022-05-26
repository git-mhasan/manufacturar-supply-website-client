import React from 'react';
import { toast } from 'react-toastify';
import url from '../../Shared/Utils/ServerUrl';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;

    const handleMakeAdmin = () => {
        fetch(`${url}user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    return (
        <>
            <tr className="hover text-sm">
                <th>{parseInt(index) + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td><button onClick={handleMakeAdmin} className='btn btn-xs'>Make Admin</button></td>
            </tr>
        </>
    );
};

export default UserRow;