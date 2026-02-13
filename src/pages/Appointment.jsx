import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const handleNotImplemented = () => {
    alert('Not implemented yet.')
  }

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlots = async () => {
    setDocSlots([])

    // getting current date
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      // setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

        // add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        // Increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [docId])

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots)
  }, [docSlots])

  return docInfo && (
    <div>
      {/* ----- Doctor Details ----- */}
      <div className='flex flex-col sm:flex-row gap-8 mb-8'>
        <div>
          <img className='bg-gradient-to-b from-primary to-blue-600 w-full sm:max-w-80 rounded-2xl shadow-lg' src={docInfo.image} alt={docInfo.name} />
        </div>

        <div className='flex-1 border-0 rounded-2xl p-8 bg-white shadow-lg'>
          {/* ----- Doc Info: name, degree, experience ----- */}
          <p className='flex items-center gap-2 text-3xl font-bold text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="Verified" />
          </p>
          <div className='flex items-center gap-3 text-sm mt-3 text-gray-700'>
            <p className='font-medium'>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-1 px-3 border-2 border-primary text-xs rounded-full font-semibold text-primary hover:bg-primary hover:text-white transition-all'>{docInfo.experience}</button>
          </div>

          {/* ----- Doctor About ----- */}
          <div className='mt-6'>
            <p className='flex items-center gap-2 text-base font-bold text-gray-900 mb-3'>
              About <img src={assets.info_icon} alt="Info" />
            </p>
            <p className='text-sm text-gray-700 max-w-175 leading-relaxed'>{docInfo.about}</p>
          </div>
          <p className='text-gray-800 font-bold mt-6 text-lg'>
            Appointment fee: <span className='text-primary'>${docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* ----- Booking slots ----- */}
      <div className='sm:ml-80 mt-8 font-semibold text-gray-900'>
        <p className='text-lg mb-4'>Select Appointment Date</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll pb-3'>
          {
            docSlots.length && docSlots.map((item, index) => (
              <div onClick={() => setSlotIndex(index)} className={`text-center py-4 px-3 min-w-20 rounded-xl cursor-pointer font-medium border-2 transition-all ${slotIndex === index ? 'bg-primary text-white border-primary' : 'border-gray-300 text-gray-700 hover:border-primary'}`} key={index}>
                <p className='text-sm'>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p className='text-base'>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-6 pb-3'>
          {docSlots.length && docSlots[slotIndex].map((item, index) => (
            <p onClick={() => setSlotTime(item.time)} className={`text-sm font-medium shrink-0 px-5 py-2 rounded-full cursor-pointer border-2 transition-all ${item.time === slotTime ? 'bg-primary text-white border-primary' : 'text-gray-700 border-gray-300 hover:border-primary'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button onClick={handleNotImplemented} className='bg-gradient-to-r from-primary to-blue-600 text-white text-base font-semibold px-16 py-3 rounded-full my-8 hover:shadow-lg hover:scale-105 transition-all duration-300'>Book an Appointment</button>
      </div>

      {/* ----- Related Doctors ----- */}
      <div className='flex flex-col items-center justify-center gap-6 my-20 text-gray-900 m-auto md:mx-10'>
        <div className='text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Related Doctors</h1>
          <p className='sm:w-1/3 text-center text-gray-600 text-base mx-auto'>Simply browse through our extensive list of trusted doctors.</p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5 px-3 sm:px-0'>
          {doctors.filter(doc => doc.speciality === docInfo.speciality && doc._id !== docId).slice(0, 5).map((item, index) => (
            <div onClick={() => { window.scrollTo(0, 0); window.location.href = `/appointment/${item._id}` }} className='flex flex-col items-center border-0 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-500 bg-white shadow-md hover:shadow-xl group' key={index}>
              <img className='bg-gradient-to-b from-blue-50 to-blue-100 w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300' src={item.image} alt={item.name} />
              <div className='p-5 w-full flex flex-col items-center'>
                <div className='flex items-center gap-2 text-sm text-green-600 mb-3 font-medium'>
                  <span className='w-2.5 h-2.5 bg-green-600 rounded-full inline-block animate-pulse'></span>
                  <span>Available</span>
                </div>
                <p className='text-gray-900 text-lg font-bold'>{item.name}</p>
                <p className='text-xs text-gray-600 text-center mt-2 font-medium'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Appointment