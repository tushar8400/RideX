// import React from 'react';
// import {Link} from 'react-router-dom';

// export default function Start() {
//     return (
//         <div className='bg-red-700 w-80 bg-center bg-cover absolute bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIUlbBhqTE_NOZzqXXE-Q8DDVrk7DzItbGfjp35ISGA&s)] w-75 h-screen '>
//             <div className="min-h-screen flex flex-col">

//                 {/* Your image / other content */}
//                 <div className="flex-1">
//                     {/* image here */}
//                 </div>
//                 {/* BOTTOM SECTION */}
//                 <div className="bg-white px-8 py-4 flex flex-col items-center rounded">
//                     <div className="text-xl font-semibold text-center">
//                         <h2>Your Ride</h2>
//                         <h2>Your Way</h2>
//                         {/* <br /> */}
//                         <div className="font-thin text-base">
//                             <p>Book rides, bikes and autos</p>
//                             <p>At anytime, anywhere</p>
//                         </div>
//                     </div>
//                     <Link to="/login" className="flex items-center justify-center bg-yellow-300 h-10 w-full rounded-xl mt-4 font-semibold">
//                         Get Started
//                     </Link>
//                 </div>

//             </div>
//         </div>
//     )
// };

import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

export default function Start() {
    return (
        <div className="min-h-screen w-90 bg-black flex ">

            {/* Mobile App Container */}
            <div
                className="
                    relative
                    w-full
                    max-w-[430px]
                    min-h-screen
                    overflow-hidden
                    bg-cover
                    bg-center
                "
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.88)), url('/images/ride-bg.jpg')",
                }}
            >

                {/* Decorative Glow */}
                <div className="
                    absolute
                    -top-32
                    -right-32
                    w-72
                    h-72
                    bg-yellow-400/20
                    rounded-full
                    blur-3xl
                " />

                {/* CONTENT */}
                <div className="relative z-10 min-h-screen flex flex-col">

                    {/* TOP */}
                    <div className="flex items-center justify-between px-6 pt-8">

                        {/* Logo */}
                        <div className="flex items-center gap-2">

                            <div className="
                                w-12
                                h-12
                                rounded-2xl
                                bg-yellow-400
                                flex
                                items-center
                                justify-center
                                shadow-lg
                            ">
                                <span className="text-2xl font-black text-black">
                                    TK
                                </span>
                            </div>

                            <div>
                                <h1 className="text-white text-xl font-bold leading-none">
                                    TK Ride
                                </h1>

                                <p className="text-white/50 text-xs mt-1">
                                    Move smarter
                                </p>
                            </div>

                        </div>

                        {/* Menu */}
                        <button className="
                            w-11
                            h-11
                            rounded-full
                            bg-white/10
                            backdrop-blur-md
                            border
                            border-white/10
                            text-white
                            flex
                            items-center
                            justify-center
                        ">
                            <i className="ri-more-2-fill text-xl"></i>
                        </button>

                    </div>


                    {/* CENTER */}
                    <div className="flex-1 flex items-center px-7">

                        <div className="max-w-[320px]">

                            <div className="
                                inline-flex
                                items-center
                                gap-2
                                bg-white/10
                                backdrop-blur-md
                                border
                                border-white/10
                                rounded-full
                                px-4
                                py-2
                                mb-5
                            ">

                                <span className="
                                    w-2
                                    h-2
                                    rounded-full
                                    bg-yellow-400
                                    shadow-[0_0_10px_#facc15]
                                " />

                                <span className="text-white/80 text-xs font-medium">
                                    Ride anywhere, anytime
                                </span>

                            </div>


                            <h2 className="
                                text-white
                                text-5xl
                                leading-[0.95]
                                font-black
                                tracking-tight
                            ">
                                Your journey.
                                <br />

                                <span className="text-yellow-400">
                                    Your choice.
                                </span>
                            </h2>


                            <p className="
                                text-white/65
                                text-base
                                leading-6
                                mt-5
                                max-w-[290px]
                            ">
                                Book a car, bike or auto in seconds
                                and get where you need to go.
                            </p>

                        </div>

                    </div>


                    {/* BOTTOM */}
                    <div className="px-6 pb-7">

                        {/* Services */}
                        <div className="
                            flex
                            gap-3
                            mb-5
                        ">

                            <Service
                                icon="ri-car-line"
                                title="Car"
                            />

                            <Service
                                icon="ri-motorbike-line"
                                title="Bike"
                            />

                            <Service
                                icon="ri-bus-line"
                                title="Auto"
                            />

                        </div>


                        {/* Bottom Glass Panel */}
                        <div className="
                            bg-white/10
                            backdrop-blur-xl
                            border
                            border-white/15
                            rounded-[28px]
                            p-4
                        ">

                            <div className="
                                flex
                                items-center
                                justify-between
                                mb-4
                            ">

                                <div>
                                    <p className="text-white/50 text-xs">
                                        Ready to go?
                                    </p>

                                    <p className="text-white font-semibold">
                                        Start your ride
                                    </p>
                                </div>

                                <div className="
                                    w-10
                                    h-10
                                    rounded-full
                                    bg-yellow-400
                                    flex
                                    items-center
                                    justify-center
                                ">
                                    <i className="
                                        ri-map-pin-2-fill
                                        text-black
                                        text-lg
                                    " />
                                </div>

                            </div>


                            {/* Button */}
                            <Link
                                to="/login"
                                className="
                                    w-full
                                    h-14
                                    bg-yellow-400
                                    hover:bg-yellow-300
                                    rounded-2xl
                                    flex
                                    items-center
                                    justify-center
                                    gap-3
                                    text-black
                                    font-bold
                                    text-base
                                    transition
                                    duration-200
                                    active:scale-[0.98]
                                    shadow-[0_8px_30px_rgba(250,204,21,0.25)]
                                "
                            >
                                Get Started

                                <i className="
                                    ri-arrow-right-line
                                    text-xl
                                " />
                            </Link>

                        </div>


                        {/* Footer */}
                        <div className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            mt-4
                            text-white/40
                            text-xs
                        ">
                            <i className="ri-shield-check-line" />
                            Safe rides · Fair prices · Reliable service
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}


/* SERVICE CARD */

function Service({ icon, title }) {
    return (
        <div className="
            flex-1
            h-20
            rounded-2xl
            bg-black/30
            backdrop-blur-md
            border
            border-white/10
            flex
            flex-col
            items-center
            justify-center
            gap-1
            text-white
        ">

            <i className={`${icon} text-xl text-yellow-400`} />

            <span className="text-xs font-medium text-white/80">
                {title}
            </span>

        </div>
    );
}