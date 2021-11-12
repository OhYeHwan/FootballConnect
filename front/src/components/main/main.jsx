import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./main.module.css";

const Main = () => {
  return (
    <section className={styles.main}>
      <Header />
      <div className={styles.container}></div>
      <Footer />
    </section>
  );
};

export default Main;
