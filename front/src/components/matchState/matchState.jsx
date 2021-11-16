import React from "react";
import Box from "@mui/material/Box";
import styles from "./matchState.module.css";

const MatchState = (props) => {
  return <Box className={styles.box}>{props.children}</Box>;
};

export default MatchState;
