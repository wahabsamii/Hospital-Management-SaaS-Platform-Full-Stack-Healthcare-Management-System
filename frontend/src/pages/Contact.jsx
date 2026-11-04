
import React from 'react'
import { assets } from '../assets/assets'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaHeartbeat,
  FaArrowRight,
  FaClock
} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="w-full overflow-hidden">

      {/* Hero Heading */}
      <section className="relative pt-12 md:pt-16 pb-10">
        <div className="absolute top-0 right-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-10" />

        <div className="text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
            <FaHeartbeat className="text-primary text-sm" />
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Get In Touch
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
            CONTACT <span className="text-primary">US</span>
          </h1>

          <p className="text-gray-500 text-sm md:text-base mt-4 max-w-xl mx-auto leading-7">
            Have questions or need assistance? We're here to help.
            Reach out to our team and we'll be happy to assist you.
          </p>
        </div>
      </section>

      {/* Contact Main Section */}
      <section className="my-10 md:my-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Contact Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-2xl -z-10" />

            <img
              src={assets.contact_image}
              alt="Contact Prescripto"
              className="w-full h-[320px] sm:h-[420px] object-cover rounded-2xl shadow-lg"
            />

            <div className="absolute -bottom-5 right-5 sm:right-8 bg-white rounded-xl shadow-xl border border-gray-100 p-4 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                <FaHeartbeat size={20} />
              </div>

              <div>
                <p className="font-bold text-gray-800 text-sm">
                  Prescripto Support
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  We're here to help
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-8">

            {/* Office */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                  <FaMapMarkerAlt size={18} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Our Office
                  </h2>
                  <p className="text-xs text-gray-400 mt-1">
                    Visit or contact our office
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <p className="text-gray-700 font-semibold">
                  KPK, Pakistan
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Peshawar Ring Road
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-5">
                Contact Information
              </h2>

              <div className="flex flex-col gap-4">

                <a
                  href="tel:+12124567890"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <FaPhoneAlt size={17} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 mb-1">Call us</p>
                    <p className="text-sm md:text-base font-semibold text-gray-700 group-hover:text-primary transition-colors">
                      +1-212-456-7890
                    </p>
                  </div>

                  <FaArrowRight className="ml-auto text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="mailto:contact@prescripto.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <FaEnvelope size={17} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 mb-1">Email us</p>
                    <p className="text-sm md:text-base font-semibold text-gray-700 group-hover:text-primary transition-colors break-all">
                      contact@prescripto.com
                    </p>
                  </div>

                  <FaArrowRight className="ml-auto shrink-0 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Send Us a Message Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute left-0 top-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10" />
        <div className="absolute right-0 bottom-10 w-64 h-64 bg-cyan-50 rounded-full blur-3xl -z-10" />

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 px-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-semibold uppercase tracking-widest">
              <FaEnvelope />
              Contact Our Team
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-5">
              Send Us a <span className="text-primary">Message</span>
            </h2>

            <p className="text-gray-500 text-sm md:text-base mt-4 max-w-xl mx-auto leading-7">
              Have something on your mind? Tell us how we can help.
              Our team will be happy to hear from you.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">

              {/* Form Side Information */}
              <div className="relative overflow-hidden bg-primary p-8 md:p-10 text-white md:col-span-2">
                <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full border-[25px] border-white/10" />
                <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full border-[25px] border-white/10" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-8">
                    <FaHeartbeat size={26} />
                  </div>

                  <h3 className="text-2xl font-bold leading-snug">
                    We're Always Ready to Help
                  </h3>

                  <p className="text-blue-100 text-sm leading-7 mt-4">
                    Your healthcare experience matters to us.
                    Contact our support team whenever you need
                    assistance with Prescripto.
                  </p>

                  <div className="mt-10 space-y-6">
                    <div className="flex items-center gap-3">
                      <FaPhoneAlt className="text-blue-200" />
                      <span className="text-sm">
                        +1-212-456-7890
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-blue-200" />
                      <span className="text-sm break-all">
                        contact@prescripto.com
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaMapMarkerAlt className="text-blue-200" />
                      <span className="text-sm">
                        Peshawar, Pakistan
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-7 sm:p-10 md:col-span-3">
                <h3 className="text-2xl font-bold text-gray-800">
                  Get in touch
                </h3>

                <p className="text-sm text-gray-400 mt-2 mb-8">
                  Fill in the details below to reach our team.
                </p>

                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="What is this regarding?"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows="5"
                      placeholder="Write your message here..."
                      className="w-full resize-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-xl text-sm font-semibold shadow-lg shadow-primary/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-xs text-gray-400">
                    We value your privacy and will only use your
                    information to respond to your inquiry.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="relative overflow-hidden bg-[#1769d2] rounded-3xl my-20 md:my-28 px-6 py-12 md:px-14 md:py-14">

        <div className="absolute -top-20 -right-16 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-blue-300/20 blur-2xl" />

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-5">
              <FaBriefcase />
              Careers at Prescripto
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Build the Future of
              <br className="hidden sm:block" />
              Healthcare With Us
            </h2>

            <p className="text-blue-100 text-sm md:text-base leading-7 mt-5">
              We're passionate about making healthcare more accessible.
              Learn more about our teams, explore opportunities, and be part
              of our mission to improve the healthcare experience.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 mt-6 text-blue-100 text-sm">
              <span className="flex items-center gap-2">
                <FaHeartbeat />
                Meaningful work
              </span>

              <span className="flex items-center gap-2">
                <FaClock />
                Growth opportunities
              </span>
            </div>
          </div>

          <div className="shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white/15 border border-white/20 flex items-center justify-center text-white text-5xl md:text-6xl">
              <FaBriefcase />
            </div>

            <button
              type="button"
              className="mt-6 flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-white text-primary font-semibold text-sm hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
            >
              Explore Jobs
              <FaArrowRight className="text-xs" />
            </button>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Contact
