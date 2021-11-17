import React from "react";
import MatchDate from "../matchDate/matchDate";
import MatchTime from "../matchTime/matchTime";
import styles from "./matchTitle.module.css";

const MatchTitle = ({ match }) => {
  return (
    <>
      <div className={styles.date}>
        <MatchDate match={match} /> <MatchTime match={match} />
      </div>
      <div className={styles.title}>{match.title}</div>
    </>
  );
};

export default MatchTitle;
