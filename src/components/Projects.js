import React from 'react';
import Row from '../components/Row';
import { Grid } from '@material-ui/core';

const Projects = () => {
  return (
    <div className="projects-section">
      <h3 className="header-text">Projects</h3>
      <Grid className="project-grid-container" container spacing={1}>
        <Grid className="project-row-container" container item xs={3} spacing={4}>
          <Row />
          <Row />
          <Row />
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
