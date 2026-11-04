
import React from 'react'
import { assets } from '../assets/assets'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='bg-[#f8fafc] mt-28'>

      <div className='md:mx-10 px-5 md:px-0'>

        <div className='grid grid-cols-1 sm:grid-cols-[2fr_1fr_1.2fr] gap-12 lg:gap-20 py-14 md:py-16'>

          {/* Brand Section */}
          <div>
            <img
              className='w-44 mb-6 object-contain'
              src={assets.logo}
              alt='Prescripto'
            />

            <p className='max-w-lg text-gray-500 leading-7 text-sm md:text-[15px]'>
              Prescripto makes healthcare more accessible and convenient by
              connecting patients with trusted healthcare professionals.
              Discover doctors, book appointments, and manage your healthcare
              journey with ease.
            </p>

            <div className='flex items-center gap-3 mt-7'>
              <span className='w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center'>
                <FaHeart size={14} />
              </span>
              <p className='text-sm text-gray-500'>
                Making healthcare simpler, one appointment at a time.
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className='text-gray-900 font-bold text-base tracking-wide mb-6'>
              COMPANY
            </h3>

            <ul className='flex flex-col gap-4 text-gray-500 text-sm'>
              {['Home', 'About us', 'Delivery', 'Privacy policy'].map((item) => (
                <li key={item}>
                  <a
                    href='#'
                    className='inline-flex items-center gap-1 hover:text-blue-600 transition-colors duration-200 group'
                  >
                    {item}
                    <FiArrowUpRight className='opacity-0 group-hover:opacity-100 transition-opacity' />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className='text-gray-900 font-bold text-base tracking-wide mb-6'>
              GET IN TOUCH
            </h3>

            <div className='flex flex-col gap-5'>

              <a
                href='tel:+12124567890'
                className='flex items-center gap-4 group'
              >
                <span className='w-11 h-11 shrink-0 rounded-xl bg-white border border-gray-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300'>
                  <FaPhoneAlt size={15} />
                </span>
                <div>
                  <p className='text-xs text-gray-400 mb-1'>Call us</p>
                  <p className='text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors'>
                    +1-212-456-7890
                  </p>
                </div>
              </a>

              <a
                href='mailto:contact@prescripto.com'
                className='flex items-center gap-4 group'
              >
                <span className='w-11 h-11 shrink-0 rounded-xl bg-white border border-gray-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300'>
                  <FaEnvelope size={15} />
                </span>
                <div>
                  <p className='text-xs text-gray-400 mb-1'>Email us</p>
                  <p className='text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors'>
                    contact@prescripto.com
                  </p>
                </div>
              </a>

              <div className='flex items-center gap-4'>
                <span className='w-11 h-11 shrink-0 rounded-xl bg-white border border-gray-100 text-blue-600 flex items-center justify-center'>
                  <FaMapMarkerAlt size={15} />
                </span>
                <div>
                  <p className='text-xs text-gray-400 mb-1'>Location</p>
                  <p className='text-sm font-medium text-gray-700'>
                    Gulberg green, BM 192 Floor Lahore
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-200 py-6'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>

            <p className='text-xs md:text-sm text-gray-500 text-center'>
              © {new Date().getFullYear()} Prescripto. All rights reserved.
            </p>

            <p className='text-xs md:text-sm text-gray-500 flex items-center gap-1.5'>
              Designed & Developed
              by
              <Link to={'https://www.wahabsami.dev/'} target='_blank' className='font-semibold text-gray-800'>
                Abdul Wahab
              </Link>
            </p>

          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
