import React, { useContext } from 'react'
import { DoctorContext } from './context/DoctorContext';
import { AdminContext } from './context/AdminContext';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';
import Login from './pages/Login';
import DoctorAppointments from './pages/Doctor/DoctorAppointments';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorProfile from './pages/Doctor/DoctorProfile';
import Layout from './components/Layout';
import DoctorLayout from './components/DoctorLayout';

const App = () => {

  const { dToken } = useContext(DoctorContext)
  const { aToken } = useContext(AdminContext)

  console.log('the d token is', dToken)
  console.log('the a token is', aToken)

  return dToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/admin-dashboard' element={<Dashboard />} />
            <Route path='/all-appointments' element={<AllAppointments />} />
            <Route path='/add-doctor' element={<AddDoctor />} />
            <Route path='/doctor-list' element={<DoctorsList />} />
          </Route>

          <Route path='/' element={<DoctorLayout />} >
            <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
            <Route path='/doctor-appointments' element={<DoctorAppointments />} />
            <Route path='/doctor-profile' element={<DoctorProfile />} />
          </Route>
        </Routes>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App