// import React from 'react';
// import 'remixicon/fonts/remixicon.css';

// export default function LocationSearchPanel(props) {

//     // Sample locations
//     const location = [
//         "Lucknow Model Public Inter College, Harihar Nagar, Indira Nagar, Lko",
//         "Tushar's Cafe, Hazratganj, Church Road, Lko",
//         "Shri Ramswaroop Memorial University, Tindola, Dewa Road"
//     ];

//     return (
//         <div className='w-full'>

//             {/* Heading */}
//             <div className='flex items-center justify-between mb-3'>
//                 <h2 className='font-bold text-lg text-gray-900'>
//                     Recently Visited
//                 </h2>

//                 <i className='ri-history-line text-gray-400 text-xl'></i>
//             </div>

//             {/* Locations */}
//             <div className='space-y-2'>

//                 {location.map(function (elem, index) {

//                     return (
//                         <div
//                             onClick={() => {
//                                 props.setVehiclePanel(true);
//                                 props.setPanelOpen(false);
//                             }}
//                             key={index}
//                             className='group bg-gray-50 border border-gray-200 hover:border-gray-400 active:border-black active:scale-[0.98] cursor-pointer rounded-xl p-3 flex items-center gap-3 transition-all duration-150'
//                         >

//                             {/* Location Icon */}
//                             <div className='shrink-0 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm'>
//                                 <i className='ri-map-pin-line text-gray-700 text-lg'></i>
//                             </div>

//                             {/* Location Text */}
//                             <div className='min-w-0 flex-1'>
//                                 <h4 className='text-sm font-medium text-gray-800 leading-5 line-clamp-2'>
//                                     {elem}
//                                 </h4>

//                                 <p className='text-xs text-gray-400 mt-0.5'>
//                                     Recently visited
//                                 </p>
//                             </div>

//                             {/* Arrow */}
//                             <i className='ri-arrow-right-s-line text-gray-400 text-lg group-hover:text-black transition-colors'></i>

//                         </div>
//                     );
//                 })}

//             </div>

//         </div>
//     )
// }


import React from 'react'
import 'remixicon/fonts/remixicon.css'

export default function LocationSearchPanel(props) {

    const {
        suggestions,
        activeField,
        setPickUp,
        setDestination,
        setActiveField,
        setPanelOpen,
        setVehiclePanel
    } = props


    const handleLocationClick = (location) => {

        // If user is entering pickup
        if (activeField === 'pickup') {

            setPickUp(location)

            // After pickup is selected,
            // automatically move to destination
            setActiveField('destination')

            return
        }


        // If user is entering destination
        if (activeField === 'destination') {

            setDestination(location)

            setPanelOpen(false)

            // Open vehicle selection
            setVehiclePanel(true)

            setActiveField('')

        }

    }


    return (

        <div className='w-full '>

            {/* Heading */}

            <div className='flex items-center justify-between mb-3'>

                <h2 className='font-bold text-lg text-gray-900'>
                    {activeField === 'pickup'
                        ? 'Choose Pick-up Location'
                        : 'Choose Destination'
                    }
                </h2>

                <i className='ri-map-pin-line text-gray-400 text-xl'></i>

            </div>


            {/* Suggestions */}

            <div className='space-y-2'>

                {suggestions.length > 0 ? (

                    suggestions.map((location, index) => {

                        // Handle both possible backend formats
                        const locationText =
                            typeof location === 'string'
                                ? location
                                : location.description ||
                                location.name ||
                                location.address ||
                                ''


                        return (

                            <div
                                onClick={() =>
                                    handleLocationClick(locationText)
                                }
                                key={index}
                                className='group bg-gray-50 border border-gray-200 hover:border-gray-400 active:border-black active:scale-[0.98] cursor-pointer rounded-xl p-3 flex items-center gap-3 transition-all duration-150'
                            >

                                {/* Location Icon */}

                                <div className='shrink-0 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm'>

                                    <i className='ri-map-pin-line text-gray-700 text-lg'></i>

                                </div>


                                {/* Location Text */}

                                <div className='min-w-0 flex-1'>

                                    <h4 className='text-sm font-medium text-gray-800 leading-5 line-clamp-2'>
                                        {locationText}
                                    </h4>

                                    <p className='text-xs text-gray-400 mt-0.5'>
                                        Location suggestion
                                    </p>

                                </div>


                                {/* Arrow */}

                                <i className='ri-arrow-right-s-line text-gray-400 text-lg group-hover:text-black transition-colors'></i>

                            </div>

                        )

                    })

                ) : (

                    <div className='flex flex-col items-center justify-center py-8'>

                        <div className='w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center'>

                            <i className='ri-map-pin-line text-gray-400 text-xl'></i>

                        </div>

                        <p className='text-sm text-gray-400 mt-3'>
                            {activeField
                                ? 'Start typing to search locations'
                                : 'Search for a location'
                            }
                        </p>

                    </div>

                )}

            </div>

        </div>

    )
}