
import React from 'react'
import { assets } from '../assets/assets'
import {
  FaArrowRight,
  FaShieldAlt,
  FaUserMd,
  FaClock,
  FaCalendarCheck
} from 'react-icons/fa'

const Header = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-primary text-white">

      {/* Background decoration */}
      <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      <div className="relative grid min-h-[440px] grid-cols-1 items-center gap-8 px-6 pt-10 sm:px-10 md:min-h-[480px] md:grid-cols-2 md:gap-4 md:px-12 lg:px-16">

        {/* Left content */}
        <div className="z-10 flex flex-col items-start gap-5 py-6 md:py-10">

          <div className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-sm">
            <FaShieldAlt className="text-white" />
            <span>Trusted Healthcare, Made Simple</span>
          </div>

          <h1 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[54px]">
            Your Health.
            <br />
            Your Choice.
            <br />
            <span className="text-white/75">Trusted Doctors.</span>
          </h1>

          <p className="max-w-md text-sm leading-7 text-white/80 sm:text-base">
            Connect with experienced doctors and book your appointment
            effortlessly. Quality healthcare is just a few clicks away.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#speciality"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Book Appointment
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <div className="flex items-center gap-3">
              <img
                src={assets.group_profiles}
                alt="Our patients"
                className="w-24"
              />
              <div>
                <p className="text-sm font-semibold">Trusted by patients</p>
                <p className="text-xs text-white/70">Healthcare you can rely on</p>
              </div>
            </div>
          </div>

          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/80">
            <span className="flex items-center gap-2">
              <FaUserMd /> Expert Specialists
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarCheck /> Easy Booking
            </span>
            <span className="flex items-center gap-2">
              <FaClock /> Quick Appointments
            </span>
          </div>
        </div>

        {/* Right image */}
        <div className="relative flex h-[340px] items-end justify-center md:h-[480px] md:self-end">
          <div className="absolute bottom-8 right-8 h-64 w-64 rounded-full bg-white/10 blur-2xl md:h-80 md:w-80" />

          <img
            src={assets.header_img}
            alt="Doctor ready to help you"
            className="relative z-10 h-full w-full object-contain object-bottom"
          />

          {/* Floating card */}
          <div className="absolute bottom-8 left-0 z-20 hidden items-center gap-3 rounded-xl border border-white/20 bg-white/95 p-3 text-gray-800 shadow-xl sm:flex md:bottom-10 md:left-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FaCalendarCheck size={18} />
            </div>
            <div>
              <p className="text-xs font-bold">Easy Appointments</p>
              <p className="text-[10px] text-gray-500">Book care in minutes</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Header
