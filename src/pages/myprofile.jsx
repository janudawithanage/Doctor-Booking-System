import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+1  123 456 7890',
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London"
    },
    gender: 'Male',
    dob: '2000-01-20'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='max-w-2xl flex flex-col gap-4 text-sm'>
      <img className='w-40 rounded-full shadow-lg' src={userData.image} alt="Profile" />
      
      {
        isEdit
          ? <input className='bg-white text-3xl font-bold max-w-60 mt-4 border-2 border-primary p-2 rounded-lg' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='font-bold text-4xl text-gray-900 mt-4'>{userData.name}</p>
      }

      <hr className='bg-gray-300 h-1 border-none my-2' />

      <div>
        <p className='text-primary font-bold underline mt-4 mb-4'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-3 mt-3 text-gray-800'>
          <p className='font-semibold'>Email id:</p>
          <p className='text-primary font-medium'>{userData.email}</p>
          <p className='font-semibold'>Phone:</p>
          {
            isEdit
              ? <input className='bg-gray-50 max-w-64 border border-gray-300 p-2 rounded' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-primary font-medium'>{userData.phone}</p>
          }
          <p className='font-semibold'>Address:</p>
          {
            isEdit
              ? <p>
                <input className='bg-gray-50 w-full border border-gray-300 p-2 rounded mb-2' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                <br />
                <input className='bg-gray-50 w-full border border-gray-300 p-2 rounded' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
              </p>
              : <p className='text-gray-700 font-medium'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>
      </div>

      <div>
        <p className='text-primary font-bold underline mt-6 mb-4'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-3 mt-3 text-gray-800'>
          <p className='font-semibold'>Gender:</p>
          {
            isEdit
              ? <select className='max-w-32 bg-white border-2 border-gray-300 p-2 rounded' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p className='text-gray-700 font-medium'>{userData.gender}</p>
          }
          <p className='font-semibold'>Birthday:</p>
          {
            isEdit
              ? <input className='max-w-40 bg-white border-2 border-gray-300 p-2 rounded' type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
              : <p className='text-gray-700 font-medium'>{userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-12'>
        {
          isEdit
            ? <button className='border-2 border-primary bg-primary text-white px-10 py-2.5 rounded-full hover:shadow-lg transition-all font-semibold' onClick={() => setIsEdit(false)}>Save Information</button>
            : <button className='border-2 border-primary text-primary px-10 py-2.5 rounded-full hover:bg-primary hover:text-white transition-all font-semibold' onClick={() => setIsEdit(true)}>Edit Profile</button>
        }
      </div>
    </div>
  )
}

export default MyProfile