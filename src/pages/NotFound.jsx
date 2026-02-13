import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-white to-blue-50'>
      <div className='mb-8'>
        <div className='text-9xl font-black text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text mb-4 animate-bounce'>
          404
        </div>
      </div>
      <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Oops! Page Not Found</h2>
      <p className='text-gray-600 text-lg mb-4 max-w-lg'>
        The page you are looking for doesn't exist or has been moved. Let's get you back to the right place.
      </p>
      <div className='flex flex-col sm:flex-row gap-4 mt-10'>
        <Link 
          to='/' 
          className='bg-gradient-to-r from-primary to-blue-600 text-white px-10 py-3.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300'
        >
          Go Back Home
        </Link>
        <Link 
          to='/doctors' 
          className='border-2 border-primary text-primary px-10 py-3.5 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300'
        >
          Browse Doctors
        </Link>
      </div>
      
      {/* ----- Decorative Elements ----- */}
      <div className='absolute top-20 left-10 w-20 h-20 bg-primary rounded-full opacity-10 blur-xl'></div>
      <div className='absolute bottom-20 right-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-xl'></div>
    </div>
  )
}

export default NotFound
