import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from "@gsap/react"
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap'
import axios from 'axios'
import 'remixicon/fonts/remixicon.css';
import {SocketContext} from '../context/SocketContext';
import { UserDataContext } from '../context/UserContext';

import LocationSearchPanel from '../components/LocationSearchPanel'
import VehicleOption from '../components/VehicleOption'
import ConfirmRide from '../components/ConfirmRide'
import WaitingForDriver from '../components/WaitingForDriver'
import LookingForDriver from '../components/LookingForDriver'
import { useContext } from 'react';
import LiveTracking from '../components/LiveTracking';

export default function Home() {

  const [pickup, setPickUp] = useState('')
  const [destination, setDestination] = useState('')

  const [panelOpen, setPanelOpen] = useState(false)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const [fare, setFare] = useState({})
  const [vehicleType, setVehicleType] = useState(null);
  const [ride , setRide]= useState(null);

  // Which input is currently active?
  const [activeField, setActiveField] = useState('')

  // Suggestions from backend
  const [suggestions, setSuggestions] = useState([])

  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const confirmPanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)

   const navigate = useNavigate()

    const { socket } = useContext(SocketContext);
    const { user } = useContext(UserDataContext);

    useEffect(() => {
        socket.emit("join", { userType: "user", userId: user._id })
    }, [ user ])

    socket.on('ride-confirmed', ride => {


        setVehicleFound(false)
        setWaitingForDriver(true)
        setRide(ride)
    })

    socket.on('ride-started', ride => {
        console.log("ride");
        setWaitingForDriver(false)
        navigate('/riding', { state: { ride } }) // Updated navigate to include ride data
    })

  const submitHandler = (e) => {
    e.preventDefault()
  }


  // FETCH LOCATION SUGGESTIONS
  useEffect(() => {

    if (!activeField) {
      setSuggestions([])
      return
    }

    const value =
      activeField === 'pickup'
        ? pickup
        : destination

    if (!value || value.length < 2) {
      setSuggestions([])
      return
    }


    const timer = setTimeout(async () => {

      try {

        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
          {
            params: {
              input: value
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        )

        console.log('Suggestions:', response.data)

        setSuggestions(
          response.data.suggestions || []
        )

      } catch (error) {

        console.error(
          'Error fetching location suggestions:',
          error
        )

        setSuggestions([])

      }

    }, 300)


    return () => clearTimeout(timer)

  }, [pickup, destination, activeField])



  // PANEL ANIMATIONS

  useGSAP(() => {

    gsap.to(panelRef.current, {
      height: panelOpen ? '65vh' : '0vh',
    })

  }, [panelOpen])


  useGSAP(() => {

    gsap.to(vehiclePanelRef.current, {
      transform: vehiclePanel
        ? 'translateY(0)'
        : 'translateY(100%)',
    })

  }, [vehiclePanel])


  useGSAP(() => {

    gsap.to(confirmPanelRef.current, {
      transform: confirmRidePanel
        ? 'translateY(0)'
        : 'translateY(100%)',
    })

  }, [confirmRidePanel])


  useGSAP(() => {

    gsap.to(vehicleFoundRef.current, {
      transform: vehicleFound
        ? 'translateY(0)'
        : 'translateY(100%)',
    })

  }, [vehicleFound])


  useGSAP(() => {

    gsap.to(waitingForDriverRef.current, {
      transform: waitingForDriver
        ? 'translateY(0)'
        : 'translateY(100%)',
    })

  }, [waitingForDriver])

  async function findtrip() {
    setVehiclePanel(true);
    setPanelOpen(false);

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
      params: { pickup, destination },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    )
  }

  async function createRide() {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/rides/create`,
        {
          pickup,
          destination,
          vehicleType
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error creating ride:", error);
      throw error;
    }
  }

  return (

    <div className='w-[300px] h-screen relative overflow-hidden bg-gray-100'>

      {/* ================= MAP ================= */}

      <div className='bg-yellow-400 h-full w-full relative'>

        <LiveTracking />


        {/* Logo */}

        <div className='absolute top-4 left-4'>

          <div className='bg-white px-3 py-1.5 rounded-lg shadow-md'>

            <h1 className='text-lg font-bold'>
              Ride<span className='text-yellow-400'>X</span>
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


      {/* ================= BOTTOM SEARCH PANEL ================= */}

      <div className='bg-white absolute w-full bottom-0 p-4 pb-5 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.15)]'>


        {/* Drag Handle */}

        <div
          ref={panelCloseRef}
          onClick={() => {
            setPanelOpen(false)
          }}
          className='flex justify-center mb-4 cursor-pointer'
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


        {/* ================= SEARCH FORM ================= */}

        <form onSubmit={submitHandler}>

          <div className='relative'>


            {/* Connecting Line */}

            <div className='absolute left-[15px] top-5 h-[65px] border-l-2 border-dashed border-gray-300'></div>


            {/* ================= PICKUP ================= */}

            <div className='relative'>

              <div className='absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full ring-4 ring-green-100 z-10'></div>


              <input
                onFocus={() => {
                  setActiveField('pickup')
                  setPanelOpen(true)
                }}
                onClick={() => {
                  setActiveField('pickup')
                  setPanelOpen(true)
                }}
                className='w-full bg-gray-100 px-10 py-3 text-sm rounded-xl outline-none border border-transparent focus:bg-white focus:border-green-400 transition-all placeholder:text-gray-400'
                type='text'
                placeholder='Pick-up location'
                value={pickup}
                onChange={(e) => {
                  setPickUp(e.target.value)
                  setActiveField('pickup')
                  setPanelOpen(true)
                }}
              />

            </div>

            {/* ================= DESTINATION ================= */}

            <div className='relative mt-3'>

              <div className='absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full ring-4 ring-red-100 z-10'></div>


              <input
                onFocus={() => {
                  setActiveField('destination')
                  setPanelOpen(true)
                }}
                onClick={() => {
                  setActiveField('destination')
                  setPanelOpen(true)
                }}
                className='w-full bg-gray-100 px-10 py-3 text-sm rounded-xl outline-none border border-transparent focus:bg-white focus:border-red-400 transition-all placeholder:text-gray-400'
                type='text'
                placeholder='Enter destination'
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value)
                  setActiveField('destination')
                  setPanelOpen(true)
                }}
              />

            </div>

          </div>


          {/* Search Button */}

          <button
            type='submit'
            onClick={findtrip}
            className='w-full mt-4 py-3 bg-black text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer'
          >
            <i className='ri-search-line'></i>
            Find a Ride
          </button>

        </form>


        {/* ================= LOCATION SEARCH ================= */}

        <div
          ref={panelRef}
          className='bg-white h-screen overflow-hidden rounded-xl mt-3 w-full'
        >

          <LocationSearchPanel
            suggestions={suggestions}
            activeField={activeField}

            setPickUp={setPickUp}
            setDestination={setDestination}

            setActiveField={setActiveField}
            setPanelOpen={setPanelOpen}

            setVehiclePanel={setVehiclePanel}
          />

        </div>


        {/* ================= VEHICLE PANEL ================= */}

        <div
          ref={vehiclePanelRef}
          className='translate-y-full bg-white fixed w-[300px] z-20 bottom-0 left-0 rounded-t-3xl shadow-2xl overflow-hidden'
        >

          <VehicleOption
            fare={fare}
            selectVehicle={setVehicleType}
            vehiclePanel={vehiclePanel}
            setConfirmRidePanel={setConfirmRidePanel}
            setVehiclePanel={setVehiclePanel}
          />

        </div>


        {/* ================= CONFIRM RIDE ================= */}

        <div
          ref={confirmPanelRef}
          className='translate-y-full bg-white fixed w-[300px] z-30 bottom-0 left-0 rounded-t-3xl shadow-2xl overflow-hidden'
        >

          <ConfirmRide
            createRide={createRide}
            pickup={pickup}
            destination={destination}
            fare={fare}
            vehicleType={vehicleType}
            setConfirmRidePanel={setConfirmRidePanel}
            setVehiclePanel={setVehiclePanel}
            setVehicleFound={setVehicleFound}
          />

        </div>

        {/* ================= LOOKING FOR DRIVER ================= */}

        <div
          ref={vehicleFoundRef}
          className='translate-y-full bg-white fixed w-[300px] z-30 bottom-0 left-0 rounded-t-3xl shadow-2xl overflow-hidden'
        >
          <LookingForDriver
            createRide={createRide}
            pickup={pickup}
            destination={destination}
            fare={fare}
            vehicleType={vehicleType}
            setVehicleFound={setVehicleFound}
          />
        </div>

        {/* ================= WAITING FOR DRIVER ================= */}

        <div
          ref={waitingForDriverRef}
          className='translate-y-full bg-white fixed w-[300px] z-30 bottom-0 left-0 rounded-t-3xl shadow-2xl overflow-hidden'
        >

          <WaitingForDriver
            ride={ride}
            setVehicleFound={setVehicleFound}
            setWaitingForDriver={setWaitingForDriver}
            waitingForDriver={waitingForDriver}
          />

        </div>

      </div>

    </div>
  )
}