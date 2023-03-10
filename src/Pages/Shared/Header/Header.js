import React, { } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaUserAlt } from 'react-icons/fa';
import logo from '../../../assets/logo.svg';

const Header = () => {

    const menu =
        <>
            <li><Link>Home </Link></li>
            <li><Link>About </Link></li>
            <li><Link>Services </Link></li>
            <li><Link>Blog </Link></li>
            <li><Link>Contact </Link></li>
        </>

    const user = '';
    return (
        <div>
            <div className="navbar bg-primary-100 flex justify-between ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                        <img className='h-12' src={logo} alt="" />
                    </Link>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menu}
                        </ul>
                    </div>
                </div>


                {/* user and cart */}
                <div className="flex-none">
                    <div className="dropdown dropdown-end px-2">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <FaCartPlus className='text-2xl'></FaCartPlus>
                                <span className="badge badge-sm indicator-item">0</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">0 Items</span>
                                <span className="text-info">Subtotal: $000</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        !user?.uid ? <button className='btn btn-outline btn-primary'>Appointment</button> :
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div >
                                        {user?.uid ? <div className="w-10 rounded-full"><img alt='' /></div> :
                                            <FaUserAlt className='text-xl'></FaUserAlt>}
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li><Link>Settings</Link></li>
                                    <li><Link>Logout</Link></li>
                                </ul>
                            </div>
                    }

                </div>
            </div >
        </div >
    );
};

export default Header;