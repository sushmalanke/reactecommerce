import React from "react";
import style from "./SignIn.module.scss";
import BrandInfo from "../brand/BrandInfo";
import Credentials from "../inputform/Credentials";
import { Link, NavLink } from "react-router-dom";
function SignIn() {
  return (
    <div className={style["signin-container"]}>
      <div className={style["backgroundoverlay"]}></div>
      <div className={style["sigin-data"]}>
        <BrandInfo></BrandInfo>
        <Credentials></Credentials>
        <div className={style["forgotpass"]}>
          <a href="#" className={style["forgotpass-link"]}>
            forgot password
          </a>
        </div>
        <div className={style["signup"]}>
          <button type="submit" className={style["btn btn-primary"]}>
            Sign In
          </button>
        </div>
        <p>
          Didn't have any account? 
          <Link to="./signup" className={style["signup-link"]}>
             Sign Up here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
