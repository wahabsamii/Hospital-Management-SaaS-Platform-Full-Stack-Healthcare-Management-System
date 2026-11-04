import React, { useEffect, useContext } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const AllAppointments = () => {

  const { aToken, appointments, cancelAppointment, getAllAppointments } = useContext(AdminContext)
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken])

  return (
    <div className='w-full min-w-0 p-4 md:p-6 lg:p-8'>

      {/* Page Heading */}
      <div className='mb-7'>
        <h1 className='text-2xl font-semibold text-gray-800'>
          All Appointments
        </h1>
        <p className='text-sm text-gray-500 mt-1'>
          Manage and monitor all patient appointments.
        </p>
      </div>

      {/* Appointments Container */}
      <div className='bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden'>

        {/* Card Header */}
        <div className='flex flex-wrap items-center justify-between gap-3 px-5 md:px-7 py-5 border-b border-gray-100'>
          <div>
            <h2 className='text-base md:text-lg font-semibold text-gray-800'>
              Appointment Records
            </h2>
            <p className='text-xs text-gray-400 mt-1'>
              Overview of all scheduled appointments
            </p>
          </div>

          <span className='text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-full'>
            {appointments.length} Appointments
          </span>
        </div>

        {/* Table */}
        <div className='w-full overflow-x-auto max-h-[75vh] overflow-y-auto'>

          {/* Table Header */}
          <div className='min-w-[950px] sticky top-0 z-10 hidden sm:grid grid-cols-[0.5fr_2fr_0.8fr_2fr_2fr_1fr_1fr] gap-3 px-6 py-4 bg-gray-50 border-b border-gray-100 text-xs font-semibold uppercase tracking-wide text-gray-500'>
            <p>#</p>
            <p>Patient</p>
            <p>Age</p>
            <p>Date & Time</p>
            <p>Doctor</p>
            <p>Fees</p>
            <p>Action</p>
          </div>

          {/* Appointment Rows */}
          {appointments.map((item, index) => (
            <div
              key={item._id}
              className='min-w-[950px] grid grid-cols-[0.5fr_2fr_0.8fr_2fr_2fr_1fr_1fr] gap-3 items-center px-6 py-4 border-b border-gray-100 text-sm text-gray-600 hover:bg-gray-50/80 transition-colors'
            >

              {/* Index */}
              <p className='text-gray-400 font-medium'>
                {index + 1}
              </p>

              {/* Patient */}
              <div className='flex items-center gap-3 min-w-0'>
                <img
                  src={item.userData.image}
                  className='w-10 h-10 rounded-full object-cover bg-gray-100'
                  alt=''
                />
                <p className='font-medium text-gray-700 truncate'>
                  {item.userData.name}
                </p>
              </div>

              {/* Age */}
              <p className='text-gray-500'>
                {calculateAge(item.userData.dob)}
              </p>

              {/* Date & Time */}
              <div>
                <p className='text-gray-700 font-medium'>
                  {slotDateFormat(item.slotDate)}
                </p>
                <p className='text-xs text-gray-400 mt-1'>
                  {item.slotTime}
                </p>
              </div>

              {/* Doctor */}
              <div className='flex items-center gap-3 min-w-0'>
                <img
                  src={item.docData.image}
                  className='w-10 h-10 rounded-full object-cover bg-gray-100'
                  alt=''
                />
                <p className='font-medium text-gray-700 truncate'>
                  {item.docData.name}
                </p>
              </div>

              {/* Fees */}
              <p className='font-semibold text-gray-700'>
                {currency}{item.amount}
              </p>

              {/* Status / Action */}
              <div>
                {item.cancelled ? (
                  <span className='inline-flex items-center text-xs font-medium text-red-600 bg-red-50 px-3 py-1.5 rounded-full'>
                    Cancelled
                  </span>
                ) : item.isCompleted ? (
                  <span className='inline-flex items-center text-xs font-medium text-green-600 bg-green-50 px-3 py-1.5 rounded-full'>
                    Completed
                  </span>
                ) : (
                  <button
                    onClick={() => cancelAppointment(item._id)}
                    className='flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-red-500 bg-red-50 hover:bg-red-100 transition-colors text-xs font-medium'
                  >
                    <img
                      src={assets.cancel_icon}
                      className='w-4 h-4'
                      alt=''
                    />
                    Cancel
                  </button>
                )}
              </div>

            </div>
          ))}

          {/* Empty State */}
          {appointments.length === 0 && (
            <div className='flex flex-col items-center justify-center py-16 px-4'>
              <div className='w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4'>
                <img
                  src={assets.appointments_icon}
                  className='w-8 opacity-50'
                  alt=''
                />
              </div>
              <h3 className='text-base font-semibold text-gray-700'>
                No Appointments Found
              </h3>
              <p className='text-sm text-gray-400 mt-1 text-center'>
                Appointments will appear here when patients make bookings.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default AllAppointments