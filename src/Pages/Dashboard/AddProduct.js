import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import url from '../../Shared/Utils/ServerUrl';

const AddProduct = () => {
    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    const onSubmit = async data => {
        const product = {
            available: data.available,
            desc: data.desc,
            img: data.img,
            minOrder: data.minOrder,
            name: data.name,
            unitPrice: data.unitPrice,
        }
        console.log(product);

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
                    data.reset();
                }
                else {
                    toast.error(`Product cannot be processed.`)
                }
                // refetch();
            });

    };

    // const product = {
    //     available: "200",
    //     desc: "A total station (TS) or total station theodolite (TST) is an electronic/optical instrument used for surveying and building construction. It is an electronic transit theodolite integrated with electronic distance measurement.",
    //     img: "http://hydrolandbd.com/wp-content/uploads/2019/09/TotalStation.jpg",
    //     minOrder: "5",
    //     name: "Total Station",
    //     quantity: "0",
    //     unitPrice: "135000"


    return (
        <div className='bg-base-200 p-8'>
            <h2 className='font-bold text-lg mb-5 text-center'>Please Fill up all the information.</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
                <div className='w-[400px]'>
                    <label htmlFor="name" >Product Name:</label>
                    <input className='border mx-4'
                        type="text"
                        {...register("name", { required: "Please enter the value." })}
                    />
                </div>
                <div className='w-[400px]'>
                    <label htmlFor="desc">Description:</label>
                    <input className='border mx-4'
                        type="text"
                        maxLength={250}
                        {...register("desc", { required: "Please enter the value." })}
                    />
                </div>
                <div className='w-[400px]'>
                    <label htmlFor="img">Image Link:</label>
                    <input className='border mx-4'
                        type="text"
                        {...register("img", { required: "Please enter the value." })}
                    />
                </div>
                <div className='w-[400px]'>
                    <label htmlFor="available">Available:</label>
                    <input className='border mx-4'
                        type="number"
                        {...register("available", { required: "Please enter the value." })}
                    />
                </div>
                <div className='w-[400px]'>
                    <label htmlFor="minOrder">Min Order:</label>
                    <input className='border mx-4'
                        type="number"
                        {...register("minOrder", { required: "Please enter the value." })}
                    />
                </div>
                <div className='w-[400px]'>
                    <label htmlFor="unitPrice">Unit Price:</label>
                    <input className='border mx-4'
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