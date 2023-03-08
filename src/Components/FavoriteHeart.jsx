import React, { useState } from "react";
import "./styles/hola.css";

const FavoriteHeart = () => {
  const [favorito, setFavorito] = useState(false);

  const handleFavoritoClick = () => {
    setFavorito(!favorito);
  };

  return (
    <div className="heart-container">
      <button onClick={handleFavoritoClick} className="favorite-button">
        <span
          className="material-symbols-outlined hearty"
          style={{ color: favorito ? "#c12534" : "lightgray" }}
        >
          favorite
        </span>
      </button>
    </div>
  );
};

export default FavoriteHeart;
