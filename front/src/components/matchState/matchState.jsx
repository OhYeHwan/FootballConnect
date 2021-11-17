import React from "react";
import Box from "@mui/material/Box";
import styles from "./matchState.module.css";

const MatchState = (props) => {
  const matchState = props.children;

  return (
    <Box
      className={
        matchState === "신청가능" ? styles.possible : styles.impossible
      }
    >
      {props.children}
    </Box>
  );
};

export default MatchState;
