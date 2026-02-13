import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  const handleNotImplemented = () => {
    alert('Not implemented yet.')
  }

  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-700'>
        <p>CONTACT <span className='text-gray-900 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-90' src={assets.contact_image} alt="Contact" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-800'>OUR OFFICE</p>
          <p className='text-gray-700'>00000 Willms Station <br /> Suite 000, Washington, USA</p>
          <p className='text-gray-700'>Tel: (000) 000-0000 <br /> Email: greatstackdev@gmail.com</p>
          <p className='font-semibold text-lg text-gray-800'>CAREERS AT PRESCRIPTO</p>
          <p className='text-gray-700'>Learn more about our teams and job openings.</p>
          <button onClick={handleNotImplemented} className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact