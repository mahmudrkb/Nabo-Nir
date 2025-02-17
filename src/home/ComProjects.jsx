import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

import img1 from "../assets/img/received_379031627684480.jpeg"
import img2 from "../assets/img/received_400890128833797.jpeg"
import img3 from "../assets/img/Screenshot_20250202_172822_Maps.jpg"

const ComProjects = () => {
  return (
    <div className="my-5 ">
      <div className=" container mx-auto p-5 ">
        <div>
          <h1 className="text-3xl my-7 text-center font-bold lg:text-4xl ">
            {" "}
            Our Property
          </h1>
        </div>

        <div className="card  lg:card-side py-3 bg-base-200 shadow-xl">
          <figure className="lg:w-1/2 ">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
                 <SwiperSlide>
                
                <img className=" h-full w-full"
                  src={img3}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="" />
              </SwiperSlide>
        
             
            </Swiper>
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title lg:text-2xl font-bold">Amtola Nabanir</h2>
            <address> 60 Feet, Amtola Bazar, Mirpur-2, Dhaka </address>
            
            <p>Nabo Nir is a state-of-the-art residential building located in the heart of Mirpur. Designed with modern architecture and premium amenities, Nabo Nir offers a luxurious lifestyle for families and professionals alike. With spacious apartments, 24/7 security, and easy access to schools, shopping centers, and public transportation, Nabo Nir is the perfect place to call home.</p>
            <h4 className="font-bold">Amenities:</h4>
            <ul className="list-disc ml-4 ">
                <li> 24/7 Security</li>
                <li> Rooftop Garden</li>
                <li> Underground Parking</li>
                <li> High-Speed Elevators</li>
            </ul>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Listen</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComProjects;
