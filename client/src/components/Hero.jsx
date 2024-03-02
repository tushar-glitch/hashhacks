import React, { useEffect, useState } from "react";
import image from "../images/main.svg";
import { useNavigate } from "react-router-dom";
import "../styles/hero.css";

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = "Coompletely Free, zero hidden costs! Quick check up through AI";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setTypedText(prevText => prevText + textToType[currentIndex]);
      currentIndex++;
      if (currentIndex === textToType.length-1) {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);
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
        <p className="typing-text">{typedText}
        </p>

        <button className="started" onClick={reg}>Get Started</button>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
          className="floating-image"
        />
      </div>
    </section>
    <section className="boot_col">
        </section></>
  );
};

export default Hero;