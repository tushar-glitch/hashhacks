import React from 'react';
import '../styles/services.css';
import Doc from "../images/doc.svg";
import ChatAI from "../images/chat.svg";
import Appoint from "../images/appoint.svg";
import { Link } from 'react-router-dom';

const Services = () => {
  return (

    <div className='home_services'>
    <div className="home_service_section">
        <div className="service_head">
          Services
        </div>
        <div className="home_services">
        <div className="cd card_1">
          <div className="serv_img">
            <img src={Doc} alt="Doctors" />
          </div>
          <div className="serv_head">
          Doctors
            
          </div>
          <div className="serv_cont">
          Access a network of experienced and compassionate doctors offering comprehensive medical consultations. From routine check-ups to specialized treatments, receive personalized care and guidance tailored to your unique health needs.
          </div>
          <div className="serv_btn">
            <Link to="/doctors" ><button type="submit">Consult Now</button></Link>
          </div>
        </div>
        <div className="cd card_1">
          <div className="serv_img">
            <img src={ChatAI} alt="ChatAI" />
          </div>
          <div className="serv_head">
          Quick AI Check up
          </div>
          <div className="serv_cont">
          Utilize cutting-edge AI technology to perform a rapid symptom assessment. Our intelligent system analyzes your reported symptoms and provides instant feedback, suggesting potential conditions and recommending suitable medications or further medical attention.
          </div>
          <div className="serv_btn">
            <Link to="/checkup"><button type="submit">Check Up</button></Link>
          </div>
        </div>
        <div className="cd card_1">
          <div className="serv_img">
            <img src={Appoint} alt="DocT" />
          </div>
          <div className="serv_head">
            Appointment
          </div>
          <div className="serv_cont">
          Streamline your healthcare journey with our user-friendly appointment booking system. Browse through available slots for your preferred doctors, select a convenient time that fits your schedule, and confirm your booking with ease. Say goodbye to long waiting times and book your appointments hassle-free.
          </div>
          <div className="serv_btn">
          <Link to="/appointments">
                <button type="submit">Book Now!</button>
              </Link>
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Services;