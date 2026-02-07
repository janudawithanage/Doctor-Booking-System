import React from 'react'
import { Route, Routes } from 'react-router-dom'  
import Home from './pages/home'
import Doctors from './pages/doctors'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import MyProfile from './pages/myprofile'
import MyAppointments from './pages/myappointments'
import Appointment from './pages/Appointment'
import Navbar from './components/NAvbar'
    
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:specialty' element={<Doctors />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      </Routes>
    </div>
  )
}

export default App
