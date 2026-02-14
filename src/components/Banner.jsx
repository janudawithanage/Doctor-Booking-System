import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Banner = () => {
  const navigate = useNavigate()

  return (
    <div className='flex bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 shadow-xl overflow-hidden'>
        {/* ----- Left Side ----- */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
          <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white'>
            <p>Book Appointment</p>
            <p className='mt-4'>With 100+ Trusted Doctors</p>
          </div>
          <button onClick={() => {navigate('/login'); scrollTo(0, 0)}} className='bg-white text-sm sm:text-base text-blue-600 px-8 py-3 rounded-full mt-8 hover:scale-110 hover:shadow-lg transition-all duration-300 font-semibold'>Create Account</button>
        </div>

        {/* ----- Right Side ----- */}
        <div className='hidden md:block md:w-1/2 lg:w-92.5 relative'>
          <img className='w-full absolute bottom-0 right-0 max-w-md drop-shadow-lg' src={assets.appointment_img} alt="Appointment" />
        </div>
    </div>
  )
}

export default Banner