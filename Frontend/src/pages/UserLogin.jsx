import React, { useState , useContext } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';


export default function UserLogin() {
      
  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [userData , setUserData] = useState({});

  const navigate = useNavigate();

  const {user , setUser} = React.useContext(UserDataContext);

  const submitHandler = async(e) => {
    e.preventDefault();
    // setUserData ({
    //   email : email,
    //   password : password,
    // });
    const userData = {
      email: email,
      password: password,
    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login` , userData);

    if(response.status == 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/Home');
    }
    setEmail('');
    setPassword('');
  }

     
  return (
    <div>
            {/* RideX Logo */}
      <div className='absolute top-5 left-35 -translate-x-1/2  bg-white px-5 py-2 rounded-full shadow-lg '>
        <h2 className='text-xl font-extrabold'>
          Ride<span className='text-yellow-400'>X</span>
        </h2>
      </div>

      <div className='px-3 mt-4 flex flex-col'>
        {/* <h1 className='font-semibold'>TK RideX</h1> */}
        <h1 className='font-medium mt-18  text-2xl' > Welcome  Back!</h1>
        <p className='font-medium italic '> Login To Continue </p>

        {/* form pa */}
        <form className='mt-5' onSubmit={(e)=>{submitHandler(e)}} >

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
               setPassword(e.target.value) }}
             />

          <br></br>

          <button className='bg-yellow-300  w-70 mt-5 px-24 py-1 rounded '>Login</button>

        </form>

        <div className='mt-2'>
          <p> New Here!
            <Link to='/signUp' className='text-blue-800'> Create New Account</Link> </p>
        </div>
      </div>


      <div className='px-3 mt-40 w-80' >
        <Link to="/captain-login" className='bg-green-300  mt-15 px-19 py-1.5 rounded '>Sign in as Captain</Link>
      </div>
    </div>
  )
}
