import React from 'react'
import { NavLink ,Link } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.js'
export default function Navbar() {
  return (
   <>
   
    <nav className="navbar navbar-expand-lg bgc">
<div className="container ">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link fs-2 text-white fw-bold" to="/">START FRAMEWORK</Link>

          </li>
        </ul>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link fs-6 mx-3 text-white fw-bold" to="/About">ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-6  mx-3 text-white fw-bold" to="/Protfolio">PROTFOLIO</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-6 text-white fw-bold" to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
        </div>
    </nav>



   
   </>
  )
}



