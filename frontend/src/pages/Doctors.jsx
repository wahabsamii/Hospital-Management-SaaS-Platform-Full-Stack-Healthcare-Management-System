
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'
import {
  FaArrowRight,
  FaFilter,
  FaUserMd,
  FaStethoscope,
  FaSearch,
  FaCalendarCheck
} from 'react-icons/fa'

const Doctors = () => {
  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div className="w-full pb-16">

      {/* Page Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-6 py-12 md:px-12 md:py-16 mb-10">
        <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm">
            <FaUserMd />
            Find Your Specialist
          </div>

          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Find the Right Doctor
            <span className="block text-primary">For Your Health</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
            Browse our network of experienced healthcare professionals.
            Choose a specialist and take the next step towards better health.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                <FaStethoscope />
              </span>
              Qualified Specialists
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                <FaCalendarCheck />
              </span>
              Easy Appointments
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-8 hidden text-[150px] text-primary/5 md:block">
          <FaUserMd />
        </div>
      </section>

      {/* Directory Heading */}
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Medical Team
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-800 md:text-3xl">
            Browse Doctors
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Select a specialist to find the care you need.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaUserMd className="text-primary" />
          <span>{filterDoc.length} doctors found</span>
        </div>
      </div>

      {/* Main Directory */}
      <div className="flex flex-col items-start gap-7 lg:flex-row">

        {/* Filters */}
        <aside className="w-full shrink-0 lg:sticky lg:top-5 lg:w-64">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className={`flex w-full items-center justify-between rounded-xl border px-5 py-3.5 text-sm font-semibold transition-all lg:hidden ${
              showFilter
                ? 'border-primary bg-primary text-white'
                : 'border-gray-200 bg-white text-gray-700'
            }`}
          >
            <span className="flex items-center gap-3">
              <FaFilter />
              Filter by speciality
            </span>
            <span>{showFilter ? '−' : '+'}</span>
          </button>

          <div className={`${showFilter ? 'flex' : 'hidden'} mt-3 w-full flex-col gap-2 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm lg:mt-0 lg:flex`}>
            <div className="mb-3 hidden lg:block">
              <div className="flex items-center gap-2 text-gray-800">
                <FaFilter className="text-primary" />
                <h3 className="font-bold">Specialities</h3>
              </div>
              <p className="mt-1 text-xs text-gray-400">
                Find doctors by expertise
              </p>
            </div>

            {[
              'General physician',
              'Gynecologist',
              'Dermatologist',
              'Pediatricians',
              'Neurologist',
              'Gastroenterologist'
            ].map((item) => (
              <p
                key={item}
                onClick={() =>
                  speciality === item
                    ? navigate('/doctors')
                    : navigate(`/doctors/${item}`)
                }
                className={`group flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 text-sm transition-all duration-300 ${
                  speciality === item
                    ? 'border-blue-100 bg-blue-50 font-semibold text-primary shadow-sm'
                    : 'border-transparent bg-gray-50 text-gray-600 hover:border-blue-100 hover:bg-blue-50 hover:text-primary'
                }`}
              >
                {item}
                <FaArrowRight className={`text-xs transition-all ${
                  speciality === item
                    ? 'translate-x-0 text-primary'
                    : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                }`} />
              </p>
            ))}
          </div>
        </aside>

        {/* Doctor Cards */}
        <div className="w-full min-w-0 flex-1">
          {filterDoc.length > 0 ? (
            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

              {filterDoc.map((item, index) => (
                <div
                  onClick={() => {
                    navigate(`/appointment/${item._id}`)
                    scrollTo(0, 0)
                  }}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/50"
                  key={index}
                >
                  {/* Doctor Image */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-[#EAEFFF]">
                    <img
                      className="h-64 w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 sm:h-60"
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="absolute left-4 top-4">
                      <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur-md ${
                        item.available
                          ? 'border-green-100 bg-white/95 text-green-600'
                          : 'border-gray-200 bg-white/95 text-gray-500'
                      }`}>
                        <span className={`h-2 w-2 rounded-full ${
                          item.available ? 'bg-green-500' : 'bg-gray-400'
                        }`} />
                        {item.available ? 'Available' : 'Not Available'}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-md transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <FaArrowRight className="text-sm" />
                    </div>
                  </div>

                  {/* Doctor Details */}
                  <div className="p-5">
                    <p className="text-lg font-bold text-gray-800 transition-colors group-hover:text-primary">
                      {item.name}
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-primary">
                        <FaStethoscope className="text-xs" />
                      </span>
                      <p className="text-sm font-medium text-gray-500">
                        {item.speciality}
                      </p>
                    </div>

                    <div className="mt-5 border-t border-gray-100 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-400">
                          View doctor profile
                        </span>
                        <span className="flex items-center gap-2 text-xs font-bold text-primary">
                          Book Appointment
                          <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          ) : (
            <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                <FaSearch size={24} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-800">
                No doctors found
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                We couldn't find any doctors for this speciality.
                Try browsing all available specialists.
              </p>

              <button
                onClick={() => navigate('/doctors')}
                className="mt-6 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
              >
                View All Doctors
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Doctors
