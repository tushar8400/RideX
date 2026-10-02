import React, { useContext } from 'react'
import { Link , useLocation, useNavigate} from 'react-router-dom'
import { SocketContext } from '../context/SocketContext';

export default function Riding() {

  const location = useLocation();
  const socket = useContext(SocketContext);
  const {ride} = location.state ||  {};
  const navigate = useNavigate();

  socket.on("ride-ended", () => {
     navigate('/home');
  })

  return (
    <div className="h-screen w-75 bg-gray-100 flex justify-center overflow-hidden">

      {/* Main Container */}
      <div className="h-screen bg-white shadow-2xl">

        {/* ================= MAP ================= */}
        <div className="h-[40vh] relative overflow-hidden">

          <img
            src="https://cdn.dribbble.com/userupload/22910073/file/original-f308c35778d329518ef2b88f866111ec.gif"
            alt="Ride map"
            className="w-full h-full object-cover"
          />

          {/* Back Button */}
          <button className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <i className="ri-arrow-left-line text-xl text-gray-800"></i>
          </button>

          {/* Arrival */}
          <div className="absolute top-4 right-4 bg-white rounded-2xl px-4 py-2.5 shadow-xl">
            <p className="text-[9px] font-bold tracking-wider text-gray-400">
              ARRIVAL
            </p>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>

              <span className="text-base font-bold text-gray-900">
                6 min
              </span>
            </div>
          </div>

        </div>


        {/* ================= CONTENT ================= */}
        <div className="px-5 py-3">

          {/* ================= DRIVER ================= */}
          <div className="flex items-center justify-between mb-3">

            <div className="flex items-center gap-3">

              {/* Car */}
              <div className="w-16 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
                <i className="ri-car-fill text-4xl text-gray-800"></i>
              </div>

              {/* Driver */}
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                   {ride?.captain.fullName.firstName}{ride?.captain.fullName.lastName}
                </h2>

                <p className="text-sm font-semibold text-gray-600">
                  MP04 AB 1234
                </p>

                <p className="text-xs text-gray-400">
                  Maruti Suzuki Alto
                </p>
              </div>

            </div>

            {/* Call */}
            <button className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <i className="ri-phone-fill text-green-600 text-lg"></i>
            </button>

          </div>


          {/* ================= TRIP CARD ================= */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3">

            {/* PICKUP */}
            <div className="flex gap-3">

              <div className="w-9 h-9 shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                <i className="ri-map-pin-user-fill text-green-600 text-lg"></i>
              </div>

              <div className="flex-1">

                <p className="text-[10px] font-bold tracking-wider text-gray-400">
                  PICKUP
                </p>

                {/* <h3 className="text-sm font-bold text-gray-900">
                  562/11-A
                </h3> */}

                <p className="text-xs text-gray-500">
                   {props.ride?.pickup}
                </p>

              </div>

            </div>


            {/* Connecting Line */}
            <div className="ml-[18px] h-4 border-l-2 border-dashed border-gray-300"></div>


            {/* DROP */}
            <div className="flex gap-3">

              <div className="w-9 h-9 shrink-0 rounded-full bg-red-100 flex items-center justify-center">
                <i className="ri-map-pin-2-fill text-red-500 text-lg"></i>
              </div>

              <div className="flex-1">

                <p className="text-[10px] font-bold tracking-wider text-gray-400">
                  DROP
                </p>

                {/* <h3 className="text-sm font-bold text-gray-900">
                  562/11-A
                </h3> */}

                <p className="text-xs text-gray-500">
                   {ride?.destination}
                </p>

              </div>

            </div>


            {/* Divider */}
            <div className="border-t border-gray-200 my-3"></div>


            {/* PAYMENT */}
            <div className="flex items-center gap-3">

              <div className="w-9 h-9 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                <i className="ri-wallet-3-fill text-blue-600 text-lg"></i>
              </div>

              <div className="flex-1">

                <p className="text-[10px] font-bold tracking-wider text-gray-400">
                  PAYMENT
                </p>

                <h3 className="text-lg font-bold text-gray-900">
                  ₹ {ride?.fare}
                </h3>

                <p className="text-xs text-gray-500">
                  Cash
                </p>

              </div>

              <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-[10px] font-bold">
                CASH
              </span>

            </div>

          </div>
      

          {/* ================= BUTTON ================= */}
          <button className="w-full mt-3 py-3 rounded-xl bg-black text-white font-semibold text-sm shadow-lg">
            Make a Payment
          </button>

        </div>

      </div>

    </div>
  )
}