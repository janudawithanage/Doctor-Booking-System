import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
  // Mock appointments data
  const { doctors } = useContext(AppContext)

  const handleNotImplemented = () => {
    alert('Not implemented yet.')
  }

  const appointments = [
    {
      _id: 'appt1',
      docData: doctors[0],
      slotDate: '25 Feb 2026',
      slotTime: '10:30 AM',
      cancelled: false,
      payment: false,
      isCompleted: false
    },
    {
      _id: 'appt2',
      docData: doctors[2],
      slotDate: '28 Feb 2026',
      slotTime: '2:00 PM',
      cancelled: false,
      payment: true,
      isCompleted: false
    },
    {
      _id: 'appt3',
      docData: doctors[4],
      slotDate: '15 Feb 2026',
      slotTime: '11:00 AM',
      cancelled: false,
      payment: true,
      isCompleted: true
    }
  ]

  return (
    <div>
      <p className='pb-4 mt-12 font-bold text-xl text-gray-900 border-b-2 border-gray-300'>My Appointments</p>
      <div>
        {appointments.map((item, index) => (
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-6 border-b border-gray-300' key={index}>
            <div>
              <img className='w-32 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg shadow-md' src={item.docData.image} alt={item.docData.name} />
            </div>
            <div className='flex-1 text-sm text-gray-800 bg-white p-4 rounded-lg shadow-sm'>
              <p className='text-gray-900 font-bold text-lg'>{item.docData.name}</p>
              <p className='text-gray-700 font-medium text-base mb-3'>{item.docData.speciality}</p>
              <p className='text-gray-900 font-semibold mt-3'>Address:</p>
              <p className='text-gray-700 text-xs'>{item.docData.address.line1}</p>
              <p className='text-gray-700 text-xs'>{item.docData.address.line2}</p>
              <p className='text-gray-700 text-xs mt-2'><span className='text-gray-900 font-bold'>Date & Time:</span> {item.slotDate} | {item.slotTime}</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-end'>
              {!item.cancelled && item.payment && !item.isCompleted && <button onClick={handleNotImplemented} className='text-sm text-gray-700 text-center sm:min-w-48 py-2.5 border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold'>Pay Online</button>}
              {!item.cancelled && !item.isCompleted && <button onClick={handleNotImplemented} className='text-sm text-gray-700 text-center sm:min-w-48 py-2.5 border-2 border-red-500 rounded-lg hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 font-semibold'>Cancel Appointment</button>}
              {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-2.5 border-2 border-red-500 rounded-lg text-red-500 font-semibold bg-red-50'>Appointment Cancelled</button>}
              {item.isCompleted && <button className='sm:min-w-48 py-2.5 border-2 border-green-500 rounded-lg text-green-600 font-semibold bg-green-50'>Completed</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments