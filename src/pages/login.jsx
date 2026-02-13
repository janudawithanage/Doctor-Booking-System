import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    if (state === 'Sign Up' && password !== confirmPassword) {
      alert('Passwords do not match.')
      return
    }
    // TODO: Integrate with backend API
  }

  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-6 m-auto items-start p-10 min-w-85 sm:min-w-96 border-0 rounded-2xl bg-white text-gray-800 text-sm shadow-2xl'>
        <div className='mb-4'>
          <p className='text-3xl font-bold text-gray-900'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
          <p className='text-gray-600 mt-2'>Please {state === 'Sign Up' ? "sign up" : "log in"} to book appointment</p>
        </div>
        {
          state === "Sign Up" && (
            <div className='w-full'>
              <p className='font-semibold text-gray-800 mb-2'>Full Name</p>
              <input className='border-2 border-gray-300 rounded-lg w-full p-3 mt-1 focus:border-primary focus:outline-none transition-all' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
            </div>
          )
        }
        <div className='w-full'>
          <p className='font-semibold text-gray-800 mb-2'>Email</p>
          <input className='border-2 border-gray-300 rounded-lg w-full p-3 mt-1 focus:border-primary focus:outline-none transition-all' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <div className='w-full'>
          <p className='font-semibold text-gray-800 mb-2'>Password</p>
          <input className='border-2 border-gray-300 rounded-lg w-full p-3 mt-1 focus:border-primary focus:outline-none transition-all' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        </div>
        {
          state === "Sign Up" && (
            <div className='w-full'>
              <p className='font-semibold text-gray-800 mb-2'>Confirm Password</p>
              <input className='border-2 border-gray-300 rounded-lg w-full p-3 mt-1 focus:border-primary focus:outline-none transition-all' type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} required />
            </div>
          )
        }
        <button type='submit' className='bg-gradient-to-r from-primary to-blue-600 text-white w-full py-3 rounded-lg text-base font-semibold hover:shadow-lg transition-all duration-300'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state === "Sign Up"
            ? <p className='w-full text-center text-gray-700'>Already have an account? <span onClick={() => setState('Login')} className='text-primary font-semibold underline cursor-pointer hover:text-blue-700'>Login here</span></p>
            : <p className='w-full text-center text-gray-700'>Create a new account? <span onClick={() => setState('Sign Up')} className='text-primary font-semibold underline cursor-pointer hover:text-blue-700'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login