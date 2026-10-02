import React, { useRef, useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import axios from 'axios';

export default function ConfirmRidePopUp() {

    const [confirmRidePopUpPanel ,setConfirmRidePopUpPanel] = useState(true);
    const [ridePopUpPanel , setRidePopUpPanel ] = useState(true);

    const otpRefs = useRef([])

    const navigate = useNavigate();

    const handleOtpChange = (e, index) => {
        const value = e.target.value

        // Only allow numbers
        if (!/^\d?$/.test(value)) {
            return
        }

        e.target.value = value

        // Move to next input
        if (value && index < 3) {
            otpRefs.current[index + 1].focus()
        }
    }

    const handleOtpKeyDown = (e, index) => {

        // Move to previous input on Backspace
        if (
            e.key === 'Backspace' &&
            !e.target.value &&
            index > 0
        ) {
            otpRefs.current[index - 1].focus()
        }
    }

    const submitHandler = async(e)=> {
          e.preventDefault();

          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`,{
            params: {
             rideId: props.ride._id,
             otp: otp
          } ,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
    });

          if(response.status === 200){
             setConfirmRidePopUpPanel(false);
             setRidePopUpPanel(false);
             navigate('/captain-riding', {state: {ride: props.ride} });
          }
    }

    return (
        <div className='w-75 min-h-screen bg-gray-100 flex justify-center'>

            {/* Mobile Frame */}
            <div className='w-[430px] min-h-screen bg-white shadow-xl overflow-hidden relative'>

                {/* Map */}
                <div className='relative w-full h-[430px]'>

                    <img
                        className='w-full h-full object-cover'
                        src='https://cdn.dribbble.com/userupload/22910073/file/original-f308c35778d329518ef2b88f866111ec.gif'
                        alt='Map'
                    />

                    <div className='absolute inset-0 bg-black/10'></div>

                    {/* RideX Logo */}
                    <div className='absolute top-5 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-full shadow-lg'>
                        <h2 className='text-xl font-extrabold'>
                            Ride<span className='text-yellow-400'>X</span>
                        </h2>
                    </div>

                    {/* Back Button */}
                    <button className='absolute top-5 left-5 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center'>
                        <i className='ri-arrow-left-line text-xl text-gray-800'></i>
                    </button>
                </div>


                {/* Confirm Ride Bottom Sheet */}
                <div className='absolute bottom-0 left-0 w-full bg-white rounded-t-[30px] shadow-[0_-8px_30px_rgba(0,0,0,0.15)] px-5 pt-4 pb-6'>

                    {/* Drag Handle */}
                    <div className='flex justify-center mb-4'>
                        <div className='w-12 h-1.5 bg-gray-300 rounded-full'></div>
                    </div>


                    {/* Passenger */}
                    <div className='flex items-center justify-between'>

                        <div className='flex items-center'>

                            <div className='w-12 h-12 rounded-full overflow-hidden bg-gray-100'>
                                <img
                                    src='https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png'
                                    alt='Passenger'
                                    className='w-full h-full object-cover'
                                />
                            </div>

                            <div className='ml-3'>
                                <h3 className='font-bold text-gray-900'>
                                    {props.ride?.user.fullName.firstName}{props.ride?.user.fullName.lastName}
                                </h3>

                                <div className='flex items-center gap-1 mt-1'>
                                    <i className='ri-star-fill text-yellow-400'></i>

                                    <span className='text-sm text-gray-500'>
                                        4.8
                                    </span>
                                </div>
                            </div>

                        </div>

                        <div className='text-right'>
                            <p className='text-xs text-gray-400'>
                                Fare
                            </p>

                            <p className='font-bold text-lg text-gray-900'>
                                ₹ {props.ride?.fare}
                            </p>
                        </div>

                    </div>


                    {/* OTP Section */}
                    <div className='mt-5'>

                        <div className='flex items-center justify-between'>

                            <div>
                                <h3 className='font-bold text-gray-900'>
                                    Enter Ride OTP
                                </h3>

                                <p className='text-xs text-gray-400 mt-1'>
                                    Ask the passenger for the 4-digit OTP
                                </p>
                            </div>

                            <div className='w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center'>
                                <i className='ri-shield-check-line text-yellow-600 text-xl'></i>
                            </div>

                        </div>


                        {/* 4 Digit OTP */}
                        <div className='flex gap-3 mt-4'>

                            {[0, 1, 2, 3].map((index) => (
                                <input
                                    key={index}
                                    ref={(el) => {
                                        otpRefs.current[index] = el
                                    }}
                                    type='text'
                                    inputMode='numeric'
                                    maxLength={1}
                                    onChange={(e) =>
                                        handleOtpChange(e, index)
                                    }
                                    onKeyDown={(e) =>
                                        handleOtpKeyDown(e, index)
                                    }
                                    className='w-full h-14 rounded-xl border border-gray-200 bg-gray-50 text-center text-2xl font-bold outline-none focus:border-yellow-400 focus:bg-yellow-50 transition'
                                />
                            ))}

                        </div>

                    </div>


                    {/* Confirm Button */}
                    <button
                       onSubmit={submitHandler}
                        className='w-full h-13 mt-5 rounded-2xl bg-yellow-400 hover:bg-yellow-500 active:scale-[0.98] transition duration-200 font-bold text-lg text-gray-900 flex items-center justify-center gap-2 shadow-md'
                    >
                        <i className='ri-checkbox-circle-line text-xl'></i>
                               Confirm Ride 
                       
                    </button>

                </div>

            </div>

        </div>
    )
}