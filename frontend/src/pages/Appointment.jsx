
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'
import axios from 'axios'
import { toast } from 'react-toastify'
import {
    FaArrowRight,
    FaCalendarAlt,
    FaClock,
    FaGraduationCap,
    FaShieldAlt,
    FaUserMd,
    FaInfoCircle
} from 'react-icons/fa'

const Appointment = () => {

    const { docId } = useParams()
    const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const [docInfo, setDocInfo] = useState(false)
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const navigate = useNavigate()

    const fetchDocInfo = async () => {
        const docInfo = doctors.find((doc) => doc._id === docId)
        setDocInfo(docInfo)
    }

    const getAvailableSolts = async () => {

        setDocSlots([])

        let today = new Date()

        for (let i = 0; i < 7; i++) {

            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0)

            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }

            let timeSlots = []

            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

                let day = currentDate.getDate()
                let month = currentDate.getMonth() + 1
                let year = currentDate.getFullYear()

                const slotDate = day + "_" + month + "_" + year
                const slotTime = formattedTime

                const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true

                if (isSlotAvailable) {
                    timeSlots.push({
                        datetime: new Date(currentDate),
                        time: formattedTime
                    })
                }

                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }

            setDocSlots(prev => ([...prev, timeSlots]))
        }
    }

    const bookAppointment = async () => {

        if (!token) {
            toast.warning('Login to book appointment')
            return navigate('/login')
        }

        const date = docSlots[slotIndex][0].datetime

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        const slotDate = day + "_" + month + "_" + year

        try {

            const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { docId, slotDate, slotTime }, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                getDoctosData()
                navigate('/my-appointments')
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (doctors.length > 0) {
            fetchDocInfo()
        }
    }, [doctors, docId])

    useEffect(() => {
        if (docInfo) {
            getAvailableSolts()
        }
    }, [docInfo])

    return docInfo ? (
        <div className="mx-auto max-w-7xl pb-16">

            {/* Doctor Profile */}
            <section className="relative mb-12 mt-6 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">

                <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />

                <div className="relative flex flex-col gap-7 p-5 sm:p-7 md:flex-row md:items-center md:gap-9 md:p-9">

                    {/* Doctor image */}
                    <div className="relative mx-auto w-full max-w-[280px] shrink-0 sm:max-w-[320px] md:mx-0">
                        <div className="overflow-hidden rounded-2xl bg-primary/10">
                            <img
                                className="h-[300px] w-full object-cover object-top sm:h-[340px]"
                                src={docInfo.image}
                                alt={docInfo.name}
                            />
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/95 px-3 py-3 text-sm font-semibold text-emerald-600 shadow-lg backdrop-blur-sm">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                            Verified Medical Professional
                        </div>
                    </div>

                    {/* Doctor information */}
                    <div className="min-w-0 flex-1">

                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
                            <FaUserMd />
                            Doctor Profile
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                                {docInfo.name}
                            </h1>
                            <img
                                className="h-6 w-6 object-contain"
                                src={assets.verified_icon}
                                alt="Verified"
                            />
                        </div>

                        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                            <span className="font-medium text-gray-700">{docInfo.degree}</span>
                            <span className="h-1 w-1 rounded-full bg-gray-300" />
                            <span>{docInfo.speciality}</span>
                            <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                                {docInfo.experience}
                            </span>
                        </div>

                        <div className="my-7 h-px w-full bg-gray-100" />

                        <div>
                            <h3 className="mb-2 flex items-center gap-2 text-base font-bold text-gray-800">
                                About Doctor
                                <FaInfoCircle className="text-sm text-primary" />
                            </h3>
                            <p className="max-w-2xl text-sm leading-7 text-gray-500">
                                {docInfo.about}
                            </p>
                        </div>

                        {/* Fee */}
                        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/10 bg-primary/[0.04] p-4 sm:p-5">
                            <div>
                                <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                                    Consultation Fee
                                </p>
                                <p className="mt-1 text-2xl font-bold text-gray-900">
                                    {currencySymbol}{docInfo.fees}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-semibold text-primary shadow-sm">
                                <FaShieldAlt />
                                Professional Care
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Appointment Booking */}
            <section className="mb-14">

                <div className="mb-7">
                    <div className="mb-2 flex items-center gap-2 text-primary">
                        <FaCalendarAlt />
                        <span className="text-xs font-bold uppercase tracking-widest">
                            Schedule Your Visit
                        </span>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Book an Appointment
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Choose a convenient date and available time for your consultation.
                    </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">

                    {/* Date selection */}
                    <div>
                        <h3 className="mb-4 flex items-center gap-2 font-semibold text-gray-800">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <FaCalendarAlt size={14} />
                            </span>
                            Select Date
                        </h3>

                        <div className="flex gap-3 overflow-x-auto pb-3">
                            {docSlots.length > 0 && docSlots.map((item, index) => (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSlotIndex(index)
                                        setSlotTime('')
                                    }}
                                    key={index}
                                    className={`flex min-w-[76px] shrink-0 flex-col items-center gap-2 rounded-2xl border px-4 py-4 transition-all duration-200 ${
                                        slotIndex === index
                                            ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20'
                                            : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-primary/40 hover:bg-primary/5'
                                    }`}
                                >
                                    <span className={`text-[10px] font-bold tracking-wider ${
                                        slotIndex === index ? 'text-white/75' : 'text-gray-400'
                                    }`}>
                                        {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                                    </span>

                                    <span className="text-2xl font-bold">
                                        {item[0] && item[0].datetime.getDate()}
                                    </span>

                                    <span className={`text-[10px] ${
                                        slotIndex === index ? 'text-white/75' : 'text-gray-400'
                                    }`}>
                                        {item[0] && item[0].datetime.toLocaleString('default', { month: 'short' })}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Time selection */}
                    <div className="mt-8 border-t border-gray-100 pt-7">
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                            <h3 className="flex items-center gap-2 font-semibold text-gray-800">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <FaClock size={14} />
                                </span>
                                Select Time
                            </h3>

                            <span className="text-xs text-gray-400">
                                {docSlots[slotIndex]?.length || 0} slots available
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {docSlots.length > 0 && docSlots[slotIndex]?.map((item, index) => (
                                <button
                                    type="button"
                                    onClick={() => setSlotTime(item.time)}
                                    key={index}
                                    className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                                        item.time === slotTime
                                            ? 'border-primary bg-primary text-white shadow-md shadow-primary/20'
                                            : 'border-gray-200 bg-white text-gray-600 hover:border-primary hover:bg-primary/5 hover:text-primary'
                                    }`}
                                >
                                    {item.time.toLowerCase()}
                                </button>
                            ))}
                        </div>

                        {docSlots.length > 0 && docSlots[slotIndex]?.length === 0 && (
                            <p className="rounded-xl bg-gray-50 px-4 py-5 text-center text-sm text-gray-500">
                                No available time slots for this date. Please select another date.
                            </p>
                        )}
                    </div>

                    {/* Booking action */}
                    <div className="mt-8 flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-xs text-gray-400">Selected consultation fee</p>
                            <p className="mt-1 text-xl font-bold text-gray-900">
                                {currencySymbol}{docInfo.fees}
                            </p>
                        </div>

                        <button
                            onClick={bookAppointment}
                            disabled={!slotTime}
                            className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-9 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                        >
                            Confirm Appointment
                            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>

                </div>
            </section>

            {/* Related Doctors */}
            <RelatedDoctors speciality={docInfo.speciality} docId={docId} />

        </div>
    ) : null
}

export default Appointment
