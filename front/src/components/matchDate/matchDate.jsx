import React from "react";
import Chip from "@mui/material/Chip";

const MatchDate = (props) => {
  const match = props.match;

  return <Chip label={match.date} variant="outlined" />;
};

export default MatchDate;
