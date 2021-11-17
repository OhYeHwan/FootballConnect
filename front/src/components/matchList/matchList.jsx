import React from "react";
import { List, ListItem } from "@mui/material";
import MatchListItem from "../matchListItem/matchListItem";

const MatchList = ({ matches }) => {
  const matchesItems = matches.map((match) => {
    return (
      <List key={match.id}>
        <ListItem sx={{ justifyContent: "center", padding: 0 }}>
          <MatchListItem match={match} />
        </ListItem>
      </List>
    );
  });

  return <List>{matchesItems}</List>;
};

export default MatchList;
