import React from 'react'

export default function WaitingForDriver(props) {
  return (
    <div onClick={()=> {
      props.waitingForDriver(false);
    }} className="bg-white w-full rounded-t-3xl shadow-2xl px-5 pt-2 pb-5">

      {/* Handle */}
      <div className="flex justify-center mb-3">
        <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
            Driver is on the way
          </p>

          <h1 className="text-2xl font-bold text-gray-900">
            Meet at pickup location
          </h1>
        </div>

        {/* Share */}
        <button className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
          <i className="ri-share-forward-line text-xl text-gray-800"></i>
        </button>
      </div>

      {/* Driver Card */}
      <div className="bg-gray-50 rounded-2xl p-4">

        <div className="flex items-center justify-between">

          {/* Driver */}
          <div className="flex items-center gap-3">

            <div className="relative">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="Driver"
                className="w-16 h-16 rounded-full object-cover"
              />

              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Rahul Kumar
              </h2>

              <div className="flex items-center gap-1 mt-0.5">
                <i className="ri-star-fill text-yellow-500 text-sm"></i>

                <span className="text-sm font-semibold text-gray-700">
                  4.8
                </span>

                <span className="text-xs text-gray-400">
                  (1.2k rides)
                </span>
              </div>
            </div>

          </div>

          {/* Message */}
          <button className="w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center">
            <i className="ri-message-3-fill text-xl text-gray-800"></i>
          </button>

        </div>

        {/* Car Details */}
        <div className="border-t border-gray-200 mt-4 pt-3 flex items-center justify-between">

          <div>
            <p className="text-xs text-gray-400 uppercase font-medium">
              Car
            </p>

            <h3 className="font-bold text-gray-900 text-base">
              Maruti Suzuki Dzire
            </h3>

            <p className="text-xs text-gray-500">
              White • Sedan
            </p>
          </div>

          {/* Number Plate */}
          <div className="text-right">
            <p className="text-xs text-gray-400 uppercase font-medium">
              Number plate
            </p>

            <div className="mt-1 bg-white border border-gray-300 rounded-md px-3 py-1">
              <span className="text-sm font-bold tracking-wide text-gray-900">
                UP32 AB 1234
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Route */}
      <div className="mt-5">

        {/* Pickup */}
        <div className="flex gap-4">

          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
              <i className="ri-map-pin-user-fill text-green-600"></i>
            </div>

            <div className="w-px h-8 bg-gray-300"></div>
          </div>

          <div className="pb-3">
            <p className="text-[11px] font-semibold text-gray-400 tracking-wide">
              PICKUP
            </p>

            <h3 className="text-sm font-semibold text-gray-900">
              631/96
            </h3>

            <p className="text-xs text-gray-500">
              Harihar Nagar, Lucknow
            </p>
          </div>

        </div>

        {/* Drop */}
        <div className="flex gap-4">

          <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
            <i className="ri-map-pin-2-fill text-red-500"></i>
          </div>

          <div>
            <p className="text-[11px] font-semibold text-gray-400 tracking-wide">
              DROP
            </p>

            <h3 className="text-sm font-semibold text-gray-900">
              Phoenix Palassio
            </h3>

            <p className="text-xs text-gray-500">
              Gomti Nagar, Lucknow
            </p>
          </div>

        </div>

      </div>

      {/* Payment */}
      <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <i className="ri-wallet-3-fill text-blue-600"></i>
          </div>

          <div>
            <p className="text-[11px] text-gray-400 font-semibold">
              PAYMENT
            </p>

            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">
                ₹200
              </span>

              <span className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600 font-medium">
                Cash
              </span>
            </div>
          </div>

        </div>

        {/* Share Trip */}
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black text-white text-sm font-semibold">
          <i className="ri-share-forward-line"></i>
          Share trip
        </button>

      </div>

    </div>
  )
}