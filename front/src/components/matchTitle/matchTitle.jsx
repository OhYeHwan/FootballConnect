import React from "react";
import { Typography } from "@mui/material";
import styles from "./matchTitle.module.css";

const MatchTitle = ({ match }) => {
  return (
    <>
      <Typography className={styles.date} component="h7" variant="h7">
        {match.date} {match.start_time} ~ {match.end_time}
      </Typography>
      <Typography className={styles.title} component="h5" variant="h5">
        {match.title}
      </Typography>
    </>
  );
};

export default MatchTitle;
