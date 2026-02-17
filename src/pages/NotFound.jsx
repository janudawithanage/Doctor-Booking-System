import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-slate-900 to-slate-800'>
      <div className='mb-8'>
        <div className='text-9xl font-black text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text mb-4 animate-bounce'>
          404
        </div>
      </div>
      <h2 className='text-4xl md:text-5xl font-bold text-gray-100 mb-4'>Oops! Page Not Found</h2>
      <p className='text-gray-300 text-lg mb-4 max-w-lg'>
        The page you are looking for doesn't exist or has been moved. Let's get you back to the right place.
      </p>
      <div className='flex flex-col sm:flex-row gap-4 mt-10'>
        <Link 
          to='/' 
          className='bg-blue-500 text-white px-10 py-3.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 hover:bg-blue-600 transition-all duration-300'
        >
          Go Back Home
        </Link>
        <Link 
          to='/doctors' 
          className='border-2 border-blue-500 text-blue-400 bg-slate-800 px-10 py-3.5 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'
        >
          Browse Doctors
        </Link>
      </div>
      
      {/* ----- Decorative Elements ----- */}
      <div className='absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-10 blur-xl'></div>
      <div className='absolute bottom-20 right-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-xl'></div>
    </div>
  )
}

export default NotFound
