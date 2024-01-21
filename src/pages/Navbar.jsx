import React from 'react';
import {Link} from "react-router-dom";
import '../PagesCss/navbar.css';
function Navbar() {

    return (
        <>
            <nav className="nav">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                <svg>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                                );
                                <svg>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                                );
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img alt="" className="h-8 w-auto" src="/logoFlora2.jpg" style={{ height: "50px", width: "auto", fontFamily: "Dancing Script" }}/>
                                <div>
                                    &nbsp;
                                </div>
                                <span style={{ fontSize: '20px', color: '#C1A8A8', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}><h1 style={{ margin: '0' }}>FLORASTOCK</h1></span>

                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    ;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div className="flex space-x-4">
                                    <Link
                                        to="/ContactUs"
                                        className="text-black hover:bg-rose-300 hover:text-black rounded-md px-3 py-2 text-sm font-bold"
                                        style={{ textDecoration: 'underline' }}
                                    >
                                        Contactez-Nous
                                    </Link>

                                    <Link
                                        to="/SignIn"
                                        className="bg-white text-black rounded-md px-3 py-2 text-sm font-bold">
                                        Sign in
                                    </Link>

                                    <Link
                                        to="/SignUp"
                                        className="bg-white text-black rounded-md px-3 py-2 text-sm font-bold">
                                        Sign Up
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className="nav">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                <svg>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                                );
                                <svg>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg>
                                );
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">

                                    <Link to={'/CrudFl'} className="bg-rose-300 rounded-md px-3 py-2 text-sm font-bold" aria-current="page">Dashboard Admin</Link>
                                    <Link to={'/Flowers'} className="text-black hover:bg-rose-200 hover:text-black rounded-md px-3 py-2 text-sm font-bold">Flowers</Link>
                                    <Link to={'/Bouquets'} className="text-black hover:bg-rose-200 hover:text-black rounded-md px-3 py-2 text-sm font-bold">Bouquets</Link>
                                    <Link to={'/Plants'} className="text-black hover:bg-rose-200 hover:text-black rounded-md px-3 py-2 text-sm font-bold">Plants</Link>
                                    <Link to={'/Perfums'} className="text-black hover:bg-rose-200 hover:text-black rounded-md px-3 py-2 text-sm font-bold " >Perfumes</Link>

                                </div>
                            </div>


                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>


                            <div>
                            <img
                                className="absolute max-w-screen-2xl font-bold  "
                                alt=""
                                src="/img_5.png"
                            />
                            </div>

                            <div>
                                ;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>

                            <div>
                            <Link to="/Panier">
                                <img
                                    className="absolute max-w-screen-2xl font-bold  "
                                    alt=""
                                    src="/img_4.png"
                                />
                            </Link>
                            </div>

                        </div>
                    </div>
                </div>


            </nav>
        </>
    );
}

export default Navbar;
