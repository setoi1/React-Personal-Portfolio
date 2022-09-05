import React from 'react';
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard';

const Projects = () => {

  return (
    <div className="projects-page">
      <div className="section-header-text">
        <h3>Projects</h3>
      </div>
      <Grid className="projects-container-items" container spacing={10}>
        <Grid item>
          <ProjectCard 
            title="SwiftAPI" 
            techStack="Node.js, ExpressJS, MongoDB, React"
            description="
              A platform for developers to monetize their APIs and for users to purchase APIs in just a few clicks, 
              as well as providing a proxy server for request validation between users and developers.
            "
            link="https://github.com/andrewgalvin/SwiftAPI"
          />
        </Grid>
        <Grid item>
          <ProjectCard 
            title="Finance Manager" 
            techStack="Python" 
            description="A finance manager application built with Python." 
            link="https://github.com/marinom1/FiMan-Financial_Manager"
          />
        </Grid>
        <Grid item>
          <ProjectCard 
            title="Stock Market Discord Bot" 
            techStack="JavaScript / Node.js" 
            description="A discord bot to display user-requested stock information such as news, prices, and company information." 
            link="https://github.com/setoi1/Stock-Market-Discord-Bot"
          />
        </Grid>
        <Grid item>
          <ProjectCard 
            title="Online Web Therapy" 
            techStack="HTML / CSS, PHP, JavaScript" 
            description="A website targeted towards users who feel anxious or hesistant to seek help regarding their mental well-being from certified therapists." 
            link="https://github.com/setoi1/Online-Therapy-Forum"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
