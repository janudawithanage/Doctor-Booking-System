import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-primary to-blue-600 rounded-2xl px-6 md:px-10 lg:px-20 shadow-xl'>

        {/* ----- left side ----- */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto md:py-[6vw] md:mb-7.5'>
            <p className='text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight md:leading-tight lg:leading-tight'>
                Book Appointment <br /> With Trusted Doctors
            </p>
            <div className='flex items-center gap-4 text-white text-sm font-light'>
                <img className='w-28' src={assets.group_profiles} alt="Happy patients" />
                <p className='text-base'>Simply browse through our extensive list of trusted doctors, <br /> book your appointment with ease.</p>
            </div>
            <a href="#speciality" className='flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300'>
                Book Appointment <img className='w-3' src={assets.arrow_icon} alt="Arrow" />
            </a>
        </div>

        {/* ----- right side ----- */}
        <div className='md:w-1/2 flex items-end justify-end'>
            <img className='w-full md:max-w-md lg:max-w-lg drop-shadow-lg' src={assets.header_img} alt="Doctors" />

        </div>
    </div>
  )
}

export default Header