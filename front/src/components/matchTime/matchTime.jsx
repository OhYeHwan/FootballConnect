import React from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

const MatchTime = (props) => {
  const match = props.match;

  return (
    <Chip
      label={`${match.start_time} ~ ${match.end_time}`}
      variant="outlined"
      avatar={<Avatar>{match.time}</Avatar>}
    />
  );
};

export default MatchTime;
