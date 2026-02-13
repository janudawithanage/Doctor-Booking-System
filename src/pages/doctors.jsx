import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { specialty } = useParams()
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)

  const applyFilter = () => {
    if (specialty) {
      setFilterDoc(doctors.filter(doc => doc.speciality === specialty))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [specialty])

  return (
    <div>
      <div className='mb-8'>
        <p className='text-gray-700 text-lg font-medium'>Browse through the doctors specialist.</p>
      </div>
      <div className='flex flex-col sm:flex-row items-start gap-8'>
        <button className={`py-2.5 px-4 border-2 rounded-lg text-sm font-medium transition-all sm:hidden ${showFilter ? 'bg-primary text-white border-primary' : 'border-gray-300'}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex-col gap-3 text-sm text-gray-800 ${showFilter ? 'flex' : 'hidden sm:flex'} w-full sm:w-48`}>
          <p onClick={() => specialty === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-full pl-4 py-2.5 border-2 rounded-lg transition-all cursor-pointer font-medium ${specialty === 'General physician' ? 'bg-primary text-white border-primary' : 'border-gray-300 hover:border-primary'}`}>General physician</p>
          <p onClick={() => specialty === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-full pl-4 py-2.5 border-2 rounded-lg transition-all cursor-pointer font-medium ${specialty === 'Gynecologist' ? 'bg-primary text-white border-primary' : 'border-gray-300 hover:border-primary'}`}>Gynecologist</p>
          <p onClick={() => specialty === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-full pl-4 py-2.5 border-2 rounded-lg transition-all cursor-pointer font-medium ${specialty === 'Dermatologist' ? 'bg-primary text-white border-primary' : 'border-gray-300 hover:border-primary'}`}>Dermatologist</p>
          <p onClick={() => specialty === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-full pl-4 py-2.5 border-2 rounded-lg transition-all cursor-pointer font-medium ${specialty === 'Pediatricians' ? 'bg-primary text-white border-primary' : 'border-gray-300 hover:border-primary'}`}>Pediatricians</p>
          <p onClick={() => specialty === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-full pl-4 py-2.5 border-2 rounded-lg transition-all cursor-pointer font-medium ${specialty === 'Neurologist' ? 'bg-primary text-white border-primary' : 'border-gray-300 hover:border-primary'}`}>Neurologist</p>
          <p onClick={() => specialty === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-full pl-4 py-2.5 border-2 rounded-lg transition-all cursor-pointer font-medium ${specialty === 'Gastroenterologist' ? 'bg-primary text-white border-primary' : 'border-gray-300 hover:border-primary'}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {
            filterDoc.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} className='border-0 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-500 bg-white shadow-md hover:shadow-xl group' key={index}>
                <img className='bg-gradient-to-b from-blue-50 to-blue-100 w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300' src={item.image} alt={item.name} />
                <div className='p-5'>
                  <div className='flex items-center gap-2 text-sm text-green-600 mb-3 font-medium'>
                    <span className='w-2.5 h-2.5 bg-green-600 rounded-full animate-pulse'></span>
                    <span>Available</span>
                  </div>
                  <p className='text-gray-900 text-lg font-bold'>{item.name}</p>
                  <p className='text-gray-600 text-sm font-medium mt-2'>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors