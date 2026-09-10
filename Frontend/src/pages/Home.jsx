import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div className='bg-red-700 w-80 bg-center bg-cover absolute bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUlbBhqTE_NOZzqXXE-Q8DDVrk7DzItbGfjp35ISGA&s)] w-75 h-screen '>
            <div className="min-h-screen flex flex-col">

                {/* Your image / other content */}
                <div className="flex-1">
                    {/* image here */}
                </div>
                {/* BOTTOM SECTION */}
                <div className="bg-white px-8 py-4 flex flex-col items-center rounded">
                    <div className="text-xl font-semibold text-center">
                        <h2>Your Ride</h2>
                        <h2>Your Way</h2>
                        {/* <br /> */}
                        <div className="font-thin text-base">
                            <p>Book rides, bikes and autos</p>
                            <p>At anytime, anywhere</p>
                        </div>
                    </div>
                    <Link to="/login" className="flex items-center justify-center bg-yellow-300 h-10 w-full rounded-xl mt-4 font-semibold">
                        Get Started
                    </Link>
                </div>

            </div>
        </div>
    )
};
