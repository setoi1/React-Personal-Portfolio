import React from 'react';
import { Grid } from '@material-ui/core';
import ProjectCard from '../components/ProjectCard';

const Row = () => {

  const value = 6;

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={value}>
          <ProjectCard 
            title="Project 1" 
            description="Description 1"
          />
        </Grid>
        <Grid item xs={value}>
          <ProjectCard 
            title="Project 2" 
            description="Description 2" 
          />
        </Grid>
        <Grid item xs={value}>
          <ProjectCard 
            title="Project 3" 
            description="Description 3"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Row;
