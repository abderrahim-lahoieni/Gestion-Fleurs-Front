import React from 'react';
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <>
            <div className="flex flex-col items-center  h-screen">
                <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                    <div className="w-full lg:w-1/2 mx-8">
                        <div className="text-7xl text-green-500 font-dark font-extrabold mb-8">404</div>
                        <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
                            Not found
                        </p>
                        <Link
                            to="/"
                            className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700">
                            Go back to the FLORA-ABDO homepage
                        </Link>
                    </div>
                    <div>
                        <img
                            src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
                            className=""
                            alt="Page not found"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotFound;