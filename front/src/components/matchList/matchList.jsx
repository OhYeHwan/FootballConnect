import React, { useState } from "react";
import { List, ListItem } from "@mui/material";
import MatchListItem from "../matchListItem/matchListItem";

const MatchList = ({ matches }) => {
  const [matchs, setMatchs] = useState(matches);

  return (
    <List>
      <ListItem>
        <MatchListItem match={matchs[0]} />
      </ListItem>
      <ListItem>
        <MatchListItem match={matchs[1]} />
      </ListItem>
      <ListItem>
        <MatchListItem match={matchs[2]} />
      </ListItem>
    </List>
  );
};

export default MatchList;
