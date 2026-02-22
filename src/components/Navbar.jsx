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
    <div className='flex items-center justify-between text-sm py-5 border-b-2 border-b-gray-200 shadow-sm bg-[#1e293b]'>
        <img onClick={() => navigate('/')} className='w-44 cursor-pointer hover:opacity-80 transition-opacity' src={assets.logo} alt="Logo" />
        
        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center gap-8 font-semibold text-white'>
          <NavLink to='/' className={({ isActive }) => isActive ? 'text-yellow-400 border-b-4 border-yellow-400 pb-1' : 'hover:text-yellow-300 transition-colors'}>
            <li className='py-1'>HOME</li>
           </NavLink>
          <NavLink to='/doctors' className={({ isActive }) => isActive ? 'text-yellow-400 border-b-4 border-yellow-400 pb-1' : 'hover:text-yellow-300 transition-colors'}>
            <li className='py-1'>ALL DOCTORS</li>
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'text-yellow-400 border-b-4 border-yellow-400 pb-1' : 'hover:text-yellow-300 transition-colors'}>
            <li className='py-1'>ABOUT</li>
          </NavLink>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-yellow-400 border-b-4 border-yellow-400 pb-1' : 'hover:text-yellow-300 transition-colors'}>
            <li className='py-1'>CONTACT</li>
          </NavLink>
        </ul>

        <div className='flex items-center gap-4'>
          {/* Mobile Menu Button */}
          <img 
            onClick={() => setShowMenu(!showMenu)}
            className='w-6 md:hidden cursor-pointer' 
            src={assets.menu_icon} 
            alt="Menu" 
          />

          {
            token 
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-10 h-10 rounded-full shadow-md hover:shadow-lg transition-shadow' src={assets.profile_pic} alt="Profile" />
                <img className='w-2.5 text-gray-700 hidden md:block' src={assets.dropdown_icon} alt="Dropdown" />
                <div className='absolute top-0 right-0 pt-16 text-base font-medium z-20 hidden group-hover:block'>
                  <div className='min-w-48 bg-[#1e293b] rounded-lg shadow-2xl flex flex-col gap-3 p-5 border border-gray-100'>
                    <p onClick={() => navigate('/my-profile')} className='text-white hover:text-yellow-300 cursor-pointer font-medium transition-colors'>My Profile</p>
                    <p onClick={() => navigate('/my-appointments')} className='text-white hover:text-yellow-300 cursor-pointer font-medium transition-colors'>My Appointments</p>
                    <hr className='border-gray-200' />
                    <p onClick={handleLogout} className='text-red-400 hover:text-red-600 cursor-pointer font-medium transition-colors'>Logout</p>
                  </div>
                </div>
              </div>
            : <div className='flex items-center gap-3'>
                <button onClick={handleLogin} className='bg-white text-blue-600 border-2 border-blue-600 px-6 py-2.5 rounded-full font-semibold hidden md:block hover:bg-blue-600 hover:text-white transition-all duration-300'>Login</button>
                <button onClick={() => navigate('/register')} className='bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2.5 rounded-full font-semibold hidden md:block hover:shadow-lg transition-all duration-300'>Create Account</button>
              </div>
          }
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <ul className='absolute top-16 left-0 right-0 bg-[#1e293b] flex flex-col gap-4 p-5 font-semibold text-white md:hidden border-b-2 border-b-gray-200 z-50'>
            <NavLink 
              to='/' 
              onClick={() => setShowMenu(false)}
              className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300 transition-colors'}>
              <li className='py-2'>HOME</li>
            </NavLink>
            <NavLink 
              to='/doctors' 
              onClick={() => setShowMenu(false)}
              className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300 transition-colors'}>
              <li className='py-2'>ALL DOCTORS</li>
            </NavLink>
            <NavLink 
              to='/about' 
              onClick={() => setShowMenu(false)}
              className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300 transition-colors'}>
              <li className='py-2'>ABOUT</li>
            </NavLink>
            <NavLink 
              to='/contact' 
              onClick={() => setShowMenu(false)}
              className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300 transition-colors'}>
              <li className='py-2'>CONTACT</li>
            </NavLink>
            {!token && (
              <>
                <button 
                  onClick={() => {
                    handleLogin();
                    setShowMenu(false);
                  }} 
                  className='bg-white text-blue-600 border-2 border-blue-600 px-6 py-2.5 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 w-full'>
                  Login
                </button>
                <button 
                  onClick={() => {
                    navigate('/register');
                    setShowMenu(false);
                  }} 
                  className='bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all duration-300 w-full'>
                  Create Account
                </button>
              </>
            )}
          </ul>
        )}
    </div>
  )
}

export default Navbar 