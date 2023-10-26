import React from "react";
import style from "./Credentials.module.scss"; 

function Credentials() {
  return (
    <div className={style["input-form"]}>
      <div className={style["input"]}>
        <input
          type="email"
          className={style["email-form"]}
          placeholder="Email"
        />
      </div>
      <div className={style["input"]}>
        <input
          type="password"
          className={style["password-form"]}
          placeholder="Password"
        />
      </div>
    </div>
  );
}
export default Credentials;
