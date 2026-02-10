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
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointments</p>
      <div>
        {appointments.map((item, index) => (
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-32 bg-indigo-50' src={item.docData.image} alt={item.docData.name} />
            </div>
            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-800 font-semibold'>{item.docData.name}</p>
              <p>{item.docData.speciality}</p>
              <p className='text-zinc-700 font-medium mt-1'>Address:</p>
              <p className='text-xs'>{item.docData.address.line1}</p>
              <p className='text-xs'>{item.docData.address.line2}</p>
              <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {item.slotDate} | {item.slotTime}</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-end'>
              {!item.cancelled && item.payment && !item.isCompleted && <button onClick={handleNotImplemented} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>}
              {!item.cancelled && !item.isCompleted && <button onClick={handleNotImplemented} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment</button>}
              {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment cancelled</button>}
              {item.isCompleted && <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Completed</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments