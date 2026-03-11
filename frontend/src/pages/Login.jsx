import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    // TODO: Integrate with backend API
    console.log('Login data:', { email, password })
  }

  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-6 m-auto items-start p-10 min-w-85 sm:min-w-96 border border-gray-700 rounded-2xl bg-slate-800 text-gray-100 text-sm shadow-2xl'>
        <div className='mb-4'>
          <p className='text-3xl font-bold text-gray-100'>Login</p>
          <p className='text-gray-300 mt-2'>Please log in to book appointment</p>
        </div>
        <div className='w-full'>
          <p className='font-semibold text-gray-200 mb-2'>Email</p>
          <input className='border-2 border-gray-600 rounded-lg w-full p-3 mt-1 bg-slate-700 text-gray-100 focus:border-blue-500 focus:outline-none transition-all' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <div className='w-full'>
          <p className='font-semibold text-gray-200 mb-2'>Password</p>
          <input className='border-2 border-gray-600 rounded-lg w-full p-3 mt-1 bg-slate-700 text-gray-100 focus:border-blue-500 focus:outline-none transition-all' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        </div>
        <button type='submit' className='bg-blue-500 text-white w-full py-3 rounded-lg text-base font-semibold hover:shadow-lg hover:bg-blue-600 transition-all duration-300'>Login</button>
        <p className='w-full text-center text-gray-300'>Create a new account? <span onClick={() => navigate('/register')} className='text-blue-400 font-semibold underline cursor-pointer hover:text-blue-300'>Click here</span></p>
      </div>
    </form>
  )
}

export default Login