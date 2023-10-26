import React from "react";
import style from "./SignUp.module.scss";
import BrandInfo from "../brand/BrandInfo";
import Credentials from "../inputform/Credentials";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className={style["signup-container"]}>
      <div className={style["backgroundoverlay"]}></div>
      <div className={style["sigup-data"]}>
        <BrandInfo></BrandInfo>
        <Credentials></Credentials>
        <div className={style["signup"]}>
          <button type="submit" className={style["btn btn-primary"]}>
            Sign Up
          </button>
        </div>
        <p>
          If you have an account?
          <Link to="/" className={style["signin-link"]}>
            Sign In here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
