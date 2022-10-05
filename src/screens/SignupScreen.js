import React from 'react'
import "../styles/login.css";

export default function SignupScreen() {
  return (
    <div>
      <div class="wrapper">
        <div class="logo">
            <img src="https://www.freepnglogos.com/uploads/whatsapp-logo-png-transparent-33.png" alt=""/>
        </div>
        <div class="text-center mt-4 name">
            SIGNUP
        </div>
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user" ></span>
                <input type="text" name="userName" id="userName" placeholder="Name"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fa fa-envelope-o"></span>
                <input type="text" name="userName" id="userName" placeholder="Email"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Mobilenumber"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="confirm Password"/>
            </div>
            <button class="btn mt-3"> Signup</button>
            <button class="btn mt-3" >Back</button>
        </form>
        <div class="text-center fs-6">
            {/* <a href="#">Forget password?</a> or <a href="#">Sign up</a> */}
        </div>
    </div>
    </div>
  )
}
