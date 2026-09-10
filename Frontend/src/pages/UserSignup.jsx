import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function UserSignup() {

  const [firstName, setFristName] = useState("");
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password
    });

    console.log(userData);
    setFristName('');
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
                setFristName(e.target.value)
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
