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
          A comprehensive inquiry form service is provided, enabling users to effortlessly gather information about all the required documents for completion. Users can fill out the form to receive detailed information on the documents necessary for their specific needs.
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
          An AI-powered chat service is available, allowing users to ask questions related to their document search queries. This service assists users by addressing specific issues they encounter while searching through documents, providing real-time help and guidance.
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
          The service offers users the opportunity to test the verification of their documents before officially submitting them to the final portal. This means users can ensure the accuracy and suitability of their documents through a trial process before making the final submission.
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