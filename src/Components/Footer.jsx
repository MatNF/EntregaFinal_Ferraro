import React from 'react';
import "./styles/hola.css";
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 IMiracle - All Rights Reserverd</p>
      <p className="icons">
        <AiFillFacebook/>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer