import React from 'react'
import { Route, Routes } from 'react-router-dom'  
import Home from './pages/home'
import Doctors from './pages/Doctors'
import Login from './pages/login'
import Register from './pages/Register'
import About from './pages/about'
import Contact from './pages/Contact'
import MyProfile from './pages/myprofile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
    
const App = () => {
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900'>
      <div className='flex-grow'>
        <div className='mx-4 sm:mx-[10%]'>
          <Navbar />
          <main className='py-8'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/doctors' element={<Doctors />} />
              <Route path='/doctors/:specialty' element={<Doctors />} />
              <Route path='/login' element={<Login />} /> 
              <Route path='/register' element={<Register />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/my-profile' element={<MyProfile />} />
              <Route path='/my-appointments' element={<MyAppointments />} />
              <Route path='/appointment/:docId' element={<Appointment />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
