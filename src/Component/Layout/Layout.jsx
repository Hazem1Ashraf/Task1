import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div className='container-fluid p-0'>
      <Navbar className=''/>
    </div>

        <Outlet/>

      <div className="container-fluid p-0 overflow-hidden">
      <Footer/>
      </div>
</>
  )
}
