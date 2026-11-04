import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Navbar />

      <div className="flex h-[calc(100vh-80px)] overflow-hidden">
  <Sidebar />

  <main className="flex-1 overflow-y-auto overflow-x-hidden">
    <Outlet />
  </main>
</div>

    </div>
  )
}

export default Layout