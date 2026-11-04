
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { FaArrowRight, FaUserMd, FaCalendarCheck } from 'react-icons/fa'

const TopDoctors = () => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <section className="relative my-20 overflow-hidden">

            {/* Background decoration */}
            <div className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="pointer-events-none absolute bottom-10 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section heading */}
                <div className="mb-10 flex flex-col items-center text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
                        <FaUserMd />
                        Our Medical Experts
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Meet Our <span className="text-primary">Top Doctors</span>
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                        Connect with experienced healthcare professionals who are
                        dedicated to providing you with the best possible care.
                    </p>

                    <div className="mt-5 h-1 w-16 rounded-full bg-primary" />
                </div>

                {/* Doctors grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {doctors.slice(0, 10).map((item, index) => (
                        <div
                            onClick={() => {
                                navigate(`/appointment/${item._id}`)
                                scrollTo(0, 0)
                            }}
                            key={index}
                            className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10"
                        >

                            {/* Doctor image */}
                            <div className="relative overflow-hidden bg-primary/5">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-60 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Availability */}
                                <div className="absolute left-3 top-3">
                                    <span className={`inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/95 px-3 py-1.5 text-[11px] font-semibold shadow-sm backdrop-blur-sm ${
                                        item.available ? 'text-emerald-600' : 'text-gray-500'
                                    }`}>
                                        <span className={`h-2 w-2 rounded-full ${
                                            item.available ? 'bg-emerald-500' : 'bg-gray-400'
                                        }`} />
                                        {item.available ? 'Available' : 'Not Available'}
                                    </span>
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 flex items-end justify-center bg-primary/0 pb-4 transition-all duration-300 group-hover:bg-primary/10">
                                    <span className="translate-y-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        View Profile <FaArrowRight className="ml-1 inline" />
                                    </span>
                                </div>
                            </div>

                            {/* Doctor details */}
                            <div className="p-4">
                                <p className="truncate text-lg font-bold text-gray-900 transition-colors group-hover:text-primary">
                                    {item.name}
                                </p>

                                <p className="mt-1 text-sm text-gray-500">
                                    {item.speciality}
                                </p>

                                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                                    <span className="text-xs font-medium text-gray-400">
                                        Medical Specialist
                                    </span>

                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                        <FaArrowRight size={12} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {/* View all button */}
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={() => {
                            navigate('/doctors')
                            scrollTo(0, 0)
                        }}
                        className="group inline-flex items-center gap-3 rounded-full bg-primary px-9 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
                    >
                        Explore All Doctors
                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>

            </div>
        </section>
    )
}

export default TopDoctors
