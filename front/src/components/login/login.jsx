import React from "react";
import styles from "./login.module.css";

const Login = () => {
  return (
    <section className={styles.login}>
      <h1>Login</h1>
      <ul className={styles.list}>
        <li>
          <p>Email</p>
          <input />
        </li>
        <li>
          <p>PassWord</p>
          <input />
        </li>
      </ul>
    </section>
  );
};

export default Login;
