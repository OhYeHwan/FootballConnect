import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./main.module.css";
import MatchList from "../matchList/matchList";

const Main = () => {
  return (
    <section className={styles.main}>
      <Header />
      <div className={styles.container}>
        <MatchList></MatchList>
      </div>
      <Footer />
    </section>
  );
};

export default Main;
