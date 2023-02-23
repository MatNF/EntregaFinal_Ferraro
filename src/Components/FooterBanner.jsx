import React from "react";
import "./styles/hola.css";

const FooterBanner = () => {
  return (
    <div className="footer-banner-container-main">
      <div className="footer-banner-container">
        <div className="row-footer">
          <div className="categorias-footer sec1">
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
          <div className="categorias-footer sec1">
            <h5 className="block-title">
              <span>Marcas</span>
            </h5>
            <div className="block-content">
              <ul>
                <li>Apple</li>
                <li>Belkin</li>
                <li>Bose</li>
                <li>Tech21</li>
                <li>ZAGG</li>
              </ul>
            </div>
          </div>
          <div className="categorias-footer sec1">
            <h5 className="block-title">
              <span>Lo más buscado</span>
            </h5>
            <div className="block-content">
              <ul>
                <li>iPhone 13 Pro</li>
                <li>iPad Air 10.5</li>
                <li>Macbook Air 13</li>
                <li>AirPods</li>
                <li>Apple Watch Series 5</li>
                <li>Cable Lightning a USB</li>
              </ul>
            </div>
          </div>
          <div className="categorias-footer sec1">
            <h5 className="block-title">
              <span>Información Útil</span>
            </h5>
            <div className="block-content">
              <ul>
                <li>Atención al cliente</li>
                <li>Servicio técnico</li>
                <li>Medios de Pago</li>
                <li>Envíos</li>
                <li>Preguntas Frecuentes</li>
                <li>Tiendas</li>
                <li>Nosotros</li>
                <li>Business</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
