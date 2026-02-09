import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='min-h-[60vh] flex flex-col items-center justify-center text-center px-4'>
      <h1 className='text-6xl font-bold text-primary mb-4'>404</h1>
      <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Page Not Found</h2>
      <p className='text-gray-600 mb-8 max-w-md'>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to='/' 
        className='bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300'
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound
