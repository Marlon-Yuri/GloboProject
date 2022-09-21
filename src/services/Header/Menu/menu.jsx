import React from "react";
import {Link} from 'react-router-dom'
import "../Menu/menu.css";

export default function App() {
  const hamburger = () => {
    let nav = document.getElementById("nav");
    nav.classList.toggle("hide");
  };

  return (
    <div className="container">
      <div className="hamburger" onClick={hamburger}>
        <div className="hamburger__container">
          <input type="checkbox" id="toggle" />
          <div className="hambuger">
            <div className="hambuger__item"></div>
            <div className="hambuger__item"></div>
            <div className="hambuger__item"></div>
          </div>
        </div>
      </div>
      <nav className="nav" id="nav">
        <ul>
         <Link style={{textDecoration: 'none'}} to='/brasil'><li>Brasil </li></Link>
         <Link style={{textDecoration: 'none'}} to='/mundo'><li>Mundo</li></Link> 
        </ul>
      </nav>
    </div>
  );
}
