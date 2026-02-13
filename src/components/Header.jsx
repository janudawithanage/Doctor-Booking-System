import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-primary via-blue-500 to-blue-600 rounded-3xl px-4 sm:px-8 md:px-12 lg:px-24 py-8 md:py-0 shadow-2xl overflow-hidden relative'>
      
      {/* Decorative background elements */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -z-10'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -z-10'></div>

        {/* ----- left side ----- */}
        <div className='w-full md:w-1/2 flex flex-col items-start justify-center gap-6 py-8 md:py-12 lg:py-16'>
            <div>
              <p className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-black leading-tight md:leading-snug lg:leading-tight tracking-tight'>
                Book Your <span className='block'>Appointment</span> With Trusted <span className='text-blue-200'>Doctors</span>
              </p>
            </div>
            
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-white text-xs sm:text-sm md:text-base font-light'>
                <img className='w-24 sm:w-28 md:w-32 h-auto' src={assets.group_profiles} alt="Happy patients" />
                <p className='text-sm sm:text-base leading-relaxed'>Simply browse through our extensive list of trusted doctors, schedule your appointment with ease.</p>
            </div>
            
            <a href="#speciality" className='flex items-center justify-center sm:justify-start gap-2 bg-white text-primary px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-bold hover:shadow-2xl hover:scale-110 transition-all duration-300 w-full sm:w-auto'>
                <span>Book Appointment</span>
                <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="Arrow" />
            </a>

            {/* Trust badges */}
            <div className='flex gap-4 sm:gap-6 mt-4 w-full sm:w-auto text-xs sm:text-sm'>
              <div className='flex items-center gap-2 text-white'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center'>
                  <span className='text-lg'>✓</span>
                </div>
                <span>100+ Doctors</span>
              </div>
              <div className='flex items-center gap-2 text-white'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center'>
                  <span className='text-lg'>✓</span>
                </div>
                <span>24/7 Support</span>
              </div>
            </div>
        </div>

        {/* ----- right side ----- */}
        <div className='w-full md:w-1/2 flex items-center justify-center md:justify-end pt-6 md:pt-0'>
            <img className='w-4/5 sm:w-3/4 md:w-full md:max-w-sm lg:max-w-lg xl:max-w-xl drop-shadow-2xl hover:scale-105 transition-transform duration-500' src={assets.header_img} alt="Doctors" />
        </div>
    </div>
  )
}

export default Header