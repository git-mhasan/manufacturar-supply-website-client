import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../../Shared/Spinner';
import url from '../../Shared/Utils/ServerUrl';

const MyProfile = ({ product }) => {
    const [user, loading, error] = useAuthState(auth);

    const { data: existingUser, isLoading, refetch } = useQuery(['userByEmail', user.email], () => fetch(`${url}user/profile/${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
    })
        .then(res => {
            if (res.status === 403 || res.status === 401) {
                toast.error('User Info cannot be Retreaved.');
            }
            return res.json()
        }))


    if (loading || isLoading) {
        return <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl my-14 text-black'>Please Wait...</h2>
            <Spinner></Spinner>
        </div>
    }
    if (error) {
        toast.error(error);
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        const updatedUser = {
            name: user?.displayName,
            email: user.email,
            location: event.target[2].value,
            education: event.target[3].value,
            phone: event.target[4].value,
            linkdin: event.target[5].value
        }
        fetch(`${url}user/profile/${user.email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('User profile cannot be updated.');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully updated user profile.`);
                }
            })
        refetch();
    }

    return (
        <div className=' flex flex-col items-center justify-center bg-accent min-w-full pb-4'>
            <form onSubmit={handleOnSubmit}>
                <h3 className='text-lg my-4 font-bold'>Update Profile</h3>
                <div className="mb-3">
                    <label>Name:</label>
                    <input
                        type="text"
                        className="form-control p-1 w-5/7"
                        placeholder="Name"
                        required
                        value={user?.displayName ? user?.displayName : ""}
                        disabled
                    />
                </div>
                <div className="mb-3 w-full">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="form-control p-1"
                        placeholder="Email"
                        required
                        value={user?.email ? user?.email : ""}
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label>Location:</label>
                    <input
                        type="text"
                        className="form-control p-1"
                        placeholder="City/District"
                        required
                        defaultValue={existingUser?.location ? existingUser?.location : ""}
                    />
                </div>
                <div className="mb-3">
                    <label>Education:</label>
                    <input
                        type="text"
                        className="form-control p-1"
                        placeholder="Education"
                        required
                        defaultValue={existingUser?.education ? existingUser?.education : ""}

                    />
                </div>
                <div className="mb-3">
                    <label>Phone:</label>
                    <input
                        type="text"
                        className="form-control p-1"
                        placeholder="Phone"
                        required
                        defaultValue={existingUser?.phone ? existingUser?.phone : ""}

                    />
                </div>
                <div className="mb-3">
                    <label>LinkedIn:</label>
                    <input
                        type="text"
                        className="form-control p-1"
                        placeholder="LinkedIn Link"
                        required
                        defaultValue={existingUser?.linkdin ? existingUser?.linkdin : ""}

                    />
                </div>

                <div className="flex items-center justify-center">
                    <input type="submit" value="update profile" className="btn btn-sm" />
                </div>

            </form>
        </div>
    );
};

export default MyProfile;