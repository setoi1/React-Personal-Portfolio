import React from 'react';
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';

const Projects = () => {

  return (
    <div className="projects-section">
      <h3 className="header-text">Projects</h3>
      <div className="projects-container">
        <Grid className="projects-container-items" container spacing={10}>
          <Grid item>
            <ProjectCard 
              title="Finance Manager" 
              techStack="Python" 
              description="A simple Finance Managing Application built with Python and tkinter" 
              link="https://github.com/marinom1/FiMan-Financial_Manager" 
            />
          </Grid>
          <Grid item>
            <ProjectCard 
              title="Business Manager" 
              techStack="JavaScript, React"
              description="Work in Progress"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};



/*
      <Grid className="project-grid-container" container spacing={1}>
        <Grid className="project-row-container" container item xs={4} spacing={6}>
          <Row />
        </Grid>
      </Grid>
*/

export default Projects;
