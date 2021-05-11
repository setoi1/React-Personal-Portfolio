import React from 'react';
import { Grid, Button } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import { Link } from 'react-scroll';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

const Projects = () => {

  return (
    <div className="projects-section">
      <div className="projects-container">
        <div className="section-header-text">
          <h3>Projects</h3>
        </div>
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
        <div className="page-transition">
          <Link className="contacts-section-link"  to="contacts-section" spy={true} smooth={true} duration={750}>
            <Button> 
              <ArrowDropDownCircleIcon className="page-transition" />
            </Button>
          </Link>
        </div>
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
