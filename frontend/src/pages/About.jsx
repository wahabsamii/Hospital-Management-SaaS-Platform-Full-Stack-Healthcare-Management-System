
import React from 'react'
import { assets } from '../assets/assets'
import {
  FaHeartbeat,
  FaUserMd,
  FaCalendarCheck,
  FaShieldAlt,
  FaBullseye,
  FaEye,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa'

const About = () => {

  const features = [
    {
      icon: <FaCalendarCheck />,
      title: 'EFFICIENCY',
      description: 'Book appointments effortlessly with a streamlined process designed to save your valuable time.',
      number: '01'
    },
    {
      icon: <FaUserMd />,
      title: 'TRUSTED CARE',
      description: 'Connect with experienced healthcare professionals and find the right doctor for your needs.',
      number: '02'
    },
    {
      icon: <FaShieldAlt />,
      title: 'PERSONALIZED EXPERIENCE',
      description: 'Enjoy a convenient healthcare experience designed around your appointments and individual needs.',
      number: '03'
    }
  ]

  return (
    <div className='w-full overflow-hidden'>

      {/* Hero Section */}
      <section className='relative pt-12 md:pt-20 pb-12'>
        <div className='absolute top-10 right-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl -z-10' />

        <div className='text-center max-w-3xl mx-auto px-4'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6'>
            <FaHeartbeat className='text-primary text-sm' />
            <span className='text-xs font-semibold tracking-widest text-primary uppercase'>
              About Prescripto
            </span>
          </div>

          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 tracking-tight leading-tight'>
            Healthcare Made
            <span className='text-primary'> Simple & Accessible</span>
          </h1>

          <p className='text-gray-500 text-sm md:text-base leading-7 mt-5 max-w-2xl mx-auto'>
            We're building a better way to connect patients with healthcare professionals.
            Making every step of your healthcare journey easier, smarter, and more convenient.
          </p>
        </div>
      </section>

      {/* About Introduction */}
      <section className='my-12 md:my-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center'>

          <div className='relative'>
            <div className='absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-2xl -z-10' />

            <img
              className='w-full h-[320px] sm:h-[420px] object-cover rounded-2xl shadow-lg'
              src={assets.about_image}
              alt='About Prescripto healthcare services'
            />

            <div className='absolute -bottom-5 right-5 sm:right-8 bg-white rounded-xl shadow-xl border border-gray-100 p-4 sm:p-5 flex items-center gap-3'>
              <div className='w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-primary'>
                <FaHeartbeat size={21} />
              </div>
              <div>
                <p className='font-bold text-gray-800 text-sm'>Patient First</p>
                <p className='text-xs text-gray-500 mt-1'>Care that matters</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-6 md:py-5'>

            <div>
              <p className='text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-3'>
                Who We Are
              </p>

              <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 leading-snug'>
                Your Trusted Partner in
                <span className='text-primary'> Healthcare Management</span>
              </h2>
            </div>

            <p className='text-gray-500 text-sm md:text-[15px] leading-7'>
              Welcome to Prescripto, your trusted partner in managing your healthcare
              needs conveniently and efficiently. We understand the challenges people
              face when scheduling doctor appointments and managing their healthcare journey.
            </p>

            <p className='text-gray-500 text-sm md:text-[15px] leading-7'>
              Prescripto is committed to excellence in healthcare technology. We continuously
              strive to enhance our platform, integrating modern solutions to improve
              user experience and deliver a convenient service. Whether you're booking
              your first appointment or managing ongoing care, we're here to support
              you every step of the way.
            </p>

            <div className='border-l-4 border-primary bg-blue-50/70 rounded-r-xl p-5 mt-1'>
              <div className='flex items-center gap-2 mb-2'>
                <FaCheckCircle className='text-primary' />
                <h3 className='font-bold text-gray-800'>Our Commitment</h3>
              </div>
              <p className='text-sm text-gray-600 leading-6'>
                Making healthcare access more convenient through technology,
                thoughtful design, and a patient-focused experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className='my-20 md:my-28'>
        <div className='text-center mb-12'>
          <p className='text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3'>
            What Drives Us
          </p>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-800'>
            Our Vision & Purpose
          </h2>
          <p className='text-gray-500 text-sm mt-3 max-w-xl mx-auto leading-6'>
            Everything we build is guided by our commitment to making healthcare
            more accessible and convenient.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

          <div className='group relative overflow-hidden bg-[#f1f6ff] rounded-2xl p-7 md:p-9 border border-blue-100 hover:shadow-lg transition-all duration-300'>
            <div className='absolute -right-8 -top-8 w-40 h-40 bg-blue-200/40 rounded-full blur-2xl' />

            <div className='relative'>
              <div className='w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary text-2xl mb-6'>
                <FaEye />
              </div>

              <h3 className='text-xl font-bold text-gray-800 mb-3'>Our Vision</h3>

              <p className='text-gray-600 text-sm leading-7'>
                To create a seamless healthcare experience for everyone.
                We aim to bridge the gap between patients and healthcare
                providers, making it easier to access the care people need,
                whenever they need it.
              </p>
            </div>
          </div>

          <div className='group relative overflow-hidden bg-[#f4f8f6] rounded-2xl p-7 md:p-9 border border-green-100 hover:shadow-lg transition-all duration-300'>
            <div className='absolute -right-8 -top-8 w-40 h-40 bg-green-200/40 rounded-full blur-2xl' />

            <div className='relative'>
              <div className='w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-green-600 text-2xl mb-6'>
                <FaBullseye />
              </div>

              <h3 className='text-xl font-bold text-gray-800 mb-3'>Our Mission</h3>

              <p className='text-gray-600 text-sm leading-7'>
                To simplify the process of finding healthcare professionals
                and managing appointments through an accessible,
                user-friendly digital healthcare platform.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className='my-20 md:my-28'>

        <div className='flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10'>
          <div>
            <p className='text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3'>
              The Prescripto Advantage
            </p>

            <h2 className='text-2xl sm:text-3xl font-bold text-gray-800'>
              Why Choose Us?
            </h2>
          </div>

          <p className='text-gray-500 text-sm leading-6 max-w-md'>
            We combine convenience, technology, and a patient-first approach
            to make managing healthcare easier.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>

          {features.map((feature) => (
            <div
              key={feature.number}
              className='group relative bg-white border border-gray-200 rounded-2xl p-7 md:p-8 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden'
            >

              <span className='absolute top-5 right-6 text-4xl font-bold text-gray-100 group-hover:text-blue-50 transition-colors'>
                {feature.number}
              </span>

              <div className='relative w-14 h-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300'>
                {feature.icon}
              </div>

              <h3 className='text-base font-bold text-gray-800 mt-7 mb-3'>
                {feature.title}
              </h3>

              <p className='text-sm text-gray-500 leading-7'>
                {feature.description}
              </p>

              <div className='mt-6 flex items-center gap-2 text-primary text-sm font-semibold'>
                <span>Better healthcare experience</span>
                <FaArrowRight className='text-xs group-hover:translate-x-1 transition-transform' />
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Closing CTA */}
      <section className='relative overflow-hidden bg-[#1769d2] rounded-3xl my-20 md:my-28 px-6 py-12 md:px-14 md:py-16 text-center'>

        <div className='absolute -top-20 -right-16 w-64 h-64 rounded-full bg-white/10 blur-2xl' />
        <div className='absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-blue-300/20 blur-2xl' />

        <div className='relative max-w-2xl mx-auto'>
          <div className='w-14 h-14 mx-auto rounded-2xl bg-white/15 flex items-center justify-center text-white text-2xl mb-6'>
            <FaHeartbeat />
          </div>

          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight'>
            Your Health Deserves
            <br className='hidden sm:block' /> Convenient Care
          </h2>

          <p className='text-blue-100 text-sm md:text-base leading-7 mt-5'>
            Take a simpler approach to managing your healthcare.
            Discover doctors and make your appointment journey easier with Prescripto.
          </p>

          <a
            href='/doctors'
            className='inline-flex items-center gap-3 mt-8 px-7 py-3.5 rounded-xl bg-white text-primary font-semibold text-sm hover:bg-blue-50 hover:shadow-lg transition-all duration-300'
          >
            Explore Doctors
            <FaArrowRight className='text-xs' />
          </a>
        </div>

      </section>

    </div>
  )
}

export default About
