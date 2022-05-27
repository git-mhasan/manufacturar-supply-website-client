import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Spinner from '../../Shared/Spinner';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    if (loading || adminLoading) {
        return <div className='my-5 md:my-8 lg:my-10'>
            <h2 className='text-center font-bold text-3xl my-14 text-black'>Please Wait...</h2>
            <Spinner></Spinner>
        </div>
    }
    if (error) {
        toast.error(error);
    }
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-xl font-bold text-purple-500 text-center '>Dashboard</h2>
                <label htmlFor="dashboard-sidebar" className="btn btn-xs drawer-button lg:hidden mb-3">Dashboard</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    {!admin && <>
                        <li><Link to="/dashboard/myOrder">My Order</Link></li>
                        <li><Link to="/dashboard/review">Add Reviews</Link></li>
                    </>}
                    {admin && <>
                        <li><Link to="/dashboard/users">Make Admin</Link></li>
                        <li><Link to="/dashboard/manageOrders">Manage Orders</Link></li>
                        <li><Link to="/dashboard/products">Manage Products</Link></li>
                        <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                    </>}
                </ul>

            </div>
        </div >
    );
};

export default Dashboard;