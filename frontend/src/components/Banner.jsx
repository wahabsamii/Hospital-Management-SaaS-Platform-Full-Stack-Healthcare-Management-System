
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight, FaShieldAlt, FaUserMd } from 'react-icons/fa'

const Banner = () => {
    const navigate = useNavigate()

    return (
        <section className="my-20 md:mx-6 lg:mx-10">
            <div className="relative overflow-hidden rounded-3xl bg-primary">

                {/* Background decoration */}
                <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />
                <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                <div className="relative grid min-h-[360px] grid-cols-1 items-center px-6 pt-10 sm:px-10 md:min-h-[390px] md:grid-cols-2 md:gap-5 md:px-12 lg:px-16">

                    {/* Left content */}
                    <div className="z-10 flex flex-col items-start py-8 md:py-12">

                        <div className="mb-5 flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
                            <FaShieldAlt />
                            Your Health, Our Priority
                        </div>

                        <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Your Health Deserves
                            <br />
                            <span className="text-white/75">The Best Care.</span>
                        </h2>

                        <p className="mt-5 max-w-md text-sm leading-7 text-white/80 sm:text-base">
                            Book appointments with 100+ trusted doctors and
                            take the next step towards a healthier, happier life.
                        </p>

                        <button
                            onClick={() => {
                                navigate('/login')
                                scrollTo(0, 0)
                            }}
                            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            Create Account
                            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>

                        <div className="mt-7 flex flex-wrap items-center gap-5 text-xs font-medium text-white/80">
                            <span className="flex items-center gap-2">
                                <FaUserMd />
                                100+ Trusted Doctors
                            </span>
                            <span className="flex items-center gap-2">
                                <FaShieldAlt />
                                Quality Healthcare
                            </span>
                        </div>
                    </div>

                    {/* Right image */}
                    <div className="relative flex h-[280px] items-end justify-center sm:h-[340px] md:h-[390px] md:self-end">
                        <div className="absolute bottom-8 right-5 h-56 w-56 rounded-full bg-white/10 blur-3xl sm:h-72 sm:w-72" />

                        <img
                            src={assets.appointment_img}
                            alt="Doctor providing healthcare"
                            className="relative z-10 h-full w-full object-contain object-bottom"
                        />

                        {/* Floating trust card */}
                        <div className="absolute bottom-6 left-0 z-20 hidden items-center gap-3 rounded-xl border border-white/20 bg-white/95 p-3 shadow-xl sm:flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <FaUserMd size={18} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-800">
                                    Trusted Professionals
                                </p>
                                <p className="mt-1 text-[10px] text-gray-500">
                                    Care you can count on
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner
