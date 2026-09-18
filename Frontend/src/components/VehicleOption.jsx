import React from 'react';
import 'remixicon/fonts/remixicon.css';

export default function VehicleOption(props) {
    return (
        <div className='bg-white w-[300px] z-10 bottom-0 left-0 rounded-t-3xl shadow-2xl'>

            <div className='px-4 pt-3 pb-5'>

                {/* Drag Handle */}
                <div
                    onClick={() => {
                        props.setVehiclePanel(false);
                       
                    }}
                    className='flex justify-center cursor-pointer mb-4'
                >
                    <div className='w-10 h-1.5 bg-gray-300 rounded-full'></div>
                </div>

                {/* Heading */}
                <div className='flex items-center justify-between mb-4'>
                    <div>
                        <p className='text-xs font-semibold text-green-500 uppercase tracking-wide'>
                            Available rides
                        </p>

                        <h1 className='font-bold text-xl text-gray-900'>
                            Choose a Vehicle
                        </h1>
                    </div>

                    <div className='w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center'>
                        <i className='ri-roadster-line text-lg text-gray-700'></i>
                    </div>
                </div>

                {/* RideX */}
                <div
                    onClick={() => {
                        props.setConfirmRidePanel(true);
                    
                    }}
                    className='border border-gray-200 rounded-2xl p-2 flex items-center gap-3 cursor-pointer hover:border-green-400 hover:bg-green-50 active:scale-[0.98] transition-all'
                >
                    <div className='w-20 h-16  rounded-xl flex items-center justify-center shrink-0 overflow-hidden'>
                        <img
                            className='h-16 w-20 object-contain'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrR7Ew9hFvid6uL1yGofYfLeRpVjA3ud3Kfh-H2xSZRw&s=10'
                            alt='RideX'
                        />
                    </div>

                    <div className='min-w-0 flex-1'>
                        <div className='flex items-center justify-between'>
                            <h2 className='font-bold text-sm text-gray-900'>
                                RideX
                            </h2>

                            <span className='text-xs text-gray-500'>
                                <i className='ri-user-fill'></i> 4
                            </span>
                        </div>

                        <p className='text-xs font-semibold text-gray-700 mt-1'>
                            3 min away
                        </p>

                        <p className='text-xs text-gray-500 mt-1'>
                            Affordable, compact ride
                        </p>
                    </div>
                </div>

                {/* Moto */}
                <div
                    onClick={() => {
                        props.setConfirmRidePanel(true);
                        
                    }}
                    className='border border-gray-200 rounded-2xl p-2 flex items-center gap-3 cursor-pointer hover:border-green-400 hover:bg-green-50 active:scale-[0.98] transition-all mt-3'
                >
                    <div className='w-20 h-16  rounded-xl flex items-center justify-center shrink-0 overflow-hidden'>
                        <img
                            className='h-16 w-20 object-contain'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTR-aKv5cCsJVUH52oCTmjSsF6yEEmIW3ko7bMqd8ZvA&s=10'
                            alt='Moto'
                        />
                    </div>

                    <div className='min-w-0 flex-1'>
                        <div className='flex items-center justify-between'>
                            <h2 className='font-bold text-sm text-gray-900'>
                                Moto
                            </h2>

                            <span className='text-xs text-gray-500'>
                                <i className='ri-user-fill'></i> 1
                            </span>
                        </div>

                        <p className='text-xs font-semibold text-gray-700 mt-1'>
                            5 min away
                        </p>

                        <p className='text-xs text-gray-500 mt-1'>
                            Affordable, quick ride
                        </p>
                    </div>
                </div>

                {/* Auto */}
                <div
                    onClick={() => {
                        props.setConfirmRidePanel(true);
                    
                    }}
                    className='border border-gray-200 rounded-2xl p-2 flex items-center gap-3 cursor-pointer hover:border-green-400 hover:bg-green-50 active:scale-[0.98] transition-all mt-3'
                >
                    <div className='w-20 h-16  rounded-xl flex items-center justify-center shrink-0 overflow-hidden'>
                        <img
                            className='h-16 w-20 object-contain'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQTuozHgbc5kbm3U2mpTrNoHy-BdgBtKX1GfrNCH3hg&s'
                            alt='Auto'
                        />
                    </div>

                    <div className='min-w-0 flex-1'>
                        <div className='flex items-center justify-between'>
                            <h2 className='font-bold text-sm text-gray-900'>
                                Auto
                            </h2>

                            <span className='text-xs text-gray-500'>
                                <i className='ri-user-fill'></i> 3
                            </span>
                        </div>

                        <p className='text-xs font-semibold text-gray-700 mt-1'>
                            8 min away
                        </p>

                        <p className='text-xs text-gray-500 mt-1'>
                            Affordable, spacious ride
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}