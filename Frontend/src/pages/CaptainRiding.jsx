import React from 'react'
import { useNavigate , useLocation } from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function CaptainRiding() {

    const location = useLocation();

    const navigate = useNavigate();

    return (
            <div className='w-75 min-h-screen bg-white relative overflow-hidden shadow-xl'>

                {/* Map */}
                <div className='relative w-full h-screen  overflow-hidden'>

                    <img
                        className='w-full h-full object-cover'
                        src="https://cdn.dribbble.com/userupload/22910073/file/original-f308c35778d329518ef2b88f866111ec.gif"
                        alt='Map'
                    />

                    {/* Dark Map Overlay */}
                    <div className='absolute inset-0 bg-black/10'></div>

                    {/* RideX Logo */}
                    <div className='absolute top-5 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-full shadow-lg'>
                        <h2 className='text-xl font-extrabold tracking-tight'>
                            Ride<span className='text-yellow-400'>X</span>
                        </h2>
                    </div>

                    {/* Back Button */}
                    <button
                        className='absolute top-5 left-5 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center'
                    >
                        <i className='ri-arrow-left-line text-xl text-gray-800'></i>
                    </button>

                    {/* Distance */}
                    <div className='absolute bottom-5 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-full shadow-lg flex items-center gap-2'>
                        <i className='ri-map-pin-2-fill text-yellow-500'></i>
                        <span className='font-semibold text-gray-800'>
                            4 km away
                        </span>
                    </div>

                </div>


                {/* Bottom Sheet */}
                <div className='absolute bottom-0 left-0 w-full bg-white rounded-t-[30px] shadow-[0_-8px_30px_rgba(0,0,0,0.12)] px-5 pt-4 pb-7'>

                    {/* Drag Handle */}
                    <div className='flex justify-center mb-5'>
                        <div className='w-12 h-1.5 bg-gray-300 rounded-full'></div>
                    </div>

                    {/* Ride Status */}
                    <div className='flex items-center justify-between mb-5'>

                        <div>
                            <p className='text-sm text-gray-400'>
                                Current ride
                            </p>

                            <h2 className='text-xl font-bold text-gray-900 mt-1'>
                                Ride in Progress
                            </h2>
                        </div>

                        <div className='w-11 h-11 rounded-full bg-green-100 flex items-center justify-center'>
                            <div className='w-7 h-7 rounded-full bg-green-500 flex items-center justify-center'>
                                <i className='ri-car-fill text-white text-sm'></i>
                            </div>
                        </div>

                    </div>

                    {/* Distance Card */}
                    <div className='bg-gray-50 border border-gray-100 rounded-2xl p-4 flex items-center justify-between'>

                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center'>
                                <i className='ri-road-map-line text-yellow-600 text-xl'></i>
                            </div>

                            <div>
                                <p className='text-xs text-gray-400'>
                                    Remaining distance
                                </p>

                                <p className='font-bold text-gray-900'>
                                    4 km
                                </p>
                            </div>
                        </div>

                        <i className='ri-arrow-right-s-line text-xl text-gray-400'></i>

                    </div>

                    {/* Complete Ride Button */}
                    <button
                        onClick={() => {
                            navigate('/finish-ride')
                        }}
                        className='w-full mt-5 h-13 rounded-2xl cursor-pointer text-lg font-bold text-gray-900 bg-yellow-400 hover:bg-yellow-500 active:scale-[0.98] transition duration-200 shadow-md flex items-center justify-center gap-2'
                    >
                        <i className='ri-checkbox-circle-line text-xl'></i>
                        Ride Completed
                    </button>

                </div>

            </div>
    )
}