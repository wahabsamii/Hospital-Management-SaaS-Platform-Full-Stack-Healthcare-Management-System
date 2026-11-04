import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const DoctorDashboard = () => {

  const { dToken, dashData, getDashData, cancelAppointment, completeAppointment } = useContext(DoctorContext)
  const { slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getDashData()
    }
  }, [dToken])

  return dashData && (
    <div className='w-full min-w-0 p-4 md:p-6 lg:p-8'>

      {/* Page Heading */}
      <div className='mb-8'>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-800 tracking-tight'>
          Dashboard Overview
        </h1>
        <p className='text-gray-500 text-sm md:text-base mt-2'>
          Monitor your earnings, patients and recent appointments.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-10'>

        {/* Earnings */}
        <div className='group flex items-center justify-between gap-4 bg-white p-6 md:p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300'>
          <div>
            <p className='text-sm md:text-base font-medium text-gray-500'>
              Total Earnings
            </p>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mt-3 tracking-tight'>
              {currency} {dashData.earnings}
            </h2>
            <p className='text-sm text-gray-400 mt-2'>
              Your total income
            </p>
          </div>

          <div className='w-[72px] h-[72px] md:w-20 md:h-20 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300'>
            <img className='w-10 h-10 md:w-12 md:h-12 object-contain' src={assets.earning_icon} alt="" />
          </div>
        </div>

        {/* Appointments */}
        <div className='group flex items-center justify-between gap-4 bg-white p-6 md:p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-violet-200 transition-all duration-300'>
          <div>
            <p className='text-sm md:text-base font-medium text-gray-500'>
              Appointments
            </p>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mt-3 tracking-tight'>
              {dashData.appointments}
            </h2>
            <p className='text-sm text-gray-400 mt-2'>
              Total bookings
            </p>
          </div>

          <div className='w-[72px] h-[72px] md:w-20 md:h-20 rounded-2xl bg-violet-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300'>
            <img className='w-10 h-10 md:w-12 md:h-12 object-contain' src={assets.appointments_icon} alt="" />
          </div>
        </div>

        {/* Patients */}
        <div className='group flex items-center justify-between gap-4 bg-white p-6 md:p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-300'>
          <div>
            <p className='text-sm md:text-base font-medium text-gray-500'>
              Total Patients
            </p>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mt-3 tracking-tight'>
              {dashData.patients}
            </h2>
            <p className='text-sm text-gray-400 mt-2'>
              Registered patients
            </p>
          </div>

          <div className='w-[72px] h-[72px] md:w-20 md:h-20 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300'>
            <img className='w-10 h-10 md:w-12 md:h-12 object-contain' src={assets.patients_icon} alt="" />
          </div>
        </div>

      </div>

      {/* Latest Bookings */}
      <div className='bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden'>

        {/* Section Header */}
        <div className='flex flex-wrap items-center justify-between gap-4 px-5 md:px-7 py-5 md:py-6 border-b border-gray-100'>

          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center'>
              <img className='w-6 h-6 object-contain' src={assets.list_icon} alt="" />
            </div>

            <div>
              <h2 className='text-lg md:text-xl font-bold text-gray-800'>
                Latest Bookings
              </h2>
              <p className='text-sm text-gray-400 mt-1'>
                Your recently received appointments
              </p>
            </div>
          </div>

          <span className='px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold'>
            {dashData.latestAppointments.length} Bookings
          </span>

        </div>

        {/* Booking List */}
        <div className='divide-y divide-gray-100'>

          {dashData.latestAppointments.slice(0, 5).map((item, index) => (

            <div
              className='flex items-center gap-4 md:gap-5 px-5 md:px-7 py-5 hover:bg-gray-50/80 transition-colors duration-200'
              key={index}
            >

              {/* Patient Image */}
              <div className='shrink-0'>
                <img
                  className='w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-4 ring-gray-50'
                  src={item.userData.image}
                  alt=""
                />
              </div>

              {/* Patient Details */}
              <div className='flex-1 min-w-0'>
                <p className='text-base md:text-lg font-semibold text-gray-800 truncate'>
                  {item.userData.name}
                </p>
                <p className='text-sm text-gray-500 mt-1'>
                  Booking on {slotDateFormat(item.slotDate)}
                </p>
              </div>

              {/* Appointment Actions */}
              <div className='flex items-center gap-2 md:gap-3 shrink-0'>

                {item.cancelled
                  ? (
                    <span className='px-3 py-2 rounded-lg bg-red-50 text-red-600 text-xs md:text-sm font-semibold'>
                      Cancelled
                    </span>
                  )
                  : item.isCompleted
                    ? (
                      <span className='px-3 py-2 rounded-lg bg-green-50 text-green-600 text-xs md:text-sm font-semibold'>
                        Completed
                      </span>
                    )
                    : (
                      <div className='flex items-center gap-2'>
                        <button
                          onClick={() => cancelAppointment(item._id)}
                          className='w-10 h-10 md:w-11 md:h-11 rounded-xl bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors'
                          title='Cancel appointment'
                        >
                          <img className='w-5 h-5 object-contain' src={assets.cancel_icon} alt="Cancel" />
                        </button>

                        <button
                          onClick={() => completeAppointment(item._id)}
                          className='w-10 h-10 md:w-11 md:h-11 rounded-xl bg-green-50 hover:bg-green-100 flex items-center justify-center transition-colors'
                          title='Complete appointment'
                        >
                          <img className='w-5 h-5 object-contain' src={assets.tick_icon} alt="Complete" />
                        </button>
                      </div>
                    )
                }

              </div>

            </div>

          ))}

          {dashData.latestAppointments.length === 0 && (
            <div className='py-16 px-5 text-center'>
              <div className='w-16 h-16 rounded-2xl bg-gray-50 mx-auto flex items-center justify-center mb-4'>
                <img className='w-8 h-8 opacity-50' src={assets.list_icon} alt="" />
              </div>

              <h3 className='text-lg font-semibold text-gray-700'>
                No bookings yet
              </h3>

              <p className='text-sm text-gray-400 mt-2'>
                New appointments will appear here.
              </p>
            </div>
          )}

        </div>

      </div>

    </div>
  )
}

export default DoctorDashboard