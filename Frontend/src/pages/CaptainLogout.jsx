import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CaptainLogout() {

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if (response.status === 200) {
      localStorage.removeItem('captain-token');
      navigate('/captain-login');
    }
  })

  return (
    <div>
      {/* RideX Logo */}
      <div className='absolute top-5 left-35 -translate-x-1/2 bg-white px-5 py-2 rounded-full shadow-lg'>
        <h2 className='text-xl font-extrabold'>
          Ride<span className='text-yellow-400'>X</span>
        </h2>
      </div>

      <p> Back to login</p>

    </div>
  )
}
