import React, { useState } from "react";
import { Paper, Grid, Typography } from "@mui/material";
import Dday from "../dDay/dDay";
import MatchState from "../matchState/matchState";
import Button from "@mui/material/Button";
import MatchTitle from "../matchTitle/matchTitle";

const MatchListItem = (props) => {
  const [match, setMatch] = useState(props.match);

  return (
    <Paper>
      <Button variant="text">
        <Grid
          container
          direction="row"
          justifyContent="cent"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <Dday>1</Dday>
          </Grid>
          <Grid item>
            <MatchTitle match={match} />
          </Grid>
          <Grid item>
            <MatchState>{match.state}</MatchState>
          </Grid>
        </Grid>
      </Button>
    </Paper>
  );
};

export default MatchListItem;
