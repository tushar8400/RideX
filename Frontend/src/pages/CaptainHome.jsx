import React, { useRef, useEffect, useContext, useState } from 'react';
import CaptianDetails from '../components/CaptianDetails';
import RidePopUp from '../components/RidePopUp';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { SocketContext } from '../context/SocketContext';
import { CaptainDataContext } from '../context/CaptainContext';
import LiveTracking from '../components/LiveTracking';

export default function CaptainHome() {

  const [ridePopUpPanel, setRidePopUpPanel] = useState(false)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)

  const ridePopUpPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)
  const [ride, setRide] = useState(null)



  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);


  useEffect(() => {
    socket.emit('join', {
      userId: captain._id,
      userType: 'captain'
    })
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

          socket.emit('update-location-captain', {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude
            }
          })
        })
      }
    }

    const locationInterval = setInterval(updateLocation, 10000)
    updateLocation()

    // return () => clearInterval(locationInterval)
  }, [])

  socket.on('new-ride', (data) => {

    setRide(data)
    setRidePopUpPanel(true)

  });

  async function confirmRide() {

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {

      rideId: ride._id,
      captainId: captain._id,


    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    setRidePopUpPanel(false)
    setConfirmRidePopupPanel(true)

  }


  useGSAP(() => {
    gsap.to(ridePopUpPanelRef.current, {
      transform: ridePopUpPanel ? 'translateY(0)' : 'translateY(100%)',
    });
  }, [ridePopUpPanel]);

  return (
    <div className='w-75 h-screen'>
      {/* RideX Logo */}
      <div className='absolute top-5 left-35 -translate-x-1/2 bg-white px-5 py-2 rounded-full shadow-lg'>
        <h2 className='text-xl font-extrabold'>
          Ride<span className='text-yellow-400'>X</span>
        </h2>
      </div>
      <div className='w-full h-110 '>
         <LiveTracking />
      </div>
      <div className=''>
        {/* fare={fare} */}
        <CaptianDetails />
      </div>

      <div ref={ridePopUpPanelRef} className='fixed w-full z-10 translate-y-full bottom-0 pt-12'>
        <RidePopUp
          ride={ride}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopUpPanel={setRidePopUpPanel}
          confirmRide={confirmRide}
        />
      </div>
    </div>
  )
}
