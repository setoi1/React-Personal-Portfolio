import React from 'react';
import { Grid, Paper } from '@material-ui/core';

const Row = () => {
  return (
    <>
      <Grid item xs={4}>
        <Paper className="project-element" elevation={3}>Item 1</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className="project-element" elevation={3}>Item 2</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className="project-element" elevation={3}>Item 3</Paper>
      </Grid>
    </>
  );
}

export default Row;
