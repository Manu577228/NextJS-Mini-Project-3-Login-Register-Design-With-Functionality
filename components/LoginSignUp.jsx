"use client";
import user_icon from "./assets/person.png";
import email_icon from "./assets/email.png";
import password_icon from "./assets/password.png";
import Image from "next/image";
import "./LoginSignUp.css";
import { useState } from "react";

function LoginSignUp() {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <Image className="img" src={user_icon} alt="UserICon" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <Image className="img" src={email_icon} alt="EamilIcon" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <Image className="img" src={password_icon} alt="PasswordIcon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Register" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password <span>Click Me!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Register" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Register");
          }}
        >
          Register
        </div>
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
