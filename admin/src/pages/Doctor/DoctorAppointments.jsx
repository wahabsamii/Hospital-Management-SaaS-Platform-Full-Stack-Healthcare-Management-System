import React from 'react'
import { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const DoctorAppointments = () => {

  const { dToken, appointments, getAppointments, cancelAppointment, completeAppointment } = useContext(DoctorContext)
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getAppointments()
    }
  }, [dToken])

  return (
    <div className='w-full min-w-0 p-4 md:p-6 lg:p-8'>

      {/* Page Heading */}
      <div className='mb-8'>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-800 tracking-tight'>
          All Appointments
        </h1>
        <p className='text-gray-500 text-sm md:text-base mt-2'>
          View and manage all your patient appointments.
        </p>
      </div>

      {/* Appointments Table */}
      <div className='bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden'>

        {/* Table Header */}
        <div className='flex flex-wrap items-center justify-between gap-3 px-5 md:px-7 py-5 border-b border-gray-100'>
          <div className='flex items-center gap-3'>
            <div className='w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center'>
              <img src={assets.list_icon} className='w-5 h-5 object-contain' alt='' />
            </div>

            <div>
              <h2 className='text-lg font-bold text-gray-800'>
                Appointment Records
              </h2>
              <p className='text-sm text-gray-400 mt-1'>
                Your patient booking history
              </p>
            </div>
          </div>

          <span className='px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold'>
            {appointments.length} Appointments
          </span>
        </div>

        {/* Table Scroll Container */}
        <div className='w-full overflow-x-auto max-h-[75vh] overflow-y-auto'>

          {/* Column Headings */}
          <div className='min-w-[950px] grid grid-cols-[0.5fr_2fr_1fr_0.8fr_2fr_1fr_1fr] gap-3 py-4 px-6 md:px-7 bg-gray-50/80 border-b border-gray-100 text-xs font-semibold uppercase tracking-wider text-gray-500 sticky top-0 z-10'>
            <p>#</p>
            <p>Patient</p>
            <p>Payment</p>
            <p>Age</p>
            <p>Date & Time</p>
            <p>Fees</p>
            <p>Action</p>
          </div>

          {/* Appointment Rows */}
          {appointments.map((item, index) => (

            <div
              className='min-w-[950px] grid grid-cols-[0.5fr_2fr_1fr_0.8fr_2fr_1fr_1fr] gap-3 items-center text-sm text-gray-600 py-4 px-6 md:px-7 border-b border-gray-100 hover:bg-gray-50/80 transition-colors duration-200'
              key={index}
            >

              {/* Index */}
              <p className='text-gray-400 font-medium'>
                {index + 1}
              </p>

              {/* Patient */}
              <div className='flex items-center gap-3 min-w-0'>
                <img
                  src={item.userData.image}
                  className='w-11 h-11 rounded-full object-cover ring-4 ring-gray-50 shrink-0'
                  alt=''
                />
                <p className='font-semibold text-gray-800 truncate'>
                  {item.userData.name}
                </p>
              </div>

              {/* Payment */}
              <div>
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                  item.payment
                    ? 'bg-green-50 text-green-600'
                    : 'bg-amber-50 text-amber-600'
                }`}>
                  {item.payment ? 'Online' : 'CASH'}
                </span>
              </div>

              {/* Age */}
              <p className='font-medium text-gray-600'>
                {calculateAge(item.userData.dob)}
              </p>

              {/* Date and Time */}
              <div>
                <p className='font-medium text-gray-700'>
                  {slotDateFormat(item.slotDate)}
                </p>
                <p className='text-xs text-gray-400 mt-1'>
                  {item.slotTime}
                </p>
              </div>

              {/* Fees */}
              <p className='font-semibold text-gray-800'>
                {currency}{item.amount}
              </p>

              {/* Actions / Status */}
              <div className='flex items-center gap-2'>

                {item.cancelled
                  ? (
                    <span className='px-3 py-2 rounded-lg bg-red-50 text-red-600 text-xs font-semibold'>
                      Cancelled
                    </span>
                  )
                  : item.isCompleted
                    ? (
                      <span className='px-3 py-2 rounded-lg bg-green-50 text-green-600 text-xs font-semibold'>
                        Completed
                      </span>
                    )
                    : (
                      <div className='flex items-center gap-2'>
                        <button
                          onClick={() => cancelAppointment(item._id)}
                          className='w-9 h-9 rounded-xl bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors'
                          title='Cancel appointment'
                        >
                          <img src={assets.cancel_icon} className='w-5 h-5 object-contain' alt='Cancel' />
                        </button>

                        <button
                          onClick={() => completeAppointment(item._id)}
                          className='w-9 h-9 rounded-xl bg-green-50 hover:bg-green-100 flex items-center justify-center transition-colors'
                          title='Complete appointment'
                        >
                          <img src={assets.tick_icon} className='w-5 h-5 object-contain' alt='Complete' />
                        </button>
                      </div>
                    )
                }

              </div>

            </div>

          ))}

          {/* Empty State */}
          {appointments.length === 0 && (
            <div className='py-16 px-5 text-center'>
              <div className='w-16 h-16 rounded-2xl bg-gray-50 mx-auto flex items-center justify-center mb-4'>
                <img src={assets.list_icon} className='w-8 h-8 opacity-50' alt='' />
              </div>

              <h3 className='text-lg font-semibold text-gray-700'>
                No appointments found
              </h3>

              <p className='text-sm text-gray-400 mt-2'>
                New patient appointments will appear here.
              </p>
            </div>
          )}

        </div>
      </div>

    </div>
  )
}

export default DoctorAppointments