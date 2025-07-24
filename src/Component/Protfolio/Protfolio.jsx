import React from 'react'

import { FaStar } from "react-icons/fa6";

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus } from "react-icons/fa";
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import style from "./protofolio.module.css"


export default function Protfolio() {
  return (
   <>
   <div className="text-center ">


  
  
  <h3 className={`fs-1 fw-bold pt-5 ${style.textProtofolio}`}> PROTOFOLIO COMPONENT</h3>


<div className="d-flex justify-content-center">
 <div className={style.starDiv}>
      <div className={style.line} />
      <div className={style.star}><FaStar /> </div>
      <div className={style.line} />
    </div>    
</div>


</div>


 <div className="container py-4">
      <div className="row g-4">

        <div className="col-12 col-sm-6 col-lg-4">
          <div className={style.imgDiv}>
            <img src={img1} alt="img1" className=' w-100 '/>
            <div className={style.overlay}>
              <span className={style.plus}><FaPlus /></span>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4 ">
          <div className={style.imgDiv}>
            <img src={img2} alt="img2" className=' w-100 '/>
            <div className={style.overlay}>
              <span className={style.plus}><FaPlus /></span>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4">
          <div className={style.imgDiv}>
            <img src={img3} alt="img3" className=' w-100 '/>
            <div className={style.overlay}>
              <span className={style.plus}><FaPlus /></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container py-4">
      <div className="row g-4">

        <div className="col-12 col-sm-6 col-lg-4">
          <div className={style.imgDiv}>
            <img src={img1} alt="img1" className=' w-100 '/>
            <div className={style.overlay}>
              <span className={style.plus}><FaPlus /></span>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4 ">
          <div className={style.imgDiv}>
            <img src={img2} alt="img2" className=' w-100 '/>
            <div className={style.overlay}>
              <span className={style.plus}><FaPlus /></span>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4">
          <div className={style.imgDiv}>
            <img src={img3} alt="img3" className=' w-100 '/>
            <div className={style.overlay}>
              <span className={style.plus}><FaPlus /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
   
   </>
  )
}
