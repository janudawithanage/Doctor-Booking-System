import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpeacialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center justify-center gap-8 py-20 text-gray-900 m-auto md:py-[6vw]'>
        <div className='text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>Find by Speciality</h1>
            <p className='sm:w-1/3 text-center text-gray-600 text-base mx-auto'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        </div>
        <div className='flex sm:justify-center gap-6 pt-8 w-full overflow-scroll px-4'>
            {specialityData.map((item, index) => (
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer shrink-0 hover:-translate-y-3 transition-all duration-500 group' key={index} to={`/doctors/${item.speciality}`}>
                    <div className='rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 mb-3'>
                        <img className='w-20 sm:w-28 h-20 sm:h-28 object-cover group-hover:scale-110 transition-transform duration-300' src={item.image} alt={item.name} />
                    </div>
                    <p className='font-medium text-gray-700 group-hover:text-primary transition-colors'>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpeacialityMenu