import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import url from '../../Shared/Utils/ServerUrl';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm({ shouldUseNativeValidation: true });
    const onSubmit = async data => {
        const product = {
            available: data.available,
            desc: data.desc,
            img: data.img,
            minOrder: data.minOrder,
            name: data.name,
            unitPrice: data.unitPrice,
        }

        fetch(`${url}product`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Product Inserted Successfully.`)
                    reset();
                }
                else {
                    toast.error(`Product cannot be processed.`)
                }
                // refetch();
            });

    };

    return (
        <div className='bg-base-200 p-8'>
            <h2 className='font-bold text-lg mb-5 text-center'>Please Fill up all the information.</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
                <div className='w-full flex justify-center mb-3'>
                    <label className='inline-block w-[120px] py-2' htmlFor="name" >Product Name:</label>
                    <input className='border border-black mx-4 px-2 py-1'
                        type="text"
                        {...register("name", { required: "Please enter the value." })}
                    />
                </div>
                <div className='w-full flex justify-center mb-3'>
                    <label className='inline-block w-[120px] py-2' htmlFor="desc">Description:</label>
                    <textarea className='border border-black w-[200px] mx-4 h-20 px-2 py-1'
                        type="textArea"
                        maxLength={250}
                        {...register("desc", { required: "Please enter the value." })}
                    />
                </div>
                <div className='w-full flex justify-center mb-3'>
                    <label className='inline-block w-[120px] py-2' htmlFor="img">Image Link:</label>
                    <input className='border border-black mx-4 px-2 py-1'
                        type="text"
                        {...register("img", { required: "Please enter the value." })}
                    />
                </div>
                <div className='w-full flex justify-center mb-3'>
                    <label className='inline-block w-[120px] py-2' htmlFor="available">Available:</label>
                    <input className='border border-black mx-4 px-2 py-1'
                        type="number"
                        {...register("available", { required: "Please enter the value." })}
                    />
                </div>
                <div className='w-full flex justify-center mb-3'>
                    <label className='inline-block w-[120px] py-2' htmlFor="minOrder">Min Order:</label>
                    <input className='border border-black mx-4 px-2 py-1'
                        type="number"
                        {...register("minOrder", { required: "Please enter the value." })}
                    />
                </div>
                <div className='w-full flex justify-center mb-3'>
                    <label className='inline-block w-[120px] py-2' htmlFor="unitPrice">Unit Price:</label>
                    <input className='border border-black mx-4 px-2 py-1'
                        type="number"
                        {...register("unitPrice", { required: "Please enter the value." })}
                    />
                </div>

                <input
                    className='block content-center my-4 btn btn-sm '
                    type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;