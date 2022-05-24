import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // const signInWithGoogle = () => { };

    const onSubmit = (data) => { console.log(data) };

    return (
        <div>
            <div className="hero min-h-full ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card flex-shrink-0 lg:min-w-2xl mix-w-xl shadow-2xl bg-base-100 border-t-2">
                        <div className="card-body ">
                            <h1 className="text-2xl font-bold text-center">Login</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>

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

                                    {/* Forget Password */}
                                    <label className="label">
                                        <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                    <label className="label text-sm">
                                        New to Horizon Equipments Ltd ? <Link to='/signup' className="label-text-alt link link-hover ml-3">Create an account</Link>
                                    </label>
                                </div>

                                {/* submit button */}
                                <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />

                            </form>

                            <div className="divider">OR</div>
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn btn-outline"
                            >Continue with Google</button>
                        </div>
                    </div>

                </div>
            </div >
        </div >
    );
};

export default Login;