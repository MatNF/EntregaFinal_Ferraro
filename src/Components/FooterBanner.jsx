import React from "react";
import "./styles/hola.css";

const FooterBanner = () => {
  return (
    <div className="footer-banner-container-main">
      <div className="footer-banner-container">
        <div className="row-footer">
          <div className="categorias-footer">
            <h5 className="block-title">
              <span>Categorías</span>
            </h5>
            <div className="block-content">
              <ul>
                <li>Mac</li>
                <li>Ipad</li>
                <li>Iphone</li>
                <li>Watch</li>
                <li>Apple TV</li>
                <li>Accesorios</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
