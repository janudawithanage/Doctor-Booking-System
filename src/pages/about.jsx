import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center mb-12'>
        <p className='text-4xl md:text-5xl font-bold text-gray-100'>ABOUT <span className='text-blue-400'>US</span></p>
      </div>

      <div className='my-12 flex flex-col md:flex-row gap-12 items-center'>
        <img className='w-full md:max-w-96 rounded-2xl shadow-lg' src={assets.about_image} alt="About" />
        <div className='flex flex-col justify-center gap-8 md:w-2/4 text-gray-300 leading-relaxed'>
          <p className='text-base'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p className='text-base'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <div>
            <p className='text-gray-100 font-bold text-lg mb-3'>Our Vision</p>
            <p className='text-base'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
          </div>
        </div>
      </div>

      <div className='text-2xl my-8 mb-12'>
        <p className='text-gray-100 font-bold'>WHY <span className='text-blue-400 font-bold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 gap-6'>
        <div className='border-2 border-gray-600 bg-slate-800 px-8 md:px-12 py-10 sm:py-14 flex flex-col gap-6 text-base text-gray-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300 rounded-2xl cursor-pointer shadow-md hover:shadow-xl'>
          <p className='font-bold text-lg'>EFFICIENCY</p>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border-2 border-gray-600 bg-slate-800 px-8 md:px-12 py-10 sm:py-14 flex flex-col gap-6 text-base text-gray-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300 rounded-2xl cursor-pointer shadow-md hover:shadow-xl'>
          <p className='font-bold text-lg'>CONVENIENCE</p>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border-2 border-gray-600 bg-slate-800 px-8 md:px-12 py-10 sm:py-14 flex flex-col gap-6 text-base text-gray-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300 rounded-2xl cursor-pointer shadow-md hover:shadow-xl'>
          <p className='font-bold text-lg'>PERSONALIZATION</p>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About