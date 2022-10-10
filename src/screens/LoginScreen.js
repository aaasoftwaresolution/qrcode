import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import axios from "axios";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    const payload = {
      email: email,
      password: password,
    };
    try {
      axios({
        method: "post",
        url: "https://qrorder.itrends.in/api/login",
        data: payload, // you are sending body instead
        headers: {
          "Content-Type": "application/json",
        },
      }).then(function (response) {
        // handle success

        if (response.data.success === false) {
          alert("login credentials are invaild");
        } else {
          // console.log(response.data);
          localStorage.setItem("user-info", JSON.stringify(response.data.data));
          navigate("/home");
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const guest_login = () => {
    const users_data = {
      id: 2,
      name: "guest",
      email: "guest@gmail.com",
      role: "2",
    };
    localStorage.setItem("user-info", JSON.stringify(users_data));
    navigate("/home");
  };

  useEffect(() => {
    const user = localStorage.getItem("user-info");
    console.log("user", user);

    if (user === null) {
      console.log("user not found");
    } else {
      alert("welcome");
      navigate("/home");
    }
  }, []);
  return (
    <>
      <div class="wrapper">
        <div class="logo">
          <img
            src="https://www.freepnglogos.com/uploads/whatsapp-logo-png-transparent-33.png"
            alt=""
          />
        </div>
        <div class="text-center mt-4 name">QRCODE</div>
        <form class="p-3 mt-3">
          <div class="form-field d-flex align-items-center">
            <span class="far fa-user"></span>
            <input
              type="email"
              name="house_name"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              autoComplete="off"
            />
          </div>
          <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input
              name="demo_demo"
              type="password"
              autoComplete="off"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button class="btn mt-3" type="button" onClick={(e) => login(e)}>
            {" "}
            Staff Login
          </button>
          <button type="button" onClick={() => guest_login()} class="btn mt-3">
            Guest
          </button>
        </form>
        <div class="text-center fs-6">
          {/* <a href="#">Forget password?</a> or <a href="#">Sign up</a> */}
        </div>
      </div>
    </>
  );
}
