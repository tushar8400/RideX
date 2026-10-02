import React from 'react'
import { Link } from 'react-router-dom';

export default function RidePopUp(props) {
  return (
    <div className=' '>
        <div className='bg-white w-75 rounded-t-3xl shadow-2xl  p-2  h-125 bottom-0' >

            <h5
                onClick={() => {
                    props.setridePopUpPanel(true);
                }}
                className='flex items-center justify-center text-gray-400 cursor-pointer mb-2'
            >
                <i className="text-xl ri-arrow-down-wide-line"></i>
            </h5>

            <h1 className='ml-1 font-bold mt-1  text-2xl text-gray-900'>
                New Ride Available !
            </h1>

            {/* user profile */}
            <div className=' rounded-xl h-18 p-1  h-100vh mt-1 mb-2 pt-2  bg-amber-100 flex' >
                <div className=' bg-white rounded-4xl  h-15 w-15'>
                    <img src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png " alt=" " />
                </div>
                <span className='mt-4  ml-1 text-xl '> {props.ride?.user.fullName.firstName} {props.ride?.user.fullName.lastName}</span>
                <div className='flex flex-start mt-4 pt-0.5'>
                    <span className='text-gray-800 ml-12 font-semibold '>2.2 km</span>
                </div>
            </div>

            {/* Pickup */}
            <div className='flex items-center gap-4'>
                <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center'>
                    <i className='ri-map-pin-user-fill text-green-600 text-xl'></i>
                </div>

                <div className='flex-1'>
                    <p className='text-xs font-semibold text-gray-400'>
                        PICKUP
                    </p>
                    {/* <h3 className='text-base font-semibold text-gray-900'>
                        631/96
                    </h3> */}
                    <p className='text-sm text-gray-500'>
                        {props.ride?.pickup}
                    </p>
                </div>
            </div>

            <div className='border-t border-gray-200 my-2'></div>

            {/* Drop */}
            <div className='flex items-center gap-4'>
                <div className='w-10 h-10 rounded-full bg-red-100 flex items-center justify-center'>
                    <i className='ri-map-pin-2-fill text-red-500 text-xl'></i>
                </div>

                <div className='flex-1'>
                    <p className='text-xs font-semibold text-gray-400'>
                        DROP
                    </p>
                    {/* <h3 className='text-base font-semibold text-gray-900'>
                        631/96
                    </h3> */}
                    <p className='text-sm text-gray-500'>
                         {props.ride?.destination}
                    </p>
                </div>
            </div>

            <div className='border-t border-gray-200 my-2'></div>

            {/* Payment */}
            <div className='flex items-center gap-4'>
                <div className='w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center'>
                    <i className='ri-wallet-3-fill text-blue-600 text-xl'></i>
                </div>

                <div>
                    <p className='text-xs font-semibold text-gray-400'>
                        PAYMENT
                    </p>
                    <h3 className='text-lg font-bold text-gray-900'>
                        ₹ {props.ride?.fare}
                    </h3>
                    <p className='text-sm text-gray-500'>
                        Cash
                    </p>
                </div>
            </div>

            {/* Confirm */}
           <button className='w-full mt-6 h-10 rounded-xl cursor-pointer text-lg font-bold text-white bg-green-500 hover:bg-green-600 transition duration-200'>
               <Link to="/riding-verification" onClick={() => {}} >
                  Accept Ride
               </Link> 
            </button> 

             <button onClick={() => {
               props.setridePopUpPanel(false);
             }}
             className='w-full mt-4 h-9 rounded-xl cursor-pointer text-lg font-bold text-white bg-red-500 hover:bg-red-600 transition duration-200'>
                Ignore
            </button>

        </div>
    </div>    
  )
}
