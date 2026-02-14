import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return ( 
        <div className='flex flex-col items-center justify-center gap-6 my-20 text-gray-900 m-auto md:mx-10'>
            <div className='text-center'>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>Top Doctors to Book</h1>
                <p className='sm:w-1/3 text-center text-gray-600 text-base mx-auto'>Simply browse through our extensive list of trusted doctors.</p>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8 px-3 sm:px-0'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div onClick={()=>navigate(`/appointment/${item._id}`)} className='flex flex-col items-center border-0 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-500 bg-white shadow-md hover:shadow-2xl group' key={index}>
                        <img className='bg-gradient-to-b from-blue-50 to-blue-100 w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300' src={item.image} alt={item.name} />
                        <div className='p-5 w-full flex flex-col items-center'>
                            <div className='flex items-center gap-2 text-sm text-green-600 mb-3 font-medium'>
                                <span className='w-2.5 h-2.5 bg-green-600 rounded-full inline-block animate-pulse'></span>
                                <span>Available</span>
                            </div>
                            <p className='text-gray-900 text-lg font-bold text-center'>{item.name}</p>
                            <p className='text-xs text-gray-600 text-center mt-2 font-medium'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={()=>{navigate('/doctors'); scrollTo(0, 0)}} className='px-12 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full mt-10 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300'>View All Doctors</button>
        </div>
    )
}

export default TopDoctors