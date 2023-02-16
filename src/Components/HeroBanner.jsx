import React from 'react';
import "./styles/hola.css";
import Auris from "../assets/Captura.png";

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
       
        <h3>PRO.</h3>
        <h1>BEYOND.</h1>
        <img src={Auris} alt="headphones" className="hero-banner-image" />
        <p className="beats-solo">iPhone 14 Pro and iPhone 14 Pro Max</p>
        <div>
            <button type="button">Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner