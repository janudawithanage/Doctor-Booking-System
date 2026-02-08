import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-b-lg px-6 md:px-10 lg:px-20'>

        {/* ----- left side ----- */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[6vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                Book Appointment <br /> With Trusted Doctors
            </p>
            <div className='flex items-center gap-3 text-white text-sm font-light'>
                <img className='w-28' src={assets.group_profiles} alt="Happy patients" />
                <p>Simply browse through our extensive list of trusted doctors, <br /> book your appointment with ease.</p>
            </div>
            <a href="#" className='flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full text-sm font-medium'>
                Book Appointment <img className='w-3' src={assets.arrow_icon} alt="Arrow" />
            </a>
        </div>

        {/* ----- right side ----- */}
        <div className='md:w-1/2 flex items-end justify-end'>
            <img className='w-full md:max-w-md lg:max-w-lg' src={assets.header_img} alt="Doctors" />

        </div>
    </div>
  )
}

export default Header