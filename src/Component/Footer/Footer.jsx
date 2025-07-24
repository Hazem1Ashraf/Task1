import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="text-white pt-5 mt5 bgc">
        <div className=" pt-5 pb-5 ">
          <div className="row ">
            <div className="col-12 col-sm-4 col-lg-4 mb-3  text-center">
              <div className="text-center">
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p className="mt-3">Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-lg-4 mb-3  text-center ">
              <div className=" text-center">
                <h3>AROUND THE WEB</h3>
                <div className="d-flex justify-content-center gap-3 mt-2">
                  <div className="border border-white rounded-circle p-2">
                    <FaFacebookF />
                  </div>
                  <div className="border border-white rounded-circle p-2">
                    <FaTwitter />
                  </div>
                  <div className="border border-white rounded-circle p-2">
                    {" "}
                    <FaLinkedinIn />{" "}
                  </div>
                  <div className="border border-white rounded-circle p-2">
                    {" "}
                    <FaGlobe />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 col-lg-4 mb-3 text-center ">
              <div className=" text-center">
                <h3>ABOUT FREELANCER</h3>
                <p className="  ">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary text-center py-3 mt-4 bgc2">
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
