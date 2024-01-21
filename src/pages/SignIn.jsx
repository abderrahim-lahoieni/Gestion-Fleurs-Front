import React from 'react';
import {Link} from 'react-router-dom';

function SignIn() {
    return (
        <>
            <section >
            <div className="flex form-container" >
                <div className="w-1/2    before:animate-pulse     before:" ></div>
                <div className="w-1/2 " >
                    <div id="myDIV">
                        <div className="   w-[40vw] h-[50vh] px-5 sm:px-5 flex items-center   float-left" >
                            <div className="w-full sm:w-1/2 lg:2/3 px-3 bg-opacity-20 bg-clip-padding   text-white z-50 py-4 " style={{ border: '1px solid #EBA9AA'}}>
                                <div className="w-full font-bold flex justify-center text-[#854D4E] text-xl mb:2 md:mb-5" >
                                    Sign In
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        id="email"
                                        className="bg-gray-50 border border-[#EBA9AA] text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Username"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        id="password"
                                        className="bg-gray-50 border border-[#EBA9AA] text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div className="flex flex-row justify-between">
                                    <button className="text-black text-sm md:text-md">
                                        Forgot Password
                                    </button>
                                    <Link  to="/SignUp" className="text-rose-300 text-sm md:text-md">
                                        Signup
                                    </Link>
                                </div>
                                <button className="mt-4 md:mt-10 w-full flex justify-center text-sm md:text-xl bg-rose-300 py-2 rounded-md">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </section>

                </>
    );
}

export default SignIn;