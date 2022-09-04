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
              title="SwiftAPI" 
              techStack="TypeScript, ExpressJS, MongoDB, ReactJS"
              date="Summer 2022"
              description="A platform for developers to monetize their APIs and for users to purchase APIs in just a few clicks, as well as providing a proxy server for request validation between users and developers."
              link="https://github.com/andrewgalvin/SwiftAPI"
            />
          </Grid>
          <Grid item>
            <ProjectCard 
              title="Finance Manager" 
              techStack="Python" 
              date="Spring 2021"
              description="A simple Finance Managing Application built with Python and tkinter." 
              link="https://github.com/marinom1/FiMan-Financial_Manager"
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

export default Projects;
