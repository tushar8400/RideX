import React, { useEffect, useState , useContext } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import axios from "axios";
import {UserDataContext} from '../context/UserContext';

export default function UserSignup() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();

  const { user , setUser } = React.useContext(UserDataContext);


  const submitHandler = async (e) => {
  e.preventDefault();
  const newUser = {
    fullName: {
      firstName: firstName,
      lastName: lastName,
    },
    email: email,
    password: password
  };
  
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    
    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/Home');
    }
  } catch (error) {
    // Look at your browser console to see exactly what express-validator rejected!
    console.error("Validation Error Details:", error.response?.data);
  }

  setFirstName('');
  setLastName('');
  setEmail('');
  setPassword('');
}




  return (
    <div>
      <div className='px-3 flex flex-col'>
        {/* <h1 className='font-semibold'>TK RideX</h1> */}
        <h1 className='font-medium text-2xl mt-20 '> Register to Continue !</h1>

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

          <br></br>

          <button className='bg-yellow-300  w-70 mt-5 px-24 py-1 rounded '>Register</button>

        </form>

        <div className='mt-2'>
          <p> New Here!
            <Link to='/login' className='text-blue-800'> Login Into Your Account</Link> </p>
        </div>
      </div>

      {/* <div className='px-3 mt-40 w-80' >
        <Link to="/captain-login" className='bg-green-300  mt-15 px-19 py-1.5 rounded '>Sign in as Captain</Link>
      </div> */}
    </div>
  )
}
