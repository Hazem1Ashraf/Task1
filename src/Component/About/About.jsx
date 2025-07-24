import React from "react";
import { FaStar } from "react-icons/fa6";

export default function About() {
  return (
    <>
      <div className="bg1 text-center pt-5">
        <h3 className="fs-1 fw-bold text-white  pt-5">ABOUT COMPONENT</h3>


        <div className="d-flex justify-content-center">
          <div className="starDiv">
            <div className="line " />
            <div className="star">
              <FaStar />{" "}
            </div>
            <div className="line" />
          </div>
        </div>


<div className="container  text-white">
          <div className="row pb-5">
          <div className="col-12 col-sm-6 col-lg-6 mb-3 ">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-6 mb-3 ">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
</div>
      
      </div>
    </>
  );
}
