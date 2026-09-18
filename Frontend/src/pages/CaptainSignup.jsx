import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';


export default function CaptainSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState("");

  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate : vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      }
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData );
    
    if(response.status === 201) {
       const data = response.data;
       setCaptain(data.captain);
       localStorage.setItem('token', data.token);
       navigate('/captain-home');
    }



    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setVehicleCapacity('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleType('');
  }



  return (
    <div>
      <div className='px-3 flex flex-col'>
        {/* <h1 className='font-semibold'>TK RideX</h1> */}
        <h1 className='font-medium text-2xl mt-20 '> Driver Register!</h1>

        {/* form pa */}
        <form className='mt-5' onSubmit={(e) => { submitHandler(e) }} >

          <h2 className='mb-2'> What's Your Name </h2>
          <div className='flex justify-content gap-2 h-10 mb-3 w-70'>
            <input className='bg-[#eee] w-1/2 px-2 pr-2  py-1.5  rounded-md '
              required
              value={firstName}
              type='firstName'
              placeholder="First-Name"
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />

            <input className='bg-[#eee] w-1/2  px-2 pr-2  py-1.5  rounded-md '
              value={lastName}
              type='lastName'
              placeholder="Last-Name"
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </div>

          <h2 className='mb-2'> What's Your Email </h2>
          <input className='bg-[#eee] w-70  px-2 pr-2  py-1.5  rounded-md '
            required
            value={email}
            type='email'
            placeholder="example@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          <br></br>

          <h2 className='mb-2 mt-5'> Enter Password </h2>
          <input className='bg-[#eee] w-70 px-2  py-1.5 rounded-md '
            required
            value={password}
            type='password'
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />

          <h2 className='mb-2 mt-2'> Vehicle Information  </h2>
          <div className='flex justify-content gap-2 h-10 mb-3 w-70'>
            <input className='bg-[#eee] w-1/2 px-2 pr-2  py-1.5  rounded-md '
              required
              value={vehicleColor}
              type='vehicleColor'
              placeholder="vehicleColor"
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />

            <input className='bg-[#eee] w-1/2  px-2 pr-2  py-1.5  rounded-md '
              value={vehiclePlate}
              type='vehiclePlate'
              placeholder="vehiclePlate"
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex justify-content gap-2 h-10 mb-3 w-70'>
            <input className='bg-[#eee] w-1/2 px-2 pr-2  py-1.5  rounded-md '
              required
              value={vehicleCapacity}
              type='number'
              min={1}
              max={4}
              placeholder="vehicleCapacity"
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eee] w-1/2  px-2 pr-2  py-1.5  rounded-md '
              value={vehicleType}
              type='string'
              placeholder="vehicleType"
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
            <option value= "" disabled > Select Vehicle Type </option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="bike">Bike</option>
            </select>
          </div>


          <br></br>

          <button className='bg-yellow-300  w-70 mt-5 px-10 py-2 rounded '>Create Captain Account</button>

        </form>

        <div className='mt-2'>
          <p> New Here!
            <Link to='/captain-login' className='text-blue-800'> Login Into Your Account</Link> </p>
        </div>
      </div>

      {/* <div className='px-3 mt-40 w-80' >
        <Link to="/captain-login" className='bg-green-300  mt-15 px-19 py-1.5 rounded '>Sign in as Captain</Link>
      </div> */}
    </div>
  )
}
