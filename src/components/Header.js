import React from "react";
import "../styles/logout.css";

export default function Header() {
  function logout() {
    localStorage.clear();
    window.location.href = "/";
  }
  return (
    <div>
      <div
        className="container2 d-flex justify-content-center"
        data-aos="zoom-in"
      >
        <img
          className="img-fluid"
          src="./images/header2.jpg"
          alt="restaurant bg"
        />
        <img
          className=" image2"
          src="./images/logout.png"
          alt="restauran"
          onClick={logout}
        />
      </div>
    </div>
  );
}
