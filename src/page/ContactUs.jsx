import React from 'react';
import Contact from '../home/Contact';
import img1 from "../assets/img/contact_us.jpg"

const ContactUs = () => {
    return (
        <div>
            <div>
                 <div className="">
                      <div className="container mx-auto  ">
                        <div
                          className="hero min-h-96"
                          style={{
                            backgroundImage: `url(${img1})`,
                          }}
                        >
                          <div className="hero-overlay bg-opacity-60"></div>
                          <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                             
                              <h1 className="mb-5 text-5xl font-bold text-white ">Contact US</h1>
                              <p>We’re here to help! Our team is ready to assist you. Reach out to us via phone, email and we’ll get back to you as soon as possible. Your feedback and inquiries are important to us—let’s connect!</p>
                
                           
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


            </div>
            <div><Contact></Contact></div>
            
        </div>
    );
};

export default ContactUs;