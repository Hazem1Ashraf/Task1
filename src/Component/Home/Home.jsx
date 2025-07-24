import React from 'react'
import image1 from '../../assets/avataaars.svg'
import { FaStar } from "react-icons/fa6";

export default function Home() {
  return (
  <>

<div className="bg1 text-center ">


  <img src={image1} alt="img1" className='mb-3 wt  pt-5'/>
  

  
  <h3 className='fs-1 fw-bold text-white  pt-5'>START FRAMEWORK</h3>


<div className="d-flex justify-content-center">
 <div className="starDiv">
      <div className="line " />
      <div className="star"><FaStar /> </div>
      <div className="line" />
    </div>    
</div>

  <p className=' text-white m-0  pb-5'>Graphic Artist - Web Designer - Illustrator</p>

</div>

  </>
  )
}
