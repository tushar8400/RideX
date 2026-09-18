import React from 'react'

export default function ConfirmRide(props) {
    return (
        <div className='bg-white w-full rounded-t-3xl shadow-2xl p-2 h-130'>

            <h5
                onClick={() => {
                    props.setConfirmRidePanel(false);
                    props.setVehiclePanel(true);
                }}
                className='flex items-center justify-center text-gray-400 cursor-pointer mb-2'
            >
                <i className="text-xl ri-arrow-down-wide-line"></i>
            </h5>

            <h1 className='ml-1 font-bold mt-2  text-2xl text-gray-900'>
                Confirm Your Ride
            </h1>

            {/* Vehicle */}
            <div className='bg-white rounded-xl flex justify-center items-center '>
                <img
                    className='h-28 object-contain'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrR7Ew9hFvid6uL1yGofYfLeRpVjA3ud3Kfh-H2xSZRw&s=10'
                    alt='vehicle'
                />
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
                    <h3 className='text-base font-semibold text-gray-900'>
                        631/96
                    </h3>
                    <p className='text-sm text-gray-500'>
                        Harihar Nagar, Lko
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
                    <h3 className='text-base font-semibold text-gray-900'>
                        631/96
                    </h3>
                    <p className='text-sm text-gray-500'>
                        Harihar Nagar, Lko
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
                        ₹200
                    </h3>
                    <p className='text-sm text-gray-500'>
                        Cash
                    </p>
                </div>
            </div>

            {/* Confirm */}
            <button onClick={() => {
                props.setVehicleFound(true);
            }}
             className='w-full mt-6 h-10 rounded-xl cursor-pointer text-lg font-bold text-white bg-green-500 hover:bg-green-600 transition duration-200'>
                Confirm Ride
            </button>

        </div>
    )
}