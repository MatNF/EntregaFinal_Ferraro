import { background } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Eventos = () => {

  const handleKeyDown = (event) => {
    const vowels = "aeiouAEIOU";
    vowels.includes(event.key) ? event.preventDefault() : console.log(event.key);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        border: "1px solid black",
      }}
    >
      <form>
        <input
          style={{
            background: "grey",
            margin: "10px",
            color: "white",
            height: "50px",
            width: "400px",
            fontSize: "20pt",
          }}
          type="text"
          onKeyDown={handleKeyDown}
        />
      </form>
    </div>
  );
};

export default Eventos;
