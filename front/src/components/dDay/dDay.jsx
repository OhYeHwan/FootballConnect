import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./dDay.module.css";

const Dday = (props) => {
  const day = props.children;

  return (
    <Chip
      label={`D - ${day}`}
      color={day <= 1 ? "error" : "success"}
      variant="outlined"
      className={day <= 1 ? styles.error : styles.success}
    />
  );
};

export default Dday;
