import React from 'react'
import { FaStar } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "../Protfolio/protofolio.module.css"

export default function Contact() {
  return (
    <>
     <div className="text-center ">
    
    
      
      
      <h3 className={`fs-1 fw-bold pt-5 ${style.textProtofolio}`}> CONTACT SECTION</h3>
    
    
    <div className="d-flex justify-content-center">
     <div className={style.starDiv}>
          <div className={style.line} />
          <div className={style.star}><FaStar /> </div>
          <div className={style.line} />
        </div>    
    </div>
    
    
    </div>

     <div className="container mt-5">

      <form className="w-100 mx-auto" style={{ maxWidth: '500px' }}>

        <div className="mb-3">
          <input
            type="text"
            placeholder="userName"
            className="form-control border-bottom border-2 border-gray rounded-0 shadow-none  pb-4"
            style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
          />
        </div>


       <div className="mb-3">
          <input
            type="text"
            placeholder="userAge"
            className="form-control border-bottom border-2 border-gray rounded-0 shadow-none  pb-4"
            style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
          />
        </div>

      <div className="mb-3">
          <input
            type="text"
            placeholder="userName"
            className="form-control border-bottom border-2 border-gray rounded-0 shadow-none  pb-4"
            style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            placeholder="userName"
            className="form-control border-bottom border-2 border-gray rounded-0 shadow-none pb-4"
            style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
          />
        </div>

        <button type="submit" className="btn mb-5 btnlast">
          send Message
        </button>
      </form>
    </div>
    

    </>
    
  )
}
