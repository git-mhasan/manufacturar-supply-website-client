import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import url from '../../Shared/Utils/ServerUrl';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm({ shouldUseNativeValidation: true });

    const onSubmit = data => {

        const review = {
            userName: data.name,
            designation: data.designation,
            ratings: data.ratings,
            review: data.review,
        }

        // review uploading
        fetch(`${url}review`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Review updated Successfully.`)
                    reset();
                }
                else {
                    toast.error(`Review could not be uploaded..`)
                }
            });
    }


    return (
        <div className='bg-base-200 p-8'>
            <h2 className='font-bold text-lg mb-5 text-center'>Please Fill up all the information.</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
                <div className='w-full flex justify-center mb-3'>
                    <label className='inline-block w-[120px] py-2' htmlFor="name" >Your Name:</label>
                    <input className='border border-black mx-4 px-2 py-1'
                        type="text"
                        {...register("name", { required: "Please enter the value." })}
                    />
                </div>
                <div className='w-full flex justify-center mb-3'>
                    <label className='inline-block w-[120px] py-2' htmlFor="designation">Designation:</label>
                    <input className='border border-black mx-4 px-2 py-1'
                        type="text"
                        {...register("designation", { required: "Please enter the value." })}
                    />
                </div>

                <div className='w-full flex justify-center mb-3'>
                    <label className='inline-block w-[130px] py-2' htmlFor="ratings">Ratings(Out of 5):</label>
                    <input className='border border-black w-[190px] mx-4 px-2 py-1'
                        type="number"

                        {...register("ratings", { required: "Please enter the value." })}
                    />
                </div>

                <div className='w-full flex justify-center mb-3'>
                    <label className='inline-block w-[120px] py-2' htmlFor="review">Review:</label>
                    <textarea className='border border-black w-[200px] mx-4 h-32 px-2 py-1'
                        type="textArea"
                        maxLength={250}
                        {...register("review", { required: "Please enter the value." })}
                    />
                </div>

                <input
                    className='block content-center my-4 btn btn-sm '
                    type="submit" />
            </form>
        </div>
    );
};

export default AddReview;