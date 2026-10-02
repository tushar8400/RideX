import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function FinishRide(props) {
    const navigate = useNavigate();

    const FinishRide = (props) => {

        const navigate = useNavigate()

        async function endRide() {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {

                rideId: props.ride._id


            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

            if (response.status === 200) {
                navigate('/captain-home')
            }

        }



        return (
            <div className='w-75 h-screen bg-white flex flex-col shadow-xl'>

                {/* ================= HEADER ================= */}
                <div className='px-5 pt-6 flex items-center justify-between'>

                    <button className='w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center'>
                        <i className='ri-arrow-left-line text-xl text-gray-800'></i>
                    </button>

                    {/* RideX Logo */}
                    <div className='px-5 py-2 rounded-full bg-gray-50'>
                        <span className='text-2xl font-black text-gray-900'>
                            Ride
                        </span>
                        <span className='text-2xl font-black text-yellow-400'>
                            X
                        </span>
                    </div>

                    <div className='w-11'></div>

                </div>


                {/* ================= COMPLETED ================= */}
                <div className='flex flex-col items-center px-5 pt-8'>

                    {/* Success Icon */}
                    <div className='w-20 h-20 rounded-full bg-green-100 flex items-center justify-center'>

                        <div className='w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg'>

                            <i className='ri-check-line text-3xl text-white'></i>

                        </div>

                    </div>


                    <h1 className='mt-5 text-2xl font-black text-gray-900'>
                        Ride Completed
                    </h1>

                    <p className='mt-1 text-xs font-medium text-gray-600'>
                        Your ride has been successfully completed
                    </p>

                </div>


                {/* ================= EARNINGS CARD ================= */}
                <div className='mx-5 mt-8 rounded-3xl bg-black p-5 text-white'>

                    <p className='text-xs font-semibold uppercase tracking-wider text-gray-400 text-center'>
                        Total Earned
                    </p>

                    <h2 className='mt-2 text-4xl font-black text-center'>
                        {props.ride?.fare}
                    </h2>

                    <div className='mt-5 h-px bg-gray-700'></div>

                    <div className='mt-4 flex justify-between'>

                        <div className='text-center'>
                            <p className='text-xs text-gray-400'>
                                Distance
                            </p>

                            <p className='mt-1 font-bold'>
                                4.2 km
                            </p>
                        </div>


                        <div className='h-8 w-px bg-gray-700'></div>


                        <div className='text-center'>
                            <p className='text-xs text-gray-400'>
                                Duration
                            </p>

                            <p className='mt-1 font-bold'>
                                18 min
                            </p>
                        </div>


                        <div className='h-8 w-px bg-gray-700'></div>


                        <div className='text-center'>
                            <p className='text-xs text-gray-400'>
                                Payment
                            </p>

                            <p className='mt-1 font-bold'>
                                Cash
                            </p>
                        </div>

                    </div>

                </div>


                {/* ================= PASSENGER ================= */}
                <div className='mx-5 mt-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 flex items-center justify-between'>

                    <div className='flex items-center gap-3'>

                        <div className='w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center'>

                            <i className='ri-user-3-fill text-xl text-gray-500'></i>

                        </div>

                        <div>

                            <p className='text-[10px] uppercase tracking-wider font-bold text-gray-400'>
                                Passenger
                            </p>

                            <h3 className='font-bold text-gray-900'>
                                {props.ride?.user.fullName.firstName}{props.ride?.user.fullName.lastName}
                            </h3>

                        </div>

                    </div>


                    <div className='flex items-center gap-1 px-3 py-2 rounded-full bg-yellow-100'>

                        <i className='ri-star-fill text-yellow-500'></i>

                        <span className='text-sm font-bold text-gray-800'>
                            4.8
                        </span>

                    </div>

                </div>


                {/* ================= DONE BUTTON ================= */}
                <div className='mt-auto px-5 pb-7 pt-8'>

                    <button
                        onClick={endRide}
                        className='w-full h-13 rounded-2xl bg-yellow-400 hover:bg-yellow-500 active:scale-[0.98] transition-all duration-200 text-black font-black text-base shadow-lg shadow-yellow-100 flex items-center justify-center gap-2'
                    >

                        <i className='ri-home-5-line text-xl'></i>

                        Done

                    </button>

                </div>

            </div>
        )
     }
}