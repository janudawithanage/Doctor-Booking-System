import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true); // Change to false initially, set to true after login

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    setToken(false);
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className='flex items-center justify-between text-sm py-5 mb-6 border-b-2 border-b-gray-200 shadow-sm'>
        <img onClick={() => navigate('/')} className='w-44 cursor-pointer hover:opacity-80 transition-opacity' src={assets.logo} alt="Logo" />
        <ul className='hidden md:flex items-center gap-8 font-semibold text-gray-700'>
          <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary border-b-3 border-primary pb-1' : 'hover:text-primary transition-colors'}>
            <li className='py-1'>HOME</li>
           </NavLink>
          <NavLink to='/doctors' className={({ isActive }) => isActive ? 'text-primary border-b-3 border-primary pb-1' : 'hover:text-primary transition-colors'}>
            <li className='py-1'>ALL DOCTORS</li>
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'text-primary border-b-3 border-primary pb-1' : 'hover:text-primary transition-colors'}>
            <li className='py-1'>ABOUT</li>
          </NavLink>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-primary border-b-3 border-primary pb-1' : 'hover:text-primary transition-colors'}>
            <li className='py-1'>CONTACT</li>
          </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
          {
            token 
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-10 h-10 rounded-full shadow-md hover:shadow-lg transition-shadow' src={assets.profile_pic} alt="Profile" />
                <img className='w-2.5 text-gray-700' src={assets.dropdown_icon} alt="Dropdown" />
                <div className='absolute top-0 right-0 pt-16 text-base font-medium z-20 hidden group-hover:block'>
                  <div className='min-w-48 bg-white rounded-lg shadow-2xl flex flex-col gap-3 p-5 border border-gray-100'>
                    <p onClick={() => navigate('/my-profile')} className='text-gray-800 hover:text-primary cursor-pointer font-medium transition-colors'>My Profile</p>
                    <p onClick={() => navigate('/my-appointments')} className='text-gray-800 hover:text-primary cursor-pointer font-medium transition-colors'>My Appointments</p>
                    <hr className='border-gray-200' />
                    <p onClick={handleLogout} className='text-red-600 hover:text-red-700 cursor-pointer font-medium transition-colors'>Logout</p>
                  </div>
                </div>
              </div>
            : <div className='flex items-center gap-3'>
                <button onClick={handleLogin} className='bg-white text-primary border-2 border-primary px-6 py-2.5 rounded-full font-semibold hidden md:block hover:bg-primary hover:text-white transition-all duration-300'>Login</button>
                <button onClick={() => navigate('/register')} className='bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hidden md:block hover:shadow-lg transition-all duration-300'>Create Account</button>
              </div>
          }
        </div>
    </div>
  )
}

export default Navbar 