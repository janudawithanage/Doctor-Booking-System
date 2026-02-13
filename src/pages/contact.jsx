import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  const handleNotImplemented = () => {
    alert('Not implemented yet.')
  }

  return (
    <div>
      <div className='text-center mb-10'>
        <p className='text-4xl md:text-5xl font-bold text-gray-900'>CONTACT <span className='text-primary'>US</span></p>
      </div>

      <div className='my-12 flex flex-col md:flex-row gap-12 mb-28 text-sm'>
        <img className='w-full md:max-w-lg rounded-2xl shadow-lg' src={assets.contact_image} alt="Contact" />
        <div className='flex flex-col justify-center items-start gap-8'>
          <div>
            <p className='font-bold text-lg text-gray-900 mb-3'>OUR OFFICE</p>
            <p className='text-gray-700 leading-relaxed'>00000 Willms Station <br /> Suite 000, Washington, USA</p>
          </div>
          <div>
            <p className='font-bold text-gray-900 mb-3'>CONTACT INFO</p>
            <p className='text-gray-700 leading-relaxed'>Tel: (000) 000-0000 <br /> Email: greatstackdev@gmail.com</p>
          </div>
          <div>
            <p className='font-bold text-lg text-gray-900 mb-3'>CAREERS AT PRESCRIPTO</p>
            <p className='text-gray-700 leading-relaxed mb-6'>Learn more about our teams and job openings.</p>
            <button onClick={handleNotImplemented} className='border-2 border-gray-900 px-8 py-3 text-sm font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 rounded-lg'>Explore Jobs</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact