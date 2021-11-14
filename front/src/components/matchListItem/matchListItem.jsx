import React, { useState } from "react";
import { Paper, Grid, Typography } from "@mui/material";

const MatchListItem = (props) => {
  const [match, setMatch] = useState(props.match);

  return (
    <Paper>
      <Grid container spacing={3}>
        <Grid item>D-1</Grid>
        <Grid item>
          <Typography component="h5" variant="h5">
            {match.data}
          </Typography>
          <Typography component="h4" variant="h4">
            {match.title}
          </Typography>
        </Grid>
        <Grid item>{match.state}</Grid>
      </Grid>
    </Paper>
  );
};

export default MatchListItem;
