
import React, { useContext, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {

  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])

  const stats = [
    {
      title: 'Total Doctors',
      value: dashData?.doctors,
      icon: assets.doctor_icon,
      color: 'bg-blue-50',
      accent: 'text-blue-600',
      border: 'hover:border-blue-200',
      description: 'Registered doctors'
    },
    {
      title: 'Appointments',
      value: dashData?.appointments,
      icon: assets.appointments_icon,
      color: 'bg-violet-50',
      accent: 'text-violet-600',
      border: 'hover:border-violet-200',
      description: 'Total bookings'
    },
    {
      title: 'Total Patients',
      value: dashData?.patients,
      icon: assets.patients_icon,
      color: 'bg-emerald-50',
      accent: 'text-emerald-600',
      border: 'hover:border-emerald-200',
      description: 'Registered patients'
    }
  ]

  return dashData && (
    <div className='w-full min-w-0 p-4 md:p-6 lg:p-8'>

      {/* Page Heading */}
      <div className='mb-8'>
        
        <h1 className='text-2xl md:text-3xl font-bold text-gray-800 tracking-tight'>
          Dashboard Overview
        </h1>
        <p className='text-gray-500 text-sm md:text-base mt-2'>
          Monitor your clinic activities and manage recent appointments.
        </p>
      </div>

      {/* Statistics */}
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-10'>

        {stats.map((stat, index) => (
          <div
            key={index}
            className={`group bg-white rounded-2xl border border-gray-100 ${stat.border} p-6 md:p-7 shadow-sm hover:shadow-lg transition-all duration-300`}
          >
            <div className='flex items-center justify-between gap-4'>

              <div>
                <p className='text-sm md:text-base font-medium text-gray-500'>
                  {stat.title}
                </p>

                <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mt-3 tracking-tight'>
                  {stat.value}
                </h2>

                <p className='text-sm text-gray-400 mt-2'>
                  {stat.description}
                </p>
              </div>

              <div className={`${stat.color} w-[72px] h-[72px] md:w-20 md:h-20 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <img
                  className='w-10 h-10 md:w-12 md:h-12 object-contain'
                  src={stat.icon}
                  alt=''
                />
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Latest Bookings */}
      <div className='bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden'>

        {/* Section Header */}
        <div className='flex flex-wrap items-center justify-between gap-4 px-5 md:px-7 py-5 md:py-6 border-b border-gray-100'>

          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center'>
              <img
                className='w-6 h-6 object-contain'
                src={assets.list_icon}
                alt=''
              />
            </div>

            <div>
              <h2 className='text-lg md:text-xl font-bold text-gray-800'>
                Latest Bookings
              </h2>
              <p className='text-sm text-gray-400 mt-1'>
                Recently received appointments
              </p>
            </div>
          </div>

          <span className='px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold'>
            {dashData.latestAppointments.length} Bookings
          </span>

        </div>

        {/* Booking List */}
        <div className='divide-y divide-gray-100'>

          {dashData.latestAppointments.slice(0, 5).length > 0 ? (

            dashData.latestAppointments.slice(0, 5).map((item, index) => (

              <div
                key={index}
                className='flex items-center gap-4 md:gap-5 px-5 md:px-7 py-5 hover:bg-gray-50/80 transition-colors duration-200'
              >

                {/* Doctor Image */}
                <div className='shrink-0'>
                  <img
                    className='w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-4 ring-gray-50'
                    src={item.docData.image}
                    alt={item.docData.name}
                  />
                </div>

                {/* Booking Details */}
                <div className='flex-1 min-w-0'>
                  <h3 className='text-base md:text-lg font-semibold text-gray-800 truncate'>
                    {item.docData.name}
                  </h3>

                  <p className='text-sm text-gray-500 mt-1'>
                    Booking on {slotDateFormat(item.slotDate)}
                  </p>
                </div>

                {/* Booking Status */}
                <div className='flex items-center gap-3 shrink-0'>

                  {item.cancelled ? (
                    <span className='px-3 py-2 rounded-lg bg-red-50 text-red-600 text-xs md:text-sm font-semibold'>
                      Cancelled
                    </span>
                  ) : item.isCompleted ? (
                    <span className='px-3 py-2 rounded-lg bg-green-50 text-green-600 text-xs md:text-sm font-semibold'>
                      Completed
                    </span>
                  ) : (
                    <button
                      onClick={() => cancelAppointment(item._id)}
                      className='w-10 h-10 md:w-11 md:h-11 rounded-xl bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors'
                      title='Cancel appointment'
                    >
                      <img
                        className='w-5 h-5 object-contain'
                        src={assets.cancel_icon}
                        alt='Cancel'
                      />
                    </button>
                  )}

                </div>

              </div>

            ))

          ) : (

            <div className='py-16 px-5 text-center'>
              <div className='w-16 h-16 rounded-2xl bg-gray-50 mx-auto flex items-center justify-center mb-4'>
                <img
                  className='w-8 h-8 opacity-50'
                  src={assets.list_icon}
                  alt=''
                />
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

export default Dashboard
