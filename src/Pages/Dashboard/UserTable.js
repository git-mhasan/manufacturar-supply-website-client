import React from 'react';
import UserRow from './UserRow';

const UserTable = ({ users, refetch }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length > 0 ? users.map((user, index) =>
                                <UserRow key={index}
                                    user={user}
                                    index={index}
                                    refetch={refetch}
                                ></UserRow>)
                                :
                                <div><h2 className='text-xl'>No User Found</h2></div>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;