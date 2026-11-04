import axios from 'axios'
import React, { useContext, useState } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [state, setState] = useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const { setDToken } = useContext(DoctorContext)
  const { setAToken } = useContext(AdminContext)

  const handleAdminLogin = () => {
    setEmail('admin@gmail.com')
    setPassword('admin')
  }

  const handleDoctorLogin = () => {
    setEmail('dr.jennifergarcia@gmail.com')
    setPassword('dr.jennifergarcia@gmail.com')
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    if (loading) return

    setLoading(true)

    try {
      if (state === 'Admin') {
        const { data } = await axios.post(
          backendUrl + '/api/admin/login',
          { email, password }
        )

        if (data.success) {
          setAToken(data.token)
          localStorage.setItem('aToken', data.token)
          navigate('/admin-dashboard')
        } else {
          toast.error(data.message)
        }

      } else {
        const { data } = await axios.post(
          backendUrl + '/api/doctor/login',
          { email, password }
        )

        if (data.success) {
          setDToken(data.token)
          localStorage.setItem('dToken', data.token)
          navigate('/doctor-dashboard')
        } else {
          toast.error(data.message)
        }
      }

    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Login failed. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  const switchRole = (role) => {
    setState(role)
    setEmail('')
    setPassword('')
  }

  return (
    <div className='min-h-[85vh] flex items-center justify-center px-4 py-10'>

      <div className='w-full max-w-md'>

        {/* Login Card */}
        <div className='bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-200/60 p-7 sm:p-9'>

          {/* Heading */}
          <div className='text-center mb-8'>
            <div className='w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.8'
                className='w-7 h-7 text-primary'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 3v18M3 12h18' />
                <path strokeLinecap='round' strokeLinejoin='round' d='M7 7h10v10H7z' opacity='.25' />
              </svg>
            </div>

            <h1 className='text-2xl font-semibold text-gray-800'>
              Welcome Back
            </h1>

            <p className='text-sm text-gray-500 mt-2'>
              Sign in to your Prescripto account
            </p>
          </div>

          {/* Role Switch */}
          <div className='grid grid-cols-2 gap-2 bg-gray-100 p-1.5 rounded-xl mb-7'>
            <button
              type='button'
              onClick={() => switchRole('Admin')}
              className={`py-2.5 rounded-lg text-sm font-medium transition-all ${
                state === 'Admin'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Admin Login
            </button>

            <button
              type='button'
              onClick={() => switchRole('Doctor')}
              className={`py-2.5 rounded-lg text-sm font-medium transition-all ${
                state === 'Doctor'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Doctor Login
            </button>
          </div>

          {/* Form */}
          <form onSubmit={onSubmitHandler} className='flex flex-col gap-5'>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Email Address
              </label>

              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className='w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-gray-400'
                type='email'
                placeholder='Enter your email'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Password
              </label>

              <div className='relative'>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className='w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-sm text-gray-700 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-gray-400'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  required
                />

                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-medium'
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Demo Credentials */}
            <div className='bg-gray-50 border border-gray-100 rounded-xl p-4'>
              <p className='text-xs font-semibold text-gray-600 mb-3'>
                Demo Account
              </p>

              <button
                type='button'
                onClick={state === 'Admin' ? handleAdminLogin : handleDoctorLogin}
                className='text-sm text-primary font-medium hover:underline'
              >
                Use Demo {state} Credentials
              </button>
            </div>

            {/* Submit */}
            <button
              type='submit'
              disabled={loading}
              className='w-full bg-primary hover:opacity-90 disabled:opacity-60 text-white font-medium py-3 rounded-xl transition-all shadow-md shadow-primary/20'
            >
              {loading ? 'Signing in...' : `Sign In as ${state}`}
            </button>

          </form>

          {/* Footer */}
          <p className='text-center text-xs text-gray-400 mt-7'>
            Secure access to your Prescripto dashboard
          </p>

        </div>

      </div>
    </div>
  )
}

export default Login