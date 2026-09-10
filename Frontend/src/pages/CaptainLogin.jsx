import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CaptainLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });

    console.log(captainData);
    setEmail('');
    setPassword('');
  }


  return (
    <div>
      <div className='px-3 flex flex-col'>
        {/* <h1 className='font-semibold'>TK RideX</h1> */}
        <h1 className='font-medium mt-18  text-2xl' > Welcome  Back!</h1>
        <p className='font-medium italic '> Login  as a driver </p>

        {/* form pa */}
        <form className='mt-5' onSubmit={(e) => { submitHandler(e) }} >

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

          <button className='bg-yellow-300  w-70 mt-5 px-24 py-1 rounded '>Login</button>

        </form>

        <div className='mt-2'>
          <p> New Here!
            <Link to='/captain-signup' className='text-blue-800'> Create New Account</Link> </p>
        </div>
      </div>


      <div className='px-3 mt-40 w-80' >
        <Link to="/login" className='bg-green-300  mt-15 px-22 py-1.5 rounded '>Sign in as User</Link>
      </div>
    </div>
  )
}
