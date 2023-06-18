import React from 'react';
import "../css/lenguaje.css";

export function Lenguaje({ cambiarIdioma }) {
  const handleClick = () => {
    cambiarIdioma();
  };

  return (
    <form action="" method="post">
      <span className="en">Spanish</span>
      <input type="checkbox" className="check" onClick={handleClick} />
      <span className="es">English</span>
    </form>
  );
}













