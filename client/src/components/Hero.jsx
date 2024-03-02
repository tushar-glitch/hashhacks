import React from "react";
import image from "../images/main.svg";
import { useNavigate } from "react-router-dom";
import "../styles/hero.css";

const Hero = () => {
    const  navigate = useNavigate();
    function reg(){
        navigate("/register");
    }
  return (<>
    <section className="hero">
      <div className="hero-content">
        <h1>
        Free & Quick <br />
        Consultations
        </h1>
        <p>Completely Free, zero hidden costs! Quick check up through AI
        </p>

        <button className="started" onClick={reg}>Get Started</button>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
    <section className="boot_col">
        </section></>
  );
};

export default Hero;