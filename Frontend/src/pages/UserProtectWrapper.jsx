import { useContext , useEffect, useState } from "react"
import React  from 'react'
import axios from "axios"
import { UserDataContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"

export default function UserProtectWrapper({children}) {

    // const {user} = useContext(UserDataContext);
    // const navigate = useNavigate();

    // if(!user.email){
    //     navigate('/login')
    // }

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const {user , setUser} = useContext(UserDataContext);
    const [isloading , setIsLoading] = useState(true);

    useEffect(() => {
          if(!token){
        navigate('/login');
    }
    }, [token]);

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,  {
        headers : {
             Authorization: `Bearer ${token}`
        }
    }).then((response) => {
         if(response.status === 200 ) {
            setUser(response.data.user);
            setIsLoading(false);
         }
    }).catch(err => {
         console.log(err);
         localStorage.removeItem('token');
         navigate('/login');
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
