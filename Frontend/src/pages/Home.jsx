import React, { useRef, useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehicleOption from '../components/VehicleOption';
import ConfirmRide from '../components/ConfirmRide';
import WaitingForDriver from '../components/WaitingForDriver';
import LookingForDriver from '../components/LookingForDriver';

export default function Home() {

  const [pickup, setPickUp] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);4
  const [vehicleFound , setVehicleFound] = useState(false);
  const [waitingForDriver , setWaitingForDriver] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmPanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(() => {
    gsap.to(panelRef.current, {
      height: panelOpen ? '65vh' : '0vh',
    });
  }, [panelOpen]);

  useGSAP(() => {
    gsap.to(vehiclePanelRef.current, {
      transform: vehiclePanel ? 'translateY(0)' : 'translateY(100%)',
    });
  }, [vehiclePanel]);

  useGSAP(() => {
    gsap.to(confirmPanelRef.current, {
      transform: confirmRidePanel ? 'translateY(0)' : 'translateY(100%)',
    });
  }, [confirmRidePanel]);

  useGSAP(() => {
    gsap.to(vehicleFoundRef.current, {
      transform: vehicleFound ? 'translateY(0)' : 'translateY(100%)',
    });
  }, [vehicleFound]);

  useGSAP(() => {
    gsap.to(waitingForDriverRef.current, {
      transform: waitingForDriver ? 'translateY(0)' : 'translateY(100%)',
    });
  }, [waitingForDriver]);



  return (
    <div className='w-[300px] h-screen relative overflow-hidden bg-gray-100'>

      {/* Map */}
      <div className='bg-yellow-400 h-full w-full relative'>

        {/* Google API part here */}

        {/* Logo */}
        <div className='absolute top-4 left-4'>
          <div className='bg-white px-3 py-1.5 rounded-lg shadow-md'>
            <h1 className='text-lg font-bold'>
              Ride<span className='text-green-500'>X</span>
            </h1>
          </div>
        </div>

        {/* Profile */}
        <button className='absolute top-4 right-4 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center'>
          <i className='ri-user-line text-lg'></i>
        </button>

        {/* Current Location */}
        <button className='absolute bottom-36 right-4 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center'>
          <i className='ri-focus-3-line text-lg'></i>
        </button>

      </div>

      {/* Bottom Search Panel */}
      <div className='bg-white absolute w-full bottom-0 p-4 pb-5 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.15)]'>

        {/* Drag Handle */}
        <div
          ref={panelCloseRef}
          onClick={() => {
            setPanelOpen(false);
          }}
          className='flex justify-center mb-4 cursor-pointer '
        >
          <div className='w-10 h-1 bg-gray-300 rounded-full'></div>
        </div>

        {/* Heading */}
        <div className='mb-4'>
          <p className='text-xs font-semibold text-green-500 uppercase tracking-wide'>
            Book a ride
          </p>

          <h4 className='text-lg font-bold text-gray-900'>
            Where would you like to go?
          </h4>
        </div>

        {/* Search Form */}
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>

          <div className='relative'>

            {/* Connecting Line */}
            <div className='absolute left-15px top-5 h-65px border-l-2 border-dashed border-gray-300'></div>

            {/* Pickup */}
            <div className='relative'>
              <div className='absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full ring-4 ring-green-100 z-10'></div>

              <input
                onClick={() => {
                  setPanelOpen(true);
                }}
                className='w-full bg-gray-100 px-10 py-3 text-sm rounded-xl outline-none border border-transparent focus:bg-white focus:border-green-400 transition-all placeholder:text-gray-400'
                type='text'
                placeholder='Pick-up location'
                value={pickup}
                onChange={(e) => {
                  setPickUp(e.target.value);
                }}
              />
            </div>

            {/* Destination */}
            <div className='relative mt-3'>
              <div className='absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full ring-4 ring-red-100 z-10'></div>

              <input
                onClick={() => {
                  setPanelOpen(true);
                }}
                className='w-full bg-gray-100 px-10 py-3 text-sm rounded-xl outline-none border border-transparent focus:bg-white focus:border-red-400 transition-all placeholder:text-gray-400'
                type='text'
                placeholder='Enter destination'
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
              />
            </div>

          </div>

          {/* Search Button */}
          <button
            type='submit'
            className='w-full mt-4 py-3 bg-black text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer'
          >
            <i className='ri-search-line'></i>
            Find a Ride
          </button>

        </form>

        {/* Location Search */}
        <div
          ref={panelRef}
          className='bg-white h-screen overflow-hidden rounded-xl mt-3 w-full'
        >
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>

        {/* Vehicle Panel */}
        <div
          ref={vehiclePanelRef}
          className='translate-y-full bg-white fixed w-[300px] z-20 bottom-0 left-0 rounded-t-3xl shadow-2xl overflow-hidden'
        >
          <VehicleOption
            vehiclePanel={vehiclePanel}
            setConfirmRidePanel={setConfirmRidePanel}
            setVehiclePanel={setVehiclePanel}
          />
        </div>

        {/* Confirm Ride */}
        <div
          ref={confirmPanelRef}
          className='translate-y-full bg-white fixed w-[300px] z-30 bottom-0 left-0 rounded-t-3xl shadow-2xl overflow-hidden'
        >
          <ConfirmRide
            setConfirmRidePanel={setConfirmRidePanel}
            setVehiclePanel={setVehiclePanel}
            setVehicleFound={setVehicleFound}
          />
        </div>

        {/* Waiting for driver */}
          <div ref={vehicleFoundRef} className='translate-y-full bg-white fixed w-[300px] z-30 bottom-0 left-0 rounded-t-3xl shadow-2xl overflow-hidden'>
             <LookingForDriver  setVehicleFound={setVehicleFound}  />  
         
        </div>
         <div ref={waitingForDriverRef} className='translate-y-full bg-white fixed w-[300px] z-30 bottom-0 left-0 rounded-t-3xl shadow-2xl overflow-hidden'>
             <waitingForDriver waitingForDriver={waitingForDriver} 
              
             />   
         
        </div>
      </div>

    </div>
  )
}
