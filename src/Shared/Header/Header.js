import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ logo }) => {

    const [menuBtn, setMenuBtn] = useState(false);

    const menuItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/purchase">Purchase</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
    </>
    return (

        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="" className="btn btn-ghost normal-case text-xl ite">Horizon</Link>
            </div>
            <div className="md:flex navbar-end hidden">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="flex-none dropdown dropdown-end md:hidden">
                <label tabIndex="0" className="btn btn-square btn-ghost swap swap-rotate">
                    <input type="checkbox" onChange={() => setMenuBtn(prev => !prev)} />

                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                </label>
                {console.log(menuBtn)}
                <div className={menuBtn ? "block" : "hidden"}>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content items-end mt-3 p-2 shadow bg-base-100 rounded-box w-auto">
                        {menuItem}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;