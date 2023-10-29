import React from "react";
import { Link } from "react-router-dom";
import HomeBack from "../assets/homeBack.jpeg";
import '../styles/home.css'
export default function Home() {
  return (
    <div className="mainPage" style={{ backgroundImage: `url(${HomeBack})` }}>
      <div className="order">
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  );
}
