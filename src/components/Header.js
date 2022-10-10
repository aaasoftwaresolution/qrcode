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
          className="img-fluid img-style"
          
          src="https://cdn.dribbble.com/users/3562547/screenshots/11100852/media/e2e975f65aee348f0b5ba769912f9463.png"
          alt="restaurant bg"
        />
        <img
          className=" image2 img-style2"
          src="https://img.icons8.com/fluency/344/exit.png"
          alt="restauran"
          onClick={logout}
        />
      </div>
    </div>
  );
}
