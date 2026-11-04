import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'

const Sidebar = () => {

    const { dToken, setDToken } = useContext(DoctorContext)
    const { aToken, setAToken } = useContext(AdminContext)

    const navigate = useNavigate()

    const logout = () => {
      navigate('/')
      dToken && setDToken('')
      dToken && localStorage.removeItem('dToken')
      aToken && setAToken('')
      aToken && localStorage.removeItem('aToken')
    }

    const linkClass = ({ isActive }) =>
      `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
        isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''
      }`

    return (
      <div className='h-full min-h-screen bg-white border-r flex flex-col'>

        {/* Admin Navigation */}
        {aToken && (
          <ul className='text-[#515151] mt-5'>
            <NavLink to='/admin-dashboard' className={linkClass}>
              <img className='min-w-5' src={assets.home_icon} alt='' />
              <p className='hidden md:block'>Dashboard</p>
            </NavLink>

            <NavLink to='/all-appointments' className={linkClass}>
              <img className='min-w-5' src={assets.appointment_icon} alt='' />
              <p className='hidden md:block'>Appointments</p>
            </NavLink>

            <NavLink to='/add-doctor' className={linkClass}>
              <img className='min-w-5' src={assets.add_icon} alt='' />
              <p className='hidden md:block'>Add Doctor</p>
            </NavLink>

            <NavLink to='/doctor-list' className={linkClass}>
              <img className='min-w-5' src={assets.people_icon} alt='' />
              <p className='hidden md:block'>Doctors List </p>
            </NavLink>
          </ul>
        )}

        {/* Doctor Navigation */}
        {dToken && (
          <ul className='text-[#515151] mt-5'>
            <NavLink to='/doctor-dashboard' className={linkClass}>
              <img className='min-w-5' src={assets.home_icon} alt='' />
              <p className='hidden md:block'>Dashboard</p>
            </NavLink>

            <NavLink to='/doctor-appointments' className={linkClass}>
              <img className='min-w-5' src={assets.appointment_icon} alt='' />
              <p className='hidden md:block'>Appointments</p>
            </NavLink>

            <NavLink to='/doctor-profile' className={linkClass}>
              <img className='min-w-5' src={assets.people_icon} alt='' />
              <p className='hidden md:block'>Profile</p>
            </NavLink>
          </ul>
        )}

        {/* Logout at Bottom */}
        <button
          onClick={logout}
          className='absolute bottom-0 mb-6 flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer text-red-500 hover:bg-red-50 transition-all'
        >
          <span className='text-xl'>↪</span>
          <p className='hidden md:block font-medium'>Logout</p>
        </button>

      </div>
    )
}

export default Sidebar