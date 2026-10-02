import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import CaptainLogout from './pages/CaptainLogout';
import CaptainRiding from './pages/CaptainRiding';

import { UserDataContext } from './context/UserContext';
import Riding from './pages/Riding';
import FinishRide from './components/FinishRide';
import ConfirmRidePopUp from './components/ConfirmRidePopUp';


export default function App() {

  let ans = useContext(UserDataContext);

  return (
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/Home' element={
        <UserProtectWrapper>
          <Home />
        </UserProtectWrapper>
      } />
      <Route path='/login' element={<UserLogin />} />
      <Route path='/riding' element={<Riding />} />
      <Route path='/riding-verification' element={<ConfirmRidePopUp />} />
      <Route path='/captain-riding' element={<CaptainRiding />} />
      <Route path='/finish-ride' element={<FinishRide /> } />
      <Route path='/signUp' element={<UserSignup />} />
      <Route path='/captain-login' element={<CaptainLogin />} />
      <Route path='/captain-signup' element={<CaptainSignup />} />

      <Route path='/logout' element={<UserProtectWrapper>
        <UserLogout />
      </UserProtectWrapper>} />

      <Route path='/captain-home' element={
        <CaptainProtectWrapper>
          <CaptainHome />
        </CaptainProtectWrapper>
      } />

      <Route path='/captain-logout' element={
        <CaptainProtectWrapper>
            <CaptainLogout />
        </CaptainProtectWrapper>
      } />
    </Routes>
  )
}
