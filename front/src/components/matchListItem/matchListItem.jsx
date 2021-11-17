import React from "react";
import { Paper } from "@mui/material";
import MatchDday from "../matchDday/matchDday";
import MatchState from "../matchState/matchState";
import Button from "@mui/material/Button";
import MatchTitle from "../matchTitle/matchTitle";
import styles from "./matchListItem.module.css";

const MatchListItem = ({ match }) => {
  return (
    <Paper className={styles.paper}>
      <Button variant="text" color="success" className={styles.btn}>
        <div className={styles.container}>
          <div>
            <MatchDday>1</MatchDday>
          </div>
          <div>
            <MatchTitle match={match} />
          </div>
          <div>
            <MatchState>{match.state}</MatchState>
          </div>
        </div>
      </Button>
    </Paper>
  );
};

export default MatchListItem;
