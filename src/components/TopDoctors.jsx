import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return ( 
        <div className='flex flex-col items-center justify-center gap-4 my-16 text-gray-900 m-auto md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
            <div className='w-full grid grid-cols-1 sm:grid-cols- md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 px-3 sm:px-0'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div onClick={()=>navigate(`/appointment/${item._id}`)} className='flex flex-col items-center border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-500 bg-white shadow-sm' key={index}>
                        <img className='bg-blue-50 w-full h-auto object-contain' src={item.image} alt={item.name} />
                        <div className='p-4 w-full flex flex-col items-center'>
                            <div className='flex items-center gap-2 text-sm text-green-500 mb-2'>
                                <span className='w-2 h-2 bg-green-500 rounded-full inline-block'></span>
                                <span>Available</span>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-xs text-gray-600 text-center'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={()=>{navigate('/doctors'); scrollTo(0, 0)}} className=' px-12 py-3 bg-blue-50 text-gray-600 rounded-full mt-10'>more</button>
        </div>
    )
}

export default TopDoctors