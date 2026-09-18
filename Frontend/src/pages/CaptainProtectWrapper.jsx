import { useContext , useEffect, useState } from "react"
import React  from 'react'
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom"
import axios from "axios";

export default function CaptainProtectWrapper({children}) {

    // const {user} = useContext(UserDataContext);
    // const navigate = useNavigate();

    // if(!user.email){
    //     navigate('/login')
    // }

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const {captain , setCaptain} = useContext(CaptainDataContext);
    const [isloading , setIsLoading] = useState(true);

    useEffect(() => {
          if(!token){
        navigate('/captain-login');
    }
    }, [token]);
   
    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`,  {
        headers : {
             Authorization: `Bearer ${token}`
        }
    }).then((response) => {
         if(response.status === 200 ) {
            setCaptain(response.data.captain);
            setIsLoading(false);
         }
    }).catch(err => {
         console.log(err);
         localStorage.removeItem('token');
         navigate('/captain-login');
    })

    if(isloading){
        return (
            <div>Loading....</div>
        )
    }

  return (
    <>
        {children}
    </>
  )
}
