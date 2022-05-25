import React from 'react';

const UserRow = ({ user, index }) => {
    console.log(user)
    return (
        <>
            <tr className="hover text-sm">
                <th>{parseInt(index) + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td><button className='btn btn-xs'>Make Admin</button></td>
            </tr>
        </>
    );
};

export default UserRow;