import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Spinner from '../../Shared/Spinner';

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, errorEmail] = useSendEmailVerification(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [token] = useToken(user);
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])


    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        await sendEmailVerification();

    };

    if (loading || updating || sending) {
        return <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl my-14 text-black'>Please Wait...</h2>
            <Spinner></Spinner>
        </div>
    }
    if (error || updateError || errorEmail) {
        toast(error?.message || updateError?.message || error.message)
    }

    return (
        <div>
            <div className="hero min-h-full ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card flex-shrink-0 lg:min-w-2xl min-w-lg shadow-2xl bg-base-100 border-t-2">
                        <div className="card-body">
                            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                {/* name  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="input input-bordered w-[500px] max-w-xs"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            },
                                            maxLength: {
                                                value: 30,
                                                message: 'Please give your short Name'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                        {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                                </div>

                                {/* email  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered w-[500px] max-w-xs"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>

                                {/* password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="input input-bordered w-[500px] max-w-xs"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters or longer'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    </label>

                                    <label className="label text-sm">
                                        Already a user ? <Link to='/login' className="label-text-alt link link-hover ml-3"> Please Login</Link>
                                    </label>
                                </div>

                                {/* submit button */}
                                <input className='btn w-full max-w-xs text-white' type="submit" value="Signup" />
                            </form>
                        </div>
                    </div>

                </div>
            </div >
        </div >
    );
};

export default Signup;