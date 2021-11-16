import React, { useState } from "react";
import { List, ListItem, Container } from "@mui/material";
import MatchListItem from "../matchListItem/matchListItem";

const MatchList = ({ matches }) => {
  const [matchs, setMatchs] = useState(matches);

  const matchesItems = matchs.map((match) => {
    return (
      <Container>
        <ListItem>
          <MatchListItem match={match} />
        </ListItem>
      </Container>
    );
  });

  return <List>{matchesItems}</List>;
};

export default MatchList;
