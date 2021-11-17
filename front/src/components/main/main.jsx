import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./main.module.css";
import Matches from "../matches/matches";

const Main = () => {
  return (
    <section className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Matches></Matches>
      </div>
      <Footer />
    </section>
  );
};

export default Main;
