
import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaHeartbeat } from 'react-icons/fa'

const SpecialityMenu = () => {
  return (
    <section
      id="speciality"
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Background Decorations */}
      <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl -z-10" />
      <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <FaHeartbeat className="text-primary text-sm" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Healthcare Specialists
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Find by <span className="text-primary">Speciality</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
            Explore our wide range of medical specialists and find
            the right doctor for your healthcare needs. Quality care
            starts with the right specialist.
          </p>
        </div>

        {/* Speciality Cards */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-6">
          {specialityData.map((item, index) => (
            <Link
              to={`/doctors/${item.speciality}`}
              onClick={() => scrollTo(0, 0)}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/60 sm:p-6"
              key={index}
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon Image */}
              <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-[#EAEFFF] p-3 transition-all duration-500 group-hover:scale-105 group-hover:shadow-md sm:h-28 sm:w-28">
                <img
                  src={item.image}
                  alt={item.speciality}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Speciality Name */}
              <div className="relative mt-5 flex min-h-[48px] flex-col items-center justify-center">
                <h3 className="text-sm font-semibold leading-5 text-gray-700 transition-colors duration-300 group-hover:text-primary">
                  {item.speciality}
                </h3>
              </div>

              {/* Explore Link */}
              <div className="relative mt-3 flex items-center gap-2 text-xs font-semibold text-primary opacity-70 transition-all duration-300 group-hover:gap-3 group-hover:opacity-100">
                Explore
                <FaArrowRight className="text-[10px]" />
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-500 group-hover:w-1/2" />
            </Link>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 flex items-center justify-center gap-2 text-center text-xs text-gray-400 sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Find the specialist you need and book your appointment with ease.
        </div>

      </div>
    </section>
  )
}

export default SpecialityMenu
