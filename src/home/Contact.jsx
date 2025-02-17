import React from "react";
import img1 from "../assets/img/17580.jpg";
import { FaPhone } from "react-icons/fa6";
import { MdEmail, MdLocationPin } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

import img2 from "../assets/img/30509948-b594-4cba-957b-4b62425dacfb.jpg";

const Contact = () => {
  AOS.init();
  return (
    <div className="bg-center bg-cover"  style={{
      backgroundImage: `url(${img1})`,
    }} >
      <div
        className="container mx-auto px-3 "
       
      >
        <div id="contact" className="">
          <div className="hero  py-5 "  >
            <div className="hero-content lg:items-end flex-col lg:flex-row">
              <div className="text-center mb-5 lg:text-left">
                <h1 className="text-4xl font-bold">
                  Get in <span className="blue">Touch</span>
                </h1>
                <p className="py-6 max-w-2xl">
                Looking for your dream home or the perfect investment property? We’re here to help! Whether you have questions about buying, selling, or renting, our expert team is ready to assist you. Reach out to us today.
                </p>
                <div
                className=" rounded-lg  p-10 bg-center"
                style={{
                  backgroundImage: `url(${img2})`,
                }}
              >
                <h2 className="text-3xl mb-5 font-semibold">Office Address</h2>
                <p> 250,251,251/2 South Pirerbag Mirpur,Dhaka-1216 <br /> (60 Feet Amtola Bazar) </p>
              </div>
               
              </div>
              <div className="grid md:grid-cols-2  gap-5 ">
                  <a href="tel:+8801741715265">
                    <div
                      data-aos="flip-down"
                      data-aos-duration="500"
                      className=" bg-white  rounded-md shrink-0 hover:shadow-2xl text-center  p-3 "
                    >
                      <FaPhone className="text-4xl blue mx-auto mb-3 " />
                      <p>+8801971347880</p>
                    </div>
                  </a>

                  <a href="mailto:rakib65rkb@gmail.com">
                    <div
                      data-aos="flip-up"
                      data-aos-duration="500"
                      className=" bg-white rounded-md shrink-0 hover:shadow-2xl text-center  p-3 "
                    >
                      <MdEmail className="text-4xl blue mx-auto mb-3 " />{" "}
                      <p>nabonirconstraction@gmail.com</p>
                    </div>
                  </a>

                  <a href="https://wa.me/qr/4VQV7YNHZTPOF1" target="_blank">
                    <div
                      data-aos="flip-down"
                      data-aos-duration="1000"
                      className=" bg-white flex items-center mb-5 rounded-md shrink-0 hover:shadow-2xl text-center  p-3 "
                    >
                      {/* <FaWhatsapp className="text-4xl text-purple-700 mx-auto mb-3 " /> */}
                      <img
                        className="w-16  mx-auto"
                        src="https://i.ibb.co.com/d0LbWcJH/Whats-App-Image-2025-02-02-at-17-08-16-e2274e7a.jpg"
                        alt=""
                      />
                    </div>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/p8CsRcmugXLsbdYY9"
                    target="_blank"
                  >
                    <div
                      data-aos="flip-up"
                      data-aos-duration="1000"
                      className=" bg-white   rounded-md shrink-0 hover:shadow-2xl text-center  p-3 "
                    >
                      <MdLocationPin className="text-4xl mt-1  blue mx-auto  " />{" "}
                      <p className="">Mirpur-2, Dhaka, Bangladesh</p>
                    </div>
                  </a>
                </div>
           
            
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
