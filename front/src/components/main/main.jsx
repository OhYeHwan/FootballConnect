import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./main.module.css";
import MatchList from "../matchList/matchList";

import Matches from "../../static/matches";

const Main = () => {
  return (
    <section className={styles.main}>
      <Header />
      <div className={styles.container}>
        <MatchList matches={Matches}></MatchList>
      </div>
      <Footer />
    </section>
  );
};

export default Main;
