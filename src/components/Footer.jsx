import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-gray-900 to-black text-white mt-20'>
      <div className='max-w-7xl mx-auto px-6 md:px-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 py-16'>
          {/* ----- Logo Section ----- */}
          <div className='md:col-span-1'>
            <img className='mb-6 w-40 filter invert' src={assets.logo} alt="Logo" />
            <p className='text-gray-400 leading-7 text-sm mb-6'>
              Prescripto connects you with trusted healthcare professionals for seamless appointment scheduling.
            </p>
            <div className='flex gap-4'>
              <div className='w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300'>
                <span className='text-white font-bold'>f</span>
              </div>
              <div className='w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300'>
                <span className='text-white font-bold'>𝕏</span>
              </div>
              <div className='w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300'>
                <span className='text-white font-bold'>in</span>
              </div>
            </div>
          </div>

          {/* ----- Quick Links ----- */}
          <div>
            <h3 className='text-lg font-bold mb-6 flex items-center gap-2'>
              <span className='w-1 h-6 bg-primary rounded-full'></span>Quick Links
            </h3>
            <ul className='space-y-3'>
              <li className='text-gray-400 hover:text-primary cursor-pointer transition-colors duration-300 flex items-center gap-2'>
                <span className='text-primary'>→</span> Home
              </li>
              <li className='text-gray-400 hover:text-primary cursor-pointer transition-colors duration-300 flex items-center gap-2'>
                <span className='text-primary'>→</span> All Doctors
              </li>
              <li className='text-gray-400 hover:text-primary cursor-pointer transition-colors duration-300 flex items-center gap-2'>
                <span className='text-primary'>→</span> About Us
              </li>
              <li className='text-gray-400 hover:text-primary cursor-pointer transition-colors duration-300 flex items-center gap-2'>
                <span className='text-primary'>→</span> Contact
              </li>
            </ul>
          </div>

          {/* ----- Company Info ----- */}
          <div>
            <h3 className='text-lg font-bold mb-6 flex items-center gap-2'>
              <span className='w-1 h-6 bg-primary rounded-full'></span>Company
            </h3>
            <ul className='space-y-3'>
              <li className='text-gray-400 hover:text-primary cursor-pointer transition-colors duration-300 flex items-center gap-2'>
                <span className='text-primary'>→</span> About Company
              </li>
              <li className='text-gray-400 hover:text-primary cursor-pointer transition-colors duration-300 flex items-center gap-2'>
                <span className='text-primary'>→</span> Careers
              </li>
              <li className='text-gray-400 hover:text-primary cursor-pointer transition-colors duration-300 flex items-center gap-2'>
                <span className='text-primary'>→</span> Blog
              </li>
              <li className='text-gray-400 hover:text-primary cursor-pointer transition-colors duration-300 flex items-center gap-2'>
                <span className='text-primary'>→</span> Press
              </li>
            </ul>
          </div>

          {/* ----- Contact Info ----- */}
          <div>
            <h3 className='text-lg font-bold mb-6 flex items-center gap-2'>
              <span className='w-1 h-6 bg-primary rounded-full'></span>Get In Touch
            </h3>
            <div className='space-y-6'>
              <div>
                <p className='text-gray-500 text-xs uppercase tracking-wider mb-2'>Phone</p>
                <a href='tel:+12124567890' className='text-white hover:text-primary transition-colors duration-300 font-semibold'>
                  +1-212-456-7890
                </a>
              </div>
              <div>
                <p className='text-gray-500 text-xs uppercase tracking-wider mb-2'>Email</p>
                <a href='mailto:janudawithanage@gmail.com' className='text-white hover:text-primary transition-colors duration-300 font-semibold break-all'>
                  janudawithanage@gmail.com
                </a>
              </div>
              <div>
                <p className='text-gray-500 text-xs uppercase tracking-wider mb-2'>Address</p>
                <p className='text-gray-400 text-sm'>123 Healthcare St, Medical City</p>
              </div>
            </div>
          </div>
        </div>

        {/* ----- Divider ----- */}
        <div className='border-t border-gray-800'></div>

        {/* ----- Bottom Section ----- */}
        <div className='py-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-6'>
            <p className='text-sm text-gray-400'>
              © 2026 <span className='text-primary font-bold'>Prescripto</span> • All Rights Reserved
            </p>
            <div className='flex gap-6 flex-wrap justify-center'>
              <a href='#' className='text-xs text-gray-400 hover:text-primary transition-colors duration-300'>Terms</a>
              <span className='text-gray-700'>|</span>
              <a href='#' className='text-xs text-gray-400 hover:text-primary transition-colors duration-300'>Privacy</a>
              <span className='text-gray-700'>|</span>
              <a href='#' className='text-xs text-gray-400 hover:text-primary transition-colors duration-300'>Cookies</a>
              <span className='text-gray-700'>|</span>
              <a href='#' className='text-xs text-gray-400 hover:text-primary transition-colors duration-300'>Accessibility</a>
            </div>
          </div>
          <p className='text-xs text-gray-500 text-center'>
            Designed with ❤️ by <span className='text-primary font-semibold'>Januda Withanage</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
